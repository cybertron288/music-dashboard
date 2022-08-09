
import Dashboard from "./Pages/Dashboard";
import { ThemeProvider } from "@mui/material/styles"
import theme from "./Theme/Theme"

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Dashboard />
      </ThemeProvider>
    </>
  );
}

export default App;
