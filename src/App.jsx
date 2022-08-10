
import Main from "./Pages/Main";
import { ThemeProvider } from "@mui/material/styles"
import theme from "./Theme/Theme"
import './App.css'
import { AppContextProvider } from "./context/appContextProvider"

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <AppContextProvider>
      <Main />
      </AppContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
