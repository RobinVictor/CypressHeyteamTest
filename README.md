# Test technique HeyTeam

* Le script de test Cypress est dans le folder cypress/e2e

* Le test se concentre sur le flow de l'user qui cherche à ajouter un objet personnalisé dans son panier.
Pour les test de regression visuelle, en général j'utilise un logiciel third party (comme Applitools https://applitools.com/platform/eyes/ ou percy.io https://percy.io/) (non installé dans ce projet)
* J'ai été contraint de désactiver la fonctionnalité "test isolation" apparue dans la derniere version de cypress car elle n'est pas adaptée à ce script. Cependant, la commande custom **createSessionAmazon** prend en compte ces changements en wrappant le login dans un cy.session, permettant d'utiliser la fonctionnalité de test isolation, pour un cas plus adapté.
* Pour le reporting et les metrics j'utilise Qase.io grâce au plugin cypress-qase-reporter (non installé dans ce projet)

Pour lancer le projet :
* Si vous n'avez pas yarn, ``npm install --global yarn``(avec node) ou ``brew install yarn``(homebrew)
* Puis à la racine du projet ``yarn install``
* ``cypress run``pour lancer le test dans le terminal
* ``cypress open``pour lancer l'interface visuelle de cypress