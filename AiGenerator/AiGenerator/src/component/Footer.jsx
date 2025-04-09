import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-white px-6 py-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* About Us Section */}
      <div>
        <h3 className="text-white font-bold mb-4">About Us</h3>
        <p className="text-sm mb-4">
          Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded-l-md text-sm text-black"
          />
          <button className="bg-pink-500 text-white px-4 rounded-r-md text-sm hover:bg-pink-600">
            Send
          </button>
        </div>
      </div>

      {/* Learn More */}
      <div>
        <h3 className="text-white font-bold mb-4">Learn More</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:underline">Our Cooks</a></li>
          <li><a href="#" className="hover:underline">See Our Features</a></li>
          <li><a href="#" className="hover:underline">FAQ</a></li>
        </ul>
      </div>

      {/* Shop */}
      <div>
        <h3 className="text-white font-bold mb-4">Shop</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:underline">Gift Subscription</a></li>
          <li><a href="#" className="hover:underline">Send Us Feedback</a></li>
        </ul>
      </div>

      {/* Recipes */}
      <div>
        <h3 className="text-white font-bold mb-4">Recipes</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:underline">What to Cook This Week</a></li>
          <li><a href="#" className="hover:underline">Pasta</a></li>
          <li><a href="#" className="hover:underline">Dinner</a></li>
          <li><a href="#" className="hover:underline">Healthy</a></li>
          <li><a href="#" className="hover:underline">Vegetarian</a></li>
          <li><a href="#" className="hover:underline">Vegan</a></li>
          <li><a href="#" className="hover:underline">Christmas</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom section */}
    <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
      <div className="flex items-center space-x-2">
        <img src="..\src\assets\logo.PNG" alt="Cheffify" className="w-5 h-5" />
        <span className="text-white font-semibold">Cheffify</span>
        <span>© 2023 Cheffify Company</span>
      </div>
      <div className="space-x-4 mt-4 md:mt-0">
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
