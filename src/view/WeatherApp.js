import React from "react";

const Weather = () => {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <h1 className="text-white">London, UK</h1>
        <h5 className="py-4 text-white text-center">
          <i className="wi wi-day-sunny display-1"></i>
        </h5>
        <h2 className="text-center text-white  font-weight-bold">35&deg;</h2>
        <div className="d-flex justify-content-around">
          <h4 className="text-center text-white  font-weight-bold">40&deg;</h4>
          <h4 className="text-center text-white  font-weight-bold">18&deg;</h4>
        </div>
        <h3 className="text-white text-center">Broken clouds</h3>
      </div>
    </div>
  );
};

export default Weather;
