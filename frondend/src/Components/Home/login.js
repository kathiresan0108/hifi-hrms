import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FaGoogle } from "react-icons/fa";
import img2 from "../Assets/loginimg/welcome1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { getCookie } from '../../utils/getCookie'; // For CSRF token if needed
import Header from "./Header/header";
import Footer from "./Footer/footer";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Handle form submission for login
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        'http://localhost:8000/api/login/',  // Login API endpoint
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),  // If CSRF token is required
          },
        }
      );
  
      if (response.status === 200) {
        // Save the authentication token
        localStorage.setItem('authToken', response.data.token);
  
        // Save user details (user_id and user_type) locally if needed
        const { user_id, user_type } = response.data;
        localStorage.setItem('userId', user_id);
        localStorage.setItem('userType', user_type);
        
  
        // Navigate to the appropriate dashboard based on user_type
        if (user_type === 'client') {
          navigate("/client_dashboard");
        } else if (user_type === 'candidate') {
          navigate("/candidate_dashboard");
        } else {
          alert("Unknown user type. Please contact support.");
        }
      } else {
        alert("Login failed: Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error);
      if (error.response && error.response.status === 500) {
        alert("Server error: Please try again later");
      } else {
        alert("Login failed: Authentication failed.");
      }
    }
  };
  return (
    <Box sx={{ backgroundColor: "#b8a5fe" }}>
      <Header />
      <Grid container justifyContent="center">
        <Grid
          item
          xs={11}
          sm={11}
          md={6}
          lg={5}
          marginTop={12}
          marginBottom={10}
          border={"3px solid gray"}
          borderRadius={"10px"}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isSmallScreen ? "column" : "row",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: 3,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                flex: 1,
                borderRight: isSmallScreen ? "none" : "1px solid #000",
                borderBottom: isSmallScreen ? "1px solid #000" : "none",
                textAlign: "center",
                p: 3,
              }}
            >
              <Typography variant="h4" gutterBottom>
                Welcome Back!
              </Typography>
`              <Typography variant="h6" gutterBottom>
                Welcome to your next opportunity.
              </Typography>
              <Typography variant="body1">
                Log in to connect with top employers and take the next step in
                your career journey.
              </Typography>
              <Box mt={4}>
                <img
                  src={img2}
                  alt="Welcome"
                  style={{ width: "80%", height: "auto" }}
                />
              </Box>
            </Box>

            <Box sx={{ flex: 1, p: 3 }}>
              <Typography variant="h4" align="center" gutterBottom>
                Login Form
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ mb: 3 }}
                />
                <Link to="/forgot">
                  <Box sx={{ textAlign: "center", mb: 2 }}>Forgot Password?</Box>
                </Link>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mb: 2, bgcolor: "#b8a5fe" }}
                >
                  Login
                </Button>
              </form>

              <Box sx={{ textAlign: "center", mb: 2 }}>
                <Typography variant="body2">
                  Don't have an account? <Link to="/choose_user_type">Signup</Link>
                </Typography>
              </Box>

              <Button
                fullWidth
                variant="outlined"
                startIcon={<FaGoogle />}
                sx={{ mt: 2 }}
              >
                Continue with Google
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}

export default Login;