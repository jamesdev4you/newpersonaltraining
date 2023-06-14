import React from "react";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Menu from "./primary_component/Menu";
import Home from "./primary_component/Home";
import Footer from "./primary_component/Footer";
import About from "./primary_component/About";
import Services from "./primary_component/Services";
import Testimonials from "./primary_component/Testimonials";
import Contact from "./primary_component/Contact";
import { Routes, Route, Outlet, Link, Router } from "react-router-dom";

const theme = createTheme({
  shape: {
    pillRadius: 50,
  },
  palette: {
    primary: { main: "#002672" },
    secondary: {
      main: "#002672",
    },
    error: { main: "#ffd700" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
