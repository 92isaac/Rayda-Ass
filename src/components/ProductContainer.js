import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Product } from "./Product";

export const ProductContainer = () => {
    const ProductCardBox = styled(Box)({
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
        rowGap: "2rem",
        columnGap: "1rem",
        marginTop: "2rem",
      });
  const ProductBox = styled(Box)({
    boxShadow: "0 0 2px",
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
          boxShadow: "0 4px 2px -2px gray",
          paddingBottom: "10px",
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
      <ProductCardBox>
      <Product />

      </ProductCardBox>
    </ProductBox>
  );
};
