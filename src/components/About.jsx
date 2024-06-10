import React from "react";
// import img1 from "../assets/program/1.jpg";
import img1 from "../assets/program/1.jpg";
import img2 from "../assets/program/2.jpg";
import img3 from "../assets/program/3.jpg";
import img4 from "../assets/program/4.jpg";
import img11 from "../assets/program/11.jpg";
import img6 from "../assets/program/6.jpg";
import img8 from "../assets/program/8.jpg";
import img14 from "../assets/program/14.jpg";



const About = () => {
  return (
    <div className=" min-h-screen flex flex-col  items-center lg:px-32 px-5 pt-24  gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-backgroundColor text-4xl font-semibold text-center ">
          About Us
        </h1>
        <p className=" text-center text-xl font-semibold ">
          Hygieiora is here for you. Get involved in this movement.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-2" >
      {/* <img className=" rounded-lg" src={img1} alt="img" /> */}
      <img className=" rounded-lg" src={img6} alt="img" />

        <img className=" rounded-lg" src={img2} alt="img" />
        <img className=" rounded-lg" src={img3} alt="img" />
        <img className=" rounded-lg" src={img11} alt="img" />
        <img className=" rounded-lg" src={img8} alt="img" />
        <img className=" rounded-lg" src={img14} alt="img" />

      </div>
    </div>
  );
};

export default About;
