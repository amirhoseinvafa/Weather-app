import React, { useEffect, useState } from "react";
import { Button, Form } from "reactstrap";
import { useForm } from "react-hook-form";

import WeatherData from "view/WeatherData";
import WeatherApi from "api/WeatherApi";
import { initialData } from "services/initialData/InitialData";
import AlertApp from "component/AlertApp";

const WeatherForm = () => {
  const { register, errors, handleSubmit, reset } = useForm();

  const [formData, setFormData] = useState({ city: "", country: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(initialData);
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    callApi();
  }, [formData]);

  const callApi = async () => {
    setIsLoading(true);
    try {
      const data = await WeatherApi(formData.city, formData.country);
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
      console.log(error.message);
    }
    setIsLoading(false);
  };

  const onSubmit = (data) => {
    setFormData({ city: data.city, country: data.country });
    reset();
  };
  return (
    <>
      <div className="container">
        <Form
          onSubmit={handleSubmit(onSubmit)}
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
              onClick={() => setInProp(true)}
            >
              Get Weather
            </Button>
          </div>
        </Form>
      </div>
      <div className="py-4 mb-4">
        {apiData.cod === 200 && (
          <WeatherData
            data={apiData}
            isLoading={isLoading}
            inProp={inProp}
            formData={formData}
          />
        )}
      </div>
      <div>
        {errors.country && <AlertApp content="Country is required !" />}
      </div>
    </>
  );
};

export default WeatherForm;
