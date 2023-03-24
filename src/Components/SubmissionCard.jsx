import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

function SubmissionCard() {
  return (
    <Card sx={{ width: "320px", padding: "24px", borderRadius: "16px" }}>
      <Box sx={{ display: "flex" }}>
        <CardMedia
          sx={{ height: "100px", width: "100px", borderRadius: "8px" }}
          image="/Assets/InterviewMe.png"
          title="green iguana"
        />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ marginLeft: "24px", alignSelf: "center" }}
        >
          Lizard
        </Typography>
      </Box>
      <CardContent sx={{ margin: "24px 0 24px 0", padding: "0px" }}>
        <Typography variant="body2" color="#333333">
          Built with GPT-3, React, and Flask. Practice interviews with AI and
          ace your next interview.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "grid" }}>
        <Typography
          sx={{ justifySelf: "flex-end", fontSize: "14px", color: "#666666" }}
        >
          updated 6 days ago
        </Typography>
      </CardActions>
    </Card>
  );
}
export { SubmissionCard };
