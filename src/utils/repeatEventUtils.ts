import { EventForm } from '../types';

export const generateRepeatEvents = (event: EventForm) => {
  const events: EventForm[] = [];

  const currentDate = new Date(event.date);
  const endDate = new Date(event.repeat.endDate || '2025-10-30');

  while (currentDate <= endDate) {
    events.push({
      ...event,
      date: currentDate.toISOString().split('T')[0],
    });

    switch (event.repeat.type) {
      case 'daily':
        currentDate.setDate(currentDate.getDate() + 1);
        break;
      case 'weekly':
        currentDate.setDate(currentDate.getDate() + 7);
        break;
      case 'monthly':
        do {
          currentDate.setMonth(currentDate.getMonth() + 1);
          // 31일로 강제 설정
          currentDate.setDate(31);
        } while (currentDate.getDate() !== 31);
        break;
      case 'yearly':
        currentDate.setFullYear(currentDate.getFullYear() + 1);
        break;
    }
  }

  return events;
};
