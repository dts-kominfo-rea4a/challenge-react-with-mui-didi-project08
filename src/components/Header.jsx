// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from './Divider';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    subtitle1: {
      fontSize: 17,
    },
  },
});

const Header = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h3" sx={{marginTop: '10px'}}>
          Call a Friend
        </Typography>
        <Typography variant="subtitle1" sx={{marginTop: '10px'}}>
          <Divider>Your friendly contact app</Divider>
        </Typography>
      </ThemeProvider>
    </>
  );
};

export default Header;
