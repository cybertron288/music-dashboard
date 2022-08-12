import { Box } from "@mui/material"
import React from "react"
import Grid from "@mui/material/Grid"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import SimpleAreaChart from "../../components/AreaChart/AreaChart"
import PieChartLayout from "../../components/PieChart/PieChart"
import Layout21 from "../../components/Layout21/Layout21"

const Spotify = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid container item md={9} spacing={2}>
            <Layout21
              fCard={<ProfileCard />}
              sCard={<PieChartLayout />}
              fSize={3}
              sSize={9}
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
