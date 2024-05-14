import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-backgroundColor text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            We offer a range of services tailored to your mental health needs:
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard
          icon={icon1}
          title="Therapy Sessions
"
          content=" Understand your mental health better with our specialized therapy sessions."
        />
        <ServicesCard
          icon={icon2}
          title="Mindfulness Programs
"
          content=" Regular health checks to monitor your progress and adjust your care plan as needed."
        />
        <ServicesCard
          icon={icon3}
          title="Heart Health"
          content="Because mental health and physical health are interconnected, we offer heart health services to ensure you're taking care of your whole self."
        />
      </div>
    </div>
  );
};

export default Services;
