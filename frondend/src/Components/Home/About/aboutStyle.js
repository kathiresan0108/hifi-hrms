import { Typography } from "@mui/material";

export const AboutTypography = (props) => {
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

export const BodyTypography = (props) => {
  return (
    <Typography
      style={{
        // fontWeight: "bold",
        // marginTop: "10vh",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export const StoryTypography = (props) => {
  return (
    <Typography
      style={{
        color: "red",
        fontWeight: "bold",
        // marginTop: "3svh",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};
