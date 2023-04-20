import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useBlogCall from "../../hooks/useBlogCalls";
import DeleteModal from "../blog/DeleteModal";


export default function Cards({ item }) {

  const { deleteBlogData } = useBlogCall()
  // const { image, title, content, publish_date, author, post_views, comment_count, likes, likes_n } = item; 

  return (
    <Card sx={{
        p: 2,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item?.content}
        </Typography>
        <CardMedia
          sx={{ p:1, objectFit: "contain", height: "130px"}}
          image={item?.image}
          title="firm-img"
        />
        <Typography variant="body2" color="text.secondary">
          {item?.publish_date}
        </Typography>
      </CardContent>
      <CardActions >
        <EditIcon onClick={() => { 
          // setOpen(true) 
          // setInfo(firm)
          }}/>
        <DeleteIcon  onClick={() => deleteBlogData("item", item.id)}/>
        <DeleteModal/>
      </CardActions>
    </Card>
  );
}
