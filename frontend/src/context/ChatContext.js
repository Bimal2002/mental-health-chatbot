import React, { createContext, useState } from "react";
import chatService from "../services/chatService";

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    setLoading(true);
    const userMsg = { text, sender: "user" };
    setMessages((msgs) => [...msgs, userMsg]);
    try {
      const res = await chatService.sendMessage(text);
      setMessages((msgs) => [
        ...msgs,
        {
          text: res.message || res.reply,
          sender: "bot",
          sentiment: res.metadata?.sentiment?.sentiment,
          intensity: res.metadata?.sentiment?.intensity,
          emotions: res.metadata?.sentiment?.emotions,
          crisisLevel: res.crisisLevel,
          confidence: res.metadata?.confidence,
        },
      ]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { text: "Sorry, something went wrong.", sender: "bot" }]);
    }
    setLoading(false);
  };

  const clearChat = () => setMessages([]);

  return (
    <ChatContext.Provider value={{ messages, sendMessage, loading, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
}
