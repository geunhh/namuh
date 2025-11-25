import React from 'react';
import { ScreenName } from '../types';

interface BottomNavProps {
  currentScreen: ScreenName;
  setScreen: (screen: ScreenName) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, setScreen }) => {
  const navItems: { id: ScreenName; label: string; icon: string }[] = [
    { id: 'monitor', label: 'Live', icon: 'sensors' },
    { id: 'activity', label: 'Activity', icon: 'list_alt' }, // local_fire_department in one mock, list_alt in another
    { id: 'home', label: 'Hub', icon: 'grid_view' },
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'highlights', label: 'Memories', icon: 'auto_stories' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-card-dark/95 backdrop-blur-xl border-t border-gray-800 pb-safe pt-2 rounded-t-2xl shadow-[0_-5px_20px_rgba(0,0,0,0.3)]">
      <div className="flex justify-around items-end h-16 max-w-sm mx-auto">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setScreen(item.id)}
              className={`flex flex-col items-center justify-center w-full space-y-1 transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-text-dark-secondary'
              }`}
            >
              <span className={`material-icons${isActive ? '' : '-outlined'} text-2xl transition-transform ${isActive ? 'scale-110' : ''}`}>
                {item.icon}
              </span>
              <span className={`text-[10px] font-medium ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      {/* Home Indicator */}
      <div className="w-32 h-1 bg-gray-600/50 rounded-full mx-auto mt-1 mb-2"></div>
    </nav>
  );
};
