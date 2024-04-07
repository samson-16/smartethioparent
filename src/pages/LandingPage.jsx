import React from "react";
import Button from "@mui/material/Button";
import landingphoto from "../assets/parent-stud.jpg";
import homework from "../assets/Homework.jpg";
import { FaPlayCircle } from "react-icons/fa";
import logo from "../assets/Logo.jpg";
import p1 from "../assets/p1.png";
import stud1 from "../assets/stud1.jpg";
import connect from "../assets/connect.png";
import resource from '../assets/resource.png'
import { Link } from "react-router-dom";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import NavBar from "../components/NabBar";
import Footer from "../Footer";
import Testimony from './tesimony'

const LandingPage = () => {
  return (
    <>
      
        <nav className="bg-[#F0F7FF]  w-[99%] ml-1 rounded-md">
          <ul className="flex justify-between mx-3 mb-3 items-center h-12">
            <li>
          <img src={logo} alt="logo" className="w-8 h-10 rounded-3xl" />
            </li>
            <Link to={'/logging'}>
            <button className="rounded-xl bg-blue-300 hover:bg-blue-400  w-28 h-8 text-center text-white bold">
          Join now
            </button>
            </Link>
           
          </ul>
        </nav>
        <header className="h-[600px] bg-[#F0F7FF] w-[98%] flex justify-center ml-[10px] rounded-2xl">
          <div className="flex  ">
            <div className="flex flex-col justify-center ml-8 text-center">
          <h1 className="text-4xl font-bold mb-2">
            BETTER FUTURE FOR YOUR CHILDREN
          </h1>
          <p className="text-gray-600 mb-4">
            Stay Connected with Your Child's Education
          </p>
          <div className="flex items-center justify-center mt-4">
          <Link to="/logging">
                <Button variant="contained" color="primary">
                  Join now
                </Button>
              </Link>
            <span className="text-gray-500 ml-2 flex ">
              {" "}
              <span className="mr-3">
            <FaPlayCircle size={24} />{" "}
              </span>{" "}
              Watch our welcome video
            </span>
          </div>
            </div>
            <div className=" overflow-hidden ml-4 mr-5 h-full flex items-center border-none ">
          <img
            src={landingphoto}
            alt="landing photo"
            className="mx-auto rounded-3xl "
          />
            </div>
          </div>
        </header>

        <section className="mt-7">
          <div className=" flex justify-evenly mx-5">
            <div>
          <img src={p1} alt="" className="w-[500px] rounded-2xl" />
            </div>
           <div className="flex justify-center items-center w-[480px]">
           <div className="mx-6 font-bold text-center">
          <h2>Your child's digital guardian</h2>
          <p  className="font-thin">
            Our illustration depicts the heartwarming scene of parents and
            children engaged in educational activities together, symbolizing
            the strong bond fostered through shared learning experiences.
          </p>
            </div>
           </div>
          </div>
        </section>
        <section className="mt-7">
  <div className="flex justify-around">
    <div className="flex justify-center items-center">
      <div className="mx-6 h-full flex justify-center items-center text-center font-bold w-[480px]">
        <div>
          <h2>Your child's digital guardian</h2>
          <p className="font-thin">
            Parents are empowered to take an active role in their child's
            education, moving beyond traditional roles to become influential
            contributors to their academic development.
          </p>
        </div>
      </div>
    </div>
    <div>
      <img src={stud1} alt="" className="w-[500px] rounded-lg" />
    </div>
  </div>
</section>


        <section className="mt-7 ">
          <div className="h-[400px] bg-[#F0F7FF]">
            <div className="text-center font-semibold mt-3">
          <h1 className="my-2">Key features</h1>
          <p>
            Our platform is designed to provide parents with the tools and
            resources needed to support their child's academic journey.
          </p>
          <div className="flex flex-wrap justify-evenly">
            <div className="w-[250px] text-center">
              <img
            src={homework}
            alt=""
            className="w-[250px] h-[300px] ml-5 shadow-md rounded-xl mt-3
            opacity-60 hover:opacity-100 hover:scale-105"
              />
              <p className="mt-1">Homework</p>
            </div>
            <div className="w-[250px] text-center">
              <img
            src={connect}
            alt=""
            className="w-[250px] h-[300px] ml-5 shadow-md rounded-xl mt-3
            opacity-60 hover:opacity-100 hover:scale-105"
              />
              <p className="mt-1">Connect with Educators</p>
            </div>{" "}
            <div className="w-[250px] text-center">
              <img
            src={resource}
            alt=""
            className="w-[250px] h-[300px] ml-5 shadow-md rounded-xl mt-3
            opacity-60 hover:opacity-100 hover:scale-105"
              />
              <p className="mt-1">Access Resources</p>
            </div>
            <div className="w-[250px] text-center">
              <img
            src={homework}
            alt=""
            className="w-[250px] h-[300px] ml-5 shadow-md rounded-xl mt-3
            opacity-60 hover:opacity-100 hover:scale-105"
              />
              <p className="mt-1">Track Progress</p>
            </div>
          </div>
            </div>
          </div>
        </section>
        <section>
          <div className="h-[500px] my-4">
            <h1 className="text-center font-semibold">Our welcoming video</h1>
          </div>
        </section>

        <section>
          <div className="h-[500px] bg-sky-600">
            <h1 className="text-lg">Testimonies</h1>
            <div>
            <Testimony/>
            </div>
          </div>
        </section>

        <footer>
         <Footer />
        </footer>
          </>
        );
};

export default LandingPage;
