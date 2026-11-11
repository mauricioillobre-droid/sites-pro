// Base de movimiento de la web. Todo lo que se anima pasa por acá.
// Regla: con "reducir movimiento" activado en el sistema, nada se mueve; el contenido se ve igual.

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

export { gsap, ScrollTrigger, SplitText };

export const CON_MOVIMIENTO = "(prefers-reduced-motion: no-preference)";
export const PUNTERO_FINO = "(hover: hover) and (pointer: fine)";

/** Scroll suave, sincronizado con ScrollTrigger. Devuelve la función para apagarlo. */
export function iniciarScrollSuave(): () => void {
  if (!window.matchMedia(CON_MOVIMIENTO).matches) return () => {};
  const lenis = new Lenis({ autoRaf: false });
  lenis.on("scroll", ScrollTrigger.update);
  const tick = (t: number) => lenis.raf(t * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
  };
}

/**
 * Corre una animación solo si la persona acepta movimiento.
 * Se limpia sola al desmontar si se usa dentro de useGSAP.
 */
export function conMovimiento(animar: () => void): gsap.MatchMedia {
  const mm = gsap.matchMedia();
  mm.add(CON_MOVIMIENTO, animar);
  return mm;
}

/** Un título que entra línea por línea, saliendo de una máscara. */
export function entrarPorLineas(el: Element, opciones: gsap.TweenVars = {}) {
  const partido = SplitText.create(el, { type: "lines", mask: "lines" });
  return gsap.from(partido.lines, {
    yPercent: 110,
    duration: 1,
    ease: "power4.out",
    stagger: 0.09,
    ...opciones,
  });
}

/** Elementos que aparecen al llegar con el scroll. */
export function aparecerAlLlegar(elementos: gsap.TweenTarget, opciones: gsap.TweenVars = {}) {
  return gsap.from(elementos, {
    y: 32,
    autoAlpha: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.08,
    scrollTrigger: { trigger: elementos as gsap.DOMTarget, start: "top 85%" },
    ...opciones,
  });
}
