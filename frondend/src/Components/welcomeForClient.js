import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";
import welcomeclient from "./welcomeclient.json";
import Lottie from "lottie-react";

const WelcomeForClient = () => {
  // Retrieve userId from localStorage
  const userId = localStorage.getItem("userId");

  // Log userId for debugging
  console.log("User ID:", userId);

  return (
    <Box
      sx={{
        backgroundColor: "#b8a5fe",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          width: {
            xs: "100%",
            sm: "90%",
            md: "80%",
            lg: "70%",
            xl: "60%",
          },
          maxWidth: "1320px",
          height: {
            xs: "auto",
            md: "600px",
          },
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          border: "1px solid black",
          borderRadius: "5px",
          padding: {
            xs: "1rem",
            md: "2rem",
          },
        }}
      >
        <Box
          sx={{
            marginLeft: {
              xs: 0,
              md: "3rem",
            },
            marginBottom: {
              xs: "2rem",
              md: 0,
            },
            width: {
              xs: "100%",
              md: "50%",
            },
            height: "auto",
          }}
        >
          <Lottie animationData={welcomeclient} style={{ height: "400px", width: "400px" }} />
        </Box>
        <Box
          sx={{
            marginTop: {
              xs: "2rem",
              md: "4rem",
            },
            marginLeft: {
              xs: 0,
              md: "3rem",
            },
            width: {
              xs: "100%",
              md: "50%",
            },
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "rgb(19, 19, 101)",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: {
                xs: "1.5rem",
                md: "2rem",
              },
              marginBottom: "1.5rem",
            }}
          >
            WELCOME To Our HIFI IT-PARK
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              marginBottom: "3rem",
              fontSize: {
                xs: "0.875rem",
                md: "1rem",
              },
              lineHeight: 1.5,
            }}
          >
            "An HRMS is the heartbeat of your company, empowering employees and
            streamlining operations.
            <br />
            Invest in your people to drive growth and success. Your greatest
            asset is your workforce."
          </Typography>
          <Link to={`/client_dashboard?userId=${userId}`}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#b8a5fe",
                color: "#fff",
                padding: {
                  xs: "0.75rem 1.5rem",
                  md: "1rem 2rem",
                },
                borderRadius: "50px",
                fontFamily: "Poppins",
                fontWeight: 500,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#8c6efa",
                },
              }}
              endIcon={<ArrowForward />}
            >
              Continue
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeForClient;
