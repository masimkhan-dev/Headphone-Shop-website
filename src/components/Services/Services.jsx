import React from 'react';
import { motion } from 'framer-motion'; // Importing Framer Motion for animation
import icon from '../../assets/icons/obj1.png';
import icon2 from '../../assets/icons/obj2.png';
import icon3 from '../../assets/icons/obj3.png';
import icon4 from '../../assets/icons/obj4.png';

const serviceData = [
  {
    id: 1,
    title: "High-Quality Sound",
    description: "Experience crystal clear audio with our premium headphones.",
    icon: icon,
  },
  {
    id: 2,
    title: "Voice Clarity",
    description: "Integrated microphone for crisp and clear communication.",
    icon: icon2,
  },
  {
    id: 3,
    title: "Music Control",
    description: "Easy-to-use controls for your music playback.",
    icon: icon3,
  },
  {
    id: 4,
    title: "Noise Cancellation",
    description: "Advanced technology to block out ambient noise.",
    icon: icon4,
  },
];

const ServiceCard = ({ title, description, icon }) => (
  <motion.div
    className="group relative bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <div className="absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <img 
        src={icon} 
        alt={title} 
        className="w-16 h-16 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
      />
      <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-purple-200 transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 text-center group-hover:text-white transition-colors duration-300">{description}</p>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
