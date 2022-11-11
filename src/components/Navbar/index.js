import React, { useState } from "react";
import Cart from "../Cart";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <header className="w-100 h-100">
      <nav className="navbar-expand-md navbar-dark bg-dark d-flex flex-row">
        <Link  className="navbar-brand" to="/">
          MicroProblems
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/category/electronics">
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/category/jewelery">
                Jewelery
              </Link>
            </li>
          </ul>
          <Cart />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
