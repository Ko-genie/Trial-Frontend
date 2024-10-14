"use client"; // Mark this component as a Client Component

import { Logo } from "@/components/logo"; // Assuming you have a Logo component

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-16 px-4 bg-white flex items-center justify-center z-50">
      {/* Only the logo remains */}
      <Logo />
    </div>
  );
};
