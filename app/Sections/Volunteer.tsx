import React from 'react';

const Volunteer = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 pt-38" id='volunteer'>
      {/* Title */}
      <h2 className="text-3xl font-bold text-center h1-text mb-6">VOLUNTEER PROJECTS</h2>

      {/* Timeline Grid */}
      <div className="grid grid-cols-9 w-full">
        {/* Stack 1 */}
        <div className="col-span-4 w-full h-full ">
          <div className="w-full h-full bg-[rgba(183,121,46,0.15)] rounded-md p-2 md:pl-4">
            <h1 className="text-white text-xl font-medium py-1 h1-text">Committee Chair - Open Dev Summit 2025</h1>
            <h5 className='py-1'>FOSS community, University of Kelaniya </h5>
            <p className="text-gray-100 sm:text-sm text-xs pb-4">
               Leading the organizing committee for a open Dev Summit 2025. Coordinated cross
               functional teams. A dynamic six-day program organized by the  FOSS community, University of Kelaniya
               featuring hands-on workshops, expert-led sessions, and an exclusive developer summit. Open Dev Summit 2025
               bridges the gap between academic learning and industry demands, preparing students from all backgrounds for successful careers in tech.
            </p>
          </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-[#B7792E]"></div>
          <div className="absolute w-6 h-6 rounded-full bg-[#B7792E] z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
        </div>
        <div className="col-span-4 w-full h-full"></div>

        {/* Stack 2 */}
        <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-[#B7792E]"></div>
              <div className="absolute w-6 h-6 rounded-full bg-[#B7792E] z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
             </div>
        </div>

        <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-[rgba(183,121,46,0.15)] rounded-md p-2 md:pl-4">
            <h1 className="text-white text-xl font-medium py-1 h1-text">Moderator</h1>git add app/Sections/Volunteer.tsx
            <h5 className='py-1'>FOSS community, University of Kelaniya</h5>
            <p className="text-gray-100 sm:text-sm text-xs pb-4">
              Coordinated and facilitated both online and physical workshops, as well as the Annual
              General Meeting (AGM), ensuring the effective delivery of content and active stakeholder
              engagement.
            </p>
          </div>
        </div>


        {/* Stack 3 */}
        <div className="col-span-4 w-full h-full ">
          <div className="w-full h-full bg-[rgba(183,121,46,0.15)] rounded-md p-2 md:pl-4">
            <h1 className="text-white text-xl font-medium py-1 h1-text"> Membership Coordinator, Elegenza 2025</h1>
            <h5 className='py-1'>Leo Club, University of Kelaniya</h5>
            <p className="text-gray-100 sm:text-sm text-xs pb-4">
               Coordinated the organization of an inter-university talent show, providing a platform for
               students to showcase their talents.
               Planned and coordinated events while securing sponsorships through company
               partnerships, ensuring financial support and smooth execution aligned with
               organizational goals.
            </p>
          </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-[#B7792E]"></div>
            <div className="absolute w-6 h-6 rounded-full bg-[#B7792E] z-10 flex items-center justify-center">
               <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
        </div>

        <div className="col-span-4 w-full h-full"></div>



      </div>
    </div>
  );
};

export default Volunteer;
