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
        currentDate.setDate(currentDate.getDate());
    }
  }

  return events;
};
