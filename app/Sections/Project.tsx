import React from 'react';
import ProjectCard from '../Components/ProjectCard';

const Project = () => {
  const projectData = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my skills and projects.',
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'E-commerce App',
      description: 'An online shopping platform with a responsive UI and payment integration.',
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Blog Platform',
      description: 'A full-stack blog platform where users can publish and comment on articles.',
      imageUrl: 'https://via.placeholder.com/300x200'
    },

    {
      title: 'FeedEase',
      description: 'Feadding applications for puppies',
      imageUrl: 'https://www.google.com/imgres?q=feedease&imgurl=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2Facd895_2d38a6ca74a4445494dc4448b5bb7129~mv2.png%2Fv1%2Ffit%2Fw_500%2Ch_500%2Cq_90%2Ffile.png&imgrefurl=https%3A%2F%2Fwww.foxcopets.com%2Fproduct-page%2Frojeco-automatic-cat-feeder-pet-smart-cat-food-kibble-dispenser-remote-control-w&docid=QKUTXlVnPPc7aM&tbnid=xr8OGnpd5o9VdM&vet=12ahUKEwi6woa2vfWMAxVyxDgGHbS4CNkQM3oECEwQAA..i&w=378&h=500&hcb=2&itg=1&ved=2ahUKEwi6woa2vfWMAxVyxDgGHbS4CNkQM3oECEwQAAhttps://media.4-paws.org/0/c/7/e/0c7e157aabf6ef2f316c05607813b130c994f293/VIER%20PFOTEN_2019-03-15_001-2886x1999.jpg'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 pt-30" id='project'>
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
