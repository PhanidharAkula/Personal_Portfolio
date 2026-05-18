import { useEffect } from "react";
import Lenis from "lenis";

// Fallback if the fixed header element isn't found in the DOM for any reason.
const FALLBACK_HEADER_HEIGHT = 80;

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let raf = 0;
    const animate = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    // Intercept all in-page anchor clicks and route them through Lenis with a
    // top offset that matches the actual rendered header height. The nav is
    // shorter on mobile than desktop, so a hardcoded offset would leave a
    // sliver of the previous section visible on phones.
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#" || href.length < 2) return;
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      e.preventDefault();
      const header = document.querySelector<HTMLElement>("header");
      const headerHeight = header
        ? header.getBoundingClientRect().height
        : FALLBACK_HEADER_HEIGHT;
      lenis.scrollTo(target, { offset: -headerHeight, duration: 1.1 });
      // keep the URL hash in sync
      window.history.replaceState(null, "", href);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
}
