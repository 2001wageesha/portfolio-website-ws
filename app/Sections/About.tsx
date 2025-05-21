// app/Sections/About.tsx
'use client';

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 text-center pt-30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
        <p className="text-lg text-white">
          I'm a passionate developer who loves building clean, efficient, and user-friendly web applications.
          I enjoy working with modern frontend frameworks like React and styling tools like Tailwind CSS.
          I'm always exploring new technologies and pushing my skills further.
        </p>
      </div>
    </section>
  );
};

export default About;
