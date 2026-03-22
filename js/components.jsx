/**
 * components.jsx — Componentes React do portfólio
 * Cada componente representa uma seção da página.
 */

const { useState, useEffect } = React;

/* ── NAVBAR ──────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">LAROCA.DEV</div>
      <ul className="nav-links">
        {['sobre', 'stack', 'projetos', 'experiencia', 'contato'].map(section => (
          <li key={section}>
            <a href={`#${section}`}>{section}</a>
          </li>
        ))}
      </ul>
      <div className="nav-status">AVAILABLE FOR HIRE</div>
    </nav>
  );
}

/* ── HERO ────────────────────────────────────────────────── */
function Hero() {
  const [typed, setTyped] = useState('');
  const fullText = 'Full-Stack Developer';

  // Efeito de digitação
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, ++index));
      if (index === fullText.length) clearInterval(interval);
    }, 65);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero">
      <div className="hero-scan" aria-hidden="true"></div>

      <div className="hero-content">
        <p className="hero-label">// initializing portfolio.exe</p>

        <h1
          className="hero-name"
          data-text="LUCAS LAROCA"
        >
          LUCAS LAROCA
        </h1>

        <p className="hero-role">
          {typed}
          <span className="cursor-blink" aria-hidden="true"></span>
        </p>

        <div className="hero-terminal" aria-label="Terminal de apresentação">
          <div><span className="cmd">$ </span><span className="val">whoami</span></div>
          <div>dev · professor · dj &nbsp;|&nbsp; Castro/PG, PR</div>
          <div><span className="cmd">$ </span><span className="val">cat stack.txt</span></div>
          <div>Python · JavaScript · React · Node.js · SQL · Docker · AWS</div>
          <div><span className="cmd">$ </span><span className="val">echo $STATUS</span></div>
          <div style={{ color: 'var(--green)' }}>
            open to remote opportunities ✓
            <span className="cursor-blink" aria-hidden="true"></span>
          </div>
        </div>

        <div className="hero-ctas">
          <a href="#projetos" className="btn-cyber">Ver Projetos</a>
          <a href="#contato" className="btn-outline">Entrar em Contato</a>
          <a
            href="https://github.com/LarocaLucas"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* SVG decorativo — escondido em mobile via CSS */}
      <div className="hero-deco" aria-hidden="true">
        <svg viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="258" height="258" stroke="rgba(0,245,255,0.15)" strokeWidth="1"/>
          <rect x="20" y="20" width="220" height="220" stroke="rgba(0,245,255,0.08)" strokeWidth="1"/>
          <circle cx="130" cy="130" r="85" stroke="rgba(0,245,255,0.12)" strokeWidth="1"/>
          <circle cx="130" cy="130" r="55" stroke="rgba(0,245,255,0.08)" strokeWidth="1" strokeDasharray="4 4"/>
          <circle cx="130" cy="130" r="8" fill="rgba(0,245,255,0.8)"/>
          <line x1="130" y1="0" x2="130" y2="260" stroke="rgba(0,245,255,0.04)" strokeWidth="1"/>
          <line x1="0" y1="130" x2="260" y2="130" stroke="rgba(0,245,255,0.04)" strokeWidth="1"/>
          <text
            x="130" y="136"
            textAnchor="middle"
            fontFamily="Orbitron"
            fontSize="13"
            fill="rgba(0,245,255,0.5)"
            fontWeight="700"
          >
            {'<LR/>'}
          </text>
          {/* Cantos decorativos */}
          <rect x="1" y="1" width="12" height="12" fill="var(--cyan)"/>
          <rect x="247" y="1" width="12" height="12" fill="var(--cyan)"/>
          <rect x="1" y="247" width="12" height="12" fill="var(--cyan)"/>
          <rect x="247" y="247" width="12" height="12" fill="var(--cyan)"/>
        </svg>
      </div>
    </section>
  );
}

/* ── SOBRE ───────────────────────────────────────────────── */
function Sobre() {
  const infoRows = [
    ['nome',       'Lucas Laroca Campos'],
    ['localização','Castro / Ponta Grossa — PR'],
    ['disponível', 'Remoto · Híbrido'],
    ['formação',   'Eng. Software — UNICESUMAR (2027)'],
    ['inglês',     'Avançado — leitura técnica e comunicação'],
    ['github',     <a href="https://github.com/LarocaLucas" target="_blank" rel="noopener noreferrer">github.com/LarocaLucas</a>],
    ['linkedin',   <a href="https://linkedin.com/in/lucas-laroca-campos-3a80661b9" target="_blank" rel="noopener noreferrer">lucas-laroca-campos</a>],
    ['e-mail',     <a href="mailto:lucas.laroca.campos@gmail.com">lucas.laroca.campos@gmail.com</a>],
  ];

  const stats = [
    { num: '5+',  label: 'Anos em TI' },
    { num: '6+',  label: 'Projetos entregues' },
    { num: '200+',label: 'Alunos formados' },
    { num: '10+', label: 'Anos como DJ' },
  ];

  return (
    <section id="sobre">
      <div className="section-header reveal">
        <p className="section-tag">about_me.json</p>
        <h2 className="section-title">Quem <span>sou eu</span></h2>
      </div>

      <div className="sobre-grid">
        <div className="sobre-text reveal">
          <p>
            Desenvolvedor <span>Full-Stack Júnior</span> com mais de 5 anos de experiência prática em ensino técnico de programação, suporte de infraestrutura e desenvolvimento de soluções web reais.
          </p>
          <p>
            Combinação incomum: sei construir do servidor à interface, entendo de <span>redes e infraestrutura</span>, e tenho comunicação afiada por anos ensinando tecnologia para centenas de alunos.
          </p>
          <p>
            Cursando <span>Engenharia de Software</span> e expandindo portfólio com projetos reais para clientes. Buscando oportunidade remota para crescer como desenvolvedor.
          </p>

          <div className="sobre-stats">
            {stats.map(s => (
              <div key={s.label} className="stat-card">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sobre-info reveal">
          {infoRows.map(([key, val]) => (
            <div key={key} className="info-row">
              <span className="info-key">{key}:</span>
              <span className="info-val">{val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── STACK ───────────────────────────────────────────────── */
function Stack() {
  return (
    <section id="stack">
      <div className="section-header reveal">
        <p className="section-tag">tech_stack.config</p>
        <h2 className="section-title">Minhas <span>Tecnologias</span></h2>
      </div>

      <div className="stack-grid">
        {SKILLS.map((skill, i) => (
          <div
            key={skill.name}
            className="skill-card reveal"
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            <div className="skill-icon" aria-hidden="true">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
                role="meter"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── PROJETOS ────────────────────────────────────────────── */
function Projects() {
  return (
    <section id="projetos">
      <div className="section-header reveal">
        <p className="section-tag">projects/</p>
        <h2 className="section-title">Projetos <span>Reais</span></h2>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project, i) => (
          <article
            key={project.id}
            className="project-card reveal"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            {/* Imagem / placeholder */}
            <div
              className="project-img"
              style={{ borderBottom: `2px solid ${project.color}22` }}
            >
              <div
                className="project-placeholder"
                style={{ color: `${project.color}33` }}
              >
                {project.placeholder}
              </div>
              {project.live && (
                <div className="project-img-overlay">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber"
                    style={{ fontSize: '0.6rem', padding: '0.5rem 1rem' }}
                  >
                    LIVE DEMO
                  </a>
                </div>
              )}
            </div>

            <div className="project-body">
              {/* Tags de tecnologia */}
              <div className="project-tags">
                {project.tags.map((tag, j) => (
                  <span
                    key={tag}
                    className={`tag ${project.tagStyle[j] === 'green' ? 'tag--green' : ''}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-links">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  ⌥ GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    ↗ Live
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ── EXPERIÊNCIA ─────────────────────────────────────────── */
function Experience() {
  return (
    <section id="experiencia">
      <div className="section-header reveal">
        <p className="section-tag">experience.log</p>
        <h2 className="section-title">Minha <span>Trajetória</span></h2>
      </div>

      <div className="timeline">
        {EXPERIENCE.map((exp, i) => (
          <div
            key={i}
            className="timeline-item reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <time className="timeline-date">{exp.date}</time>
            <h3 className="timeline-title">{exp.title}</h3>
            <p className="timeline-company">{exp.company}</p>
            <ul className="timeline-items">
              {exp.items.map((item, j) => (
                <li key={j} className="timeline-item-li">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── CONTATO ─────────────────────────────────────────────── */
function Contact() {
  const links = [
    {
      href: 'mailto:lucas.laroca.campos@gmail.com',
      icon: '✉',
      label: 'E-mail',
      value: 'lucas.laroca.campos@gmail.com',
      external: false,
    },
    {
      href: 'https://wa.me/5542998650294?text=Olá%20Lucas!%20Vi%20seu%20portfólio.',
      icon: '📱',
      label: 'WhatsApp',
      value: '(42) 99865-0294',
      external: true,
    },
    {
      href: 'https://github.com/LarocaLucas',
      icon: '⌥',
      label: 'GitHub',
      value: 'github.com/LarocaLucas',
      external: true,
    },
    {
      href: 'https://linkedin.com/in/lucas-laroca-campos-3a80661b9',
      icon: 'in',
      label: 'LinkedIn',
      value: 'lucas-laroca-campos',
      external: true,
    },
  ];

  return (
    <section id="contato">
      <div className="section-header reveal">
        <p className="section-tag">contact.sh</p>
        <h2 className="section-title">Vamos <span>Conversar</span></h2>
      </div>

      <div className="contato-grid">
        <div className="reveal">
          <p className="contato-desc">
            Aberto a oportunidades remotas como Desenvolvedor Full-Stack Júnior ou Analista de Suporte em TI. Também aceito projetos freelancer de sites e sistemas.
          </p>
          <div className="contato-links">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="contato-link"
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                <div className="contato-link-icon">{link.icon}</div>
                <div>
                  <strong>{link.label}</strong>
                  <span>{link.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Terminal de disponibilidade */}
        <div className="contato-terminal reveal">
          <div className="ct-line">
            <span className="ct-prompt">lucas@dev:~$</span>
            <span className="ct-cmd">cat disponibilidade.txt</span>
          </div>
          <p className="ct-out">✓ Remoto — disponível imediatamente</p>
          <p className="ct-out">✓ Híbrido — Castro / Ponta Grossa, PR</p>
          <p className="ct-out">✓ Freelancer — projetos web e sistemas</p>
          <br />
          <div className="ct-line">
            <span className="ct-prompt">lucas@dev:~$</span>
            <span className="ct-cmd">cat pretensao.txt</span>
          </div>
          <p className="ct-out">Dev Júnior / Analista TI · Remoto CLT ou PJ</p>
          <br />
          <div className="ct-line">
            <span className="ct-prompt">lucas@dev:~$</span>
            <span className="ct-cmd">echo "pronto para o próximo nível"</span>
          </div>
          <p className="ct-out" style={{ color: 'var(--green)' }}>
            pronto para o próximo nível ✓
          </p>
          <div className="ct-line">
            <span className="ct-prompt">lucas@dev:~$</span>
            <span className="cursor-blink" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ──────────────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>© {year} Lucas Laroca</p>
      <p>Built with <span>React</span> · Deployed on <span>GitHub Pages</span></p>
      <p>Castro, PR — Brasil</p>
    </footer>
  );
}
