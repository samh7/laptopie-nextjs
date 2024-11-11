import {
  FaBriefcase,
  FaChartLine,
  FaGamepad,
  FaGraduationCap,
} from "react-icons/fa";
import { BsCpu, BsGpuCard, BsMemory } from "react-icons/bs";

interface Specification {
  title: string;
  description: string;
  detailedExplanation: string;
  recommendation: string;
  externalLinks: {
    text: string;
    url: string;
  }[];
  category: string;
  cheatsheet?: {
    prefix: string;
    meaning: string;
  }[];
}

export const specifications: Specification[] = [
  {
    title: "TDP (Thermal Design Power)",
    description:
      "TDP represents the average power, in watts, the processor dissipates when operating at Base Frequency with all cores active under an Intel-defined, high-complexity workload.",
    detailedExplanation:
      "A higher TDP generally indicates better performance but also higher power consumption and heat generation. For laptops, this affects battery life and cooling requirements. Desktop PCs can usually handle higher TDP processors more easily due to better cooling options.",
    recommendation:
      "15-25W for basic users, 25-40W for moderate users, 40W+ for power users.",
    externalLinks: [
      {
        text: "Intel's TDP Explanation",
        url: "https://www.intel.com/content/www/us/en/support/articles/000055611/processors.html",
      },
      {
        text: "TDP and its impact on laptop performance",
        url: "https://www.notebookcheck.net/TDP-Thermal-Design-Power-Explained-and-its-impact-on-laptop-performance.512159.0.html",
      },
    ],
    category: "cpu",
  },
  {
    title: "CPU Cores",
    description:
      "CPU cores are individual processing units within a processor. Each core can handle its own tasks, or share the workload of a single complex task.",
    detailedExplanation:
      "More cores allow for better multitasking and improved performance in multi-threaded applications. However, not all software can take advantage of multiple cores. Some tasks, like basic web browsing or word processing, may not see significant improvements with more cores. On the other hand, tasks like video editing, 3D rendering, or running multiple applications simultaneously can benefit greatly from additional cores.",
    recommendation:
      "2 cores for basic use, 4 cores for most users, 6-8 cores for power users, 8+ cores for professional workstations.",
    externalLinks: [
      {
        text: "Understanding CPU Cores",
        url: "https://www.intel.com/content/www/us/en/gaming/resources/cpu-clock-speed.html",
      },
      {
        text: "How CPU Cores Affect Performance",
        url: "https://www.tomshardware.com/features/cpu-cores-explained",
      },
    ],
    category: "cpu",
  },
  {
    title: "Base Speed and Turbo Speed",
    description:
      "Base speed is the standard operating frequency of the processor, while turbo speed is the maximum speed a processor can reach for short periods when needed.",
    detailedExplanation:
      "Base speed determines the processor's performance under sustained workloads, while turbo speed helps with burst performance for short-term intensive tasks. Higher speeds generally mean better performance, but also increased power consumption and heat generation.",
    recommendation:
      "Base speed: 2-3 GHz for most users, 3+ GHz for power users. Turbo speed: 3-4 GHz for most users, 4+ GHz for power users.",
    externalLinks: [
      {
        text: "CPU Clock Speeds Explained",
        url: "https://www.intel.com/content/www/us/en/gaming/resources/cpu-clock-speed.html",
      },
      {
        text: "Turbo Boost Technology",
        url: "https://www.intel.com/content/www/us/en/architecture-and-technology/turbo-boost/turbo-boost-technology.html",
      },
    ],
    category: "cpu",
  },
  {
    title: "Storage (SSD vs HDD)",
    description:
      "Storage refers to the amount of data your PC can store. SSDs (Solid State Drives) are faster but more expensive, while HDDs (Hard Disk Drives) offer more capacity at a lower cost.",
    detailedExplanation:
      "SSDs provide much faster boot times, application loading, and file transfer speeds compared to HDDs. However, HDDs still offer a cost-effective solution for storing large amounts of data that don't require frequent access.",
    recommendation:
      "256GB-512GB SSD for most users, 1TB+ for power users or those with large file storage needs. Consider a combination of SSD for the operating system and frequently used applications, with an HDD for bulk storage.",
    externalLinks: [
      {
        text: "SSD vs HDD: Which Is Best For You?",
        url: "https://www.pcmag.com/news/ssd-vs-hdd-whats-the-difference",
      },
      {
        text: "Choosing between SSD and HDD storage",
        url: "https://www.crucial.com/articles/about-ssd/ssd-vs-hdd",
      },
    ],
    category: "storage",
  },
  {
    title: "Screen Size and Resolution",
    description:
      "Screen size affects portability and viewing experience, while resolution determines the clarity and detail of the display.",
    detailedExplanation:
      "Larger screens provide more workspace and are better for multimedia consumption, but reduce portability. Higher resolutions offer sharper images and more screen real estate, but may require more powerful hardware to drive them effectively, especially in gaming scenarios.",
    recommendation:
      'Screen size: 13-14" for portability, 15-16" for balance, 17"+ for desktop replacement. Resolution: 1920x1080 (1080p) for most users, 2560x1440 (1440p) or 3840x2160 (4K) for professionals or enthusiasts.',
    externalLinks: [
      {
        text: "Laptop Screen Size Comparison",
        url: "https://www.laptopmag.com/articles/laptop-screen-size-comparison",
      },
      {
        text: "Understanding Display Resolution",
        url: "https://www.tomshardware.com/reference/what-is-display-resolution",
      },
    ],
    category: "display",
  },
  {
    title: "CPU Brands: Intel vs AMD",
    description:
      "Intel and AMD are the two major CPU manufacturers for personal computers.",
    detailedExplanation:
      "Intel CPUs are known for their single-core performance and are often preferred for tasks that don't utilize multiple cores effectively, such as some gaming scenarios. They also have better support for certain technologies like Thunderbolt. AMD CPUs, particularly the Ryzen series, often offer better multi-core performance at competitive prices, making them excellent for tasks like video editing, 3D rendering, and heavy multitasking.",
    recommendation:
      "Choose Intel for tasks requiring strong single-core performance or if you need Thunderbolt support. Choose AMD for multi-threaded workloads or if you want a balance of performance and value.",
    externalLinks: [
      {
        text: "Intel vs AMD: Which CPU is Best?",
        url: "https://www.tomshardware.com/features/intel-vs-amd-cpus",
      },
      {
        text: "Choosing Between Intel and AMD",
        url: "https://www.pcgamer.com/intel-vs-amd-cpus/",
      },
    ],
    category: "cpu",
  },
  {
    title: "CPU Series: i3 vs i5 vs i7 vs i9 and Ryzen 3 vs 5 vs 7",
    description:
      "These series represent different performance tiers within Intel and AMD's CPU lineups.",
    detailedExplanation:
      "For Intel, i3 is entry-level, i5 is mid-range, i7 is high-performance, and i9 is for enthusiasts and professionals. Similarly for AMD, Ryzen 3 is entry-level, Ryzen 5 is mid-range, and Ryzen 7 is high-performance. Higher numbers generally mean more cores, higher clock speeds, and better overall performance.",
    recommendation:
      "i3/Ryzen 3 for basic tasks, i5/Ryzen 5 for most users, i7/Ryzen 7 for power users and gamers, i9 for professional workstations.",
    externalLinks: [
      {
        text: "Intel Core i3 vs. i5 vs. i7 vs. i9",
        url: "https://www.intel.com/content/www/us/en/products/docs/processors/core/core-processors-comparison.html",
      },
      {
        text: "AMD Ryzen Processors Explained",
        url: "https://www.amd.com/en/processors/ryzen",
      },
    ],
    category: "cpu",
  },
  {
    title: "GPU (Graphics Processing Unit)",
    description:
      "GPUs are specialized processors designed to handle graphics rendering and certain types of computational tasks.",
    detailedExplanation:
      "Dedicated GPUs from NVIDIA and AMD offer significantly better performance for gaming, video editing, 3D rendering, and certain computational tasks compared to integrated graphics. However, they also increase power consumption and heat generation.",
    recommendation:
      "Integrated graphics are sufficient for basic tasks and light gaming. Dedicated GPUs are recommended for serious gaming, video editing, 3D modeling, and machine learning tasks.",
    externalLinks: [
      {
        text: "NVIDIA vs AMD: Which GPUs Are Better?",
        url: "https://www.tomshardware.com/features/nvidia-vs-amd-gpus",
      },
      {
        text: "Do You Need a Dedicated GPU?",
        url: "https://www.pcmag.com/news/integrated-gpu-vs-dedicated-gpu-which-one-is-right-for-you",
      },
    ],
    category: "cpu",
  },
  {
    title: "Keyboard: Backlit vs Non-Backlit",
    description:
      "Backlit keyboards have illuminated keys, making them easier to use in low-light conditions.",
    detailedExplanation:
      "Backlit keyboards are useful for users who often work in dimly lit environments or at night. They can improve typing accuracy and reduce eye strain in these conditions. However, they may slightly increase power consumption.",
    recommendation:
      "Backlit keyboards are recommended for users who frequently work in low-light conditions or at night. They're also popular among gamers.",
    externalLinks: [
      {
        text: "Benefits of Backlit Keyboards",
        url: "https://www.lifewire.com/what-is-a-backlit-keyboard-2640236",
      },
      {
        text: "Choosing a Laptop Keyboard",
        url: "https://www.laptopmag.com/articles/laptop-keyboard-guide",
      },
    ],
    category: "keyboard",
  },

  {
    title: "RAM (Random Access Memory)",
    description:
      "RAM is a type of computer memory that temporarily stores data for quick access by the processor.",
    detailedExplanation:
      "RAM plays a crucial role in system performance, particularly in multitasking and running memory-intensive applications. More RAM allows your computer to handle more tasks simultaneously without slowing down. RAM is measured in gigabytes (GB), and its speed is measured in MHz.",
    recommendation:
      "8GB for basic use, 16GB for most users, 32GB or more for power users, video editors, or heavy multitaskers. For speed, look for DDR4 RAM with at least 2666 MHz for modern systems.",
    externalLinks: [
      {
        text: "Understanding RAM in Your Computer",
        url: "https://www.crucial.com/articles/about-memory/support-what-does-computer-memory-do",
      },
      {
        text: "How Much RAM Do You Really Need?",
        url: "https://www.tomshardware.com/news/how-much-ram-you-need,36929.html",
      },
    ],
    category: "memory",
  },
  {
    title: "Thunderbolt",
    description:
      "Thunderbolt is a high-speed I/O interface developed by Intel and Apple.",
    detailedExplanation:
      "Thunderbolt offers very high data transfer speeds and the ability to daisy-chain multiple devices. It's particularly useful for connecting external GPUs, high-speed storage arrays, and multiple 4K displays. However, it's primarily found on Intel-based systems and some high-end AMD systems.",
    recommendation:
      "Thunderbolt is recommended for users who need to connect high-performance external devices or multiple displays.",
    externalLinks: [
      {
        text: "Understanding Thunderbolt Technology",
        url: "https://www.intel.com/content/www/us/en/architecture-and-technology/thunderbolt/thunderbolt-technology-general.html",
      },
      {
        text: "Thunderbolt 3 vs USB-C",
        url: "https://www.pcmag.com/news/thunderbolt-3-vs-usb-c-whats-the-difference",
      },
    ],
    category: "cpu",
  },
  {
    title: "Major Laptop Brands",
    description:
      "There are several major laptop brands, each with their own strengths and specialties.",
    detailedExplanation:
      "Dell is known for business laptops and high-end consumer models. HP offers a wide range of options for both consumers and businesses. Lenovo is popular for their ThinkPad business line. Apple is known for their macOS laptops with excellent build quality. ASUS and Acer offer good value across various price points. MSI and Razer specialize in gaming laptops.",
    recommendation:
      "Choose based on your specific needs, budget, and preferences. Consider factors like build quality, customer support, and warranty in addition to specifications.",
    externalLinks: [
      {
        text: "Laptop Brand Comparison",
        url: "https://www.laptopmag.com/articles/laptop-brand-ratings",
      },
      {
        text: "Choosing the Right Laptop Brand",
        url: "https://www.pcmag.com/news/the-best-laptop-brands",
      },
    ],
    category: "recommendations",
  },
  {
    title: "Prioritizing Specifications",
    description:
      "Different users should prioritize different specifications based on their needs and budget.",
    detailedExplanation:
      "For budget-conscious users, prioritize adequate RAM (8GB+), an SSD for the operating system, and a recent-generation CPU. For performance users, focus on a powerful CPU, dedicated GPU if needed, ample RAM (16GB+), and a fast SSD. Always consider the specific applications you'll be using most frequently.",
    recommendation:
      "Budget priority: RAM > SSD > CPU > Display. Performance priority: CPU > GPU (if needed) > RAM > Fast/Large SSD > High-quality Display.",
    externalLinks: [
      {
        text: "How to Buy a Laptop",
        url: "https://www.pcmag.com/news/the-best-laptops",
      },
      {
        text: "Laptop Buying Guide",
        url: "https://www.laptopmag.com/articles/laptop-buying-guide",
      },
    ],
    category: "recommendations",
  },
  {
    title: "Operating Systems: Windows, macOS, and Linux",
    description:
      "The operating system is the software that manages your computer's hardware and software resources.",
    detailedExplanation:
      "Windows is the most widely used OS, known for its compatibility with a vast range of software and hardware. macOS, exclusive to Apple devices, is known for its user-friendly interface and seamless integration with other Apple products. Linux is an open-source OS that offers high customizability and is popular among developers and tech enthusiasts.",
    recommendation:
      "We recommend Windows for most users due to its wide compatibility, extensive software library, and familiarity. It's suitable for general use, gaming, and most professional applications.",
    externalLinks: [
      {
        text: "Comparing Windows, macOS, and Linux",
        url: "https://www.pcmag.com/news/windows-vs-macos-vs-chrome-os-vs-ubuntu-which-os-is-best",
      },
      {
        text: "Choosing the Right OS for You",
        url: "https://www.makeuseof.com/tag/operating-system-choose/",
      },
    ],
    category: "os",
  },
  {
    title: "CPU Prefixes",
    description:
      "CPU prefixes provide information about the processor's characteristics and intended use.",
    detailedExplanation:
      "Intel and AMD use various prefixes to denote different features and performance levels of their processors. Understanding these prefixes can help you choose the right CPU for your needs.",
    recommendation:
      "Choose a CPU prefix that aligns with your usage requirements. For example, 'H' for high performance in laptops, 'U' for ultrabooks, or 'K' for overclockable desktop CPUs.",
    externalLinks: [
      {
        text: "Intel Processor Names and Numbers",
        url: "https://www.intel.com/content/www/us/en/processors/processor-numbers.html",
      },
      {
        text: "AMD Ryzen Processor Naming",
        url: "https://www.amd.com/en/products/ryzen-processors",
      },
    ],
    category: "cpu",
    cheatsheet: [
      { prefix: "H", meaning: "High performance, typically for laptops" },
      {
        prefix: "U",
        meaning: "Ultra-low power, for ultrabooks and thin laptops",
      },
      { prefix: "K", meaning: "Unlocked (overclockable), for desktop CPUs" },
      { prefix: "F", meaning: "No integrated graphics" },
      { prefix: "G", meaning: "With integrated graphics (for AMD)" },
      { prefix: "X/XT", meaning: "Higher performance variant" },
      { prefix: "T", meaning: "Power-optimized lifestyle" },
      { prefix: "S", meaning: "Special edition or performance-optimized" },
      {
        prefix: "Y",
        meaning: "Extremely low power, for tablets and 2-in-1s",
      },
      { prefix: "HK", meaning: "High performance and unlocked, for laptops" },
      { prefix: "HQ", meaning: "High performance quad-core, for laptops" },
      { prefix: "M", meaning: "Mobile (older naming scheme)" },
      { prefix: "Q", meaning: "Quad-core (older naming scheme)" },
    ],
  },
];

export const laptopCategories = [
  {
    icon: <FaGamepad className="text-3xl" />,
    title: "Gaming",
    description: "High-performance laptops with dedicated GPUs",
    specs: "RTX 4000 Series • 32GB RAM • 1TB SSD",
  },
  {
    icon: <FaGraduationCap className="text-3xl" />,
    title: "Student",
    description: "Lightweight and affordable laptops for education",
    specs: "12+ Hour Battery • 8GB RAM • 256GB SSD",
  },
  {
    icon: <FaBriefcase className="text-3xl" />,
    title: "Business",
    description: "Professional laptops with security features",
    specs: "Intel vPro • 16GB RAM • Fingerprint Reader",
  },
  {
    icon: <FaChartLine className="text-3xl" />,
    title: "Creator",
    description: "Powerful laptops for content creation",
    specs: "Color Accurate Display • 32GB RAM • RTX GPU",
  },
];

export const specGuides = [
  {
    icon: <BsCpu className="text-3xl" />,
    title: "Processor (CPU)",
    description:
      "The brain of your laptop. Intel and AMD offer various options:",
    items: [
      "i3/Ryzen 3: Basic tasks",
      "i5/Ryzen 5: Everyday use",
      "i7/Ryzen 7: Heavy workloads",
    ],
  },
  {
    icon: <BsMemory className="text-3xl" />,
    title: "Memory (RAM)",
    description: "Determines how many tasks you can run simultaneously:",
    items: [
      "8GB: Basic multitasking",
      "16GB: Recommended for most",
      "32GB: Professional work",
    ],
  },
  {
    icon: <BsGpuCard className="text-3xl" />,
    title: "Graphics Card",
    description: "Handles visual processing for gaming and creative work:",
    items: [
      "Integrated: Casual use",
      "RTX 3050: Entry gaming",
      "RTX 4070+: Professional",
    ],
  },
];