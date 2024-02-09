import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const componentsState = useSelector(
    (state) => state.app.componentsState.about
  );
  console.log("CS", componentsState);
  return (
    <div className="about-main">
      {componentsState === true ? (
        <p className="yes">Authorized</p>
      ) : (
        <p className="no">Unauthorized</p>
      )}
    </div>
  );
};

export default About;
