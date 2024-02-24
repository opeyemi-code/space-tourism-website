import React, { useState, useEffect } from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import menu from "../assets/shared/icon-hamburger.svg";
import menuClose from "../assets/shared/icon-close.svg";

function Header() {
  const [imageSrc, setImageSrc] = useState(menu);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", (e) => {
        // Remove "nav-tab" class and border from all links
        navLinks.forEach((link) => {
          link.classList.remove("nav-tab");
          link.style.borderBottom = "none";
        });

        // Add "nav-tab" class and border to the clicked link
        e.currentTarget.classList.add("nav-tab");
      });
    });
  });

  function toggleMenu(e) {
    const nav = document.querySelector("nav");

    if (!nav.classList.contains("toggle-menu")) {
      nav.className += " toggle-menu";
    } else {
      nav.classList.remove("toggle-menu");
    }

    setImageSrc((prev) => (prev === menu ? menuClose : menu));
  }

  return (
    <header className=" d-flex justify-content-between align-items-md-center pt-lg-5 pt-4 px-4 p-md-0">
      <Link to="/" className="ms-md-5">
        <img src={logo} alt="Logo" className="brand-logo" />
      </Link>
      <nav className="mt-0">
        <span
          onClick={toggleMenu}
          id="toggle-btn"
          className="d-md-none d-block float-end"
        >
          <img src={imageSrc} alt="" id="menu-img" />
        </span>
        <ul className="nav menu-list d-none d-md-flex flex-column flex-md-row mt-5 mt-md-0">
          <li className="list-item">
            <Link
              to=""
              className="nav-link text-light py-md-5 py-lg-4 py-2 d-flex"
            >
              <span className="d-lg-block d-none me-1">00 </span> HOME
            </Link>
          </li>
          <li className="list-item">
            <Link
              to="/destination"
              className="nav-link text-light py-md-5 py-lg-4 py-2 d-flex"
            >
              <span className="d-lg-block d-none me-1">01</span> DESTINATION
            </Link>
          </li>
          <li className="list-item">
            <Link
              to="/crew"
              className="nav-link text-light py-md-5 py-lg-4 py-2 d-flex"
            >
              <span className="d-lg-block d-none me-1">02</span> CREW
            </Link>
          </li>
          <li className="list-item">
            <Link
              to="/technology"
              className="nav-link text-light py-md-5 py-lg-4 py-2 d-flex"
            >
              <span className="d-lg-block d-none me-1">03 </span>TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
