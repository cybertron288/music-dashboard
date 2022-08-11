import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect } from 'react'
import SimpleAreaChart from "../AreaChart/AreaChart"
import ProfileCard from "../ProfileCard/ProfileCard"

const Layout21 = (props) => {

    const { fCard, sCard, fSize, sSize } = props


  return (
    <>
    
          <Grid item md={fSize}>
            {fCard}
          </Grid>
          <Grid item md={sSize}>
          {sCard}
          </Grid>
         
    </>
  )
}

export default Layout21