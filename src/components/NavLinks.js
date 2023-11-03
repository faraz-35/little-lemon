import React from "react";
import { Link } from "react-router-dom";

import "../App.css";
import headerImg from "../images/Little-lemon.png";

export default function NavLinks() {
  return (
    <div>
      <nav className="navbar">
        <img
          src={headerImg}
          alt="logo"
          height={50}
          width={50}
          className="navImg"
        />
        <ul className="list">
          <Link to="/">Home</Link>

          <Link to="/About">About</Link>

          <Link to="/Specials">Menu</Link>

          <Link to="/BookingPage">Reservation</Link>
        </ul>
      </nav>
    </div>
  );
}
