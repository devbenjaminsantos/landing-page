/* =================
THEME TOGGLE
================= */

const themeToggle = document.getElementById("theme-toggle");

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
}

if (currentTheme === "light") {
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  const theme = document.documentElement.getAttribute("data-theme");

  if (theme === "light") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "🌙";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "☀️";
  }
});

/* =========================
LANGUAGE SYSTEM
========================= */

const translations = {
  pt: {
    // Navbar
    nav_about: "Sobre",
    nav_skills: "Habilidades",
    nav_experience: "Experiência",
    nav_projects: "Projetos",
    nav_certifications: "Certificações",
    nav_contact: "Contato",

    // Hero
    hero_title: "Olá, eu sou Benjamin",
    hero_subtitle: "Desenvolvedor de Software",
    hero_description:
      "1 ano de experiência • 5˚ período em ADS • Inglês C1. Construindo interfaces modernas e responsivas, além de sistemas eficientes e seguros.",
    hero_btn_projects: "Ver Projetos",

    // Sobre
    about_title: "Sobre Mim",
    about_subtitle: "Um pouco sobre minha jornada e objetivos.",
    about_p1:
      "Desenvolvedor Front-End com 1 ano de experiência profissional, atualmente cursando o 5˚ período de Análise e Desenvolvimento de Sistemas. Foco em interfaces responsivas, organização de código e componentização.",
    about_p2:
      "Aprimorando e construindo projetos que cobrem o ciclo completo de desenvolvimento, desde o Front-End ao Back-End com C# e SQL Server. Inglês avançado (C1) e comprometido com aprendizado contínuo.",

    // Habilidades
    skills_title: "Habilidades",
    skills_subtitle:
      "Tecnologias e ferramentas que fazem parte do meu repertório.",
    skills_frontend: "Front-End",
    skills_tools: "Ferramentas",
    skills_backend: "Back-End / Banco de Dados",
    skills_next: "Próximos Passos",

    // Experiência
    experience_title: "Experiência",
    experience_subtitle: "Minhas experiências profissionais.",
    experience_badge_job: "Experiência Profissional",
    experience_doss_title: "Doss Imobiliária",
    experience_doss_text:
      "Desenvolvimento e manutenção de landing pages e interfaces responsivas para o mercado imobiliário. Responsividade mobile-first, estilização moderna, versionamento com Git e melhorias que contribuíram para aumento de 30% na captação de leads.",

    // Projetos
    projects_title: "Projetos",
    projects_subtitle:
      "Projetos que acompanham minha jornada no mundo do desenvolvimento de software.",
    project_freelance_badge: "Projeto Freelancer",
    project_freelance_title: "Rego Barros Consultoria",
    project_freelance_description:
      "Site institucional desenvolvido do zero para apresentar a Rego Barros Consultoria na web, com foco em presença de marca, captação de leads e uma apresentação clara da instituição e de seus serviços.",
    project_freelance_api_tag: "APIs Públicas",
    project_freelance_tag: "Cliente Real",
    project_freelance_meta:
      "Site institucional com ganho de visibilidade, divulgação dos serviços e aumento na captação de leads",
    project_admin_title: "Painel Administrativo",
    project_admin_description:
      "Interface administrativa responsiva desenvolvida com foco em organização de dados e experiência do usuário. Permite gerenciamento eficiente de informações e visualização clara de status e filtros aplicados.",
    project_finance_title: "Dashboard Financeiro",
    project_finance_description:
      "Aplicação web para visualização e organização de gastos. Permite visualizar gastos por categoria, filtrar por mês e ano, e acompanhar a evolução financeira ao longo do tempo. Além disso, é responsivo e otimizado para diferentes dispositivos, garantindo uma experiência fluida tanto em desktop quanto em mobile.",

    // Certificações
    certifications_title: "Certificações",
    certifications_subtitle: "Cursos e estudos complementares.",
    certifications_badge_course: "Formação Complementar",
    certifications_item_1_title: "Desenvolvimento Front-End",
    certifications_item_2_title: "Desenvolvimento Back-End",
    certifications_item_3_title: "Banco de Dados",

    // Contato
    contact_title: "Contato",
    contact_subtitle: "Vamos conversar sobre projetos e oportunidades.",
  },

  en: {
    // Navbar
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_certifications: "Certifications",
    nav_contact: "Contact",

    // Hero
    hero_title: "Hello, I'm Benjamin",
    hero_subtitle: "Software Developer",
    hero_description:
      "1 year of experience • 5th semester in SAD • English C1. Building modern and responsive interfaces, along with efficient and secure systems.",
    hero_btn_projects: "View Projects",

    // About
    about_title: "About Me",
    about_subtitle: "A little about my journey and goals.",
    about_p1:
      "Front-End Developer with 1 year of professional experience, currently in the 5th semester of Systems Analysis and Development. Focused on responsive interfaces, code organization and componentization.",
    about_p2:
      "Improving and building projects that cover the full development cycle, from Front-End to Back-End with C# and SQL Server. Advanced English (C1) and committed to continuous learning.",

    // Skills
    skills_title: "Skills",
    skills_subtitle: "Technologies and tools that are part of my repertoire.",
    skills_frontend: "Front-End",
    skills_tools: "Tools",
    skills_backend: "Back-End / Database",
    skills_next: "Next Steps",

    // Experience
    experience_title: "Experience",
    experience_subtitle: "My professional experiences.",
    experience_badge_job: "Professional Experience",
    experience_doss_title: "Doss Imobiliária",
    experience_doss_text:
      "Development and maintenance of landing pages and responsive interfaces for the real estate market. Mobile-first responsiveness, modern styling, Git versioning and improvements that contributed to a 30% increase in lead generation.",

    // Projects
    projects_title: "Projects",
    projects_subtitle:
      "Projects that follow my journey in the world of software development.",
    project_freelance_badge: "Freelance Project",
    project_freelance_title: "Rego Barros Consultoria",
    project_freelance_description:
      "Institutional website built from scratch to establish Rego Barros Consultoria online, focused on brand presence, lead generation and a clear presentation of the institution and its services.",
    project_freelance_api_tag: "Public APIs",
    project_freelance_tag: "Real Client",
    project_freelance_meta:
      "Institutional website with stronger visibility, service promotion and increased lead generation",
    project_admin_title: "Admin Panel",
    project_admin_description:
      "Responsive administrative interface developed with a focus on data organization and user experience. Enables efficient information management and clear visualization of applied status and filters.",
    project_finance_title: "Finance Dashboard",
    project_finance_description:
      "Web application for expense visualization and organization. View expenses by category, filter by month and year, and track financial evolution over time.",

    // Certifications
    certifications_title: "Certifications",
    certifications_subtitle: "Courses and complementary studies.",
    certifications_badge_course: "Complementary Training",
    certifications_item_1_title: "Front-End Development",
    certifications_item_2_title: "Back-End Development",
    certifications_item_3_title: "Database",

    // Contact
    contact_title: "Contact",
    contact_subtitle: "Let's talk about projects and opportunities.",
  },
};

const langToggle = document.getElementById("lang-toggle");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-links");
const navLinks = document.querySelectorAll(".nav-links a");

function toggleMobileMenu(forceState) {
  if (!navToggle || !navMenu) {
    return;
  }

  const shouldOpen =
    typeof forceState === "boolean"
      ? forceState
      : !navMenu.classList.contains("is-open");

  navMenu.classList.toggle("is-open", shouldOpen);
  navToggle.classList.toggle("is-active", shouldOpen);
  navToggle.setAttribute("aria-expanded", String(shouldOpen));
}

function applyLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  localStorage.setItem("language", lang);

  if (lang === "en") {
    langToggle.classList.add("is-en");
  } else {
    langToggle.classList.remove("is-en");
  }
}

const savedLanguage = localStorage.getItem("language") || "pt";
applyLanguage(savedLanguage);

langToggle.addEventListener("click", () => {
  const currentLanguage = localStorage.getItem("language") || "pt";
  const newLanguage = currentLanguage === "pt" ? "en" : "pt";

  applyLanguage(newLanguage);
});

langToggle.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();

    const currentLanguage = localStorage.getItem("language") || "pt";
    const newLanguage = currentLanguage === "pt" ? "en" : "pt";

    applyLanguage(newLanguage);
  }
});

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    toggleMobileMenu();
  });

  navToggle.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMobileMenu();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMobileMenu(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      toggleMobileMenu(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      toggleMobileMenu(false);
    }
  });
}

/* ========================
ACTIVE NAV LINK
========================== */
const sections = document.querySelectorAll("main section[id]");

function setActiveLink() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

/* ========================
SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =====================
IMAGE MODAL
===================== */
const profileImage = document.getElementById("profile-image");
const imageModal = document.getElementById("image-modal");
const imageModalClose = document.getElementById("image-modal-close");

if (profileImage && imageModal && imageModalClose) {
  profileImage.addEventListener("click", () => {
    imageModal.classList.add("show");
  });

  imageModalClose.addEventListener("click", () => {
    imageModal.classList.remove("show");
  });

  imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) {
      imageModal.classList.remove("show");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      imageModal.classList.remove("show");
    }
  });
}
