import React from 'react';
import { Link } from 'react-router-dom';
import Logos from "../../assets/images/Logo.png";

const Logo = () => (
  <Link to="/" className="flex items-center space-x-2">
    <img src={Logos} alt="Logo" className="h-8" />
  </Link>
);

export default Logo;
