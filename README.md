# Test technique HeyTeam

* Le script de test Cypress est dans le folder cypress/e2e

* Le test se concentre sur le flow de l'user qui cherche a ajouter un objet personnalisé dans son panier.
Pour les test de regression visuelle, en général j'utilise un logiciel third party (comme Applitools https://applitools.com/platform/eyes/ ou percy.io https://percy.io/), mais il n'ont pas été setup pour ce test.
* J'ai été contraint de désactiver la fonctionnalité "test isolation" apparue dans la derniere version de cypress car elle n'est pas adaptée à ce script. Cependant, la commande custom **createSessionAmazon** prend en compte ces changements en wrappant le login dans un cy.session, permettant d'utiliser la fonctionnalité de test isolation, pour un cas plus adapté.
