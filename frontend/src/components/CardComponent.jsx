import { Card } from "@mui/material";
import React from "react";

const CardComponent = (props) => {
  return (
    <Card sx={{ padding: "20px" }}>
      {props.children}
    </Card>
  );
};

export default CardComponent;
