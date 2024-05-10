import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';

function SelectOption({ options, selectedOption, setSelectedOption, defaultOption }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
   <div className='w-full pt-5'>
  <div className="relative w-full">
    <button onClick={toggleDropdown} className="px-4 py-2 bg-white border border-gray-300 rounded-lg flex items-center justify-between w-full">
      <div className="flex items-center">
        {selectedOption ? (
          <>
            {selectedOption.icon && selectedOption.icon}
            <span className="ml-2">{selectedOption.name}</span>
          </>
        ) : (
          <p>{defaultOption}</p> // Render default option here
        )}
      </div>
      <div className="flex items-center">
        {selectedOption && <TiTick className='w-5 h-5 mr-2' />}
        <FaAngleDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
    </button>
    {isOpen && (
      <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-auto">
        {options.map((option) => (
          <li key={option.id} onClick={() => handleSelectOption(option)} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            {option.icon && <span className="mr-2">{option.icon}</span>}
            <span className="flex-grow">{option.name}</span>
            {selectedOption?.id === option.id && <TiTick className='w-5 h-5' />}
          </li>
        ))}
      </ul>
    )}
  </div>
</div>

  );
}

export default SelectOption;
