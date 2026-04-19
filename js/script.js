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
    nav_freelance: "Freelancer",
    nav_projects: "Projetos",
    nav_certifications: "Certificações",
    nav_contact: "Contato",

    // Hero
    hero_title: "Benjamin Montenegro",
    hero_subtitle:
      "Desenvolvedor Front-End com foco em interfaces e produtos web",
    hero_description:
      "1 ano de experiência profissional • 5˚ período em ADS • Inglês C1. Desenvolvendo interfaces responsivas, experiências web bem resolvidas e soluções que conectam produto, negócio e usabilidade.",
    hero_btn_projects: "Ver Projetos",

    // Sobre
    about_title: "Sobre Mim",
    about_subtitle:
      "Formação, experiência prática e foco em evolução contínua.",
    about_p1:
      "Atuo no desenvolvimento Front-End com experiência profissional em interfaces para web, landing pages e projetos com foco em clareza visual, responsividade e organização de código.",
    about_p2:
      "Também desenvolvo projetos que percorrem o fluxo completo da aplicação, integrando Front-End, Back-End com C# e SQL Server, testes e publicação. Inglês avançado (C1) e compromisso contínuo com evolução técnica.",

    // Habilidades
    skills_title: "Habilidades",
    skills_subtitle:
      "Tecnologias e ferramentas que fazem parte do meu repertório.",
    skills_frontend: "Front-End",
    skills_tools_tests: "Ferramentas / Testes",
    skills_backend: "Back-End / Banco de Dados",
    skills_cloud: "Cloud / DevOps",

    // Experiência
    experience_title: "Experiência",
    experience_subtitle: "Minhas experiências profissionais.",
    experience_badge_job: "Experiência Profissional",
    experience_doss_title: "Doss Imobiliária",
    experience_doss_text:
      "Desenvolvimento e manutenção de landing pages e interfaces responsivas para o mercado imobiliário. Responsividade mobile-first, estilização moderna, versionamento com Git e melhorias que contribuíram para aumento de 30% na captação de leads.",

    // Projetos
    freelance_title: "Freelancer",
    freelance_subtitle:
      "Projetos entregues para clientes reais, com foco em resultado, presença digital e entrega em produção.",
    projects_title: "Projetos",
    projects_subtitle:
      "Projetos que acompanham minha jornada no mundo do desenvolvimento de software.",
    project_cover_product: "Interface Web",
    project_cover_admin_text: "dashboard • filtros • gestão visual",
    project_cover_finance_text: "financas • autenticacao • visao consolidada",
    project_freelance_title: "Rego Barros Consultoria",
    project_freelance_point_1:
      "Construído com foco em presença de marca.",
    project_freelance_point_2:
      "Estruturado para captação de leads e divulgação dos serviços.",
    project_freelance_point_3:
      "Desenvolvido para aproximação com o público e apresentação dos serviços prestados.",
    project_freelance_api_tag: "APIs Públicas",
    project_freelance_meta:
      "Site institucional focado em presença de marca, captação de leads, divulgação dos serviços e fortalecimento da visibilidade no Google.",
    project_freelance_2_title: "Ki-Dilicia Gourmet",
    project_freelance_2_point_1:
      "Estruturado para pedidos online com navegação simples e objetiva.",
    project_freelance_2_point_2:
      "Finalização integrada ao WhatsApp com todas as escolhas do pedido.",
    project_freelance_2_point_3:
      "Projeto em fase final, com fluxo funcional e interface já operante.",
    project_freelance_2_meta:
      "Cardapio digital focado em conversao, praticidade no pedido e aproximacao com o cliente por meio de um fluxo guiado ate o WhatsApp.",
    project_admin_title: "Painel Administrativo",
    project_admin_description:
      "Interface administrativa responsiva desenvolvida com foco em organização de dados e experiência do usuário. Permite gerenciamento eficiente de informações e visualização clara de status e filtros aplicados.",
    project_finance_title: "Finova",
    project_finance_description: "Aplicação para gestão financeira.",

    // Certificações
    certifications_title: "Certificações",
    certifications_subtitle: "Cursos e estudos complementares.",
    certifications_badge_course: "Formação Complementar",
    certifications_item_1_title: "Desenvolvimento Front-End",
    certifications_item_2_title: "Desenvolvimento Back-End",
    certifications_item_3_title: "Banco de Dados",

    // Contato
    contact_title: "Contato",
    contact_subtitle:
      "Se houver um projeto, oportunidade ou parceria, minha caixa de entrada está aberta.",
    contact_name_label: "Nome",
    contact_name_placeholder: "Seu nome",
    contact_email_label: "Email",
    contact_email_placeholder: "voce@email.com",
    contact_message_label: "Mensagem",
    contact_message_placeholder: "Me conte sobre seu projeto, vaga ou ideia.",
    contact_submit: "Enviar mensagem",
    contact_status_sending: "Enviando mensagem...",
    contact_status_success: "Mensagem enviada com sucesso.",
    contact_status_error:
      "Nao foi possivel enviar agora. Tente novamente em instantes.",
    contact_status_missing_key:
      "Falta configurar a chave do Web3Forms no formulario.",
  },

  en: {
    // Navbar
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_freelance: "Freelance",
    nav_projects: "Projects",
    nav_certifications: "Certifications",
    nav_contact: "Contact",

    // Hero
    hero_title: "Benjamin Montenegro",
    hero_subtitle:
      "Front-End Developer focused on interfaces and web products",
    hero_description:
      "1 year of professional experience • 5th semester in SAD • English C1. Building responsive interfaces, polished web experiences and solutions that connect product, business and usability.",
    hero_btn_projects: "View Projects",

    // About
    about_title: "About Me",
    about_subtitle:
      "Education, hands-on experience and a strong focus on continuous growth.",
    about_p1:
      "I work in Front-End development with professional experience in web interfaces, landing pages and projects focused on visual clarity, responsiveness and code organization.",
    about_p2:
      "I also build projects that go through the full application flow, connecting Front-End, Back-End with C# and SQL Server, testing and deployment. Advanced English (C1) and a consistent commitment to technical growth.",

    // Skills
    skills_title: "Skills",
    skills_subtitle: "Technologies and tools that are part of my repertoire.",
    skills_frontend: "Front-End",
    skills_tools_tests: "Tools / Testing",
    skills_backend: "Back-End / Database",
    skills_cloud: "Cloud / DevOps",

    // Experience
    experience_title: "Experience",
    experience_subtitle: "My professional experiences.",
    experience_badge_job: "Professional Experience",
    experience_doss_title: "Doss Imobiliária",
    experience_doss_text:
      "Development and maintenance of landing pages and responsive interfaces for the real estate market. Mobile-first responsiveness, modern styling, Git versioning and improvements that contributed to a 30% increase in lead generation.",

    // Projects
    freelance_title: "Freelance",
    freelance_subtitle:
      "Projects delivered for real clients, focused on results, digital presence and production-ready delivery.",
    projects_title: "Projects",
    projects_subtitle:
      "Projects that follow my journey in the world of software development.",
    project_cover_product: "Web Interface",
    project_cover_admin_text: "dashboard • filters • visual management",
    project_cover_finance_text: "finance • authentication • consolidated view",
    project_freelance_title: "Rego Barros Consultoria",
    project_freelance_point_1:
      "Built with a focus on brand presence.",
    project_freelance_point_2:
      "Structured for lead generation and service promotion.",
    project_freelance_point_3:
      "Designed to strengthen audience connection and present the services offered.",
    project_freelance_api_tag: "Public APIs",
    project_freelance_meta:
      "Institutional website focused on brand presence, lead generation, service promotion and stronger Google visibility.",
    project_freelance_2_title: "Ki-Dilicia Gourmet",
    project_freelance_2_point_1:
      "Structured for online ordering with simple and straightforward navigation.",
    project_freelance_2_point_2:
      "Checkout integrated with WhatsApp including all selected order options.",
    project_freelance_2_point_3:
      "Project in its final stage, with the main flow working and the interface already operational.",
    project_freelance_2_meta:
      "Digital menu focused on conversion, ordering practicality and customer connection through a guided flow that ends on WhatsApp.",
    project_admin_title: "Admin Panel",
    project_admin_description:
      "Responsive administrative interface developed with a focus on data organization and user experience. Enables efficient information management and clear visualization of applied status and filters.",
    project_finance_title: "Finova",
    project_finance_description: "Application for financial management.",

    // Certifications
    certifications_title: "Certifications",
    certifications_subtitle: "Courses and complementary studies.",
    certifications_badge_course: "Complementary Training",
    certifications_item_1_title: "Front-End Development",
    certifications_item_2_title: "Back-End Development",
    certifications_item_3_title: "Database",

    // Contact
    contact_title: "Contact",
    contact_subtitle:
      "If there is a project, opportunity or partnership in mind, my inbox is open.",
    contact_name_label: "Name",
    contact_name_placeholder: "Your name",
    contact_email_label: "Email",
    contact_email_placeholder: "you@email.com",
    contact_message_label: "Message",
    contact_message_placeholder:
      "Tell me about your project, role or idea.",
    contact_submit: "Send message",
    contact_status_sending: "Sending message...",
    contact_status_success: "Message sent successfully.",
    contact_status_error:
      "Unable to send right now. Please try again in a moment.",
    contact_status_missing_key:
      "The Web3Forms access key still needs to be configured.",
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
  const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  placeholderElements.forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");

    if (translations[lang] && translations[lang][key]) {
      element.setAttribute("placeholder", translations[lang][key]);
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
  toggleMobileMenu(false);

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
const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");
const contactSubmit = document.getElementById("contact-submit");
const web3FormsAccessKey = document.getElementById("web3forms-access-key");

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

if (contactForm && contactStatus && contactSubmit && web3FormsAccessKey) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const currentLanguage = localStorage.getItem("language") || "pt";
    const accessKey = web3FormsAccessKey.value.trim();

    if (!accessKey) {
      contactStatus.textContent =
        translations[currentLanguage].contact_status_missing_key;
      contactStatus.classList.add("is-error");
      return;
    }

    contactStatus.textContent = translations[currentLanguage].contact_status_sending;
    contactStatus.classList.remove("is-error", "is-success");
    contactSubmit.disabled = true;

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        contactStatus.textContent =
          translations[currentLanguage].contact_status_success;
        contactStatus.classList.add("is-success");
        contactForm.reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      contactStatus.textContent =
        translations[currentLanguage].contact_status_error;
      contactStatus.classList.add("is-error");
    } finally {
      contactSubmit.disabled = false;
    }
  });
}
