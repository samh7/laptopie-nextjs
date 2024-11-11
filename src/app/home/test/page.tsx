import { Laptop } from "@/interfaces/interfaces";

// import { Card, CardContent, CardHeader, CardFooter, Heading, Text, Link, Image } from '@shadcn/ui';
const recommendations = [
  {
    name: "Acer Swift 3 SF314-512",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71pQ74w57QL._AC_SL1500_.jpg",
    priceRange: 800,
    specs: {
      cpu: "Intel Core i5-1255U",
      gpu: "Intel Iris Xe Graphics",
      ram: 8,
      storage: 512,
      display: "14-inch Full HD (1920 x 1080)",
      battery: 10,
      weight: "1.4kg",
    },
    pros: [
      "Lightweight and portable design",
      "Long battery life",
      "Solid performance for everyday tasks",
      "Affordable price",
      "Good display quality",
    ],
    cons: ["Average gaming performance", "Limited upgrade options"],
    shoppingLinks: [
      "https://www.amazon.com/Acer-Swift-SF314-512-7223/dp/B09Q6Y416S",
      "https://www.smartprix.com/mobiles/acer-swift-3-sf314-512-7223/",
    ],
    summary:
      "The Acer Swift 3 SF314-512 is a great all-around laptop that offers a balance of portability, performance, and affordability. It's ideal for users who need a laptop for everyday tasks, including work, school, and entertainment.",
  },
  {
    name: "Lenovo IdeaPad Flex 5 14",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71G7Z35V6SL._AC_SL1500_.jpg",
    priceRange: 900,
    specs: {
      cpu: "AMD Ryzen 5 5500U",
      gpu: "AMD Radeon Graphics",
      ram: 8,
      storage: 512,
      display: "14-inch Full HD (1920 x 1080) touchscreen",
      battery: 8,
      weight: "1.5kg",
    },
    pros: [
      "Versatile 2-in-1 design",
      "Good performance for work and entertainment",
      "Excellent display quality",
      "Long battery life",
      "Comfortable keyboard and trackpad",
    ],
    cons: [
      "Slightly heavier than the Acer Swift 3",
      "Not as powerful as some other options in this price range",
    ],
    shoppingLinks: [
      "https://www.amazon.com/Lenovo-IdeaPad-Flex-5-14/dp/B08M89515J",
      "https://www.smartprix.com/mobiles/lenovo-ideapad-flex-5-14/",
    ],
    summary:
      "The Lenovo IdeaPad Flex 5 14 is a solid choice for users who want a versatile laptop that can be used for both work and entertainment. It features a 2-in-1 design, a touchscreen display, and a long battery life.",
  },
  {
    name: "Dell XPS 13 9315",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71N0q6sE9HL._AC_SL1500_.jpg",
    priceRange: 1300,
    specs: {
      cpu: "Intel Core i7-1185G7",
      gpu: "Intel Iris Xe Graphics",
      ram: 16,
      storage: 512,
      display: "13.4-inch Full HD (1920 x 1200) touchscreen",
      battery: 8,
      weight: "1.2kg",
    },
    pros: [
      "Premium design and build quality",
      "Excellent display quality",
      "Powerful performance for demanding tasks",
      "Compact and lightweight design",
      "Good battery life",
    ],
    cons: ["Expensive", "No Thunderbolt 4 ports"],
    shoppingLinks: [
      "https://www.amazon.com/Dell-XPS-9315-13-4-Inch/dp/B091Z2P716",
      "https://www.smartprix.com/mobiles/dell-xps-13-9315/",
    ],
    summary:
      "The Dell XPS 13 9315 is a premium ultrabook that offers a combination of performance, portability, and style. It's an excellent choice for users who need a laptop for demanding tasks, such as video editing and software development.",
  },
  {
    name: "ASUS ZenBook 13 UX325",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71%2BP6f2tG9L._AC_SL1500_.jpg",
    priceRange: 1000,
    specs: {
      cpu: "Intel Core i7-1165G7",
      gpu: "Intel Iris Xe Graphics",
      ram: 16,
      storage: 512,
      display: "13.3-inch Full HD (1920 x 1080) touchscreen",
      battery: 12,
      weight: "1.1kg",
    },
    pros: [
      "Ultra-portable design",
      "Long battery life",
      "Excellent display quality",
      "Good performance for everyday tasks",
      "Affordable price for its features",
    ],
    cons: ["Limited upgrade options", "Average gaming performance"],
    shoppingLinks: [
      "https://www.amazon.com/ASUS-ZenBook-UX325-i7-1165G7/dp/B08KG7TZ6H",
      "https://www.smartprix.com/mobiles/asus-zenbook-13-ux325/",
    ],
    summary:
      "The ASUS ZenBook 13 UX325 is an excellent choice for users who prioritize portability and battery life. It's a lightweight and compact laptop that offers good performance for everyday tasks.",
  },
  {
    name: "HP Envy x360 13",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71N1h%2B9e-JL._AC_SL1500_.jpg",
    priceRange: 900,
    specs: {
      cpu: "AMD Ryzen 5 5500U",
      gpu: "AMD Radeon Graphics",
      ram: 8,
      storage: 512,
      display: "13.3-inch Full HD (1920 x 1080) touchscreen",
      battery: 9,
      weight: "1.3kg",
    },
    pros: [
      "Versatile 2-in-1 design",
      "Excellent display quality",
      "Good performance for work and entertainment",
      "Long battery life",
      "Affordable price",
    ],
    cons: [
      "Not as powerful as some other options in this price range",
      "Limited upgrade options",
    ],
    shoppingLinks: [
      "https://www.amazon.com/HP-Envy-x360-13-ay0000/dp/B092T7Q1K1",
      "https://www.smartprix.com/mobiles/hp-envy-x360-13-ay0000/",
    ],
    summary:
      "The HP Envy x360 13 is a versatile laptop that offers a good balance of performance, portability, and affordability. It's a great option for users who need a laptop for both work and entertainment.",
  },
];

const RecommendationCard = ({ recommendation }: { recommendation: Laptop }) => {
  const {
    name,
    imageUrl,
    priceRange,
    specs,
    pros,
    cons,
    shoppingLinks,
    summary,
  } = recommendation;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src="/873966.jpg"
        alt={name}
        className="w-full h-auto object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700 mb-2">Starting at ${priceRange}</p>

        <ul className=" space-y-1 text-gray-700 mb-4">
          {pros.map((pro, index) => (
            <li key={index}>
              <span className="text-green-500 mr-2">✅</span>
              {pro}
            </li>
          ))}
        </ul>

        <ul className="space-y-1 text-gray-700 mb-4">
          {cons.map((con, index) => (
            <li key={index}>
              <span className="text-red-500 mr-2">❌</span>
              {con}
            </li>
          ))}
        </ul>

        <a
          href={shoppingLinks[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Buy on Amazon
        </a>
        <br />
        <a
          href={shoppingLinks[1]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Learn More
        </a>
        <p className="text-sm text-gray-500 mt-4">{summary}</p>
      </div>
    </div>
  );
};
const Recommendations = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Recommended Laptops</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((recommendation, index) => (
          <RecommendationCard key={index} recommendation={recommendation} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
