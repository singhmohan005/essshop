import { useState } from "react";
import { ChevronDownIcon } from "../Icons";

const Dropdown = ({title="", list=[]}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2 bg-white border-l border-gray-300 shadow-sm
         hover:bg-gray-100 focus:outline-none h-full"
      >
        <div className="text-sm">{title}</div>
        <ChevronDownIcon className="w-4 h-4"/>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-2 text-gray-700">
            {list.map((item, index) => {
                 return <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                 {item}
               </li>
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
