import { createTheme } from '@mui/material/styles';
import { borderRadius } from "@mui/system";


const theme = createTheme({

    palette: {
      mode: 'dark',
      primary: {
        main: '#B3FF36',
      },
      background: { default: '#0C0B2F' },
      white: {
        main: '#ffffff',
      },
      chipColor1: {
        main: '#B3D4FF'
      },
      chipColor2: {
        main: '#C0B6F2'
      },
      chipColor3: {
        main: '#79F2C0'
      }
    },
    
    components: {
      MuiListItemButton: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            background: `linear-gradient(149.42deg, #202047 2.3%, #15152E 98.19%);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 35px`,
            borderRight: 'none',
            borderRadius: '0 30px 30px 0'
          }
        }
      },
      MuiButton: {
        variants: [
          {
            props: { variant: "bold" },
            style: {
              fontWeight: "bold",
              border: `4px solid red`,
              color: "orange",
            }
          }
        ]      
      }
    },
    typography: {
      fontFamily: 
        '"Cairo", sans-serif',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': ['Cairo'],
        },
      },
    },
    shape: {
      borderRadius: 6,
    },
    
    
  });

  export default theme