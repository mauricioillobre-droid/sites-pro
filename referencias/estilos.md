# Estilos

Este paso decide si la web sale genérica. El orden es: idea rectora → elegir cuatro estilos → armar `estilos.html` → la persona elige → `ESTILO.md`.

## 1. La idea rectora

Antes de pensar en colores, escribí **una frase** que una algo propio del negocio con una decisión visual. Sale de la pregunta 2 del onboarding (lo que lo hace distinto), no del rubro.

- Genérica (no sirve): "Una heladería moderna y colorida."
- Con idea: "Hacen 12 sabores por día y cuando se acaban, se acaban → la web es la pizarra del día: cada sabor es un bloque de su color y los agotados se tachan."
- Genérica: "Un estudio contable confiable y profesional."
- Con idea: "Atienden solo a comercios del barrio y responden el mismo día → la web es un recibo: datos alineados, números claros, nada de adorno."

La prueba: si la frase sirve para cualquier negocio del mismo rubro, todavía no es una idea. Buscá el objeto, el lugar, el ritual o el número que solo este negocio tiene.

Los cuatro estilos son cuatro formas distintas de expresar **la misma idea**, no cuatro ideas ni cuatro paletas.

## 2. Cómo elegir los cuatro

Del catálogo de abajo, elegí cuatro que cumplan todo esto:

- Sirven para el negocio (mirá "va con" y "no va con") y respetan lo que dijo que le gusta y lo que no.
- Entre los cuatro hay al menos un fondo claro y uno oscuro o de color pleno.
- Hay al menos tres clases de tipografía distintas (con serifa, palo seco, de impacto).
- Las composiciones son distintas entre sí (alineado a la izquierda, bloques, pantalla completa, centrado).
- El primero es el que mejor calza con el rubro. El cuarto es la apuesta más audaz que siga siendo creíble.
- "Cine" solo si hay seis o más fotos reales buenas.

Si tiene colores de marca, esos colores reemplazan el acento de cada estilo; los neutros y la estructura del estilo se mantienen. Si no tiene marca, cada estilo trae su paleta y el nombre del negocio escrito con la tipografía de títulos funciona como logo.

## 3. Catálogo

Los valores son el punto de partida. Ajustalos a la idea rectora; no los copies tal cual en todos los proyectos.

### Revista
- **Va con:** restaurantes, alojamientos, estudios profesionales, marcas con historia para contar. **No va con:** negocios sin texto ni fotos.
- **Paleta:** papel `#F6F3EC`, tinta `#161514`, texto suave `#5E5A52`, línea `#D9D3C5`, un solo acento (por ejemplo óxido `#B4412B`).
- **Tipografías:** Fraunces para títulos (peso 300 a 400, una palabra en itálica) + Instrument Sans para texto.
- **Composición:** grilla de 12 columnas. Título enorme alineado a la izquierda que ocupa 8 a 10 columnas; el texto, en una columna angosta. Filetes de 1 px, secciones numeradas ("01"), fotos de proporciones mezcladas (una vertical junto a una apaisada) con pie de foto.
- **Firma:** una cabecera tipo revista arriba del título (ciudad, rubro, un dato real) y una palabra del título en itálica.
- **Movimiento:** el título entra línea por línea desde una máscara; las fotos se descubren con un recorte que se abre. Lo demás, casi quieto.
- **React Bits que le van:** MaskedHeading, FoldText, AccordionGallery, GradualBlur.

### Noche
- **Va con:** bares, barberías, tatuajes, tecnología, cursos, eventos. **No va con:** comida de día, salud, niños.
- **Paleta:** fondo `#0B0B0C`, superficie `#151517`, texto `#EDEDED`, texto suave `#9A9AA0`, línea `rgba(255,255,255,.08)`, un acento luminoso (ámbar `#FFB347`, verde `#7CFFB2`; **nunca violeta ni azul eléctrico**).
- **Tipografías:** Geist para todo + Geist Mono para etiquetas y datos.
- **Composición:** mucho negro vacío y un único foco de luz. Texto a la izquierda. Paneles con borde fino, sin sombras.
- **Firma:** una fuente de luz (un haz, un brillo detrás del producto) que reacciona al scroll.
- **Movimiento:** la luz se enciende o recorre la página; los títulos se "encienden" palabra por palabra al llegar.
- **React Bits que le van:** LightRays, SideRays, Beams, SpotlightCard, ScrollReveal.
- **Cuidado:** es el estilo más cercano a la "cara de IA". Un solo efecto de luz en toda la página. Prohibido: estrellas, partículas, brillo en cada tarjeta, texto con degradé.

### Cartel
- **Va con:** heladerías, hamburgueserías, cervecerías, ropa urbana, marcas jóvenes. **No va con:** abogados, salud, lujo.
- **Paleta:** fondo crema `#FFF4E0`, negro `#111111`, dos colores plenos fuertes (por ejemplo tomate `#FF4B2B` y amarillo `#FFC83D`).
- **Tipografías:** Bricolage Grotesque en peso 800 (o Anton) para títulos gigantes + Space Grotesk para texto.
- **Composición:** bloques con borde negro de 2 px y sombra dura desplazada (`4px 4px 0 #111`), sin desenfoque. Stickers girados unos grados, una marquesina de texto, botones gordos.
- **Firma:** un sticker o sello girado con un dato real del negocio, y la marquesina.
- **Movimiento:** seco y rápido, con rebote. Los stickers caen y rebotan; la marquesina acelera con el scroll; al pasar el cursor, la sombra del botón se aplasta.
- **React Bits que le van:** ScrollVelocity, StickerPeel, BounceCards, CurvedLoop.

### Oficio
- **Va con:** cafeterías, panaderías, pousadas, cerámica, florerías, productos hechos a mano. **No va con:** tecnología, finanzas.
- **Paleta:** crema `#F3ECE0`, tinta marrón `#2B211B`, texto suave `#6B5D52`, terracota `#B5532F`, oliva `#6B7048`.
- **Tipografías:** Young Serif (o Gloock) para títulos + Karla para texto. Caveat solo para una o dos notas manuscritas, nunca para párrafos.
- **Composición:** fotos con esquinas muy redondeadas y desiguales, foto y texto que se pisan un poco, textura de papel muy suave.
- **Firma:** un trazo hecho a mano (subrayado o círculo en SVG) que se dibuja sobre la palabra clave del título, y una nota manuscrita con flecha.
- **Movimiento:** lento y suave. El trazo se dibuja; las fotos se mueven apenas con el scroll; las entradas traen una rotación mínima.
- **React Bits que le van:** Noise (muy bajo), ScrollFloat, Masonry, Stack.

### Plano
- **Va con:** arquitectos, inmobiliarias, estudios contables y jurídicos, consultorios, gimnasios, talleres. **No va con:** negocios cuyo encanto es la calidez.
- **Paleta:** blanco `#FFFFFF` (o gris `#F2F2F0`), negro `#0A0A0A`, texto suave `#6A6A6A`, línea `#0A0A0A`, un color puro (rojo `#E10600` o azul `#0038FF`).
- **Tipografías:** una sola familia en dos pesos (Inter Tight, Hanken Grotesk o Schibsted Grotesk) + JetBrains Mono para datos.
- **Composición:** grilla estricta y visible, todo a la izquierda, números enormes, tablas y listas en lugar de tarjetas, mucho blanco, sin esquinas redondeadas ni sombras.
- **Firma:** los datos como protagonistas: lista numerada de servicios, horarios en tabla, dirección con coordenadas.
- **Movimiento:** preciso y corto. Líneas que se trazan, máscaras, números que cuentan (solo si el número es real). Al pasar el cursor, la fila invierte sus colores.
- **React Bits que le van:** Counter, AnimatedContent, LineSidebar, CursorGrid.

### Cine
- **Va con:** alojamientos, inmobiliarias, turismo, fotógrafos, restaurantes con buenas fotos. **Requisito:** seis o más fotos reales buenas (o video).
- **Paleta:** la foto es el color. Negro `#000000`, blanco `#FFFFFF`, texto suave `rgba(255,255,255,.7)`; sin acento, o uno tomado de las fotos.
- **Tipografías:** Cormorant (o Instrument Serif) fino para títulos + Manrope chico, en mayúsculas espaciadas, para etiquetas.
- **Composición:** foto a pantalla completa, título chico abajo a la izquierda, menú mínimo. Cada sección es una escena. Galería que avanza de costado.
- **Firma:** el plano de apertura a pantalla completa, con acercamiento lento y un título que entra tarde.
- **Movimiento:** lento (1,5 a 2,5 segundos). Acercamientos suaves, escenas fijas que cambian con el scroll, una foto que crece hasta ocupar la pantalla.
- **React Bits que le van:** ScrollExpand, GradualBlur, CircularGallery, MorphSlider.

### Vidriera
- **Va con:** heladerías, jugueterías, peluquerías, estudios creativos, cosas para chicos, eventos. **No va con:** servicios serios o caros.
- **Paleta:** cuatro colores plenos, uno por sección (por ejemplo rosa `#FF8FB1`, amarillo `#FFD23F`, menta `#9FE5C9`, azul `#2D3FE0`) + negro `#141414` para texto.
- **Tipografías:** Unbounded (o Syne) en negrita para títulos + Figtree para texto.
- **Composición:** formas grandes (círculos, arcos, píldoras) que recortan las fotos; texto grande; esquinas totalmente redondas; sin bordes ni sombras.
- **Firma:** el fondo cambia de color al pasar de una sección a otra.
- **Movimiento:** elástico. Las formas giran y crecen con el scroll; el color de fondo se funde entre secciones.
- **React Bits que le van:** RotatingText, CircularText, Stack, CurvedLoop.
- **Diferencia con Cartel:** Cartel es duro (bordes negros, sombras secas). Vidriera es blanda (sin bordes, todo redondo).

### Sereno
- **Va con:** hoteles boutique, joyerías, estética, spas, vinos, bodas, inmobiliaria de alta gama. **No va con:** negocios de precio accesible (promete algo que el negocio no es).
- **Paleta:** marfil `#F4F0E8` con tinta `#1C1A17`, o al revés sobre verde botella `#12261F` o bordó `#2A0F14`. Acento metálico apagado `#B08D57` solo en filetes y detalles.
- **Tipografías:** Bodoni Moda (o Playfair Display) para títulos + Hanken Grotesk liviana; etiquetas en mayúsculas muy espaciadas.
- **Composición:** centrada y simétrica (es el único estilo donde centrar todo está bien), márgenes enormes, poco texto, filetes finos.
- **Firma:** un monograma con la inicial del negocio, y el aire.
- **Movimiento:** muy lento. Fundidos, letras que se separan al entrar, líneas que crecen desde el centro.
- **React Bits que le van:** BlurText, FadeContent, ShinyText (apenas), ScrollExpand.

## 4. Reglas del inicio, para todos los estilos

- **El título dice algo que solo este negocio puede decir.** Prueba: si cambiando el nombre sirve para la competencia, reescribilo. Usá un dato concreto del brief.
- **En cinco segundos se entiende qué es y dónde está.**
- **Un solo botón principal**, con la acción del brief y un verbo concreto ("Reservar mesa", "Pedir por WhatsApp"). Nada de "Saber más" o "Empezar".
- **Prohibido el inicio por defecto:** etiqueta en píldora arriba, título centrado, bajada, dos botones iguales y una imagen abajo. Solo Sereno centra, y sin píldora ni doble botón.
- **Frases prohibidas:** "Transformá tu…", "Llevá tu… al siguiente nivel", "Bienvenido a…", "Soluciones a medida", "Calidad y confianza", "Pasión por…", "Tu aliado en…", "Experiencia única", "Innovación", y sus equivalentes en portugués.

## 5. La página `estilos.html`

Un solo archivo en la raíz del proyecto, que se abre en la vista previa (`/estilos.html`).

- Arriba, una barra fija con cuatro botones: A, B, C y D, con el nombre de cada estilo.
- Cada estilo ocupa **una pantalla de inicio completa más una franja de muestra** de otra sección (la lista de servicios, la galería o el contacto). Con el inicio solo no se nota la diferencia real entre estilos.
- **Todo con datos reales del brief:** nombre, título de verdad, botón de verdad, fotos de `material/` si hay. Nada de texto de relleno.
- Debajo de cada uno, dos líneas: por qué este estilo le va a su negocio y qué animación tendría.
- La animación protagonista del inicio funciona de verdad en cada uno (podés importar `gsap` desde `/src/lib/movimiento.ts` en un `<script type="module">`).
- Las tipografías se cargan con un `<link>` de Google Fonts solo en este archivo. En la web final se instalan (ver abajo).
- Cada estilo va dentro de su propio contenedor con sus variables de color, para que no se mezclen.
- Tiene que verse bien en celular.

Antes de mostrarla, abrila y mirala vos, en escritorio (1440 de ancho) y en celular (375). Si dos estilos se parecen, cambiá uno. Si alguno tiene algo de la lista negra de `revisor.md`, corregilo.

Errores que aparecen seguido al armarla, y que hay que buscar a propósito:

- **Un adorno tapa el título en celular.** Sellos, formas y notas con posición libre terminan encima del texto en pantallas angostas. En celular, movelos a una zona sin texto o achicalos.
- **Un signo de puntuación queda solo al empezar un renglón.** Si una palabra resaltada va seguida de coma o punto, el signo va dentro del mismo bloque que no se corta.
- **Una máscara recorta un trazo.** Si el título tiene un subrayado o dibujo que sobresale de la línea, no lo animes con máscara por líneas: usá una entrada sin recorte.
- **Texto oscuro sobre un bloque oscuro.** Cuando cada elemento tiene su propio color de fondo, definí también el color del texto para los fondos oscuros.
- **Una sección que se monta sobre la anterior tapa su último renglón.** Si usás margen negativo para superponer, sumá ese mismo espacio abajo en la sección tapada.
- **La página se ensancha en celular.** Comprobá que el ancho del contenido sea igual al de la pantalla.

Después preguntale cuál elige. Puede mezclar ("el B con los colores del A"); si mezcla, mostrale el resultado antes de seguir.

## 6. Después de elegir

1. Escribí `ESTILO.md` en el proyecto:

```markdown
# Estilo: [nombre]

## Idea rectora
La frase.

## Paleta
Cada color con su rol y su código.

## Tipografías
Títulos y texto, con pesos y tamaños base.

## Composición
Las reglas de este estilo en este proyecto.

## Firma
El elemento que hace reconocible la web.

## Movimiento
La animación protagonista de cada sección y el carácter general (lento, seco, elástico).

## No hacer
Lo que rompería este estilo.
```

2. Pasá la paleta y las fuentes a `src/styles/tokens.css`.
3. Instalá solo las tipografías elegidas desde Fontsource (por ejemplo `npm install @fontsource-variable/fraunces @fontsource-variable/instrument-sans`) e importalas en `src/main.tsx`. Las variables llevan el prefijo `@fontsource-variable/`; Instrument Serif, Young Serif, Gloock, Anton y Bebas Neue van con `@fontsource/`.
4. Borrá `estilos.html`.

## 7. Sin fotos

Revista, Plano, Cartel, Vidriera, Sereno y Noche funcionan solo con tipografía, color, formas y datos reales. Cine no.

- No pongas fotos de banco que simulen ser el local, los productos o el equipo.
- Si la persona quiere generar imágenes con IA, sirven para fondos, texturas e ilustraciones de ambiente. Nunca para mostrar un producto, un lugar o una persona como si fueran los suyos.
- Avisale que la web mejora mucho con seis fotos propias sacadas con el celular, y decile cuáles.
