// Nuvem de partículas em forma de anel torcido (inspiração: Axon). Reage ao mouse e respeita "reduzir movimento".
import * as THREE from "three";

const canvas = document.getElementById("particulas");
const semMovimento = matchMedia("(prefers-reduced-motion: reduce)").matches;
const pequeno = matchMedia("(max-width: 760px)").matches;

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: "low-power" });
} catch {
  canvas.remove(); // sem WebGL: a página segue normal, só sem o fundo
}

if (renderer) {
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  const cena = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 0, 9);

  const N = pequeno ? 14000 : 32000;
  const pos = new Float32Array(N * 3);
  const sem = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    // Toro com raio do tubo variando e uma torção: lembra um anel de fumaça, não um donut perfeito
    const u = Math.random() * Math.PI * 2;
    const v = Math.random() * Math.PI * 2;
    const R = 2.6 + 0.35 * Math.sin(u * 3);
    const r = (0.55 + 0.55 * Math.pow(Math.random(), 2.2)) * (0.75 + 0.45 * Math.sin(u * 2 + 1));
    const torcao = v + u * 1.5;
    pos[i * 3] = (R + r * Math.cos(torcao)) * Math.cos(u);
    pos[i * 3 + 1] = (R + r * Math.cos(torcao)) * Math.sin(u) * 0.92;
    pos[i * 3 + 2] = r * Math.sin(torcao) * 1.4;
    sem[i] = Math.random();
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("aSem", new THREE.BufferAttribute(sem, 1));

  const uniforms = {
    uTempo: { value: 0 },
    uMouse: { value: new THREE.Vector2(9, 9) },
    uEscala: { value: renderer.getPixelRatio() },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      uniform float uTempo; uniform vec2 uMouse; uniform float uEscala;
      attribute float aSem;
      varying float vAlfa; varying float vTom;
      void main() {
        vec3 p = position;
        float t = uTempo * 0.35;
        p += 0.08 * vec3(sin(t + p.y * 1.7 + aSem * 6.0), cos(t * 0.8 + p.x * 1.3), sin(t * 0.6 + p.z * 2.1));
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vec4 tela = projectionMatrix * mv;
        vec2 ndc = tela.xy / tela.w;
        vec2 d = ndc - uMouse;
        float empurra = smoothstep(0.32, 0.0, length(d));
        tela.xy += normalize(d + 1e-5) * empurra * 0.09 * tela.w;
        gl_Position = tela;
        gl_PointSize = (1.0 + aSem * 1.6) * uEscala * (9.0 / -mv.z);
        vAlfa = (0.25 + 0.75 * aSem) * smoothstep(16.0, 6.0, -mv.z) + empurra * 0.4;
        vTom = aSem;
      }`,
    fragmentShader: /* glsl */ `
      varying float vAlfa; varying float vTom;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        vec3 cor = mix(vec3(0.71, 0.66, 1.0), vec3(0.96, 0.95, 1.0), vTom);
        gl_FragColor = vec4(cor, vAlfa * smoothstep(0.5, 0.1, d));
      }`,
  });
  const nuvem = new THREE.Points(geo, mat);
  nuvem.rotation.set(-0.5, 0.35, 0.2);
  cena.add(nuvem);

  const ajustar = () => {
    const w = innerWidth, h = innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // No celular a câmera recua para o anel caber; no desktop ele vaza a tela como na referência
    const celular = w < 760;
    camera.position.z = 8.2;
    nuvem.scale.setScalar(celular ? 0.6 : 1);
    nuvem.position.set(celular ? 0 : 0.6, celular ? 0.7 : 0, 0);
    camera.updateProjectionMatrix();
  };
  ajustar();
  addEventListener("resize", () => { ajustar(); if (!rodando) renderer.render(cena, camera); });

  const alvo = { x: 0, y: 0 };
  const mouse = new THREE.Vector2(9, 9);
  addEventListener("pointermove", (e) => {
    alvo.x = (e.clientX / innerWidth) * 2 - 1;
    alvo.y = -(e.clientY / innerHeight) * 2 + 1;
    mouse.set(alvo.x, alvo.y);
  }, { passive: true });
  document.addEventListener("pointerleave", () => mouse.set(9, 9));

  const relogio = new THREE.Clock();
  let rodando = false;
  const quadro = () => {
    if (!rodando) return;
    const dt = Math.min(relogio.getDelta(), 0.05);
    uniforms.uTempo.value += dt;
    nuvem.rotation.z += dt * 0.05;
    nuvem.rotation.x += ((-0.5 + alvo.y * 0.18) - nuvem.rotation.x) * 0.04;
    nuvem.rotation.y += ((0.35 + alvo.x * 0.25) - nuvem.rotation.y) * 0.04;
    uniforms.uMouse.value.lerp(mouse, 0.12);
    renderer.render(cena, camera);
    requestAnimationFrame(quadro);
  };
  const iniciar = () => { if (!rodando && !semMovimento && !document.hidden) { rodando = true; relogio.getDelta(); requestAnimationFrame(quadro); } };
  document.addEventListener("visibilitychange", () => (document.hidden ? (rodando = false) : iniciar()));

  renderer.render(cena, camera); // um quadro parado para quem pediu menos movimento
  iniciar();
}
