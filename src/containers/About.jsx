import React, { useState } from "react";
import aboutPics from "../assets/about-pics";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import { projects } from "../utils";
import screenshots from "../assets/projects-screenshots";

const TABS_INFO = [
  {
    paragraph:
      "My name is Maysara Basheer, I was born in Sudan but moved to Saudi Arabia when I was one. Throughout my life I was intersted in many things like: video games, football (soccer), tennis, and computers, when I turned 14 I got more and more interested in graphic design, which later helped me in my ui/ux and front-end development",
    bgColor: "#4150F7",
  },
  {
    paragraph: "currently a student in elrazi university in Khartoum",
    bgColor: "#FF5A5A",
  },
  {
    paragraph:
      "if you want to be my friend you can talk to me about, football, MMA, or men's fashion, and ofcourse anything web related",
    bgColor: "#3ad451",
  },
  {
    paragraph: "pizza",
    bgColor: "#aa5aff",
  },
];

const About = () => {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(true);
  const bgColor = [
    "var(--primary)",
    "#FF5A5A",
    "#3ad451",
    "#aa5aff",
    "#4680ff",
    "#83ff31",
  ];

  return (
    <article className="about">
      <div className="about__main">
        <section className="about__image-section">
          <h3 className="__show-on-small about__heading">about me</h3>
          <br />
          <div className="about__image-container">
            <AnimatePresence>
              <motion.img
                key={count}
                initial={{ scale: 0 }}
                animate={{ position: "relative", scale: 1 }}
                exit={{
                  position: "absolute",
                  scale: 0,
                  maxHeight: "400px",
                  opacity: 0,
                }}
                transition={{}}
                src={aboutPics[count]}
                className="about__image"
              />
            </AnimatePresence>
          </div>
        </section>
        <div className="about__right-section">
          <br />
          <h3 className="__show-on-big ">about me</h3>
          <br />
          <br />
          <div className="about__nav">
            <p
              className={count === 0 ? "about__nav-active" : "about__nav-tab"}
              onClick={() => setCount(0)}
            >
              story
            </p>
            <motion.div whileHover={() => setHover(!hover)}>
              <p
                className={count === 1 ? "about__nav-active" : "about__nav-tab"}
                onClick={() => setCount(1)}
              >
                education
              </p>
              <motion.div
                whileHover={{
                  height: 1,
                  color: "white",
                  width: "100%",
                }}
                className="tab-underline"
              ></motion.div>
            </motion.div>
            <p
              className={count === 2 ? "about__nav-active" : "about__nav-tab"}
              onClick={() => setCount(2)}
            >
              favorite topic
            </p>
            <p
              className={count === 3 ? "about__nav-active" : "about__nav-tab"}
              onClick={() => setCount(3)}
            >
              favorite food
            </p>
          </div>
          <br />
          <p className="about__paragraph">{TABS_INFO[count].paragraph}</p>
        </div>
      </div>
      <style>
        {`
              .about {
                background-color: ${bgColor[count]};
                display: flex;
                align-items: center;
                height: 100vh;
                width: 100vw;
              }
              .about__main {
                margin: 0px auto;
                max-width: 1020px;
                display: flex;
                align-items: start;
                gap: 60px
              }
              .about__image-section { 
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%
              }
              .about__image-section .about__heading { 
                align-items: start;
              }
              .about__image-container {
                height: 480px;
                width: 360px;
                aspect-ratio: 48/36;
                background-color: white;
                border: 2px solid black;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .about__image {
                height: 85%;
                width: 85%;
                object-fit: cover;
                border: 2px solid black;
                position: relative;
              }
              .about__right-section {
              }
              .about__nav {
                width: 600px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 30px;
              }     
              .about__nav p {
                cursor: pointer;
              } 
              .about__nav-active {
                font-weight: 800;
                border-bottom: 1px solid white;
              } 
              about__nav-tab{
                scale: 5.8;
              }
    
              .tab-underline {
                height: 3px;
                width: 3px;
                border-radius: 270px;
                background-color: transparent;
              }       
    
              @media only screen and (max-width: 800px) { 
                .about {
                  padding: 0 34px;
                }
                .about__main {
                  flex-direction: column-reverse;
                  gap: 24px;
                }
                .about__nav { 
                  position: relative;
                  width: 90vw;
                  top: -40px;
                }
                .about__paragraph {
                  position: relative;
                  top: -40px;
                }
                .about__image-container {
                  height: 280px;
                  width: 210px;
                }
                .about__image-section { 
                order: 2;
              }
            }
            @media only screen and (max-width: 500px) { 
              .about {
                padding: 0 16px;
                height: 105vh;
              }
              .about p {
                font-size: 12px
              }
            }
              `}
      </style>
    </article>
  );
};

export default About;
