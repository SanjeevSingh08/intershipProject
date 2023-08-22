"use client";
import React, { useEffect, useState } from "react";

const Hamburger = () => {
  const [menuopen, setMenuOpen] = useState(false);
  useEffect(() => {
    const element:any = document.querySelector(".slider_section");
    const element2:any= document.querySelector("#menubtn");
    if (!menuopen) {
      element.classList.add("hide");
      element2.classList.add("hide");
    } else {
      element.classList.remove("hide");
      element2.classList.remove("hide");
    }
  }, [menuopen]);
  
  return (
    <div
      onClick={() => {
        setMenuOpen(!menuopen);
      }}
      className="hamburger"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="black"
        name="svg"
        className="sc-df05291f-0 hmjmaB"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z"
          fill="black"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
          fill="black"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 18C8 17.4477 8.44772 17 9 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H9C8.44772 19 8 18.5523 8 18Z"
          fill="black"
        ></path>
      </svg>
    </div>
  );
};

export default Hamburger;
