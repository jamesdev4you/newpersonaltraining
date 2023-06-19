import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import "../index.css";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k5tqxqh",
        "template_37okrna",
        form.current,
        "04BBH9lKO4hSDpTQc"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{ fontSize: "36px", color: "white", fontStyle: "italic" }}
      >
        CONTACT
      </Typography>
      <Typography sx={{ fontSize: "16px", color: "white", padding: "30px 0" }}>
        <span style={{ color: "red" }}>*</span> INDICATES REQUIRED FIELD!
      </Typography>
      <form
        style={{
          paddingTop: "5px",
        }}
        ref={form}
        onSubmit={sendEmail}
      >
        <Grid container spacing={2}>
          <Grid xs={12} item sx={{ marginRight: "auto" }}>
            <TextField
              name="user_firstname"
              label="First Name"
              placeholder="Enter First Name"
              variant="outlined"
              fullWidth
              required
              color="secondary"
              sx={{
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiFormLabel-root": {
                  color: "white",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "white",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "yellow",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "yellow",
                  },
                },
                "& .MuiInputBase-root": {
                  color: "white",
                },
              }}
            />
          </Grid>
          <Grid xs={12} item sx={{ marginRight: "auto" }}>
            <TextField
              name="user_lastname"
              label="Last Name"
              placeholder="Enter Last Name"
              variant="outlined"
              fullWidth
              color="error"
              sx={{
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiFormLabel-root": {
                  color: "white",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "white",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "yellow",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "yellow",
                  },
                },
                "& .MuiInputBase-root": {
                  color: "white",
                },
              }}
            />
          </Grid>
          <Grid xs={12} item sx={{ marginRight: "auto" }}>
            <TextField
              type="email"
              name="user_email"
              label="Email"
              placeholder="Enter email"
              variant="outlined"
              fullWidth
              required
              color="error"
              sx={{
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiFormLabel-root": {
                  color: "white",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "white",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "yellow",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "yellow",
                  },
                },
                "& .MuiInputBase-root": {
                  color: "white",
                },
              }}
            />
          </Grid>
          <Grid xs={12} item sx={{ marginRight: "auto" }}>
            <TextField
              type="number"
              name="user_phone"
              label="Number"
              placeholder="Enter Phone Number"
              variant="outlined"
              fullWidth
              required
              color="error"
              sx={{
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiFormLabel-root": {
                  color: "white",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "white",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "yellow",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "yellow",
                  },
                },
                "& .MuiInputBase-root": {
                  color: "white",
                },
              }}
            />
          </Grid>
          <Grid xs={12} item sx={{ marginRight: "auto" }}>
            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              placeholder="Enter information about your issue here"
              variant="outlined"
              fullWidth
              required
              color="error"
              sx={{
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiFormLabel-root": {
                  color: "white",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "white",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "yellow",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "yellow",
                  },
                },
                "& .MuiInputBase-root": {
                  color: "white",
                },
              }}
            />
          </Grid>
          <Grid xs={12} item sx={{ marginRight: "auto" }}>
            <Button
              type="submit"
              value="Send"
              variant="contained"
              fullWidth
              color="error"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
