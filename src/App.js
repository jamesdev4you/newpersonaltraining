import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Menu from "./primary_component/Menu";

const theme = createTheme({
  palette: {
    primary: { main: "#000000" },
    typography: { main: "#FFFFFF" },
    error: { main: "#ffd700" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
    </ThemeProvider>
  );
}

export default App;
