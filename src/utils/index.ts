import { WeatherCondition, weatherConditions } from "../models";

function getWeatherCondition(weatherConditionType: string): WeatherCondition {
    return weatherConditions.find(x => x.weatherType === weatherConditionType) 
        || weatherConditions[0];
}


function getFaviconEl(): HTMLLinkElement | null {
    return document.getElementById("favicon") as HTMLLinkElement;
  }

export { getWeatherCondition, getFaviconEl };