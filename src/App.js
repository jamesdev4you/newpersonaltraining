import React from "react";
import './index.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Menu from "./primary_component/Menu";
import Home from "./primary_component/Home";

const theme = createTheme({
  shape: {
    pillRadius: 50,
  },
  palette: {
    primary: { main: "#000000" },
    secondary: {
      main: "#fff",
    },
    error: { main: "#ffd700" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Home />
    </ThemeProvider>
  );
}

export default App;
