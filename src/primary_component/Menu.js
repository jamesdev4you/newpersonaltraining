import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "../assets/logo.png";
import "../index.css";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Services", href: "/services" },
  { text: "Testimonials", href: "/testimonials" },
  { text: "Contact", href: "/contact" },
];

export default function Menu(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "primary.main" }}
    >
      <img src={Logo} alt="yooo" style={{ height: "150px", width: "150px" }} />
      <Divider sx={{ backgroundColor: "primary.main" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} sx={{ margin: "15px 0px" }} disablePadding>
            <NavLink
              style={{
                textDecoration: "none",
                color: "white",
                fontFamily: "Ubuntu",
                fontSize: "20px",
                margin: "auto",
              }}
              to={item.href}
            >
              {item.text}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            alt="yooo"
            sx={{
              display: { sm: "none", md: "block" },
              height: "75px",
              width: "75px",
              marginLeft: {
                xs: "auto",
                sm: "auto",
                md: "0",
                lg: "0",
                xl: "0",
              },
              backgroundImage: `url(${Logo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              marginLeft: "auto",
            }}
          >
            {navItems.map((item) => (
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "Ubuntu",
                  fontSize: "20px",
                  marginLeft: "35px",
                  textAlign: "left",
                }}
                to={item.href}
              >
                {item.text}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "primary.main",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
    </Box>
  );
}
