import { Box } from "@mui/material"
import React from "react"
import Grid from "@mui/material/Grid"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import SimpleAreaChart from "../../components/AreaChart/AreaChart"
import Layout21 from "../../components/Layout21/Layout21"

const Spotify = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid container item md={9} spacing={2}>
            <Layout21
              fCard={<ProfileCard />}
              sCard={<SimpleAreaChart />}
              fSize={4}
              sSize={8}
            />
            <Layout21
              fCard={<ProfileCard />}
              sCard={<SimpleAreaChart />}
              fSize={4}
              sSize={8}
            />
          </Grid>

          <Grid item md={3}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "primary.dark",
                borderRadius: "10px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Spotify
