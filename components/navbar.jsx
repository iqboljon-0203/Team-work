"use client";
import Link from "next/link";
import classes from "./navbar.module.css";
import { usePathname } from "next/navigation";
const NavbarComponent= () => {
    const path=usePathname();
  return (
    <nav className={classes.navbar}>
      <h1>Logo</h1>
      <ul>
        <li>
            <Link className={path==="/about"?classes.active:null} href="/about">About</Link>
        </li>
        <li>
            <Link className={path==="/info"?classes.active:null} href="/info">Info</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarComponent;
