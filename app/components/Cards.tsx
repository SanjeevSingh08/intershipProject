import React from "react";
import Image from "next/image";
import i1 from "../../public/Screenshot 2023-08-21 181913.png";
import i2 from "../../public/Screenshot 2023-08-21 181926.png";
import i3 from "../../public/Screenshot 2023-08-21 181934.png";
import i4 from "../../public/Screenshot 2023-08-21 181943.png";
const Cards = () => {
  return (
    <>
    <div className="cards_section min_wala">
      <div className="card-container">
        <div className="card">
          <div className="iconcard">
            <Image src={i1} alt="icon" />
          </div>
          <h2>60% Average CTC Hike</h2>
          <br />
          <p>
            Get placement assistance to land BIM jobs in globally operating AEC
            firms.
          </p>
        </div>
        <div className="card">
          <div className="iconcard">
            <Image src={i2} alt="icon" />
          </div>
          <h2>International RIBA Project Experience</h2>
          <br />
          <p>
          Practise your skills by working collaboratively on a real-world, RIBA-structured project.
          </p>
        </div>
        <div className="card">
          <div className="iconcard">
            <Image src={i3} alt="icon" />
          </div>
          <h2>Guaranteed Career Guidance</h2>
          <br />
          <p>
          Prepare for success with guided interviews, portfolio building, and LinkedIn optimization.
          </p>
        </div>
        <div className="card">
          <div className="iconcard">
            <Image src={i4} alt="icon" />
          </div>
          <h2>Dedicated Mentor Support</h2>
          <br />
          <p>
          Stay on track throughout with quick query resolution and personalised feedback.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Cards;
