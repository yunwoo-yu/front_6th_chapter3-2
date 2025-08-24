import { EventForm } from '../types';

export const generateRepeatEvents = (event: EventForm) => {
  const events: EventForm[] = [
    {
      ...event,
      date: '2025-10-26',
    },
    {
      ...event,
      date: '2025-10-27',
    },
    {
      ...event,
      date: '2025-10-28',
    },

    {
      ...event,
      date: '2025-10-29',
    },

    {
      ...event,
      date: '2025-10-30',
    },
  ];

  return events;
};
