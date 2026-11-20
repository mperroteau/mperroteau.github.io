# Profil & articles

Site personnel statique construit avec Astro et publié sur GitHub Pages.

## Démarrer en local

Node.js 22.23.4 ou plus récent est nécessaire.

```sh
npm install
npm run dev
```

## Personnaliser

- Modifier `src/content/profile/profile.md` : le frontmatter YAML contient l’identité, le métier, la ville, les expériences, la formation, les compétences et les hobbies ; le corps Markdown sert à rédiger la présentation.
- Le portrait actuel est une image de démonstration Unsplash dans `public/images/portrait-placeholder.jpg`. Pour le remplacer, ajouter une image dans `public/images/` puis changer le champ `portrait` dans le frontmatter du profil.
- Détailler un poste avec `description` et une liste `details` dans son entrée `experience`.
- Ajouter un fichier `.md` dans `src/content/articles/` pour publier un article. Renseigner son titre, sa date, sa catégorie, son résumé et son temps de lecture dans le frontmatter YAML.
- Le thème sombre est activé par défaut ; le bouton en haut de page permet de passer en clair. Le choix est conservé dans le navigateur.
- L’interface vise WCAG 2.2 AA : navigation clavier, lien d’évitement, focus visible, contrastes renforcés et prise en compte de `prefers-reduced-motion`. Un audit automatisé et des essais avec lecteur d’écran restent nécessaires avant de déclarer une conformité complète.
- Ajuster le titre du site et l’URL `https://mperroteau.github.io` dans `astro.config.mjs` si le nom du dépôt change.

## Publier sur GitHub Pages

Le workflow `.github/workflows/deploy.yml` construit puis publie le site à chaque push sur `main`. Dans les paramètres du dépôt, choisir **Settings → Pages → Build and deployment → GitHub Actions**. Pour le dépôt `mperroteau.github.io`, l’adresse du site est `https://mperroteau.github.io`.

```sh
npm run build
```