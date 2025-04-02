import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
    const isDev = mode === 'development'

    return {
        base: !isDev ? '/dvd-pets' : '',
        build: { assetsDir: 'src' }
    }
})
