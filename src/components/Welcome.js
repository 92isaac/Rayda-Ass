import React from 'react'
import { Typography, IconButton, Box, Stack, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';



const Welcome = () => {

    return (
      <Stack direction={'row'} justifyContent='space-between'  sx={{display:"flex",
      boxShadow: "0 4px 2px -2px gray",
      paddingBottom:'30px',
      marginTop:'20px'
      }}>
            <Box>
            <Typography variant="h6" sx={{fontWeight:"700"}}>
              Welcome
            </Typography>
            <Typography variant="body2">
              Your current sales auction and activity.
            </Typography>
            </Box>
            <IconButton color="inherit" edge="end" sx={{position:"relative"}}>
              <NotificationsIcon />
              <Badge badgeContent={2} color="error" sx={{position:'aboslute', marginTop:"4px"}}/>
              
            </IconButton>
      </Stack>
    );
}

export default Welcome