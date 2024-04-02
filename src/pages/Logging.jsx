import React from "react";
import parent from "../assets/parent.jpg";
import { Link } from "react-router-dom";
const Logging = () => {
  return (
    <div className="w-full h-screen flex  items-center flex-col mt-24 gap-6 ml-9">
      <div className="flex w-[700px] h-32">
        <img src={parent} alt="" className="w-[200px] h-full rounded-full"/>
      <Link to="/login">
      <div
        className="w-[400px] h-32 bg-blue-600 flex justify-center
         items-center font-extrabold text-4xl text-white rounded-2 rounded-2xl hover:scale-105"
      >
        <h1>Parent</h1>
      </div>
        </Link>
      </div>
      <div className="flex w-[700px] h-32">
        <img src={parent} alt="" className="w-[200px] h-full rounded-full"/>
        <Link to="/login">
      <div
        className="w-[400px] h-32 bg-blue-600 flex justify-center
         items-center font-extrabold text-4xl text-white rounded-2 rounded-2xl hover:scale-105"
      >
        <h1>Teacher</h1>
      </div>
        </Link>
      </div>
      <div className="flex w-[700px] h-32">
        <img src={parent} alt="" className="w-[200px] h-full rounded-full"/>
        <Link to="/login">
      <div
        className="w-[400px] h-32 bg-blue-600 flex justify-center
         items-center font-extrabold text-4xl text-white rounded-2 rounded-2xl hover:scale-105"
      >
        <h1>Admin</h1>
      </div>
        </Link>
      </div>
    </div>
  );
};

export default Logging;
