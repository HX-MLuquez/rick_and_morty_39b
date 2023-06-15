import React from "react";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function NavBar({ onSearch }) {
  return (
    <div className="nav">
      <Link to={"/"}>
        <div>LogOut</div>
      </Link>
      <Link to={"/home"}>
        <div>Home</div>
      </Link>
      <Link to={"/about"}>
        <div>About</div>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
