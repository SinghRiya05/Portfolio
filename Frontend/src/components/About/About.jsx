import React from "react";
import { images } from "../../assets/image";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";


export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#1c2529] text-white flex items-center px-6 md:px-20 py-16"
    >
      <div className="lg:pl-24 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-4xl font-extrabold text-teal-200">
              LET ME INTRODUCE MYSELF

            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-200">
            <p>
              Hi, I’m{" "}
              <span className="font-bold text-[#a1d1b1]">Riya Singh</span>, a
              full-stack developer skilled in the{" "}
              <span className="font-semibold">MERN stack</span> (MongoDB,
              Express.js, React, Node.js).
            </p>
            <p>
              I enjoy building scalable and user-friendly web applications.
              Along with development, I have strong fundamentals in{" "}
              <span className="font-semibold text-teal-300">Generative AI</span>,
              including Large Language Models (LLMs), RAG, and AI Agents.
            </p>
            <p>
              I love exploring how{" "}
              <span className="italic text-teal-400">
                AI can be integrated into real-world applications
              </span>{" "}
              to make life easier and smarter.
            </p>
          </div>

          <div className="bg-[#2a3338] shadow-lg rounded-xl p-6 border-l-4 border-teal-500">
            <p className="text-lg text-gray-200">
              💡 <span className="font-bold text-white">Fun Fact:</span> I’m
              always curious about new technologies and love experimenting with{" "}
              <span className="text-teal-400 font-medium">AI tools</span> to
              push the boundaries of web development.
            </p>
          </div>
        </div>

        {/* Right Image + Social Links */}
        <div>
          <div className="flex justify-center">
            <img
              src={images.about}
              alt="About"
              className="rounded-2xl w-84 h-84 md:w-96 md:h-96 object-cover shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Social Links */}
          <div className="text-center mt-6">
            <h1 className="text-xl font-bold text-teal-300">FIND ME ON</h1>
            <p className="text-gray-400 text-sm">Feel free to connect with me</p>
            <div className="flex justify-center gap-4 mt-4">
              {/* Github */}
              <a
                href="https://github.com/SinghRiya05"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#2a3338] hover:bg-teal-500 transition-colors duration-300"
              >
                <Github className="w-6 h-6 text-white" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/riya05singh/

"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#2a3338] hover:bg-teal-500 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6 text-white"/>
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/RiyaRajput89506"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#2a3338] hover:bg-teal-500 transition-colors duration-300"
              >
                <Twitter className="w-6 h-6 text-white"/>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/singhriya.0.5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#2a3338] hover:bg-teal-500 transition-colors duration-300"
              >
                <Instagram className="w-6 h-6 text-white"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
