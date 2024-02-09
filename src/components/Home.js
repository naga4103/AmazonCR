import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const componentsState = useSelector(
    (state) => state.app.componentsState.home
  );
  return (
    <div className="home-main">
      {componentsState === true ? (
        <p className="yes">Authorized</p>
      ) : (
        <p className="no">Unauthorized</p>
      )}
    </div>
  );
};

export default Home;
