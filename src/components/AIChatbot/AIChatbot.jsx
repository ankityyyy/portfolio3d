
import { useEffect, useRef, useState } from "react";
import "../styles/AIChatbot.css";

const initialMessages = [
  {
    id: 1,
    role: "assistant",
    text: "Hi! I'm Ankit's AI Agent. How can I help you today?",
    time: "10:30 AM",
  },
];

function AIChatbot() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Chatbot open / close
  const [isOpen, setIsOpen] = useState(false);

  const messagesContainerRef = useRef(null);

  // Scroll only chatbot messages
  useEffect(() => {
    const container = messagesContainerRef.current;

    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, loading]);

  const getTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // ==========================================
  // SEND MESSAGE
  // ==========================================

  const handleSend = async () => {
    const question = input.trim();

    if (!question || loading) return;
console.log("Sending to backend:", question);
    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text: question,
      time: getTime(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:2000/api/v1/query/063a2a39-01a8-43c2-bf85-cfce19ff35cc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: question,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get response from backend");
      }

      const data = await response.json();

      console.log("Backend response:", data);

      // ==========================================
      // OPEN PROJECT / LINK
      // ==========================================

      if (data.action === "open_link" && data.url) {
        window.open(data.url, "_blank");
      }

      // ==========================================
      // BOT MESSAGE
      // ==========================================

      const botMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        text: data.answer || "I couldn't generate a response.",
        time: getTime(),
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: "Sorry, something went wrong. Please try again.",
          time: getTime(),
          error: true,
        },
      ]);

    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // ENTER KEY
  // ==========================================

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };


  // ==========================================
  // SMALL CHATBOT
  // ==========================================

  if (!isOpen) {
    return (
      <button
        className="chatbot-small"
        onClick={() => setIsOpen(true)}
        type="button"
        aria-label="Open AI chatbot"
      >
        <div className="small-bot-avatar">
          🤖
          <span className="small-online-dot"></span>
        </div>

        <div className="small-chat-label">
          <span>Ask AI</span>
        </div>
      </button>
    );
  }


  // ==========================================
  // LARGE CHATBOT
  // ==========================================

  return (
    <div className="ai-chatbot">

      {/* ================= HEADER ================= */}

      <div className="chat-header">

        <div className="bot-info">

          <div className="bot-avatar">
            🤖
            <span className="online-dot"></span>
          </div>

          <div className="bot-details">
            <h3>
              <span>AI-AGENT</span> OF ANKIT
            </h3>

            <p>
              Your AI companion to explore my work
            </p>
          </div>

        </div>

        {/* CLOSE / MINIMIZE */}

        <button
          className="minimize-btn"
          type="button"
          aria-label="Minimize chatbot"
          onClick={() => setIsOpen(false)}
        >
          −
        </button>

      </div>


      {/* ================= MESSAGES ================= */}

      <div
        className="chat-messages"
        ref={messagesContainerRef}
      >

        {messages.map((message) => (

          <div
            key={message.id}
            className={`message ${
              message.role === "user"
                ? "user-message"
                : "bot-message"
            }`}
          >

            {/* BOT AVATAR */}

            {message.role === "assistant" && (
              <div className="message-avatar">
                🤖
              </div>
            )}


            {/* MESSAGE */}

            <div className="message-content">

              <div
                className={`message-box ${
                  message.error
                    ? "error-message"
                    : ""
                }`}
              >
                {message.text}
              </div>

              <span className="message-time">

                {message.time}

                {message.role === "user" && (
                  <span className="read-status">
                    ✓✓
                  </span>
                )}

              </span>

            </div>


            {/* USER AVATAR */}

            {message.role === "user" && (
              <div className="user-avatar">
                👤
              </div>
            )}

          </div>

        ))}


        {/* ================= TYPING ================= */}

        {loading && (

          <div className="message bot-message">

            <div className="message-avatar">
              🤖
            </div>

            <div className="typing-box">

              <span></span>
              <span></span>
              <span></span>

            </div>

          </div>

        )}

      </div>


      {/* ================= INPUT ================= */}

      <div className="chat-input-wrapper">

        <div className="chat-input">

          <input
            type="text"
            placeholder="Ask me anything about Ankit..."
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            onKeyDown={handleKeyDown}
            disabled={loading}
          />

          <button
            type="button"
            onClick={handleSend}
            disabled={
              !input.trim() || loading
            }
            aria-label="Send message"
          >
            <span>➤</span>
          </button>

        </div>

      </div>

    </div>
  );
}

export default AIChatbot;


