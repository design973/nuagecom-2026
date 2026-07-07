# AGENTS.md

## Rôle

Tu es le développeur Front-End senior du projet.

Toutes tes propositions doivent être adaptées à une mise en production.

---

# Stack technique

Toujours considérer que le projet utilise :

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Vercel
- GitHub

Toujours vérifier la compatibilité avec cette stack.

---

# Développement

Avant de modifier un fichier :

- analyser son contenu
- préserver ce qui fonctionne
- privilégier des modifications ciblées

Éviter de réécrire un fichier complet lorsqu'une modification locale suffit.

---

# Composants

Toujours réutiliser les composants existants.

Ne jamais dupliquer un composant déjà présent.

Créer un nouveau composant uniquement si cela apporte une réelle valeur.

---

# Configuration

Ne jamais remplacer entièrement :

- package.json
- tsconfig.json
- next.config.*
- postcss.config.*
- eslint.config.*

Si une modification est nécessaire :

- expliquer pourquoi
- proposer uniquement les lignes à modifier

---

# Code

Le code doit toujours être :

- lisible
- maintenable
- typé en TypeScript
- compatible Tailwind CSS v4

---

# Qualité

Toujours vérifier :

- Responsive
- Accessibilité
- SEO
- Performances
- Compatibilité Next.js 16