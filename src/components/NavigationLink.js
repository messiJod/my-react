import React from "react";

const NavigationLink = ({ href, text }) => {
  return (
    <a
      href={href}
      className="inline-block hover:bg-lime-600 text-white px-4 py-1 rounded-md transition-all"
    >
      {text}
    </a>
  );
};

export default NavigationLink;
