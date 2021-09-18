import React from "react";
import { useWeatherConditionContext, useWeatherContext } from "../../contexts";
import { WeatherCondition, Weather } from "../../models";
import "./MainInfo.css";

const MainInfo: React.FC = (): React.ReactElement => {
  const weather: Weather | undefined  = useWeatherContext();
  const weatherConditionType: WeatherCondition | undefined = useWeatherConditionContext();

  const getDate = (): string => {
    const date = new Date();
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
  
  return (
    <div className="Main-info">
      <div className="Temerature">{weather?.temperature}°C</div>
      <div className="City-container">
        <div className="City-name">{weather?.cityName}</div>
        <div>{getDate()}</div>
        <div>{weatherConditionType?.weatherType}</div>
      </div>
    </div>
  )
}

export default MainInfo;