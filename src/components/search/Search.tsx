import React from "react";
import "./Search.css";

const Search: React.FC = (): React.ReactElement => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log("submit");
    };
    return (
        <form className="Search-form" onSubmit={handleSubmit}>
            <div id="Search-input-box">
                <input id="Search" type="text" autoComplete="off" placeholder="Another location" />
            </div>
            <button id="Submit" type="submit">
                <i className="bi bi-search"></i>
            </button>
        </form>
    )
}

export default Search;