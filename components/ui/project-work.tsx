"use client"
import Image from 'next/image';
import { useState } from 'react';
import profile from "../../assets/client-logo-two-4.png";

const ProjectItem = ({ title, category, image }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800 dark:bg-gray-900 text-white">
      <Image src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{category}</p>
      </div>
    </div>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Mobile Application Design',
      category: 'Design',
      image: {profile},
    },
    {
      title: 'Website Makeup Design',
      category: 'Game',
      image: {profile},
    },
    {
      title: 'Brand Identity and Motion Design',
      category: 'Branding',
      image: {profile},
    },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <section className="py-12 bg-gray-900 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Works & Projects</h2>
        <p className="text-center text-gray-400 mb-8">
          Check out some of my design projects, meticulously crafted with love and dedication, each one reflecting the passion and soul I poured into every detail.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          {['All', 'Design', 'Game', 'Branding', 'Marketing'].map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${filter === category ? 'bg-orange-500' : 'bg-gray-700 hover:bg-gray-600'}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectItem key={index} title={project.title} category={project.category} image={project.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
