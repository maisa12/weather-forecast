import { WeatherCondition, weatherConditions } from "../models";

function getWeatherCondition(weatherConditionType: string): WeatherCondition {
  return weatherConditions.find(x => x.weatherType === weatherConditionType) 
    || weatherConditions[0];
}


function getFaviconEl(): HTMLLinkElement | null {
  return document.getElementById("favicon") as HTMLLinkElement;
}

function getRecentSearches(): string[] {
  const value = localStorage.getItem("recently-searched");
  return value && JSON.parse(value) || [];
}

function addRecentSearches(val: string): void {
  let value = getRecentSearches();
  if (value.includes(val)) value = value.filter(x => x !== val);
  else if (value.length >= 3) value.splice(2,1);
  value.unshift(val);
  localStorage.setItem("recently-searched", JSON.stringify(value));
}

function getName(value: string): string {
  return value[0].toUpperCase() +  value.slice(1);
}
 
export { 
  getWeatherCondition, 
  getFaviconEl, 
  getRecentSearches, 
  addRecentSearches, 
  getName 
};