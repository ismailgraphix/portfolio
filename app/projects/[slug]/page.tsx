"use client"

import { usePathname } from 'next/navigation';
import { portfolioData } from '../../../assets/data/portfolioData';
import Image from 'next/image';

export default function ProjectDetail() {
  const pathname = usePathname();
  const slug = pathname.split('/').pop();

  const project = portfolioData.find(p => p.slug === slug);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <Image src={project.image} alt={project.title} className="w-full h-64 object-cover mb-4" />
      <p>Category: {project.category}</p>
      <p className='text-4xl justify-center '>{project.description}</p>
    </div>
  );
}
