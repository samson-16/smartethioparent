import React, { useState, useEffect } from "react";

//components
import RecentAssignments from './recentAssignment';
import Profile from "./profile";
import RecentResult from "./recentResult";
import RecentHomework from "./recentHomework";
//react-icons
import { FaUser } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { FiBook } from "react-icons/fi";
import { MdAssignment } from "react-icons/md";
import { FiBarChart2 } from "react-icons/fi";
import { FaBars } from "react-icons/fa";


export default function Parents() {
  const [activeTab, setActiveTab] = useState(null);
  
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(prevState => !prevState);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if screen width is less than or equal to 768px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };



  return (
    <>
    <div className="flex">
    {/* Sidebar for large screens */}
    <div className="w-auto bg-gray-200 h-screen hidden md:block">
      <div className="p-4">
        {/* Include sidebar items */}
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "profile" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleTabClick("profile")}
        >
          <div className="flex">
            <FaUser size={45} className="text-blue-500" />
            <h1 className="text-xl font-bold ml-10">Profile</h1>
          </div>

        </div>
        <div
          className={`p-4 cursor-pointer ${
            activeTab === "messages" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleTabClick("messages")}
        >
          <div className="flex">
            <AiOutlineMessage size={45} className="text-blue-500" />
            <h1 className="text-xl font-bold ml-10">Recent Message</h1>
          </div>
        </div>


        <div
          className={`p-4 cursor-pointer ${
            activeTab === "homework" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleTabClick("homework")}
        >
          <div className="flex">
            <FiBook size={45} className="text-blue-500" />
            <h1 className="text-xl font-bold ml-10">Recent Homework</h1>
          </div>
        </div>

        <div
          className={`p-4 cursor-pointer ${
            activeTab === "assignment" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleTabClick("assignment")}
        >
          <div className="flex">
            <MdAssignment size={45} className="text-blue-500" />
            <h1 className="text-xl font-bold ml-10">Recent Assignment</h1>
          </div>
        </div>

        <div
          className={`p-4 cursor-pointer ${
            activeTab === "result" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleTabClick("result")}
        >
          <div className="flex">
            <FiBarChart2 size={45} className="text-blue-500" />
            <h1 className="text-xl font-bold ml-10">Result</h1>
          </div>
        </div>
      </div>
    </div>

    {/* Hamburger icon and sidebar toggle for small screens */}
    {isMobile && (
      <>
      <div className="top-0 left-0 ">
        <button onClick={handleSidebarToggle} >
        <FaBars size={45} className="text-blue-500"/>
      </button>
      </div>
      {isSidebarOpen && (
        <div className="w-auto bg-gray-200 h-auto transform translate-x-12 transition-transform duration-300 ease-in-out">
          <div className="p-1">
            {/* Include sidebar items */}
            <div
              className={`p-4 cursor-pointer ${
                activeTab === "profile" ? "bg-gray-400" : ""
              }`}
              onClick={() => handleTabClick("profile")}
            >
              <div className="flex">
                <FaUser size={45} className="text-blue-500" />
                <h1 className="text-xl font-bold ml-3">Profile</h1>
              </div>
            </div>
            <div
          className={`p-4 cursor-pointer ${
            activeTab === "messages" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleTabClick("messages")}
        >
          <div className="flex">
            <AiOutlineMessage size={45} className="text-blue-500" />
            <h1 className="text-xl font-bold ml-10">Recent Message</h1>
          </div>
            </div>
            <div
          className={`p-4 cursor-pointer ${
            activeTab === "homework" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleTabClick("homework")}
        >
          <div className="flex">
            < FiBook size={45} className="text-blue-500" />
            <h1 className="text-xl font-bold ml-10">Recent Homework</h1>
          </div>
            </div>
            <div
          className={`p-4 cursor-pointer ${
            activeTab === "assignment" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleTabClick("assignment")}
        >
          <div className="flex">
            <MdAssignment size={45} className="text-blue-500" />
            <h1 className="text-xl font-bold ml-10">Recent Assignment</h1>
          </div>
            </div>
            <div
          className={`p-4 cursor-pointer ${
            activeTab === "result" ? "bg-gray-400" : ""
          }`}
          onClick={() => handleTabClick("result")}
        >
          <div className="flex">
            <FiBarChart2 size={45} className="text-blue-500" />
            <h1 className="text-xl font-bold ml-10">Result</h1>
          </div>
        </div>



            {/* Include other sidebar items similarly */}
          </div>
        </div>
      )}
      </>
    )}
     




{/*  main code */}
     
        <div className="flex-grow bg-white p-4">
          {activeTab === "messages" && (
            <div className="border border-solid h-auto w-auto">
             <div className="flex justify-between">
                <h1 className="text-xl font-bold ml-3">Messages</h1>
                <a href="#" className="text-blue-500 hover:underline">
                  See all
                </a>
              </div>
            </div>
          )}
          {activeTab === "profile" && (
            <div className="border border-solid h-auto">
              <div>
                <h1 className="text-xl font-bold ml-3">Profile</h1>
              </div>
              <div className="m-3 p-3">
                <Profile></Profile>
              </div>
            </div>
          )}
           {activeTab === "homework" && (
            <div className="border border-solid h-auto">
             <div className="flex justify-between">
                <h1 className="text-xl font-bold ml-3">Homework</h1>
                <a href="#" className="text-blue-500 hover:underline">
                  See all
                </a>
              </div>
              <div className="m-3 p-3">
                <RecentHomework />
              </div>
            </div>
          )}
          {activeTab === "assignment" && (
            <div className="border border-solid h-auto">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold ml-3">Assignment</h1>
                <a href="#" className="text-blue-500 hover:underline">
                  See all
                </a>
              </div>
              <div className="m-3 p-3">
                <RecentAssignments />
              </div>
            </div>
          )}
          {activeTab === "result" && (
            <div className="border border-solid h-auto">
             <div className="flex justify-between">
                <h1 className="text-xl font-bold ml-3">Result</h1>
                <a href="#" className="text-blue-500 hover:underline">
                  See all
                </a>
              </div>
              <div className="m-3 p-3">
              <RecentResult />
                
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}