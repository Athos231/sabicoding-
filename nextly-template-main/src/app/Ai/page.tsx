"use client";
import { useState } from "react";

const AILearning = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ text: string; type: "user" | "bot" }[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { text: input, type: "user" as const };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("/api/geminiChat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();
      const botMessage = { text: data.reply, type: "bot" as const };  // ✅ Fix applied here
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "Error connecting to AI.", type: "bot" as const }]);
    }

    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">AI Learning Chatbot</h1>
      
      <div className="w-full max-w-2xl bg-white p-4 rounded-xl shadow-lg">
        <div className="h-80 overflow-y-auto mb-4 p-2 border rounded-lg bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 my-2 rounded-lg ${msg.type === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-300 text-black self-start"}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 p-2 border rounded-md"
            placeholder="Ask something about coding..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} className="bg-indigo-600 text-white px-4 py-2 rounded-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AILearning;
