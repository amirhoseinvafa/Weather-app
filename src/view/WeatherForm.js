import React, { useEffect, useState } from "react";
import { Button, Form, Alert } from "reactstrap";
import { useForm } from "react-hook-form";

import Weather from "view/WeatherApp";

const WeatherForm = () => {
  const [formData, setFormData] = useState({ city: "London", country: "UK" });
  const { register, errors, handleSubmit } = useForm();
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState({
    city: undefined,
    country: undefined,
    temp: undefined,
    temp_max: undefined,
    temp_min: undefined,
    description: undefined,
    cod: undefined,
    icon: undefined,
  });

  const weatherApi = async (city, count) => {
    try {
      setIsLoading(true);
      const API_call = await fetch(
        `${process.env.REACT_APP_URL}/data/2.5/weather?q=${city},${count}&appid=${process.env.REACT_APP_API_KEY}`
      );

      const data = await API_call.json();
      setApiData({
        city: data.name,
        country: data.sys.country,
        temp: Math.floor(data.main.temp - 273),
        temp_max: Math.floor(data.main.temp_max - 273),
        temp_min: Math.floor(data.main.temp_min - 273),
        description: data.weather[0].description,
        cod: data.cod,
        icon: data.weather[0].id,
      });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    weatherApi(formData.city, formData.country);
  }, [formData]);

  const onDismiss = () => setVisible(false);

  return (
    <>
      <div className="container">
        <Form
          onSubmit={handleSubmit((data) =>
            setFormData({ city: data.city, country: data.country })
          )}
          className=" d-md-flex justify-content-md-center flex-wrap"
        >
          <div className="d-flex justify-content-center">
            <input
              ref={register}
              type="text"
              name="city"
              placeholder="London"
              className="inputs"
              autoComplete="off"
            />
          </div>
          <div className="d-flex justify-content-center my-md-0 mx-md-3 my-2">
            <input
              ref={register({ required: true })}
              type="text"
              name="country"
              placeholder="GB"
              className="inputs"
              autoComplete="off"
            />
          </div>
          <div className="d-flex justify-content-center pt-3">
            <Button
              color="info"
              size="sm"
              type="submit"
              disabled={isLoading ? true : false}
            >
              Get Weather
            </Button>
          </div>
        </Form>
      </div>
      <div className="py-4 mb-4">
        {apiData.cod === 200 && (
          <Weather data={apiData} isLoading={isLoading} />
        )}
      </div>
      <div className="fixed-bottom">
        {errors.country && (
          <Alert isOpen={visible} toggle={onDismiss} color="primary  ">
            Country is required !
          </Alert>
        )}
      </div>
    </>
  );
};

export default WeatherForm;
