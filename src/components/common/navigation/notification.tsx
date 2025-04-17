import  { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface Notification {
  id: number;
  title: string;
  message: string;
  date: string;
  time: string;
  isRead: boolean;
}

const getFriendlyDate = (dateString: string): string => {
  const now = dayjs();
  const date = dayjs(dateString);
  const diff = now.diff(date, 'day');

  if (diff === 0) return 'Today';
  if (diff === 1) return 'Yesterday';
  if (diff <= 7) return `${diff} days ago`;

  return date.format('YYYY-MM-DD');
};

const NotificationMenu = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'New Update Available',
      message: 'Click here to update your app to the latest version.',
      date: '2025-04-16',
      time: '10:30 AM',
      isRead: false,
    },
    {
      id: 2,
      title: 'System Maintenance',
      message: 'Scheduled downtime at 2:00 PM today for upgrades.',
      date: '2025-04-15',
      time: '9:00 AM',
      isRead: true,
    },
    {
      id: 3,
      title: 'Security Alert',
      message: 'New login detected from an unknown device.',
      date: '2025-04-14',
      time: '8:30 PM',
      isRead: false,
    },
  ]);

  const [filter, setFilter] = useState<'all' | 'read' | 'unread'>('all');

  const handleMarkAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const filtered = notifications.filter((n) => {
    if (filter === 'unread') return !n.isRead;
    if (filter === 'read') return n.isRead;
    return true;
  });

  const renderNotification = (notif: Notification) => (
    <div
      key={notif.id}
      onClick={() => handleMarkAsRead(notif.id)}
      className="flex flex-col gap-1 px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer border-b "
    >
      <div className="flex justify-between items-start">
        {/* Right side: Blue dot + title */}
        <div className="flex items-center gap-2">
          {!notif.isRead && <div className="w-2 h-2 rounded-full bg-blue-500 mt-0.5" />}
          <span className={notif.isRead ? 'text-sm' : 'text-sm font-semibold'}>
            {notif.title}
          </span>
        </div>

        {/* Left side: Date + Time */}
        <span className="text-xs text-gray-400 whitespace-nowrap">
          {getFriendlyDate(notif.date)} • {notif.time}
        </span>
      </div>

      {/* Message below title */}
      <p className="text-xs text-gray-600">{notif.message}</p>
    </div>
  );
  
  return (
<div className="w-full p-4 bg-white shadow-lg rounded-lg z-20">



      <h3 className="text-lg font-semibold mb-3">Notifications</h3>

      {/* Filters */}
      <div className="flex gap-2 mb-4">
        <button
          className={`text-sm px-3 py-1 rounded-full border ${
            filter === 'all' ? 'bg-blue-500 text-white' : 'text-gray-600'
          }`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`text-sm px-3 py-1 rounded-full border ${
            filter === 'unread' ? 'bg-blue-500 text-white' : 'text-gray-600'
          }`}
          onClick={() => setFilter('unread')}
        >
          Unread
        </button>
        <button
          className={`text-sm px-3 py-1 rounded-full border ${
            filter === 'read' ? 'bg-blue-500 text-white' : 'text-gray-600'
          }`}
          onClick={() => setFilter('read')}
        >
          Read
        </button>
      </div>

      {/* List */}
      {filtered.length > 0 ? (
        <div className="space-y-2 max-h-72 overflow-y-auto">
          {filtered.map((notif) => renderNotification(notif))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-sm py-6">
          No notifications found.
        </div>
      )}
    </div>
  );
};

export default NotificationMenu;
