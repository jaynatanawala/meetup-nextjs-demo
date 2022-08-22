import Link from "next/link";
import React from "react";
import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>All Meetups</Link>
          </li>
          <li>
            <Link href={"/new-meetup"}>Add new Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
