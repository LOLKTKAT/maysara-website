import React, { useRef, useState, useEffect, useContext } from "react";
import style from "../styles";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import { THEME } from "../pages/Home";
import MOCKUPS from "../assets/mockups";
import { Link } from "react-router-dom";
export const LandingPage = () => {
  const secRef = useRef();
  const [heroImageCounter, setHeroImageCounter] = useState(0);
  const { myTheme, setMyTheme } = useContext(THEME);

  const [isIntersecting, setIsIntersectin] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersectin(entry.boundingClientRect.bottom);
    });
    observer.observe(secRef.current);
  }, []);

  if (isIntersecting < 5) {
    setMyTheme(1);
  } else if (isIntersecting > 0) {
    setMyTheme(0);
  }

  useEffect(() => {
    setInterval(() => {
      const random = Math.floor(Math.random() * 3);
      setHeroImageCounter(random);
    }, 3000);
  }, []);

  return (
    <article ref={secRef} className="landing-page">
      <motion.div
        className="intital-load"
        initial={{
          backgroudColor: style[0].yellow,
          height: "130%",
          width: "100%",
          position: "fixed",
        }}
        animate={{
          backgroudColor: style[0].yellow,
          height: "100%",
          width: "100%",
          y: "-101vh",
          position: "fixed",
        }}
        transition={{ type: "tween", easeIn, duration: 0.2, delay: 0.8 }}
      ></motion.div>
      <motion.div
        className="intital-load-1"
        initial={{
          backgroudColor: style[0].yellow,
          height: "130%",
          width: "100%",
          position: "fixed",
        }}
        animate={{
          backgroudColor: style[0].yellow,
          height: "100%",
          width: "100%",
          y: "-101vh",
          position: "fixed",
        }}
        transition={{ type: "tween", easeIn, duration: 0.2, delay: 0.5 }}
      ></motion.div>
      <motion.div
        className="intital-load-2"
        initial={{
          backgroudColor: style[0].yellow,
          height: "130%",
          width: "100%",
          position: "fixed",
        }}
        animate={{
          backgroudColor: style[0].yellow,
          height: "100%",
          width: "100%",
          y: "-101vh",
          position: "fixed",
        }}
        transition={{ type: "tween", easeIn, duration: 0.2, delay: 0.2 }}
      ></motion.div>

      <section className="landing-page__first-section">
        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          FRONT
        </motion.h1>
        <motion.h1
          className="__flex"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.7 }}
            className="landing-page__hero-image"
          >
            <motion.img
              key={heroImageCounter}
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              src={MOCKUPS[heroImageCounter]}
              className="landing-page__inside-image"
              alt=""
            />
          </motion.div>
          END
        </motion.h1>
      </section>
      <section>
        <motion.h1
          className="developer"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          developer
        </motion.h1>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="landing-page__second-section"
      >
        <p className="landing-page__paragragh">
          My name is Maysara Basheer, Interested in Crafting digital 🖥️
          experiences 🤯 with code and creativity 🖼️. I help to bring your ideas
          💡 to life 🧬 with beautiful web design and development 🏗️.
        </p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
        className="landing-page__cta"
      >
        <Link to="/contact">
          <button className="langing-page__contact-btn">Hire me</button>
        </Link>
        <button className="langing-page__contact-btn">
          <a href="https://docs.google.com/document/d/e/2PACX-1vQY-g1NNL8GVxk4T-SxNwu5_JWW6OLZAf3HbhRoHBla3amwtnDEhl-2huiFM4SqvbmwouUkchoEn9nK/pub">
            Résumé
          </a>
        </button>
      </motion.section>
      <style>
        {`.landing-page {
          max-width: calc(var(--max-width) - 160px);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 101vh;
        }
        .landing-page h1 {
          text-align: center;
          line-height: 8rem;
        }
            .landing-page__paragragh {
              max-width: 420px;
              margin-top: 3vw;
              margin-bottom: 16px; 
              display: flex;
            }
            .landing-page__first-section {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 12px
              
            }
            .landing-page__hero-image {
              height: 7.5vw;
              width: 12vw;
              background-color: white
              background-position: center;
              // background-size: cover;
              // background-repeat: no-repeat;
              display: flex;
              align-items: center;
              
            }
            .landing-page__inside-image {
              height: 100%;
              width: 100%;
              object-fit: cover;
              object-position: center;
            }
            .landing-page__cta {
              display: flex;
              gap: 10px;
              position: relative;
              top: 30px;
            }
            .langing-page__contact-btn {
              all: unset;
              padding: 4px 12px;
              color: black;
              border: 2.5px solid black;
              box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 1);
              -webkit-box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 1);
              -moz-box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 1);
              background-color: ${style[0].yellow};
              cursor: pointer;
              font-size: 16px;
              font-weight: 600;

            }
            .landing-page a {
              color: black;
            }
            .langing-page__contact-btn:nth-child(2) {
              background-color: white;
              font-weight: 500
            }
            .landing-page__second-section {
              display: flex;
            }
            .langing-page__contact-btn:hover , btn-arrow {
              box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 1);
              -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 1);
              -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 1);
              
            }
            .btn-arrow {
              height: 32px;
              aspect-ratio: 1;
            }
            .btn-arrow:hover {
            }
            .intital-load {
              background-color: ${style[0].red};
              z-index: 1001;
            }
            .intital-load-1 {
              background-color: ${style[0].green};
              z-index: 1002;
            }
            .intital-load-2 {
              background-color: ${style[0].yellow};
              z-index: 1003;
            }
            @media only screen and (max-width: 750px) {
              .developer {
                margin-top: -7vw;
              }
              .landing-page__second-section {
                flex-direction: column;
              }
            }
            @media only screen and (max-width: 550px) {
              .developer {
                margin-top: -14vw;
              }
              .landing-page__cta {
                position: relative;
                top: 50px;
              }
            }
            @media only screen and (max-width: 420px) {
              .developer {
                margin-top: -20vw;
              }
            }
            @media only screen and (max-width: 320px) {
              .developer {
                margin-top: -30vw;
              }
            }
            
            `}
      </style>
    </article>
  );
};
