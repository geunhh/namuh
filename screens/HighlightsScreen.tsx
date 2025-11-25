import React from 'react';
import { Highlight } from '../types';

export const HighlightsScreen: React.FC = () => {
  const highlights: Highlight[] = [
    {
      id: '1',
      title: "Captured Keun-heo's first laugh!",
      date: 'NOV 30 2024',
      description: "This is the moment he laughed out loud for the first time.",
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlZ8gYHJC0dAdY-rYJ4X0snn7irRLAlgVw6NXWn8EL_shb-lhBWxZ_xacBhXS7pLSztyCK7hOjMgM1k9sU_CuUIRL9PAYKWDsv1cGsR1wHzflNeNjFG0EMUgmuxNo5wBpnYOXxiFvfB3F98_WMg39i0vfht5P-KEkvcI2p5PvunB9GhSyR4ur0Cerz3j4KQSFgo4mxxM0IJO5HH3crDt3isNdHqsA4XlOYasUQey3Uz91o1YBYtK6CkA9idgE0qLFgUuvZ14kRcLE',
      isNew: true,
    },
    {
      id: '2',
      title: "Said 'Mama' for the first time!",
      date: 'NOV 28 2024',
      description: "First word recorded.",
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGfJGjtWJkKCSOOHoApsHSZZZpu-Hkd248FKb8ImR2LW8XE7xpTEUnWaADW1AZPdfG-cxlwX3jilhDxhPXZRXsvSJ8-Rv6N1YpR-UC0E-kd8AezJ9yjqdRo5UinCxyJ8OrvV6NxBXJ1Lxax0ToPOy0PkbwBBvDu1DwL31E-XpSrOsqlp6bpa3DXo2LeK0X9590KOl0O2Hn3gAc1Lq98NmJV_u3F-B3MKMOOE24NdiRVtgNLyiNPz7W99BGPcUOenBX35sxFuUe_WU',
      isNew: false,
    }
  ];

  return (
    <div className="flex flex-col h-full pb-24 px-4 pt-2">
       <header className="flex justify-between items-center py-4">
        <span className="material-icons text-text-dark-primary">menu</span>
        <div className="text-center">
            <h1 className="text-lg font-bold text-text-dark-primary">Highlights</h1>
            <p className="text-xs text-text-dark-secondary">1 Year 2 Months</p>
        </div>
        <div className="flex items-center space-x-2">
            <span className="material-icons-outlined text-text-dark-primary">notifications</span>
            <span className="material-icons text-text-dark-primary">more_vert</span>
        </div>
      </header>

      <div className="space-y-6 mt-2">
        {highlights.map((item) => (
          <div key={item.id} className="bg-card-dark rounded-3xl overflow-hidden shadow-lg border border-gray-800">
            <div className="relative">
              <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover" />
              {item.isNew && (
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  Today's Record
                </div>
              )}
               {/* Play Button Overlay for the second item to simulate video */}
               {item.id === '2' && (
                   <div className="absolute inset-0 flex items-center justify-center bg-black/30 group cursor-pointer">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                            <span className="material-icons text-white text-3xl pl-1">play_arrow</span>
                        </div>
                   </div>
               )}
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h2 className="text-white font-bold text-lg leading-snug">{item.title}</h2>
                  <p className="text-text-dark-secondary text-sm mt-1">{item.description}</p>
                  <p className="text-text-dark-secondary text-[10px] font-bold mt-4 tracking-wider uppercase">{item.date}</p>
                </div>
                <button className="p-2 text-text-dark-secondary hover:text-white transition-colors">
                  <span className="material-icons">share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
