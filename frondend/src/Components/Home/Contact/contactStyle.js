import {  IconButton, Typography } from "@mui/material";
import React from 'react';

export const IconIconButton = (props) => {
  return (
    <IconButton
      style={{
        color: "#fff",
        backgroundColor: "#0E0F30",
        borderRadius: "10px",
        marginRight: "1vh",
      }}
      {...props}
    >
      {props.children}
    </IconButton>
  );
};
export const AddressTypography = (props) => {
  return (
    <Typography
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "5vh",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};
export const ImgStyle = (props) => {
  return (
    <img
      style={{
        width: 28,
        marginRight: 10,
      }}
      {...props} alt="hifi"
    >
      {props.children}
    </img>
  );
};
