
Ce projet contient des tests de bout en bout (End-to-End) automatisés pour l’application **SauceDemo** utilisant **Playwright** et **TypeScript**.  
Il est configuré avec une pipeline **CI/CD** via **GitHub Actions** pour exécuter les tests automatiquement à chaque push.

---

## Fonctionnalités

- Tests automatisés avec Playwright (login, ajout au panier, checkout…)
- Utilisation de TypeScript pour la robustesse du code
- Intégration continue avec GitHub Actions
- Rapport HTML interactif généré après chaque exécution de tests
- Gestion des données de test via fichiers JSON

---

## Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/ton-utilisateur/ton-projet-playwright.git
cd ton-projet-playwright
Installer les dépendances :

bash
Copier
Modifier
npm install
Commandes principales
Lancer tous les tests en mode headless :

bash
Copier
Modifier
npm test
Ouvrir le rapport HTML des tests :

bash
Copier
Modifier
npm run report
Structure du projet
bash
Copier
Modifier
/tests           # Scripts de test Playwright
/pages           # Classes Page Object pour abstraire les pages
/fixtures        # Données JSON utilisées pour les tests
/playwright.config.ts  # Configuration Playwright
/.github/workflows # Configuration GitHub Actions (CI/CD)
CI/CD avec GitHub Actions
Un workflow est configuré pour :

Installer les dépendances

Lancer les tests Playwright

Générer un rapport

Publier le rapport en artefact (optionnel)

Technologies utilisées
Playwright

TypeScript

Node.js

GitHub Actions

