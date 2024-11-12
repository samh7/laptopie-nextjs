'use client';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiAward, FiCpu, FiSmile, FiMonitor, FiBookOpen, FiBriefcase, FiPlay, FiCamera, FiCode, FiChevronDown, FiCheck } from 'react-icons/fi';
import { useState } from 'react';
import { IconType } from 'react-icons';

// Define the FAQ item interface
interface FAQItem {
  question: string;
  answer: string;
}

// Define the use case interface
interface UseCase {
  icon: IconType;
  title: string;
  description: string;
}

// Define the use cases data
const useCases: UseCase[] = [
  { 
    icon: FiPlay, 
    title: 'Gaming', 
    description: 'High-performance laptops for immersive gaming experiences' 
  },
  { 
    icon: FiBriefcase, 
    title: 'Business', 
    description: 'Reliable laptops for professional work and productivity' 
  },
  { 
    icon: FiBookOpen, 
    title: 'Student', 
    description: 'Affordable laptops perfect for academic needs' 
  },
  { 
    icon: FiCamera, 
    title: 'Content Creation', 
    description: 'Powerful laptops for video editing and creative work' 
  },
  { 
    icon: FiCode, 
    title: 'Programming', 
    description: 'Development-ready laptops with robust specifications' 
  },
  { 
    icon: FiMonitor, 
    title: 'General Use', 
    description: 'Balanced laptops for everyday computing needs' 
  }
];

export default function Index() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How accurate are the laptop recommendations?",
      answer: "Our AI system has been trained on extensive laptop data and user feedback, achieving a 95% satisfaction rate in matching users with their ideal laptops."
    },
    {
      question: "Is the service free to use?",
      answer: "Yes! Our basic recommendation service is completely free. We may introduce premium features in the future, but core recommendations will always be free."
    },
    {
      question: "How does the AI make recommendations?",
      answer: "Our AI analyzes your specific use case, budget, and preferences, then matches them against our comprehensive database of laptops to find the best options."
    },
    {
      question: "Can I compare different recommendations?",
      answer: "Absolutely! Our system allows you to compare multiple recommended laptops side by side, helping you make an informed decision."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center pt-16 sm:pt-20 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
                Your Laptop Buying experience just got better.
              </h1>
              <p className="text-lg sm:text-xl text-gray-600">
                Harnessing cutting-edge AI technology for personalized laptop recommendations.
              </p>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="flex-1">
              <Image 
                src="/873966.jpg" 
                alt="Laptop" 
                width={600} 
                height={400}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What is different about us?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Our system offers an incredibly intuitive user interface that makes navigating Laptopie a breeze!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: FiCpu, title: 'AI-Powered' },
              { icon: FiAward, title: 'Accurate' },
              { icon: FiSmile, title: 'Easy to Use' }
            ].map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <Icon className="w-8 h-8 mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-600">
                  Experience seamless laptop shopping with our {title.toLowerCase()} recommendation system.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Find Your Perfect Laptop</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-500 transition-all">
                <Icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choice Paralysis Section */}
      <section className="py-16 sm:py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">End Choice Paralysis</h2>
            <p className="text-xl mb-8">
              Too many options? Don't worry. Our AI system simplifies the laptop buying process by analyzing your needs and presenting only the most relevant choices.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="font-semibold mb-2">Input Your Needs</p>
                <p className="text-sm">Tell us your requirements and preferences</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="font-semibold mb-2">AI Analysis</p>
                <p className="text-sm">Our system processes your criteria</p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="font-semibold mb-2">Perfect Match</p>
                <p className="text-sm">Get personalized recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laptop Tips Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Essential Laptop Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FiCheck className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consider Battery Life</h3>
                  <p className="text-gray-600">Look for laptops with at least 8 hours of battery life for optimal portability.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FiCheck className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">RAM Matters</h3>
                  <p className="text-gray-600">8GB is minimum for most users, 16GB ideal for power users.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FiCheck className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Storage Type</h3>
                  <p className="text-gray-600">SSD storage provides faster performance than traditional HDDs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FiCheck className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Display Quality</h3>
                  <p className="text-gray-600">Consider resolution and panel type based on your usage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Testimonials Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Brad Justin',
                role: 'Software Developer',
                text: 'I highly recommend Laptopie. As a developer, I was having challenges choosing between laptop specifications but Laptopie helped me.'
              },
              {
                name: 'Edith Cooper',
                role: 'Video Editor',
                text: 'The recommendations are so accurate. I have been using the laptop for my video editing tasks for about 3 years now and it\'s still a beast. Laptopie is the best.'
              }
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-8 bg-white rounded-xl border border-gray-100"
              >
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Simple Pricing</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include AI-powered recommendations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-blue-500 transition-all">
              <div className="text-center mb-8">
                <div className="text-gray-600 font-semibold mb-2">Free Tier</div>
                <div className="text-4xl font-bold mb-4">$0</div>
                <p className="text-gray-600">Basic recommendations to get you started</p>
              </div>
              <div className="space-y-4 mb-8">
                {[
                  'Basic AI Model',
                  'Simple Recommendations',
                  'Basic Specifications',
                  'Limited Accuracy',
                  'No AI Chat Support',
                  'No Customer Support'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <FiCheck className="text-gray-400" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                Get Started
              </button>
            </div>

            {/* Pro Monthly Tier */}
            <div className="bg-white rounded-xl p-8 border-2 border-blue-500 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <div className="text-blue-600 font-semibold mb-2">Pro Monthly</div>
                <div className="text-4xl font-bold mb-4">$5</div>
                <p className="text-gray-600">per month</p>
              </div>
              <div className="space-y-4 mb-8">
                {[
                  'Advanced AI Model',
                  'High Accuracy Recommendations',
                  'Detailed Specifications',
                  'AI Chat Support',
                  '24/7 Customer Support',
                  'Price Comparisons'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <FiCheck className="text-blue-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe Monthly
              </button>
            </div>

            {/* Pro Annual Tier */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-blue-500 transition-all">
              <div className="text-center mb-8">
                <div className="text-blue-600 font-semibold mb-2">Pro Annual</div>
                <div className="text-4xl font-bold mb-2">$40</div>
                <p className="text-gray-600 mb-2">per year</p>
                <div className="text-green-600 text-sm font-medium">
                  Save $20 yearly
                </div>
              </div>
              <div className="space-y-4 mb-8">
                {[
                  'Everything in Pro Monthly',
                  'Annual Price Lock',
                  'Priority Support',
                  'Early Access to Features',
                  'Bulk Comparisons',
                  'Best Value'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <FiCheck className="text-blue-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe Yearly
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-100">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <FiChevronDown className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Get a Laptop Today...</h2>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-full text-lg hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
