import { useState } from "react";
const Temp = () =>{
    const [activeAccordion, setActiveAccordion] = useState('');
    const [isOpen, setIsOpen] = useState(true);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
      };
    const toggleAccordion = (accordionName) => {
        setActiveAccordion(activeAccordion === accordionName ? '' : accordionName);
      };

      

    return (
        <div className="relative inset-y-0 transform transition-transform ease-in-out duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`">
            <div className="flex justify-between flex-wrap mb-4">

            Lesson Navigation!
            <p className="font-bold uicolor hover:cursor-pointer" onClick={toggleDrawer} >{!isOpen?'Open >':'Close <'}</p>
            </div>
        { isOpen &&
            <div className="space-y-2">
            <button
              onClick={() => toggleAccordion('accordion1')}
              className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:bg-gray-200"
            >
              Accordion 1
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
            <div className={`px-4 ${activeAccordion === 'accordion1' ? '' : 'hidden'}`}>
              <p className="py-2">Subitem 1</p>
              <p className="py-2">Subitem 2</p>
              <p className="py-2">Subitem 3</p>
            </div>

            <button
              onClick={() => toggleAccordion('accordion2')}
              className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:bg-gray-200"
            >
              Accordion 2
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
            <div className={`px-4 ${activeAccordion === 'accordion2' ? '' : 'hidden'}`}>
              <p className="py-2">Subitem 1</p>
              <p className="py-2">Subitem 2</p>
              <p className="py-2">Subitem 3</p>
            </div>
          </div>
           }
        </div>
    )
}
export default Temp;