/**
 * app.jsx — Componente raiz e inicialização do React
 * Monta o app e inicializa comportamentos globais (cursor, scroll reveal).
 */

const { useEffect } = React;

/* ── COMPONENTE RAIZ ─────────────────────────────────────── */
function App() {

  /* Cursor customizado — apenas desktop */
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring   = document.getElementById('cursor-ring');
    if (!cursor || !ring) return;

    // Detecta se é dispositivo de toque — não aplica cursor customizado
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    let ringX = 0, ringY = 0;
    let curX  = 0, curY  = 0;

    const onMove = (e) => {
      curX = e.clientX;
      curY = e.clientY;
      cursor.style.left = curX + 'px';
      cursor.style.top  = curY + 'px';
    };

    // Ring segue com pequeno delay para efeito suave
    const animateRing = () => {
      ringX += (curX - ringX) * 0.15;
      ringY += (curY - ringY) * 0.15;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    requestAnimationFrame(animateRing);

    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  /* Scroll reveal com IntersectionObserver */
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // observa uma vez só
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ── MONTAGEM DO REACT ───────────────────────────────────── */
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
