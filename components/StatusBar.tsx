import React from 'react';

export const StatusBar: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 px-6 py-3 bg-background-dark/80 backdrop-blur-md text-white text-sm font-semibold flex justify-between items-center select-none">
      <span className="tracking-wide">9:41</span>
      <div className="flex items-center space-x-1.5">
        <span className="material-icons text-[18px]">signal_cellular_alt</span>
        <span className="material-icons text-[18px]">wifi</span>
        <span className="material-icons text-[18px]">battery_full</span>
      </div>
    </div>
  );
};
