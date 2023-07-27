import React, { useState, useContext } from "react";
import style from "../styles";
import { THEME } from "../pages/Home";
import { projects } from "../utils";
import screenshots from "../assets/projects-screenshots";
import arrow from "../assets/icons/arrow-up-right.svg";
import { AnimatePresence, motion, spring } from "framer-motion";
import "../index.css";
import "./work.css";

const Work = () => {
  let [count, setCount] = useState(0);
  const [prev, setPrev] = useState([null, count]);
  const [direction, setDirection] = useState("");

  function handleIncrease() {
    setDirection("increasing");
    if (count < projects.length - 1) {
      setCount((count += 1));
    } else {
      setCount(0);
    }
  }
  function handleDecrease() {
    setDirection("decreasing");
    if (count < 1) {
      setCount(projects.length - 1);
    } else {
      setCount((count -= 1));
    }
  }

  return (
    <article className="work">
      <h3 className="work__heading">Projects</h3>
      <main className="work__container">
        <button
          onClick={() => handleDecrease()}
          className="carousel-button hide"
        >
          <img src={arrow} alt="arrow" className="carousel-arrow-left" />
        </button>
        <div className="work__carousel-wrapper">
          <AnimatePresence custom={direction}>
            <motion.div
              variants={variant}
              key={count}
              initial="start"
              animate="animate"
              exit="exit"
              transition={{ type: "spring", duration: 0.6 }}
              custom={direction}
              className="work__carousel"
            >
              <div className="carosel__section">
                <h3>
                  {projects[count].siteName} <span>{projects[count].type}</span>
                </h3>
                <p>{projects[count].discription}</p>
                <div>
                  <button className="work__carousel-btn">
                    <a href={projects[count].url}>Live demo</a>
                  </button>
                  <button className="work__carousel-btn">
                    <a href={projects[count].gitHubRipo}>code</a>
                  </button>
                </div>
              </div>
              <div className="carosel__section">
                {projects[count].technologies.map((item, i) => {
                  return <p key={i}>{item}</p>;
                })}
              </div>
              <marquee
                className="carosel__section carosel-image-section"
                behavior="alternate"
                direction="left"
                scrollamount="15"
              >
                <div>
                  <div className="carousel__image-container">
                    <img
                      src={screenshots[count][0]}
                      className="carousel__image"
                    />
                    <img
                      src={screenshots[count][1]}
                      className="carousel__image"
                    />
                    <img
                      src={screenshots[count][2]}
                      className="carousel__image"
                    />
                    <img
                      src={screenshots[count][3]}
                      className="carousel__image"
                    />
                  </div>
                </div>
              </marquee>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => handleIncrease()}
          className="carousel-button hide"
        >
          <img src={arrow} alt="arrow" className="carousel-arrow-right" />
        </button>

        <style>{` 
              .work__carousel-btn:nth-child(1) {
                background-color: ${style[0].yellow}
              }
              .carousel-button:hover {
                background-color: ${style[0].yellow}
              }
              
        `}</style>
      </main>
      <section className="work__smallbtns">
        <button
          onClick={() => handleDecrease()}
          className="carousel-button show"
        >
          <img src={arrow} alt="arrow" className="carousel-arrow-left" />
        </button>
        <button
          onClick={() => handleIncrease()}
          className="carousel-button show"
        >
          <img src={arrow} alt="arrow" className="carousel-arrow-right" />
        </button>
      </section>
    </article>
  );
};

let variant = {
  start: (direction) => ({
    x: direction === "increasing" ? "-100vw" : "100vw",
  }),
  animate: { x: 0 },
  exit: (direction) => ({
    x: direction === "decreasing" ? "-100vw" : "100vw",
  }),
};

export default Work;
