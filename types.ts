export type ScreenName = 'home' | 'monitor' | 'dashboard' | 'activity' | 'highlights';

export interface Activity {
  id: string;
  type: 'feed' | 'pump' | 'bottle' | 'sleep' | 'diaper';
  time: string;
  duration?: string;
  amount?: string;
  details?: string;
  color: string;
  iconUrl?: string;
  iconName?: string;
}

export interface SleepStat {
  label: string;
  value: string;
  subValue: string;
  icon: string;
}

export interface Highlight {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  isNew?: boolean;
}
