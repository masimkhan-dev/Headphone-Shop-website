import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import creditCardsImage from 'D:/React course/headphones-e-shop/src/assets/credit-cards.webp';

const footerLinks = [
  { title: 'Company', links: ['About Us', 'Contact', 'Careers', 'Press'] },
  { title: 'Products', links: ['Headphones', 'Earbuds', 'Accessories', 'Gift Cards'] },
  { title: 'Support', links: ['FAQs', 'Shipping', 'Returns', 'Warranty'] },
];

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className="container mx-auto px-4">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company detail section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Headphone Shop</h2>
            <p className="text-gray-400">Experience premium sound with our cutting-edge headphones.</p>
            <img src={creditCardsImage} alt="Accepted Payment Methods" className="max-w-[200px]" />
          </div>

          {/* Footer links section */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social media icons and copyright section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaLinkedinIn size={20} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Headphone Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;