import React from 'react';

const Homecomoponet = () => {
  return (
    <>
      <div className="flex justify-center mt-10 mb-10">
        
        <div >

        <img 
          src="https://media.licdn.com/dms/image/v2/D5603AQG0eINgSGXeEw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727840805331?e=1750896000&v=beta&t=D0o0Th9dGgmLD4GpyN-wroCWAgzyy6UW4uoJOia6EPs" 
          alt="My Profile" 
          className="w-100 rounded-full"
        />
        </div>

      </div>

      <div className="text-center mt-6 px-4">
        <h1 className="text-3xl font-bold mb-4">Hello, I'm Chamudika!</h1>
        <p className="text-lg text-gray-700 p-20">
          I'm a passionate web developer with a love for creating beautiful and functional websites.
          With experience in React, Tailwind CSS, and backend technologies, I enjoy bringing ideas to life in the browser.
        </p>
        <p className="mt-4 text-gray-600">
          In my free time, I like exploring new technologies, reading tech blogs, and hiking in nature.
        </p>
      </div>
    </>
  );
}

export default Homecomoponet;
