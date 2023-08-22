import React from "react";
import Image from "next/image";
import d1 from "../../public/d1.svg";
import d2 from "../../public/heroimage.webp";
import { BiDownload } from "react-icons/bi";
import c1 from "../../public/c1.svg";
import c2 from "../../public/c2.svg";
import c3 from "../../public/c3.svg";
import c4 from "../../public/c4.svg";
import c5 from "../../public/c5.svg";
import c6 from "../../public/c6.svg";
import c7 from "../../public/c7.svg";
import c8 from "../../public/c8.svg";
import { BsArrowRight } from "react-icons/bs";
const HeroSection = () => {
  return (
    <section className="hero_section">
      <div className="hero_subsection">
        <div className="heros2">
          <div className="heros3">
            <div className="heroi1">
              <Image src={d1} alt="design" />
            </div>
            <div className="heroi2">
              <Image src={d1} alt="design" />
            </div>
            <div className="heroi3">
              <Image src={d2} alt="design" />
            </div>
            <div className="hero_text_section">
              <div className="ht1">
                <div className="herot">
                  <h1 className="heroh1">
                    <span className="heroh11">
                      Invest in your 
                      <div className="words">
                        <span className="spin">future.</span>
                        <span className="spin">growth.</span>
                        <span className="spin">career.</span>
                     
                       
                      </div>
                    </span>
                    <br />
                    <span className="heroh12">
                      BIM Professional Course for Architects
                    </span>
                  </h1>
                  <p className="herop">
                    Become a BIM expert with our RIBA-standard and
                    Autodesk-certified course.
                  </p>
                  <div className="hero_buttons">
                    <div className="herobtn1">
                      <button className="buttonBasic applyNow">
                        Apply Now
                        <BsArrowRight />
                      </button>
                    </div>
                    <div className="herobtn2">
                      <button className=" buttonBasic download">
                        Download Syllabus{" "}
                        <span className="text-2xl ml-1">
                          <BiDownload />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="hero_time">
                    <div className="line">
                      
                    </div>
                    <div className="timingmain">
                    <div className="timing1">
                      <p className="timing11">Next Cohort</p>
                      <p className="timing12">26 August, 2023</p>
                    </div>
                    <div className="timing2">
                      <p className="timing21">Program Duration</p>
                      <p className="timing22">
                        6 Months, online (5-6 hours/week)
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="herocom">
                <h6>learn from experts working at</h6>
                <div className="herocomimg">
                  <div className="comimg">
                    <Image src={c1} alt="" />
                  </div>
                  <div className="comimg">
                    <Image src={c2} alt="" />
                  </div>
                  <div className="comimg">
                    <Image src={c3} alt="" />
                  </div>
                  <div className="comimg">
                    <Image src={c4} alt="" />
                  </div>
                  <div className="comimg">
                    <Image src={c5} alt="" />
                  </div>
                  <div className="comimg">
                    <Image src={c6} alt="" />
                  </div>
                  <div className="comimg">
                    <Image src={c7} alt="" />
                  </div>
                  <div className="comimg">
                    <Image src={c8} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
