import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

export const ProductContainer = () => {
  const ProductBox = styled(Box)({
    boxShadow: "1px 1px 1px",
    borderRadius: "20px",
    marginTop: "20px",
    padding: "30px",
  });
  return (
    <ProductBox>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
        alignContent={"center"}
        sx={{
          boxShadow: "1px 1px 1px",
        }}
      >
        <Typography>Featured Items</Typography>
        <Button
          variant="outlined"
          sx={{ fontSize: "15px", textTransform: "capitalize" }}
        >
          View Auction
        </Button>
      </Stack>
    </ProductBox>
  );
};
