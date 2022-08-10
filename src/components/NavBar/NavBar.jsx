import React, { useContext } from "react"
import PropTypes from "prop-types"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import RadioOutlinedIcon from "@mui/icons-material/RadioOutlined"
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined"
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { SvgIcon } from "@material-ui/core"
import NavBarContext from "../../context/NavBar/NavBarContext"

const drawerWidth = 240

const Logo = (props) => (
  <SvgIcon viewBox="0 0 50 50" fontSize="large">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.914 2.13084C18.9843 4.67165 15.4785 5.09088 11.5809 3.60502C9.04266 2.63798 8.97457 2.63697 8.38865 3.57503C7.86067 4.42062 8.01668 4.63303 9.71191 5.37901C10.9198 5.91055 13.0495 6.23374 15.445 6.24898C19.152 6.27337 20.9108 5.70118 26.6886 2.59123C26.8634 2.49722 27.1027 4.43434 27.2206 6.89638C27.3949 10.5511 27.7196 11.978 28.988 14.6672C29.8427 16.4793 31.0176 18.5333 31.5995 19.232C32.6376 20.4795 32.6696 20.4846 33.3978 19.5039C34.0737 18.5933 33.9893 18.3305 32.442 16.5225C30.1558 13.8516 29.2197 10.8397 28.8305 4.90083C28.6511 2.16234 28.3675 -0.0425698 28.1999 0.000623952C28.0322 0.0438177 26.1037 1.00272 23.914 2.13084ZM37.611 3.16292C37.0988 5.2042 38.3031 10.1425 39.8678 12.4165C40.6742 13.5889 42.3943 15.4818 43.6896 16.6221L46.0455 18.6954L44.5926 19.2813C38.6228 21.69 35.6841 23.4863 33.253 26.2142C30.5897 29.2021 30.3275 30.0574 31.9999 30.2983C32.6864 30.3968 33.4182 29.7357 34.464 28.0705C36.2375 25.2461 39.1253 23.312 44.7796 21.163L48.9603 19.5745L45.238 15.6784C41.1473 11.3967 39.8368 8.66123 39.8368 4.40486C39.8368 2.3402 39.6853 1.95451 38.8753 1.95451C38.2869 1.95451 37.7965 2.42303 37.611 3.16292ZM3.45644 14.2505C4.85896 21.0761 4.24917 25.4666 1.3745 29.2326C-0.0925661 31.1545 -0.245014 31.6124 0.26518 32.5657C0.849566 33.6577 0.873958 33.6496 2.32273 31.9142C4.92706 28.7946 5.78992 26.3885 5.78992 22.2444C5.78992 20.1645 5.56988 17.6963 5.30106 16.7593C4.84219 15.1586 4.88081 15.0717 5.93627 15.3181C14.8174 17.3925 17.9594 17.5454 22.4322 16.1216C24.2255 15.5509 24.4583 15.0935 23.4008 14.2165C22.8926 13.7942 22.0989 13.8607 20.2913 14.4766C17.4761 15.436 11.4178 15.2064 8.07664 14.0142C6.95869 13.6153 5.38389 13.1275 4.57744 12.9303C3.14138 12.5792 3.11851 12.6061 3.45644 14.2505ZM15.0639 22.1092C14.6558 22.2739 14.4287 23.4437 14.4287 25.3777C14.4287 28.9806 13.3453 31.5224 9.56302 36.7941L6.90889 40.4935L9.52541 40.8477C16.1173 41.7405 20.3975 43.9475 22.915 47.7516C24.1772 49.6592 25.5437 50.1725 25.9675 48.8985C26.2546 48.0372 23.0461 44.0898 20.7436 42.4718C19.3822 41.5144 17.2657 40.7481 14.3626 40.1602L10.0193 39.281L12.4839 35.7757C15.0872 32.0743 16.1473 29.2896 16.7306 24.6211C17.094 21.7144 16.8719 21.38 15.0639 22.1092ZM20.0184 31.9518C20.0184 32.5199 20.3045 33.0662 20.6536 33.1663C25.8735 34.6629 28.7639 36.9313 32.847 42.7345C33.9771 44.3413 34.9787 45.6564 35.0727 45.6564C35.1662 45.6564 35.7334 44.6848 36.333 43.4967C39.2722 37.6757 42.6352 34.6684 47.5862 33.4336C49.3973 32.9819 50 32.5931 50 31.8756C50 30.7068 49.0162 30.6631 45.5932 31.6794C42.2211 32.681 38.9038 35.6655 36.8229 39.5692C35.9051 41.2918 34.9879 42.5084 34.7856 42.2731C34.5829 42.0378 33.3292 40.433 31.9999 38.7063C29.578 35.5623 27.6876 34.0338 23.7113 32.0052C21.0363 30.6408 20.0184 30.626 20.0184 31.9518Z"
      fill="white"
    />
  </SvgIcon>
)

const NavBarItems = [
  { Name: "Dashboard", Icon: <DashboardOutlinedIcon />, Link: "/" },
  { Name: "Spotify", Icon: <MusicNoteOutlinedIcon />, Link: "/about" },
  { Name: "Song Info", Icon: <LibraryMusicOutlinedIcon />, Link: "/contact" },
  { Name: "Radio Stations", Icon: <RadioOutlinedIcon />, Link: "/login" },
]

function NavBar(props) {
  const { setTabName, tabName } = useContext(NavBarContext);
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleListItemClick = (name) => {
    setTabName(name)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div >
      <Toolbar disableGutters>
        <List>
          <ListItem>
            <Logo />
            <ListItemText
              primary={"Soul"}
              primaryTypographyProps={{ fontSize: "24px", mx: 2 }}
            />
          </ListItem>
        </List>
      </Toolbar>
      <ListItem sx={{ my: 0, py: 0, pt:4 }}>
        <Typography variant="overline"  sx={{ fontWeight: 700, opacity: 0.4 }}>
          ANALYTICS
        </Typography>
      </ListItem>
      <List>
        {NavBarItems.map((el, index) => (
          <ListItem key={el} disablePadding sx={{ my: 1 }}>
            <ListItemButton onClick={(e) =>handleListItemClick(el.Name)}
              sx={{
                borderLeft: tabName.toLowerCase() === el.Name.toLowerCase() ? "4px solid #B3FF36" : null,
                color: tabName.toLowerCase() === el.Name.toLowerCase() ? "#B3FF36" : null,
                transition: "0.2s",
                "& .MuiListItemIcon-root": {
                  color: tabName.toLowerCase() === el.Name.toLowerCase() ? "#B3FF36" : null,
                },
                "&:hover": {
                  backgroundColor: "rgba(179, 255, 54, 0.1)",
                  borderRadius: "10px",
                  mx: 1,
                  color: "white",
                  "& .MuiListItemIcon-root": {
                    color: "white",
                  },
                },
              }}
            >
              <ListItemIcon>{el.Icon}</ListItemIcon>
              <ListItemText primary={el.Name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
     
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
  
      
    </>
  )
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default NavBar
