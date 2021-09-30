import React from "react";
import "./location.scss";

const LocationMap = ({ contact }) => {
  return (
    <div className={contact}>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1M-B_QUb9Mpu58uDs5X7kVZb9vGM"
        style={{ borderRadius: "10px" }}
        title="/"
        width="100%"
        margin="5px"
        height="300"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LocationMap;
