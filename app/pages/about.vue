<template>
    <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div class="px-8 py-16">
            <div class="max-w-4xl mx-auto">
                <h1 class="text-4xl font-bold text-center text-white mb-12">📖 About This App</h1>

                <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-8">
                    <h2 class="text-2xl font-semibold text-white mb-6">🚀 Nuxt 4 + Electron Boilerplate</h2>
                    <p class="text-gray-300 mb-6 leading-relaxed">
                        This is a modern desktop application built with Nuxt 4 and Electron. It combines the power of
                        Vue 3,
                        TypeScript, Tailwind CSS, and Electron to create cross-platform desktop applications with a
                        web-like
                        development experience.
                    </p>

                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="text-lg font-semibold text-green-400 mb-3">Frontend Stack</h3>
                            <ul class="space-y-2 text-gray-300">
                                <li>• <strong class="text-white">Nuxt 4</strong> - The intuitive Vue framework</li>
                                <li>• <strong class="text-white">Vue 3</strong> - Progressive JavaScript framework</li>
                                <li>• <strong class="text-white">TypeScript</strong> - Type-safe JavaScript</li>
                                <li>• <strong class="text-white">Tailwind CSS</strong> - Utility-first CSS framework
                                </li>
                                <li>• <strong class="text-white">SCSS</strong> - Enhanced CSS preprocessing</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-blue-400 mb-3">Desktop Integration</h3>
                            <ul class="space-y-2 text-gray-300">
                                <li>• <strong class="text-white">Electron</strong> - Cross-platform desktop apps</li>
                                <li>• <strong class="text-white">Electron Builder</strong> - App packaging</li>
                                <li>• <strong class="text-white">Hot Reload</strong> - Instant development updates</li>
                                <li>• <strong class="text-white">Bun</strong> - Fast JavaScript runtime</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-8">
                    <h2 class="text-2xl font-semibold text-white mb-6">📁 Project Structure</h2>
                    <p class="text-gray-300 mb-6">
                        This project follows Nuxt 4's app directory structure with organized folders for different
                        concerns:
                    </p>

                    <div class="space-y-4">
                        <div class="border-l-4 border-green-400 pl-4">
                            <h3 class="text-lg font-semibold text-green-400">app/</h3>
                            <p class="text-gray-300">Main application directory containing all Nuxt-specific code</p>
                            <ul class="mt-2 space-y-1 text-sm text-gray-400">
                                <li><code class="bg-gray-800 px-2 py-1 rounded">components/</code> - Reusable Vue
                                    components
                                </li>
                                <li><code class="bg-gray-800 px-2 py-1 rounded">layouts/</code> - Page layout components
                                </li>
                                <li><code class="bg-gray-800 px-2 py-1 rounded">pages/</code> - File-based routing</li>
                                <li><code class="bg-gray-800 px-2 py-1 rounded">composables/</code> - Vue composition
                                    functions</li>
                                <li><code class="bg-gray-800 px-2 py-1 rounded">plugins/</code> - Nuxt plugins</li>
                                <li><code class="bg-gray-800 px-2 py-1 rounded">utils/</code> - Utility functions</li>
                                <li><code class="bg-gray-800 px-2 py-1 rounded">types/</code> - TypeScript type
                                    definitions
                                </li>
                                <li><code class="bg-gray-800 px-2 py-1 rounded">assets/</code> - Static assets</li>
                            </ul>
                        </div>

                        <div class="border-l-4 border-blue-400 pl-4">
                            <h3 class="text-lg font-semibold text-blue-400">electron/</h3>
                            <p class="text-gray-300">Electron main process and preload scripts</p>
                        </div>

                        <div class="border-l-4 border-purple-400 pl-4">
                            <h3 class="text-lg font-semibold text-purple-400">Configuration Files</h3>
                            <p class="text-gray-300">Project configuration and build setup</p>
                            <ul class="mt-2 space-y-1 text-sm text-gray-400">
                                <li><code class="bg-gray-800 px-2 py-1 rounded">nuxt.config.ts</code> - Nuxt
                                    configuration
                                </li>
                                <li><code class="bg-gray-800 px-2 py-1 rounded">package.json</code> - Project
                                    dependencies
                                </li>
                                <li><code class="bg-gray-800 px-2 py-1 rounded">tsconfig.json</code> - TypeScript
                                    configuration</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <NuxtLink to="/components"
                        class="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                        🎨 View Components Demo
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Simple about page - no special logic needed
</script>
