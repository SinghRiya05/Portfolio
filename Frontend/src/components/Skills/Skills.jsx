import React from "react";
import Card from "./Card";

function Skills() {
  const skills = [
    { category: "Frontend", name: "HTML" },
    { category: "Frontend", name: "CSS" },
    { category: "Frontend", name: "JavaScript (ES6+)" },
    { category: "Frontend", name: "React.js" },
    { category: "Frontend", name: "Tailwind CSS" },

    { category: "Backend / DB", name: "Node.js" },
    { category: "Backend / DB", name: "Express.js" },
    { category: "Backend / DB", name: "MongoDB" },

    { category: "Generative AI", name: "LLMs" },
    { category: "Generative AI", name: "RAG" },
    { category: "Generative AI", name: "AI Agents" },
    { category: "Generative AI", name: "Prompt Engineering" },
    { category: "Generative AI", name: "Vector Databases (Qdrant basics)" },

    { category: "Tools & Others", name: "Git & GitHub" },
    { category: "Tools & Others", name: "Postman (API testing)" },
    { category: "Tools & Others", name: "VS Code" },
   
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-[#1c2529] via-[#223036] to-[#0f2027]
scroll-mt-16 min-h-screen text-white lg:pt-26 py-16 px-6 md:px-20"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl  font-extrabold text-teal-300">
          Skills / Tech Stack
        </h2>
        <p className="mt-3 text-gray-400 text-lg">
          Technologies I work with on a regular basis
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <Card key={index} name={skill.name} category={skill.category} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
