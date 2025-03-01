"use client";
import { useEffect } from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

// Extend the Window interface in TypeScript to include AgentInitializer
declare global {
  interface Window {
    AgentInitializer: any;
  }
}

const AILearning = () => {
  useEffect(() => {
    // Dynamically load the JotForm script
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js";
    script.async = true;
    document.body.appendChild(script);

    // Once the script is loaded, initialize the chat widget
    script.onload = () => {
      if (window.AgentInitializer) {
        window.AgentInitializer.init({
          rootId: "JotformAgent-0195500db53171ae81b3e404adddc7d79e3a", // JotForm agent root ID
          formID: "0195500db53171ae81b3e404adddc7d79e3a", // JotForm form ID
          queryParams: ["skipWelcome=1", "maximizable=1"], // Custom URL params
          domain: "https://www.jotform.com", // JotForm domain
          isInitialOpen: false, // Whether the widget is open initially
          isDraggable: false, // Whether the widget is draggable
          background: "linear-gradient(180deg, #C8CEED 0%, #C8CEED 100%)", // Background color
          buttonBackgroundColor: "#0a1551", // Button background color
          buttonIconColor: "#fff", // Button icon color
          variant: false, // Set variant to false
          customizations: {
            greeting: "Yes", // Display greeting
            greetingMessage: "Hi! I am Santigie! Sabi Coding Instructor. How can I assist you?", // Custom greeting message
            pulse: "Yes", // Pulsing effect
            position: "right", // Position of the widget (right side of the screen)
          }
        });
      } else {
        console.error("AgentInitializer not loaded.");
      }
    };

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Header with Auth Check */}
      <div className="flex justify-between mb-6 w-full">
        <h1 className="text-3xl font-bold text-green-600 text-center mb-6">AI Learning Chatbot</h1>

        <div className="flex items-center gap-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </div>

      <div className="w-full max-w-2xl bg-white p-4 rounded-xl shadow-lg">
        <div className="h-80 overflow-y-auto mb-4 p-2 border rounded-lg bg-gray-50">
          <h1 className="text-xl font-semibold">
            Welcome to Sabi Coding AI-Powered Assistance
          </h1>
          <p className="mt-4">
            Our intelligent chatbot is here to help you every step of the way. Have a question? Need clarification? 
            Ask away, and our bot will provide quick, clear answers to help you succeed.
          </p>
        </div>

        {/* Quick Guide Prompts Section */}
        <div className="w-full bg-white p-4 mt-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Quick Guide Prompts:</h2>
          <ul className="list-disc pl-5">
            <li className="text-blue-600 cursor-pointer hover:underline">
              <strong>Automate Tasks with Python</strong> - Learn how to automate tasks using Python.
            </li>
            <li className="text-blue-600 cursor-pointer hover:underline">
              <strong>Learn Coding as a Child</strong> - A fun and engaging way for children to learn coding!
            </li>
            <li className="text-blue-600 cursor-pointer hover:underline">
              <strong>Learn Java</strong> - Start learning the basics of Java programming.
            </li>
            <li className="text-blue-600 cursor-pointer hover:underline">
              <strong>And Much More...</strong> - Explore other languages and frameworks!
            </li>
          </ul>
        </div>

      
      </div>
    </div>
  );
};

export default AILearning;
