import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

export const Button = styled(MuiButton)(({ theme, pill }) => ({
  borderRadius: pill ? theme.shape.pillRadius : theme.shape.borderRadius,
  color: "#fff",
  border: "#fff 3px solid",
  "&:hover": {
    color: "#fff",
    border: "#fff 3px solid",
  },
  padding: 5,
  width: 170,
  marginTop: 10,
}));

export const WhiteButton = styled(MuiButton)(({ theme, pill }) => ({
  borderRadius: pill ? theme.shape.pillRadius : theme.shape.borderRadius,
  color: "black",
  border: "black 3px solid",
  "&:hover": {
    color: "black",
    border: "black 3px solid",
  },
  padding: 5,
  width: 170,
  marginTop: 10,
}));
