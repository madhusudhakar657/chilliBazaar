/* eslint-disable react/prop-types */
import React from 'react';

function SectionDivider({ title,className }) {
  return (
    <div className={`flex items-center text-gray-800 font-semibold ${className}`}>
      <div className="flex-grow border-t border-gray-400"></div>
      <span className={`mx-4 text-gray-800 font-semibold`}>{title}</span>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
}

export default SectionDivider;