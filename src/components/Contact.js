import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const componentsState = useSelector(
    (state) => state.app.componentsState.contact
  );
  return (
    <div className="contact-main">
      {componentsState === true ? (
        <p className="yes">Authorized</p>
      ) : (
        <p className="no">Unauthorized</p>
      )}
    </div>
  );
};

export default Contact;
