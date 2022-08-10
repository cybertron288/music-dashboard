import { Box } from "@mui/material"
import React from "react"
import Grid from "@mui/material/Grid"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import SimpleAreaChart from "../../components/AreaChart/AreaChart"

const Spotify = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <ProfileCard />
          </Grid>
          <Grid item md={6}>
          <SimpleAreaChart />
          </Grid>
          <Grid item md={3}>
          <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'primary.dark',
       borderRadius:'10px'
      }}
    />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Spotify
