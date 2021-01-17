import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";

const Weather = ({ data, isLoading }) => {
  const [weatherIcon, setWeatherIcon] = useState();

  const getWeatherIcon = (rangeId) => {
    const iconClass = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };

    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        setWeatherIcon(iconClass.Thunderstorm);
        break;
      case rangeId >= 300 && rangeId <= 231:
        setWeatherIcon(iconClass.Drizzle);
        break;
      case rangeId >= 500 && rangeId <= 531:
        setWeatherIcon(iconClass.Rain);
        break;
      case rangeId >= 600 && rangeId <= 622:
        setWeatherIcon(iconClass.Snow);
        break;
      case rangeId >= 701 && rangeId <= 781:
        setWeatherIcon(iconClass.Atmosphere);
        break;
      case rangeId === 800:
        setWeatherIcon(iconClass.Clear);
        break;
      case rangeId >= 801 && rangeId <= 804:
        setWeatherIcon(iconClass.Clouds);
        break;

      default:
        setWeatherIcon(iconClass.Clouds);
    }
  };

  useEffect(() => {
    getWeatherIcon(data.icon);
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
        <div className="d-flex justify-content-center">
          <div>
            <h1 className="text-white text-center">
              {data.city}, {data.country}
            </h1>
            <h5 className="py-4 text-white text-center">
              <i className={`wi ${weatherIcon} display-1`}></i>
            </h5>
            <h1 className="text-center text-white font-weight-bold">
              {data.temp}&deg;
            </h1>
            <div className="d-flex justify-content-around">
              <h4 className="text-center text-danger font-weight-bold">
                {data.temp_max}&deg;
              </h4>
              <h4 className="text-center text-info font-weight-bold">
                {data.temp_min}&deg;
              </h4>
            </div>
            <h3 className="text-white text-center pt-3">{data.description}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
