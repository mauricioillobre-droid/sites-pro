# Animaciones

## Principios

1. **Una protagonista por sección.** Elegí qué se mueve y por qué; el resto entra simple o no se mueve. Si todo se anima, nada se destaca.
2. **El movimiento tiene el carácter del estilo.** Sereno es lento, Cartel es seco y rebota, Plano es corto y preciso. Está en `ESTILO.md`. No uses la misma entrada "sube y aparece" en todas las secciones.
3. **El movimiento cuenta algo.** Un precio que se tacha, un trazo que subraya la palabra importante, una foto que se abre. Evitá el movimiento decorativo.
4. **Reducir movimiento.** Toda animación va dentro de `conMovimiento(...)`. Sin movimiento, el contenido se ve completo.
5. **Celular primero.** Los efectos de cursor solo existen con mouse (`PUNTERO_FINO`). En celular, las animaciones pesadas (fondos WebGL, fijado largo) se simplifican o se sacan.
6. **Rendimiento.** Animá solo `transform` y `opacity`. Un solo fondo animado por página, como mucho.

## Lo que ya trae la plantilla (`src/lib/movimiento.ts`)

- `iniciarScrollSuave()`: scroll suave con Lenis, ya conectado en `App.tsx`.
- `conMovimiento(fn)`: corre `fn` solo si la persona acepta movimiento.
- `entrarPorLineas(el)`: título que entra línea por línea desde una máscara.
- `aparecerAlLlegar(elementos)`: entrada al llegar con el scroll.
- `gsap`, `ScrollTrigger`, `SplitText` ya registrados. `CON_MOVIMIENTO` y `PUNTERO_FINO` para consultas.

Usalos dentro de `useGSAP` (de `@gsap/react`) con `scope`, así se limpian solos:

```tsx
const raiz = useRef<HTMLElement>(null);
useGSAP(() => {
  conMovimiento(() => {
    entrarPorLineas(raiz.current!.querySelector("h1")!);
  });
}, { scope: raiz });
```

## Recetas

**Sección fija con avance de costado**
```ts
const pista = raiz.querySelector(".pista")!;
gsap.to(pista, {
  x: () => -(pista.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: { trigger: raiz, pin: true, scrub: 1, end: () => "+=" + pista.scrollWidth, invalidateOnRefresh: true },
});
```
En celular, reemplazala por una lista vertical o un carrusel con el dedo.

**Trazo a mano que se dibuja** (un `<path>` SVG debajo de la palabra)
```ts
const largo = trazo.getTotalLength();
gsap.fromTo(trazo, { strokeDasharray: largo, strokeDashoffset: largo },
  { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut", scrollTrigger: { trigger: trazo, start: "top 80%" } });
```

**Foto que se descubre**
```ts
gsap.fromTo(foto, { clipPath: "inset(100% 0 0 0)" },
  { clipPath: "inset(0% 0 0 0)", duration: 1.2, ease: "power3.inOut", scrollTrigger: { trigger: foto, start: "top 85%" } });
```

**Fondo que cambia de color entre secciones**
```ts
secciones.forEach((s) => ScrollTrigger.create({
  trigger: s, start: "top 55%", end: "bottom 55%",
  onToggle: (st) => st.isActive && gsap.to("body", { backgroundColor: s.dataset.color, duration: 0.6 }),
}));
```

**Palabras que se encienden con el scroll**
```ts
const partido = SplitText.create(titulo, { type: "words" });
gsap.fromTo(partido.words, { opacity: 0.18 },
  { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: titulo, start: "top 80%", end: "top 35%", scrub: true } });
```

## React Bits

React Bits (reactbits.dev) es una colección abierta de más de 200 componentes animados. Se instalan desde su fuente en el proyecto de la persona; **no se copian dentro de esta skill** (su licencia no permite redistribuirlos).

**Instalar uno:**
```
npx shadcn@latest add @react-bits/NOMBRE-TS-TW --yes
```
Queda en `src/componentes/NOMBRE.tsx`. Leé ese archivo para ver qué opciones acepta antes de usarlo. Instalá solo los que el estilo elegido necesita (dos o tres por web, no diez).

**Catálogo corto, por uso** (hay más en reactbits.dev):

| Uso | Componentes |
|---|---|
| Títulos que entran | SplitText, BlurText, MaskedHeading, FoldText, StrokeText, Shuffle |
| Texto con el scroll | ScrollReveal, ScrollFloat, ScrollVelocity (marquesina que acelera) |
| Texto que cambia o gira | RotatingText, TextType, CircularText, CurvedLoop, SplitFlapText |
| Números | Counter, CountUp (solo con números reales del brief) |
| Entradas genéricas | AnimatedContent, FadeContent |
| Galerías de fotos | Masonry, AccordionGallery, CircularGallery, MorphSlider, Stack, BounceCards |
| Scroll con efecto | ScrollStack (tarjetas que se apilan), ScrollExpand (foto que crece) |
| Tarjetas y cursor | SpotlightCard, TiltedCard, GlareHover, Magnet |
| Menús | PillNav, StaggeredMenu, FlowingMenu |
| Logos de clientes | LogoLoop (solo con logos reales) |
| Textura | Noise, GradualBlur |
| Fondos de luz (estilo Noche) | LightRays, SideRays, Beams |
| Fondos suaves | Waves, Threads, Silk, Grainient |
| Para Cartel | StickerPeel, PixelTransition |

**Usar con mucho cuidado.** Estos son los que, mal usados, le dan a una web "cara de IA":

- Fondos de aurora, galaxia, partículas, plasma, orbes y rayos: como mucho uno, solo si la idea rectora lo pide, nunca "porque queda lindo".
- Texto con degradé o brillo (GradientText, ShinyText), texto con glitch o descifrado (GlitchText, DecryptedText): solo si el negocio tiene que ver con eso.
- Cursores especiales (SplashCursor, BlobCursor, GhostCursor): distraen y en celular no existen.
- Grillas tipo bento con brillo (MagicBento): es la firma de las webs de IA.

Los fondos con WebGL pesan. En celular, reemplazalos por una imagen fija o un degradé simple.
