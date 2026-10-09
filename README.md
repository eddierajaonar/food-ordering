# 🍕 FoodOrdering

Application mobile de commande de pizzas construite avec **Expo** et **React Native**, multiplateforme (iOS, Android, Web).

> Projet en cours de développement — l'écran Menu affiche actuellement la liste des produits à partir de données mockées.

## ✨ Fonctionnalités

- 📋 **Menu** : liste des pizzas en grille 2 colonnes (image, nom, prix)
- 🖼️ Image par défaut si un produit n'a pas d'image
- 🌗 Thème clair / sombre automatique selon le système
- 🧭 Navigation par onglets + écran modal (Expo Router)

### Modèle de données prévu

Les types définis dans [`src/types.ts`](src/types.ts) préparent les prochaines fonctionnalités :

| Type        | Description                                                        |
| ----------- | ------------------------------------------------------------------ |
| `Product`   | Pizza (id, nom, image, prix)                                       |
| `PizzaSize` | Tailles disponibles : `S`, `M`, `L`, `XL`                          |
| `CartItem`  | Article du panier (produit, taille, quantité)                      |
| `Order`     | Commande (total, statut, articles)                                 |
| `OrderStatus` | `New` → `Cooking` → `Delivering` → `Delivered`                   |
| `Profile`   | Profil utilisateur (groupe : client / admin)                       |

## 🛠️ Stack technique

| Outil                     | Version  |
| ------------------------- | -------- |
| Expo SDK                  | 57       |
| React Native              | 0.86     |
| React                     | 19.2     |
| Expo Router (typed routes)| 57       |
| React Native Reanimated   | 4.5      |
| TypeScript                | 6.0      |

## 📁 Structure du projet

```
FoodOrdering/
├── app.json                  # Configuration Expo
├── assets/
│   ├── data/                 # Données mockées (products.ts, orders.ts)
│   ├── fonts/                # Polices (SpaceMono)
│   └── images/               # Icônes, splash screen, favicon
├── src/
│   ├── app/                  # Routes Expo Router (1 fichier = 1 écran)
│   │   ├── _layout.tsx       # Layout racine (Stack, thème, splash, fonts)
│   │   ├── (tabs)/
│   │   │   ├── _layout.tsx   # Navigation par onglets
│   │   │   ├── index.tsx     # Écran Menu (liste des produits)
│   │   │   └── two.tsx       # Onglet secondaire
│   │   ├── modal.tsx         # Écran modal
│   │   ├── +html.tsx         # Template HTML (web)
│   │   └── +not-found.tsx    # Page 404
│   ├── components/           # Composants réutilisables & hooks
│   │   ├── ProductListItem.tsx
│   │   ├── Themed.tsx        # Text / View adaptés au thème
│   │   └── useColorScheme.ts ...
│   ├── constants/
│   │   └── Colors.ts         # Palette clair / sombre
│   └── types.ts              # Types métier
├── package.json
└── tsconfig.json             # Alias `@/*` → racine du projet
```

## 🚀 Démarrage

### Prérequis

- [Node.js](https://nodejs.org/) (LTS)
- L'app [Expo Go](https://expo.dev/go) sur votre téléphone, ou un émulateur Android / simulateur iOS

### Installation

```bash
git clone <url-du-repo>
cd FoodOrdering
npm install
```

### Lancer l'application

```bash
npm start          # Démarre le serveur de développement Expo
npm run android    # Ouvre sur Android
npm run ios        # Ouvre sur iOS
npm run web        # Ouvre dans le navigateur
```

Scannez ensuite le QR code avec Expo Go (Android) ou l'appareil photo (iOS).

## 🧰 Commandes utiles

```bash
npx expo install <package>   # Ajouter une dépendance compatible avec le SDK
npx expo lint                # Linter
npx tsc --noEmit             # Vérification des types
npx expo-doctor              # Diagnostic des dépendances / config
npx expo install --fix       # Corriger les versions incompatibles
```

> ⚠️ Toujours utiliser `npx expo install` plutôt que `npm install <pkg>` pour garantir la compatibilité avec le SDK Expo.

## 📦 Build & déploiement

Les builds natifs et les mises à jour OTA passent par [EAS](https://docs.expo.dev/eas/) :

```bash
npx eas-cli@latest build --platform android   # ou ios
npx eas-cli@latest update                     # mise à jour over-the-air
```

Les dossiers `ios/` et `android/` sont générés automatiquement (Continuous Native Generation) et ne sont pas versionnés.

## 🗺️ Roadmap

- [ ] Écran détail produit avec choix de la taille
- [ ] Panier
- [ ] Création et suivi des commandes
- [ ] Interface admin (gestion des produits et des commandes)
- [ ] Authentification et backend

## 📄 Licence

Distribué sous licence MIT — voir [LICENSE](LICENSE).
