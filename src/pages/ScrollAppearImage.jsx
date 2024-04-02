import React, { useEffect, useState } from 'react';
import p1 from '../assets/p1.jpg';

const ScrollAppearImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the distance from the top of the page to the bottom of the viewport
      const bottomOfViewport = window.innerHeight + window.scrollY;
      // Get the distance from the top of the image to the bottom of the page
      const imageBottom = document.getElementById('image').offsetTop + document.getElementById('image').offsetHeight;

      // Check if the bottom of the image is within the viewport
      if (imageBottom < bottomOfViewport) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="mt-7">
      <div className="flex justify-evenly mx-5">
        <div>
          <img
            id="image"
            src={p1}
            alt=""
            className={`w-[500px] rounded-2xl ${isVisible ? 'image-visible' : 'image-hidden'}`}
          />
        </div>
        <div className="flex justify-center items-center w-[480px]">
          <div className="mx-6 font-bold text-center">
            <h2>Your child's digital guardian</h2>
            <p className="font-thin">
              Our illustration depicts the heartwarming scene of parents and
              children engaged in educational activities together, symbolizing
              the strong bond fostered through shared learning experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollAppearImage;
