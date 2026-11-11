# Revisor

El revisor es un subagente que no participó en la construcción. Recibe el brief, la ficha de estilo y la web funcionando, y la mira como un director de arte exigente. Es el único subagente de todo el proceso.

## Texto para lanzar el revisor

Pasale esto, completando lo que está entre corchetes:

> Sos director de arte y revisás la web de un negocio real antes de publicarla. No la construiste vos. Tu trabajo es encontrar lo que la hace ver genérica o hecha con IA, y lo que está roto. Ser amable no ayuda: una nota alta que no corresponde perjudica a la persona.
>
> 1. Leé `BRIEF.md`, `ESTILO.md` y `src/contenido.ts` en [carpeta del proyecto].
> 2. Abrí la web en [dirección de la vista previa]. Mirala completa, bajando de a una pantalla, en escritorio (1440 de ancho) y en celular (375 de ancho). Sacá capturas.
> 3. Recorré la lista de `referencias/revisor.md` de la skill sites-pro. Para cada punto respondé **pasa** o **falla**, con una línea de evidencia (qué viste y en qué sección). Si no pudiste comprobar un punto, decí "sin comprobar": no lo des por bueno.
> 4. Devolvé: la tabla, la nota, los puntos bloqueantes que fallaron y los tres cambios que más mejorarían la web, en orden.
>
> No modifiques ningún archivo.

## La lista

Son 20 puntos. La nota es la cantidad que pasa, dividida por dos. "Sin comprobar" cuenta como falla.

### A. Identidad (lo que la hace única)
1. **Idea rectora visible.** Sin leer `ESTILO.md`, mirando la web se puede adivinar la idea rectora.
2. **Título propio.** El título del inicio no serviría para un competidor cambiándole el nombre.
3. **Firma.** El elemento firma de `ESTILO.md` está y se nota.
4. **Tipografía con decisión.** Las fuentes son las de `ESTILO.md`, hay contraste claro de tamaño entre títulos y texto, y no hay fuentes por defecto del sistema.
5. **Color con decisión.** Se usan solo los colores de la ficha, y el acento aparece poco y donde importa.

### B. Lista negra (señales de web genérica)
Cada punto pasa si **no** aparece.

6. Degradé violeta, azul o rosa de fondo o en textos, o brillos de neón sin motivo.
7. Fila de tres (o cuatro) tarjetas iguales con ícono arriba, título y dos líneas.
8. Inicio por defecto: píldora, título centrado, bajada, dos botones y una imagen debajo.
9. Emojis usados como íconos, o íconos de distintos estilos mezclados.
10. Frases de relleno: "Transformá tu…", "al siguiente nivel", "soluciones a medida", "calidad y confianza", "bienvenido a…", "experiencia única" y parecidas.
11. Todas las secciones con la misma estructura (título centrado, bajada, grilla) y el mismo ritmo.
12. Sombras suaves y esquinas redondeadas iguales en todo, sin que el estilo lo pida.
13. Testimonios, cifras, logos de clientes o sellos que no están en el brief.

### C. Datos (bloqueantes)
14. **Nada inventado.** Todo dato de la web (precio, horario, dirección, teléfono, nombre, cifra) está en `BRIEF.md` o en `material/`. *Bloqueante.*
15. **El contacto funciona.** El botón principal y los links de contacto llevan al lugar correcto (el WhatsApp abre el número del brief). *Bloqueante.*

### D. Celular y básicos
16. **Celular sin roturas.** A 375 de ancho nada se corta, se pisa ni obliga a deslizar de costado. *Bloqueante.*
17. **Se lee.** El texto tiene contraste suficiente sobre su fondo, incluido el texto sobre fotos, y en celular ningún texto queda demasiado chico.
18. **Movimiento con medida.** Hay una animación protagonista por sección, ninguna tapa el contenido ni hace esperar para leer, y con "reducir movimiento" todo se ve.
19. **Imágenes.** Cargan todas, no se ven pixeladas ni deformadas, y ninguna pesa más de 400 KB.
20. **Lo que ve Google.** La página tiene título, descripción, idioma correcto, imagen para compartir y un solo `h1`.

## Qué hacer con el resultado

- **Algún bloqueante falla:** se corrige antes que nada. No se publica así.
- **Nota menor a 8:** corregí los puntos que fallaron, empezando por los de A y B, y lanzá el revisor otra vez. Máximo tres vueltas.
- **Nota de 8 o más:** si quedan puntos que fallan, contale a la persona cuáles y dejá que decida si se corrigen.

A la persona mostrale la nota, qué se corrigió y qué queda, sin la tabla completa (salvo que la pida).
