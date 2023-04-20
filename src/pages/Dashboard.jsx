
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../components/blog/Card";
import useBlogCall from "../hooks/useBlogCalls";
import { Grid } from "@mui/material";

const Dashboard = () => {

  const { getBlogData } = useBlogCall();
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    getBlogData("blogs");
  }, []);

  return (
    <Grid
      container
      spacing={2}
      align="center"
      sx={{ minHeight: "90vh", display: "flex", alignItems: "center" }}
    >
      {blogs?.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          <Card item={item} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Dashboard;