'use client';

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 px-4 max-w-6xl mx-auto scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 space-y-8">

        {/* Single Container with Shared Border */}
        <div className="border border-gray-500 rounded-lg p-6 bg-gray-800 space-y-10 transition-all duration-300 hover:shadow-md hover:shadow-orange-500">

          {/* ABOUT ME with hover animation */}
          <div className="p-4 border border-transparent rounded-lg transition-all duration-300 border-run-hover">
          {/* <div className="p-4 rounded-lg transition-all duration-300 "> */}
            <h2 className="text-2xl font-bold mb-4 text-white h1-text text-center">ABOUT ME</h2>
            <p className="text-lg text-white">
              Analytical and business-minded, enthusiastic with a strong foundation in software systems and business processes.
              Technical skills have been strengthened through a diploma in digital marketing and having an idea about business
              processes. Academic experience in UI/UX design, front-end and backend development, and database management.
              Knowledgeable in the Software Development Life Cycle (SDLC), System Design Life Cycle (SysDLC), and Enterprise
              Resource Planning (ERP), and experienced in applying UML techniques to analyze and document business
              processes. Skilled in data analysis, problem-solving, and understanding user needs. An interest in applying
              knowledge to support business decision-making and effective stakeholder engagement in a business analyst intern.
            </p>
          </div>

          {/* EDUCATION with hover animation */}
          <div className="p-4 border border-transparent rounded-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-white h1-text text-center">EDUCATION</h3>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Degree Card */}
              <div className="flex-1 border border-gray-400 rounded-lg p-4 bg-gray-700 transition-all duration-300 hover:shadow-md hover:shadow-orange-500">
              
                <h4 className="mb-1"> Bachelor of Information and Communication Technology</h4>
                <h5 className=" mb-1 text-gray-300">Specializing in Software Systems Technology</h5>
                <h4 className="mb-1">University of Kelaniya</h4>
              </div>

              {/* Diploma Card */}
              <div className="flex-1 border border-gray-400 rounded-lg p-4 bg-gray-700 text-white transition-all duration-300 hover:shadow-md hover:shadow-orange-500">
                <h4 className="mb-1"> Diploma in Digital Marketing</h4>
                
                <h4 className="mb-1">Sri Lanka Institute of Marketing (SLIM)</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
