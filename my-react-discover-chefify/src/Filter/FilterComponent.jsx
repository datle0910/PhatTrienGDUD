import React from "react";
import "./style.css";

const FilterComponent = () => {
  return (
    <div className="center">
      <div className="filter">
        <div className="lable-filter">
          <img src="./src/3_Data/Lab02/List 2.png" alt="" />
          <h3>FILTER</h3>
        </div>
        <h4>TYPE</h4>
        <div className="type">
          <div className="type-left">
            <div>
              <input type="checkbox" id="pan-fried" />
              <label htmlFor="pan-fried">Pan-fried</label>
            </div>
            <div>
              <input type="checkbox" id="grilled" />
              <label htmlFor="grilled">Grilled</label>
            </div>
            <div>
              <input type="checkbox" id="sauteed" />
              <label htmlFor="sauteed">Sauteed</label>
            </div>
            <div>
              <input type="checkbox" id="steamed" />
              <label htmlFor="steamed">Steamed</label>
            </div>
          </div>
          <div className="type-right">
            <div>
              <input type="checkbox" id="stir-fried" />
              <label htmlFor="stir-fried">Stir-fried</label>
            </div>
            <div>
              <input type="checkbox" id="roadster" />
              <label htmlFor="roadster">Roadster</label>
            </div>
            <div>
              <input type="checkbox" id="baked" />
              <label htmlFor="baked">Baked</label>
            </div>
            <div>
              <input type="checkbox" id="stewed" />
              <label htmlFor="stewed">Stewed</label>
            </div>
          </div>
        </div>
        <div className="border"></div>
        <div className="time">
          <h4>Time</h4>
          <div className="mn3050">
            <span className="sp1">30 minute</span>
            <span>50 minute</span>
          </div>
          <img src="./src/3_Data/Lab02/Slider 2.png" alt="" />
        </div>
        <div className="border"></div>
        <h4>Rating</h4>
        <div className="rating">
          <div>
            <input type="checkbox" id="rating-1" />
            <img src="./src/3_Data/Lab02/Rating 18.png" alt="" />
          </div>
          <div>
            <input type="checkbox" id="rating-2" />
            <img src="./src/3_Data/Lab02/Rating 17.png" alt="" />
          </div>
          <div>
            <input type="checkbox" id="rating-3" />
            <img src="./src/3_Data/Lab02/Rating 19.png" alt="" />
          </div>
          <div>
            <input type="checkbox" id="rating-4" />
            <img src="./src/3_Data/Lab02/Rating 20.png" alt="" />
          </div>
          <div>
            <input type="checkbox" id="rating-5" />
            <img src="./src/3_Data/Lab02/Rating 16.png" alt="" />
          </div>
        </div>
        <div className="border"></div>
        <div>
          <button className="btn">Apply</button>
        </div>
      </div>
      <div className="main">
        <h1>Sorry, no result were found for "cakescascsa"</h1>
        <img src="./src/3_Data/Lab02/Image 105.png" alt="" />
        <h3>We have all your Independence Day sweets covered</h3>
        <div>
          <ul className="list-cakes">
            <li>sweets cake</li>
            <li>Black Cakes</li>
            <li>Poze Veide</li>
            <li>Healthy Food</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
