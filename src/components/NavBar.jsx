import React from "react";
import style from "../styles/NavBar.module.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function NavBar({ onSearch, logout }) {
  return (
    <div className={style.nav}>
      <button onClick={logout}>LogOut</button>

      {/* <Link to={"/"}>
        <div>LogOut</div>
      </Link> */}

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
