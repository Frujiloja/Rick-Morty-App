import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className={styles.divStyle}>
      <Link className={styles.linksStyle} to="/home">HOME</Link>
      <Link className={styles.linksStyle} to="/about">ABOUT</Link>
      <Link className={styles.linksStyle} to="/favorites">FAVORITES</Link>
      <SearchBar className={styles.searchStyle} onSearch={props.onSearch} />
    </div>
  );
}