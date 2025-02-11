import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import { AboutTypography, StoryTypography, BodyTypography } from "./aboutStyle";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Lottie from "lottie-react"; // Import Lottie from lottie-react
import about from "../../about.json"; // Ensure this is the correct path to your animation JSON file

const AboutUs = () => {
  return (
    <main>
      <Header />
      <Box
        sx={{
          backgroundColor: "#0E0F30",
          color: "white",
          py: 4,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom>
            About Us
          </Typography>

          {/* Render Lottie animation */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              my: 3,
            }}
          >
            <Lottie animationData={about} style={{ height: "300px", width: "300px" }} />
          </Box>

          <Typography variant="body1" sx={{ mt: 3 }}>
            We help people find their dream jobs and companies find the best
            talent.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box>
              <AboutTypography variant="h4" component="h2" gutterBottom>
                About Us
              </AboutTypography>
              <BodyTypography variant="body1">
                &emsp; Welcome to <b>HiFi HRMS</b>, your premier hiring
                consultancy dedicated to connecting exceptional talent with
                outstanding opportunities in the IT industry. Our mission is to
                streamline the hiring process, providing innovative HR solutions
                that empower businesses and professionals alike.
              </BodyTypography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <StoryTypography variant="h5" component="h3">
              Our Story
            </StoryTypography>
            <BodyTypography variant="body1" sx={{ mt: 2 }}>
              &emsp;Founded in 2023, Hi Fi IT Park began with a vision to
              revolutionize the home cleaning experience. We recognized the need
              for high-performance cleaning products that are safe for both your
              home and the environment. Today, we are proud to be a leading name
              in the home care industry, trusted by countless households.
            </BodyTypography>
          </Grid>

          <Grid item xs={12}>
            <StoryTypography variant="h5" component="h3" sx={{ color: "error.main", mt: 4 }}>
              Our Products
            </StoryTypography>
            <BodyTypography variant="body1" sx={{ mt: 2 }}>
              We offer a comprehensive range of HR solutions designed to meet
              all your human resource management needs:
              <ul>
                <li><b>Talent Acquisition:</b> Attract and hire top-tier talent with our strategic recruitment solutions.</li>
                <li><b>Onboarding Solutions:</b> Streamline your onboarding process with our effective and user-friendly tools.</li>
                <li><b>Payroll Management:</b> Ensure accurate and timely payroll processing with our services.</li>
                <li><b>Performance Management:</b> Enhance employee performance with robust management systems.</li>
                <li><b>HR Analytics:</b> Gain valuable insights and make informed decisions with our analytics solutions.</li>
                <li><b>Compliance and Legal:</b> Stay compliant with labor laws and regulations.</li>
                <li><b>Employee Engagement:</b> Foster a positive work environment with our engagement programs.</li>
                <li><b>Training and Development:</b> Equip your workforce with tailored training programs.</li>
              </ul>
            </BodyTypography>
          </Grid>

          <Grid item xs={12}>
            <StoryTypography variant="h5" component="h3" sx={{ color: "error.main", mt: 4 }}>
              Our Commitment
            </StoryTypography>
            <BodyTypography variant="body1" sx={{ mt: 2 }}>
              <p>At Hi Fi IT Park HRMS, we are dedicated to:</p>
              <ul>
                <li><b>Excellence:</b> We strive for excellence in all our services.</li>
                <li><b>Integrity:</b> Our commitment to integrity ensures transparency and ethical standards.</li>
                <li><b>Innovation:</b> Embracing innovative HR technologies and practices.</li>
                <li><b>Client Satisfaction:</b> Our dedicated team is always ready to assist you.</li>
              </ul>
            </BodyTypography>
          </Grid>

          <Grid item xs={12}>
            <StoryTypography variant="h5" component="h3" sx={{ color: "error.main", mt: 4 }}>
              Why Choose Us?
            </StoryTypography>
            <BodyTypography variant="body1" sx={{ mt: 2 }}>
              <ul>
                <li><b>Effective Solutions:</b> Our HR services address even the most complex challenges.</li>
                <li><b>Innovative Practices:</b> Utilizing the latest HR technologies to enhance processes.</li>
                <li><b>Trusted Expertise:</b> Our team provides reliable and consistent HR consultancy.</li>
                <li><b>Client Focus:</b> We prioritize your needs with tailored solutions.</li>
              </ul>
            </BodyTypography>
          </Grid>

          <Grid item xs={12}>
            <StoryTypography variant="h5" component="h3" sx={{ color: "error.main", mt: 4 }}>
              Join Our Community
            </StoryTypography>
            <BodyTypography variant="body1">
              <p>
                &emsp; Become part of the Hi Fi IT Park HRMS family and stay informed
                about our latest HR solutions, industry insights, and special
                offers.
              </p>
            </BodyTypography>
            <BodyTypography variant="body1">
              Thank you for choosing Hi Fi IT Park HRMS for your human resource
              management needs. We look forward to helping you achieve your HR
              goals and enhance your workforce management!
            </BodyTypography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </main>
  );
};

export default AboutUs;
