const portfolioData = [
  {
    id: "b1-k1",
    code: "B1-K1",
    title: "Realiseert software",
    description:
      "In deze kerntaak laat ik zien hoe ik software plan, ontwerp, realiseer, test en verbeter.",
    processes: [
      {
        code: "B1-K1-W1",
        title: "Plant werkzaamheden en bewaakt de voortgang",
        criteria: [
          ["Eisen/wensen", "Ik heb de uitgangspunten, technische eisen, functionele eisen en wensen bepaald en gedocumenteerd."],
          ["Planning", "Ik heb op basis van de functionaliteit een complete en realistische planning gemaakt."],
          ["Bewaken voortgang", "Ik heb de gestelde doelen en planning bewaakt."]
        ]
      },
      {
        code: "B1-K1-W2",
        title: "Ontwerpt software",
        criteria: [
          ["Ontwerp", "Ik heb de eisen en wensen vertaald naar een passend, eenduidig en volledig ontwerp."],
          ["Schematechnieken", "Ik heb relevante schematechnieken gebruikt, zoals een activiteitendiagram, klassendiagram, ERD of use case diagram."],
          ["Onderbouwing", "Ik heb mijn ontwerpkeuzes onderbouwd met steekhoudende argumenten, rekening houdend met haalbaarheid, privacy en security."]
        ]
      },
      {
        code: "B1-K1-W3",
        title: "Realiseert (onderdelen van) software",
        criteria: [
          ["Gerealiseerde functionaliteit", "Ik heb voldoende functionaliteit gerealiseerd binnen de gestelde of geplande tijd."],
          ["Kwaliteit functionaliteiten", "Mijn opgeleverde functionaliteiten voldoen aan de eisen en wensen."],
          ["Kwaliteit code", "Ik lever code van goede kwaliteit op."],
          ["Versiebeheer", "Ik heb versiebeheer effectief toegepast."]
        ]
      },
      {
        code: "B1-K1-W4",
        title: "Test software",
        criteria: [
          ["Testplan", "Mijn testcases in het testplan sluiten aan op de functionaliteit en bevatten alle scenario's."],
          ["Testscenario", "Ik heb voor alle toegewezen functionaliteit testscenario's of testcases gemaakt."],
          ["Testen", "Ik voer de testactiviteiten correct en volgens het testplan uit."],
          ["Testrapport", "Mijn testrapport bevat testresultaten van alle functionaliteiten met de juiste conclusies."]
        ]
      },
      {
        code: "B1-K1-W5",
        title: "Doet verbetervoorstellen voor software",
        criteria: [
          ["Analyseren", "Ik analyseer systematisch alle beschikbare informatiebronnen voor mogelijke aanpassingen aan de software."],
          ["Verbetervoorstellen", "Ik interpreteer wensen, reacties, testresultaten en/of meldingen naar realiseerbare verbetervoorstellen."],
          ["Planning", "Ik stel vast welke werkzaamheden nodig zijn en maak daarvoor een haalbare planning."]
        ]
      }
    ]
  },
  {
    id: "b1-k2",
    code: "B1-K2",
    title: "Werkt in een ontwikkelteam",
    description:
      "In deze kerntaak laat ik zien hoe ik overleg, mijn werk presenteer en reflecteer binnen een ontwikkelteam.",
    processes: [
      {
        code: "B1-K2-W1",
        title: "Voert overleg",
        criteria: [
          ["Actieve deelname", "Ik neem actief deel aan overleg, breng relevante onderwerpen in en stel de juiste vragen."],
          ["Afstemmen", "Ik stem regelmatig en tijdig af met projectteamleden en opdrachtgever over voortgang en knelpunten."],
          ["Afspraken vastleggen", "Ik leg gemaakte afspraken eenduidig vast."],
          ["Afspraken nakomen", "Ik houd mij aan gemaakte afspraken."]
        ]
      },
      {
        code: "B1-K2-W2",
        title: "Presenteert het opgeleverde werk",
        criteria: [
          ["Presentatie inhoud", "Ik leg de functionaliteiten uit met een goed opgebouwd verhaal dat ik onderbouw met argumenten."],
          ["Presentatietechnieken", "Ik stem mijn communicatiestijl en presentatiemiddelen af op de toehoorders."],
          ["Beantwoorden vragen", "Ik beantwoord vragen met steekhoudende argumenten."]
        ]
      },
      {
        code: "B1-K2-W3",
        title: "Reflecteert op het werk",
        criteria: [
          ["Feedbackproces", "Ik benoem positieve punten en verbeterpunten van mijn eigen proces en van de teamprestaties."],
          ["Reactie op feedback", "Ik reageer actief op ontvangen feedback."]
        ]
      }
    ]
  }
];

const METAPHORS = {
  "B1-K1": {
    quote: "Ik had genoeg van hoe het ging en besloot dat het anders moest."
  },
  "B1-K2": {
    quote: "De samenwerking gaf me de verbinding die ik tijdens corona compleet had gemist."
  },
  "B1-K1-W1": { line: "Grote problemen in stukjes hakken en stap voor stap oplossen." },
  "B1-K1-W2": { line: "Een platform ontwerpen dat echt werkt voor gemeentes en onderwijsinstellingen." },
  "B1-K1-W3": { line: "Volledig de verantwoordelijkheid gepakt. Dat voelde uiteindelijk als een opluchting." },
  "B1-K1-W4": { line: "Na de oplevering kwamen ze met feedback. Precies wat ik nodig had om beter te worden." },
  "B1-K1-W5": { line: "Na de presentatie op 12 mei heb ik meteen een verbetervoorstel uitgewerkt." },
  "B1-K2-W1": { line: "Regelmatig afstemmen, ook als het project zwaarder werd dan verwacht." },
  "B1-K2-W2": { line: "Niet als een to-do lijst laten zien, maar als een project dat laat zien wat ik kan." },
  "B1-K2-W3": { line: "Van twijfelen of ik er mee door moest gaan, naar afronden met trots." }
};

// ── EVIDENCE SUBSECTIES ────────────────────────────────────
// Per werkproces koppelt elk criterium aan specifieke bestanden,
// zodat de bewijslastkolom een gestructureerd verhaal toont.
const EVIDENCE_SECTIONS = {
  "B1-K1-W1": [
    { label: "Eisen/wensen",
      files: ["PvA_Doelstellingen_LimburgUnivercity.png",
              "MoSCoW_LimburgUnivercity.png",
              "PvE_Eisen_deel1_LimburgUnivercity.png",
              "PvE_Eisen_deel2_LimburgUnivercity.png",
              "PvE_Wensen_LimburgUnivercity.png",
              "Limburg_Univercity_Documentatie.pdf"] },
    { label: "Planning",
      files: ["PvA_Planning_LimburgUnivercity.png",
              "Whiteboard_planning:overleg.jpeg",
              "Trello:Planning_Limburg-Univercity.jpg",
              "Trello:Planning_FashionWithAView.jpg"] },
    { label: "Bewaken voortgang",
      files: ["Documenthistorie_Revisies_LimburgUnivercity.png",
              "Planning_Verbetervoorstel_LimburgUnivercity.png"] }
  ],
  "B1-K1-W2": [
    { label: "Ontwerp",
      files: ["Storyboard_Design1_Limburg-Univercity.jpg",
              "Storyboard_Design2_Limburg_Univercity.jpg",
              "Storyboard_Design3_Limburg-Univercity.jpg",
              "Concept:Mockup_Limburg-Univercity.jpg"] },
    { label: "Schematechnieken",
      files: ["ERD-Diagram_Limburg-Univercity.jpg",
              "Overzicht_Usecase_Limburg-Univercity.jpg",
              "Admin_Usecase_Limburg-Univercity.jpg",
              "Gemeente_Usecase_Limburg-Univercity.jpg",
              "Onderwijs_Usecase_Limburg-Univercity.jpg"] },
    { label: "Onderbouwing",
      files: ["TO_TechnischeSpecificaties_LimburgUnivercity.png",
              "Onderbouwing_Beveiliging_SHA256_Supabase_LimburgUnivercity.png",
              "Limburg_Univercity_Documentatie.pdf"] }
  ],
  "B1-K1-W3": [
    { label: "Gerealiseerde functionaliteit",
      files: ["Limburg_Univercity.png",
              "Limburg_Univercity_Cases.png",
              "Limburg_Univercity_RecenteCases.png",
              "Limburg_Univercity_Over.png",
              "Dasboard_Danny_Main_Section.jpg",
              "Dashboard_Danny_GymSection.jpg",
              "Dashboard_Danny_GymDay.jpg",
              "Dashboard_Danny_Habits.jpg",
              "Dashboard_Danny_Health_Section.jpg",
              "Dashboard_Danny_AgendaAPI.jpg",
              "Dashboard_Main_TaskHistory.jpg"] },
    { label: "Kwaliteit functionaliteiten",
      files: ["KF_Navigatie_Homepage_LimburgUnivercity.png",
              "KF_Cases_Zoeken_Filter_LimburgUnivercity.png",
              "KF_RecenteCases_HoeWerktHet_LimburgUnivercity.png",
              "KF_OverPlatform_LimburgUnivercity.png",
              "KF_Formulier_NieuweCase_LimburgUnivercity.png",
              "KF_Formulier_Validatie_LimburgUnivercity.png",
              "KF_Detailpagina_Case_LimburgUnivercity.png",
              "KF_AdminPaneel_Statistieken_LimburgUnivercity.png",
              "KF_AdminPaneel_Cases_Voorstellen_LimburgUnivercity.png",
              "Github_Code_Overzicht_Limburg-Univercity.jpg"] },
    { label: "Kwaliteit code",
      files: ["Algoritme voor aaneengesloten weekstreaks.jpg",
              "Automatische PR-detectie via geneste datastructuur.jpg",
              "Geelde datacache met stale-while-revalidatie.jpg",
              "Login route: hashvergelijking & sessie aanmaken.jpg",
              "Wachtwoord hashing (SHA-256).jpg",
              "Sessievalidatie & rolgebaseerde autorisatie.jpg"] },
    { label: "Versiebeheer",
      files: ["Github_Commits1_Limburg-Univercity.jpg",
              "Github_Commits2_Limburg-Univercity.jpg",
              "Github_Tags_Versies_Limburg-Univercity.jpg",
              "Github_Dashboard_Deployments1.jpg",
              "Github_Dashboard_Deployments2.jpg"] }
  ],
  "B1-K1-W4": [
    { label: "Testplan & testrapport",
      files: ["Testplan_Overzicht_LimburgUnivercity.png",
              "Testscenarios_deel1_LimburgUnivercity.png",
              "Testscenarios_deel2_LimburgUnivercity.png",
              "Testscenarios_deel3_LimburgUnivercity.png",
              "Testlog_Intro_LimburgUnivercity.png",
              "Testlog_Resultaten1_LimburgUnivercity.png",
              "Testlog_Resultaten2_LimburgUnivercity.png",
              "Limburg_Univercity_Documentatie.pdf"] }
  ],
  "B1-K1-W5": [
    { label: "Analyseren",
      files: ["Afstemmen_Meeting-Report_LimburgUnivercity.pdf",
              "Limburg_Univercity_Documentatie.pdf"] },
    { label: "Verbetervoorstellen",
      files: ["Verbetervoorstel_LimburgUnivercity.pdf"] },
    { label: "Planning",
      files: ["Planning_Verbetervoorstel_LimburgUnivercity.png"] }
  ],
  "B1-K2-W1": [
    { label: "Afstemmen",
      files: ["Afstemmen_Whiteboard-Standup-Daily_LimburgUnivercity.jpg",
              "Afstemmen_Trello-Board-Planning_LimburgUnivercity.png",
              "Afstemmen_Email-Danny-to-Gabrielle_LimburgUnivercity.png",
              "Afstemmen_Email-Gabrielle-Response_LimburgUnivercity.png",
              "Afstemmen_Meeting-Report_LimburgUnivercity.pdf"] },
    { label: "Afspraken vastleggen",
      files: ["Limburg_Univercity_Documentatie.pdf"] }
  ],
  "B1-K2-W2": [
    { label: "Presentatie inhoud",
      files: ["Timestamps Presentaties.pdf",
              "Presenteren_Voorstel_indienen.jpg",
              "Presenteren_Storyboard.jpg",
              "Presenteren_Documentatie.jpg"] },
    { label: "Presentatietechnieken",
      files: ["Oplevering-Medtronic.jpg",
              "Medtronic Presentatie.jpg"] }
  ],
  "B1-K2-W3": [
    { label: "Feedbackproces",
      files: ["STARR_Reflectie_Danny_Habel.pdf"] },
    { label: "Reactie op feedback",
      files: ["Reflectie_STARR_Software_Development.pdf"] }
  ]
};

// Groepeer bewijs op basis van EVIDENCE_SECTIONS.
// Geeft array van { label, items } terug, of null als er geen definitie is.
function buildEvidenceSections(evidence, processCode) {
  const defs = EVIDENCE_SECTIONS[processCode];
  if (!defs || !evidence.length) return null;

  const fileMap = new Map(evidence.map(e => [e.file_name, e]));
  const used    = new Set();
  const sections = [];

  for (const { label, files } of defs) {
    const items = files.map(f => fileMap.get(f)).filter(Boolean);
    items.forEach(i => used.add(i.file_name));
    if (items.length) sections.push({ label, items });
  }

  // bestanden zonder sectiedefinitie komen achteraan als "Overig"
  const leftover = evidence.filter(e => !used.has(e.file_name));
  if (leftover.length) sections.push({ label: "Overig", items: leftover });

  return sections.length ? sections : null;
}

function renderEvidenceItem(item) {
  if (item.file_type?.startsWith("image/")) {
    return `<img class="evidence-img" src="${item.signedUrl}" alt="${item.file_name}" loading="lazy" />`;
  }
  if (item.file_type === "application/pdf") {
    return `<div class="evidence-pdf-thumb" data-pdf-url="${item.signedUrl}" data-pdf-name="${item.file_name}">
      <canvas></canvas>
      <span class="pdf-thumb-label">${item.file_name}</span>
    </div>`;
  }
  return `<a class="evidence-file-card" href="${item.signedUrl}" target="_blank" rel="noopener">
    <span class="evidence-file-icon">📎</span>
    <span>${item.file_name}</span>
  </a>`;
}

let slides = [];
let currentIndex = 0;

function buildSlides(evidenceByProcess) {
  const result = [];

  result.push({ type: "title" });

  portfolioData.forEach((task, ti) => {
    result.push({ type: "kerntaak", task, taskIndex: ti });
    task.processes.forEach((process) => {
      result.push({
        type: "werkproces",
        task,
        taskIndex: ti,
        process,
        evidence: evidenceByProcess[process.code] || []
      });
    });
  });

  result.push({ type: "reflectie" });
  return result;
}

const PDFJS_WORKER = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

async function renderPdfThumb(canvas, url) {
  try {
    if (typeof pdfjsLib === "undefined") return;
    pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
    const response = await fetch(url);
    const buffer   = await response.arrayBuffer();
    const pdf      = await pdfjsLib.getDocument({ data: buffer }).promise;
    const page     = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 1 });
    const scale    = 400 / viewport.width;
    const scaled   = page.getViewport({ scale });
    canvas.width   = scaled.width;
    canvas.height  = scaled.height;
    await page.render({ canvasContext: canvas.getContext("2d"), viewport: scaled }).promise;
  } catch {
    canvas.closest(".evidence-pdf-thumb")?.classList.add("render-failed");
  }
}

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else node.setAttribute(k, v);
  }
  children.forEach((c) => c && node.append(c));
  return node;
}

function renderTitleSlide() {
  const slide = el("div", { class: "slide slide-title" });
  const content = el("div", { class: "slide-content" });
  content.innerHTML = `
    <div class="eyebrow">VISTA college &nbsp;·&nbsp; Software Development MBO-4</div>
    <h1>Van onzekerheid<br>naar afronden<br>met trots.</h1>
    <div class="subtitle">Examenportfolio &nbsp;·&nbsp; B1-K1 &amp; B1-K2</div>
    <div class="metaphor">"Ik had genoeg van hoe het ging<br>en besloot dat het anders moest."</div>
    <div class="student-name">Danny Habel &nbsp;·&nbsp; 2025–2026</div>
  `;
  slide.append(content);
  return slide;
}

function renderKerntaakSlide(task, taskIndex) {
  const meta = METAPHORS[task.code];
  const accentClass = taskIndex === 0 ? "accent-k1" : "accent-k2";
  const slide = el("div", { class: `slide slide-kerntaak ${accentClass}` });

  const pills = task.processes
    .map((p) => `<span class="process-pill">${p.code}</span>`)
    .join("");

  const content = el("div", { class: "slide-content" });
  content.innerHTML = `
    <span class="code-badge">${task.code}</span>
    <h2>${task.title}</h2>
    <p class="description">${task.description}</p>
    <blockquote class="metaphor-quote">${meta.quote}</blockquote>
    <div class="process-pills">${pills}</div>
  `;
  slide.append(content);
  return slide;
}

function renderWerkprocesSlide(task, taskIndex, process, evidence) {
  const meta = METAPHORS[process.code] || { line: "" };
  const accentClass = taskIndex === 0 ? "accent-k1" : "accent-k2";
  const slide = el("div", { class: `slide slide-werkproces ${accentClass}` });

  const criteriaItems = process.criteria
    .map(([name, text]) => `
      <li class="criterion">
        <span class="criterion-check">✓</span>
        <span class="criterion-body">
          <span class="criterion-name">${name}</span>
          <span class="criterion-desc">${text}</span>
        </span>
      </li>`)
    .join("");

  // Bouw gesectionneerde of platte bewijskolom
  let evidenceColInner = "";
  if (!evidence.length) {
    evidenceColInner = `<div class="evidence-empty">Nog geen bewijsstukken geüpload voor dit werkproces.</div>`;
  } else {
    const sections = buildEvidenceSections(evidence, process.code);
    if (sections) {
      evidenceColInner = `<div class="evidence-sections">${
        sections.map(({ label, items }) => `
          <div class="evidence-section">
            <div class="evidence-section-label">${label}</div>
            <div class="evidence-grid">${items.map(renderEvidenceItem).join("")}</div>
          </div>`).join("")
      }</div>`;
    } else {
      evidenceColInner = `<div class="evidence-grid">${evidence.map(renderEvidenceItem).join("")}</div>`;
    }
  }

  const content = el("div", { class: "slide-content" });
  content.innerHTML = `
    <div class="werkproces-header">
      <span class="process-code">${process.code}</span>
      <h2>${process.title}</h2>
      <span class="metaphor">${meta.line}</span>
    </div>
    <div class="werkproces-body">
      <div class="criteria-col">
        <div class="col-label">Beoordelingscriteria</div>
        <ul class="criteria-items">${criteriaItems}</ul>
      </div>
      <div class="evidence-col">
        <div class="col-label">Mijn bewijslast</div>
        ${evidenceColInner}
      </div>
    </div>
  `;

  content.querySelectorAll(".evidence-img").forEach((img) => {
    img.addEventListener("click", () => openLightbox(img.src, img.alt));
  });

  content.querySelectorAll(".evidence-pdf-thumb").forEach((thumb) => {
    const url  = thumb.dataset.pdfUrl;
    const name = thumb.dataset.pdfName;
    renderPdfThumb(thumb.querySelector("canvas"), url);
    thumb.addEventListener("click", () => window.open(url, "_blank", "noopener"));
    thumb.title = name;
  });

  slide.append(content);
  return slide;
}

function renderReflectieSlide() {
  const slide = el("div", { class: "slide slide-reflectie" });
  const content = el("div", { class: "slide-content" });
  content.innerHTML = `
    <span class="summit-icon">🏔️</span>
    <div class="summit-label">Finish strong.</div>
    <h2>Van onzekerheid naar afronden met trots.</h2>
    <div class="reflection-block">
      <strong>Wat ik meeneem</strong>
      <p>Niet zomaar stoppen, maar ook weten wanneer je hulp moet vragen. Grote problemen in stukjes hakken. Ik kan zowel alleen als in een team werken — dat heb ik bewezen door een heel project zelfstandig te dragen.</p>
    </div>
    <div class="reflection-block">
      <strong>De weg die ik heb afgelegd</strong>
      <p>Ik rond deze opleiding af met dalen én pieken, maar vooral met trots op de weg die ik heb afgelegd. Mijn leven is in het laatste jaar 180 graden gedraaid — en dat voelt goed.</p>
    </div>
  `;
  slide.append(content);
  return slide;
}

function renderSlide(slide) {
  switch (slide.type) {
    case "title":      return renderTitleSlide();
    case "kerntaak":   return renderKerntaakSlide(slide.task, slide.taskIndex);
    case "werkproces": return renderWerkprocesSlide(slide.task, slide.taskIndex, slide.process, slide.evidence);
    case "reflectie":  return renderReflectieSlide();
  }
}

function goTo(index) {
  const deck = document.getElementById("deck");
  const slideEls = deck.querySelectorAll(".slide");
  slideEls[currentIndex]?.classList.remove("is-active");
  currentIndex = Math.max(0, Math.min(index, slides.length - 1));
  slideEls[currentIndex]?.classList.add("is-active");
  updateNav();
}

function updateNav() {
  document.getElementById("prevBtn").disabled = currentIndex === 0;
  document.getElementById("nextBtn").disabled = currentIndex === slides.length - 1;
  document.getElementById("slideCounter").textContent = `${currentIndex + 1} / ${slides.length}`;

  const slide = slides[currentIndex];
  const titles = { title: "Intro", kerntaak: slide.task?.code, werkproces: slide.process?.code, reflectie: "Reflectie" };
  document.getElementById("navTitle").textContent = titles[slide.type] || "";

  const pct = slides.length > 1 ? (currentIndex / (slides.length - 1)) * 100 : 0;
  document.getElementById("altitudeFill").style.height = `${pct}%`;
}

function openLightbox(src, alt) {
  const lb = document.getElementById("lightbox");
  const img = lb.querySelector("img");
  img.src = src;
  img.alt = alt || "";
  lb.classList.add("is-open");
}

document.getElementById("lightbox").addEventListener("click", () => {
  document.getElementById("lightbox").classList.remove("is-open");
});

document.getElementById("prevBtn").addEventListener("click", () => goTo(currentIndex - 1));
document.getElementById("nextBtn").addEventListener("click", () => goTo(currentIndex + 1));

document.getElementById("fullscreenBtn").addEventListener("click", () => {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen();
  else document.exitFullscreen();
});

document.addEventListener("keydown", (e) => {
  if (document.getElementById("lightbox").classList.contains("is-open")) {
    if (e.key === "Escape") document.getElementById("lightbox").classList.remove("is-open");
    return;
  }
  if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
    e.preventDefault();
    goTo(currentIndex + 1);
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    goTo(currentIndex - 1);
  }
});

// Swipe navigatie (touch – telefoon/tablet)
(function () {
  let startX = 0;
  let startY = 0;

  document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener("touchend", (e) => {
    if (document.getElementById("lightbox").classList.contains("is-open")) return;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) goTo(currentIndex + 1);
    else        goTo(currentIndex - 1);
  }, { passive: true });
})();

async function init() {
  let evidenceByProcess = {};

  const cfg = window.SUPABASE_CONFIG;
  if (cfg && !cfg.url.includes("YOUR_") && window.supabase) {
    try {
      const client = window.supabase.createClient(cfg.url, cfg.anonKey);
      const bucket = cfg.bucket || "bewijslast";

      const { data: records, error } = await client
        .from("portfolio_evidence")
        .select("*")
        .order("created_at", { ascending: true });

      if (!error && records?.length) {
        const paths = records.map((r) => r.storage_path);
        const { data: signed } = await client.storage.from(bucket).createSignedUrls(paths, 3600);
        const urlMap = {};
        signed?.forEach((item) => { urlMap[item.path] = item.signedUrl; });

        records.forEach((record) => {
          const code = record.process_code;
          if (!evidenceByProcess[code]) evidenceByProcess[code] = [];
          evidenceByProcess[code].push({ ...record, signedUrl: urlMap[record.storage_path] });
        });
      }
    } catch (e) {
      console.warn("Supabase ophalen mislukt:", e);
    }
  }

  slides = buildSlides(evidenceByProcess);
  const deck = document.getElementById("deck");
  slides.forEach((slide) => deck.appendChild(renderSlide(slide)));

  goTo(0);

  const loadingEl = document.getElementById("loading");
  loadingEl.classList.add("is-hidden");
  setTimeout(() => loadingEl.remove(), 600);
}

init().catch(console.error);
