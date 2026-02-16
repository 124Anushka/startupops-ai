"use client"
import { useState } from "react"

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState("")

  const sendMessage = () => {
    if (!input) return
    setMessages([...messages, input])
    setInput("")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Header */}
      <div className="border-b p-4 bg-white font-semibold">
        StartupOps AI
      </div>

      {/* Messages */}
      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
            {msg}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask StartupOps AI..."
          className="flex-1 border rounded-xl px-4 py-2"
        />
        <button
          onClick={sendMessage}
          className="bg-black text-white px-6 py-2 rounded-xl"
        >
          Send
        </button>
      </div>

    </div>
  )
}