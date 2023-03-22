import { Box, styled, Stack, Typography, Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import React from "react";
import content from "../assets/Content.png";

const Hero = () => {
  // Define a styled component for a radial gradient background
  const RadialBg = styled(Box)({
    background: "linear-gradient(to bottom right, #991FE4, #F99F7B)",
    height: "150px",
    borderRadius: "10px",
    margin: "20px",
  });

  // Define a styled component for a relative positioned div
  const PositionDiv = styled(Box)({
    position: "relative",
  });
  return (
    <Box
      // Set some styles for the main container
      sx={{
        boxShadow: "1px 1px 2px",
        borderRadius: "10px",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <PositionDiv>
        <RadialBg></RadialBg>
        <Box sx={{ position: "absolute", top: "50%", left: "2%" }}>
          <img src={content} alt="" width="120px" height="120px" />
        </Box>
        <Stack direction={"row"} justifyContent="space-between">
          {/* Show a countdown to the event */}
          <Typography
            variant="subtitle1"
            marginLeft={20}
            sx={{
              fontSize: { xs: "10px", sm: "14px" },
              fontWeight: "700",
              marginLeft: { xs: "120px", sm: "150px" },
            }}
          >
            Starts in: 3 days: 2 hours: 24 minutes
          </Typography>
          {/* Show a button to accept the invite */}
          <Button
            variant="outlined"
            startIcon={<ThumbUpIcon />}
            sx={{
              marginRight: { xs: "20px", sm: "60px" },
              color: "#000",
              fontSize: { xs: "6px", sm: "12px" },
            }}
          >
            Accept Invite
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          marginLeft={20}
          marginBottom={1}
          spacing={1}
          sx={{
            marginLeft: { xs: "120px", sm: "150px" },
          }}
        >
          {/* Show a label indicating the event is not live */}
          <Typography
            variant="body2"
            sx={{
              color: "#B54708",
              borderRadius: "10px",
              backgroundColor: "#FFFAEB",
              padding: "1px 15px",
              fontSize: { xs: "6px", sm: "12px" },
            }}
          >
            . Not Live
          </Typography>
          {/* Show a label with the name of the event */}
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "6px", sm: "12px" } }}
          >
            Layers Auction
          </Typography>
        </Stack>
      </PositionDiv>
    </Box>
  );
};

export default Hero;
