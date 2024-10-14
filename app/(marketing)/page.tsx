"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

// Importing Poppins font
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const EnhancedPage = () => {
  return (
    <div
      className="flex items-center justify-center h-screen overflow-hidden"
      style={{ backgroundImage: "url('/background3.jpg')" }}
    >
      {/* Container with buttons */}
      <div className="bg-white p-16 rounded-xl shadow-2xl flex flex-col items-center max-w-lg w-full relative mt-[-80px]">
        <h1
          className={cn(
            "text-4xl font-bold text-gray-800 mb-8",
            textFont.className
          )}
        >
          Welcome to KOgenie
        </h1>
        <p className="text-gray-600 mb-10 text-center">
          Experience the power of AI-powered advertising in minutes. Start now
          to accelerate your marketing success.
        </p>

        {/* Sign In Button with hover effect */}
        <Button
          style={{ background: 'rgb(102, 0, 255)' }}
          className="mb-6 w-full text-lg font-semibold transition duration-300 ease-in-out hover:bg-purple-700 hover:scale-105"
          size="lg"
          asChild
        >
          <Link href="/sign-in">Sign In</Link>
        </Button>

        {/* Sign Up Button with hover effect */}
        <Button
          style={{ background: 'rgb(102, 0, 255)' }}
          className="mb-6 w-full text-lg font-semibold transition duration-300 ease-in-out hover:bg-purple-700 hover:scale-105"
          size="lg"
          asChild
        >
          <Link href="/sign-up">Sign Up</Link>
        </Button>

        {/* Back to Home Button with hover effect */}
        <Button
          className="w-full text-lg font-semibold transition duration-300 ease-in-out hover:bg-gray-200 hover:scale-105"
          size="lg"
          variant="outline"
          asChild
        >
          <Link href="https://kogenie.com">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default EnhancedPage;