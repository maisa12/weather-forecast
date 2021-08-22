
import React from "react";
import "./App.css";

import Search from "./components/search/Search";

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="Main-container">
      <div className="Content-container">
          <div className="Info">
              info
          </div>
          <div className="Tools">
              <Search />
          </div>
      </div>
    </div>
  );
}

export default App;
