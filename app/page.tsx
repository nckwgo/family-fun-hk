"use client";

import React, { useState } from "react";

type ChatMessage = {
  id: number;
  role: "user" | "ai";
  message: string;
  timestamp: string;
};

export default function Page() {
  const [aiChatMessages, setAiChatMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // 建立新訊息
    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      message: input.trim(),
      timestamp: new Date().toISOString(),
    };

    // ✅ 修正：支援 functional updater
    setAiChatMessages((prev) => [...prev, userMessage]);

    // 模擬 AI 回覆（可替換成 API call）
    setTimeout(() => {
      const aiReply: ChatMessage = {
        id: Date.now() + 1,
        role: "ai",
        message: `AI 收到: ${input}`,
        timestamp: new Date().toISOString(),
      };
      setAiChatMessages((prev) => [...prev, aiReply]);
    }, 800);

    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {aiChatMessages.map((msg) => (
          <div
            key={msg.id}
            className={`p-3 rounded-lg max-w-xl ${
              msg.role === "user"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-200 text-black self-start mr-auto"
            }`}
          >
            <p>{msg.message}</p>
            <span className="block text-xs text-gray-500 mt-1">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-4 border-t flex space-x-2">
        <input
          type="text"
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring"
          placeholder="輸入訊息..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
