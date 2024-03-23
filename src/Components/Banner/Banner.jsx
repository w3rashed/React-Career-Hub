import React from "react";

const Banner = () => {
  return (
    <div className=" flex h-[85vh] items-center justify-between px-2">
      {/* left */}
      <div className="basis-[40%] ">
        <h2 className="text-[80px] font-extrabold">
          One Step Closer To Your{" "}
          <span className="text-violet-600">Dream Job</span>
        </h2>
        <p className="mb-14 mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <a className="px-7 py-5 bg-violet-600 rounded-2xl text-xl font-extrabold">
          Get Started
        </a>
      </div>
      {/* right */}
      <div>
        <img
          className="max-w-[450px]"
          src="https://i.ibb.co/Gt6NmD3/banner.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
