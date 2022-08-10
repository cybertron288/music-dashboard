import { Box } from "@mui/material"
import React, { useContext } from "react"
import NavBar from "../components/NavBar/NavBar"
import Dashboard from "./Dashboard/Dashboard"
import Spotify from "./Spotify/Spotify"
import NavBarContext from "../context/NavBar/NavBarContext"
import SongInfo from "./SongInfo/SongInfo"
import RadioStation from "./RadioStation/RadioStation"

const drawerWidth = 240

const Main = () => {
  const { tabName } = useContext(NavBarContext);

  return (
    <>
      <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <NavBar />
        </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
       {tabName.toLowerCase() === "dashboard" ? <Dashboard /> : null}
       {tabName.toLowerCase() === "spotify" ? <Spotify /> : null}
       {tabName.toLowerCase() === "song info" ? <SongInfo /> : null}
       {tabName.toLowerCase() === "radio stations" ? <RadioStation /> : null}
      </Box>
      </Box>
    </>
  )
}

export default Main
