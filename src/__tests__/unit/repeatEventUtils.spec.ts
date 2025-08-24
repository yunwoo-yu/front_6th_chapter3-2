import { describe, it } from 'vitest';

describe('generateRepeatEvents', () => {
  it('repeat type이 daily면 매일 반복된 이벤트를 반환한다', () => {});

  it('repeat type이 weekly면 매주 반복된 이벤트를 반환한다', () => {});

  it('repeat type이 monthly면 매월 반복된 이벤트를 반환한다', () => {});

  it('repeat type이 yearly면 매년 반복된 이벤트를 반환한다', () => {});

  it('매월 31일 반복 시 31일이 없는 달은 스킵한다', () => {});

  it('매년 2월 29일 반복 시 평년은 스킵하고 윤년에만 생성한다', () => {});

  it('endDate 이후 일정은 반환하지 않는다', () => {});

  it('endDate가 없으면 최대 2025-10-30까지 반복된 이벤트를 반환한다', () => {});

  it('interval이 2면 2일, 2주, 2개월, 2년 주기로 반복된 이벤트를 반환한다', () => {});

  it('시작 날짜도 결과에 포함된다', () => {});

  it('종료 날짜와 같은 날짜도 결과에 포함된다', () => {});
});
