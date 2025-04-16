
import {
  HomeIcon,
  ChartBarIcon,
  ClipboardListIcon,
  TemplateIcon,
  LocationMarkerIcon,
  CogIcon,
} from '@heroicons/react/outline';
import { MenuItem } from '../Types';
export const getMenuAsText = (): MenuItem[] => [
  { id: 1, title: 'Home', icon: HomeIcon, path: '/home' },
  { id: 2, title: 'Statistics', icon: ChartBarIcon, path: '/statistics' },
  { id: 3, title: 'Reports', icon: ClipboardListIcon, path: '/Reports' },
{ id: 4, title: 'Projects', icon: TemplateIcon, path: '/projects' },
{ id: 5, title: 'Maps', icon: LocationMarkerIcon, path: '/map' },
{ id: 6, title: 'Settings', icon: CogIcon, path: '/settings' },
];