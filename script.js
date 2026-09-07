(function () {
  "use strict";

  /* ---------------------------------------------------------------
     i18n — every visible string keyed here, EN + PT.
     HTML carries the English text so the page reads fine with no JS.
     --------------------------------------------------------------- */
  var I18N = {
    en: {
      skip: "Skip to content",
      nav_about: "About", nav_work: "Projects", nav_playground: "Playground", nav_cv: "CV", nav_currently: "Currently", nav_contact: "Contact",

      hi: "Hi, my name is",
      say: "she builds things — with code, design &amp; people",
      roles_kicker: "&gt; WHAT I DO &gt;&gt;",
      bio: "Giovanna Ribas is a software engineering student and developer from Curitiba, Brazil. She works across software, data and design — building production features and automations, and visual work and community projects the rest of the time. She founded and leads Coffee &amp; Code, a student tech club at PUCPR.",

      id_name: "NAME", id_based: "BASED IN", id_exp: "EXPERIENCE", id_exp_v: "Software Development Intern",
      id_edu: "EDUCATION",
      id_builds: "BUILDS",
      id_builds_v: "software · interfaces · systems · communities · visual identities",

      role_1: "Software Engineering Student",
      role_2: "Software Development Intern",
      role_3: "Visual &amp; Creative Designer",
      role_4: "Coffee &amp; Code — Founder",
      role_5: "Data &amp; automation",
      role_6: "Building with people",

      datasus_lead: "Reading a slow public-health database with a robot instead of by hand.",
      corrida_lead: "A tiny game about being late for class — built to learn state machines and game loops.",
      pibble_lead: "Building the employees side of a Django delivery system, with two teammates.",
      p1_date: "Team project &middot; Apr 2026",
      p2_date: "Individual &middot; Jun 2026",
      p3_date: "Team project &middot; Jun 2026",
      nav_home: "Home",
      home_welcome: "Welcome to my portfolio &mdash; I'm a",
      home_sub: "student at PUCPR &middot; software development intern",
      home_line: "I make things &mdash; with <em>code, design &amp; people</em>.",
      home_cv: "Download CV &darr;",
      home_pcap: "Software Engineer",
      ph_portrait: "portrait &mdash; image pending",
      about_kicker: "About",
      p4_date: "Academic &middot; IoT + web", p5_date: "Academic &middot; process modeling",
      flood_h: "City flood &amp; waterlogging monitor",
      flood_lead: "Sensors in the field, an alert on someone's phone before the water rises.",
      flood_desc: "An ESP32 reads water-level sensors and feeds an integrated web system that notifies the person in charge when a point is at risk.",
      flood_note: "Materials (photos, diagram, screens) are being gathered — see notes.",
      bpmn_h: "Veterinary clinic — process modeling",
      bpmn_lead: "Mapping how a clinic actually runs, one process at a time.",
      bpmn_desc: "BPMN diagrams for the clinic's main processes — intake, appointments, procedures, records — as a base for spotting friction and redesigning.",
      bpmn_note: "Diagrams are being exported — see notes.",
      tag_sensors: "sensors", tag_web: "web", tag_alerts: "alerts",
      tag_analysis: "process analysis", tag_diagrams: "diagrams",
      ph_flood: "hardware &amp; web dashboard — image pending",
      ph_bpmn: "BPMN diagram — image pending",
      stack_more: "For more work, see my GitHub &rarr;",

      p1_desc: "A Selenium robot, a pandas pipeline and a Streamlit dashboard. Course project with Jackson Beggi and wingCODING — I worked on extraction and treatment.",
      p2_desc: "Python and Pygame: state machine, jump physics, random obstacles, a HUD and a saved high score. My code; the art is AI-generated and labelled as such.",
      p3_desc: "Auth, ADM/FUNC access levels, CRUD and a REST API. My part: the Employees module and its link to Deliveries, CPF/CNPJ registration and the admin dashboard.",

      journey_h: "The story so far",
      journey_p1: "I started in software engineering and kept adding languages to build in. Data came first — cleaning it, automating the boring parts. Then the web, then design, then a community.",
      journey_p2: "None of it was a plan. Each thing made the next one make sense: a script became a pipeline, a class exercise became a team project, a group of friends became a club.",
      journey_todo: "&#9432; Placeholder timeline — to be expanded with real dates, the &ldquo;why&rdquo; behind each step, and photos.",
      j1_t: "2024 &middot; started", j1_d: "Software Engineering at PUCPR.",
      j2_t: "Python &amp; data", j2_d: "First automations with pandas — public health data, spreadsheets, ETL.",
      j3_t: "Coffee &amp; Code", j3_d: "Founded and now lead a student tech club.",
      j4_t: "First Django team project", j4_d: "Pibble Express — auth, access levels, an admin dashboard.",
      j5_t: "Dev intern", j5_d: "Production software, day to day. Details are proprietary.",
      j6_t: "Design &amp; people", j6_d: "Visual identity, illustration, events with Diretoria da Mulher.",
      j7_t: "Off the screen", j7_d: "Baking bread, cookies and other experiments.",

      work_h: "Selected work",
      work_intro: "Software, data, a game, a community. Different languages for the same habit — making things.",
      f_all: "All", f_code: "Code", f_design: "Design", f_people: "People", f_play: "Play",
      wk_datasus: "RPA + pandas + a dashboard for public health data",
      wk_game: "a small 2D game in Python / Pygame",
      wk_pibble: "Django delivery system — team project",
      wk_coffee: "a student tech club I started and lead",
      wk_creative_t: "Creative gallery", wk_creative: "illustration, image manipulation, experiments",
      ph_identity: "identity &amp; posters — image pending",

      case_featured: "Featured technical case",
      datasus_cap: "Streamlit dashboard over the consolidated data.",
      fl_processed: "processed data",
      lbl_context: "Context", lbl_built: "What we built", lbl_role: "My role",
      datasus_context: "Hemotherapy figures for the state of Paraná live in the DATASUS TabNet — a slow public interface, one query and one export at a time.",
      datasus_built: "A robot (Selenium) that runs the queries and reads the result tables, a pandas layer that cleans and consolidates every period, and a Streamlit dashboard to compare volume across months and years. Final project for a Python course, with two teammates.",
      datasus_role: "I proposed using the blood-bank data and worked on the extraction and treatment modules. Teammates: Jackson Beggi and wingCODING (RPA orchestration and dashboard).",
      cta_source: "View source on GitHub &rarr;",

      case_game: "Game — individual project",
      corrida_cap: "Start screen. Art is AI-generated (noted below).",
      corrida_p1: "A 2D endless-runner: a student is late for class and has to dodge the city. Reach 1000 points to pass; lose three lives and it's over.",
      corrida_p2: "Written in Python and Pygame — a clean state machine (menu / play / end), jump physics with gravity, random obstacles, difficulty that ramps with the score, lives with temporary invincibility, a HUD and a saved high score.",
      corrida_note: "The code is my own work. The visual assets are AI-generated and shown transparently.",
      tag_states: "state machine",

      case_team: "Web — team project",
      pibble_p: "A Django delivery-management system: authentication, ADM/FUNC access levels, CRUD for clients, products, employees and deliveries, a REST API and an integrated frontend. Built with two teammates.",
      pibble_role_h: "My contribution",
      pibble_r1: "Employees module and its integration with Deliveries",
      pibble_r2: "Registration accepting CPF or CNPJ (form + migration)",
      pibble_r3: "Administrative dashboard",
      pibble_r4: "Form standardization and interface adjustments",
      tag_auth: "authentication",

      coffee_why: "A university tech club I started and actively build, with the team.",
      coffee_p1: "It exists to give students a lower-barrier, hands-on place to learn, build projects together and share what they know — outside the pressure of a graded room.",
      coffee_p2: "I lead it where design and technology meet: the visual identity, the materials, how sessions are run, and how people are brought in.",
      ph_logo: "logo &amp; identity — image pending",
      ph_poster: "poster / session — image pending",
      ph_social: "social piece — image pending",

      creative_h: "Playground",
      creative_intro: "Everything I make away from a code editor &mdash; digital art, ink drawing, graphic design, photography, things I bake, and volunteering and events. Tap any piece to see it larger.",
      pf_all: "All",
      pf_digital: "Digital art",
      pf_illustration: "Illustration",
      pf_photo: "Photography",
      pf_kitchen: "In the kitchen",
      pf_community: "Volunteering &amp; events",
      pg_ink: "Ink study <i>Illustration</i>",
      pg_photo: "Photograph <i>Photography</i>",
      pg_kitchen: "In the kitchen <i>Food photography</i>",
      pg_vol: "Volunteering &amp; events <i>Community</i>",
      cta_behance: "More visual work on Behance &rarr;",

      community_h: "Community &amp; social impact",
      community_lead: "Building with people — collaboration, volunteering, communication and events.",
      ph_action: "selected photo — image pending",
      ci_ddm: "Events Coordinator: organizing events and communication, and initiatives around inclusion and social impact.",
      ci_teia: "Social media: communication and outreach for the project's actions.",
      ci_vol_h: "Interact &amp; volunteer work",
      ci_vol: "Environmental actions, activities with children and other volunteer work.",
      privacy_note: "Photos are selected with care — no children's faces in sensitive contexts, no legible badges or personal data.",

      currently_h: "Currently",
      cur_role: "Software Development Intern",
      cur_p: "Working on the development and maintenance of production software across frontend, backend, APIs and databases — implementing features, investigating bugs and integrating layers of existing systems.",
      cur_note: "Due to the proprietary nature of the systems I work on, source code and internal materials are not publicly available.",
      cur_study_h: "Study", cur_more_h: "More projects", cur_allrepos: "All repositories &rarr;",

      beyond_h: "Beyond the screen",
      beyond_lead: "Things I like making away from a keyboard — mostly baking, some photography.",
      ph_food: "bread — image pending", ph_photo: "photography — image pending",

      contact_h: "Contact",
      contact_line: "Open to build things with good people.",

      foot_say: "Let's build something.",
      foot_note: "Built by hand with HTML, CSS &amp; JavaScript. No framework.",
      modal_todo: "Full image and a short note about this piece are being added."
    },

    pt: {
      skip: "Pular para o conte&uacute;do",
      nav_about: "Sobre", nav_work: "Projetos", nav_playground: "Playground", nav_cv: "CV", nav_currently: "Atualmente", nav_contact: "Contato",

      hi: "Oi, meu nome &eacute;",
      say: "ela constr&oacute;i coisas — com c&oacute;digo, design &amp; pessoas",
      roles_kicker: "&gt; O QUE EU FA&Ccedil;O &gt;&gt;",
      bio: "Giovanna Ribas &eacute; estudante de Engenharia de Software e desenvolvedora, de Curitiba. Trabalha entre software, dados e design — construindo funcionalidades em produ&ccedil;&atilde;o e automa&ccedil;&otilde;es, e trabalho visual e projetos de comunidade no resto do tempo. Criou e lidera o Coffee &amp; Code, um clube universit&aacute;rio de tecnologia na PUCPR.",

      id_name: "NOME", id_based: "ONDE", id_exp: "EXPERI&Ecirc;NCIA", id_exp_v: "Estagi&aacute;ria de Desenvolvimento de Software",
      id_edu: "FORMA&Ccedil;&Atilde;O",
      id_builds: "CONSTR&Oacute;I",
      id_builds_v: "software · interfaces · sistemas · comunidades · identidades visuais",

      role_1: "Estudante de Engenharia de Software",
      role_2: "Estagi&aacute;ria de Desenvolvimento",
      role_3: "Designer Visual &amp; Criativa",
      role_4: "Coffee &amp; Code — Fundadora",
      role_5: "Dados &amp; automa&ccedil;&atilde;o",
      role_6: "Construir com pessoas",

      datasus_lead: "Ler uma base p&uacute;blica de sa&uacute;de lenta com um rob&ocirc;, em vez de na m&atilde;o.",
      corrida_lead: "Um joguinho sobre estar atrasada para a aula — feito para aprender m&aacute;quinas de estado e game loops.",
      pibble_lead: "Construindo o lado de Funcion&aacute;rios de um sistema de entregas em Django, com dois colegas.",
      p1_date: "Projeto em equipe &middot; abr 2026",
      p2_date: "Individual &middot; jun 2026",
      p3_date: "Projeto em equipe &middot; jun 2026",
      nav_home: "In&iacute;cio",
      home_welcome: "Bem-vinda ao meu portf&oacute;lio &mdash; eu sou",
      home_sub: "estudante na PUCPR &middot; estagi&aacute;ria de desenvolvimento de software",
      home_line: "Eu fa&ccedil;o coisas &mdash; com <em>c&oacute;digo, design &amp; pessoas</em>.",
      home_cv: "Baixar CV &darr;",
      home_pcap: "Software Engineer",
      ph_portrait: "retrato &mdash; imagem pendente",
      about_kicker: "Sobre",
      p4_date: "Acad&ecirc;mico &middot; IoT + web", p5_date: "Acad&ecirc;mico &middot; modelagem de processos",
      flood_h: "Monitor de alagamentos e enchentes na cidade",
      flood_lead: "Sensores no local, um alerta no celular de algu&eacute;m antes de a &aacute;gua subir.",
      flood_desc: "Um ESP32 l&ecirc; sensores de n&iacute;vel de &aacute;gua e alimenta um sistema web integrado que avisa a pessoa respons&aacute;vel quando um ponto est&aacute; em risco.",
      flood_note: "Materiais (fotos, diagrama, telas) est&atilde;o sendo reunidos — ver notas.",
      bpmn_h: "Cl&iacute;nica veterin&aacute;ria — modelagem de processos",
      bpmn_lead: "Mapear como uma cl&iacute;nica funciona de verdade, um processo por vez.",
      bpmn_desc: "Diagramas BPMN dos principais processos da cl&iacute;nica — recep&ccedil;&atilde;o, consultas, procedimentos, prontu&aacute;rios — como base para achar atritos e redesenhar.",
      bpmn_note: "Diagramas est&atilde;o sendo exportados — ver notas.",
      tag_sensors: "sensores", tag_web: "web", tag_alerts: "alertas",
      tag_analysis: "an&aacute;lise de processos", tag_diagrams: "diagramas",
      ph_flood: "hardware &amp; painel web — imagem pendente",
      ph_bpmn: "diagrama BPMN — imagem pendente",
      stack_more: "Para ver mais trabalhos, acesse o meu GitHub &rarr;",

      p1_desc: "Um rob&ocirc; em Selenium, um pipeline em pandas e um dashboard em Streamlit. Trabalho de curso com Jackson Beggi e wingCODING — eu cuidei de extra&ccedil;&atilde;o e tratamento.",
      p2_desc: "Python e Pygame: m&aacute;quina de estados, f&iacute;sica de pulo, obst&aacute;culos aleat&oacute;rios, HUD e recorde salvo. C&oacute;digo meu; a arte &eacute; gerada por IA e sinalizada como tal.",
      p3_desc: "Autentica&ccedil;&atilde;o, n&iacute;veis de acesso ADM/FUNC, CRUD e API REST. Minha parte: o m&oacute;dulo de Funcion&aacute;rios e a liga&ccedil;&atilde;o com Entregas, cadastro CPF/CNPJ e o dashboard admin.",

      journey_h: "A hist&oacute;ria at&eacute; aqui",
      journey_p1: "Comecei na engenharia de software e fui juntando linguagens para construir. Dados vieram primeiro — limpar, automatizar a parte chata. Depois a web, depois o design, depois uma comunidade.",
      journey_p2: "Nada disso foi planejado. Cada coisa fez a pr&oacute;xima fazer sentido: um script virou um pipeline, um exerc&iacute;cio de aula virou um projeto em equipe, um grupo de amigos virou um clube.",
      journey_todo: "&#9432; Linha do tempo provis&oacute;ria — a expandir com datas reais, o &ldquo;porqu&ecirc;&rdquo; de cada passo e fotos.",
      j1_t: "2024 &middot; in&iacute;cio", j1_d: "Engenharia de Software na PUCPR.",
      j2_t: "Python &amp; dados", j2_d: "Primeiras automa&ccedil;&otilde;es com pandas — dados p&uacute;blicos de sa&uacute;de, planilhas, ETL.",
      j3_t: "Coffee &amp; Code", j3_d: "Criei e hoje lidero um clube universit&aacute;rio de tecnologia.",
      j4_t: "Primeiro projeto Django em equipe", j4_d: "Pibble Express — autentica&ccedil;&atilde;o, n&iacute;veis de acesso, um dashboard admin.",
      j5_t: "Est&aacute;gio em dev", j5_d: "Software em produ&ccedil;&atilde;o, no dia a dia. Os detalhes s&atilde;o propriet&aacute;rios.",
      j6_t: "Design &amp; pessoas", j6_d: "Identidade visual, ilustra&ccedil;&atilde;o, eventos com a Diretoria da Mulher.",
      j7_t: "Longe da tela", j7_d: "Fazer p&atilde;o, cookies e outros experimentos.",

      work_h: "Trabalhos selecionados",
      work_intro: "Software, dados, um jogo, uma comunidade. Linguagens diferentes para o mesmo h&aacute;bito — fazer coisas.",
      f_all: "Tudo", f_code: "C&oacute;digo", f_design: "Design", f_people: "Pessoas", f_play: "Jogo",
      wk_datasus: "RPA + pandas + um dashboard para dados p&uacute;blicos de sa&uacute;de",
      wk_game: "um joguinho 2D em Python / Pygame",
      wk_pibble: "sistema de entregas em Django — projeto em equipe",
      wk_coffee: "um clube universit&aacute;rio de tecnologia que criei e lidero",
      wk_creative_t: "Galeria criativa", wk_creative: "ilustra&ccedil;&atilde;o, manipula&ccedil;&atilde;o de imagem, experimentos",
      ph_identity: "identidade &amp; p&ocirc;steres — imagem pendente",

      case_featured: "Caso t&eacute;cnico em destaque",
      datasus_cap: "Dashboard em Streamlit sobre os dados consolidados.",
      fl_processed: "dados tratados",
      lbl_context: "Contexto", lbl_built: "O que constru&iacute;mos", lbl_role: "Meu papel",
      datasus_context: "Os n&uacute;meros de hemoterapia do Paran&aacute; ficam no TabNet do DATASUS — uma interface p&uacute;blica lenta, uma consulta e um export por vez.",
      datasus_built: "Um rob&ocirc; (Selenium) que roda as consultas e l&ecirc; as tabelas de resultado, uma camada em pandas que limpa e consolida cada per&iacute;odo, e um dashboard em Streamlit para comparar o volume entre meses e anos. Trabalho final de um curso de Python, com dois colegas.",
      datasus_role: "Sugeri usar os dados de banco de sangue e trabalhei nos m&oacute;dulos de extra&ccedil;&atilde;o e tratamento. Colegas: Jackson Beggi e wingCODING (orquestra&ccedil;&atilde;o da RPA e dashboard).",
      cta_source: "Ver o c&oacute;digo no GitHub &rarr;",

      case_game: "Jogo — projeto individual",
      corrida_cap: "Tela inicial. A arte &eacute; gerada por IA (nota abaixo).",
      corrida_p1: "Um endless-runner 2D: o estudante est&aacute; atrasado para a aula e precisa desviar da cidade. Chegue a 1000 pontos para passar; perca tr&ecirc;s vidas e acabou.",
      corrida_p2: "Feito em Python e Pygame — m&aacute;quina de estados limpa (menu / jogo / fim), f&iacute;sica de pulo com gravidade, obst&aacute;culos aleat&oacute;rios, dificuldade que sobe com a pontua&ccedil;&atilde;o, vidas com invencibilidade tempor&aacute;ria, um HUD e recorde salvo.",
      corrida_note: "O c&oacute;digo &eacute; de autoria pr&oacute;pria. Os assets visuais s&atilde;o gerados por IA e mostrados com transpar&ecirc;ncia.",
      tag_states: "m&aacute;quina de estados",

      case_team: "Web — projeto em equipe",
      pibble_p: "Um sistema de gest&atilde;o de entregas em Django: autentica&ccedil;&atilde;o, n&iacute;veis de acesso ADM/FUNC, CRUD de clientes, produtos, funcion&aacute;rios e entregas, uma API REST e frontend integrado. Feito com dois colegas.",
      pibble_role_h: "Minha contribui&ccedil;&atilde;o",
      pibble_r1: "M&oacute;dulo de Funcion&aacute;rios e sua integra&ccedil;&atilde;o com Entregas",
      pibble_r2: "Cadastro aceitando CPF ou CNPJ (formul&aacute;rio + migra&ccedil;&atilde;o)",
      pibble_r3: "Dashboard administrativo",
      pibble_r4: "Padroniza&ccedil;&atilde;o de formul&aacute;rios e ajustes de interface",
      tag_auth: "autentica&ccedil;&atilde;o",

      coffee_why: "Um clube universit&aacute;rio de tecnologia que criei e construo ativamente, com a equipe.",
      coffee_p1: "Existe para dar aos estudantes um espa&ccedil;o com menos barreira e mais pr&aacute;tica para aprender, construir projetos juntos e trocar o que sabem — fora da press&atilde;o da sala de aula.",
      coffee_p2: "Lidero onde design e tecnologia se encontram: a identidade visual, os materiais, como os encontros acontecem e como as pessoas s&atilde;o convidadas.",
      ph_logo: "logo &amp; identidade — imagem pendente",
      ph_poster: "p&ocirc;ster / encontro — imagem pendente",
      ph_social: "pe&ccedil;a de social — imagem pendente",

      creative_h: "Playground",
      creative_intro: "Tudo o que fa&ccedil;o longe do editor de c&oacute;digo &mdash; arte digital, desenho a nanquim, design gr&aacute;fico, fotografia, o que ando assando, e voluntariados e eventos. Toque em qualquer pe&ccedil;a para ver maior.",
      pf_all: "Todos",
      pf_digital: "Arte digital",
      pf_illustration: "Ilustra&ccedil;&atilde;o",
      pf_photo: "Fotografia",
      pf_kitchen: "Na cozinha",
      pf_community: "Voluntariado &amp; eventos",
      pg_ink: "Estudo a nanquim <i>Ilustra&ccedil;&atilde;o</i>",
      pg_photo: "Fotografia <i>Fotografia</i>",
      pg_kitchen: "Na cozinha <i>Fotografia de comida</i>",
      pg_vol: "Voluntariado &amp; eventos <i>Comunidade</i>",
      cta_behance: "Mais trabalho visual no Behance &rarr;",

      community_h: "Comunidade &amp; impacto social",
      community_lead: "Construir com pessoas — colabora&ccedil;&atilde;o, voluntariado, comunica&ccedil;&atilde;o e eventos.",
      ph_action: "foto selecionada — imagem pendente",
      ci_ddm: "Coordenadora de Eventos: organiza&ccedil;&atilde;o de eventos e comunica&ccedil;&atilde;o, e iniciativas de inclus&atilde;o e impacto social.",
      ci_teia: "Social media: comunica&ccedil;&atilde;o e divulga&ccedil;&atilde;o das a&ccedil;&otilde;es do projeto.",
      ci_vol_h: "Interact &amp; voluntariado",
      ci_vol: "A&ccedil;&otilde;es ambientais, atividades com crian&ccedil;as e outros voluntariados.",
      privacy_note: "As fotos s&atilde;o escolhidas com cuidado — sem rostos de crian&ccedil;as em contexto sens&iacute;vel, sem crach&aacute;s leg&iacute;veis ou dados pessoais.",

      currently_h: "Atualmente",
      cur_role: "Estagi&aacute;ria de Desenvolvimento de Software",
      cur_p: "Atuo no desenvolvimento e na manuten&ccedil;&atilde;o de software em produ&ccedil;&atilde;o, entre frontend, backend, APIs e bancos de dados — implementa&ccedil;&atilde;o de funcionalidades, investiga&ccedil;&atilde;o de bugs e integra&ccedil;&atilde;o de camadas de sistemas existentes.",
      cur_note: "Por serem sistemas propriet&aacute;rios, o c&oacute;digo-fonte e os materiais internos n&atilde;o est&atilde;o dispon&iacute;veis publicamente.",
      cur_study_h: "Estudo", cur_more_h: "Mais projetos", cur_allrepos: "Todos os reposit&oacute;rios &rarr;",

      beyond_h: "Al&eacute;m da tela",
      beyond_lead: "Coisas que gosto de fazer longe do teclado — principalmente confeitaria, um pouco de fotografia.",
      ph_food: "p&atilde;o — imagem pendente", ph_photo: "fotografia — imagem pendente",

      contact_h: "Contato",
      contact_line: "Aberta a construir coisas com gente boa.",

      foot_say: "Vamos construir algo.",
      foot_note: "Feito &agrave; m&atilde;o com HTML, CSS &amp; JavaScript. Sem framework.",
      modal_todo: "A imagem completa e uma nota curta sobre a pe&ccedil;a est&atilde;o sendo adicionadas."
    }
  };

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;
    document.documentElement.lang = (lang === "pt") ? "pt-BR" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    var btn = document.getElementById("lang");
    if (btn) { btn.textContent = (lang === "pt") ? "EN" : "PT"; }
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  function initialLang() {
    try { var s = localStorage.getItem("lang"); if (s === "pt" || s === "en") return s; } catch (e) {}
    return /^pt\b/i.test(navigator.language || "") ? "pt" : "en";
  }

  /* ---------- filters (work grid + playground gallery) ---------- */
  function bindFilterGroup(groupSel, itemSel) {
    var group = document.querySelector(groupSel);
    if (!group) return;
    var chips = group.querySelectorAll(".chip");
    var items = document.querySelectorAll(itemSel);
    if (!chips.length || !items.length) return;
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var f = chip.getAttribute("data-filter");
        chips.forEach(function (c) { c.classList.toggle("is-on", c === chip); c.setAttribute("aria-pressed", c === chip); });
        items.forEach(function (it) {
          it.hidden = !(f === "all" || it.getAttribute("data-kind") === f);
        });
      });
    });
  }
  function initFilters() {
    bindFilterGroup(".filters:not(.gallery__filters)", ".work__grid .wk");
    bindFilterGroup(".gallery__filters", ".gallery__grid .art");
  }

  /* ---------- artwork modal ---------- */
  function initModal() {
    var modal = document.getElementById("modal");
    if (!modal) return;
    var box = modal.querySelector(".modal__box");
    var closeBtn = document.getElementById("modal-close");
    var titleEl = document.getElementById("modal-title");
    var catEl = document.getElementById("modal-cat");
    var phEl = document.getElementById("modal-ph");
    var imgEl = document.getElementById("modal-img");
    var lastFocus = null;

    function open(btn) {
      lastFocus = btn;
      var title = btn.getAttribute("data-title") || "";
      titleEl.textContent = title;
      catEl.textContent = btn.getAttribute("data-cat") || "";
      var full = btn.getAttribute("data-full") || "";
      if (imgEl) {
        if (full) { imgEl.src = full; imgEl.alt = title; imgEl.hidden = false; }
        else { imgEl.removeAttribute("src"); imgEl.hidden = true; }
      }
      if (phEl) phEl.textContent = full ? "" : title;
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      closeBtn.focus();
      document.addEventListener("keydown", onKey);
    }
    function close() {
      modal.hidden = true;
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      if (lastFocus) lastFocus.focus();
    }
    function onKey(e) {
      if (e.key === "Escape") { close(); return; }
      if (e.key === "Tab") {
        var f = box.querySelectorAll("button, a[href]");
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    document.querySelectorAll(".art").forEach(function (b) {
      b.addEventListener("click", function () { open(b); });
    });
    closeBtn.addEventListener("click", close);
    modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
  }

  /* ---------- staggered reveal for the playground grid ---------- */
  function initReveal() {
    var grid = document.querySelector(".gallery__grid");
    if (!grid || !("IntersectionObserver" in window)) return;
    var tiles = [].slice.call(grid.querySelectorAll(".art"));
    if (!tiles.length) return;
    grid.classList.add("reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var t = en.target;
        t.style.transitionDelay = (t._revIdx % 3) * 80 + "ms";
        t.classList.add("is-in");
        io.unobserve(t);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    tiles.forEach(function (t, i) { t._revIdx = i; io.observe(t); });
    // safety net: never leave a tile stuck invisible
    window.addEventListener("load", function () {
      setTimeout(function () {
        tiles.forEach(function (t) {
          var r = t.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) { t.classList.add("is-in"); io.unobserve(t); }
        });
      }, 400);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    applyLang(initialLang());
    var btn = document.getElementById("lang");
    if (btn) btn.addEventListener("click", function () {
      applyLang(document.documentElement.lang === "pt-BR" ? "en" : "pt");
    });

    initFilters();
    initModal();
    initReveal();
  });
})();
