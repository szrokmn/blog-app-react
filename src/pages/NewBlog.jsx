import Box from "@mui/material/Box";
import { Button, MenuItem, TextField, Typography } from "@mui/material";
import useBlogCall from "../hooks/useBlogCalls";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function NewBlogModal() {
  const { postBlogData, putBlogData, getBlogData } = useBlogCall();
 
  const { categories } = useSelector((state) => state.blog);

  const [info, setInfo] = useState({
    title: "",
    image: "",
    category: "",
    status: "",
    content: "",   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (info.id) {
      putBlogData("blogs", info);
    } else {
      postBlogData("blogs", info);
    }
    // handleClose();
    setInfo({ title: "", image: "", category: "", status: "", content: "" });
  };

  useEffect(() => {
    getBlogData("categories")   
  }, [])
  
  const newBlogStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={newBlogStyle}>
      <Typography sx={{textAlign:"center", fontSize:"1.3rem", marginBottom:"1.8rem", fontWeight:"900"}}>NEW BLOG</Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        onSubmit={handleSubmit}
        component={"form"}
      >
        <TextField
          label="Title"
          name="title"
          id="title"
          type="text"
          required
          variant="outlined"
          value={info?.title}
          onChange={handleChange}
        />
        <TextField
          label="Image"
          name="image"
          id="image"
          type="url"
          required
          variant="outlined"
          value={info?.image}
          onChange={handleChange}
        />

        <TextField
          label="Category"
          name="category"
          id="category"
          type="text"          
          required
          select         
          variant="outlined"
          value={info?.category || ""}
          onChange={handleChange}
        >
          <MenuItem>Please Chooese...</MenuItem>
          {categories?.map((category) => {
            return <MenuItem key={category.id} value={category.id}>
            {category?.name}
            </MenuItem>;
          })}
        </TextField>

        <TextField
          label="Status"
          name="status"
          id="status"       
          type="text"   
          required
          select         
          variant="outlined"
          value={info?.status || ""}
          onChange={handleChange}
        >
          <MenuItem>Please Chooese...</MenuItem>
          <MenuItem value="d">Draft</MenuItem>
          <MenuItem value="p">Published</MenuItem>          
        </TextField>

        <TextField
            placeholder="Content"
            multiline
            rows={2}      
            type="text"       
            required            
            name="content"
            label="Content"
            id="content"
            color="success"
            value={info?.content || ""}
            onChange={handleChange}
          />

        <Button type="submit" variant="contained">
          New Blog
        </Button>
      </Box>
    </Box>
  );
}
