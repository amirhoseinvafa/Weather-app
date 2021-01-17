import { GET_WEATHER } from "./actionTypes";

export const getWeather = (data) => ({
  type: GET_WEATHER,
  payload: data,
});
