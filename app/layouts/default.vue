<template>
    <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <!-- Navigation Header -->
        <header class="bg-black/20 backdrop-blur-sm border-b border-white/10 px-6 py-4">
            <nav class="max-w-6xl mx-auto flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <NuxtLink to="/" class="text-white text-xl font-bold hover:text-green-400 transition-colors">
                        🚀 Nuxt 4 + Electron
                    </NuxtLink>
                </div>

                <div class="flex items-center space-x-6">
                    <NuxtLink to="/"
                        class="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
                        exact>
                        Home
                    </NuxtLink>
                    <NuxtLink to="/about"
                        class="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10">
                        About
                    </NuxtLink>
                    <NuxtLink to="/components"
                        class="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10">
                        Components
                    </NuxtLink>
                </div>
            </nav>
        </header>

        <!-- Main Content -->
        <main class="flex-1">
            <slot />
        </main>

        <!-- Footer -->
        <footer class="bg-black/20 backdrop-blur-sm border-t border-white/10 px-6 py-4 mt-auto">
            <div class="max-w-6xl mx-auto text-center">
                <p class="text-gray-400 text-sm">
                    © 2025 Nuxt 4 + Electron App • Built with ❤️
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
// Default layout for the application
// This layout provides a consistent header/footer structure
</script>
