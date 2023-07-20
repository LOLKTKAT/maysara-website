import React, { Children } from "react";
import style from "../styles";

const Button = ({ children }) => {
  return (
    <button type="submit" className="btn">
      {children}
      <style>
        {`
        .btn {
            all: unset;
            color: black;
            border: 2px solid black;
            margin-right: 10px;
            padding: 4px 32px; 
            box-shadow: 3px 3px 0px 0px rgba(0,0,0,1);
            -webkit-box-shadow: 3px 3px 0px 0px rgba(0,0,0,1);
            -moz-box-shadow: 3px 3px 0px 0px rgba(0,0,0,1);
            cursor: pointer;
            transition: 80ms ease-in;
            background-color: ${style[0].yellow};
            outline: red;
        }
        .btn:hover {
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,1);
            -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,1);
            -moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,1);
        }
    `}
      </style>
    </button>
  );
};

export default Button;
