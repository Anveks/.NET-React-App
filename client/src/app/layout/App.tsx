import { Container, createTheme, CssBaseline } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  function handleToggle(value: boolean) {
    setDarkMode(value);
  }

  // creating light\dark theme
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: darkMode ? "#121212" : "#eaeaea"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} onToggle={handleToggle} />
      <Container>
        {/* <Catalog products={products} addProduct={addProduct} /> */}
        <Outlet />
      </Container>
    </ThemeProvider>
  )
}

export default App;
