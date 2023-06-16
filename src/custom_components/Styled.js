import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import "../index.css";

export const Button = styled(MuiButton)(({ theme, pill }) => ({
  borderRadius: pill ? theme.shape.pillRadius : theme.shape.borderRadius,
  color: "#fff",
  border: "#fff 1px solid",
  "&:hover": {
    backgroundColor: "#E8C507",
    color: "black",
    border: "black 1px solid",
  },
  padding: 5,
  width: 170,
  marginTop: 10,
  fontFamily: "Ubuntu",
}));

export const WhiteButton = styled(MuiButton)(({ theme, pill }) => ({
  borderRadius: pill ? theme.shape.pillRadius : theme.shape.borderRadius,
  color: "black",
  border: "black 3px solid",
  "&:hover": {
    backgroundColor: "#E8C507",
    color: "black",
    border: "black 1px solid",
  },
  padding: 5,
  width: 170,
  marginTop: 10,
}));
