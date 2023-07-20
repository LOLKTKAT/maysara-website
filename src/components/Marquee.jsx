import React from "react";

const Marquee = ({ children }) => {
  return (
    <section className="marquee">
      <marquee
        behavior="alternate"
        direction="left"
        width="100%"
        scrollamount="25"
        hspace="0"
        loop=""
      >
        <h1>{children}</h1>
      </marquee>

      <style>
        {`
        .marquee {
            background-color: black;
            display: flex;
            text-transform: uppercase;
        }
        `}
      </style>
    </section>
  );
};

export default Marquee;
