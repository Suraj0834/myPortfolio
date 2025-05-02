import React from "react";
import { Link } from "react-router-dom";
import benzo from "../assets/benzo.png";
import annadata from "../assets/annadata.png";
import WaveOfFood from "../assets/WaveOfFood.png";
import JanSankalp from "../assets/janSankalp.png";

const projects = [
  {
    id: 1,
    name: "Benzo",
    technologies: "MERN Stack, Kotlin",
    image: benzo,
    github: "https://github.com/Suraj0834/Benzo",
  },
  {
    id: 2,
    name: "Annadata",
    technologies: "MERN Stack, Kotlin",
    image: annadata,
    github: "https://github.com/Suraj0834/farmerApp",
  },
  {
    id: 3,
    name: "Wave of food",
    technologies: "Kotlin, Firebase",
    image: WaveOfFood,
    github: "https://github.com/Suraj0834/WaveOfFood",
  },
  {
    id: 4,
    name: "JanSankalp",
    technologies: "Kotlin, NodeJs, MongoDB",
    image: JanSankalp,
    github: "https://github.com/Suraj0834/civicvoice",
  },

];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
    transform transition-transform duration-300 hover:scale-105">

              <div className="relative w-full pb-[177.78%]">
                <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover rounded-lg mb-4" />
              </div>

              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <Link to={project.github} className="inline-block bg-gradient-to-r 
      from-green-400 to-blue-500 text-white px-4 py-2 rounded-full mr-4" target="_blank"
                rel="noopener noreferrer">GitHub</Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
