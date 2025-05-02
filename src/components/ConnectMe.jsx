import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ConnectMe = () => {
  return (
    <div className="bg-black text-white py-20" id="connect-me">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Connect With Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Contact Details and Social Links */}
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-green-400 mr-2" />
                <Link to="mailto:Suraj6202k@gmail.com" className="hover:underline">
                  suraj6202k@gmail.com
                </Link>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-green-400 mr-2" />
                <span>+917626860834</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkedAlt className="text-green-400 mr-2" />
                <span>Ghazipur, Uttar Pradesh, India</span>
              </div>
              <div className="flex space-x-4 mt-6">
                <Link to="https://www.linkedin.com/in/suraj-kumar-6b6973253" target="_blank" className="text-gray-400 hover:text-white">
                  <FaLinkedin />
                </Link>
                <Link to="https://github.com/Suraj0834" target="_blank" className="text-gray-400 hover:text-white">
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="flex-1 w-full">
            <form className="space-y-4" action="https://getform.io/f/anlerqqa" method="POST">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectMe;