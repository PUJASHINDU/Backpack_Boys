import React from 'react';
import LoginComponent from '../Components/LoginComponents'; // Pastikan path ini sesuai dengan lokasi file NavbarComponents
const Loginpage = () => {
  return (
    <div>
      <div initial="hidden" animate="visible">
        <LoginComponent />
      </div>
    </div>
  );
};

export default Loginpage;
