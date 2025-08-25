import { EventForm } from '../types';

export const generateRepeatEvents = (event: EventForm) => {
  const events: EventForm[] = [];

  const startDate = new Date(event.date);
  const endDate = new Date(event.repeat.endDate || '2025-10-30');
  let currentDate = new Date(startDate);

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
        currentDate.setMonth(currentDate.getMonth() + 1);

        if (currentDate.getDate() !== startDate.getDate()) {
          currentDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            startDate.getDate()
          );
        }
        break;

      case 'yearly':
        {
          const originalMonth = startDate.getMonth();
          const originalDayOfYear = startDate.getDate();

          do {
            currentDate.setFullYear(currentDate.getFullYear() + 1);
          } while (
            originalMonth === 1 &&
            originalDayOfYear === 29 &&
            !(
              (currentDate.getFullYear() % 4 === 0 && currentDate.getFullYear() % 100 !== 0) ||
              currentDate.getFullYear() % 400 === 0
            )
          );

          currentDate.setMonth(originalMonth, originalDayOfYear);
        }
        break;
    }
  }

  return events;
};
