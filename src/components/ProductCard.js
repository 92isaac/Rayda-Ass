import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";

export const ProductCard = ({bid, image, name, title}) => {

  // Define a custom style for the product box using MUI's `styled` function
  const ProductBox = styled(Box)({
    boxShadow: "0 0 2px;",
    padding: "1rem",
    borderRadius: "1rem",
  });

  // Define custom styles for the title and price spans
  const TitleSpan = styled("span")({
    fontWeight:'lighter', 
    fontSize:"10px",
    opacity:'0.2',
  });
  const PriceSpan = styled("span")({
    fontWeight:'900', 
    fontSize:"10px",
  });

  // Define a function to abbreviate the product name
  const abbreviateName=(abbr)=>{
    const words = abbr.split(' ');
    const abbreviation = words.map(word => word[0].toUpperCase()).join('');
    return abbreviation;
  }

  return (
    <Box>
      <ProductBox>
        <Box sx={{ backgroundColor: "#F2F4F7", borderRadius:"0.5rem" }}>
          {/* Render the product image */}
          <img src={image} alt="" loading="lazy" style={{margin:"0px auto", width:"90%", height:"90%", objectFit:"contain", aspectRatio:"16/9", display:"block", padding:"8px 0"}}/>
        </Box>
        {/* Render the product name and abbreviation */}
        <Stack direction={"row"} paddingTop={"1rem"}>
          <Box>
            <Box variant="body2" sx={{backgroundColor:'#F2F4F7', width:'17px', height:"17px", borderRadius:"50%",fontSize:"10px", marginRight:"5px"}}>
              <Typography variant="body2" component='p' fontSize={8} sx={{textAlign:"center", verticalAlign: "middle", lineHeight:"17px", fontSize:"13px",}}>{abbreviateName(name)}</Typography>
            </Box>
          </Box>
          <Typography variant="body1" component="p" sx={{ fontSize:"13px", fontWeight:"bold"}}>
            {name} <TitleSpan>(Highest Bidder)</TitleSpan>
          </Typography>
        </Stack>
        {/* Render the product title */}
        <Box marginTop={1}>
          <Typography variant="h6" sx={{ fontSize:"13px", fontWeight:"700"}}>
            {title}
          </Typography>
        </Box>
        {/* Render the product bid */}
        <Stack direction={"row"} marginTop={1}>
          <Typography sx={{ fontSize:"10px", fontWeight:"100"}}>
            Current Bid: <PriceSpan >{bid}</PriceSpan>
          </Typography>
        </Stack>
        {/* Render a button to add the product to the wishlist */}
        <Button variant="outlined"  sx={{ fontSize: "15px", width: "100%", backgroundColor:"#004CCC", color:"#fff", textTransform:"capitalize"}}>
          Add to wishlist
        </Button>
      </ProductBox>
    </Box>
  );
};
