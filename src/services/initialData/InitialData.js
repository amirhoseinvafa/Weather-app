// Data for react-transition-group from WeatherApp.js
export const duration = 300;

export const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};
export const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

// Initial Data for setApiData from WeatherForm.js
export const initialData = {
  city: undefined,
  country: undefined,
  temp: undefined,
  temp_max: undefined,
  temp_min: undefined,
  description: undefined,
  cod: undefined,
  icon: undefined,
};
