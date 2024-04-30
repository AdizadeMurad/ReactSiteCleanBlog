import React from "react";
import "../Home.scss"

function SectionHomeLinks() {
  return (
    <>
      <section className="texts">
        <div className="text__general">
          <div className="text">
            <p style={{cursor:"pointer"}} className="text__head">
              Man must explore, and this is exploration at its greatest
            </p>

            <p className="text__middle">
              Problems look mighty small from 150 miles up
            </p>

            <p className="text__end">
              Posted by <span className="start__bootstrap">
                Start Bootstrap 
              </span> on September 24, 2023
            </p>
          </div>
          <div className="text">
            <p className="text__head">
              I believe every human has a finite number of heartbeats.
            </p>

            <p className="text__middle">I don't intend to waste any of mine.</p>

            <p className="text__end">
              Posted by <span className="start__bootstrap">
                Start Bootstrap 
              </span> on September 18, 2023
            </p>
          </div>
          <div className="text">
            <p className="text__head">Science has not yet mastered prophecy</p>

            <p className="text__middle">
              We predict too much for the next year and yet far too little for
              the next ten.{" "}
            </p>

            <p className="text__end">
              Posted by <span className="start__bootstrap">
                Start Bootstrap 
              </span> on August 24, 2023
            </p>
          </div>
          <div className="text">
            <p className="text__head">Failure is not an option</p>

            <p className="text__middle">
              Many say exploration is part of our destiny, but it’s actually our
              duty to future generations.
            </p>

            <p className="text__end">
              Posted by <span className="start__bootstrap">
                Start Bootstrap 
              </span> on July 8, 2023
            </p>
          </div>
          <div className="btn">
            <button className="button__older__post">
              OLDER POSTS
              <i
                style={{paddingLeft: "10px",fontSize: "12px"}}
                className="fa-solid fa-arrow-right-long"
              ></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionHomeLinks;
