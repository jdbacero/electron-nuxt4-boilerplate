# Nuxt 4 App Directory Structure

This directory contains the main application code for your Nuxt 4 + Electron application. Below is an explanation of each folder and its purpose.

## 📁 Directory Structure

### `app.vue`
The root component of your Nuxt application. This is where your app starts.

### `pages/` - File-based Routing
Contains your page components. Each `.vue` file in this directory automatically becomes a route.
- `index.vue` → `/`
- `about.vue` → `/about`
- `components.vue` → `/components`

### `components/` - Reusable Components
Store your reusable Vue components here.
- `HelloWorld.vue` - Example component with props and reactive state

### `layouts/` - Page Layouts
Define layouts that wrap your pages.
- `default.vue` - Default layout with navigation and footer

### `composables/` - Vue Composables
Reusable Vue composition functions for shared logic.
- `useCounter.ts` - Counter logic with sync/async operations

### `plugins/` - Nuxt Plugins
Global functionality and third-party integrations.
- `logger.client.ts` - Client-side logging plugin (`.client.ts` runs only on client)

### `utils/` - Utility Functions
Pure functions and helpers that don't depend on Vue reactivity.
- `formatters.ts` - Date, number, and text formatting utilities

### `types/` - TypeScript Types
Global type definitions and interfaces.
- `index.ts` - Common types used throughout the application

### `assets/` - Static Assets
Images, fonts, and other static files (currently empty).

## 🚀 Getting Started

1. **Development**: Run `bun run electron:dev` to start development with hot reload
2. **Components**: Visit `/components` to see examples of each folder in action
3. **About**: Visit `/about` for project information

## 📖 Examples

### Using a Component
```vue
<template>
  <HelloWorld title="My Title" message="My message" />
</template>
```

### Using a Composable
```ts
const counter = useCounter(5)
counter.increment() // 6
```

### Using Utilities
```ts
import { formatDate, formatCurrency } from '~/utils/formatters'

formatDate(new Date()) // "Jan 1, 2024"
formatCurrency(1234.56) // "$1,234.56"
```

### Using the Logger Plugin
```ts
const { $logger } = useNuxtApp()
$logger.info('Hello world!')
```

## 🎯 Next Steps

- Add your own components to `components/`
- Create new pages in `pages/`
- Add business logic to `composables/`
- Define your data types in `types/`
- Add utility functions to `utils/`
- Integrate third-party libraries via `plugins/`

Happy coding! 🎉
