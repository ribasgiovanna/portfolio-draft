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

      datasus_lead: "Years of public blood-supply data, trapped in a 1990s government form. So I sent a robot in.",
      p1_detail: "Course project at Harve (April 2026) with Jackson Beggi and wingCODING &mdash; I proposed using blood-bank data and built the extraction and treatment modules. The hard part was the form itself: selectors by <code>id</code> to get past accented <code>name</code> attributes like <code>SRegi&atilde;o</code>, an explicit wait on every interaction, and tab switching by polling <code>window_handles</code> with a timeout. Real SUS data &mdash; Outpatient Production, subgroup 0306 (Hemotherapy), &ldquo;approved quantity&rdquo;, state of Paran&aacute;.",
      p2_detail: "High score is persisted to disk; if an art file is missing, the game falls back to plain shapes and keeps running. My own code &mdash; the sprites and the menu / win / lose screens are AI-generated and labelled as such. Individual academic project.",
      p3_detail: "Built with two teammates on a fork of <code>rodavio/pibble_express</code>. My part: the Employees module and its integration with Deliveries, the CPF-or-CNPJ registration (form + migration), the administrative dashboard, and standardising the forms and the logout across all four apps.",
      p4_detail: "A Curitiba-focused prototype: catch the drains that clog and flood before the rain does. Each monitored point has its own threshold; when the level crosses it, the on-screen alarm and the physical buzzer trigger together. Built on the ESP32 with an ultrasonic distance sensor as the gauge and Blynk as the dashboard and notification layer.",
      p5_detail: "Three processes modelled end to end &mdash; appointment management, stock control and staff scheduling &mdash; plus subprocesses for client registration and payment.",
      pm_hint: "open &nearr;",
      pm_video: "Watch the demo &nearr;",
      corrida_lead: "A student who&rsquo;s late for class, an endless city, and a state machine written from scratch.",
      pibble_lead: "The employees side of a Django delivery system &mdash; auth, access levels, and a form that speaks both CPF and CNPJ.",
      p1_date: "Team project &middot; Apr 2026",
      p2_date: "Individual &middot; academic",
      p3_date: "Team project &middot; Jun 2026",
      nav_home: "Home",
      home_welcome: "Welcome to my portfolio &mdash; I'm a",
      home_role: "Software Engineer",
      home_line: "<em>Code, design &amp; people</em> &mdash; I build where they meet.",
      id_kicker: "DEV &middot; DESIGN LICENSE",
      id_since: "SINCE", id_sig: "signature", id_sticker_a: "BUILT BY HAND",
      home_cv: "Download CV &darr;",
      home_pcap: "Software Engineer",
      ph_portrait: "portrait &mdash; image pending",
      about_kicker: "About",
      fan_talk: "on stage", fan_dusk: "golden hour",
      p4_date: "Academic &middot; Jun 2026", p5_date: "Team project &middot; Jun 2026",
      flood_h: "Storm-drain trash &amp; flooding monitor &mdash; Curitiba",
      flood_lead: "Blocked storm drains are why streets flood. This keeps an eye on them.",
      flood_desc: "An ESP32 with an ultrasonic sensor measures how much a storm drain has filled with water and debris, and reports to a Blynk &ldquo;Smart City&rdquo; dashboard that charts the level and fires an alarm and a buzzer when a drain is close to overflowing.",
      flood_note: "Materials (photos, diagram, screens) are being gathered — see notes.",
      bpmn_h: "Veterinary clinic — process modeling",
      bpmn_lead: "Mapping how a clinic actually runs, one process at a time.",
      bpmn_desc: "BPMN models in Bizagi for a veterinary clinic&rsquo;s core processes &mdash; appointment management, stock control and staff scheduling &mdash; with subprocesses for client registration and payment. Built from the manager&rsquo;s descriptions; the clinic chose not to be named.",
      bpmn_note: "Diagrams are being exported — see notes.",
      tag_sensors: "ultrasonic sensor", tag_web: "web", tag_alerts: "alerts",
      bpmn_role: "Five-person team: Ana Beatriz Patussi Reolon, Ana Clara Ernandes Nogueira, Emelize Bonfim Mlot, Giovanna Ribas dos Reis, Ot&aacute;vio Brito Fonseca.",
      tag_analysis: "process analysis", tag_diagrams: "diagrams",
      ph_flood: "hardware &amp; web dashboard — image pending",
      ph_bpmn: "BPMN diagram — image pending",
      stack_more: "For more projects, visit my GitHub &rarr;",

      p1_desc: "A Selenium bot drives the DATASUS TabNet form &mdash; every filter, every period &mdash; and reads the result tables with pandas, BeautifulSoup as a fallback. A parallel runner does three workers with staggered starts and checkpointing, consolidates the exports and cleans them; a Streamlit dashboard compares hemotherapy volume across months and years.",
      p2_desc: "Python + Pygame endless-runner. Hand-rolled state machine (menu &rarr; play &rarr; win/lose &rarr; menu), gravity-based jump, obstacles that spawn faster as the score climbs, speed that ramps every 100 points up to a cap, three lives with post-hit invincibility and a blink, and a HUD with a progress bar to the 1000-point goal.",
      p3_desc: "Django + DRF app for delivery management: clients, products, employees and deliveries, login / logout, and ADM / FUNC access levels tied to a Django <code>User</code> through a <code>OneToOneField</code>. Full CRUD on all four resources, a REST API at <code>/api/</code>, and front-end input masks.",

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
      cta_source: "View project on GitHub &rarr;",

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
      pg_pencil: "Pencil study <i>Traditional</i>",
      pg_borboleta: "Awareness campaign <i>Graphic design</i>",
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

      id_name: "NOME", id_based: "BASE", id_exp: "EXPERI&Ecirc;NCIA", id_exp_v: "Estagi&aacute;ria de Desenvolvimento de Software",
      id_edu: "FORMA&Ccedil;&Atilde;O",
      id_builds: "CONSTR&Oacute;I",
      id_builds_v: "software · interfaces · sistemas · comunidades · identidades visuais",

      role_1: "Estudante de Engenharia de Software",
      role_2: "Estagi&aacute;ria de Desenvolvimento",
      role_3: "Designer Visual &amp; Criativa",
      role_4: "Coffee &amp; Code — Fundadora",
      role_5: "Dados &amp; automa&ccedil;&atilde;o",
      role_6: "Construir com pessoas",

      datasus_lead: "Anos de dados p&uacute;blicos de hemoterapia, presos num formul&aacute;rio de governo dos anos 90. Ent&atilde;o mandei um rob&ocirc;.",
      p1_detail: "Trabalho de curso na Harve (abril de 2026) com Jackson Beggi e wingCODING &mdash; eu propus usar os dados de banco de sangue e constru&iacute; os m&oacute;dulos de extra&ccedil;&atilde;o e tratamento. O dif&iacute;cil era o formul&aacute;rio: seletores por <code>id</code> para driblar atributos <code>name</code> com acento como <code>SRegi&atilde;o</code>, wait expl&iacute;cito em cada intera&ccedil;&atilde;o e troca de aba por polling de <code>window_handles</code> com timeout. Dados reais do SUS &mdash; Produ&ccedil;&atilde;o Ambulatorial, subgrupo 0306 (Hemoterapia), &ldquo;quantidade aprovada&rdquo;, Paran&aacute;.",
      p2_detail: "O recorde &eacute; salvo em disco; se faltar um arquivo de arte, o jogo cai para formas simples e continua rodando. C&oacute;digo meu &mdash; os sprites e as telas de menu / vit&oacute;ria / derrota s&atilde;o gerados por IA e sinalizados como tal. Projeto acad&ecirc;mico individual.",
      p3_detail: "Feito com dois colegas, num fork de <code>rodavio/pibble_express</code>. Minha parte: o m&oacute;dulo de Funcion&aacute;rios e a integra&ccedil;&atilde;o com Entregas, o cadastro por CPF ou CNPJ (form + migration), o dashboard administrativo e a padroniza&ccedil;&atilde;o dos formul&aacute;rios e do logout nos quatro apps.",
      p4_detail: "Um prot&oacute;tipo com foco em Curitiba: pegar os bueiros que entopem e alagam antes da chuva. Cada ponto monitorado tem seu limite; quando o n&iacute;vel passa, o alarme na tela e o buzzer f&iacute;sico disparam juntos. Feito no ESP32 com um sensor ultrass&ocirc;nico de dist&acirc;ncia como medidor e o Blynk como painel e camada de notifica&ccedil;&atilde;o.",
      p5_detail: "Tr&ecirc;s processos modelados de ponta a ponta &mdash; gerenciamento de consultas, controle de estoque e gest&atilde;o de funcion&aacute;rios &mdash; mais subprocessos de cadastro de cliente e pagamento.",
      pm_hint: "abrir &nearr;",
      pm_video: "Ver o v&iacute;deo &nearr;",
      corrida_lead: "Um estudante atrasado para a aula, uma cidade infinita e uma m&aacute;quina de estados feita do zero.",
      pibble_lead: "O lado de funcion&aacute;rios de um sistema de entregas em Django &mdash; autentica&ccedil;&atilde;o, n&iacute;veis de acesso e um cadastro que aceita CPF e CNPJ.",
      p1_date: "Projeto em equipe &middot; abr 2026",
      p2_date: "Individual &middot; acad&ecirc;mico",
      p3_date: "Projeto em equipe &middot; jun 2026",
      nav_home: "In&iacute;cio",
      home_welcome: "Bem-vindo (a) ao meu portf&oacute;lio &mdash; eu sou",
      home_role: "Engenheira de Software",
      home_line: "<em>C&oacute;digo, design &amp; pessoas</em> &mdash; construo onde eles se encontram.",
      id_kicker: "LICEN&Ccedil;A DEV &middot; DESIGN",
      id_since: "DESDE", id_sig: "assinatura", id_sticker_a: "FEITO &Agrave; M&Atilde;O",
      home_cv: "Baixar CV &darr;",
      home_pcap: "Software Engineer",
      ph_portrait: "retrato &mdash; imagem pendente",
      about_kicker: "Sobre",
      fan_talk: "no palco", fan_dusk: "hora dourada",
      p4_date: "Acad&ecirc;mico &middot; jun 2026", p5_date: "Projeto em equipe &middot; jun 2026",
      flood_h: "Monitor de lixo em bueiros e alagamentos &mdash; Curitiba",
      flood_lead: "Bueiro entupido &eacute; o motivo de rua alagada. Isto fica de olho neles.",
      flood_desc: "Um ESP32 com sensor ultrass&ocirc;nico mede o quanto um bueiro encheu de &aacute;gua e detritos e reporta a um painel Blynk &ldquo;Smart City&rdquo;, que registra o n&iacute;vel e dispara um alarme e um buzzer quando o bueiro est&aacute; perto de transbordar.",
      flood_note: "Materiais (fotos, diagrama, telas) est&atilde;o sendo reunidos — ver notas.",
      bpmn_h: "Cl&iacute;nica veterin&aacute;ria — modelagem de processos",
      bpmn_lead: "Mapear como uma cl&iacute;nica funciona de verdade, um processo por vez.",
      bpmn_desc: "Modelos BPMN no Bizagi para os processos centrais de uma cl&iacute;nica veterin&aacute;ria &mdash; gerenciamento de consultas, controle de estoque e gest&atilde;o de funcion&aacute;rios &mdash; com subprocessos de cadastro de cliente e pagamento. Feito a partir das descri&ccedil;&otilde;es do gestor; a cl&iacute;nica optou por n&atilde;o se identificar.",
      bpmn_note: "Diagramas est&atilde;o sendo exportados — ver notas.",
      tag_sensors: "sensor ultrass&ocirc;nico", tag_web: "web", tag_alerts: "alertas",
      bpmn_role: "Equipe de cinco: Ana Beatriz Patussi Reolon, Ana Clara Ernandes Nogueira, Emelize Bonfim Mlot, Giovanna Ribas dos Reis, Ot&aacute;vio Brito Fonseca.",
      tag_analysis: "an&aacute;lise de processos", tag_diagrams: "diagramas",
      ph_flood: "hardware &amp; painel web — imagem pendente",
      ph_bpmn: "diagrama BPMN — imagem pendente",
      stack_more: "Para mais projetos, visite o meu GitHub &rarr;",

      p1_desc: "Um rob&ocirc; Selenium opera o formul&aacute;rio do DATASUS TabNet &mdash; cada filtro, cada per&iacute;odo &mdash; e l&ecirc; as tabelas com pandas, BeautifulSoup como fallback. Um runner paralelo roda tr&ecirc;s workers com in&iacute;cio escalonado e checkpoint, consolida as exporta&ccedil;&otilde;es e faz a limpeza; um dashboard em Streamlit compara o volume de hemoterapia entre meses e anos.",
      p2_desc: "Endless-runner em Python + Pygame. M&aacute;quina de estados feita &agrave; m&atilde;o (menu &rarr; jogo &rarr; vit&oacute;ria/derrota &rarr; menu), pulo com gravidade, obst&aacute;culos que surgem mais r&aacute;pido conforme a pontua&ccedil;&atilde;o sobe, velocidade que acelera a cada 100 pontos at&eacute; um teto, tr&ecirc;s vidas com invencibilidade e piscada ap&oacute;s dano, e um HUD com barra de progresso at&eacute; a meta de 1000 pontos.",
      p3_desc: "App em Django + DRF para gest&atilde;o de entregas: clientes, produtos, funcion&aacute;rios e entregas, login / logout e n&iacute;veis de acesso ADM / FUNC ligados a um <code>User</code> do Django por um <code>OneToOneField</code>. CRUD completo nos quatro recursos, uma API REST em <code>/api/</code> e m&aacute;scaras de entrada no front.",

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
      cta_source: "Ver projeto no GitHub &rarr;",

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
      pg_pencil: "Estudo a l&aacute;pis <i>Tradicional</i>",
      pg_borboleta: "Campanha de conscientiza&ccedil;&atilde;o <i>Design gr&aacute;fico</i>",
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

  /* ---------- project detail modal ---------- */
  function initProjectModal() {
    var modal = document.getElementById("pmodal");
    var panels = document.querySelectorAll(".panel[data-pm]");
    if (!modal || !panels.length) return;
    var box = modal.querySelector(".pmodal__box");
    var closeBtn = document.getElementById("pm-close");
    var elImg = document.getElementById("pm-img");
    var elNum = document.getElementById("pm-num");
    var elDate = document.getElementById("pm-date");
    var elTitle = document.getElementById("pm-title");
    var elLead = document.getElementById("pm-lead");
    var elDesc = document.getElementById("pm-desc");
    var elTags = document.getElementById("pm-tags");
    var elLinks = document.getElementById("pm-links");
    var lastFocus = null;
    var i18n = (typeof I18N !== "undefined") ? I18N : null;
    function t(key, fallback) {
      var lang = document.documentElement.lang === "pt-BR" ? "pt" : "en";
      return (i18n && i18n[lang] && i18n[lang][key]) || fallback;
    }

    function txt(node, sel) { var n = node.querySelector(sel); return n ? n.textContent.trim() : ""; }

    function open(panel) {
      lastFocus = document.activeElement;
      var img = panel.getAttribute("data-pm-img") || (panel.querySelector(".panel__shot img") || {}).src || "";
      elImg.src = img;
      elImg.alt = panel.getAttribute("data-pm-alt") || txt(panel, "h3");
      elNum.textContent = txt(panel, ".panel__tab").replace(/^[^A-Za-z0-9]+/, "");
      elDate.textContent = txt(panel, ".panel__date");
      elTitle.textContent = txt(panel, "h3");
      elLead.textContent = txt(panel, ".panel__lead");

      elDesc.innerHTML = "";
      var more = panel.querySelector(".panel__body .panel__text > .panel__more");
      if (more) { var p = document.createElement("p"); p.innerHTML = more.innerHTML; elDesc.appendChild(p); }
      var detail = panel.querySelector(".panel__detail");
      if (detail) {
        Array.prototype.forEach.call(detail.children, function (c) {
          var p = document.createElement("p");
          p.className = c.className;
          p.innerHTML = c.innerHTML;
          elDesc.appendChild(p);
        });
      }

      var tags = panel.querySelector(".tagrow");
      elTags.innerHTML = tags ? tags.innerHTML : "";

      elLinks.innerHTML = "";
      var repo = panel.getAttribute("data-pm-repo");
      if (repo) {
        var a = document.createElement("a");
        a.className = "cta"; a.href = repo; a.target = "_blank"; a.rel = "noopener noreferrer";
        a.innerHTML = t("cta_source", "View project on GitHub &rarr;");
        elLinks.appendChild(a);
      }
      var vid = panel.getAttribute("data-pm-video");
      if (vid) {
        var v = document.createElement("a");
        v.className = "cta"; v.href = vid; v.target = "_blank"; v.rel = "noopener noreferrer";
        v.innerHTML = t("pm_video", "Watch the demo &nearr;");
        elLinks.appendChild(v);
      }

      modal.hidden = false;
      document.body.style.overflow = "hidden";
      box.scrollTop = 0;
      closeBtn.focus();
      document.addEventListener("keydown", onKey);
    }
    function close() {
      modal.hidden = true;
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
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

    Array.prototype.forEach.call(panels, function (panel) {
      panel.setAttribute("tabindex", "0");
      panel.setAttribute("role", "button");
      panel.addEventListener("click", function (e) {
        if (e.target.closest("a[href], button")) return;   /* let real links/buttons work */
        open(panel);
      });
      panel.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          if (e.target !== panel) return;
          e.preventDefault(); open(panel);
        }
      });
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

  /* ---------- about photo fan: one photo -> pop -> fan open ---------- */
  function initAboutFan() {
    var fan = document.querySelector(".about__fan");
    if (!fan) return;
    fan.classList.add("is-armed");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window)) { fan.classList.add("is-open"); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.disconnect();
        if (reduce) { fan.classList.add("is-open"); return; }
        fan.classList.add("is-pop");
        setTimeout(function () { fan.classList.add("is-open"); }, 360);
      });
    }, { threshold: 0.4 });
    io.observe(fan);
  }

  /* ---------- typewriter for the Home role heading ---------- */
  function typeRole() {
    var el = document.getElementById("home-h");
    if (!el) return;
    var full = (el.textContent || "").trim();
    if (!full) return;
    el.setAttribute("aria-label", full);           /* AT reads the whole heading */
    var chars = Array.prototype.slice.call(full);
    var hl = -1;                                    /* the first "S" gets the accent */
    for (var j = 0; j < chars.length; j++) {
      if (chars[j] === "S" || chars[j] === "s") { hl = j; break; }
    }
    if (hl < 0) { hl = chars.length - 1; while (hl > 0 && /\s/.test(chars[hl])) hl--; }
    var token = el._twToken = (el._twToken || 0) + 1;

    function esc(c) { return c.replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
    function paint(n, caret) {
      var html = "";
      for (var k = 0; k < n; k++) {
        html += (k === hl) ? '<span class="home__role-hl">' + esc(chars[k]) + "</span>" : esc(chars[k]);
      }
      el.innerHTML = html + (caret ? '<span class="home__caret" aria-hidden="true"></span>' : "");
    }

    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { paint(chars.length, false); return; }

    el.classList.add("is-typing");
    var i = 0;
    (function step() {
      if (el._twToken !== token) return;            /* superseded by a newer run */
      i++;
      paint(i, true);
      if (i < chars.length) {
        setTimeout(step, 50 + Math.random() * 60);
      } else {
        setTimeout(function () {
          if (el._twToken !== token) return;
          el.classList.remove("is-typing");
          paint(chars.length, false);               /* drop the caret when settled */
        }, 1100);
      }
    })();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    applyLang(initialLang());
    typeRole();
    var btn = document.getElementById("lang");
    if (btn) btn.addEventListener("click", function () {
      applyLang(document.documentElement.lang === "pt-BR" ? "en" : "pt");
      typeRole();
    });

    initFilters();
    initModal();
    initProjectModal();
    initReveal();
    initAboutFan();
  });
})();
