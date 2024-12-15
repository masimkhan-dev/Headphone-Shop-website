import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import blog1 from '../../assets/blogs/blog1.jpg';
import blog2 from '../../assets/blogs/blog2.jpg';
import blog3 from '../../assets/blogs/blog3.jpg';
import blog4 from '../../assets/blogs/blog4.jpg';

const blogData = [
  {
    id: 1,
    title: "The Future of Audio Technology",
    excerpt: "Explore the latest trends in audio technology and what they mean for music lovers.",
    image: blog1,
    date: "June 15, 2024",
    author: "Alex Johnson",
  },
  {
    id: 2,
    title: "Choosing the Perfect Headphones",
    excerpt: "A comprehensive guide to selecting headphones that match your lifestyle and preferences.",
    image: blog2,
    date: "June 22, 2024",
    author: "Samantha Lee",
  },
  {
    id: 3,
    title: "The Impact of Music on Productivity",
    excerpt: "Discover how the right music can boost your focus and efficiency at work.",
    image: blog3,
    date: "June 29, 2024",
    author: "Michael Chen",
  },
  {
    id: 4,
    title: "Audiophile's Guide to Sound Quality",
    excerpt: "Delve into the technical aspects that define superior audio experiences.",
    image: blog4,
    date: "July 6, 2024",
    author: "Emily Rodriguez",
  },
];

const BlogCard = ({ title, excerpt, image, date, author }) => (
  <motion.div
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
    initial={{ opacity: 0, y: 50 }} // Initial animation state (hidden and moved down)
    animate={{ opacity: 1, y: 0 }} // Animate to visible and in position
    transition={{ duration: 0.6, ease: 'easeOut' }} // Transition settings
    whileHover={{ scale: 1.05 }} // Animation on hover
  >
    <div className="relative overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-lg font-bold">Read More</span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2 hover:text-purple-400 transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 mb-4">{excerpt}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{date}</span>
        <span>{author}</span>
      </div>
    </div>
  </motion.div>
);

const Blogs = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
