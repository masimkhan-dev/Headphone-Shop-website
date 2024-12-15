import React, { useState } from 'react';
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";

const HeadphoneData = [
  {
    id: 1,
    title: "Wireless Over-Ear Headphone",
    image: Headphone1,
    price: 120,
    subtitle: "Enjoy superior sound quality and comfort with our wireless over-ear headphones. Perfect for long listening sessions and daily use.",
    model: "brown",
    bdColor: "#855958",
  },
  {
    id: 2,
    title: "Noise Cancelling Headphone",
    image: Headphone2,
    price: 150,
    subtitle: "Immerse yourself in your music with advanced noise cancelling technology. Ideal for noisy environments and travel.",
    model: "black",
    bdColor: "#638153",
  },
  {
    id: 3,
    title: "Bluetooth Sports Headphone",
    image: Headphone3,
    price: 180,
    subtitle: "Stay motivated with our Bluetooth sports headphones. Designed for active use with a secure fit and durable build.",
    model: "blue",
    bdColor: "#5d818c",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = useState(HeadphoneData[0]);
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Headphone Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold font-varves">{activeData.title}</h1>
          <p className="text-sm leading-relaxed text-gray-300">{activeData.subtitle}</p>
          <button
            style={{ backgroundColor: activeData.bdColor }}
            className="px-6 py-3 text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 ease-in-out"
          >
            Buy and listen
          </button>
          
          {/* Headphone list separator */}
          <div className="flex items-center justify-center my-8">
            <div className="w-20 h-[1px] bg-gray-500"></div>
            <p className="uppercase text-sm px-4 text-gray-400">top list of headphones</p>
            <div className="w-20 h-[1px] bg-gray-500"></div>
          </div>
          
          {/* Headphone list switcher */}
          <div className="grid grid-cols-3 gap-6">
            {HeadphoneData.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out ${
                  activeData.id === item.id ? 'scale-105' : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => setActiveData(item)}
                onMouseEnter={() => setHoveredImage(item.image)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img src={item.image} alt={item.title} className="w-24 h-24 object-contain mb-2" />
                <p className="font-semibold text-center">{item.title}</p>
                <p className="text-gray-400">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Headphone Image */}
        <div className="flex items-center justify-center relative">
          <img 
            src={hoveredImage || activeData.image} 
            alt={activeData.title} 
            className="w-full max-w-md transition-all duration-500 ease-in-out transform hover:scale-105" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
