# Portfólio pessoal (larocalucas.github.io): caderno de bordo

> REGRA: leia antes de mexer e registre aqui o que fez (entrada nova no topo do "Registro") antes de parar.

## Projeto
Portfólio **pessoal** do Lucas. Foco principal: mostrar o trabalho da laroca.dev; secundário: aberto a vaga remota boa.
Push na `main` publica no GitHub Pages: só com o ok do dono.

## Diretrizes
- Visual: mistura de duas referências do motionsites.ai escolhidas pelo dono: **Axon** (anel de partículas, texto mono, rótulos `[INFO]`, grade de projetos com filtros) e **3D Jack** (títulos gigantes em degradê cinza). Não copiar o laroca.dev (Kanit/magenta): aqui é Archivo expandida + JetBrains Mono + lilás `#b6a9ff`.
- **Contatos pessoais** (não trocar pelos da laroca.dev): lucas.laroca.campos@gmail.com e WhatsApp (42) 99865-0294. Decisão do dono em 08/11/2026.
- Projetos ficam no array `PROJETOS` de `js/main.js`, cada um com `img/<nome>.webp` 1280×720. Padrão das imagens: captura do **topo** da página (1440×900, barra de rolagem escondida) dentro de uma moldura de navegador com o domínio, sobre fundo escuro com grade. Projetos sem tela pública (Sys Door, Central, Revenda, Teyun, AWS) usam capa desenhada (nome + o que faz + um elemento visual). Nada de miniatura gerada no navegador: o dono achou que parecia imagem quebrada.
- Projetos internos (Central, Sys Door, Mapa 3D, Calculadora) podem aparecer, sem link (ok do dono em 08/11/2026). Repositórios privados não ganham link de código.
- Sem build. Ao mudar CSS/JS, suba o `?v=` no `index.html`.
- Degradê nos títulos é proposital (referência Jack); exceções do detector do impeccable em `.impeccable/config.json`.

## Estado atual
v2 (08/11/2026) pronta e testada localmente, numa branch; aguardando ok do dono para publicar.

## Registro
### 08/11/2026 — Claude Code (imagens)
- Pedido do dono: as imagens dos projetos estavam ruins (algumas pareciam não carregar, outras mostravam só trechos de texto).
- Feito: todas as 16 imagens refeitas. Sites capturados ao vivo pelo topo; Mapa 3D da Door em "Apresentar"; Mapas 3D com uma cena de palco montada; Calculadora na tela de proposta do cliente (sem margens); Moda e Odonto pelos painéis; HelpDesk com saída real do terminal (Rich, chamados de exemplo numa cópia local do banco); capas desenhadas para Sys Door, Central, Revenda, Teyun e AWS. Cards sem animação de entrada (às vezes ficavam invisíveis ao pular a rolagem). Código das miniaturas geradas removido.
- Achado (fora do escopo, não mexido): o site doorpg.com.br tem uma faixa preta de ~40 px à direita do topo em 1440 px.
- Testes: Playwright em 1440×900 e 390×844, nenhuma imagem quebrada, sem erro no console.
### 08/11/2026 — Claude Code
- Feito: refeito do zero (antes era React via Babel no navegador, tema cyberpunk). Topo com anel de partículas three.js que reage ao mouse; nome gigante em degradê com entrada letra a letra; status digitado (o detalhe de terminal). 16 projetos com filtros (Sites, Sistemas, 3D, Ferramentas, Código aberto); copy reescrita com foco na laroca.dev; trajetória com laroca.dev no topo; stack atualizada; og.png 1200×630; favicon.
- Removidos: Andreia Decorações (página e repositório não existem mais) e links antigos `larocalucas.github.io/djlaroca|djreinaldo` (trocados pelos domínios).
- Arquivos: index.html, css/style.css, js/main.js, js/particulas.js, img/*, favicon.svg, README.md.
- Testes: Playwright local em 1440×900, 820×1180 e 390×844: sem erros no console, sem rolagem horizontal, nenhuma imagem quebrada; filtro "3D" mostra 2 projetos com aviso lido por leitor de tela; com "reduzir movimento" o texto aparece completo e as letras sem animação. impeccable detect: só ficaram os degradês (propositais) e caixa alta curta em rótulos/listas. Não testado: celular real.
- Próximo: publicar após o ok.
