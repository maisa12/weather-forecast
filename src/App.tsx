
import React from "react";
import "./App.css";

import { WeatherCondition } from "./models";


import Search from "./components/search/Search";
import MainInfo from "./components/main-info/MainInfo";
import  RecentlySearched from "./components/recently-searched/RecentlySearched";

import { useWeatherConditionContext } from "./contexts";

const App: React.FC = (): React.ReactElement => {
  const weatherConditionType: WeatherCondition | undefined = useWeatherConditionContext();

  return (
    <div className="Main-container">
      <div className="Content-container" style={{ backgroundImage: `url("${weatherConditionType?.backgroundImage}")` }}>
          <div className="Info">
            <MainInfo />
          </div>
          <div className="Tools">
            <Search />
            <RecentlySearched />
          </div>
      </div>
    </div>
  );
}

export default App;
