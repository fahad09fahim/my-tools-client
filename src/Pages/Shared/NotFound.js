import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const NotFound = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="flex justify-center py-36 ">
      <h1
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        className="text-center text-5xl "
      >
        404 NOT FOUND
      </h1>
      <p
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        className="text-center text-5xl"
      >
        ...
      </p>
    </div>
  );
};

export default NotFound;
