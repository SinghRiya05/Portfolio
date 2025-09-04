import React from "react";

function Card({ name }) {
  return (
    <div className="border-1 border-teal-400 text-center p-5 rounded-xl 
                    bg-[#223036] hover:bg-teal-500 hover:text-black 
                    shadow-md hover:shadow-teal-400/50 
                    transition-all duration-300 ease-in-out cursor-pointer">
      <span className="font-medium text-lg">{name}</span>
    </div>
  );
}

export default Card;
