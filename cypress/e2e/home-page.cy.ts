import { webElements } from "../constants/web-elements";

describe('Home Page', () => {
    beforeEach(() => {
        cy.visit(``);
    });  
    it('Should open', () => {     
        cy.get(webElements.foo, { timeout: 3000 }).should('be.visible');
    }); 
});