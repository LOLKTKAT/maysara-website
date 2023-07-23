import React, { useRef, useState, createContext, forwardRef } from "react";
import NavBar from "./components/NavBar";
import About from "./containers/About";
import Contact from "./containers/Contact";
import { LandingPage } from "./containers/LandingPage";
import Skills from "./containers/Skills";
import Work from "./containers/Work";
import style from "./styles";
import Marquee from "./components/Marquee";
import "./app.css";

export const THEME = createContext();

function App() {
  const myRef = useRef();
  const [myTheme, setMyTheme] = useState({});

  if (myTheme == 0) {
    style[0].stroke = "white";
    style[0].logo = "white";
  } else if (myTheme == 1) {
    style[0].stroke = "black";
    style[0].logo = "white";
  } else if (myTheme == 2) {
    style[0].stroke = "black";
    style[0].logo = "black";
  }
  return (
    <div className="App">
      <THEME.Provider value={{ myTheme, setMyTheme }}>
        <NavBar />
        <LandingPage myTheme={myTheme} />
        <Skills forwardRef={myRef} />
        <Work forwardRef={myRef} />
        <About forwardRef={myRef} />
        <Marquee forwardRef={myRef}>
          say hello say hello say hello say hello
        </Marquee>
        <Contact forwardRef={myRef} />
      </THEME.Provider>
      <style>
        {`
        .App {
          background-color: ${style[0].backgroundColor};
          color:  ${style[0].color};
        }
            `}
      </style>
    </div>
  );
}

export default App;
