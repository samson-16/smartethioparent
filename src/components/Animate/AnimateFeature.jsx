import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
// import stud1 from '../assets/stud1.jpg';

import Homework from "../../assets/Homework.jpg";
import Connect from "../../assets/connect.png";
import Resource from "../../assets/resource.png";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimateFeature = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      AOS.init({
        duration: 1000,
      });
    }
  }, [inView]);

  let imageSrc;
  if (item === "homework") {
    imageSrc = Homework;
  } else if (item === "connect") {
    imageSrc = Connect;
  } else if (item === "resource") {
    imageSrc = Resource;
  }

  return (
    <div className='animation' ref={ref} data-aos="zoom-in">
    <div className="flex flex-col sm:flex-row items-center">
       <div className="flex flex-col ">
       <img src={imageSrc} alt={item} className="rounded-lg mb-4 sm:mb-0 sm:mr-4 w-52 h-56 md:w-[200px]" />
      <span>{item}</span>
       </div>
    </div>
  </div>
  );
};

export default AnimateFeature;
