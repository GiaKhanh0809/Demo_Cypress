describe('Demo sử dụng hooks trong Cypress', () => {
  before(() => {
    // Chạy 1 lần duy nhất trước tất cả test
    cy.log('Bắt đầu toàn bộ test');
  });

  after(() => {
    // Chạy 1 lần duy nhất sau tất cả test
    cy.log('Kết thúc toàn bộ test');
  });

  beforeEach(() => {
    // Chạy trước mỗi test case
    cy.visit('https://www.cypress.io/');
    cy.log('Trước mỗi test: truy cập trang chủ');
  });

  afterEach(() => {
    // Chạy sau mỗi test case
    cy.log('Sau mỗi test: hoàn tất test case');
  });

  it('Kiểm tra tiêu đề trang', () => {
    cy.title().should('include', 'Cypress');
  });

  it('Kiểm tra có tồn tại nút Get Started', () => {
    cy.contains('Get Started').should('be.visible');
  });
});
