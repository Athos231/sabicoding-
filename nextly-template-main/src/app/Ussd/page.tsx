"use client";
import Link from "next/link";
import { FaPython, FaJs, FaGamepad, FaMobile, FaBrain, FaLock } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"; // Import Clerk components



const UssdPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header with Auth Check */}
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold text-green-600 text-center mb-6">Ussd Based Learning</h1>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="px-6 py-2 text-white bg-indigo-600 rounded-md">Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className="px-6 py-2 text-white bg-green-600 rounded-md">Sign Up</button>
            </SignUpButton>
          </SignedOut>
        </div>
      </div>

     

      </div>
    
  );
};

export default UssdPage;
