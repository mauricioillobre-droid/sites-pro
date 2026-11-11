# Sites Pro

Una skill para Claude que arma la web de tu negocio con calidad de estudio de diseño, sin que sepas programar.

Te hace unas preguntas, te muestra cuatro estilos con los datos reales de tu negocio, construye la web con animaciones, la revisa contra una lista de señales de "web hecha con IA" y te ayuda a publicarla.

## Qué necesitás

- La app de escritorio de Claude, con un plan pago.
- Node.js (versión LTS), desde nodejs.org.
- Una cuenta gratis de Cloudflare, para publicar.

## Instalación

Abrí Claude en la pestaña Code y pegá esto:

> Instalá la skill Sites Pro desde https://github.com/mauricioillobre-droid/sites-pro en mi carpeta de skills de Claude (`~/.claude/skills/sites-pro`). Cuando termine, decime cómo empezar.

## Cómo se usa

Creá una carpeta vacía para tu web, abrila en Claude y escribí:

> Quiero crear mi web.

## Qué hace y qué no

Hace landings y webs de secciones para negocios: restaurantes, cafeterías, alojamientos, tiendas, estudios, servicios.

No hace tiendas con pago en línea, inicio de sesión ni paneles.

## Qué usa

Vite, React, Tailwind, GSAP y Lenis. Los componentes animados se instalan desde [React Bits](https://reactbits.dev) en tu proyecto; no vienen incluidos en este repositorio.
