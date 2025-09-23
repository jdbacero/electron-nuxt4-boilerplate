<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    <NuxtRouteAnnouncer />

    <!-- Hero Section -->
    <header class="px-8 py-16 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          🚀 Welcome to <span class="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Nuxt
            4</span> +
          <span class="text-blue-400">Electron</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Build stunning cross-platform desktop applications with the power of Vue, Tailwind CSS, and Electron
        </p>

        <!-- Tech Stack Badges -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <span
            class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white">
            ⚡ Nuxt 4
          </span>
          <span
            class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white">
            🎭 Vue 3
          </span>
          <span
            class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white">
            🖥️ Electron
          </span>
          <span
            class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white">
            🔷 TypeScript
          </span>
          <span
            class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white">
            💨 Tailwind CSS
          </span>
          <span
            class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white">
            📦 Bun
          </span>
        </div>
      </div>
    </header>

    <!-- Features Grid -->
    <section class="px-8 py-16 bg-white/5 backdrop-blur-sm">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center text-white mb-12">✨ What's Ready to Use</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature Cards -->
          <div
            class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div class="text-5xl mb-4">🔄</div>
            <h3 class="text-xl font-semibold text-white mb-2">Hot Reload</h3>
            <p class="text-gray-300">Instant updates for both Nuxt frontend and Electron main process</p>
          </div>

          <div
            class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div class="text-5xl mb-4">🖥️</div>
            <h3 class="text-xl font-semibold text-white mb-2">Cross-Platform</h3>
            <p class="text-gray-300">Build for Windows, macOS, and Linux from a single codebase</p>
          </div>

          <div
            class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div class="text-5xl mb-4">💨</div>
            <h3 class="text-xl font-semibold text-white mb-2">Tailwind CSS</h3>
            <p class="text-gray-300">Utility-first CSS framework for rapid UI development</p>
          </div>

          <div
            class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div class="text-5xl mb-4">🎨</div>
            <h3 class="text-xl font-semibold text-white mb-2">SCSS Support</h3>
            <p class="text-gray-300">Write maintainable, modular stylesheets with SCSS</p>
          </div>

          <div
            class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div class="text-5xl mb-4">🔷</div>
            <h3 class="text-xl font-semibold text-white mb-2">TypeScript</h3>
            <p class="text-gray-300">Full type safety across your entire application</p>
          </div>

          <div
            class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div class="text-5xl mb-4">⚡</div>
            <h3 class="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
            <p class="text-gray-300">Bun package manager for blazing-fast development</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Getting Started -->
    <section class="px-8 py-16">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-center text-white mb-12">🚀 Get Started</h2>

        <!-- Commands -->
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <div class="text-green-400 font-semibold mb-3">Development</div>
            <code
              class="block bg-gray-900 px-4 py-3 rounded-lg text-green-400 font-mono text-sm mb-2 border border-gray-700">
              bun run electron:dev
            </code>
            <p class="text-gray-300 text-sm">Start development with hot reloading</p>
          </div>

          <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <div class="text-green-400 font-semibold mb-3">Production Build</div>
            <code
              class="block bg-gray-900 px-4 py-3 rounded-lg text-green-400 font-mono text-sm mb-2 border border-gray-700">
              bun run app:build
            </code>
            <p class="text-gray-300 text-sm">Package your app for distribution</p>
          </div>
        </div>

        <!-- Next Steps -->
        <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center">
          <h3 class="text-2xl font-semibold text-green-400 mb-6">🎯 Next Steps</h3>
          <ul class="space-y-3 text-left max-w-2xl mx-auto">
            <li class="flex items-center text-gray-300">
              <span class="text-green-400 mr-3">✨</span>
              Edit this page in <code
                class="bg-gray-800 px-2 py-1 rounded text-green-400 font-mono text-sm">app/app.vue</code>
            </li>
            <li class="flex items-center text-gray-300">
              <span class="text-green-400 mr-3">⚡</span>
              Check out the Electron code in <code
                class="bg-gray-800 px-2 py-1 rounded text-green-400 font-mono text-sm">electron/main.ts</code>
            </li>
            <li class="flex items-center text-gray-300">
              <span class="text-green-400 mr-3">🎨</span>
              Style with Tailwind classes and SCSS in your components
            </li>
            <li class="flex items-center text-gray-300">
              <span class="text-green-400 mr-3">🚀</span>
              Build something amazing with Nuxt 4 + Electron! 🌟
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="px-8 py-8 bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-gray-400">
          Built with ❤️ using Nuxt 4 & Electron •
          <a href="https://nuxt.com/docs" target="_blank" rel="noopener"
            class="text-green-400 hover:text-green-300 transition-colors">Nuxt Docs</a> •
          <a href="https://www.electronjs.org/docs" target="_blank" rel="noopener"
            class="text-blue-400 hover:text-blue-300 transition-colors">Electron Docs</a> •
          <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener"
            class="text-cyan-400 hover:text-cyan-300 transition-colors">Tailwind Docs</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Welcome to your Nuxt 4 + Electron app!
// This is the main entry point for your application.
// Feel free to modify this component to build your desktop app!
</script>

<style lang="scss" scoped>
// Custom SCSS styles can go here if needed
// The page uses Tailwind CSS classes for most styling
// but you can add custom SCSS variables, mixins, or styles

// Example: Custom gradient animation (optional)
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.animated-gradient {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
}
</style>
