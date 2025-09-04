import React from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Card({ title, description, demoLink, gitHub, image }) {
  return (
    <div className="hover:border-1  hover:border-teal-400 rounded-2xl overflow-hidden shadow-md hover:shadow-teal-400 hover:-translate-y-2 transition duration-300 bg-[#223036] flex flex-col">
      {/* Image */}
      <div className="w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow text-white">
        <h1 className="text-2xl font-bold text-teal-300 mb-2">{title}</h1>
        <p className="text-gray-300 text-sm mb-6 flex-grow">{description}</p>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-teal-300 text-black font-semibold rounded-lg hover:bg-teal-300 transition"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          <a
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-teal-400 text-teal-300 font-semibold rounded-lg hover:bg-teal-400 hover:text-black transition"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
