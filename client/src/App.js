import React from "react";
import DataFeching from "./components/DataFetching";

function App() {
  return (
    <div>
      <h2 className="center-align">Zen Blog</h2>
      <h5 className="center-align">List of Post:</h5>
      <DataFeching />
    </div>
  );
}

export default App;
