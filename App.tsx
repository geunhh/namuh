import React, { useState } from 'react';
import { StatusBar } from './components/StatusBar';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './screens/HomeScreen';
import { LiveMonitorScreen } from './screens/LiveMonitorScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { ActivityScreen } from './screens/ActivityScreen';
import { HighlightsScreen } from './screens/HighlightsScreen';
import { ScreenName } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen setScreen={setCurrentScreen} />;
      case 'monitor':
        return <LiveMonitorScreen />;
      case 'dashboard':
        return <DashboardScreen />;
      case 'activity':
        return <ActivityScreen />;
      case 'highlights':
        return <HighlightsScreen />;
      default:
        return <HomeScreen setScreen={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-background-dark max-w-sm mx-auto shadow-2xl overflow-hidden relative border-x border-gray-900/50">
      {/* iOS-style Status Bar */}
      <StatusBar />

      {/* Main Content Area */}
      <main className="h-full overflow-y-auto scrollbar-hide pb-0">
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      <BottomNav currentScreen={currentScreen} setScreen={setCurrentScreen} />
    </div>
  );
};

export default App;
