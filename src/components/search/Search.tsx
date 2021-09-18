import React from "react";
import { useState } from "react";
import { useUpdateWeatherContext, useWeatherContext } from "../../contexts";
import { Weather } from "../../models";
import { getName } from "../../utils";
import "./Search.css";

const Search: React.FC = (): React.ReactElement => {
    const [typeAheadList, setTypeAheadList] = useState<string[]>([]);
    const [currentValue, setCurrentValue] = useState<string>("");
    const updateWeatherContect = useUpdateWeatherContext();
    const weather: Weather | undefined = useWeatherContext();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (weather?.city.toLowerCase() 
            !== currentValue.trim().toLowerCase()
        ) {
            updateWeatherContect(new Weather(currentValue));
        }
    };

    const loadTypeAheadList = (event: React.ChangeEvent<HTMLInputElement>): void => {
        // load typeAheadList from back
        const value = event.target.value;
        const regExInclude = new RegExp(value, "i");
        const regExMatch = new RegExp(`^${value}$`, "i")
        setCurrentValue(value);
        setTypeAheadList(Weather.defaultCities.filter(x => 
            regExInclude.test(x) && !regExMatch.test(x)
        ));
    };

    const TypeAhead = (): React.ReactElement => {
        return (
            <datalist id="Cities">
                {typeAheadList.map((val, index) => <option key={index} value={getName(val)} />)}
            </datalist>
        );
    }

    return (
        <form className="Search-form" onSubmit={handleSubmit}>
            <div id="Search-input-box">
                <input id="Search" list="Cities" autoComplete="off" type="text" placeholder="Another location" onChange={loadTypeAheadList} />
                <TypeAhead />
            </div>
            <button id="Submit" type="submit">
                <i className="bi bi-search"></i>
            </button>
        </form>
    )
}

export default Search;