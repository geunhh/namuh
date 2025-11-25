import React from 'react';

export const LiveMonitorScreen: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-black overflow-hidden flex flex-col">
      {/* Video Background Simulation */}
      <img
        alt="Baby sleeping peacefully in a crib"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf3MU_dFWlbwpYE3W16huXt4xcId5peYQ5V4CywtfCZAfC9u_hgeTOnyMtPNIJiC4QslFDAkDldCoJeWowdDHU9Q2gk6GqGx3-5xHB86EjIWDK_yr-IDYPZEeRbmKtna9e44Rnv234YrvXyxdaJTuPz5PrDloy93_n4v2nmq7E01xUwSH5AY3i3B_yq1NeuMQyRQziQfFODtpck0zzq3g4SmnnWZGNa7aT-G4X6lQkNzgRzcRl1zzeaRfdPjbDlsao87vzNg5YQc0"
      />

      {/* Top Controls Overlay */}
      <div className="absolute top-0 left-0 right-0 p-4 pt-6 flex justify-between items-start z-10">
        <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
          <span className="font-bold text-white text-sm tracking-wider">LIVE</span>
          <span className="material-icons text-white text-sm ml-1">signal_cellular_alt</span>
        </div>

        <div className="flex flex-col items-end space-y-3">
          <div className="flex items-center space-x-4 bg-black/40 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/10 text-white text-sm font-medium">
            <div className="flex items-center space-x-1.5">
              <span className="material-icons-outlined text-sm text-yellow-300">thermostat</span>
              <span>73°F</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center space-x-1.5">
              <span className="material-icons-outlined text-sm text-blue-300">water_drop</span>
              <span>40%</span>
            </div>
          </div>
          <div className="flex space-x-2">
             <button className="w-10 h-10 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-white/20 transition">
                <span className="material-icons-outlined text-lg">cast</span>
             </button>
             <button className="w-10 h-10 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-white/20 transition">
                <span className="material-icons-outlined text-lg">fullscreen</span>
             </button>
          </div>
        </div>
      </div>

      {/* Middle Status Text */}
      <div className="absolute bottom-48 left-0 right-0 px-6 z-10">
        <h2 className="text-2xl font-bold text-white drop-shadow-md leading-snug">
          "Hey Mom, I fell asleep 15 minutes ago."
        </h2>
        <p className="text-sm text-gray-300 mt-2 font-medium drop-shadow">Updated 7:25 PM</p>
      </div>

      {/* Controls Bar */}
      <div className="absolute bottom-28 left-4 right-4 z-10">
        <div className="bg-[#19253a]/80 backdrop-blur-xl rounded-2xl p-2 flex justify-around items-center border border-white/5 shadow-lg mb-4">
             <button className="p-3 rounded-xl hover:bg-white/10 text-white transition"><span className="material-icons-outlined">photo_camera</span></button>
             <button className="p-3 rounded-xl hover:bg-white/10 text-white transition"><span className="material-icons-outlined">mic_none</span></button>
             <button className="p-3 rounded-xl hover:bg-white/10 text-white transition"><span className="material-icons-outlined">volume_up</span></button>
             <button className="p-3 rounded-xl hover:bg-white/10 text-white transition"><span className="material-icons-outlined">lightbulb</span></button>
        </div>

        {/* Breathing Monitor Card */}
        <div className="relative overflow-hidden rounded-full shadow-glow">
            <div className="absolute inset-0 bg-gradient-to-r from-[#50f0a7] to-[#46e4c4] opacity-90 blur-sm"></div>
            <div className="relative bg-gradient-to-r from-[#50f0a7] to-[#46e4c4] p-3 flex items-center justify-between">
                <div className="flex items-center space-x-4 pl-2">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0fW2CJiVziV6B1DsfYognFRr6ecXGU9ndREVh-MwNRjO1UX8PNDE8NN5l3JAwyhdW4VQp5-c3e-KyZeh8aOGcCh5gi1C4ca1Ozjv-pp1_Q4pZ8i130K2CYrjHvrvVV8YXUxnoVQSEVtmgGhY5cUZ1s0Jw_Oxbd0gufj3dlwu78QTJIOo2_feGAR2YTdtQQcsXIKiP9g8D66hmBFdzshZcIH8JPklhOy_jYGPOL4LuOhsYRlGEFArvZQCEi21H2tI5jiInXfAtIWg" 
                        alt="Lungs" 
                        className="w-8 h-8 opacity-90"
                    />
                    <div>
                        <div className="flex items-center space-x-1 text-black">
                            <span className="font-bold text-base">30 Breaths/min</span>
                            <span className="material-icons-outlined text-sm opacity-60">help_outline</span>
                        </div>
                        <p className="text-[10px] text-black/70 font-medium uppercase tracking-wide">Monitoring Motion</p>
                    </div>
                </div>
                
                <div className="flex items-center">
                    <div className="w-px h-8 bg-black/10 mx-3"></div>
                    <button className="flex items-center space-x-1 text-black font-bold text-sm pr-4 hover:opacity-70 transition">
                        <span className="material-icons text-lg">close</span>
                        <span>Stop</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  );
};
