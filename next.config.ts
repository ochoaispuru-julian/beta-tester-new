import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Mueve la opción aquí, al nivel principal */
  devIndicators: {
    appIsrStatus: true,
  },
  // En las versiones más nuevas, se pone así:
  experimental: {
    // Deja esto vacío o con lo que tenías, pero saca 'allowedDevOrigins' de aquí
  },
  // PRUEBA ESTO:
  allowedDevOrigins: ['26.148.82.241'],
};

export default nextConfig;