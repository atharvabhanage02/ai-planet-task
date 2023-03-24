import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function Tabs() {
  return (
    <Box sx={{ flexGrow: 1, margin: "0 150px 0 150px" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "#333333", boxShadow: "none" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "60px",
          }}
        >
          <Box sx={{ display: "flex", gap: "48px" }}>
            <Typography sx={{ borderBottom: "4px solid #44924C" }}>
              All Submissions
            </Typography>
            <Typography>Favourites Submissions</Typography>
          </Box>
          <Box>
            <input />
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
export { Tabs };
