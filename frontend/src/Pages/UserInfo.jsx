import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {deepPurple } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export default function UserInfo() {
  return (
    <>
      
      <Box component="main" sx={{ flexGrow: 3, p: 10 }}>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={8}>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>SK</Avatar>
            
            <Box height={20} />
            <Card sx={{ maxWidth:300 }}>
                <CardContent>
                <Stack spacing={2} direction={"row"}>
                  <PermIdentityIcon />
                  <div>
                    Username
                  </div>
                  </Stack>
                </CardContent>
              </Card>
          </Grid>
          <Box height={90} />
          <Grid item xs={8}>
            <Stack spacing={2} direction={"row"}>
              <Card sx={{ minWidth: 300 }}>
                <CardContent>
                <Stack spacing={2} direction={"row"}>
                  <VerifiedUserIcon />
                  <div>
                    <span>ID</span>
                  </div>
                  </Stack>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 300 }}>
                <CardContent>
                <Stack spacing={2} direction={"row"}>
                  <EmailIcon />
                  <div>
                    <span>Email</span>
                  </div>
                  </Stack>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 300 }}>
                <CardContent>
                <Stack spacing={2} direction={"row"}>
                  <PhoneIcon />
                  <div>
                    <span>Phone</span>
                  </div>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          <Box height={20} />

          <Grid item xs={8}>
            <Stack spacing={2} direction={"row"}>
              <Card sx={{ height: 350, width: 450 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    State
                  </Typography>
                  <Card sx={{ height: 50, width: 300 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        A
                      </Typography>
                    </CardContent>
                  </Card>
                  
                  <Card sx={{ height: 50, width: 300 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        B
                      </Typography>
                    </CardContent>
                  </Card>
                  <Box height={20} />
                  <Card sx={{ height: 50, width: 300 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        C
                      </Typography>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
              <Card sx={{ height: 350, width: 500 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    View
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
