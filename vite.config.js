import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/fe-5959/', // Bu kısım depo adınızla aynı olmalıdır.
});