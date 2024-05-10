import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';

function ContentSelect({ options, selectedOption, setSelectedOption, defaultOption, customContent, setCustomContent, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

// console.log('name', selectedOption?.name)
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

 const handleTextAreaChange = (e) => {
    setCustomContent(e.target.value);
    setSelectedOption({ id: '12', name: 'Custom', content: e.target.value });
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
              <p>{defaultOption}</p>
            )}
          </div>
          <div className="flex items-center">
            {selectedOption && <TiTick className='w-5 h-5 mr-2' />}
            <FaAngleDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>
        {isOpen && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 overflow-auto">
            <ul className="max-h-60 overflow-auto">
              {options.map((option) => (
                <li key={option.id} onClick={() => handleSelectOption(option)} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  {option.icon && <span className="mr-2">{option.icon}</span>}
                  <span className="flex-grow">{option.name}</span>
                  {selectedOption?.id === option.id && <TiTick className='w-5 h-5' />}
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedOption?.name === 'Custom' && (
          <>
          <textarea
            className="w-full mt-2 px-4 py-2 border-t border-gray-300 rounded-lg h-40 overflow-y-scroll"
            placeholder={placeholder}
            value={customContent}
            onChange={handleTextAreaChange}
          />
          <p className='text-white/70 font-semibold text-lg'>Prompt Guide</p>
          </>
        )}
      </div>
    </div>
  );
}

export default ContentSelect;
