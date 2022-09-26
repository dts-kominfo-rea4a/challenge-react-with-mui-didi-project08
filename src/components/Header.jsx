// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import { Typography } from '@mui/material';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app

const Header = () => {
  return (
    <>
      <Typography variant="h3" sx={{marginTop: '10px'}}>
        Call a Friend
      </Typography>
      <Typography variant="subtitle1" sx={{marginTop: '10px'}}>
        your friendly contact app
      </Typography>
    </>
  );
};

export default Header;
