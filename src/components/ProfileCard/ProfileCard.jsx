import React from "react"
import { useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"

import CardMedia from "@mui/material/CardMedia"

import Typography from "@mui/material/Typography"

import { Avatar, Button, Grid, Stack } from "@mui/material"

const ProfileCard = () => {
  const theme = useTheme()

  return (
    <Card
      sx={{
        display: "flex",
        borderRadius: "2px",
        background: `linear-gradient(149.42deg, #202047 2.3%, #15152E 98.19%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 35px;`,
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ py: 3 }}
      >
        <CardMedia sx={{width:'100%'}}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            sx={{ width: 150, height: 150, position:'relative', marginX:'auto' }}
          />
        </CardMedia>
        <Typography
            variant="h5"
            textAlign={"center"}
            fontWeight="700"
            marginY={2}
          >
            Ravi Patel
          </Typography>
          <Grid container width={'100%'}>
            <Grid item textAlign={"center"} md={4}>
              <Stack spacing={2}>
                <Typography fontWeight={800} color={"#B3FF36"}>21</Typography>
                <Typography variant="button">Followers</Typography>
              </Stack>
            </Grid>
            <Grid item textAlign={"center"} md={4}>
              <Stack spacing={2}>
                <Typography fontWeight={800} color={"#B3FF36"}>21</Typography>
                <Typography variant="button">Followings</Typography>
              </Stack>
            </Grid>
            <Grid item textAlign={"center"} md={4}>
              <Stack spacing={2}>
                <Typography fontWeight={800} color={"#B3FF36"}>21</Typography>
                <Typography variant="button">Playlists</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{width:'100%', px:6, pt:2}}>
        <Button variant="contained" fullWidth >
            Logout
          </Button>
          </Box>
      </Grid>
    </Card>
  )
}

export default ProfileCard
