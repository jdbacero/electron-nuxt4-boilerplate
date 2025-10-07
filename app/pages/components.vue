<template>
    <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div class="px-8 py-16">
            <div class="max-w-4xl mx-auto">
                <h1 class="text-4xl font-bold text-center text-white mb-12">🎨 Components Demo</h1>

                <!-- HelloWorld Component Demo -->
                <section class="mb-12">
                    <h2 class="text-2xl font-semibold text-white mb-6">HelloWorld Component</h2>
                    <div class="grid md:grid-cols-2 gap-8">
                        <HelloWorld title="Welcome to Nuxt 4!"
                            message="This component demonstrates how to create reusable Vue components with TypeScript." />

                        <HelloWorld title="Interactive Component"
                            message="Click the button to see the counter in action." />
                    </div>
                </section>

                <!-- Counter Composable Demo -->
                <section class="mb-12">
                    <h2 class="text-2xl font-semibold text-white mb-6">Counter Composable</h2>
                    <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                        <div class="text-center mb-6">
                            <div class="text-6xl font-bold text-white mb-2">{{ asyncCounter.count }}</div>
                            <div class="text-gray-300">
                                Count is {{ isEven ? 'even' : 'odd' }} ({{ asyncCounter.count }})
                            </div>
                        </div>

                        <div class="flex justify-center gap-4 mb-6">
                            <button @click="asyncCounter.decrement()"
                                class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                                Decrement
                            </button>
                            <button @click="asyncCounter.reset()"
                                class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
                                Reset
                            </button>
                            <button @click="asyncCounter.increment()"
                                class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                                Increment
                            </button>
                        </div>

                        <div class="flex justify-center">
                            <button @click="incrementAsync()" :disabled="asyncCounter.isLoading.value"
                                class="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-lg transition-colors">
                                {{ asyncCounter.isLoading.value ? 'Loading...' : 'Async Increment (+1s delay)' }}
                            </button>
                        </div>
                    </div>
                </section>

                <!-- Utility Functions Demo -->
                <section class="mb-12">
                    <h2 class="text-2xl font-semibold text-white mb-6">Utility Functions</h2>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                            <h3 class="text-lg font-semibold text-white mb-4">Date Formatting</h3>
                            <div class="space-y-2 text-gray-300">
                                <div>Current date: <code
                                        class="bg-gray-800 px-2 py-1 rounded text-green-400">{{ formatDate(new Date()) }}</code>
                                </div>
                                <div>Long format: <code
                                        class="bg-gray-800 px-2 py-1 rounded text-green-400">{{ formatDate(new Date(), { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</code>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                            <h3 class="text-lg font-semibold text-white mb-4">Number Formatting</h3>
                            <div class="space-y-2 text-gray-300">
                                <div>Currency: <code
                                        class="bg-gray-800 px-2 py-1 rounded text-green-400">{{ formatCurrency(1234.56) }}</code>
                                </div>
                                <div>Number: <code
                                        class="bg-gray-800 px-2 py-1 rounded text-green-400">{{ formatNumber(1234567) }}</code>
                                </div>
                                <div>File size: <code
                                        class="bg-gray-800 px-2 py-1 rounded text-green-400">{{ formatFileSize(1024 * 1024 * 2.5) }}</code>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                            <h3 class="text-lg font-semibold text-white mb-4">Text Formatting</h3>
                            <div class="space-y-2 text-gray-300">
                                <div>Truncated: <code
                                        class="bg-gray-800 px-2 py-1 rounded text-green-400">{{ truncateText('This is a very long text that should be truncated', 20) }}</code>
                                </div>
                                <div>Title case: <code
                                        class="bg-gray-800 px-2 py-1 rounded text-green-400">{{ toTitleCase('hello world example') }}</code>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                            <h3 class="text-lg font-semibold text-white mb-4">Random ID</h3>
                            <div class="space-y-2 text-gray-300">
                                <div>Generated ID: <code
                                        class="bg-gray-800 px-2 py-1 rounded text-green-400">{{ randomId }}</code></div>
                                <button @click="generateNewId()"
                                    class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                                    Generate New ID
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Logger Demo -->
                <section>
                    <h2 class="text-2xl font-semibold text-white mb-6">Logger Plugin</h2>
                    <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                        <p class="text-gray-300 mb-4">
                            Check the browser console to see the logged messages. The logger plugin provides global
                            logging
                            functionality.
                        </p>
                        <div class="flex gap-4">
                            <button @click="logInfo()"
                                class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                                Log Info
                            </button>
                            <button @click="logWarning()"
                                class="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors">
                                Log Warning
                            </button>
                            <button @click="logError()"
                                class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                                Log Error
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Import composables
import { useAsyncCounter } from '~/composables/useCounter'

const { $logger } = useNuxtApp()
const asyncCounter = useAsyncCounter(0)

// Computed property for even/odd check
const isEven = computed(() => asyncCounter.count.value % 2 === 0)

// Import utilities
const { formatDate, formatCurrency, formatNumber, formatFileSize, truncateText, toTitleCase, generateId } = await import('~/utils/formatters')

// Reactive data
const randomId = ref(generateId(12))

// Methods
const incrementAsync = async () => {
    await asyncCounter.incrementAsync(1000)
}

const generateNewId = () => {
    randomId.value = generateId(12)
}

const logInfo = () => {
    ; ($logger as any).info('This is an info message from the components page', { timestamp: Date.now() })
}

const logWarning = () => {
    ; ($logger as any).warn('This is a warning message', { component: 'components.vue' })
}

const logError = () => {
    ; ($logger as any).error('This is an error message', new Error('Demo error'))
}
</script>
