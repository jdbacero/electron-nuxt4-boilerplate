# 🚀 Nuxt 4 + Electron Boilerplate

> Build stunning cross-platform desktop apps with the power of Nuxt 4 and Electron! ✨

[![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?style=for-the-badge&logo=nuxt.js)](https://nuxt.com/)
[![Electron](https://img.shields.io/badge/Electron-29.0.0-47848F?style=for-the-badge&logo=electron)](https://electronjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-1.0-FBF0DF?style=for-the-badge&logo=bun)](https://bun.sh/)

Transform your web development skills into desktop applications! This modern boilerplate combines the intuitive Vue framework with Electron's cross-platform magic, giving you everything you need to build professional desktop apps from scratch.

## ✨ What's Inside

### 🎯 Core Technologies
- **⚡ Nuxt 4** - The bleeding-edge Vue framework for modern web development
- **🖥️ Electron** - Turn your web app into a native desktop application
- **🔷 TypeScript** - Full type safety across your entire codebase
- **📦 Bun** - Lightning-fast package manager and runtime

### 🛠️ Developer Experience
- **🔄 Live Reload** - Instant updates for both frontend and Electron process
- **📦 ES Modules** - Modern JavaScript modules for cleaner, future-proof code
- **🏗️ electron-builder** - One-command packaging for Windows, macOS, and Linux
- **🚀 Hot Module Replacement** - Develop faster with instant feedback

### 🎨 Ready-to-Code Features
- **💨 Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **🎨 SCSS Support** - Write maintainable, modular stylesheets
- **📱 Responsive Design** - Works beautifully on any screen size
- **🎭 Vue Components** - Build reusable UI components with ease
- **🔌 IPC Communication** - Seamless communication between main and renderer processes
- **📋 Pre-configured Scripts** - Development and production workflows ready to go

## 🚀 Quick Start

Get up and running in just 3 simple steps! ⚡

### 📋 Prerequisites

Before you begin, make sure you have:
- **[Node.js](https://nodejs.org/)** (v18 or higher) - The JavaScript runtime
- **[Bun](https://bun.sh/)** - Our lightning-fast package manager

### 🛠️ Installation

1. **Clone the repository** 📥
   ```bash
   git clone https://github.com/your-username/nuxt-electron-boilerplate.git
   cd nuxt-electron-boilerplate
   ```

2. **Install dependencies** 📦
   ```bash
   bun install
   ```

3. **Start developing** 🎉
   ```bash
   bun run electron:dev
   ```

That's it! Your desktop app will launch with hot reloading enabled. 🎊

## 📜 Available Scripts

Here are the handy commands you'll use most often:

| Command | Description | When to Use |
|---------|-------------|-------------|
| `bun run dev` | 🚀 Start Nuxt development server | For frontend-only development |
| `bun run electron:dev` | ⚡ Launch full desktop app with hot reload | **Your go-to development command** |
| `bun run build` | 🏗️ Build for production | When ready to deploy |
| `bun run app:build` | 📦 Package your app for distribution | Create installers for users |

> 💡 **Pro Tip**: Use `bun run electron:dev` for the complete development experience!

## 🗂️ Project Structure

Here's your clean, organized codebase at a glance:

```
tempo-electron-nuxt/
├── 📁 app/                 # 🎨 Your Nuxt application code goes here
│   └── app.vue            # Main Vue component with Tailwind + SCSS
├── 📁 electron/           # ⚡ Electron-specific code
│   ├── dist/             # Compiled Electron bundles (auto-generated)
│   ├── main.ts           # 🖥️ Main process - controls the app window
│   └── preload.ts        # 🔗 Preload script - safe API bridge
├── 📁 public/            # 🌐 Static assets (favicon, icons, etc.)
├── 📄 nuxt.config.ts     # ⚙️ Nuxt configuration
├── 📄 package.json       # 📦 Dependencies and scripts
├── 📄 tsconfig.json      # 🔷 TypeScript config for Nuxt
└── 📄 tsconfig.electron.json # 🔷 TypeScript config for Electron
```

### 🎯 Key Directories Explained

- **`app/`** - Your Vue application with Tailwind CSS and SCSS styling ready to go!
- **`electron/`** - Desktop-specific logic and window management
- **`public/`** - Static files served directly by Nuxt

## 🔍 How It All Works Together

### 🚀 Development Mode
When you run `bun run electron:dev`:

1. **🔧 Compile** - TypeScript Electron code gets compiled to JavaScript
2. **🌐 Serve** - Nuxt starts its development server with hot reloading
3. **🖥️ Launch** - Electron window opens, loading your Nuxt app
4. **🔄 Sync** - Changes to either Nuxt or Electron code trigger instant updates

### 📦 Production Build
Ready to ship? `bun run app:build` handles everything:

1. **🏗️ Generate** - Nuxt creates optimized static files
2. **⚡ Compile** - Electron TypeScript becomes production-ready JavaScript
3. **📦 Package** - `electron-builder` creates platform-specific installers
4. **✨ Distribute** - Ready-to-install apps for Windows, macOS, and Linux!

> 🎯 **The Magic**: Your web app becomes a native desktop application with full OS integration! Plus, you get Tailwind CSS for rapid styling and SCSS for maintainable stylesheets right out of the box! 🎨

## 🤔 Why Choose This Boilerplate?

- **🎯 Zero Templates** - Built from scratch for maximum understanding
- **⚡ Modern Stack** - Latest versions of all technologies
- **🛡️ Type Safe** - Full TypeScript coverage prevents bugs
- **🚀 Fast Development** - Bun + hot reloading = lightning-fast workflow
- **📦 Production Ready** - Optimized builds and easy distribution
- **🔧 Customizable** - Clean code you can easily modify and extend

## 🆘 Need Help?

- 📖 [Nuxt Documentation](https://nuxt.com/docs) - Learn Vue/Nuxt
- 🖥️ [Electron Docs](https://www.electronjs.org/docs) - Master desktop development
- 🔷 [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Type safety guide
- 📦 [Bun Guide](https://bun.sh/docs) - Package manager tips

## 📄 License

This project is licensed under the [MIT License](LICENSE) - feel free to use it for your next big idea! 🌟
