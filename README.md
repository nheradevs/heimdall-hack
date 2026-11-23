# Heimdall Hack 2025

Landing page estática para un evento en línea de ciberseguridad (demo de portafolio).
HTML, CSS y JS puros, sin frameworks ni dependencias externas.

## Características

- Un solo lenguaje de marcado con Español/Inglés (botón de cambio de idioma, datos ES embebidos + EN en `js/main.js`)
- Fuentes autohospedadas (Archivo y Public Sans, woff2 variables, sin CDNs de terceros ni cookies)
- Formulario de demostración deshabilitado (el sitio no recoge datos)
- SEO: meta description, Open Graph, Twitter Card, `robots.txt`, `sitemap.xml`
- Cabeceras de seguridad vía `_headers` (CSP, nosniff, referrer policy)
- Elementos SVG en línea para imágenes decorativas, con `alt` descriptivo y `alt="" + aria-hidden` para imágenes decorativas
- Respeta `prefers-reduced-motion`

## Estructura

```
index.html        página única de destino (scroll a secciones por id)
css/site.css      estilos (paleta: violetas noche, amaranth, alabastro)
js/main.js        navegación, transiciones, parallax, menú móvil, i18n
assets/           imágenes (fotos de Unsplash y avatares de demostración)
fonts/            fuentes autohospedadas (licencia OFL)
_headers          cabeceras HTTP para Cloudflare Pages
robots.txt        reglas de rastreo
sitemap.xml       mapa del sitio
```

## Despliegue (Cloudflare Pages)

1. Conectar el repositorio en Pages
2. Build settings: Framework preset **None**, Build command: *(vacío)*, Output directory: **/**
3. Dominio personalizado: reemplazar `https://heimdallhack.pages.dev` en `index.html` (`og:url`, `og:image`, `twitter:image`) y en `robots.txt`/`sitemap.xml`

## Créditos

- Sitio por Karen Gil: https://nheradev.com
- Fotos: Unsplash (Egor Komarov, Milad Fakurian, Mohammad Rahmani, Sergey Zolkin, Christina @ wocintechchat.com, Christian Wiediger)
