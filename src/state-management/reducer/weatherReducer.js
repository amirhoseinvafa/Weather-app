import { GET_WEATHER } from "../actions/actionTypes";

const initialState = {
  data: [],
  isLoading: true,
  message: "",
};

export const weatherReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER:
      return action.payload;

    default:
      return [state];
  }
};
