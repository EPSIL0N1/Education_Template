import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import About from "./components/About.jsx"
import Courses from "./components/Courses.jsx"
import Placements from "./components/Placements.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/courses",
    element: <Courses/>
  },
  {
    path: "/placements",
    element: <Placements/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

