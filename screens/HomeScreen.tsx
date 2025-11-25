import React from 'react';
import { ScreenName } from '../types';

interface HomeScreenProps {
  setScreen: (screen: ScreenName) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ setScreen }) => {
  return (
    <div className="flex flex-col h-full pb-24 px-4 pt-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <button className="p-2 rounded-full hover:bg-white/5">
          <span className="material-icons text-text-dark-primary">menu</span>
        </button>
        <div className="flex items-center space-x-3">
             <img
                alt="Baby profile"
                className="w-10 h-10 rounded-full border-2 border-primary p-0.5 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvrj5m5PVKLPRSiEcjSqL8h6ko1XXox9rOAuCQzBc6hpyW97plELmBVC26G7RTg-cI3YWFldUv4k7NZC4Z9Wgxuq0pJFzrl7ORturL9lN-L2Gs5nuzK0JCit4AG0x_VuHxkS16zOVBZXGaS0YT9LLcss298eTNC110XMT-Ajlxij0N9jl7KoXavesTxU7LU5OsCtQGqwfkQ2L_vq3DEmtSHgoLU7RkkFuNxRmak0iymPKFnOHLRwzkqmA7_zHX9S2TsExTz7ICwkU"
              />
            <h1 className="text-xl font-bold text-text-dark-primary">Keun-heo</h1>
        </div>
        <div className="flex items-center space-x-1">
          <button className="p-2 rounded-full hover:bg-white/5">
            <span className="material-icons-outlined text-text-dark-primary">notifications</span>
          </button>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Activity Log Card */}
        <div 
          onClick={() => setScreen('activity')}
          className="bg-card-dark p-5 rounded-3xl shadow-soft flex flex-col justify-between h-48 cursor-pointer hover:bg-card-dark/80 transition-colors"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
              <span className="material-icons text-blue-400 text-2xl">event_note</span>
            </div>
            <h2 className="text-lg font-bold text-text-dark-primary">Activity Log</h2>
            <p className="text-xs text-text-dark-secondary mt-2 leading-relaxed">
              Feeding · Sleep · Diaper <br/> Record View
            </p>
          </div>
        </div>

        {/* Highlights Card */}
        <div 
            onClick={() => setScreen('highlights')}
            className="bg-card-dark p-5 rounded-3xl shadow-soft flex flex-col justify-between h-48 cursor-pointer hover:bg-card-dark/80 transition-colors"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-4">
              <span className="material-icons text-teal-400 text-2xl">star_outline</span>
            </div>
            <h2 className="text-lg font-bold text-text-dark-primary">Highlights</h2>
            <p className="text-xs text-text-dark-secondary mt-2 leading-relaxed">
              Best moments <br/> Collections
            </p>
          </div>
        </div>
      </div>

      {/* Live Monitor Large Card */}
      <div 
        onClick={() => setScreen('monitor')}
        className="relative overflow-hidden rounded-3xl shadow-lg h-56 cursor-pointer group"
      >
        <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf3MU_dFWlbwpYE3W16huXt4xcId5peYQ5V4CywtfCZAfC9u_hgeTOnyMtPNIJiC4QslFDAkDldCoJeWowdDHU9Q2gk6GqGx3-5xHB86EjIWDK_yr-IDYPZEeRbmKtna9e44Rnv234YrvXyxdaJTuPz5PrDloy93_n4v2nmq7E01xUwSH5AY3i3B_yq1NeuMQyRQziQfFODtpck0zzq3g4SmnnWZGNa7aT-G4X6lQkNzgRzcRl1zzeaRfdPjbDlsao87vzNg5YQc0"
            alt="Live Feed Thumbnail"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-3">
              <span className="material-icons text-white text-2xl">videocam</span>
            </div>
            <h2 className="text-xl font-bold text-white">Live Monitoring</h2>
            <p className="text-sm text-gray-300 mt-1">Check crib status in real-time</p>
        </div>

        <div className="absolute top-4 right-4 bg-red-500/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            LIVE
        </div>
      </div>

       {/* Quick Actions / Status */}
       <div className="mt-6">
        <h3 className="text-text-dark-primary font-bold mb-3 px-1">Quick Status</h3>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide py-2">
            <div className="bg-card-dark p-3 rounded-2xl min-w-[100px] flex flex-col items-center justify-center">
                 <span className="material-icons text-yellow-400 mb-1">wb_sunny</span>
                 <span className="text-xs text-gray-400">Temp</span>
                 <span className="font-bold text-white">24°C</span>
            </div>
            <div className="bg-card-dark p-3 rounded-2xl min-w-[100px] flex flex-col items-center justify-center">
                 <span className="material-icons text-blue-400 mb-1">water_drop</span>
                 <span className="text-xs text-gray-400">Humidity</span>
                 <span className="font-bold text-white">45%</span>
            </div>
            <div className="bg-card-dark p-3 rounded-2xl min-w-[100px] flex flex-col items-center justify-center">
                 <span className="material-icons text-green-400 mb-1">battery_charging_full</span>
                 <span className="text-xs text-gray-400">Device</span>
                 <span className="font-bold text-white">98%</span>
            </div>
        </div>
       </div>
    </div>
  );
};
