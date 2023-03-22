import React from 'react';
import { Alert, AlertTitle, styled } from '@mui/material';
import { Box } from '@mui/material';


const ErrorBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',

})

const ErrorPage = ({ message }) => {
  return (
    <ErrorBox>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
    </ErrorBox>
  );
};

export default ErrorPage;
