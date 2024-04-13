import React, { useState, useEffect } from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import menu from "../assets/shared/icon-hamburger.svg";
import menuClose from "../assets/shared/icon-close.svg";

function Header() {
  const [imageSrc, setImageSrc] = useState(menu);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const main = document.querySelector("main");

    navLinks.forEach((navLink) => {
      if (navLink.innerText.toLowerCase().includes(main.id)) {
        navLink.classList.add("tab");
      }
    });

    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", (e) => {
        // Remove "nav-tab" class and border from all links
        navLinks.forEach((link) => {
          link.classList.remove("tab");
          link.style.borderBottom = "none";
        });

        // Add "nav-tab" class and border to the clicked link
        e.currentTarget.classList.add("tab");
      });
    });
  }, []);

  function toggleMenu(e) {
    const nav = document.querySelector("nav");

    if (!nav.classList.contains("toggle-menu")) {
      nav.className += " toggle-menu open";
    } else {
      nav.classList.remove("toggle-menu");
    }

    setImageSrc((prev) => (prev === menu ? menuClose : menu));
  }

  return (
    <header className=" d-flex justify-content-between align-items-md-center pt-lg-5 py-4 px-4 p-md-0">
      <Link to="/" className="ms-md-5">
        <img src={logo} alt="Logo" className="brand-logo" />
      </Link>
      <div className="custom-horizontal-rule"></div>
      <nav className="mt-0">
        <span
          onClick={toggleMenu}
          id="toggle-btn"
          className="d-md-none d-block float-end"
        >
          <img
            src={imageSrc}
            alt=""
            id="menu-img"
            className="toggle-menu-img"
          />
        </span>
        <ul className="nav menu-list d-none d-md-flex flex-column flex-md-row mt-5 mt-md-0">
          <li className="list-item fw-bold">
            <Link
              to="/home"
              id="home"
              className="nav-link text-light py-md-5 py-lg-4 py-4 d-flex"
            >
              <span className="d-lg-block d-none me-1">00 </span> HOME
            </Link>
          </li>
          <li className="list-item fw-bold">
            <Link
              to="/destination"
              id="destination"
              className="nav-link text-light py-md-5 py-lg-4 py-4 d-flex"
            >
              <span className="d-lg-block d-none me-1">01</span> DESTINATION
            </Link>
          </li>
          <li className="list-item fw-bold">
            <Link
              to="/crew"
              id="crew"
              className="nav-link text-light py-md-5 py-lg-4 py-4 d-flex"
            >
              <span className="d-lg-block d-none me-1">02</span> CREW
            </Link>
          </li>
          <li className="list-item fw-bold">
            <Link
              to="/technology"
              id="technology"
              className="nav-link text-light py-md-5 py-lg-4 py-4 d-flex"
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
