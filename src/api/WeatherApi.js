const WeatherApi = async (city, count) => {
  try {
    const API_call = await fetch(
      `${process.env.REACT_APP_URL}/data/2.5/weather?q=${city},${count}&appid=${process.env.REACT_APP_API_KEY}`
    );

    const data = await API_call.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default WeatherApi;
