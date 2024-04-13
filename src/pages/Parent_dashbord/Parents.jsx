import React from "react";
import RecentAssignments from './recentAssignment';
import Profile from "./profile";
import { Gif } from "@mui/icons-material";
import parent from '../../assets/Parents.gif';

export default function Parents() {
  return (
    <div className="flex flex-wrap gap-4 md:h-screen">
      {/* Profile card */}
      <div className="bg-gradient-to-br from-blue-200 to-blue-300 border border-solid rounded-lg shadow-md p-6 h-64 mt-4 w-[97%] mx-auto">
  <h1 className="text-xl font-bold mb-4 text-blue-800 text-center">Profile</h1>
  {/* <h2>Welcome user</h2> */}
  <img src={parent} alt="profile" className="rounded-full h-44 w-44 mb-4" />
  {/* <Profile /> */}
</div>

      {/* Recent Messages card */}
      <div className="bg-gradient-to-br from-green-200 to-green-300 border border-solid rounded-lg shadow-md p-6 w-full md:w-[calc(66%-16px)] mx-auto">
        <div className="flex justify-around ">  <h1 className="text-xl font-bold mb-4 text-green-800">Recent Messages</h1>
        
        <a href="#" className="text-blue-500 hover:underline">See more</a></div>
  
      </div>

      {/* Recent Homework card */}
      <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 border border-solid rounded-lg shadow-md p-6 w-full md:w-[calc(33%-16px)]">
        <h1 className="text-xl font-bold mb-4 text-yellow-800">Recent Homework</h1>
        {/* Add content for recent homework here */}
        <div className="text-right">
          <a href="#" className="text-blue-500 hover:underline">See more</a>
        </div>
      </div>

      {/* Recent Assignments card */}
      <div className="bg-gradient-to-br from-purple-200 to-purple-300 border border-solid rounded-lg shadow-md p-6 w-full md:w-[calc(50%-16px)] mx-auto">
        <h1 className="text-xl font-bold mb-4 text-purple-800">Recent Assignments</h1>
        <RecentAssignments />
        <div className="text-right">
          <a href="#" className="text-blue-500 hover:underline">See more</a>
        </div>
      </div>

      {/* Results card */}
      <div className="bg-gradient-to-br from-red-200 to-red-300 border border-solid rounded-lg shadow-md p-6 w-full md:w-[calc(50%-16px)]">
        <h1 className="text-xl font-bold mb-4 text-red-800">Results</h1>
        {/* Add content for results here */}
        <div className="text-right">
          <a href="#" className="text-blue-500 hover:underline">See more</a>
        </div>
      </div>
    </div>
  );
}
