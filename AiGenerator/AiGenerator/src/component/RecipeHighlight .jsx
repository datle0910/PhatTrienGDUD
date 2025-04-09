import React from "react";

const RecipeHighlight = () => {
  return (
    <div className="relative w-full h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('https://sumatocoffee.com/cdn/shop/articles/latte-art-what-is-it-and-how-did-it-start-264833.jpg?v=1713277725&width=1600')" }}>
      {/* Card Overlay */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg w-80 text-center border">
        {/* Ribbon */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
          Recipe of the day
        </div>

        {/* Title */}
        <h2 className="text-pink-600 font-bold text-lg mt-4 mb-2">Salad Caprese</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
        </p>

        {/* Avatar */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <img
            src="/chef-avatar.jpg"
            alt="Salad Caprese"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-gray-700">Salad Caprese</span>
        </div>

        {/* Button */}
        <button className="bg-pink-500 text-white px-4 py-2 text-sm rounded-full hover:bg-pink-600 transition">
          View now →
        </button>
      </div>
    </div>
  );
};

export default RecipeHighlight;
