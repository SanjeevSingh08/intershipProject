import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const SliderBar = () => {
  return (
    <section className="slider_section hide">
      <div className="slidersub">
        <div>
          <button id="menubtn" className="buttonBasic ">
            <span className="usericon">
              <AiOutlineUser />
            </span>
            <span className="loginText">Log In</span>
          </button>
        </div>
        <div className="slidersub2">
          <p>Courses</p>
          <ul>
            <li>BIM for Architects</li>
            <li>Master Computational Design</li>
            <li>BIM for civil engineers</li>
          </ul>
        </div>
        <div className="slidersub3">
          <ul>
            <li>Become a mentor</li>
            <li>Hiring partners</li>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Career</li>
            <li>Events</li>
            <li>Our Impact</li>
          </ul>
        </div>
        <div className="slidersub4">
          <p>
            {" "}
            Join thousands of people who organise work and life with Novatar
          </p>
        </div>
      </div>
    </section>
  );
};

export default SliderBar;
