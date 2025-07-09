import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  backgroundColor?: string; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, backgroundColor }) => {
  return (
    <div
      className="shadow-md rounded-lg overflow-hidden"
      style={{ backgroundColor: backgroundColor || 'white' }} // fallback to white
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};


export default ProjectCard;
