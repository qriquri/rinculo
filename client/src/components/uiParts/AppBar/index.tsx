import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const CustomAppBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{bgcolor: 'secondary.main' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color="primary"
            fontWeight="bold"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            りんくろ
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
