import { Typography } from "@mui/material";
import * as React from "react";

interface IProps {
  text: string;
}

const SectionHeader: React.FC<IProps> = (props) => {
  return (
    <Typography variant="h5" component="div">
      {props.text}
    </Typography>
  );
};

export default SectionHeader;
