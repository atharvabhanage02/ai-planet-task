import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", height: "64px", boxShadow: "none" }}
      >
        <Toolbar sx={{ position: "absolute", left: "142px" }}>
          <img src="Assets/AI Planet Logo.png" alt="" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export { Navbar };
