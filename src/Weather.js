import React from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`It is ${response.data.main.temp} degree in ${props.city}`);
  }

  let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <ClipLoader
      color="blue"
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
