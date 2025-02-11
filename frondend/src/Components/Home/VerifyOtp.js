import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [email] = useState(localStorage.getItem("signupEmail"));
  const selectedUserType = localStorage.getItem('selectedUserType');
  const signupData = JSON.parse(localStorage.getItem("signupData"));
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const otpResponse = await axios.post("http://localhost:8000/api/verify_otp/", {
        email: email,
        otp: otp,
      });

      if (otpResponse.data.status === true) {
        console.log("OTP verified successfully:", otpResponse.data);

        try {
          const signupResponse = await axios.post(
            "http://localhost:8000/api/register/",
            signupData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (signupResponse.status === 201) {
            const userId = signupResponse.data.user_id;
            const storeUserTypeResponse = await axios.post(
              "http://localhost:8000/api/store_user_type/",
              { userType: selectedUserType, user_id: userId },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const user_id = localStorage.getItem("userId"); 
            console.log(user_id);
            console.log("User type stored successfully:", storeUserTypeResponse);
            alert("Signup successful! User type stored.");
            if (selectedUserType === 'candidate') {
              navigate(`/candidate_reg`, { state: { user_id: storeUserTypeResponse.data.user_id } });
            } else {
              navigate(`/client_reg`, { state: { user_id: storeUserTypeResponse.data.user_id } });
            }
          } else {
            console.error("Signup failed:", signupResponse.data);
            alert("Signup failed: " + (signupResponse.data.detail || "Please try again."));
          }
        } catch (error) {
          console.error("Error during signup:", error);
          alert("Failed to complete the signup process.");
        }
      } else {
        console.warn("OTP verification failed with response:", otpResponse.data);
        alert("OTP verification failed. Please try again.");
      }
    } catch (otpError) {
      console.error("Error verifying OTP:", otpError.response ? otpError.response.data : otpError);
      if (otpError.response && otpError.response.status === 400) {
        alert(otpError.response.data.detail || "OTP verification failed.");
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  const handleResendOtp = async () => {
    try {
      const resendResponse = await axios.post("http://localhost:8000/api/resend_otp/", {
        email: email,
      });

      if (resendResponse.data.status === true) {
        alert("OTP has been resent. Please check your email.");
      } else {
        alert("Failed to resend OTP: " + resendResponse.data.detail);
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      alert("An unexpected error occurred while resending OTP. Please try again.");
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper
        elevation={8}
        sx={{
          padding: 4,
          borderRadius: 4,
          backgroundColor: '#fff',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          width: '100%',
          maxWidth: 400,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: '#333',
            fontWeight: 'bold',
            marginBottom: 3,
            letterSpacing: 1.5,
          }}
        >
          OTP Verification
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            fullWidth
            required
            margin="normal"
            variant="outlined"
            sx={{
              borderRadius: 2,
              '& .MuiInputBase-root': {
                borderRadius: '8px',
              },
            }}
          />
          <Box display="flex" justifyContent="space-between" mt={3}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                padding: '10px 20px',
                fontWeight: 'bold',
                borderRadius: 2,
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  backgroundColor: '#1e88e5',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              Verify OTP
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleResendOtp}
              sx={{
                padding: '10px 20px',
                fontWeight: 'bold',
                borderRadius: 2,
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  backgroundColor: '#ff5722',
                  borderColor: '#ff5722',
                },
              }}
            >
              Resend OTP
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default VerifyOtp;
