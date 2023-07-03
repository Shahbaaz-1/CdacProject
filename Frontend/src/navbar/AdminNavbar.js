import React from "react";
import "./NavBar.css";
import letsplay from "../images/logo.png";
import { Link } from "react-router-dom";

const AdminNavBar = () => {
  const redirectlogin = () => {
    window.location.href = "/login";
    localStorage.setItem("role", null);
  };

  return (
    <div className="m-0 p-0">
      <nav class="navbar navbar-expand-lg fixed-top navbar-custom  ">
        {/* <a class="navbar-brand" href="/#">
          Lets Play
        </a> */}
        <img class="logo1" src={letsplay}></img>

        <button
          class="navbar-toggler my-toggler bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-custom"
          aria-controls="navbar-custom"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse navbar-custom m-0 p-0"
          id="navbar-custom"
        >
          <ul class="navbar-nav  ml-auto linktab">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/adminhome">
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/viewuser">
                View Users
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/viewowner">
                View Owners
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/viewground_admin"
              >
                View Grounds
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/viewhall_admin"
              >
                View Halls
              </Link>
            </li>
            {/*
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/viewbooking_admin"
              >
                View Bookings
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/viewcourtbooking_admin"
              >
                View CourtBookings
              </a>
            </li>
*/}

            <li>
              <div class="dropdown nav-item ">
                <li
                  class=" dropdown-toggle bg-black dropdown-toggle "
                  id="dropdown-basic"
                 // id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <a class="nav-link active" aria-current="page">
                    ViewBookings
                  </a>
                </li>
                <div
                  class="dropdown-menu option"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link class="dropdown-item" to="/viewbooking_admin">
                    Grounds
                  </Link>
                  <Link class="dropdown-item" to="/viewcourtbooking_admin">
                    Courts
                  </Link>
                </div>
              </div>
            </li>

            {/* <li class="nav-item active">
              <a
                class="btn navbtn navBtnReg"
                onclick={redirectlogin}
                href="\login"
              >
                Log Out
              </a>{" "}
            </li> */}
          </ul>

          <form class="d-flex">
            <button
              class="btn btn-outline-success navBtnReg"
              type="submit"
              onClick={redirectlogin}
            >
              Log Out
            </button>
          </form>
        </div>
      </nav>

      {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <button
                class="btn btn-outline-success navBtnReg"
                type="button"
                // onClick={redirectreg}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default AdminNavBar;
