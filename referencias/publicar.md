# Publicar en Cloudflare Pages

El alojamiento en Cloudflare Pages es gratis y permite uso comercial. El dominio propio se paga aparte (alrededor de USD 10 por año, según la terminación). Decíselo así a la persona: no es "todo gratis".

## Antes de publicar

- El revisor dio 8 o más y no quedan bloqueantes.
- `npm run build` termina sin errores.
- La persona dijo que sí, que quiere publicarla ahora.

## Pasos

1. **Cuenta.** Si no tiene, que la cree en dash.cloudflare.com (la crea ella; vos no cargás contraseñas).
2. **Conectar.** Corré `npx wrangler login`. Se abre el navegador y la persona autoriza.
3. **Crear el proyecto** (solo la primera vez). El nombre va en minúsculas, sin espacios:
   ```
   npx wrangler pages project create NOMBRE --production-branch main
   ```
4. **Subir la web:**
   ```
   npm run build
   npx wrangler pages deploy dist --project-name NOMBRE --branch main
   ```
   Al terminar aparece la dirección `NOMBRE.pages.dev`. Abrila y comprobá que carga, en escritorio y en celular, y que el botón de contacto funciona.
5. **Guardar el nombre del proyecto** en `BRIEF.md`, para las próximas publicaciones.

## Dominio propio

Lo hace la persona en el panel de Cloudflare, con tu guía paso a paso:

- **Si no tiene dominio:** en el panel, "Registrar dominios", lo busca y lo compra. Queda conectado a su cuenta.
- **Si ya tiene uno en otro lado:** puede pasarlo a Cloudflare o apuntarlo; guiala según lo que muestre el panel.
- **Conectarlo a la web:** Workers & Pages → el proyecto → Dominios personalizados → agregar el dominio (y también `www`).

Después de conectar el dominio, actualizá en `index.html` la dirección canónica y la de la imagen para compartir, y volvé a publicar.

## Cambios después de publicar

Para cada cambio: se edita, se revisa en la vista previa y se repite el paso 4. Los textos se cambian en `src/contenido.ts`.

## Formulario de contacto

Esta skill resuelve el contacto con un botón de WhatsApp y un link de email, que no necesitan nada más. Un formulario que guarde datos necesita una función y una base; si la persona lo pide, avisale que es un paso extra y que no está cubierto acá.
