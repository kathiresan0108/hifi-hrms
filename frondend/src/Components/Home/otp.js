import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer/footer";
import Header from "./Header/header";

function Otp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const email = localStorage.getItem('email'); // Get the email from localStorage


  const handleOtpVerification = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/verify-reset-otp/",
        { email: email, otp: otp }
      );
      console.log('Email:', localStorage.getItem('email')); // Debugging email retrieval
      if (response.status === 200) {
        // OTP verified, navigate to the New Password page
        navigate("/newpassword");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      console.log('Email:', localStorage.getItem('email')); // Debugging email retrieval
    }
  };
  

  return (
    <div>
      <Header />
      <Box
        sx={{
          backgroundColor: "#b8a5fe",
          height: "66vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            border: "2px solid rgb(0, 230, 122)",
            borderRadius: 2,
            padding: { xs: 2, sm: 4, md: 6, lg: 12 },
            maxWidth: 500,
            textAlign: "center",
            marginBottom: 6,
          }}
        >
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Enter your OTP
          </Typography>
          <Typography variant="body1" mt={"5vh"}>
            Enter the OTP sent to your email
          </Typography>
          <TextField
              fullWidth
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              type="number"  // Restricts input to numbers
              sx={{ marginTop: 3, marginBottom: 3 }}
            />
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 5, textTransform: "capitalize" }}
            onClick={handleOtpVerification}
          >
            Verify
          </Button>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default Otp;
