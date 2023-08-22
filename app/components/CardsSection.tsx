import React from "react";
import Cards from "./Cards";

const CardsSection = () => {
  const rotatelist = [
    "RIBA structured international project",
    "60% average CTC hike",
    "Dedicated mentors support",

    "Assured Placement Assurance",
  ];

  return (
    <section className="cards_section">
      <div className="rotatetext">
        <div className="rt">
          <div className="rtoverlay"></div>
          <div className="rt1">
            <div className="rtmain">
              <div className="flex gap-4">
                <div className="rotatehelp">
                  {rotatelist.map((item: any, index) => {
                    return (
                      <div key={index} className="rotatingtext">
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#6941c6"
                            name="svg"
                            className="sc-df05291f-0 gROA-DP"
                          >
                            <path
                              d="M12.9701 1.75746C12.8588 1.3123 12.4589 1 12 1C11.5411 1 11.1411 1.3123 11.0299 1.75746L9.72836 6.96345C9.45736 8.04747 9.36609 8.36137 9.21077 8.6041C9.05481 8.84783 8.84783 9.05481 8.6041 9.21077C8.36137 9.36609 8.04747 9.45736 6.96346 9.72836L1.75746 11.0299C1.3123 11.1411 1 11.5411 1 12C1 12.4589 1.3123 12.8589 1.75746 12.9701L6.96345 14.2716C8.04747 14.5426 8.36137 14.6339 8.6041 14.7892C8.84783 14.9452 9.05481 15.1522 9.21077 15.3959C9.36609 15.6386 9.45736 15.9525 9.72836 17.0365L11.0299 22.2425C11.1412 22.6877 11.5411 23 12 23C12.4589 23 12.8589 22.6877 12.9701 22.2425L14.2716 17.0365C14.5426 15.9525 14.6339 15.6386 14.7892 15.3959C14.9452 15.1522 15.1522 14.9452 15.3959 14.7892C15.6386 14.6339 15.9525 14.5426 17.0365 14.2716L22.2425 12.9701C22.6877 12.8589 23 12.4589 23 12C23 11.5411 22.6877 11.1411 22.2425 11.0299L17.0365 9.72836C15.9525 9.45736 15.6386 9.36609 15.3959 9.21077C15.1522 9.05481 14.9452 8.84783 14.7892 8.6041C14.6339 8.36137 14.5426 8.04747 14.2716 6.96346L12.9701 1.75746Z"
                              fill="rgb(83, 56, 158)"
                            ></path>
                          </svg>
                        </span>
                        <h3>{item}</h3>
                      </div>
                    );
                  })}
                </div>
                <div className="rotatehelp">
                  {rotatelist.map((item: any, index) => {
                    return (
                      <div key={index} className="rotatingtext">
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#6941c6"
                            name="svg"
                            className="sc-df05291f-0 gROA-DP"
                          >
                            <path
                              d="M12.9701 1.75746C12.8588 1.3123 12.4589 1 12 1C11.5411 1 11.1411 1.3123 11.0299 1.75746L9.72836 6.96345C9.45736 8.04747 9.36609 8.36137 9.21077 8.6041C9.05481 8.84783 8.84783 9.05481 8.6041 9.21077C8.36137 9.36609 8.04747 9.45736 6.96346 9.72836L1.75746 11.0299C1.3123 11.1411 1 11.5411 1 12C1 12.4589 1.3123 12.8589 1.75746 12.9701L6.96345 14.2716C8.04747 14.5426 8.36137 14.6339 8.6041 14.7892C8.84783 14.9452 9.05481 15.1522 9.21077 15.3959C9.36609 15.6386 9.45736 15.9525 9.72836 17.0365L11.0299 22.2425C11.1412 22.6877 11.5411 23 12 23C12.4589 23 12.8589 22.6877 12.9701 22.2425L14.2716 17.0365C14.5426 15.9525 14.6339 15.6386 14.7892 15.3959C14.9452 15.1522 15.1522 14.9452 15.3959 14.7892C15.6386 14.6339 15.9525 14.5426 17.0365 14.2716L22.2425 12.9701C22.6877 12.8589 23 12.4589 23 12C23 11.5411 22.6877 11.1411 22.2425 11.0299L17.0365 9.72836C15.9525 9.45736 15.6386 9.36609 15.3959 9.21077C15.1522 9.05481 14.9452 8.84783 14.7892 8.6041C14.6339 8.36137 14.5426 8.04747 14.2716 6.96346L12.9701 1.75746Z"
                              fill="rgb(83, 56, 158)"
                            ></path>
                          </svg>
                        </span>
                        <h3>{item}</h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="coursemain">
      <div className="course min_wala">
        <div className="course_s">
          <div className="courseText">
            <div className="course_head">
              <p>Course Highlights</p>{" "}
              <div className="bar_line_hori">
                <div></div>
              </div>
            </div>
            <div className="course_article">
              <h2>
                <span>
                  Learn <span className="spanblue">Revit</span> and 
                  <span className="spanblue"> 7+ BIM</span> software with
                  industry workflows
                  <span className="spanblue"> in just 6 months.</span>
                </span>
              </h2>
            </div>
          </div>
        </div>
        </div>
        <Cards />
      </div>
  
    </section>
  );
};

export default CardsSection;
