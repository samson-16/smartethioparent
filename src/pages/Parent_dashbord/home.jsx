import React from "react";
import RecentAssignments from './recentAssignment'
export default function Home() {
  return (
    <>
    
      <div className="flex justify-between m-7">
        <div className="flex justify-between border border-solid w-2/5 h-32">
          <h1 className="text-xl font-bold ml-3">Recent Messages</h1>
          <a href="#" className="text-blue-500 hover:underline">
            See all
          </a>
        </div>
        <div className=" border border-solid w-96 h-32 ">
          <h1 className="text-xl font-bold ml-3">Profile</h1>
        </div>
      </div>
      <div className="flex justify-between m-7">
        <div className="flex justify-between border border-solid w-2/5 h-32">
          <h1 className="text-xl font-bold ml-3">Recent HomeWork</h1>
          <a href="#" className="text-blue-500 hover:underline">
            See all
          </a>
        </div>
        <div className="border border-solid w-2/5 h-auto ">
        <div className="flex justify-between  ">
          <h1 className="text-xl font-bold ml-3">Assignment</h1>
          <a href="#" className="text-blue-500 hover:underline">
            See all
          </a> </div>
          <div  className="m-3 p-3 ">
          <RecentAssignments/>
          </div>
        </div>
      </div>
      <div className="flex justify-between border border-solid w-2/5 h-32 ml-7">
      <h1 className="text-xl font-bold ml-2">Result</h1>
          <a href="#" className="text-blue-500 hover:underline">
            See all
          </a>
      </div>
    </>
  );
}
