import { sveltekit } from '@sveltejs/kit/vite';

import { defineConfig } from 'vite';

// //vitejs.dev/config/
export default defineConfig({
  build: {
    polyfillDynamicImport: false,
    cssCodeSplit: false,
  },
  //resolve: {
  //  alias: {
  //    '@': path.resolve(__dirname, './src')
  //  },
  //  dedupe: ["svelte", "@fullcalendar/common", 'svelte-apexcharts']
  //},
  ssr: {
    noExternal: ['@carbon/charts', '@popperjs/core']
  },
  plugins: [sveltekit()],
  optimizeDeps: {
    include: ['svelte-apexcharts']
  }
});