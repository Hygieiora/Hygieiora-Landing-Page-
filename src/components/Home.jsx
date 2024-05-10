import React, { useState } from "react";
import Button from "../layouts/Button";
import Contact from "../models/Contact";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleApplyNowClick = () => {
    setShowModal(true);
  };

  const handleCloseForm = () => {
    setShowModal(false);
  };
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white md:bg-[url('assets/img/about2.jpg')] bg-[url('assets/img/home3.jpg')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight text-shadow ">
          Empowering Minds for a Balanced Life Your Trusted...
        </h1>
        <p>
          Welcome to Hygieiora - Your trusted partner in mental health care.
          We're dedicated to empowering your health choices for a vibrant life.
          <span className="hidden md:block">
            We believe in the power of understanding and managing your mental
            health, and we're here to support you every step of the way. Sign up
            now for early access participation and start your journey towards
            better mental health.
          </span>
        </p>
        <button
          className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
          onClick={handleApplyNowClick}
        >
          Apply Now
        </button>
      </div>
      {showModal && <Contact closeForm={handleCloseForm} />}
    </div>
  );
};

export default Home;
