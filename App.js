import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./src/components/Home";

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

const rootApp = ReactDOM.createRoot(document.getElementById("root"));

rootApp.render(<App />);
