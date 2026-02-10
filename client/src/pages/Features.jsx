import React from "react";

// Sample category data
const categories = [
  {
    title: "CyberForge",
    description: "Development aur coding se related tools & gadgets.",
    icon: "💻",
  },
  {
    title: "NetSpectra",
    description: "Networking aur connectivity tools.",
    icon: "🌐",
  },
  {
    title: "CryptoVault",
    description: "Security & authentication gadgets.",
    icon: "🔐",
  },
  {
    title: "HackNest",
    description: "Ethical hacking aur learning labs.",
    icon: "🧪",
  },
];

function Features() {
  return (
    <div className="container mx-auto text-center px-4 py-12 font-sans">
      {/* Section Title */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">
          Explore Smart Tech Categories
        </h1>
        <p className="text-gray-600">
          Tools, gadgets aur technologies — sab ek jagah, simple aur secure.
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="text-5xl mb-4">{cat.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{cat.title}</h2>
            <p className="text-gray-600">{cat.description}</p>
          </div>
        ))}
      </div>

      {/* Stats Row */}
      <div className="flex justify-center gap-12 font-semibold text-gray-800 mb-12">
        <span>✔ 50+ Categories</span>
        <span>✔ 100+ Tools</span>
        <span>✔ Secure & Verified</span>
      </div>

      {/* Features */}
      <div className="space-y-2 mb-12 text-gray-700">
        <p>⚡ Fast & Lightweight App</p>
        <p>🧑‍💻 Built for Developers & Learners</p>
        <p>📚 Beginner-Friendly Resources</p>
      </div>

      {/* CTA Button */}
      <div>
        <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          Explore All Categories
        </button>
      </div>
    </div>
  );
}

export default Features;
