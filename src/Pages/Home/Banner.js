import React from "react";
import banner from "../../assets/banner.png";
const Banner = () => {
  return (
    <div
      className="hero min-h-[75%] !bg-cover !bg-no-repeat "
      style={{
        background: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">
            Welcome to My Tools
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
