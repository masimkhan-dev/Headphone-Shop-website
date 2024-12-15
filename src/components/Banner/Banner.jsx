import React from 'react';
import { motion } from 'framer-motion';
import Headphone4 from "../../assets/headphone4.png";

const Banner = () => {
  return (
    <section className="bg-gray-100 font-poppins py-8 shadow-lg rounded-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section with Framer Motion */}
          <motion.div 
            className="text-center lg:text-left mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.h2 
              className="text-4xl font-bold text-black mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Experience Premium Sound
            </motion.h2>
            <motion.p 
              className="text-xl text-dark mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Immerse yourself in crystal-clear audio with our latest headphones.
            </motion.p>
            <motion.button 
              className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-purple-100 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Shop Now
            </motion.button>
          </motion.div>
          
          {/* Image Section with Framer Motion */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img 
              src={Headphone4} 
              alt="Premium Headphones" 
              className="mx-auto lg:ml-auto w-full max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
