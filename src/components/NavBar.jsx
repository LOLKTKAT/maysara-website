import React, { useState, useContext } from "react";
import humberger from "../assets/icons/humberger-menu.svg";
import { AnimatePresence, motion } from "framer-motion";
import MotionH1 from "./MotionH1";
import Marquee from "./Marquee";
import style from "../styles";
import { THEME } from "../App";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { myTheme, setMyTheme } = useContext(THEME);

  if (showMenu == true) {
    setMyTheme(2);
  }

  return (
    <>
      <nav>
        <div className="logo">MB</div>
        <div onClick={() => setShowMenu(!showMenu)} className="humberger-menu">
          <svg
            width="35"
            height="24"
            viewBox="0 0 35 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              key={myTheme}
              initial={{ strokeWidth: 0 }}
              animate={{ strokeWidth: 1.8 }}
              d="M4.375 12H30.625M4.375 6H30.625M13.125 18H30.625"
              stroke-width="1.8"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="dots">
          <h6>.</h6>
          <h6>.</h6>
          <h6>.</h6>
          <h6>.</h6>
          <h6>.</h6>
        </div>

        <style>
          {`
         nav {
           width: calc(var(--max-width) - 100px);
           left: 50%;
           top: 32px;
            transform: translateX(-50%);
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
          }
          .logo {
            color: ${style[0].stroke};
            font-size: 18px;
            font-weight: 700;
          }
          .humberger-menu {
            stroke: ${style[0].stroke};
            cursor: pointer;
          }     
          .menu {
            position: fixed;
            z-index: 100;
            height: 100vh;
            width: 100vw;
            background-color: #fefefe;
            color: black;
          }      
          .menu-humberger {
            position: absolute;
            right: 58px;
            top: 32px
          }
          .line-wrap{
            overflow: hidden;
          }
          .dots {
            font-size: 50px;
            line-height: 30px;
            position: absolute;
            right: 3px;
            top: 60vh;
          }
          .menu__links {
            display: flex;
            flex-direction: column;
            height: 100%;
            align-items: center;
            justify-content: center;
            gap: 32px;
          }
          .menu__links h1 {
            text-shadow: none;
            -webkit-text-stroke: unset;
            color: #1c1c1c;
            font-family: "ClashDisplay-Medium", "DM Sans", sans-serif;
            transition: 200ms ease-in-out; 
            font-size: 92px;
          }
          .line-wrap{
            width: fit-content;
          }
          .line-wrap-wrap:hover {
            // cursor: pointer;
            // color: transparent;
            // -webkit-text-stroke: 0.1px black;
            width: fit-content;
          }
          .menu__marquee {
            height: 100vh
          }
        `}
        </style>
      </nav>
      <AnimatePresence>
        {showMenu && (
          <>
            <motion.section
              onClick={() => console.log(myTheme)}
              key={showMenu}
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              exit={{
                height: 0,
                transition: { delay: 0.5, type: "tween", ease: "easeOut" },
              }}
              transition={{
                type: "tween",
                ease: [0.87, 0.05, 0.47, 0.98],
                duration: 0.45,
              }}
              className="menu"
            >
              <nav>
                <div style={{ color: "black" }} className="logo">
                  MB
                </div>
                <img
                  onClick={() => setShowMenu(!showMenu)}
                  src={humberger}
                  className="humberger-menu"
                />
              </nav>
              <div className="menu__links">
                <MotionH1 delayAmount={0}>home</MotionH1>
                <MotionH1 delayAmount={0.15}>skills</MotionH1>
                <MotionH1 delayAmount={0.3}>work</MotionH1>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.2 } }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="menu__marquee"
              >
                {/* <Marquee>say hello say hello say hello say hello </Marquee> */}
              </motion.div>
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
