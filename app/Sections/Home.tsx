import React from 'react';

const Homecomoponet = () => {
  return (
    <section id='home' className="py-28 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-10">
        
        {/* Left side: Photo */}
        <div className="flex-shrink-0">
          <img 
            src="https://media.licdn.com/dms/image/v2/D5603AQEIXElrr1Ui0A/profile-displayphoto-shrink_400_400/B56ZaRTBpVHUAg-/0/1746194407534?e=1753315200&v=beta&t=T8EQ4TxbQq2GwC9eZbWNMSep6ZKEYMWWNsf7ZDEcXBQ" 
            alt="My Profile" 
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover mx-auto"
          />
        </div>

        {/* Right side: Text content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-3xl font-bold mb-4">Hello, I'm Wageesha!</h1>
          <h2 className='text-2xl font-semibold mb-4'>
            Business Analyst x Frontend Developer<br />Quality Assurance Engineer
          </h2>
          <p className='mb-4'>
            I simplify complex business needs into smart, user-friendly web solutions. With skills in frontend development, business analysis, and QA, I ensure reliable, high-quality digital experiences through a blend of strategy, design, and testing.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Homecomoponet;
