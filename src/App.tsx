import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar/Navbar";
import InstallPWA from "./components/layouts/InstallPWA/InstallPWA";
import Home from "./components/pages/Home/Home";
import EditGoals from "./components/pages/EditGoals/EditGoals";
import Chart from "./components/pages/Chart/Chart";
import Default from "./components/pages/Default/Default";
import "./App.scss";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <InstallPWA />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/editgoals"} element={<EditGoals />} />
        <Route path={"/chart/:id"} element={<Chart />} />
        <Route path={"*"} element={<Default />} />
      </Routes>
    </>
  );
};

export default App;
