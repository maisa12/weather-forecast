
import { url } from "inspector";
import React, { useState, useEffect } from "react";
import "./App.css";

import { Weather, WeatherCondition } from "./models";
import { getWeatherCondition, getFaviconEl } from "./utils";

import Search from "./components/search/Search";
import MainInfo from "./components/main-info/MainInfo";


const App: React.FC = (): React.ReactElement => {
  const [ weatherConditionType, setWeatherConditionType ] = useState<WeatherCondition>();
  const [ weather, setWeather ] = useState<Weather>();

  const setFaviConde = (path: string): void => {
    const favicon: HTMLLinkElement | null = getFaviconEl();
    if (favicon) favicon.href = path;
  };
  
  useEffect(() => {
    // call api to get weather
    // get default cities
    setWeather(new Weather());
  }, []);

  useEffect(() => {
    if (!weather) return;
    const weatherCondition = getWeatherCondition(weather.weatherConditionType);
    setWeatherConditionType(weatherCondition);
    setFaviConde(weatherCondition.icon);
  }, [weather]);

  return (
    <div className="Main-container">
      <div className="Content-container" style={{ backgroundImage: `url("${weatherConditionType?.backgroundImage}")` }}>
          <div className="Info">
            <MainInfo />
          </div>
          <div className="Tools">
              <Search />
          </div>
      </div>
    </div>
  );
}

export default App;
