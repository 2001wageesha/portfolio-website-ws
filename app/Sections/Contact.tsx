import React from 'react';

const Contact = () => {
  return (
  // <div className="max-w-2xl mx-auto px-4 pt-24 md:pt-32 scroll-mt-20" id="contact">
  <div className="py-16 px-4 max-w-6xl mx-auto scroll-mt-20" id="contact">
 
    
      <h2 className="text-4xl font-bold text-center mb-8 h1-text">Contact Me</h2>
      <form className="space-y-6" action="https://formspree.io/f/xzzvqkzo" method="POST">
        <div>
          {/* <label className="block mb-2 text-sm font-medium text-gray-700">Name</label> */}
          <input
            type="text"
            name="name"  
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          {/* <label className="block mb-2 text-sm font-medium text-gray-700">Email</label> */}
          <input
            type="email"
            name="email"
            placeholder="abc@email.com"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          {/* <label className="block mb-2 text-sm font-medium text-gray-700">Message</label> */}
          <textarea
            rows={5}
            name="message"
            placeholder="Your message..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
