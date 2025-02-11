import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import student from './student.json';
import Lottie from "lottie-react";

function WelcomePage() {
  // Retrieve userId from localStorage
  const userId = localStorage.getItem("userId");

  // Log userId for debugging
  console.log("User ID:", userId);

  return (
    <Box
      sx={{
        backgroundColor: "#b8a5fe",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "1rem", md: "2rem" }, // Padding for small screens
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          width: { xs: "100%", md: "80%", lg: 1320 },
          height: { xs: "auto", md: 600 },
          margin: "1rem",
          borderRadius: "5px",
          border: "1px solid black",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack items on small screens
          alignItems: "center", // Center alignment for better positioning
        }}
      >
        {/* Lottie Animation Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", md: "50%" },
            padding: { xs: "2rem 0", md: "0" }, // Padding for animation on small screens
          }}
        >
          <Lottie animationData={student} style={{ height: 400, width: 400 }} />
        </Box>

        {/* Welcome Text and Button Section */}
        <Box
          sx={{
            textAlign: "center",
            padding: { xs: "2rem 1rem", md: "4rem 2rem" },
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "rgb(19, 19, 101)",
              fontWeight: 600,
              marginBottom: "1.5rem",
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
            }}
          >
            WELCOME TO OUR HIFI IT-PARK
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "2.5rem",
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "0.875rem", md: "1rem" },
              lineHeight: "1.6", // Improve readability
            }}
          >
            "Challenges are what make life interesting, and overcoming
            <br /> them is what makes life meaningful."
          </Typography>
          <Link className="candidate_link" to={`/candidate_dashboard?userId=${userId}`} style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#b8a5fe",
                "&:hover": { backgroundColor: "#8c6efa" },
                padding: { xs: "0.75rem 1.5rem", md: "1rem 2rem" },
                borderRadius: "50px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontStyle: "italic",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
              endIcon={<ArrowRightAltIcon />}
            >
              Continue
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default WelcomePage;
