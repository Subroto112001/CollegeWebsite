import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Foter from "./Foter";
import Navbar from "./Navbar";
import Slider from "react-slick";

const Aplication = () => {
  return (
    <div className="">
 
      <Header />
      <Navbar />
      <div className="pb-6">
        <Outlet  />
      </div>
      <Foter />

     
    </div>
  );
};

export default Aplication;
