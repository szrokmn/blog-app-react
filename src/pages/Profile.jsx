import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser, email, bio, image } = useSelector((state) => state.auth);

  return (
    <>
      <Box
        sx={{
          fontSize: "28px",
          textAlign: "center",
          marginTop: "5rem",
        }}
      >
        <h3>User Profile</h3>
      </Box>

      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "70vh",
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            alignItems: "center",
            margin: "1rem",
          }}
        >
          <Box>
            <CardMedia
              component="img"
              image={
                image
                  ? image
                  : "https://cdn.pixabay.com/photo/2013/07/12/12/58/man-146638_960_720.png"
              }
              alt={currentUser}
              sx={{
                width: 200,
                height: 200,
                overflow: "hidden",
                marginBottom: "3rem",
              }}
              style={{ objectFit: "cover" }}
            ></CardMedia>
          </Box>

          <Box sx={{ width: "300px", marginBottom: 3, marginLeft:"130px"}}>
            <Typography
              variant="h6"
              sx={{ width: "300px", marginBottom: 2}}
            >
              {`Username : ${currentUser}`}
            </Typography>
            <Typography variant="h6" sx={{ my: 2 }}>
              {`Email : ${email}`}
            </Typography>
            <Typography variant="h6" sx={{ my: 2 }}>
              {`Bio : ${bio}`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
