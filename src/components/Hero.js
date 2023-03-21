import { Box, styled, Stack, Typography, Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import React from "react";
import content from "../assets/Content.png";

const Hero = () => {
  const RadialBg = styled(Box)({
    background: "linear-gradient(to bottom right, #B750FF, #FEE080)",
    height: "150px",
    borderRadius: "10px",
    margin: "20px",
  });

  const PositionDiv = styled(Box)({
    position: "relative",
  });
  return (
    <Box
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
          <Typography variant="subtitle1" marginLeft={20}>
            Starts in: 3 days: 2 hours: 24 minutes
          </Typography>
          <Button
            variant="outlined"
            startIcon={<ThumbUpIcon />}
            sx={{ marginRight: "60px", fontSize: "15px" }}
          >
            Accept Invite
          </Button>
        </Stack>
        <Stack direction={"row"} marginLeft={20} marginBottom={1} spacing={1}>
          <Typography
            variant="paragraph"
            sx={{
              color: "#B54708",
              borderRadius: "10px",
              backgroundColor: "#FFFAEB",
              padding: "1px 15px",
            }}
          >
            . Not Live
          </Typography>
          <Typography>Layers Auction</Typography>
        </Stack>
      </PositionDiv>
    </Box>
  );
};

export default Hero;
