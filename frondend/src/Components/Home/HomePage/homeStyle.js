import { Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";

export const BagImg = (props) => {
  return (
    <img
      style={{
        width: "30px",
        paddingRight: "10px",
      }}
      {...props}
      alt="hifi"
    />
  );
};

export const BagTypography = (props) => {
  return (
    <Button
      style={{
        backgroundColor: "#fff8f5",
        color: "#fa6021",
        fontWeight: "bold",
        borderRadius: "20px",
        textTransform: "capitalize",
        padding: "5px 20px 5px 20px",
        marginTop: "20px",
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export const SearchTypography = (props) => {
  return (
    <Typography
      style={{
        fontWeight: "bold",
        fontFamily: "Arial, sans-serif",
        marginTop: "5vh",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export const PTypography = ({ fontWeight, ...props }) => {
  return (
    <Typography
      style={{
        fontWeight: fontWeight ? "" : "bold",
        color: "gray",
        marginTop: "5vh",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export const JobButton = (props) => {
  return (
    <Button
      style={{
        backgroundColor: "#fa6021",
        textTransform: "capitalize",
        padding: "10px 25px 10px 25px",
        fontSize: "16px",
        marginTop: "5vh",
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

// Modified WorkButton to avoid nesting <Button> within another <Button>
export const WorkButton = (props) => {
  return (
    <div
      style={{
        color: "black",
        marginTop: "4vh",
        cursor: "pointer",
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};

export const HiredTypography = (props) => {
  return (
    <Typography
      style={{
        fontWeight: "bold",
        fontFamily: "Arial, sans-serif",
        marginTop: "15vh",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export const UserTypography = (props) => {
  return (
    <Typography
      style={{
        fontWeight: "bold",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export const HiredCard = (props) => {
  return (
    <Card
      style={{
        boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.1)",
        marginTop: "7vh",
        padding: "5px",
      }}
      {...props}
    >
      {props.children}
    </Card>
  );
};

export const CareerTypography = (props) => {
  return (
    <Typography
      style={{
        fontWeight: "bold",
        marginTop: "15vh",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export const CareerCard = (props) => {
  return (
    <Card
      style={{
        boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.1)",
        padding: "10px",
      }}
      {...props}
    >
      {props.children}
    </Card>
  );
};

export const ExploreTypography = (props) => {
  return (
    <Typography
      style={{
        fontWeight: "bold",
        padding: "10px",
        paddingRight: "10px",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export const CategoriesButton = (props) => {
  return (
    <Button
      style={{
        backgroundColor: "#fa6021",
        textTransform: "capitalize",
        padding: "10px 25px 10px 25px",
        fontSize: "16px",
        marginTop: "5vh",
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export const LatestTypography = (props) => {
  return (
    <Typography
      style={{
        marginTop: "15vh",
        fontWeight: "bold",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export const StyleImg = (props) => {
  return (
    <img
      style={{
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        borderRadius: "50px",
        padding: "10px",
        maxWidth: "50px",
      }}
      {...props}
      alt="hifi"
    />
  );
};

export const USATypography = (props) => {
  return (
    <Typography
      style={{
        color: "gray",
        fontSize: "13px",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export const JobTypography = (props) => {
  return (
    <Typography
      style={{
        fontWeight: "bold",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export const PositionButton = (props) => {
  return (
    <Button
      style={{
        color: "#4680e7",
        backgroundColor: "#e7edf8",
        textTransform: "capitalize",
        fontSize: "13px",
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export const TimeButton = (props) => {
  return (
    <Button
      style={{
        color: "#f04a0c",
        backgroundColor: "#f6efef",
        textTransform: "capitalize",
        fontSize: "13px",
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export const AmountButton = (props) => {
  return (
    <Button
      style={{
        color: "#3ac2ba",
        backgroundColor: "#f0fffe",
        textTransform: "capitalize",
        fontSize: "13px",
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export const JobCard = (props) => {
  return (
    <Card
      style={{
        boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.1)",
      }}
      {...props}
    >
      {props.children}
    </Card>
  );
};

export const WhatOurTypography = (props) => {
  return (
    <Typography
      style={{
        fontWeight: "bold",
        marginTop: "15vh",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export const BorderTypography = (props) => {
  return (
    <Typography
      style={{
        borderRight: "2px solid red",
        height: "80px",
        paddingLeft: "10px",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export const RecommendationTypography = (props) => {
  return (
    <Typography
      style={{
        paddingLeft: "10px",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export const CardMediaStyle = (props) => {
  return (
    <CardMedia
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50px",
        marginTop: "5vh",
      }}
      {...props}
    />
  );
};

export const SarahTypography = (props) => {
  return (
    <Typography
      style={{
        fontWeight: "bold",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};
