import React from "react";
import "./NavBar.css";
import letsplay from "../images/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const redirectlogin = () => {
    window.location.href = "/login";
  };

  const redirectreg = () => {
    window.location.href = "/register";
  };
  return (
    <div class="navbarrr">
      <nav class="navbar navbar-expand-lg fixed-top navbar-custom  ">
        {/* <a class="navbar-brand" href="/#">
          Lets Play
        </a> */}
        <img class="logo1" src={letsplay}></img>

        <button
          class="navbar-toggler my-toggler bg-light bgmenu"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-custom"
          aria-controls="navbar-custom"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon menuicon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-custom" id="navbar-custom">
          <ul class="navbar-nav  ml-auto linktab">
            <li class="">
              <Link class="nav-link " to="/">
                Home
              </Link>
            </li>
            <li class="">
              <Link class="nav-link " to="/aboutus">
                About Us
              </Link>
            </li>
            <li class="nav-item active">
              <Link
                class="btn navbtn navBtnReg"
                onclick={redirectlogin}
              to="/login">
                Sign In
              </Link>{" "}
            </li>
            <li class="nav-item active">
              <Link
                class="btn navbtn navBtnReg"
                onclick={redirectreg}
                to="/register">
                Sign Up
              </Link>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
