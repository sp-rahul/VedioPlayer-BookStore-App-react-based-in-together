import React from "react";
import "./App.css";
import Navbar from "./@common/Navbar";
import Router from "./routes/Router";

function App() {
  const [path, setPath] = React.useState(window.location.pathname);

  return (
    <div className="App">
      <Navbar />

      <Router pathname={path} />
    </div>
  );
}

export default App;
