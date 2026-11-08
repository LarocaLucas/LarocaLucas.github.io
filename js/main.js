// Portfólio Lucas Laroca: projetos, filtros e animações da página (sem dependências).
(() => {
  "use strict";
  const doc = document.documentElement;
  doc.classList.add("js");
  const semMovimento = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const GH = "https://github.com/LarocaLucas";

  // cat: sites | sistemas | 3d | ferramentas | aberto. img = img/<nome>.webp (1280×720).
  const PROJETOS = [
    { nome: "Sys Door", tipo: "Sistema · Balada", cat: ["sistemas"], img: "sysdoor",
      texto: "Sistema da Door PG: venda de ingressos com Pix, validador na portaria, cortesias, listas e fechamento financeiro dos caixas. Termos e privacidade dentro da LGPD.",
      tags: ["React 19", "Node", "Prisma", "Docker"], extra: "Uso interno" },
    { nome: "Mapa 3D da Door", tipo: "3D · Casa noturna", cat: ["3d"], img: "door-mapa",
      texto: "Planta 3D editável da Door: bistrôs, camarotes, palco e bar, cenas salvas pela equipe, tour animado e modo reserva embutido na venda de ingressos.",
      tags: ["three.js", "Cloudflare Pages", "KV"], extra: "Uso interno" },
    { nome: "Central laroca.dev", tipo: "Sistema · Produtividade", cat: ["sistemas"], img: "central",
      texto: "Meu centro de operações: galeria e agenda dos sites dos clientes direto no R2, tarefas com lembrete no Windows e no celular, e postagens agendadas no YouTube e no TikTok.",
      tags: ["Workers", "D1", "R2", "React", "Electron"], extra: "Uso interno" },
    { nome: "Door PG", tipo: "Site · Balada", cat: ["sites"], img: "door",
      texto: "Site da balada com agenda da semana, galeria de fotos com download por álbum e reservas. Fotos e agenda vêm da Central, sem mexer em código.",
      tags: ["HTML/CSS/JS", "Cloudflare R2"], links: [["Ver no ar", "https://doorpg.com.br"], ["Código", `${GH}/door_pg`]] },
    { nome: "DJ Laroca", tipo: "Site · Música", cat: ["sites"], img: "djlaroca",
      texto: "Site oficial com logo revelada em tinta, agenda de shows sempre atualizada e galeria que troca as fotos sozinha.",
      tags: ["HTML/CSS/JS", "Canvas", "R2"], links: [["Ver no ar", "https://djlaroca.com.br"], ["Código", `${GH}/djlaroca-v3`]] },
    { nome: "DJ Reinaldo", tipo: "Site · Institucional", cat: ["sites"], img: "djreinaldo",
      texto: "Site editorial em grafite e dourado para um DJ com mais de 30 anos de carreira, com galeria viva alimentada pela Central.",
      tags: ["HTML/CSS/JS", "R2"], links: [["Ver no ar", "https://djreinaldo.com.br"], ["Código", `${GH}/djreinaldo`]] },
    { nome: "Arranca Toco", tipo: "Site · Evento", cat: ["sites"], img: "arrancatoco",
      texto: "Página do evento com contagem regressiva, ingressos por lote e localização.",
      tags: ["HTML/CSS/JS"], links: [["Ver no ar", "https://arrancatocopg.com.br"], ["Código", `${GH}/arrancatoco`]] },
    { nome: "laroca.dev", tipo: "Site · Empresa", cat: ["sites"], img: "larocadev",
      texto: "Site da minha empresa, com serviços, cases e páginas legais (privacidade, termos e exclusão de dados) dentro da LGPD.",
      tags: ["React", "TypeScript", "Tailwind", "Motion"], links: [["Ver no ar", "https://laroca.dev"], ["Código", `${GH}/laroca-dev-v2`]] },
    { nome: "Sistema Moda", tipo: "Sistema · Varejo", cat: ["sistemas"], img: "moda", selo: "Em construção",
      texto: "Para lojas de roupas e calçados: PDV, estoque por grade de tamanho e cor, trocas e NFC-e, do caixa ao fechamento. Multiempresa com isolamento por inquilino no banco.",
      tags: ["NestJS", "Next.js", "PostgreSQL", "Drizzle"] },
    { nome: "Sistema Odonto", tipo: "Sistema · Saúde", cat: ["sistemas"], img: "odonto", selo: "Em construção",
      texto: "Para clínicas e harmonização: agenda, prontuário, mapa facial com lote do produto, termos assinados e orçamentos com aceite por link.",
      tags: ["NestJS", "Next.js", "PostgreSQL"] },
    { nome: "Sistema Revenda", tipo: "Sistema · Veículos", cat: ["sistemas"], img: "revenda", selo: "Em construção",
      texto: "Gestão de revenda de veículos: leads, propostas, preparação, financeiro e o site da loja ligado ao estoque, com cinco modelos de layout.",
      tags: ["NestJS", "Next.js", "PostgreSQL"] },
    { nome: "Mapas 3D", tipo: "3D · Eventos", cat: ["3d"], img: "mapas3d",
      texto: "Construtor 3D de eventos, festas e teatro: paredes, áreas, palco, som, luz e cenário, com lista de itens em PDF para o orçamento.",
      tags: ["three.js", "Cloudflare"], extra: "Uso interno" },
    { nome: "Calculadora de preços", tipo: "Ferramenta · Negócio", cat: ["ferramentas"], img: "calculadora",
      texto: "Precificação de sistemas e sites com custos de hospedagem, margens e pisos, e uma proposta pronta para o cliente em um clique.",
      tags: ["HTML/CSS/JS"], extra: "Uso interno" },
    { nome: "Teyun Q-24", tipo: "Ferramenta · Áudio", cat: ["ferramentas"], img: "teyun",
      texto: "Controle por software da minha placa de som: troca fone e caixas pela bandeja do Windows, mixer por aplicativo e controle pelo celular com PIN e QR.",
      tags: ["Python", "Windows"], extra: "Uso pessoal" },
    { nome: "HelpDesk CLI", tipo: "Código aberto · Python", cat: ["aberto"], img: "helpdesk",
      texto: "Tickets de suporte no terminal: CRUD completo, fluxo de status controlado e relatórios por prioridade e setor.",
      tags: ["Python", "SQLite", "Rich"], links: [["Código", `${GH}/helpdesk-cli`]] },
    { nome: "AWS Dev Environment", tipo: "Código aberto · Infra", cat: ["aberto"], img: "aws",
      texto: "Ambiente de desenvolvimento completo numa EC2: Ubuntu, desktop no navegador com noVNC, Docker, VS Code e Node, documentado para repetir.",
      tags: ["AWS", "Docker", "Linux"], links: [["Código", `${GH}/aws-dev-environment`]] },
  ];

  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt) n.textContent = txt; return n; };

  const grade = document.getElementById("grade-projetos");
  PROJETOS.forEach((p) => {
    const li = el("li", "cartao");
    li.dataset.cat = p.cat.join(" ");
    const midia = el("div", "cartao__midia");
    const im = el("img");
    im.src = `img/${p.img}.webp`; im.alt = `Tela do projeto ${p.nome}`;
    im.width = 1280; im.height = 720; im.loading = "lazy"; im.decoding = "async";
    midia.append(im);
    if (p.selo) midia.append(el("span", "cartao__selo", p.selo));
    const cab = el("div", "cartao__cabeca");
    cab.append(el("h3", "cartao__nome", p.nome), el("span", "cartao__tipo", p.tipo));
    const tags = el("ul", "cartao__tags");
    p.tags.forEach((t) => tags.append(el("li", null, t)));
    const links = el("div", "cartao__links");
    (p.links || []).forEach(([rot, url]) => {
      const a = el("a", null, `${rot} ↗`);
      a.href = url; a.target = "_blank"; a.rel = "noopener";
      a.setAttribute("aria-label", `${rot}: ${p.nome} (abre em nova aba)`);
      links.append(a);
    });
    if (p.extra) links.append(el("span", null, `// ${p.extra.toLowerCase()}`));
    li.append(midia, cab, el("p", "cartao__texto", p.texto), tags, links);
    grade.append(li);
  });
  const total = String(PROJETOS.length);
  document.getElementById("total-projetos").textContent = total;
  document.getElementById("numero-projetos").textContent = total;

  // Filtros
  const status = document.getElementById("filtros-status");
  const botoes = document.querySelectorAll(".filtro");
  botoes.forEach((b) => b.addEventListener("click", () => {
    const f = b.dataset.filtro;
    botoes.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    let n = 0;
    grade.querySelectorAll(".cartao").forEach((c) => {
      const mostra = f === "todos" || c.dataset.cat.split(" ").includes(f);
      c.hidden = !mostra;
      if (mostra) n++;
    });
    status.textContent = f === "todos" ? "" : `${n} ${n === 1 ? "projeto" : "projetos"} em ${b.textContent.toLowerCase()}`;
  }));

  // Título do topo: letra por letra
  let i = 0;
  document.querySelectorAll(".hero .titulo-gigante__linha").forEach((linha) => {
    const txt = linha.textContent;
    linha.textContent = "";
    [...txt].forEach((ch) => { const s = el("span", "letra", ch); s.style.setProperty("--i", i++); linha.append(s); });
  });

  // Digitação do status (o detalhe de terminal)
  const saida = document.querySelector("[data-digitar]");
  const digitar = () => {
    const alvo = saida.dataset.digitar;
    if (semMovimento) { saida.textContent = alvo; return; }
    let k = 0;
    const passo = () => { saida.textContent = alvo.slice(0, ++k); if (k < alvo.length) setTimeout(passo, 55 + Math.random() * 60); };
    setTimeout(passo, 1300);
  };

  // Entrada ao rolar
  const surgir = new IntersectionObserver((itens) => itens.forEach((it) => {
    if (it.isIntersecting) { it.target.classList.add("visivel"); surgir.unobserve(it.target); }
  }), { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".surge").forEach((n) => surgir.observe(n));
  document.querySelectorAll(".secao__cabeca, .sobre, .stack, .linha-tempo li, .contato__lista").forEach((n) => { n.classList.add("surge"); surgir.observe(n); });

  // Partículas ficam mais fracas depois do topo
  const hero = document.getElementById("inicio");
  new IntersectionObserver(([e]) => document.body.classList.toggle("rolou", !e.isIntersecting), { threshold: 0.25 }).observe(hero);

  requestAnimationFrame(() => requestAnimationFrame(() => { doc.classList.add("pronto"); digitar(); }));
})();
