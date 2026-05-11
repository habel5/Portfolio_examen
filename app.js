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
        opdracht: "Opdracht 1",
        criteria: [
          ["Eisen/wensen", "Ik heb de uitgangspunten, technische eisen, functionele eisen en wensen bepaald en gedocumenteerd."],
          ["Planning", "Ik heb op basis van de functionaliteit een complete en realistische planning gemaakt."],
          ["Bewaken voortgang", "Ik heb de gestelde doelen en planning bewaakt."]
        ]
      },
      {
        code: "B1-K1-W2",
        title: "Ontwerpt software",
        opdracht: "Opdracht 1",
        criteria: [
          ["Ontwerp", "Ik heb de eisen en wensen vertaald naar een passend, eenduidig en volledig ontwerp."],
          ["Schematechnieken", "Ik heb relevante of toepasselijke schematechnieken gebruikt, zoals een activiteitendiagram, klassendiagram, ERD of use case diagram."],
          ["Onderbouwing", "Ik heb mijn ontwerpkeuzes onderbouwd met steekhoudende argumenten en rekening gehouden met haalbaarheid, privacy en security."]
        ]
      },
      {
        code: "B1-K1-W3",
        title: "Realiseert (onderdelen van) software",
        opdracht: "Opdracht 2",
        criteria: [
          ["Gerealiseerde functionaliteit", "Ik heb voldoende functionaliteit gerealiseerd binnen de gestelde of geplande tijd."],
          ["Kwaliteit opgeleverde functionaliteiten", "Mijn opgeleverde functionaliteiten voldoen aan de eisen en wensen."],
          ["Kwaliteit code", "Ik lever code van goede kwaliteit op."],
          ["Versiebeheer", "Ik heb versiebeheer effectief toegepast."]
        ]
      },
      {
        code: "B1-K1-W4",
        title: "Test software",
        opdracht: "Opdracht 3",
        criteria: [
          ["Testplan", "Mijn testcases in het testplan sluiten aan op de functionaliteit en bevatten alle scenario's."],
          ["Testscenario", "Ik heb voor alle toegewezen of geplande functionaliteit testscenario's of testcases gemaakt."],
          ["Testen", "Ik voer de testactiviteiten correct en volgens het testplan uit."],
          ["Testrapport", "Mijn testrapport bevat testresultaten van alle functionaliteiten. Ik voorzie alle resultaten van de juiste conclusies."]
        ]
      },
      {
        code: "B1-K1-W5",
        title: "Doet verbetervoorstellen voor software",
        opdracht: "Opdracht 4",
        criteria: [
          ["Analyseren", "Ik analyseer systematisch alle beschikbare informatiebronnen voor mogelijke aanpassingen aan de software."],
          ["Verbeter-voorstellen", "Ik interpreteer en vertaal wensen, reacties, testresultaten en/of meldingen naar realiseerbare verbetervoorstellen."],
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
        opdracht: "Opdracht 1",
        criteria: [
          ["Actieve deelname", "Ik neem actief deel aan overleg, breng relevante onderwerpen in en stel de juiste vragen."],
          ["Afstemmen", "Ik stem regelmatig en tijdig af met projectteamleden en opdrachtgever over de voortgang en eventuele knelpunten."],
          ["Afspraken vastleggen", "Ik leg gemaakte afspraken eenduidig vast."],
          ["Afspraken nakomen", "Ik houd mij aan gemaakte afspraken."]
        ]
      },
      {
        code: "B1-K2-W2",
        title: "Presenteert het opgeleverde werk",
        opdracht: "Opdracht 4",
        criteria: [
          ["Presentatie inhoud", "Ik leg de functionaliteiten uit met een goed opgebouwd verhaal dat ik onderbouw met argumenten."],
          ["Presentatie-technieken", "Ik stem mijn communicatiestijl en presentatiemiddelen af op de toehoorders."],
          ["Beantwoorden vragen", "Ik beantwoord vragen met steekhoudende argumenten."]
        ]
      },
      {
        code: "B1-K2-W3",
        title: "Reflecteert op het werk",
        opdracht: "Opdracht 4",
        criteria: [
          ["Feedbackproces", "Ik benoem positieve punten en verbeterpunten van mijn eigen proces en van de teamprestaties."],
          ["Reactie op feedback", "Ik reageer actief op ontvangen feedback."]
        ]
      }
    ]
  }
];

const DB_NAME = "vista-portfolio-evidence";
const DB_VERSION = 1;
const STORE_NAME = "evidence";
let activeTaskId = portfolioData[0].id;
let db;
let evidenceCache = [];

const views = document.querySelectorAll(".view");
const navButtons = document.querySelectorAll("[data-view]");
const homeTaskGrid = document.querySelector("#homeTaskGrid");
const taskTabs = document.querySelector("#taskTabs");
const taskDetail = document.querySelector("#taskDetail");
const totalFiles = document.querySelector("#totalFiles");
const filledProcesses = document.querySelector("#filledProcesses");
const storageNote = document.querySelector("#storageNote");
let supabaseClient;
let storageProvider = "local";

function isSupabaseConfigured() {
  const config = window.SUPABASE_CONFIG;
  return Boolean(
    config &&
      config.url &&
      config.anonKey &&
      !config.url.includes("YOUR_") &&
      !config.anonKey.includes("YOUR_") &&
      window.supabase
  );
}

function setupStorageProvider() {
  if (isSupabaseConfigured()) {
    const { url, anonKey } = window.SUPABASE_CONFIG;
    supabaseClient = window.supabase.createClient(url, anonKey);
    storageProvider = "supabase";
    updateStorageNote("Online opgeslagen in Supabase");
    return;
  }

  storageProvider = "local";
  updateStorageNote("Testmodus: lokaal opgeslagen in deze browser");
}

function updateStorageNote(text) {
  if (!storageNote) return;
  storageNote.lastChild.textContent = ` ${text}`;
  storageNote.classList.toggle("is-online", storageProvider === "supabase");
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        const store = database.createObjectStore(STORE_NAME, { keyPath: "id" });
        store.createIndex("processCode", "processCode", { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function transaction(mode = "readonly") {
  return db.transaction(STORE_NAME, mode).objectStore(STORE_NAME);
}

function getAllEvidence() {
  return new Promise((resolve, reject) => {
    const request = transaction().getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function addEvidence(record) {
  return new Promise((resolve, reject) => {
    const request = transaction("readwrite").add(record);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

function deleteEvidence(id) {
  return new Promise((resolve, reject) => {
    const request = transaction("readwrite").delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

function getBucketName() {
  return window.SUPABASE_CONFIG?.bucket || "bewijslast";
}

function sanitizeFileName(fileName) {
  return fileName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function mapSupabaseRecord(record) {
  return {
    id: record.id,
    processCode: record.process_code,
    fileName: record.file_name,
    fileType: record.file_type,
    fileSize: record.file_size,
    note: record.note || "",
    createdAt: new Date(record.created_at).getTime(),
    storagePath: record.storage_path
  };
}

async function getAllEvidenceOnline() {
  const { data, error } = await supabaseClient
    .from("portfolio_evidence")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data.map(mapSupabaseRecord);
}

async function addEvidenceOnline(record) {
  const bucket = getBucketName();
  const fileName = sanitizeFileName(record.fileName) || "bewijsstuk";
  const storagePath = `${record.processCode}/${record.id}-${fileName}`;
  const upload = await supabaseClient.storage.from(bucket).upload(storagePath, record.blob, {
    contentType: record.fileType,
    upsert: false
  });

  if (upload.error) throw upload.error;

  const insert = await supabaseClient.from("portfolio_evidence").insert({
    id: record.id,
    process_code: record.processCode,
    file_name: record.fileName,
    file_type: record.fileType,
    file_size: record.fileSize,
    note: record.note,
    storage_path: storagePath,
    created_at: new Date(record.createdAt).toISOString()
  });

  if (insert.error) {
    await supabaseClient.storage.from(bucket).remove([storagePath]);
    throw insert.error;
  }
}

async function deleteEvidenceOnline(file) {
  const bucket = getBucketName();
  const remove = await supabaseClient.storage.from(bucket).remove([file.storagePath]);
  if (remove.error) throw remove.error;

  const deletion = await supabaseClient.from("portfolio_evidence").delete().eq("id", file.id);
  if (deletion.error) throw deletion.error;
}

async function addEvidenceRecord(record) {
  if (storageProvider === "supabase") {
    await addEvidenceOnline(record);
    return;
  }

  await addEvidence(record);
}

async function deleteEvidenceRecord(file) {
  if (storageProvider === "supabase") {
    await deleteEvidenceOnline(file);
    return;
  }

  await deleteEvidence(file.id);
}

async function openEvidenceFile(file) {
  if (storageProvider === "supabase") {
    const { data, error } = await supabaseClient.storage
      .from(getBucketName())
      .createSignedUrl(file.storagePath, 60);

    if (error) throw error;
    window.open(data.signedUrl, "_blank", "noopener");
    return;
  }

  const url = URL.createObjectURL(file.blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = file.fileName;
  link.click();
  URL.revokeObjectURL(url);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function createId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function evidenceFor(processCode) {
  return evidenceCache
    .filter((item) => item.processCode === processCode)
    .sort((a, b) => b.createdAt - a.createdAt);
}

function renderHomeCards() {
  homeTaskGrid.innerHTML = "";

  portfolioData.forEach((task) => {
    const card = document.createElement("article");
    card.className = "task-card";
    const processItems = task.processes
      .map((process) => `<li><span>${process.code}</span>${process.title}</li>`)
      .join("");

    card.innerHTML = `
      <header>
        <div>
          <span class="code-pill">${task.code}</span>
          <h3>${task.title}</h3>
          <p>${task.description}</p>
        </div>
      </header>
      <ul class="process-list">${processItems}</ul>
    `;
    homeTaskGrid.append(card);
  });
}

function renderTaskTabs() {
  taskTabs.innerHTML = "";

  portfolioData.forEach((task) => {
    const filled = task.processes.filter((process) => evidenceFor(process.code).length > 0).length;
    const button = document.createElement("button");
    button.className = `task-button${task.id === activeTaskId ? " is-active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <span class="code-pill">${task.code}</span>
      <strong>${task.title}</strong>
      <span>${filled}/${task.processes.length} van mijn werkprocessen gevuld</span>
    `;
    button.addEventListener("click", () => {
      activeTaskId = task.id;
      renderAll();
    });
    taskTabs.append(button);
  });
}

function renderTaskDetail() {
  const task = portfolioData.find((item) => item.id === activeTaskId);
  taskDetail.innerHTML = "";

  const head = document.createElement("div");
  head.className = "task-detail-head";
  head.innerHTML = `
    <span class="code-pill">${task.code}</span>
    <h2>${task.title}</h2>
    <p>${task.description}</p>
  `;
  taskDetail.append(head);

  const stack = document.createElement("div");
  stack.className = "process-stack";
  task.processes.forEach((process, index) => stack.append(renderProcessCard(process, index === 0)));
  taskDetail.append(stack);
}

function renderProcessCard(process, isOpen) {
  const files = evidenceFor(process.code);
  const card = document.createElement("article");
  card.className = `process-card${isOpen ? " is-open" : ""}`;

  const button = document.createElement("button");
  button.className = "process-toggle";
  button.type = "button";
  button.innerHTML = `
    <span>
      <strong>${process.code}: ${process.title}</strong>
      <small>${process.opdracht} · ${process.criteria.length} criteria voor mijn bewijs</small>
    </span>
    <span class="process-status${files.length ? " has-files" : ""}">${files.length} bestand${files.length === 1 ? "" : "en"}</span>
  `;
  button.addEventListener("click", () => card.classList.toggle("is-open"));

  const body = document.createElement("div");
  body.className = "process-body";
  body.innerHTML = `
    <div class="criteria">
      <h4>Beoordelingscriteria</h4>
      <ul class="criteria-list"></ul>
    </div>
    <div class="upload-panel">
      <h4>Bewijslast</h4>
      <form class="upload-form">
        <input class="file-input" type="file" required aria-label="Bestand kiezen voor ${process.code}" />
        <input class="note-input" type="text" maxlength="90" placeholder="Korte toelichting" aria-label="Korte toelichting" />
        <button class="save-button" type="submit">Opslaan</button>
      </form>
      <div class="evidence-output"></div>
    </div>
  `;

  const criteriaList = body.querySelector(".criteria-list");
  process.criteria.forEach(([name, text]) => {
    const item = document.createElement("li");
    item.className = "criterion-item";
    item.innerHTML = `<span class="criterion-name">${name}</span><span class="criterion-text">${text}</span>`;
    criteriaList.append(item);
  });

  body.querySelector(".upload-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = body.querySelector(".save-button");
    const fileInput = body.querySelector(".file-input");
    const noteInput = body.querySelector(".note-input");
    const file = fileInput.files[0];
    if (!file) return;

    submitButton.disabled = true;
    submitButton.textContent = "Opslaan...";

    try {
      await addEvidenceRecord({
        id: createId(),
        processCode: process.code,
        fileName: file.name,
        fileType: file.type || "application/octet-stream",
        fileSize: file.size,
        note: noteInput.value.trim(),
        createdAt: Date.now(),
        blob: file
      });

      fileInput.value = "";
      noteInput.value = "";
      await refreshEvidence();
    } catch (error) {
      alert(`Opslaan lukt niet: ${error.message}`);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Opslaan";
    }
  });

  renderEvidenceList(body.querySelector(".evidence-output"), files);
  card.append(button, body);
  return card;
}

function renderEvidenceList(container, files) {
  if (!files.length) {
    container.innerHTML = `<p class="empty-state">Ik heb nog geen bewijslast opgeslagen voor dit werkproces.</p>`;
    return;
  }

  const list = document.createElement("ul");
  list.className = "evidence-list";
  files.forEach((file) => {
    const item = document.createElement("li");
    item.className = "evidence-item";

    const date = new Intl.DateTimeFormat("nl-NL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(file.createdAt);

    const details = document.createElement("span");
    const title = document.createElement("span");
    const meta = document.createElement("span");
    const actions = document.createElement("span");
    const downloadButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    title.className = "evidence-title";
    title.textContent = file.fileName;
    meta.className = "evidence-meta";
    meta.textContent = `${formatBytes(file.fileSize)} · ${date}${file.note ? ` · ${file.note}` : ""}`;
    actions.className = "item-actions";
    downloadButton.className = "download-button";
    downloadButton.type = "button";
    downloadButton.textContent = "Open";
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "Verwijder";

    details.append(title, meta);
    actions.append(downloadButton, deleteButton);
    item.append(details, actions);

    downloadButton.addEventListener("click", async () => {
      try {
        await openEvidenceFile(file);
      } catch (error) {
        alert(`Bestand openen lukt niet: ${error.message}`);
      }
    });

    deleteButton.addEventListener("click", async () => {
      try {
        await deleteEvidenceRecord(file);
        await refreshEvidence();
      } catch (error) {
        alert(`Verwijderen lukt niet: ${error.message}`);
      }
    });

    list.append(item);
  });

  container.replaceChildren(list);
}

function renderStats() {
  const processCodes = portfolioData.flatMap((task) => task.processes.map((process) => process.code));
  const filledCount = processCodes.filter((code) => evidenceFor(code).length > 0).length;
  totalFiles.textContent = evidenceCache.length;
  filledProcesses.textContent = `${filledCount}/${processCodes.length}`;
}

function showView(viewId) {
  views.forEach((view) => view.classList.toggle("is-visible", view.id === viewId));
  document.querySelectorAll(".nav-link").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === viewId);
  });
  window.location.hash = viewId;
}

function renderAll() {
  renderStats();
  renderTaskTabs();
  renderTaskDetail();
}

async function refreshEvidence() {
  evidenceCache = storageProvider === "supabase" ? await getAllEvidenceOnline() : await getAllEvidence();
  renderAll();
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.view));
});

window.addEventListener("hashchange", () => {
  const viewId = window.location.hash.replace("#", "");
  if (viewId === "home" || viewId === "evidence") showView(viewId);
});

async function init() {
  renderHomeCards();
  setupStorageProvider();
  if (storageProvider === "local") {
    db = await openDatabase();
  }
  await refreshEvidence();
  const initialView = window.location.hash.replace("#", "") === "evidence" ? "evidence" : "home";
  showView(initialView);
}

init().catch((error) => {
  document.body.innerHTML = `
    <main class="error-state">
      <h1>Opslag kan niet worden gestart</h1>
      <p>${error.message}</p>
    </main>
  `;
});
