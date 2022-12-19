// Ce test est réalisé en desactivant la nouvelle option test isolation de Cypress 12, car par défaut cypress reload et vide le cache entre chaque bloc "it",
// et qu'il est compliqué d'appeler des routes précises sur amazon
describe('Ajouter un produit personnalisé dans le panier puis le supprimer',
    {testIsolation: false},
    () => {
        beforeEach(() => {
            //createsSessionAmazon est une commande custom définie dans cypress/support/commands.ts,
            //elle permet de login et de garder le cache et les cookies entre chaque test
            cy.createSessionAmazon('junglit.test.claire@gmail.com', 'Azertyu1.')
        });
        it('Chercher dans la barre de recherche un objet personalisé', () => {
            cy.visit('https://amazon.fr')
            cy.get('#twotabsearchtextbox').type('Maverton-250ml-Verre-whisky-personnalisé')
            cy.get('#nav-search-submit-button').click()
            // cette fonction permet d'ignorer une erreur d'application (et non de test) bloquante pour l'exécution du script
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('Unexpected token')) {
                    // l'erreur unexpected token étant attendue,
                    // on choisit de l'ignorer pour continuer l'execution du test
                    return false
                }
            });
        });
        it('Cliquer sur l\'item personalisé dans la liste des résultats', () => {
            cy.get('[data-asin="B09HTZJFY1"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus').click()
        });
        it('Cliquer sur le bouton personnaliser pour accéder au formulaire de personnalisation', () => {
            cy.get('#gestalt-popover-button-announce').click()
        });
        it('Remplir les champs du formulaire de personnalisation et ajouter au panier', () => {
            cy.get('input.a-input-text.a-span12').eq(0).type('Je')
            cy.get('input.a-input-text.a-span12').eq(1).type('suis')
            cy.get('input.a-input-text.a-span12').eq(2).type('groot')
            cy.get('#gc-buybox > :nth-child(2)').click()
        });
        it('Vérifie que l\'item est bien ajouté au panier', () => {
            // vérifie que  la mention Ajouté au panier est affichée
            cy.get('.a-size-medium-plus').should("contain", "Ajouté")
            //vérifie que le 1 apparait sur l'icone du panier
            cy.get('#nav-cart-count').should('contain', 1)
        });
        it('Cliquer sur le panier pour accéder au menu panier', () => {
            cy.get('#nav-cart').click()
        });
        it('Supprimer l\'item du panier ', () => {
            //ce test permet de remettre le compte de test dans l'état ou il était au début du script
            cy.get('.sc-action-delete > .a-declarative > .a-color-link').click()
        });
    });

