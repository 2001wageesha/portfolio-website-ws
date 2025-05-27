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
            <h1 className="text-white text-xl font-medium py-1">Committee Chair - Open Dev Summit'25</h1>
            <h5 className='py-1'>FOSS community, University of Kelaniya</h5>
            <p className="text-gray-100 sm:text-sm text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?
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
            <h1 className="text-white text-xl font-medium py-2">Moderaor</h1>
            <h5 className='py-1'>FOSS community, University of Kelaniya</h5>
            <p className="text-gray-100 sm:text-sm text-xs">
              aaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
        </div>


        {/* Stack 3 */}
        <div className="col-span-4 w-full h-full ">
          <div className="w-full h-full bg-[rgba(183,121,46,0.15)] rounded-md p-2 md:pl-4">
            <h1 className="text-white text-xl font-medium py-1">Committee Chair - Open Dev Summit'25</h1>
            <h5 className='py-1'>FOSS community, University of Kelaniya</h5>
            <p className="text-gray-100 sm:text-sm text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?
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
