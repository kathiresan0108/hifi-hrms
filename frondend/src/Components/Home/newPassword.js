import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header/header";
import Footer from "./Footer/footer";

function NewPassword() {
  const theme = useTheme();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const email = localStorage.getItem('email'); // Get the email from localStorage
  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/update-password/",
        { email: email, password: newPassword }
      );

      if (response.status === 200) {
        alert("Password updated successfully!");
        navigate("/login");
      } else {
        alert("Error updating password.");
      }
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };

  return (
    <div>
      <Header />
      <Box
        sx={{
          minHeight: "66vh",
          backgroundColor: "#b8a5fe",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: theme.spacing(2),
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: "#fff",
            padding: theme.spacing(4),
            borderRadius: theme.shape.borderRadius,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            marginBottom: 2,
          }}
        >
          <Typography
            mb={5}
            variant="h4"
            component="h2"
            align="center"
            gutterBottom 
            fontWeight={"bold"}
          >
            New Password
          </Typography>
          <TextField
            fullWidth
            type="password"
            placeholder="New Password"
            variant="standard"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            sx={{
              marginBottom: theme.spacing(2),
            }}
            InputProps={{
              disableUnderline: true,
              style: {
                border: "2px solid #ccc",
                borderRadius: "20px",
                padding: "10px 60px 10px 20px",
              },
            }}
          />
          <TextField
            fullWidth
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            InputProps={{
              disableUnderline: true,
              style: {
                border: "2px solid #ccc",
                borderRadius: "20px",
                padding: "10px 60px 10px 20px",
                marginTop: "2vh",
              },
            }}
          />
          <Grid textAlign={"center"}>
            <Button
              variant="contained"
              color="success"
              sx={{ marginTop: theme.spacing(7), textTransform: "capitalize" }}
              onClick={handleUpdatePassword}
            >
              Update Password
            </Button>
          </Grid>
          <Link to="/login">
            <Button
              fullWidth
              sx={{ marginTop: theme.spacing(6), textTransform: "capitalize" }}
            >
              Back to Login
            </Button>
          </Link>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}

export default NewPassword;
