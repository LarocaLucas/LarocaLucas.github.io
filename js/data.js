/**
 * data.js — Dados do portfólio
 * Edite este arquivo para atualizar projetos, skills e experiência.
 */

/* eslint-disable no-unused-vars */

const PROJECTS = [
  {
    id: 1,
    title: 'Door PG',
    desc: 'Site institucional para balada com countdown de lançamento, galeria de fotos com download, reservas segmentadas via WhatsApp e domínio próprio doorpg.com.br.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    tagStyle: ['', '', ''],
    color: '#00f5ff',
    live: 'https://doorpg.com.br',
    repo: 'https://github.com/LarocaLucas/door_pg',
    placeholder: 'DOOR',
  },
  {
    id: 2,
    title: 'Andreia Decorações',
    desc: 'Site elegante para decoradora de eventos com galeria por álbuns rotativos, formulário integrado ao WhatsApp e identidade visual luxury dourado/off-white.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    tagStyle: ['', '', ''],
    color: '#c8a96e',
    live: 'https://larocalucas.github.io/andreia-decoracoes',
    repo: 'https://github.com/LarocaLucas/andreia-decoracoes',
    placeholder: 'AD',
  },
  {
    id: 3,
    title: 'DJ Laroca',
    desc: 'Site oficial com slideshow hero, galeria mosaico com 109 fotos, vídeo YouTube Shorts integrado e estética underground neon/roxo.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    tagStyle: ['', '', ''],
    color: '#9b30ff',
    live: 'https://larocalucas.github.io/djlaroca',
    repo: 'https://github.com/LarocaLucas/djlaroca',
    placeholder: 'DJ',
  },
  {
    id: 4,
    title: 'DJ Reinaldo',
    desc: 'Site institucional editorial para DJ com 30+ anos de carreira. Layout split grafite/dourado, galeria masonry com 26 fotos e timeline de eventos.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    tagStyle: ['', '', ''],
    color: '#c8a96e',
    live: 'https://larocalucas.github.io/djreinaldo',
    repo: 'https://github.com/LarocaLucas/djreinaldo',
    placeholder: 'DR',
  },
  {
    id: 5,
    title: 'HelpDesk CLI',
    desc: 'Sistema de tickets de suporte em Python + SQLite com CRUD completo, fluxo de status controlado, relatórios por prioridade/setor e interface Rich no terminal.',
    tags: ['Python', 'SQLite', 'CLI'],
    tagStyle: ['green', 'green', 'green'],
    color: '#00ff88',
    live: null,
    repo: 'https://github.com/LarocaLucas/helpdesk-cli',
    placeholder: 'HD',
  },
  {
    id: 6,
    title: 'AWS Dev Environment',
    desc: 'Ambiente de desenvolvimento completo na AWS (EC2) com Ubuntu 24.04, XFCE, noVNC, Docker, VS Code e Node.js. Totalmente documentado e replicável.',
    tags: ['AWS', 'Docker', 'Linux'],
    tagStyle: ['green', 'green', 'green'],
    color: '#ffd60a',
    live: null,
    repo: 'https://github.com/LarocaLucas/aws-dev-environment',
    placeholder: 'AWS',
  },
];

const SKILLS = [
  { name: 'JavaScript', icon: '⚡', level: 80 },
  { name: 'Python',     icon: '🐍', level: 75 },
  { name: 'React',      icon: '⚛️', level: 65 },
  { name: 'Node.js',    icon: '🟩', level: 60 },
  { name: 'HTML5',      icon: '🌐', level: 90 },
  { name: 'CSS3',       icon: '🎨', level: 85 },
  { name: 'SQL',        icon: '🗃️', level: 70 },
  { name: 'Git',        icon: '🔀', level: 80 },
  { name: 'Docker',     icon: '🐳', level: 55 },
  { name: 'AWS',        icon: '☁️', level: 50 },
  { name: 'Linux',      icon: '🐧', level: 65 },
  { name: 'MikroTik',   icon: '🔌', level: 70 },
];

const EXPERIENCE = [
  {
    date: 'FEV 2024 — NOV 2024',
    title: 'Professor de Desenvolvimento de Sistemas',
    company: 'NRE Ponta Grossa — Colégio Vespasiano · Castro, PR',
    items: [
      'Disciplinas técnicas: Python, JavaScript, SQL e redes para turmas de até 35 alunos',
      'Conduzi projetos do início ao deploy com Git e GitHub como ferramentas de aula',
    ],
  },
  {
    date: 'JUN 2023 — JAN 2024',
    title: 'Responsável pela Área de TI',
    company: 'TECNOLIMP / Colégio Vespasiano · Castro, PR',
    items: [
      'Infraestrutura completa: redes, servidores locais e suporte helpdesk',
      'Melhorias que otimizaram laboratórios e processos administrativos',
    ],
  },
  {
    date: 'JAN 2023 — JAN 2024',
    title: 'Monitor de Aulas — Desenvolvimento de Sistemas',
    company: 'UNICESUMAR · Castro, PR',
    items: [
      'Suporte em aulas práticas de Python, C e JavaScript para turmas de graduação',
      'Orientação individual em lógica e versionamento com Git',
    ],
  },
  {
    date: 'FEV 2024 — JUL 2024',
    title: 'Professor de Informática e Desenvolvimento de Jogos',
    company: 'CENAIC · Castro, PR',
    items: [
      'Unity, Construct e Scratch do ensino básico ao técnico',
      'Projetos práticos estimulando pensamento computacional',
    ],
  },
  {
    date: 'JUL 2021 — AGO 2022',
    title: 'Professor de Robótica e Programação',
    company: 'CodeBuddy · Castro, PR',
    items: [
      'Robótica educacional com Arduino e LEGO Education',
      '2º lugar — Robô Sumo, SESI Salão da Robótica (2017)',
    ],
  },
];
