import React from 'react'
// import { makeStyles } from 'tss-react/mui';
import { Typography, IconButton, Box, Stack, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';



const Welcome = () => {

    return (
      <Stack direction={'row'} justifyContent='space-between'  sx={{display:{xs:'block', sm:"flex",},
      boxShadow: "0 4px 2px -2px gray",
      paddingBottom:'30px',
      marginTop:'20px'
      }}>
            <Box>
            <Typography variant="h6">
              Welcome
            </Typography>
            <Typography variant="body2">
              Your current sales auction and activity.
            </Typography>
            </Box>
            <IconButton color="inherit" edge="end">
              <Badge badgeContent={2} color="error">
              <NotificationsIcon/>
              </Badge>
            </IconButton>
      </Stack>
    );
}

export default Welcome