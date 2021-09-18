import React from "react";
import { useUpdateWeatherContext } from "../../contexts";
import { Weather } from "../../models";
import { getName, getRecentSearches } from "../../utils";
import "./RecentlySearched.css";

const RecentlySearched: React.FC = (): React.ReactElement => {
    const recentList = getRecentSearches();
    const updateWeatherContext = useUpdateWeatherContext();

    const clickHandler = (event: any) => updateWeatherContext(new Weather(event.target.innerText));
    

    return (
        <ul className="Recently-searched">
            {recentList.map(val => <li key={val} onClick={clickHandler} className="Recently-searched-item">{getName(val)}</li>)}    
        </ul>
    )
}

export default RecentlySearched;