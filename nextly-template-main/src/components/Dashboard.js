"use client";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaRobot, FaMobileAlt, FaBook, FaLightbulb } from "react-icons/fa";
import { useState } from "react";

const aiPrompts = [
  "How can AI help automate code generation?",
  "What is the role of AI in debugging and testing?",
  "How does machine learning apply to mobile development?",
  "Can AI assist in writing efficient Python scripts?",
  "How do I build an AI chatbot for my web application?",
];

const Dashboard = () => {
  const [currentPrompt, setCurrentPrompt] = useState(aiPrompts[0]);

  const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * aiPrompts.length);
    setCurrentPrompt(aiPrompts[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header with Auth Check */}
      <div className="flex justify-between mb-6">
      <h1 className="text-3xl font-bold text-green-600 text-center mb-6">Learning Dashboard</h1>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        
      </div>

      {/* Learning Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* AI Learning */}
        <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition-all text-center">
          <FaRobot className="text-indigo-600 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold">AI Learning</h2>
          <p className="text-gray-500">Learn AI with hands-on projects.</p>
          <Link href="/Ai" className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-md">
  Explore
</Link>


          {/* Suggested Topics */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
            <FaLightbulb className="text-yellow-500 inline-block mr-2 text-lg" />
            <span>{currentPrompt}</span>
            <button 
              onClick={getRandomPrompt} 
              className="block mt-3 text-indigo-500 hover:underline"
            >
              Get a new topic
            </button>
          </div>
        </div>

        {/* USSD Development */}
        <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition-all text-center">
          <FaMobileAlt className="text-blue-600 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold">USSD Development</h2>
          <p className="text-gray-500">Create feature-phone applications.</p>
          <Link href="/ussd" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md">
            Explore
          </Link>
        </div>

        {/* Content-Based Learning */}
        <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition-all text-center">
          <FaBook className="text-green-600 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Content-Based Learning</h2>
          <p className="text-gray-500">Access structured coding lessons.</p>
          <Link href="/Content" className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md">
  Explore
</Link>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
