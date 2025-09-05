import React from "react";
import { images } from "../../assets/image";
import MotionWrapper from "../../MotionWrapper";

function Home() {
  return (
    <section
      id="home"
      style={{ backgroundImage: `url(${images.bg})` }}
      className="relative scroll-mt-20 sm:pt-26 pt-20 bg-cover min-h-screen flex flex-col md:flex-row items-center px-8 md:px-16 md:pt-12"
    >
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Left Content */}
      <div className="relative z-10 flex-1 text-center md:text-left lg:pl-36 text-white space-y-6">
        <MotionWrapper delay={0}>
          <h1 className="text-5xl lg:text-7xl md:text-6xl font-extrabold">
            Hi There! 👋
          </h1>
        </MotionWrapper>

        <MotionWrapper delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-bold lg:text-6xl">
            I’m{" "}
            <span className="riya bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent">
              Riya Singh
            </span>
          </h2>
        </MotionWrapper>

        <MotionWrapper delay={0.4}>
          <h3 className="text-2xl md:text-3xl text-gray-300 font-medium">
            MERN Stack Developer
          </h3>
        </MotionWrapper>

        <MotionWrapper delay={0.6}>
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-xl shadow-md transition font-semibold"
            >
              View Projects
            </a>
            <a
              href="#resume"
              className="px-6 py-3 border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white rounded-xl shadow-md transition font-semibold"
            >
              Resume
            </a>
          </div>
        </MotionWrapper>
      </div>

      {/* Right Image */}
      <MotionWrapper delay={0.8} direction="right">
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src={images.Home1}
            alt="profile"
            className="w-72 md:w-96 lg:w-[450px] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          />
        </div>
      </MotionWrapper>
    </section>
  );
}

export default Home;
