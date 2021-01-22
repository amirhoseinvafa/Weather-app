import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { getWeatherIcon } from "services/GetWeatherIcon";
import { Transition } from "react-transition-group";
import PropTypes from "prop-types";

import {
  duration,
  defaultStyle,
  transitionStyles,
} from "services/initialData/InitialData";
const Weather = ({ data, isLoading, formData, inProp }) => {
  const [weatherIcon, setWeatherIcon] = useState();

  useEffect(() => {
    setWeatherIcon(getWeatherIcon(data.icon));
  }, [data.icon]);
  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center  pt-3">
          <Spinner
            style={{ width: "1.5rem", height: "1.5rem" }}
            color="light"
          />
        </div>
      ) : (
        <Transition in={inProp} timeout={duration}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <div className="d-flex justify-content-center ">
                <div className="p-4 box ">
                  <h1 className="text-white text-center">
                    {formData.city !== "" && `${data.city} ,`} {data.country}
                  </h1>
                  <h5 className="py-4 text-white text-center">
                    <i className={`wi ${weatherIcon} display-2`}></i>
                  </h5>
                  <h1 className="text-center text-white font-weight-bold">
                    {data.temp}&deg;
                  </h1>
                  <div className="d-flex justify-content-around">
                    <h4 className="text-center  font-weight-bold max-temp">
                      {data.temp_max}&deg;
                    </h4>
                    <h4 className="text-center  font-weight-bold min-temp">
                      {data.temp_min}&deg;
                    </h4>
                  </div>
                  <h3 className="text-white text-center pt-3">
                    {data.description}
                  </h3>
                </div>
              </div>
            </div>
          )}
        </Transition>
      )}
    </>
  );
};

Weather.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  formData: PropTypes.object,
  inProp: PropTypes.bool,
};

export default Weather;
