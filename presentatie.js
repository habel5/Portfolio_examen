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
    camp: "Basiskamp 1",
    quote: "Het basiskamp is ingericht. De route is uitgestippeld. Tijd om te klimmen."
  },
  "B1-K2": {
    camp: "Basiskamp 2",
    quote: "Samen sta je sterker op de berg. In het klimteam bereik je de top."
  },
  "B1-K1-W1": { step: "Stap 1 — De route uitzetten",   line: "Elk doel helder in kaart gebracht vóór de eerste stap omhoog." },
  "B1-K1-W2": { step: "Stap 2 — De kaart tekenen",     line: "Het ontwerp is het kompas dat ons door de klim leidt." },
  "B1-K1-W3": { step: "Stap 3 — De klim begint",       line: "Stap voor stap omhoog — code als handvatten in de rots." },
  "B1-K1-W4": { step: "Stap 4 — Elk handvat testen",   line: "Vóór je gewicht erop zet, controleer je of het stevig zit." },
  "B1-K1-W5": { step: "Stap 5 — De top in zicht",      line: "De route verbeteren voor een nog betere beklimming." },
  "B1-K2-W1": { step: "Klimmen in het team",           line: "Communicatie is de veiligheidslijn tussen de klimmers." },
  "B1-K2-W2": { step: "Het kamp presenteren",          line: "Laten zien hoe ver we geklommen zijn en wat we bereikten." },
  "B1-K2-W3": { step: "De reflectie",                  line: "Op de top aangekomen — terugkijken op de beklimming." }
};

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
    <h1>De Klim<br>naar de Top</h1>
    <div class="subtitle">Examenportfolio &nbsp;·&nbsp; B1-K1 &amp; B1-K2</div>
    <div class="metaphor">"Elke regel code was een stap naar boven.<br>Dit is het verhaal van de beklimming."</div>
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
    <div class="camp-label">${meta.camp}</div>
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
  const meta = METAPHORS[process.code] || { step: process.code, line: "" };
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

  let evidenceItems = "";
  if (evidence.length === 0) {
    evidenceItems = `<div class="evidence-empty">Nog geen bewijsstukken geüpload voor dit werkproces.</div>`;
  } else {
    evidenceItems = evidence
      .map((item) => {
        if (item.file_type?.startsWith("image/")) {
          return `<img class="evidence-img" src="${item.signedUrl}" alt="${item.file_name}" loading="lazy" />`;
        }
        const icon = item.file_type === "application/pdf" ? "📄" : "📎";
        return `<a class="evidence-file-card" href="${item.signedUrl}" target="_blank" rel="noopener">
          <span class="evidence-file-icon">${icon}</span>
          <span>${item.file_name}</span>
        </a>`;
      })
      .join("");
  }

  const content = el("div", { class: "slide-content" });
  content.innerHTML = `
    <div class="werkproces-header">
      <span class="step-label">${meta.step}</span>
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
        <div class="evidence-grid">${evidenceItems}</div>
      </div>
    </div>
  `;

  content.querySelectorAll(".evidence-img").forEach((img) => {
    img.addEventListener("click", () => openLightbox(img.src, img.alt));
  });

  slide.append(content);
  return slide;
}

function renderReflectieSlide() {
  const slide = el("div", { class: "slide slide-reflectie" });
  const content = el("div", { class: "slide-content" });
  content.innerHTML = `
    <span class="summit-icon">🏔️</span>
    <div class="summit-label">De top bereikt</div>
    <h2>Reflectie op de beklimming</h2>
    <div class="reflection-block">
      <strong>Wat heb ik geleerd als software developer?</strong>
      <p>[Voeg hier je reflectie in: koppel concrete momenten uit de bewijslast aan je groei als developer. Welke stap was het moeilijkst? Wat zou je een volgende keer anders aanpakken? Wat heeft je het meest verrast?]</p>
    </div>
    <div class="reflection-block">
      <strong>De beklimming in het kort</strong>
      <p>[Samenvatting van het traject: van het eerste basiskamp (plannen en ontwerpen) tot het samenwerken in het team. Terugkijken op de hoogtepunten en de steile stukken.]</p>
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
