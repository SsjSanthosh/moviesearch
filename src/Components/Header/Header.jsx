import React from "react";
import logo from "../../assets/logo.png";
export default function Header() {
  return (
    <nav class="navbar navbar-light bg-dark">
      <a class="navbar-brand" href="#">
        <img src={logo} width="150px" height="60px" />
      </a>
      <div className="display-4 text-center text-white">MoviesDB Search</div>
    </nav>
  );
}
