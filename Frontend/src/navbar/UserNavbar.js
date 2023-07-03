import React from "react";
import "./NavBar.css";
import letsplay from "../images/logo.png";
import { Link } from "react-router-dom";

const AdminNavBar = () => {
  const redirectlogin = () => {
   // window.location.href = "/login";
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
          class="navbar-toggler my-toggler bg-black dropdown-toggle"
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
          class="collapse navbar-collapse  navbar-custom m-0 p-0"
          id="navbar-custom"
        >
          <ul class="navbar-nav  ml-auto linktab">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/userhome">
                Home
              </Link>
            </li>

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
                    View&Book
                  </a>
                </li>
                <div
                  class="dropdown-menu option"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link class="dropdown-item" to="/vewground">
                    Grounds
                  </Link>
                  <Link class="dropdown-item" to="/viewhall">
                    Courts
                  </Link>
                </div>
              </div>
            </li>

            {
}

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
                    MyBookings
                  </a>
                </li>
                <div
                  class="dropdown-menu option"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link class="dropdown-item" to="/viewbookings_user">
                    Grounds
                  </Link>
                  <Link class="dropdown-item" to="/viewcourtbookings_user">
                    Courts
                  </Link>
                </div>
              </div>
            </li>

            {
}
            {}
          </ul>

          <Link
              class="btn btn-outline-success navBtnReg"
              //type="button"
              onClick={redirectlogin} 
              //onClick={localStorage.clear()}
              to="/login" >Log' Out</Link>
              
         
        </div>
      </nav>

      {}
    </div>
  );
};

export default AdminNavBar;
