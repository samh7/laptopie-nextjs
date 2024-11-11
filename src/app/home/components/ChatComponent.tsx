import { chatWithLaptop } from "@/lib/action";
import { useState, useRef, useEffect } from "react";
import { BiSend, BiMessageRoundedDots } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
 // Import the function

interface ChatMessage {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatComponentProps {
  laptopName: string; // Add a prop for the laptop name
}

export function ChatComponent({ laptopName }: ChatComponentProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "assistant",
      content: "Hi! Ask me anything about this laptop. I can help you understand its features, compare it with other models, or clarify any specifications.",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: newMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    // Prepare the message for the API
    const apiMessage = `The laptop in discussion is ${laptopName}. ${newMessage}`;
    
    try {
      // Call the API and get the parsed response
      const assistantResponse = await chatWithLaptop(apiMessage);

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: assistantResponse.data || assistantResponse, // Adjust based on your API response structure
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      // Optionally add an error message to the chat
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: "Sorry, I encountered an error processing your request.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  // Scroll to bottom of chat when new message is added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#0067b8] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#005499] transition-colors z-40"
      >
        <BiMessageRoundedDots className="text-2xl" />
      </button>

      {/* Chat Modal */}
      {isChatOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsChatOpen(false)}
          />

          {/* Modal */}
          <div className="fixed bottom-4 right-4 w-full max-w-lg bg-white rounded-xl shadow-xl z-50 overflow-hidden">
            {/* Modal Header */}
            <div className="border-b border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Ask About This Laptop</h3>
                  <p className="text-sm text-slate-500">
                    Get instant answers to your questions
                  </p>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <IoMdClose className="text-xl" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.type === "user"
                        ? "bg-[#0067b8] text-white"
                        : "bg-slate-100 text-slate-800"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Message Input */}
            <div className="border-t border-slate-200 p-4 bg-white">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your question here..."
                  className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0067b8] text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0067b8] text-white rounded-lg hover:bg-[#005499] transition-colors flex items-center gap-2"
                >
                  <BiSend />
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
} 