# Github Pages Setting

1. Page Setup default Branch

2. Vite Deploy need add related folder

```
export default defineConfig({
  plugins: [vue(), vueJsx()],
  base: process.env.NODE_ENV === 'production' ? '/vue_animate_2024/' : '/',
});

```

3. Github Token add into Secrets

4. Workflow Permission change into _Read and write permissions_
