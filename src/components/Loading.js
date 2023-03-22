import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';



const Loading = () => {
  const LoadingBox=styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
  })

  return (
    <LoadingBox>
      <CircularProgress />
    </LoadingBox>
  );
};

export default Loading;
