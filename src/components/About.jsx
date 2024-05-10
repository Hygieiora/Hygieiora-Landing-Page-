import React from "react";
import img from "../assets/img/about4.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className=" text-justify lg:text-start">
          At Hygieiora, we're committed to providing comprehensive mental health
          services that are accessible, inclusive, and personalized. Our team of
          experienced professionals is dedicated to understanding and meeting
          your unique needs. We believe that everyone deserves access to quality
          mental health care, and we're here to make that a reality.
        </p>
        <p className="text-justify lg:text-start">
          Learn more about our mission to provide accessible mental healthcare
          for all.
        </p>
        <p className="text-justify lg:text-start">
          Discover our dedicated team of professionals committed to supporting
          your mental health journey.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
