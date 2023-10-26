import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState('');


  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion = (accordionName) => {
    setActiveAccordion(activeAccordion === accordionName ? '' : accordionName);
  };



  return (
    <div className='h-[100%]'>
      {/* Toggle button */}
      {!isOpen&&<button
        onClick={toggleDrawer}
        className="rounded-md flex items-center justify-center focus:outline-none focus:bg-gray-300"
      >
        <div className='flex flex-col'>
          <span className='text-2xl p-3 font-semibold'>Lesson Plan</span>
       
       <div onClick={toggleDrawer} className='hover:cursor-pointer flex justify-center items-center gap-1 font-semibold text-lg uicolor px-8'>
              open 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" style={{fill:'#7E3AF2'}}><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
            </div>
            </div>
      </button>}

      {/* Drawer */}
      <div
            className={ `${!isOpen?'hidden':''} p-5 md:static fixed md:inset-y-auto inset-y-0 h-[100%] z-10 bg-white shadow-lg transform transition-transform ease-in-out duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
      >
        <div className="py-6">
          <h2 className="flex flex-col mb-4">
           

            <div className='px-8 text-lg font-bold'> 
            Lesson Navigation
            
            </div>

            <div onClick={toggleDrawer} className='hover:cursor-pointer flex justify-center items-center gap-1 font-semibold  uicolor px-8'>
              close 
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" style={{fill: '#7E3AF2'}}><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/></svg>
            </div>
            
           </h2>
          <div className="z-10 space-y-2">
            <button
              onClick={() => toggleAccordion('accordion1')}
              className="flex font-semibold items-center justify-between w-full px-4 py-2 bg-gray-50 rounded-md focus:outline-none focus:bg-gray-200"
            >
              Lesson 1
              <svg
                className={`w-5 h-5 ${activeAccordion === 'accordion1' ? 'transform rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.707 7.293a1 1 0 0 1 1.414 0L10 9.586l1.879-1.88a1 1 0 1 1 1.414 1.415l-3.536 3.536a1 1 0 0 1-1.414 0L6.293 10.707a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className={`uicolor px-4 ${activeAccordion === 'accordion1' ? '' : 'hidden'}`}>
              <p className="py-2">Video 1</p>
              <p className="py-2">Video 2</p>
              <p className="py-2">Video 3</p>
            </div>

            <button
              onClick={() => toggleAccordion('accordion2')}
              className="flex font-semibold items-center justify-between w-full px-4 py-2 bg-gray-50 rounded-md focus:outline-none focus:bg-gray-200"
            >
              Lesson 2
              <svg
                className={`w-5 h-5 ${activeAccordion === 'accordion2' ? 'transform rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.707 7.293a1 1 0 0 1 1.414 0L10 9.586l1.879-1.88a1 1 0 1 1 1.414 1.415l-3.536 3.536a1 1 0 0 1-1.414 0L6.293 10.707a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className={`uicolor px-4 ${activeAccordion === 'accordion2' ? '' : 'hidden'}`}>
              <p className="py-2">Video 1</p>
              <p className="py-2">Video 2</p>
              <p className="py-2">Video 3</p>
            </div>

             <button className='uicolor flex font-semibold items-center justify-between w-full px-4 py-2 bg-gray-50 rounded-md focus:outline-none focus:bg-gray-200'>
              Quiz
             </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleDrawer}
          className="md:hidden fixed inset-0 bg-black opacity-25 transition-opacity ease-in-out duration-300"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
