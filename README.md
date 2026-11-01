# Awesome TODO (awesome-todo)

Awesome TODO App

## Stack (updated 2026-11)

| Component | Version |
| --- | --- |
| Quasar | 2.35.2 |
| @quasar/app-webpack | 4.4.5 |
| Vue | 3.5.44 |
| Vue Router | 5.4.0 (hash mode) |
| Vuex | 4.1.0 |
| Firebase JS SDK | 13.1.0 (modular API: auth + realtime database) |
| @quasar/extras | 1.18.0 |
| Sass | 1.107.1 |
| Node (build) | >= 20 (built with 22.22.1) |

Migrated from Quasar 1 / Vue 2 / Firebase 7 (namespaced API). Firebase
auth and realtime-database calls now use the modular API; component
`filters:` were converted to methods; `Vue.set` / `Vue.delete` were
replaced by direct reactive assignment (Vue 3 proxy reactivity). The
electron desktop integration was removed — this app is deployed as a
SPA (https://todo.mpalade.ro).

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
npm run dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
npm run build
```
Build output lands in `dist/spa/`.

### Customize the configuration
See [Configuring quasar.config.js](https://quasar.dev/start/landing).
