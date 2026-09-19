import { useEffect, useRef } from 'react';

/* Environmental backdrop: an architect's massing model at page scale.
   Fixed midground behind all content (see atmosphere.css). Pure CSS/SVG —
   no 3D or animation libraries. Parallax mutates `translate` directly
   (no React state) so it never triggers render cascades. */
export default function Atmosphere() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const layers = Array.from(el.querySelectorAll<HTMLElement>('[data-depth]'));
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      for (const layer of layers) {
        const depth = Number(layer.dataset.depth);
        layer.style.translate = `0 ${(-y * depth).toFixed(1)}px`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="atmo" ref={root} aria-hidden="true">
      <div className="atmo-glow" data-depth="0.02" />
      <div className="atmo-far" data-depth="0.04">
        <span className="far-slab far-a" />
        <span className="far-slab far-b" />
      </div>
      <div className="atmo-tower" data-depth="0.07">
        <span className="tower-face" />
        <span className="tower-edge" />
      </div>
      <div className="atmo-plates" data-depth="0.11">
        <span className="plate plate-a" />
        <span className="plate plate-b" />
        <span className="plate plate-c" />
      </div>
      <svg
        className="atmo-plan"
        data-depth="0.05"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMin slice"
        focusable="false"
      >
        <g fill="none" stroke="#134E4A">
          <rect x="880" y="60" width="520" height="380" opacity="0.16" strokeWidth="1.5" />
          <rect x="915" y="95" width="180" height="130" opacity="0.2" strokeWidth="1.5" />
          <rect x="1110" y="95" width="255" height="130" opacity="0.12" strokeWidth="1.5" />
          <rect x="915" y="240" width="450" height="165" opacity="0.12" strokeWidth="1.5" />
          <line x1="915" y1="305" x2="1365" y2="305" opacity="0.2" strokeWidth="1.5" strokeDasharray="10 8" />
          <line x1="1020" y1="95" x2="1020" y2="405" opacity="0.16" strokeWidth="1.5" />
          <line x1="120" y1="120" x2="420" y2="120" opacity="0.16" strokeWidth="1.5" />
          <line x1="120" y1="120" x2="120" y2="330" opacity="0.16" strokeWidth="1.5" />
          <line x1="120" y1="330" x2="420" y2="330" opacity="0.12" strokeWidth="1.5" strokeDasharray="10 8" />
          <g opacity="0.22" strokeWidth="1.5">
            <line x1="150" y1="150" x2="200" y2="150" />
            <line x1="150" y1="175" x2="200" y2="175" />
            <line x1="150" y1="200" x2="200" y2="200" />
            <line x1="230" y1="150" x2="280" y2="150" />
            <line x1="230" y1="175" x2="280" y2="175" />
            <line x1="230" y1="200" x2="280" y2="200" />
          </g>
          <rect x="1330" y="470" width="14" height="14" opacity="0.32" strokeWidth="1.5" />
          <circle cx="905" cy="470" r="5" opacity="0.34" strokeWidth="1.5" />
          <line x1="60" y1="700" x2="560" y2="700" opacity="0.13" strokeWidth="1.5" />
          <line x1="60" y1="730" x2="440" y2="730" opacity="0.1" strokeWidth="1.5" strokeDasharray="4 10" />
        </g>
        <line
          x1="880"
          y1="470"
          x2="1400"
          y2="470"
          stroke="#0F766E"
          strokeWidth="1.5"
          strokeDasharray="2 9"
          strokeLinecap="round"
          opacity="0.48"
        />
      </svg>
    </div>
  );
}
