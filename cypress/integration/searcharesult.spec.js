
describe('Search for a result on Google', () => {
    it('Search for Legend of Zelda wind waker', () => {
        cy.visit('www.google.com')
        cy.get('img[class="lnXdpd"]')
            .should('be.visible')

        cy.get('input[class="gLFyf gsfi"]')
            .type('The legend of Zelda Wind Waker')

        cy.contains('div[class="wM6W7d"]', 'The Legend of Zelda: The Wind Waker')
            .click()
        cy.get('div[class="Ftghae iirjIb"]')
            .should('be.visible')

        const especificWebSite = 'The Legend of Zelda: The Wind Waker | Nintendo GameCube'

        cy.contains('h3[class="LC20lb MBeuO DKV0Md"]', especificWebSite)
            .click()
        cy.get('div[class="gamepage-header-info"]')
            .should('be.visible')
    })
})