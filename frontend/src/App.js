import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL)
      .then(res => res.json())
      .then(res => setMessage(res.message))
      .catch(console.error);
  }, [setMessage]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message || "Loading..."}</p>
        <p>
          Edited <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learned React
        </a>
      </header>
    </div>
  );
}

export default App;
