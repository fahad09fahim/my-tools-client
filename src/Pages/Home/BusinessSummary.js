import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdPeople, MdReviews } from "react-icons/md";
import { FaChartLine, FaTools } from "react-icons/fa";

const BusinessSummary = () => {
  useEffect(() => {
    Aos.init({
      duration: 4000,
    });
  }, []);
  return (
    <div>
      <h1 className="text-5xl text-secondary text-center pt-6 underline">
        Millions Business Trust Us
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4  ml-5 lg:ml-80 mx-10 font-mono my-16">
        <div>
          <h3
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            <MdPeople className=" mx-4 w-20 h-24" />
          </h3>
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            <p className="font-extrabold text-5xl">250+</p>
            <p>Customers</p>
          </div>
        </div>
        <div>
          <h3
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            <FaChartLine className=" mx-4 w-20 h-24" />
          </h3>
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            <p className="font-extrabold text-5xl">120M+ </p>
            <p>Annual revenue</p>
          </div>
        </div>
        <div>
          <h3
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            <MdReviews className=" mx-4 w-20 h-24" />
          </h3>
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            <p className="font-extrabold text-5xl">33K+</p>
            <p> Reviews</p>
          </div>
        </div>
        <div>
          <h3
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            <FaTools className=" mx-4 w-20 h-24" />
          </h3>
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            <p className="font-extrabold text-5xl">50+ </p>
            <p>tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
