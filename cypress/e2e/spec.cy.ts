describe('📅 캘린더 앱 - 사용자 시나리오 기반 E2E', () => {
  beforeEach(() => {
    // 서버 시작 및 앱 방문
    cy.visit('/');
  });

  describe('🌅 아침 출근 전 - 하루 일정 확인 및 계획', () => {
    it('1. 오늘 일정을 추가하고 확인할 수 있다', () => {
      const today = new Date().toISOString().split('T')[0];

      // 아침 회의 추가
      cy.get('#title').type('팀 스탠드업');
      cy.get('#date').type(today);
      cy.get('#start-time').type('09:00');
      cy.get('#end-time').type('10:00');
      cy.get('#description').type('개발 3팀 스탠드업 미팅');
      cy.get('#location').type('개발 3팀 회의실');
      cy.get('[data-testid="event-submit-button"]').click();

      // 점심 약속 추가
      cy.get('#title').type('가족 저녁 식사');
      cy.get('#date').type(today);
      cy.get('#start-time').type('19:00');
      cy.get('#end-time').type('20:00');
      cy.get('#description').type('부모님과의 저녁 식사');
      cy.get('#location').type('강남역 레스토랑');
      cy.get('[data-testid="event-submit-button"]').click();

      cy.get('#viewType').click();
      cy.get('[aria-label="week-option"]').click();

      cy.get('[data-testid="event-list"]').should('contain', '팀 스탠드업');
      cy.get('[data-testid="event-list"]').should('contain', '가족 저녁 식사');
      cy.get('[data-testid="week-view"]').should('contain', '팀 스탠드업');
      cy.get('[data-testid="week-view"]').should('contain', '가족 저녁 식사');
    });
  });
});
