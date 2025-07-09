import React from 'react';

const HomeComponent = () => {
  return (
    <section
  id="home"
  className="min-h-screen pt-52 pb-20 px-8 max-w-6xl mx-auto scroll-mt-25"
>

      <div className="flex flex-col md:flex-row items-center justify-start gap-x-8">
        
        {/* Left side: Photo */}
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <img 
            src="/images/me.jpg" 
            alt="My Profile" 
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
          />
        </div>

        {/* Right side: Text content */}
        <div className=" text-center md:text-left max-w-2xl md:ml-4">
          <h1 className="h1-text text-5xl font-bold mb-4">Hello</h1>
          <h1 className="h1-text text-5xl font-bold mb-4">I'm Wageesha Narandeniya</h1>
          <h2 className="text-3xl font-semibold mb-4">
            Business Analyst x Frontend Developer<br />
            
          </h2>
          <p className="text-lg">
            I’m a skilled Frontend Developer passionate about creating intuitive, responsive user interfaces.<br />
            As a Business Analyst, I bridge the gap between technical teams and stakeholders to deliver effective solutions.

          </p>
          

        </div>

      </div>
    </section>
  );
};

export default HomeComponent;
