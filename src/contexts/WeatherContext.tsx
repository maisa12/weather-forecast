import React, { useState, useEffect, useContext } from "react";
import { Weather, WeatherCondition } from "../models";
import { getWeatherCondition, getFaviconEl, getRecentSearches, addRecentSearches } from "../utils";

const WeatherContext = React.createContext<undefined | Weather>(undefined);
const UpdateWeatherContext = React.createContext<undefined| any>(undefined);
const WeatherConditionContext  = React.createContext<undefined | WeatherCondition>(undefined);

const useWeatherContext = () => useContext(WeatherContext);
const useUpdateWeatherContext = () => useContext(UpdateWeatherContext);
const useWeatherConditionContext = () => useContext(WeatherConditionContext);

const WeatherProvider : React.FC = ({ children }): React.ReactElement => {
    const [ weatherConditionType, setWeatherConditionType ] = useState<WeatherCondition>();
    const [ weather, setWeather ] = useState<Weather>();

    const recentList = getRecentSearches();

    const setFaviConde = (path: string): void => {
        const favicon: HTMLLinkElement | null = getFaviconEl();
        if (favicon) favicon.href = path;
      };
      
    useEffect(() => {
      // call api to get weather
      // get default cities
      if (recentList?.length > 0) setWeather(new Weather(recentList[0]));
      else setWeather(new Weather());
    }, []);

    const updateWeather = (weather: Weather) => {
      addRecentSearches(weather.city);
      setWeather(weather);
    }
    
    useEffect(() => {
      if (!weather) return;
      const weatherCondition = getWeatherCondition(weather.weatherConditionType);
      setWeatherConditionType(weatherCondition);
      setFaviConde(weatherCondition.icon);
    }, [weather]);

    return (
        <>
            <WeatherContext.Provider value={weather}>
                <WeatherConditionContext.Provider value={weatherConditionType}>
                  <UpdateWeatherContext.Provider value={updateWeather}>
                    {children}
                  </UpdateWeatherContext.Provider>
                </WeatherConditionContext.Provider>
            </WeatherContext.Provider>
        </>
    )
}

export { WeatherProvider, useWeatherContext, useUpdateWeatherContext, useWeatherConditionContext };