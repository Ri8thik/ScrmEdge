import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
          <span className="text-xl font-semibold text-gray-800">MyApp</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
      </div>
    </header>
  );
};

export default Header;