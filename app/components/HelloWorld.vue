<template>
    <div class="hello-world p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
        <h2 class="text-2xl font-bold text-white mb-4">{{ title }}</h2>
        <p class="text-gray-300 mb-4">{{ message }}</p>
        <button @click="count++"
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Count: {{ count }}
        </button>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title?: string
    message?: string
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Hello World!',
    message: 'This is a Nuxt 4 component example.'
})

const count = ref(0)
</script>

<style lang="scss" scoped>
.hello-world {
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-2px);
    }
}
</style>
