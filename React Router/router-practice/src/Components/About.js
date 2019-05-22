import React from "react";
import Rainbow from "../HOC/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tempora a
        fugiat nihil possimus similique consequuntur saepe cum ipsam, repellat
        repellendus error dolor perspiciatis ut sapiente sit quibusdam iure
        blanditiis?
      </p>
    </div>
  );
};

export default Rainbow(About);
