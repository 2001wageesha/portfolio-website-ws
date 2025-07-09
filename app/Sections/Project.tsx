import React from 'react';
import ProjectCard from '../Components/ProjectCard';

const Project = () => {
  const projectData = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my skills and projects.',
      imageUrl: '/images/portfolio.png',
      backgroundColor: '#f0f4f8' 
    },
    {
      title: ' Smart Bicycle Sharing System',
      description: 'A user-friendly mobile application that allows users to locate, reserve, and access bicycles from designated stations. ',
      imageUrl: '/images/bicyclesharing1.jpg',  
      backgroundColor: '#f0f4f8'
    },
    {
      title: 'Online Food Ordering System',
      description: 'A responsive website that allows users to browse menus, place orders, and track them in real time. ',
      imageUrl: '/images/food.png',
      backgroundColor: '#f0f4f8'
    },

    {
      title: 'Contact List Application',
      description: 'A contact management application using Kotlin, allowing users to store,organize, and search contact information easily.',
      imageUrl: '/images/contactapp.jpg',
      backgroundColor: '#f0f4f8'
    }
  ];

  return (
    // <div className="max-w-6xl mx-auto px-4 pt-10 pb-8 scroll-mt-20" id="project">
    <div className=" py-16 px-4 max-w-6xl mx-auto scroll-mt-20" id="project">
      <h2 className="text-4xl font-bold text-center mb-10 h1-text">My Projects</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            backgroundColor={project.backgroundColor}
            
            
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
