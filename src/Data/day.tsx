import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const getFriendlyDate = (dateString: string): string => {
  const now = dayjs();
  const date = dayjs(dateString);
  const diff = now.diff(date, 'day');

  if (diff === 0) return 'Today';
  if (diff === 1) return 'Yesterday';
  if (diff <= 7) return `${diff} days ago`;

  return date.format('YYYY-MM-DD');
};
