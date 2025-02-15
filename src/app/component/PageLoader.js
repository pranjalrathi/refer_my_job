"use client";
import React from 'react';
import { Box } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import { CircularProgress } from '@mui/material';

/* const useStyles = makeStyles(theme => ({
  circularProgressRoot: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 999999,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})); */

const PageLoader = () => {
//   const classes = useStyles();

  return (
    <Box className={"circularProgressRoot"}>
      <CircularProgress />
    </Box>
  );
};

export default PageLoader;
