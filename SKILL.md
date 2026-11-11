---
name: sites-pro
description: Crea la página web de un negocio (landing o web de secciones) con calidad de estudio de diseño, para personas que no saben programar. Guía un onboarding de preguntas, arma el brief, muestra cuatro estilos con los datos reales del negocio, construye la web sección por sección con animaciones, la revisa contra una lista de señales de "web genérica" y la publica en Cloudflare Pages. Usar siempre que la persona diga que quiere crear, armar, hacer o rediseñar su página web, su landing o el sitio de su negocio ("quiero crear mi web", "haceme una landing para mi cafetería", "necesito una página para mi pousada", "quero criar meu site"), o cuando escriba /sites-pro.
---

# Sites Pro

Hacés la web de un negocio real para alguien que no programa. El trabajo tiene un solo criterio de éxito: **que la primera versión no parezca hecha con IA**. Una web prolija pero genérica es un fracaso de esta skill, aunque funcione.

Una web sale genérica por tres motivos, y cada paso de abajo existe para evitar uno:

1. **No hay datos reales**, y el hueco se llena con frases de relleno. → Onboarding y brief.
2. **No hay una decisión de diseño**, y se cae en lo de siempre (fuente por defecto, todo centrado, tres tarjetas, degradé violeta). → Idea rectora y cuatro estilos.
3. **Nadie la mira con ojo crítico** antes de entregarla. → Revisor.

## Cómo hablarle a la persona

- En su idioma (español o portugués), con frases cortas y sin tecnicismos. Decí "la carpeta del proyecto", no "el directorio raíz"; "publicar", no "deployar".
- Una pregunta por vez. Nunca una lista de ocho preguntas juntas.
- Antes de cada paso, una línea que diga qué vas a hacer y cuánto falta ("Paso 3 de 6: te muestro cuatro estilos").
- Cuando algo falle, explicá qué pasó y qué hacés para arreglarlo. No le pegues el error crudo.

## Reglas que no se rompen

- **Nunca inventes un dato.** Precios, horarios, direcciones, teléfonos, testimonios, años de trayectoria, cantidad de clientes, premios: si no está en el brief o en `material/`, preguntá. Si la persona no lo tiene, esa parte no va en la web.
- **Ni una línea de código de la web antes de que apruebe el brief.**
- **Los textos y datos viven en `src/contenido.ts`** y los colores y fuentes en `src/styles/tokens.css`. Las secciones no llevan colores ni fuentes escritas a mano.
- **Una animación protagonista por sección.** El resto acompaña o no se mueve.
- **Con "reducir movimiento" activado, nada se mueve** y todo el contenido se ve igual.
- **No construís tiendas con pago, login ni paneles.** Si lo piden, decí que esta skill hace la web y el contacto, y que la tienda es otro proyecto.
- **Publicar es decisión de la persona.** Preguntá antes de subir nada a internet.

## Los seis pasos

Seguilos en orden. Si la persona vuelve otro día, leé `BRIEF.md` y `ESTILO.md` del proyecto para saber en qué paso quedó.

### Paso 0. Preparar la carpeta

1. Verificá que Node esté instalado (`node -v`). Si no está, guiá la instalación desde nodejs.org (versión LTS) y esperá a que la persona confirme.
2. Copiá el contenido de la carpeta `plantilla/` de esta skill a la carpeta del proyecto (incluida `.claude/launch.json`, que sirve para la vista previa) y corré `npm install`.
3. Mostrale dónde está la carpeta `material/` y para qué es.

### Paso 1. Onboarding

Leé `referencias/onboarding.md` y hacé las preguntas, de a una. Antes de preguntar algo, fijate si la respuesta ya está en `material/`.

### Paso 2. Brief

Escribí `BRIEF.md` en la carpeta del proyecto con la estructura que está al final de `referencias/onboarding.md`. Mostrale un resumen corto y pedile que lo apruebe o corrija. Todo lo que no sepas va en una lista "Falta definir", no con un valor supuesto.

Si en el onboarding dijo que la web recibe anuncios o quiere aparecer en Google, leé también `referencias/copy-seo.md` antes de escribir los textos.

### Paso 3. Cuatro estilos

Leé `referencias/estilos.md` completo. Ahí está cómo encontrar la idea rectora, el catálogo de estilos, cómo elegir cuatro y cómo armar la página `estilos.html` para que la persona compare.

Este es el paso que decide si la web sale genérica. No lo apures ni lo resuelvas con cuatro variantes de color de un mismo diseño.

Cuando elija, escribí `ESTILO.md` (la ficha del estilo elegido), pasá los valores a `src/styles/tokens.css`, instalá las tipografías y borrá `estilos.html`.

### Paso 4. Construir

Leé `referencias/animaciones.md`.

1. Proponé el mapa de secciones (cuáles y en qué orden) según el brief, y esperá el OK.
2. Cargá todos los textos en `src/contenido.ts`.
3. Construí **una sección por vez** en `src/secciones/`, empezando por el inicio. Después de cada una, abrí la vista previa, mirala vos en escritorio y en celular (375 px de ancho), corregí lo que veas y recién ahí mostrásela.
4. Las fotos van optimizadas (WebP o AVIF, ancho máximo 1920 px, las de abajo con carga diferida). Si no hay fotos, leé la sección "Sin fotos" de `referencias/estilos.md`.

### Paso 5. Revisor

Leé `referencias/revisor.md`. Lanzá **un** subagente revisor con el texto que está ahí. El revisor no construyó la web, y por eso ve lo que vos ya no ves.

Si la nota es menor a 8, corregí los puntos que fallaron y volvé a revisar (máximo tres vueltas; si no llega, contale a la persona qué quedó pendiente y por qué). Si falla un punto bloqueante, no se publica.

Mostrale a la persona la nota y qué se corrigió, en pocas líneas.

### Paso 6. Publicar

Leé `referencias/publicar.md`. Preguntá antes de publicar.

## Cuidar el consumo

La persona paga su propio plan. Para no gastarlo:

- Leé cada archivo de `referencias/` recién cuando llegues a su paso.
- No uses subagentes salvo el revisor del paso 5.
- No vuelvas a leer archivos que acabás de escribir.
- No instales componentes ni tipografías "por si acaso": solo lo que el estilo elegido usa.
