import { Button } from "@mui/material";

export const HeaderButton = (props) => {
  return (
    <Button
      style={{
        fontSize: "13px",
        fontWeight: "bold",
        marginTop: "7vh",
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};
