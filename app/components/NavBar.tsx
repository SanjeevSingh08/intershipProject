import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { HiChevronDown } from "react-icons/hi";

import { AiOutlineUser } from "react-icons/ai";
import Hamburger from "./Hamburger";

const NavBar = () => {
  return (
    <section className="navbar_section">
      <div className="navbar_subsection max_width">
        <div className="nav_content">
          <div className="nav_left">
            <Link className="logoLink" href="/">
              <Image src={logo} alt="Novadr" width={127} height={32} />
            </Link>
            <ul className="navUl">
              <li className="navLi">
                <div className="navLinks">
                  <span className="navLinksText">Courses</span>
                  <span className="downarrow">
                    <HiChevronDown />
                  </span>
                </div>
              </li>
              <li className="navLi">
                <div className="navLinks">
                  <span className="navLinksText">Resources</span>
                  <span className="downarrow">
                    <HiChevronDown />
                  </span>
                </div>
              </li>
              <li className="navLi">
                <div className="navLinks">
                  <span className="navLinksText">Partners</span>
                  <span className="downarrow">
                    <HiChevronDown />
                  </span>
                </div>
              </li>
              <li className="navLi">
                <div className="navLinks">
                  <span className="navLinksText">Partners</span>
                  <span className="downarrow">
                    <HiChevronDown />
                  </span>
                </div>
              </li>
              <li className="navLi">
                <div className="navLinks">
                  <span className="navLinksText">Our Impact</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="nav_right">
            <div className="navright_content">
              <button className="buttonBasic contactUsb ">Contact Us</button>
              <button className="buttonBasic loginbtn ">
                <span className="usericon">
                  <AiOutlineUser />
                </span>
                <span className="loginText">Log In</span>
              </button>
              <Hamburger/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
