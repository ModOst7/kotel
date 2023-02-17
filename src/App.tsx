import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, Route, HashRouter, Routes } from "react-router-dom";
import Root from "./routes/root";
import Menu from "./routes/menu";
import LabOne from './routes/labOne/labOne';
import LabTwo from './routes/labTwo/labTwo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

function App() {
  return (
    <div >
      <HashRouter
        basename="/"
      >
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="menu" element={<Menu />} />
          <Route path="labOne" element={<LabOne />} />
          <Route path="labTwo" element={<LabTwo />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
