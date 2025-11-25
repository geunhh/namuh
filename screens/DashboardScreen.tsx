import React, { useState } from 'react';
import { generateSleepInsight } from '../services/geminiService';

export const DashboardScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Day' | 'Week' | 'Month'>('Week');
  const [insight, setInsight] = useState<string | null>(null);
  const [loadingInsight, setLoadingInsight] = useState(false);

  // Mock Data
  const sleepData = {
      avgSleepStart: "7:30 PM",
      avgWakeUp: "6:30 AM",
      totalSleep: "10h 32m",
      efficiency: "92%"
  };

  const handleGenerateInsight = async () => {
      setLoadingInsight(true);
      const result = await generateSleepInsight(sleepData);
      setInsight(result);
      setLoadingInsight(false);
  };

  return (
    <div className="flex flex-col h-full pb-24 px-4 pt-2">
      <header className="flex justify-between items-center py-4">
        <span className="material-icons-outlined text-text-dark-secondary">menu</span>
        <h1 className="text-lg font-bold text-white">Keun-heo's Dashboard</h1>
        <span className="material-icons-outlined text-text-dark-secondary">more_horiz</span>
      </header>

      {/* Tabs */}
      <div className="p-1 rounded-xl bg-card-dark flex justify-between items-center text-sm font-semibold text-text-dark-secondary mb-6">
        {['Day', 'Week', 'Month'].map((tab) => (
            <button 
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`w-full py-2.5 rounded-lg transition-all ${activeTab === tab ? 'bg-gray-700 text-white shadow-md' : 'hover:bg-white/5'}`}
            >
                {tab}
            </button>
        ))}
      </div>

      <div className="text-center mb-6">
        <p className="font-medium text-text-dark-secondary text-sm">This Week, Nov 10–17</p>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">Weekly Sleep Stats</h2>

      {/* Grid Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-card-dark p-4 rounded-3xl shadow-soft flex flex-col gap-y-1">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-purple-400 tracking-wider">
                <span className="material-icons-outlined !text-base">dark_mode</span>
                <span>Asleep</span>
            </div>
            <p className="text-3xl font-bold text-white leading-tight mt-1">{sleepData.avgSleepStart}</p>
            <p className="text-xs text-text-dark-secondary mt-auto">Daily Avg</p>
        </div>
        <div className="bg-card-dark p-4 rounded-3xl shadow-soft flex flex-col gap-y-1">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-yellow-400 tracking-wider">
                <span className="material-icons-outlined !text-base">light_mode</span>
                <span>Awake</span>
            </div>
            <p className="text-3xl font-bold text-white leading-tight mt-1">{sleepData.avgWakeUp}</p>
            <p className="text-xs text-text-dark-secondary mt-auto">Daily Avg</p>
        </div>
      </div>

      {/* Bar Chart Mock */}
      <div className="bg-card-dark p-5 rounded-3xl shadow-soft flex flex-col justify-between mb-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase text-blue-400 tracking-wider mb-4">
            <span>Total Sleep Duration</span>
        </div>
        <div className="flex items-end justify-between h-24 w-full mb-4 gap-2">
            {[60, 100, 70, 90, 80, 50, 95].map((h, i) => (
                <div key={i} className="w-full relative group">
                    <div 
                        className="w-full bg-blue-500 rounded-t-sm hover:bg-blue-400 transition-colors cursor-pointer" 
                        style={{ height: `${h}%` }}
                    ></div>
                </div>
            ))}
        </div>
        <p className="text-sm text-white"><span className="font-bold text-xl mr-2">{sleepData.totalSleep}</span><span className="text-text-dark-secondary">Daily Avg</span></p>
      </div>

      {/* Efficiency & Visits */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-card-dark p-4 rounded-3xl shadow-soft flex flex-col justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-text-dark-secondary tracking-wider mb-2">
                <span>Visits</span>
            </div>
            <div className="h-8 w-full mb-1">
                <p className="text-3xl font-bold text-white">2</p>
            </div>
            <p className="text-xs text-text-dark-secondary">Avg / Night</p>
        </div>
        
        <div className="bg-card-dark p-4 rounded-3xl shadow-soft flex flex-col justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-text-dark-secondary tracking-wider mb-2">
                <span>Efficiency</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-3 mt-2 overflow-hidden">
                <div className="bg-green-500 h-full rounded-full" style={{ width: '92%' }}></div>
            </div>
            <p className="text-sm text-white"><span className="font-bold">92%</span> <span className="text-xs text-text-dark-secondary">Avg</span></p>
        </div>
      </div>

      {/* Gemini AI Integration */}
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-5 rounded-3xl shadow-lg border border-white/10">
          <div className="flex items-center space-x-2 mb-3">
            <span className="material-icons text-purple-300">auto_awesome</span>
            <h3 className="font-bold text-white">Gemini Sleep Insight</h3>
          </div>
          
          {insight ? (
              <div className="animate-fade-in">
                  <p className="text-sm text-indigo-100 italic leading-relaxed">"{insight}"</p>
                  <button 
                    onClick={() => setInsight(null)} 
                    className="mt-3 text-xs text-purple-300 hover:text-white transition-colors"
                  >
                      Refresh
                  </button>
              </div>
          ) : (
             <div>
                 <p className="text-xs text-indigo-200 mb-4">Get personalized advice based on this week's sleep patterns.</p>
                 <button 
                    onClick={handleGenerateInsight}
                    disabled={loadingInsight}
                    className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-semibold text-white transition-colors flex items-center justify-center"
                 >
                     {loadingInsight ? (
                         <span className="material-icons animate-spin text-sm">refresh</span>
                     ) : (
                         "Analyze Sleep"
                     )}
                 </button>
             </div>
          )}
      </div>

    </div>
  );
};
