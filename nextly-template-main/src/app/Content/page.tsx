"use client";
import Link from "next/link";
import { FaPython, FaJs, FaGamepad, FaMobile, FaBrain, FaLock } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"; // Import Clerk components

const topics = [
  {
    title: "Data Manipulation with Python",
    description: "Learn how to handle and analyze data using Pandas and NumPy.",
    icon: <FaPython className="text-yellow-500 text-5xl mx-auto mb-4" />,
    link: "https://classroom.google.com/c/NDIwNzY0ODY0MTIx?cjc=iapjabj",
  },
  {
    title: "Web Development with JavaScript",
    description: "Master HTML, CSS, and JavaScript to build stunning websites.",
    icon: <FaJs className="text-blue-500 text-5xl mx-auto mb-4" />,
    link: "https://classroom.google.com/c/NDQzODQ1MzQ4MzE2?cjc=qkmfqu2",
  },
  {
    title: "Gaming with Java",
    description: "Develop exciting games using Java and game engines like LibGDX.",
    icon: <FaGamepad className="text-red-500 text-5xl mx-auto mb-4" />,
    link: "https://classroom.google.com/c/NDMyNzI0MDgyNDk1?cjc=bq4gfz6",
  },
  {
    title: "Building Mobile Apps with Flutter",
    description: "Create cross-platform mobile apps using Flutter and Dart.",
    icon: <FaMobile className="text-green-500 text-5xl mx-auto mb-4" />,
    link: "/content-learning/flutter-apps",
  },
  {
    title: "AI & Machine Learning with Python",
    description: "Explore AI fundamentals, deep learning, and NLP with Python.",
    icon: <FaBrain className="text-purple-500 text-5xl mx-auto mb-4" />,
    link: "https://classroom.google.com/c/NDIyODk3ODk3MzQx?cjc=hb6nrwh",
  },
  {
    title: "Cybersecurity Basics",
    description: "Understand ethical hacking, penetration testing, and security fundamentals.",
    icon: <FaLock className="text-gray-700 text-5xl mx-auto mb-4" />,
    link: "https://classroom.google.com/c/NDIwNzY0ODY0MTIx?cjc=iapjabj",
  },
];

const ContentLearning = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header with Auth Check */}
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold text-green-600 text-center mb-6">Content-Based Learning</h1>

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

      {/* Content sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition-all text-center">
            {topic.icon}
            <h2 className="text-xl font-semibold">{topic.title}</h2>
            <p className="text-gray-500">{topic.description}</p>

            {/* Start Learning Button */}
            <Link href={topic.link} className="mt-6 inline-block bg-green-600 text-white px-4 py-2 rounded-md">
              Start Learning
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentLearning;
