// Kiểm tra tiêu đề của trang chủ Cypress
describe('Kiểm tra tiêu đề trang chủ Cypress', () => {
  // Xác minh tiêu đề trang có đúng không
  it('Xác minh tiêu đề', () => {
    //Truy cập vào trangcủa Cypress
    cy.visit('https://www.cypress.io/');
    //Lấy tiêu đề (title) của trang web và Kiểm tra xem tiêu đề có đúng không
    cy.title().should('eq', 'Testing Frameworks for Javascript | Write, Run, Debug | Cypress');
  });
});


// describe('Kiểm tra trang chủ Cypress', () => {
//   it('Truy cập trang chủ và xác minh tiêu đề', () => {
//     // Truy cập trang chủ Cypress
//     cy.visit('https://www.cypress.io/');

//     // Kiểm tra tiêu đề trang
//     cy.title().should('include', 'Cypress');
//   });
// });
