import React from "react";

function App() {
  fetch("http://localhost:8000/api/post")
    .then(result => {
      return result.json();
    })
    .then(data => {
      console.log(data);
    });

  return (
    <div>
      <h1>Zen Blog</h1>
    </div>
  );
}

export default App;
