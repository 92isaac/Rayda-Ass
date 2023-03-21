import React from 'react'
// import { makeStyles } from 'tss-react/mui';
import { Typography, IconButton, Box, Stack, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';



const Welcome = () => {

    return (
      <Stack direction={'row'} justifyContent='space-between' borderBottom={1}  sx={{display:{xs:'block', sm:"flex",}}}>
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