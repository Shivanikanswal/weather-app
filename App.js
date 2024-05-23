import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./src/components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import WeatherDetail from "./src/components/WeatherDetail";
// import bgImage from "./src/utils/images/night-img.jpg";
import bgImage from "./src/utils/images/sky-img.jpeg";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        height: `100vh`,
        backgroundSize: `cover`,
      }}
    >
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/city/:name/lat/:latitude/long/:longitude",
        element: <WeatherDetail />,
      },
    ],
  },
]);
const rootApp = ReactDOM.createRoot(document.getElementById("root"));

rootApp.render(<RouterProvider router={appRouter} />);
