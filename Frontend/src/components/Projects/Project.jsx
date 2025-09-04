import React from "react";
import Card from "./Card";
import { images } from "../../assets/image";

export default function Project() {
  return (
    <section
      id="projects"
      className="bg-[#1c2529] scroll-mt-16 min-h-screen text-white lg:pt-24 py-10 px-6 md:px-24"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-teal-300 ">
          My Recent Works
        </h2>
        <p className="mt-3 text-gray-400 text-lg">
          Here are a few projects I've worked on recently
        </p>
      </div>

      <div className="sm:grid-cols-2 grid md:grid-cols-3  gap-20">
        <Card
          title={"My Blog-Space (MERN)"}
          description={`Blog-Space (MERN) is a modern full-stack blogging platform.
          Built with MongoDB, Express, React, and Node.js for smooth performance.
          Users can sign up, log in, and create engaging blog posts.
          It features secure authentication and an easy-to-use interface.
          A clean space to share ideas and explore community content.`}
          image={images.blog}
          demoLink={"https://blog-application-tau-steel.vercel.app/"}
          gitHub={"https://github.com/SinghRiya05/Blog_Application.git"}
        />
        <Card
          title={"AI Chat Persona"}
          description={`This AI persona is inspired by Hitesh Choudhary, a popular YouTuber and educator.
          It provides coding guidance, tech insights, and mentorship-like responses.
          The persona is designed to simulate his teaching style in an interactive way.
          It helps learners explore programming concepts with clarity and motivation.`}
        image={images.persona} gitHub={"https://github.com/SinghRiya05/Persona_project.git"} demoLink={"https://persona-project-neon.vercel.app/"}/>
        <Card />
      </div>
    </section>
  );
}
