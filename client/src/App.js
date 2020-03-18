import React from "react";
import DataFeching from "./components/DataFetching";

function App() {
  return (
    <div>
      <h1 style={{ background: "blue", textAlign: "center", color: "white" }}>
        Zen Blog
      </h1>
      <h2 style={{ textAlign: "center" }}>List of Post:</h2>
      <DataFeching />
    </div>
  );
}

export default App;
