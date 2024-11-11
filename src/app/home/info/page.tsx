"use client";
import { BiChip, BiExpandAlt } from "react-icons/bi";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaShoppingCart,
  FaPrint,
  FaBatteryFull,
  FaInfoCircle
} from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ChatComponent } from "../components/ChatComponent";
import { Laptop, LaptopSpecs } from "../../../interfaces/interfaces";
import { getLaptopFromLocalStore} from "@/lib/utils";

// export const dynamic = "force-dynamic";

interface ChatMessage {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}
// LaptopSpecs
export default function LaptopInfo() {
  const searchParams = useSearchParams();
  const [reccomendedLaptop, setReccomendedLaptop] = useState<Laptop>();
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "assistant",
      content:
        "Hi! Ask me anything about this laptop. I can help you understand its features, compare it with other models, or clarify any specifications.",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const id: number = Number(searchParams?.get("id"));
  const image = `${searchParams?.get("image")}`;

  useEffect(() => {
    const data = getLaptopFromLocalStore(id);
    console.log(data);
    setReccomendedLaptop(data);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handlePrint = () => {
    window.print();
  };

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

    const assistantMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      type: "assistant",
      content:
        "This is a placeholder response. The actual API integration will be implemented later.",
      timestamp: new Date(),
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!reccomendedLaptop) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="text-xl">Laptop not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-800 relative">
      {/* Microsoft-style hero section */}
      <div className="bg-[#0067b8] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold tracking-tight">
                {reccomendedLaptop?.name}
              </h1>
              <p className="text-xl leading-relaxed opacity-90">
                {reccomendedLaptop?.summary}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">
                  ${reccomendedLaptop?.priceRange}
                </span>
                <button
                  onClick={handlePrint}
                  className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-md transition-colors flex items-center gap-2"
                >
                  <FaPrint /> Print Specs
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={image}
                alt={reccomendedLaptop?.name}
                className="w-full rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Key Features Cards - Microsoft Style */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <BiExpandAlt className="text-[#0067b8] text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Portable Design</h3>
            <p className="text-gray-600">
              At just {reccomendedLaptop?.specs.weight}, perfect for on-the-go
              productivity
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <BiChip className="text-[#0067b8] text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Powerful Performance</h3>
            <p className="text-gray-600">
              {reccomendedLaptop?.specs.cpu} with{" "}
              {reccomendedLaptop?.specs.ram}GB RAM
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <FaBatteryFull className="text-[#0067b8] text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">All-Day Battery</h3>
            <p className="text-gray-600">
              {reccomendedLaptop?.specs.battery} hours of usage
            </p>
          </div>
        </div>

        {/* Detailed Specs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <FaInfoCircle className="text-[#0067b8]" />
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {Object.entries(
              (reccomendedLaptop?.specs as LaptopSpecs) || {}
            ).map(([key, value]) => (
              <div key={key} className="flex items-center py-3 border-b">
                <span className="text-gray-600 w-1/3 capitalize">{key}</span>
                <span className="font-medium">
                  {typeof value === "number"
                    ? `${value} ${
                        key === "ram" || key === "storage" ? "GB" : "Wh"
                      }`
                    : String(value)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="bg-white border border-slate-200 rounded-xl mb-16">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-[#107c10] flex items-center gap-2">
                <FaCheckCircle />
                Advantages
              </h3>
              <ul className="space-y-3">
                {reccomendedLaptop?.pros?.map((pro: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#107c10]" />
                    {pro}
                  </li>
                )) || []}
              </ul>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-[#d83b01] flex items-center gap-2">
                <FaTimesCircle />
                Limitations
              </h3>
              <ul className="space-y-3">
                {reccomendedLaptop?.cons?.map((con: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d83b01]" />
                    {con}
                  </li>
                )) || []}
              </ul>
            </div>
          </div>
        </div>

        {/* Shopping Links */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="border-b border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Purchase Options</h3>
              <span className="text-sm text-slate-500">
                Best prices from trusted retailers
              </span>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {reccomendedLaptop?.shoppingLinks?.map((link: string, index: number) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 hover:bg-slate-50 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-[#0067b8]/5 rounded-lg flex items-center justify-center group-hover:bg-[#0067b8]/10 transition-colors">
                      <FaShoppingCart className="text-[#0067b8] text-xl" />
                    </div>
                    <div>
                      <div className="text-lg font-medium text-slate-900 mb-1">
                        Retailer {index + 1}
                      </div>
                      <div className="text-sm text-slate-500">
                        {link.includes("amazon")
                          ? "Amazon.com"
                          : link.includes("smartprix")
                          ? "Smartprix.com"
                          : "Official Store"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                      In Stock
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 group-hover:bg-[#0067b8] group-hover:text-white transition-colors">
                      →
                    </div>
                  </div>
                </div>
              </a>
            )) || []}
          </div>

          <div className="bg-slate-50 p-4 text-center text-sm text-slate-500">
            Prices and availability may vary by region
          </div>
        </div>
      </div>

      {/* Add the ChatComponent at the end */}
      <ChatComponent
        laptopName={reccomendedLaptop?.name || "Unknown Laptop"}
      />
    </div>
  );
}
