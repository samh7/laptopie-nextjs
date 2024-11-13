import { chatWithLaptop } from "@/lib/action";
import { useState, useRef, useEffect } from "react";
import { BiSend, BiMessageRoundedDots } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

interface ChatMessage {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatComponentProps {
  laptopName: string;
}

export function ChatComponent({ laptopName }: ChatComponentProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "assistant",
      content:
        "Hi! Ask me anything about this laptop. I can help you understand its features, compare it with other models, or clarify any specifications.",
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

    // Defautl message for the API
    const apiMessage = `The laptop in discussion is ${laptopName}. ${newMessage}`;

    try {
      // Call the API and get the parsed response
      const assistantResponse = await chatWithLaptop(apiMessage);

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: assistantResponse.data || assistantResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error getting response:", error);
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
      {/* Floating Chat Button*/}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-[#0067b8] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#005499] transition-colors z-40"
      >
        <BiMessageRoundedDots className="text-xl sm:text-2xl" />
      </button>

      {/* Chat Modal */}
      {isChatOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsChatOpen(false)}
          />

          <div className="fixed bottom-0 right-0 w-full sm:bottom-4 sm:right-4 sm:w-[400px] sm:max-w-[calc(100vw-2rem)] bg-white sm:rounded-xl shadow-xl z-50 overflow-hidden flex flex-col max-h-[60vh] sm:max-h-[500px]">
            {/* Modal Header */}
            <div className="border-b border-slate-200 bg-slate-50 p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">
                    Ask About This Laptop
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Get instant answers to your questions
                  </p>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="p-1.5 sm:p-2 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <IoMdClose className="text-lg sm:text-xl" />
                </button>
              </div>
            </div>

            {/* Chat Messages*/}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 ${
                      message.type === "user"
                        ? "bg-[#0067b8] text-white"
                        : "bg-slate-100 text-slate-800"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className="text-[10px] sm:text-xs opacity-70 mt-1 block">
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

            {/* Message Input*/}
            <div className="border-t border-slate-200 p-3 sm:p-4 bg-white">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your question here..."
                  className="flex-1 px-3 sm:px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0067b8] text-sm"
                />
                <button
                  type="submit"
                  className="px-3 sm:px-4 py-2 bg-[#0067b8] text-white rounded-lg hover:bg-[#005499] transition-colors flex items-center gap-2"
                >
                  <BiSend />
                  <span className="hidden sm:inline">Send</span>
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
