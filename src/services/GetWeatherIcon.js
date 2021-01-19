export const getWeatherIcon = (rangeId) => {
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
      return iconClass.Thunderstorm;

    case rangeId >= 300 && rangeId <= 231:
      return iconClass.Drizzle;

    case rangeId >= 500 && rangeId <= 531:
      return iconClass.Rain;

    case rangeId >= 600 && rangeId <= 622:
      return iconClass.Snow;

    case rangeId >= 701 && rangeId <= 781:
      return iconClass.Atmosphere;

    case rangeId === 800:
      return iconClass.Clear;

    case rangeId >= 801 && rangeId <= 804:
      return iconClass.Clouds;

    default:
      return iconClass.Clouds;
  }
};
