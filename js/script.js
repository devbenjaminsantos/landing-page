// -- Textos PT / EN --
const translations = {
  pt: {
    
    // Navbar
    nav_about: "Sobre",
    nav_skills: "Habilidades",
    nav_projects: "Projetos",
    nav_contact: "Contato",

    // Hero
    hero_title: "Olá, eu sou o Benjamin 👋",
    hero_sub: "Desenvolvedor em formação, focado em construir experiências simples, bonitas e funcionais na web.",
    hero_btn_projects: "Ver projetos",
    hero_btn_contact: "Entrar em contato",

    // Sobre
    sobre_title: "Sobre mim",
    sobre_p1: "Sou Benjamin, estudante de Análise e Desenvolvimento de Sistemas e apaixonado por resolver problemas com clareza e lógica.",
    sobre_p2: "Tenho um perfil observador e gosto de entender como as coisas funcionam antes de construí-las. Isso me levou à programação: a combinação entre raciocínio, estrutura e criatividade.",
    sobre_p3: "Hoje estudo HTML, CSS e JavaScript, focado em desenvolver bases sólidas antes de avançar para ferramentas mais complexas.",
    
    // Habilidades
    habilidades_title: "Habilidades",
    estudando_agora: "Estudando agora",
    proximos_passos: "Próximos passos",
    
    // Projetos
    projetos_title: "Projetos",
    
    // Cards dos projetos
    proj1_title: "Landing Page",
    proj1_desc: "Por enquanto, só há esse meu primeiro, entretanto, toda vez que eu criar um novo, vou adicioná-lo aqui, bem como um link para visualizá-lo.",
    proj1_link: "Ver no GitHub",

    proj2_title: "Dashboard Financeiro (em execução)",
    proj2_desc: "Um projeto para organizar gastos por categoria e visualizar os gastos mensais",

    proj3_title: "Rastreador (em execução)",
    proj3_desc: "Ainda pensando em uma introdução sobre o projeto.",

    // Contato
    contato_title: "Contato",
    contato_sub: "Quer trocar uma ideia, sugerir um projeto ou falar sobre oportunidades?"
  },

  en: {

    // Navbar
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    // Hero
    hero_title: "Hello, I'm Benjamin 👋",
    hero_sub: "Developer in training, focused on building simple, beautiful, and functional web experiences.",
    hero_btn_projects: "View projects",
    hero_btn_contact: "Get in touch",

    // About
    sobre_title: "About me",
    sobre_p1: "I'm Benjamin, a Systems Analysis student passionate about solving problems with clarity and logic.",
    sobre_p2: "I have an observant profile and like to understand how things work before building them. This led me to programming: the combination of reasoning, structure, and creativity.",
    sobre_p3: "Today I study HTML, CSS, and JavaScript, focused on developing solid foundations before moving to more complex tools.",
    
    // Skills
    habilidades_title: "Skills",
    estudando_agora: "Studying now",
    proximos_passos: "Next steps",
    
    // Projects
    projetos_title: "Projects",

    // Projects cards
    proj1_title: "Landing Page",
    proj1_desc: "For now, this is my first project. As I create new ones, I'll add them here along with a link to view them.",
    proj1_link: "View on GitHub",

    proj2_title: "Financial Dashboard (in progress)",
    proj2_desc: "A project to track categories and visualize monthly spending.",

    proj3_title: "Tracker (in progress)",
    proj3_desc: "Still thinking how to write an introduction for it.",

    
    // Contact
    contato_title: "Contact",
    contato_sub: "Want to connect, suggest a project, or talk about opportunities?"
  }
};

const STORAGE_KEY = "preferred_language";

// -- Aplicar idioma --
function applyLanguage(lang) {
  const dict = translations[lang] || translations.pt;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // Atualiza atributo lang do HTML
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  // -- Estado visual dos botões --
  document.querySelectorAll(".lang-btn").forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  // Persiste preferência
  localStorage.setItem(STORAGE_KEY, lang);
}

// -- Eventos dos botões --
function setupLanguageSwitch() {
 document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.dataset.lang);
  });
 });
}

// Inicialização
(function init(){
  setupLanguageSwitch();

  const saved = localStorage.getItem(STORAGE_KEY);
  const initializing = saved && (saved === "pt" || saved === "en") ? saved: "pt";
  applyLanguage(initializing);

})();