import React from "react";
import NavigationLink from "./NavigationLink";

export const Header = () => {
  return (
    <header className="flex justify-center items-center gap-2 py-2 bg-gradient-to-tr from-lime-600 to-lime-800">
      <NavigationLink href="#" text="Home"></NavigationLink>
      <NavigationLink href="#" text="About"></NavigationLink>
      <NavigationLink href="#" text="Testimonial"></NavigationLink>
      <NavigationLink href="#" text="Contact"></NavigationLink>
    </header>
  );
};
