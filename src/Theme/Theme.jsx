import { createTheme } from '@mui/material/styles';
import { borderRadius } from "@mui/system";

const theme = createTheme({

    palette: {
      mode: 'dark',
      primary: {
        main: '#258461',
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
            background: `#201E43`,
            borderRight: 'none',
            borderRadius: '0 30px 30px 0'
          }
        }
      },
    },
    shape: {
      borderRadius: 6,
    },
    
    
  });

  export default theme