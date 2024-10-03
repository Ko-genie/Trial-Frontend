"use client"; // Mark this component as a Client Component

import Link from "next/link";
import { useState } from "react"; // Import useState for handling dropdown visibility

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center z-50">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="flex items-center space-x-4">
          <Button className="items-center justify-between" size="sm" variant="link" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button className="items-center justify-between" size="sm" variant="link" asChild>
            <Link href="/about">About</Link>
          </Button>

          {/* Company Dropdown */}
          <div className="relative inline-block">
            <Button 
              className="items-center justify-between" 
              size="sm" 
              variant="link"
              onClick={toggleDropdown}
            >
              Company
            </Button>
            {dropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg z-10">
                <ul>
                  <li>
                    <Link href="/faqs" className="block px-4 py-2 hover:bg-gray-100">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="block px-4 py-2 hover:bg-gray-100">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="block px-4 py-2 hover:bg-gray-100">
                      Our Team
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Button className="items-center justify-between" size="sm" variant="link" asChild>
            <Link href="/features">Features</Link>
          </Button>
          <Button className="items-center justify-between" size="sm" variant="link" asChild>
            <Link href="/blog">Blog</Link>
          </Button>
          <Button className="items-center justify-between" size="sm" variant="link" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get KOgenie for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
