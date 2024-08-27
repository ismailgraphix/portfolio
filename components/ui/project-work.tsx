"use client";
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { portfolioData } from '../../assets/data/portfolioData'; // Adjust the path according to your file structure

type Project = {
  title: string;
  category: 'All' | 'Fullstack' | 'Frontend' | 'Research';
  image: StaticImageData;
  slug: string; // Add a slug or id for routing to the project details page
};

type ProjectItemProps = {
  title: string;
  category: string;
  image: StaticImageData;
  slug: string; // Include the slug as a prop
};

const ProjectItem: React.FC<ProjectItemProps> = ({ title, category, image, slug }) => {
  return (
    <Link href={`/projects/${slug}`} passHref>
      <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transform transition-transform hover:scale-105 cursor-pointer">
        <Image src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm">{category}</p>
        </div>
      </div>
    </Link>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Fullstack' | 'Frontend' | 'Research'>('All');

  const filteredProjects = filter === 'All' ? portfolioData : portfolioData.filter(project => project.category === filter);

  return (
    <section className="py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Works & Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Check out some of my design projects, meticulously crafted with love and dedication, each one reflecting the passion and soul I poured into every detail.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          {['All', 'Fullstack', 'Frontend', 'Research'].map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${filter === category ? 'bg-orange-500 text-white' : 'bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
              onClick={() => setFilter(category as 'All' | 'Fullstack' | 'Frontend' | 'Research')}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectItem key={index} title={project.title} category={project.category} image={project.image} slug={project.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
