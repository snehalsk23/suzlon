import {
  Avatar,
  Box,
} from "@mui/material";
import { Grid } from "@mui/material";
import CardComponent from "./CardComponent";
import { deepPurple } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/getUserData/${userId}`
        );
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }
  const getInitials = (name) => {
    const names = name.split(" ");
    if (names.length === 1) {
      return names[0].slice(0, 2);
    }
    return names[0].charAt(0) + names[names.length - 1].charAt(0);
  };

  const userInitials = getInitials(user.name);
  return (
    <Box component="main" sx={{ flexGrow: 3, p: 10 }}>
      <Grid container gap={"30px"}>
        <Grid item xs={12}>
          <CardComponent>
            <Grid container justifyContent={"center"} gap={"30px"}>
              <Grid item>
                <Avatar variant="rounded" sx={{ bgcolor: deepPurple[500], borderRadius: "40%", width: "70px", height: "70px", fontSize: "30px" }}>
                  {userInitials}
                </Avatar>
                <Grid>
                  <p>{user.name}</p>
                </Grid>
              </Grid>
              <Grid container item gap={"20px"} justifyContent={"center"}>
                <Grid item xs={3}>
                  <CardComponent sx={{ width: "fit-content" }}>
                    {user.email}
                  </CardComponent>
                </Grid>
                <Grid item xs={3}>
                  <CardComponent sx={{ width: "fit-content" }}>
                    {user.phone_number}
                  </CardComponent>
                </Grid>
                <Grid item xs={3}>
                  <CardComponent sx={{ width: "fit-content" }}>
                    {user.accessLevel}
                  </CardComponent>
                </Grid>
              </Grid>
            </Grid>
          </CardComponent>
        </Grid>
        <Grid item xs={12}>
          <CardComponent>
            <Grid container item gap={"20px"} justifyContent={"center"}>
              <Grid item xs={5} sx={{ bgcolor: "#9ea0a3", padding: "20px" }}>
                States
                <Box height={20} />
                <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                  {user &&
                    Array.isArray(user.statelist) &&
                    user.statelist.map((state, index) => (
                      <React.Fragment key={index}>
                        <CardComponent sx={{ width: "30px" }}>
                          {state}
                        </CardComponent>
                        <Box height={20} />
                      </React.Fragment>
                    ))}
                </div>
              </Grid>
              <Grid item xs={5} sx={{ bgcolor: "#9ea0a3", padding: "20px" }}>
                View
                <Box height={20} />
                <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                  {user.access.map((viewItem, index) => (
                    <React.Fragment key={index}>
                      <CardComponent sx={{ width: "30px" }}>
                        {viewItem}
                      </CardComponent>
                      <Box height={20} />
                    </React.Fragment>
                  ))}
                </div>
              </Grid>
            </Grid>
          </CardComponent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
