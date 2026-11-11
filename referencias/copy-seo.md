# Textos y búsqueda

Leé esto si la web va a recibir anuncios o si la persona quiere que la encuentren en Google.

## Cómo escribir

- **Con las palabras del cliente, no las del rubro.** Usá las frases que la persona dijo en el onboarding. "Te lo llevamos caliente en 20 minutos" le gana a "servicio de entrega eficiente".
- **Concreto antes que lindo.** Un número, un lugar, un nombre de producto. Si una frase puede ir en la web de cualquier negocio, sacala.
- **Una idea por bloque**, con frases cortas. El título dice lo importante; la bajada lo completa, no lo repite.
- **El botón dice qué pasa al tocarlo:** "Reservar por WhatsApp", "Ver el menú", "Pedir presupuesto".
- **No prometas lo que el brief no respalda.** Nada de "el mejor", "número uno" o "garantizado" sin un dato detrás.
- Las frases prohibidas están en `estilos.md` (reglas del inicio) y en `revisor.md` (punto 10).

## Si recibe anuncios

- El título de la web repite la promesa del anuncio, con palabras parecidas. Quien toca un anuncio de "torta de cumpleaños en Florianópolis" tiene que leer eso mismo al llegar.
- El botón principal se ve sin bajar, y se repite al final.
- Una sola acción. Sacá del inicio todo link que lleve a otro lado.
- Preguntale a la persona qué dicen sus anuncios. Si todavía no los tiene, escribí el título pensando en la búsqueda principal.

## Si quiere que la encuentren en Google

- **Búsqueda principal:** qué + dónde ("heladería artesanal en Palermo"). Tiene que estar, dicha de forma natural, en el título de la página, en el `h1` o cerca, y en la descripción.
- **Título de la página** (`<title>`): hasta unos 60 caracteres. Qué es + dónde + nombre.
- **Descripción** (`meta description`): hasta unos 155 caracteres, con la búsqueda principal y el motivo para entrar.
- **Un solo `h1`**; los demás títulos en orden (`h2`, `h3`).
- **Fotos con texto alternativo** que describa lo que muestran.
- **Datos del negocio completos y en texto** (no en una imagen): nombre, dirección, teléfono y horarios, iguales a los de su ficha de Google.
- **Datos estructurados:** agregá en `index.html` un bloque JSON-LD de tipo `LocalBusiness` (o el subtipo que corresponda: `Restaurant`, `Hotel`, `Store`) solo con datos del brief.
- **Imagen para compartir** (`og:image`, 1200 × 630) con el nombre y el estilo de la web.
- Recomendale crear o completar su Perfil de Empresa en Google: para un negocio local pesa más que la web.

No prometas posiciones en Google. La web queda bien preparada; aparecer depende también del tiempo, la competencia y las reseñas.
