# GIF App

Buscador de GIFs con React, Vite y Giphy. Copia `.env.example` a `.env.local` y configura `VITE_GIPHY_API_KEY`; Vite incluye esta clave en el cliente. La consulta está en `src/helpers/getGifs.js`.
Ejecuta `npm ci` y `npm run dev`; abre la URL que indica Vite con la ruta `/gif-app/` configurada en `vite.config.js`.
Comprobaciones: `npm run build` y `npm run lint`; vista del build: `npm run preview`. No hay suite de pruebas configurada.
