/* 
this spec is for the second assignment - 
Perform a real test on a website:
1. Browse https://www.demoblaze.com/
2. Login
3. Add the cheapest phone to cart
 */
describe('cheapest phone', () => {
  const user = "automatedUser26@example.com";
  const password = "4r4nd0mp4ssw0rd";
  it('login', () => {
    // Verify that login was successful by checking the username element
    cy.visit('https://www.demoblaze.com/');
    cy.get('[id="login2"]').click();//clicking on log in button
    cy.get('[id="loginusername"]').type(user, { force: true });//entring username and forcing it type the whole string
    cy.get('[id="loginpassword"]').type(password);//entring 
    cy.get('[class*="btn btn-primary"]').contains(/log in/i).click();//click on login button after filling fields
    cy.get('#nameofuser').should('contain', 'Welcome ' + user);
  })
  it('Finding cheapest phone',()=>{
    cy.get('[id="itemc"]').contains(/phones/i).click();
    let cheapestPrice = Number.MAX_VALUE;
    let cheapestPhoneName = '';

    // Loop through each phone card
    cy.get('.col-lg-4.col-md-6.mb-4').each(($phoneCard) => {
      // Get the price and phone name from the card
      const priceText = $phoneCard.find('h5').text().replace('$', '');
      const phoneName = $phoneCard.find('h4.card-title a').text();

      // Parse the price as a number
      const price = parseFloat(priceText);

      // compare current price with current cheapest price
      if (price < cheapestPrice) {
        cheapestPrice = price;//if the current price is cheaper 
        cheapestPhoneName = phoneName;
      }
    }).then(() => {
      // Click on the cheapest phone
      cy.contains(cheapestPhoneName).click();
      cy.get('a[class*="btn-success"][class*="btn-lg"][onclick*="addToCart"]').click();
   });
  })
  it('Collecting the cheapest phone', () => {
    cy.get('[id="cartur"]').click();
    cy.get('#tbodyid tr.success').should('exist');
  });
});
