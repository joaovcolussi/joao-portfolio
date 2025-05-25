// vite.config.js
import { defineConfig } from 'vite'; // Esta linha é opcional em JS, mas pode ser mantida.
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});

// Ou, se preferir remover o defineConfig (totalmente opcional):
/*
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [vue()],
};
*/