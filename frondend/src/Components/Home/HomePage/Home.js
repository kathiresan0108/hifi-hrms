import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import { FaStar, FaPlay } from "react-icons/fa";
import {
 
  RiUserFill,
  RiSearchFill,
  RiFilePaperFill,
  RiBriefcaseFill,
  RiPencilRuler2Fill,
  RiBarChartBoxFill,
  RiMegaphoneFill,
  RiWallet3Fill,
  RiCarFill,
  RiTruckFill,
  RiComputerFill,
  RiBuildingFill,
} from "react-icons/ri";
import Bag from "../../../Components/Assets/bag.png";
import {
  BagImg,
  BagTypography,
  SearchTypography,
  PTypography,
  JobButton,
  WorkButton,
  HiredTypography,
  UserTypography,
  HiredCard,
  CareerTypography,
  CareerCard,
  ExploreTypography,
  CategoriesButton,
  LatestTypography,
  StyleImg,
  USATypography,
  JobTypography,
  PositionButton,
  TimeButton,
  AmountButton,
  JobCard,
  WhatOurTypography,
  BorderTypography,
  RecommendationTypography,
  CardMediaStyle,
  SarahTypography,
} from "./homeStyle";
import Figma from "../../../Components/Assets/figma.png";
import Google from "../../../Components/Assets/google.png";
import Linkedin from "../../../Components/Assets/linkedin.png";
import Amazon from "../../../Components/Assets/amazon.png";
import Twitter from "../../../Components/Assets/twitter.png";
import Microsoft from "../../../Components/Assets/microsoft.png";
import Client1 from "../../../Components/Assets/client-1.jpg";
import Offer1 from "../../../Components/Assets/offer-1.jpg";
import Offer2 from "../../../Components/Assets/offer-2.jpg";
import Offer3 from "../../../Components/Assets/offer-3.jpg";
import Header from "../Header/header";
import Footer from "../Footer/footer";

const Home = () => {
  return (
    <div>
      <Header/>
      <Container>
        <Grid container spacing={2} justifyContent="center" mt={1}></Grid>
        <Grid
          item
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <BagTypography align="center">
            <BagImg src={Bag} alt="bag" />
            No.1 Job Hunt Website
          </BagTypography>
        </Grid>
        <SearchTypography variant="h2" align="center">
          Search, Apply &<br />
          Get Your <span style={{ color: "#fa6021" }}>Dream Job</span>
        </SearchTypography>
        <Grid item lg={2}>
          <PTypography align="center">
            Your future starts here. Discover countless opportunities, take
            action by <br /> applying to jobs that match your skills and
            aspirations, and transform <br /> your career.
          </PTypography>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <JobButton variant="contained">Browse Jobs</JobButton>
          </Grid>
          <Grid item>
            <WorkButton>
              <IconButton
                style={{
                  borderRadius: "50px",
                  backgroundColor: "#fa6021",
                  padding: "15px",
                  color: "white",
                }}
              >
                <FaPlay size={15} />
              </IconButton>
              <p style={{ marginLeft: "10px" }}> How It Works?</p>
            </WorkButton>
          </Grid>
        </Grid>
      </Container>

      {/* Steps Section */}
      <section id="about">
        <Container>
          <HiredTypography variant="h3" align="center">
            Get Hired in 4{" "}
            <span style={{ color: "#fa6021" }}>Quick Easy Steps</span>
          </HiredTypography>
          <PTypography fontWeight align="center">
            Follow Our Simple, Step-by-Step Guide to Quickly Land Your Dream Job
            and Start <br /> Your New Career Journey.
          </PTypography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <HiredCard>
                <CardContent style={{ paddingBottom: "20px" }}>
                  <IconButton
                    style={{
                      color: "#fa4e09",
                      backgroundColor: "#fff9f6",
                      margin: "5px 5px 15px 5px",
                    }}
                  >
                    <RiUserFill size={25} />
                  </IconButton>
                  <UserTypography variant="h6">
                    Create an Account
                  </UserTypography>
                  <Typography color={"gray"}>
                    Sign up with just a few clicks to unlock exclusive access to
                    a world of job opportunities and landing your dream job.
                    It's quick, easy, and completely free.
                  </Typography>
                </CardContent>
              </HiredCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3} mt={5}>
              <HiredCard>
                <CardContent>
                  <IconButton
                    style={{
                      color: "#DC5C00",
                      backgroundColor: "#e9ddff",
                      margin: "15px 5px 15px 5px",
                    }}
                  >
                    <RiSearchFill size={25} />
                  </IconButton>
                  <UserTypography variant="h6">Search Job</UserTypography>
                  <Typography color={"gray"}>
                    Dive into our job database tailored to match your skills and
                    preferences. With our advanced search filters, finding the
                    perfect job has never been easier.
                  </Typography>
                </CardContent>
              </HiredCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <HiredCard>
                <CardContent>
                  <IconButton
                    style={{
                      color: "#3ac2ba",
                      backgroundColor: "#f0fffe",
                      margin: "15px 5px 15px 5px",
                    }}
                  >
                    <RiFilePaperFill size={25} />
                  </IconButton>
                  <UserTypography variant="h6">Upload CV/Resume</UserTypography>
                  <Typography color={"gray"}>
                    Showcase your experience by uploading your CV or resume. Let
                    employers know why you're the perfect candidate for their
                    job openings.
                  </Typography>
                </CardContent>
              </HiredCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3} mt={5}>
              <HiredCard>
                <CardContent>
                  <IconButton
                    style={{
                      color: "#fbbc09",
                      backgroundColor: "#fff8e3",
                      margin: "15px 5px 15px 5px",
                    }}
                  >
                    <RiBriefcaseFill size={25} />
                  </IconButton>
                  <UserTypography variant="h6">Get Job</UserTypography>
                  <Typography color={"gray"}>
                    Take the final step towards your new career. Get ready to
                    embark on your professional journey and secure the job
                    you've been dreaming of.
                  </Typography>
                </CardContent>
              </HiredCard>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Explore Section */}
      <section id="explore">
        <Container>
          <CareerTypography variant="h4" align="center">
            <span style={{ color: "#fa6021" }}>Countless Career Options</span>{" "}
            Are Waiting For You <br /> To Explore
          </CareerTypography>
          <Typography align="center" color={"gray"} mt={3}>
            Discover a World of Exciting Opportunities and Endless
            Possibilities, and <br /> Find the Perfect Career Path to Shape Your
            Future.
          </Typography>
          <Grid container spacing={2} mt={"5vh"}>
            <Grid item xs={12} sm={6} md={3}>
              <CareerCard
                onMouseEnter={(e) => {
                  e.currentTarget.style.transition =
                    "background-color .5s, color .5s";
                  e.currentTarget.style.backgroundColor = "#f04a0c";
                  e.currentTarget.style.color = "#fff";
                  const iconButton =
                    e.currentTarget.querySelector(".icon-button");
                  iconButton.style.transition =
                    "background-color .5s, color .5s";
                  iconButton.style.backgroundColor = "";
                  iconButton.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "black";
                  const iconButton =
                    e.currentTarget.querySelector(".icon-button");
                  iconButton.style.backgroundColor = "#f6efef";
                  iconButton.style.color = "#f04a0c";
                }}
              >
                <CardContent>
                  <IconButton
                    className="icon-button"
                    style={{
                      backgroundColor: "#f6efef",
                      color: "#f04a0c",
                      borderRadius: "5px",
                    }}
                  >
                    <RiPencilRuler2Fill size={25} />
                  </IconButton>
                  <ExploreTypography variant="h6">Design</ExploreTypography>
                  <Typography>200+ jobs openings</Typography>
                </CardContent>
              </CareerCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CareerCard
                onMouseEnter={(e) => {
                  e.currentTarget.style.transition =
                    "background-color .5s, color .5s";
                  e.currentTarget.style.backgroundColor = "#f04a0c";
                  e.currentTarget.style.color = "#fff";
                  const iconButton =
                    e.currentTarget.querySelector(".icon-button");
                  iconButton.style.transition =
                    "background-color .5s, color .5s";
                  iconButton.style.backgroundColor = "";
                  iconButton.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "black";
                  const iconButton =
                    e.currentTarget.querySelector(".icon-button");

                  iconButton.style.backgroundColor = "#e9ddff";
                  iconButton.style.color = "#f04a0c";
                }}
              >
                <CardContent>
                  <IconButton
                    className="icon-button"
                    style={{
                      backgroundColor: "#e9ddff",
                      color: "#DC5C00",
                      borderRadius: "5px",
                    }}
                  >
                    <RiBarChartBoxFill size={25} />
                  </IconButton>
                  <ExploreTypography variant="h6">Sales</ExploreTypography>
                  <Typography>350+ jobs openings</Typography>
                </CardContent>
              </CareerCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CareerCard
                onMouseEnter={(e) => {
                  e.currentTarget.style.transition =
                    "background-color .5s, color .5s";
                  e.currentTarget.style.backgroundColor = "#f04a0c";
                  e.currentTarget.style.color = "#fff";
                  const iconButton =
                    e.currentTarget.querySelector(".icon-button");
                  iconButton.style.transition =
                    "background-color .5s, color .5s";
                  iconButton.style.backgroundColor = "";
                  iconButton.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "black";
                  const iconButton =
                    e.currentTarget.querySelector(".icon-button");
                  iconButton.style.backgroundColor = "#fff2f2";
                  iconButton.style.color = "#f04a0c";
                }}
              >
                <CardContent>
                  <IconButton
                    className="icon-button"
                    style={{
                      backgroundColor: "#fff2f2",
                      color: "#ff0101",
                      borderRadius: "5px",
                    }}
                  >
                    <RiMegaphoneFill size={25} />
                  </IconButton>
                  <ExploreTypography variant="h6">Marketing</ExploreTypography>
                  <Typography>500+ jobs openings</Typography>
                </CardContent>
              </CareerCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CareerCard
                onMouseEnter={(e) => {
                  e.currentTarget.style.transition =
                    "background-color .5s, color .5s";
                  e.currentTarget.style.backgroundColor = "#f04a0c";
                  e.currentTarget.style.color = "#fff";
                  const iconButton =
                    e.currentTarget.querySelector(".icon-button");
                  iconButton.style.transition =
                    "background-color .5s, color .5s";

                  iconButton.style.backgroundColor = "";
                  iconButton.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "black";
                  const iconButton =
                    e.currentTarget.querySelector(".icon-button");
                  iconButton.style.backgroundColor = "#fff8e3";
                  iconButton.style.color = "#fbbc09";
                }}
              >
                <CardContent>
                  <IconButton
                    className="icon-button"
                    style={{
                      backgroundColor: "#fff8e3",
                      color: "#fbbc09",
                      borderRadius: "5px",
                    }}
                  >
                    <RiWallet3Fill size={25} />
                  </IconButton>
                  <ExploreTypography variant="h6">Finance</ExploreTypography>
                  <Typography>200+ jobs openings</Typography>
                </CardContent>
              </CareerCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CareerCard
                onMouseEnter={(e) => {
                  e.currentTarget.style.transition =
                    "background-color .5s, color .5s";
                  e.currentTarget.style.backgroundColor = "#f04a0c";
                  e.currentTarget.style.color = "#fff";
                  const iconButton =
                    e.currentTarget.querySelector(".icon-button");
                  iconButton.style.transition =
                    "background-color .5s, color .5s";

                  iconButton.style.backgroundColor = "";
                  iconButton.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "black";
                  const iconButton =
                    e.currentTarget.querySelector(".icon-button");
                  iconButton.style.backgroundColor = "#e7edf8";
                  iconButton.style.color = "#729ef0";
                }}
              >
                <CardContent>
                  <IconButton
                    className="icon-button"
                    style={{
                      backgroundColor: "#e7edf8",
                      color: "#729ef0",
                      borderRadius: "5px",
                    }}
                  >
                    <RiCarFill size={25} />
                  </IconButton>
                  <ExploreTypography variant="h6">Automobile</ExploreTypography>
                  <Typography>250+ jobs openings</Typography>
                </CardContent>
              </CareerCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CareerCard
                onMouseEnter={(e) => {
                  e.currentTarget.style.transition =
                    "background-color .5s, color .5s";
                  e.currentTarget.style.backgroundColor = "#f04a0c";
                  e.currentTarget.style.color = "#fff";
                  const iconButton =
                    e.currentTarget.querySelector(".icon-button");
                  iconButton.style.transition =
                    "background-color .5s, color .5s";

                  iconButton.style.backgroundColor = "";
                  iconButton.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "black";
                  const iconButton =
                    e.currentTarget.querySelector(".icon-button");
                  iconButton.style.backgroundColor = "#f1fef5";
                  iconButton.style.color = "#34a753";
                }}
              >
                <CardContent>
                  <IconButton
                    className="icon-button"
                    style={{
                      backgroundColor: "#f1fef5",
                      color: "#34a753",
                      borderRadius: "5px",
                    }}
                  >
                    <RiTruckFill size={25} />
                  </IconButton>
                  <ExploreTypography variant="h6">
                    Logistics / Delivery
                  </ExploreTypography>
                  <Typography>1k+ jobs openings</Typography>
                </CardContent>
              </CareerCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CareerCard
                onMouseEnter={(e) => {
                  e.currentTarget.style.transition =
                    "background-color .5s, color .5s";
                  e.currentTarget.style.backgroundColor = "#f04a0c";
                  e.currentTarget.style.color = "#fff";
                  const iconButton =
                    e.currentTarget.querySelector(".icon-button");
                  iconButton.style.transition =
                    "background-color .5s, color .5s";

                  iconButton.style.backgroundColor = "";
                  iconButton.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "black";
                  const iconButton =
                    e.currentTarget.querySelector(".icon-button");
                  iconButton.style.backgroundColor = "#f6f5ff";
                  iconButton.style.color = "#DC5C00";
                }}
              >
                <CardContent>
                  <IconButton
                    className="icon-button"
                    style={{
                      backgroundColor: "#f6f5ff",
                      color: "#DC5C00",
                      borderRadius: "5px",
                    }}
                  >
                    <RiComputerFill size={25} />
                  </IconButton>
                  <ExploreTypography variant="h6">Admin</ExploreTypography>
                  <Typography>100+ jobs openings</Typography>
                </CardContent>
              </CareerCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CareerCard
                onMouseEnter={(e) => {
                  e.currentTarget.style.transition =
                    "background-color .5s, color .5s";
                  e.currentTarget.style.backgroundColor = "#f04a0c";
                  e.currentTarget.style.color = "#fff";
                  const iconButton =
                    e.currentTarget.querySelector(".icon-button");
                  iconButton.style.transition =
                    "background-color .5s, color .5s";

                  iconButton.style.backgroundColor = "";
                  iconButton.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "black";
                  const iconButton =
                    e.currentTarget.querySelector(".icon-button");
                  iconButton.style.backgroundColor = "#f0fffe";
                  iconButton.style.color = "#3ac2ba";
                }}
              >
                <CardContent>
                  <IconButton
                    className="icon-button"
                    style={{
                      backgroundColor: "#f0fffe",
                      color: "#3ac2ba",
                      borderRadius: "5px",
                    }}
                  >
                    <RiBuildingFill size={25} />
                  </IconButton>
                  <ExploreTypography variant="h6">
                    Construction
                  </ExploreTypography>
                  <Typography>500+ jobs openings</Typography>
                </CardContent>
              </CareerCard>
            </Grid>

            {/* Add other categories here */}
          </Grid>
          <Grid display={"flex"} justifyContent={"center"}>
            <CategoriesButton variant="contained">
              View All Categories
            </CategoriesButton>
          </Grid>
        </Container>
      </section>

      {/* Job Openings Section */}
      <section id="job">
        <Container>
          <LatestTypography variant="h3" align="center">
            <span style={{ color: "#fa6021" }}>Latest & Top</span> Job Openings
          </LatestTypography>
          <Typography align="center" color={"gray"} marginTop={"5vh"}>
            Discover Exciting New Opportunities and High-Demand Positions
            Available Now in <br /> Top Industries and Companies
          </Typography>
          <Grid container spacing={2} mt={5}>
            <Grid item xs={12} sm={6} md={4}>
              <JobCard
                sx={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: (theme) => theme.shadows[6],
                  },
                }}
                onMouseEnter={(e) => {
                  const elementsToStyle = [
                    ".button",
                    ".button1",
                    ".button2",
                    ".text",
                    ".usa",
                  ];

                  e.currentTarget.style.transition =
                    "background-color .5s, color .5s";
                  e.currentTarget.style.backgroundColor = "#f04a0c";
                  e.currentTarget.style.color = "#fff";

                  elementsToStyle.forEach((selector) => {
                    const element = e.currentTarget.querySelector(selector);
                    if (element) {
                      element.style.backgroundColor = "";
                      element.style.color = "white";
                    }
                  });
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "black";

                  const elementsToStyle = [
                    {
                      selector: ".button",
                      bgColor: "#e7edf8",
                      color: "#4680e7",
                    },
                    {
                      selector: ".button1",
                      bgColor: "#f6efef",
                      color: "#f04a0c",
                    },
                    {
                      selector: ".button2",
                      bgColor: "#f0fffe",
                      color: "#3ac2ba",
                    },
                    { selector: ".text", color: "gray" },
                    { selector: ".usa", color: "gray" },
                  ];

                  elementsToStyle.forEach(({ selector, bgColor, color }) => {
                    const element = e.currentTarget.querySelector(selector);
                    if (element) {
                      if (bgColor) element.style.backgroundColor = bgColor;
                      element.style.color = color;
                    }
                  });
                }}
              >
                <CardContent>
                  <Grid container>
                    <StyleImg
                      src={Figma}
                      width={"30px"}
                      height={"30px"}
                    ></StyleImg>
                    <Grid item ml={2}>
                      <JobTypography>Figma</JobTypography>
                      <USATypography className="usa">USA</USATypography>
                    </Grid>
                  </Grid>
                  <JobTypography variant="h6" marginTop={"10px"}>
                    Senior Product Engineer
                  </JobTypography>
                  <Typography color={"gray"} margin={"5px"} className="text">
                    Lead the development of innovative product solutions,
                    leveraging your expertise in engineering and product
                    management to drive success.
                  </Typography>
                  <Grid container spacing={2} mt={1}>
                    <Grid item>
                      <PositionButton className="button">
                        {" "}
                        12 Positions{" "}
                      </PositionButton>
                    </Grid>
                    <Grid item>
                      <TimeButton className="button1"> Full Time </TimeButton>
                    </Grid>
                    <Grid item>
                      <AmountButton className="button2">
                        {" "}
                        $1,45,000/Year{" "}
                      </AmountButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </JobCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <JobCard
                sx={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: (theme) => theme.shadows[6],
                  },
                }}
                onMouseEnter={(e) => {
                  const elementsToStyle = [
                    ".button",
                    ".button1",
                    ".button2",
                    ".text",
                    ".usa",
                  ];

                  e.currentTarget.style.transition =
                    "background-color .5s, color .5s";
                  e.currentTarget.style.backgroundColor = "#f04a0c";
                  e.currentTarget.style.color = "#fff";

                  elementsToStyle.forEach((selector) => {
                    const element = e.currentTarget.querySelector(selector);
                    if (element) {
                      element.style.backgroundColor = "";
                      element.style.color = "white";
                    }
                  });
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "black";

                  const elementsToStyle = [
                    {
                      selector: ".button",
                      bgColor: "#e7edf8",
                      color: "#4680e7",
                    },
                    {
                      selector: ".button1",
                      bgColor: "#f6efef",
                      color: "#f04a0c",
                    },
                    {
                      selector: ".button2",
                      bgColor: "#f0fffe",
                      color: "#3ac2ba",
                    },
                    { selector: ".text", color: "gray" },
                    { selector: ".usa", color: "gray" },
                  ];

                  elementsToStyle.forEach(({ selector, bgColor, color }) => {
                    const element = e.currentTarget.querySelector(selector);
                    if (element) {
                      if (bgColor) element.style.backgroundColor = bgColor;
                      element.style.color = color;
                    }
                  });
                }}
              >
                <CardContent>
                  <Grid container>
                    <StyleImg
                      src={Google}
                      width={"30px"}
                      height={"30px"}
                    ></StyleImg>
                    <Grid item ml={2}>
                      <JobTypography>Google</JobTypography>
                      <USATypography className="usa">USA</USATypography>
                    </Grid>
                  </Grid>
                  <JobTypography variant="h6" marginTop={"10px"}>
                    Project Manager
                  </JobTypography>
                  <Typography color={"gray"} margin={"5px"} className="text">
                    Manage project timelines and budgets to ensure successful
                    delivery of projects on schedule, while maintaining clear
                    communication with stakeholders.
                  </Typography>
                  <Grid container spacing={2} mt={1}>
                    <Grid item>
                      <PositionButton className="button">
                        2 Positions
                      </PositionButton>
                    </Grid>
                    <Grid item>
                      <TimeButton className="button1">Full Time </TimeButton>
                    </Grid>
                    <Grid item>
                      <AmountButton className="button2">
                        95,000/Year
                      </AmountButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </JobCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <JobCard
                sx={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: (theme) => theme.shadows[6],
                  },
                }}
                onMouseEnter={(e) => {
                  const elementsToStyle = [
                    ".button",
                    ".button1",
                    ".button2",
                    ".text",
                    ".usa",
                  ];

                  e.currentTarget.style.transition =
                    "background-color .5s, color .5s";
                  e.currentTarget.style.backgroundColor = "#f04a0c";
                  e.currentTarget.style.color = "#fff";

                  elementsToStyle.forEach((selector) => {
                    const element = e.currentTarget.querySelector(selector);
                    if (element) {
                      element.style.backgroundColor = "";
                      element.style.color = "white";
                    }
                  });
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "black";

                  const elementsToStyle = [
                    {
                      selector: ".button",
                      bgColor: "#e7edf8",
                      color: "#4680e7",
                    },
                    {
                      selector: ".button1",
                      bgColor: "#f6efef",
                      color: "#f04a0c",
                    },
                    {
                      selector: ".button2",
                      bgColor: "#f0fffe",
                      color: "#3ac2ba",
                    },
                    { selector: ".text", color: "gray" },
                    { selector: ".usa", color: "gray" },
                  ];

                  elementsToStyle.forEach(({ selector, bgColor, color }) => {
                    const element = e.currentTarget.querySelector(selector);
                    if (element) {
                      if (bgColor) element.style.backgroundColor = bgColor;
                      element.style.color = color;
                    }
                  });
                }}
              >
                <CardContent>
                  <Grid container>
                    <StyleImg
                      src={Linkedin}
                      width={"30px"}
                      height={"30px"}
                    ></StyleImg>
                    <Grid item ml={2}>
                      <JobTypography>LinkedIn</JobTypography>
                      <USATypography className="usa">Germany</USATypography>
                    </Grid>
                  </Grid>
                  <JobTypography variant="h6" marginTop={"10px"}>
                    Full Stack Developer
                  </JobTypography>
                  <Typography color={"gray"} margin={"5px"} className="text">
                    Develop and maintain both front-end and back-end components
                    of web applications, utilizing a wide range of programming
                    languages and frameworks.
                  </Typography>
                  <Grid container spacing={2} mt={1}>
                    <Grid item>
                      <PositionButton className="button">
                        10 Positions
                      </PositionButton>
                    </Grid>
                    <Grid item>
                      <TimeButton className="button1">Full Time </TimeButton>
                    </Grid>
                    <Grid item>
                      <AmountButton className="button2">
                        35,000/Year
                      </AmountButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </JobCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <JobCard
                sx={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: (theme) => theme.shadows[6],
                  },
                }}
                onMouseEnter={(e) => {
                  const elementsToStyle = [
                    ".button",
                    ".button1",
                    ".button2",
                    ".text",
                    ".usa",
                  ];

                  e.currentTarget.style.transition =
                    "background-color .5s, color .5s";
                  e.currentTarget.style.backgroundColor = "#f04a0c";
                  e.currentTarget.style.color = "#fff";

                  elementsToStyle.forEach((selector) => {
                    const element = e.currentTarget.querySelector(selector);
                    if (element) {
                      element.style.backgroundColor = "";
                      element.style.color = "white";
                    }
                  });
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "black";

                  const elementsToStyle = [
                    {
                      selector: ".button",
                      bgColor: "#e7edf8",
                      color: "#4680e7",
                    },
                    {
                      selector: ".button1",
                      bgColor: "#f6efef",
                      color: "#f04a0c",
                    },
                    {
                      selector: ".button2",
                      bgColor: "#f0fffe",
                      color: "#3ac2ba",
                    },
                    { selector: ".text", color: "gray" },
                    { selector: ".usa", color: "gray" },
                  ];

                  elementsToStyle.forEach(({ selector, bgColor, color }) => {
                    const element = e.currentTarget.querySelector(selector);
                    if (element) {
                      if (bgColor) element.style.backgroundColor = bgColor;
                      element.style.color = color;
                    }
                  });
                }}
              >
                <CardContent>
                  <Grid container>
                    <StyleImg
                      src={Amazon}
                      width={"30px"}
                      height={"30px"}
                    ></StyleImg>
                    <Grid item ml={2}>
                      <JobTypography>Amazon</JobTypography>
                      <USATypography className="usa">USA</USATypography>
                    </Grid>
                  </Grid>
                  <JobTypography variant="h6" marginTop={"10px"}>
                    Front-end Developer
                  </JobTypography>
                  <Typography color={"gray"} margin={"5px"} className="text">
                    Design and implement user interfaces using HTML, CSS, and
                    JavaScript, collaborating closely with designers and
                    back-end developers.
                  </Typography>
                  <Grid container spacing={2} mt={1}>
                    <Grid item>
                      <PositionButton className="button">
                        20 Positions
                      </PositionButton>
                    </Grid>
                    <Grid item>
                      <TimeButton className="button1">Full Time </TimeButton>
                    </Grid>
                    <Grid item>
                      <AmountButton className="button2">
                        1,01,000/Year
                      </AmountButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </JobCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <JobCard
                sx={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: (theme) => theme.shadows[6],
                  },
                }}
                onMouseEnter={(e) => {
                  const elementsToStyle = [
                    ".button",
                    ".button1",
                    ".button2",
                    ".text",
                    ".usa",
                  ];

                  e.currentTarget.style.transition =
                    "background-color .5s, color .5s";
                  e.currentTarget.style.backgroundColor = "#f04a0c";
                  e.currentTarget.style.color = "#fff";

                  elementsToStyle.forEach((selector) => {
                    const element = e.currentTarget.querySelector(selector);
                    if (element) {
                      element.style.backgroundColor = "";
                      element.style.color = "white";
                    }
                  });
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "black";

                  const elementsToStyle = [
                    {
                      selector: ".button",
                      bgColor: "#e7edf8",
                      color: "#4680e7",
                    },
                    {
                      selector: ".button1",
                      bgColor: "#f6efef",
                      color: "#f04a0c",
                    },
                    {
                      selector: ".button2",
                      bgColor: "#f0fffe",
                      color: "#3ac2ba",
                    },
                    { selector: ".text", color: "gray" },
                    { selector: ".usa", color: "gray" },
                  ];

                  elementsToStyle.forEach(({ selector, bgColor, color }) => {
                    const element = e.currentTarget.querySelector(selector);
                    if (element) {
                      if (bgColor) element.style.backgroundColor = bgColor;
                      element.style.color = color;
                    }
                  });
                }}
              >
                <CardContent>
                  <Grid container>
                    <StyleImg
                      src={Twitter}
                      width={"30px"}
                      height={"30px"}
                    ></StyleImg>
                    <Grid item ml={2}>
                      <JobTypography>Twitter</JobTypography>
                      <USATypography className="usa">USA</USATypography>
                    </Grid>
                  </Grid>
                  <JobTypography variant="h6" marginTop={"10px"}>
                    ReactJS Developer
                  </JobTypography>
                  <Typography color={"gray"} margin={"5px"} className="text">
                    Specialize in building dynamic and interactive user
                    interfaces using the ReactJS library, leveraging your
                    expertise in JavaScript and front-end development.
                  </Typography>
                  <Grid container spacing={2} mt={1}>
                    <Grid item>
                      <PositionButton className="button">
                        6 Positions
                      </PositionButton>
                    </Grid>
                    <Grid item>
                      <TimeButton className="button1">Full Time </TimeButton>
                    </Grid>
                    <Grid item>
                      <AmountButton className="button2">
                        98,000/Year
                      </AmountButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </JobCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <JobCard
                sx={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: (theme) => theme.shadows[6],
                  },
                }}
                onMouseEnter={(e) => {
                  const elementsToStyle = [
                    ".button",
                    ".button1",
                    ".button2",
                    ".text",
                    ".usa",
                  ];

                  e.currentTarget.style.transition =
                    "background-color .5s, color .5s";
                  e.currentTarget.style.backgroundColor = "#f04a0c";
                  e.currentTarget.style.color = "#fff";

                  elementsToStyle.forEach((selector) => {
                    const element = e.currentTarget.querySelector(selector);
                    if (element) {
                      element.style.backgroundColor = "";
                      element.style.color = "white";
                    }
                  });
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "black";

                  const elementsToStyle = [
                    {
                      selector: ".button",
                      bgColor: "#e7edf8",
                      color: "#4680e7",
                    },
                    {
                      selector: ".button1",
                      bgColor: "#f6efef",
                      color: "#f04a0c",
                    },
                    {
                      selector: ".button2",
                      bgColor: "#f0fffe",
                      color: "#3ac2ba",
                    },
                    { selector: ".text", color: "gray" },
                    { selector: ".usa", color: "gray" },
                  ];

                  elementsToStyle.forEach(({ selector, bgColor, color }) => {
                    const element = e.currentTarget.querySelector(selector);
                    if (element) {
                      if (bgColor) element.style.backgroundColor = bgColor;
                      element.style.color = color;
                    }
                  });
                }}
              >
                <CardContent>
                  <Grid container>
                    <StyleImg
                      src={Microsoft}
                      width={"30px"}
                      height={"30px"}
                    ></StyleImg>
                    <Grid item ml={2}>
                      <JobTypography>Microsoft</JobTypography>
                      <USATypography className="usa">USA</USATypography>
                    </Grid>
                  </Grid>
                  <JobTypography variant="h6" marginTop={"10px"}>
                    Python Developer
                  </JobTypography>
                  <Typography color={"gray"} margin={"5px"} className="text">
                    Develop scalable and efficient backend systems and
                    applications using Python, utilizing your proficiency in
                    Python programming and software development.
                  </Typography>
                  <Grid container spacing={2} mt={1}>
                    <Grid item>
                      <PositionButton className="button">
                        9 Positions
                      </PositionButton>
                    </Grid>
                    <Grid item>
                      <TimeButton className="button1">Full Time </TimeButton>
                    </Grid>
                    <Grid item>
                      <AmountButton className="button2">
                        $80,000/Year
                      </AmountButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </JobCard>
            </Grid>
            {/* Add other
            {/* Add other job cards here */}
          </Grid>
        </Container>
      </section>

      {/* Offer Section */}
      <section id="service">
        <Container>
          <WhatOurTypography variant="h3" align="center">
            What We <span style={{ color: "#fa6021" }}>Offer</span>
          </WhatOurTypography>
          <Typography align="center" color={"gray"} marginTop={"4vh"}>
            Explore the Benefits and Services We Provide to Enhance Your Job
            Search and <br /> Career Success
          </Typography>
          <Grid container spacing={3} mt={5}>
            <Grid item xs={12} sm={4}>
              <Card elevation={0}>
                <CardMedia
                  component="img"
                  image={Offer1}
                  alt="Job Recommendation"
                />
                <CardContent>
                  <Grid container>
                    <Grid item>
                      <Typography>01</Typography>
                    </Grid>
                    <Grid>
                      <BorderTypography></BorderTypography>
                    </Grid>
                    <Grid item>
                      <RecommendationTypography>
                        <span style={{ fontWeight: "bold" }}>
                          Job Recommendation
                        </span>
                        <br /> Personalized job matches tailored <br /> to your
                        skills and preferences
                      </RecommendationTypography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card elevation={0}>
                <CardMedia
                  component="img"
                  image={Offer2}
                  alt=" Create & Build Portfolio"
                />
                <CardContent>
                  <Grid container>
                    <Grid item>
                      <Typography>02</Typography>
                    </Grid>
                    <Grid>
                      <BorderTypography></BorderTypography>
                    </Grid>
                    <Grid item>
                      <RecommendationTypography>
                        <span style={{ fontWeight: "bold" }}>
                          Create & Build Portfolio
                        </span>
                        <br />
                        Showcase your expertise with <br /> professional
                        portfolio design
                      </RecommendationTypography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card elevation={0}>
                <CardMedia
                  component="img"
                  image={Offer3}
                  alt=" Career Consultation"
                />
                <CardContent>
                  <Grid container>
                    <Grid item>
                      <Typography>03</Typography>
                    </Grid>
                    <Grid>
                      <BorderTypography></BorderTypography>
                    </Grid>
                    <Grid item>
                      <RecommendationTypography>
                        <span style={{ fontWeight: "bold" }}>
                          Career Consultation
                        </span>
                        <br />
                        Receive expert advice to navigate <br /> your career
                        path
                      </RecommendationTypography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            {/* Add other offers here */}
          </Grid>
        </Container>
      </section>

      {/* Client Testimonials Section */}
      <section id="client">
        <Container>
          <WhatOurTypography variant="h3" align="center">
            What Our <span style={{ color: "#fa6021" }}>Client Say</span>
          </WhatOurTypography>
          <Typography align="center" color={"gray"} marginTop={"4vh"}>
            Read Testimonials and Success Stories from Our Satisfied Job Seekers
            and <br /> Employers to See How We Make a Difference
          </Typography>
          <Swiper>
            <SwiperSlide>
              <Card elevation={0}>
                <Grid container justifyContent="center" alignItems="center">
                  <Grid item>
                    <CardMediaStyle
                      component="img"
                      image={Client1}
                      alt="Sarah Patel"
                    />
                  </Grid>
                </Grid>
                <CardContent>
                  <Typography textAlign={"center"} marginTop={"2vh"}>
                    Searching for a job can be overwhelming, but this platform
                    made it simple and <br /> efficient. I uploaded my resume,
                    applied to a few positions, and soon enough, I was <br />{" "}
                    hired! Thank you for helping me kickstart my career!
                  </Typography>
                  <div>
                    <Grid textAlign={"center"} mt={5}>
                      <FaStar color="goldenrod" /> <FaStar color="goldenrod" />{" "}
                      <FaStar color="goldenrod" />
                      <FaStar color="goldenrod" /> <FaStar color="goldenrod" />
                    </Grid>
                  </div>
                  <SarahTypography
                    variant="h6"
                    textAlign={"center"}
                    marginTop={"3vh"}
                  >
                    Sarah Patel
                  </SarahTypography>
                  <Typography
                    textAlign={"center"}
                    marginTop={"5px"}
                    color={"gray"}
                  >
                    Graphic Designer
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
            {/* Add other testimonials here */}
          </Swiper>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
