/* 
this spec is for the first assignment - 
Compare &amp; Assert the Texts of 2 PDF Files.
Create a test that will assert true if 2 PDFs files’ text is the same
You can create 2 simple pdfs with different texts in each – add them to your cypress project.
Note: You may use external packages

***
im using pdf-parse https://www.npmjs.com/package/pdf-parse
 */
describe('PDF Comparison Tests', () => {
it('compares text content of PDF files', () => {
  cy.task('readPdf', 'app/firstPdf.pdf').then((first) => {
    cy.task('readPdf', 'app/secondPdf.pdf').then((second) => {
      // Compare the text content of the two PDFs
      const arePDFsEqual = first === second;

      if (arePDFsEqual) {
        cy.log('The text content of the two PDF files is equal.');
      } else {
        cy.log('The text content of the two PDF files is not equal.');
      }
      expect(arePDFsEqual).to.equal(true);
});
    });
  });
});