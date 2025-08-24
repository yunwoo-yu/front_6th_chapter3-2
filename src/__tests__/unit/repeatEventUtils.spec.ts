import { describe, it } from 'vitest';

import { EventForm } from '../../types';
import { generateRepeatEvents } from '../../utils/repeatEventUtils';

describe('generateRepeatEvents', () => {
  const event: Event | EventForm = {
    title: '기존 회의',
    date: '2025-10-15',
    startTime: '09:00',
    endTime: '10:00',
    description: '기존 팀 미팅',
    location: '회의실 B',
    category: '업무',
    repeat: { type: 'none', interval: 0 },
    notificationTime: 10,
  };

  it('repeat type이 none인 경우 원본 이벤트를 반환한다', () => {
    const result = generateRepeatEvents(event);

    expect(result).toEqual(event);
  });
});
