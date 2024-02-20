import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <video
        src="https://www.shutterstock.com/shutterstock/videos/1075036892/preview/stock-footage-pediatric-woman-doctor-interacting-with-sick-patient-giving-high-five-during-clinical-consultation.webm"
        autoPlay
        muted
        className="absolute inset-0 w-full h-full object-cover"
        loop
      ></video>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10">
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:py-16 text-white">
          <h1 className="text-4xl lg:text-6xl tracking-normal md:leading-[1.4em] lg:leading-[1.2em] capitalize">
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-tr from-teal-500 via-cyan-300 to-slate-500">
            Complete Medical Solutions 
            </span>{" "}
            <br />In one Place and Good Health.
          </h1>
          <div className="">
            <p className="text-lg mb-4">
              <i>" We wish your good health  "</i>
            </p>
            <p className="text-base mb-4">
              Welcome to our innovative online banking platform, where
              convenience meets security. With our cutting-edge technology and
              user-friendly interface, managing your finances has never been
              easier. Whether you're checking your balance, transferring funds,
              or paying bills, our platform provides seamless integration and
              robust security measures to safeguard your transactions.
              Experience the future of banking with us, where reliability and
              efficiency are our top priorities
            </p>
            <a
              href="service"
              className="inline-block bg-gradient-to-tr from-black  to-indigo-400 font-bold tracking-wide text-white capitalize transition-all duration-300 py-4 px-10 lg:px-8 xl:px-10 hover:bg-gradient-to-tr hover:from-white hover:text-black hover:to-stone-600 hover:shadow-md rounded-md"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
