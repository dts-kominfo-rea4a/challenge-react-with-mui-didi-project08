// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from "react";
import {} from "./Header.css";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <h1>Call a Friend</h1>
      <h4>Your friendly contact app</h4>
    </>
  );
};

export default Header;
