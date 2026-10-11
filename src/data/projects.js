/** Case studies are based on GK_Sagar_Resume_Full_Stack_v3.docx. Internal visuals are explanatory diagrams, not product screenshots. */
const visualContent = {
  analytics: {
    header: "Patient journey / Data architecture",
    status: "Daily sync",
    value: "38",
    unit: "source tables",
    state: "Validated. Promoted.",
    heading: "Ready for",
    emphasis: "the bigger picture.",
    caption: "System overview · Failed syncs never touch live data.",
  },
  invoice: {
    header: "Invoice / Rate audit",
    workflow: "Extract. Match. Reconcile.",
    heading: "From PDF",
    continuation: "to clarity.",
    value: "8 labs.",
    emphasis: "One workflow.",
  },
  quiz: {
    header: "Live / In the room",
    event: "GARV 2026",
    value: "500",
    suffix: "+",
    caption: "Students. One shared experience.",
    steps: ["QR join", "Timed rounds", "Fair ranking"],
  },
  canvas: {
    header: "RapiDraw / Shared canvas",
    status: "Live collaboration",
    heading: "Ideas,",
    emphasis: "in sync.",
    cursors: ["You", "Together"],
    details: ["7 drawing tools", "50-step history"],
    alt: "Illustration of a collaborative whiteboard with connected shapes, freehand drawing, and two live cursors.",
    caption: "Concept illustration · An infinite canvas for drawing together.",
  },
  notes: {
    header: "CoreNote / Personal workspace",
    status: "Room to think",
    heading: "A place for",
    emphasis: "your next idea.",
    pageTitle: "The next chapter",
    pageLabel: "Notes / Ideas / Possibilities",
    details: ["Rich text", "Nested pages", "Undo & recover"],
    alt: "Illustration of layered notebook pages with a nested page tree, text blocks, and a bookmarked idea.",
    caption: "Concept illustration · Thoughtful writing, naturally organized.",
  },
};
export const projects = [
  {
    slug: "patient-journey",
    number: "01",
    title: "Patient Journey Analytics",
    shortTitle: "Patient journeys, made visible.",
    category: "Healthcare analytics",
    kind: "Production / GarbhaGudi",
    visual: "analytics",
    diagram: visualContent.analytics,
    summary:
      "A clearer picture of the patient journey across 10 branches, backed by a daily pipeline that protects live data.",
    stack: ["Next.js", "Python", "MySQL", "SQLite", "AWS"],
    metric: "38 tables. One dependable pipeline.",
    role: "Full stack development, data engineering & deployment",
    period: "GarbhaGudi IVF Centre · Apr 2026–present",
    problem:
      "Patient-journey reporting depended on manual CSV imports. Teams needed to follow the path from consultation to treatment outcome across 10 branches, see where patients dropped off, and trust that reporting data was current.",
    responsibility:
      "I developed the analytics application, automated the data pipeline, implemented access controls, and managed deployment and release safeguards on AWS.",
    process: [
      {
        title: "Make the journey legible",
        text: "Built a 20-page application with six drop-off reports, authentication, and role-based access so teams could trace patients from consultation through treatment outcome.",
      },
      {
        title: "Protect the live dataset",
        text: "Automated daily ETL across 38 MySQL tables. Each sync goes into a validated staging database and is atomically promoted. A failed sync never touches the live dataset.",
      },
      {
        title: "Treat access as a product requirement",
        text: "Added role-based masking of personally identifiable information and a trigger-enforced, append-only access audit log. Resolved findings from a seven-stage security review.",
      },
      {
        title: "Make releases recoverable",
        text: "Managed AWS deployment, later migrating to Lightsail, with nginx TLS, systemd services and timers, host-key-pinned SFTP, nightly backups, health checks, and automatic rollback.",
      },
    ],
    results: [
      { value: "10", label: "Branches covered" },
      { value: "38", label: "Tables synced daily" },
      { value: "270+", label: "Automated tests" },
    ],
    outcome:
      "Replaced manual CSV imports with a scheduled, validated pipeline and delivered patient-journey reporting across all 10 branches. The security review closed with no Critical or High findings open.",
    takeaway:
      "Reporting is only useful when its data is dependable. Staging, validation, and atomic promotion make that trust part of the architecture.",
    flow: [
      "38 source tables",
      "Validated staging",
      "Atomic promotion",
      "Live analytics",
    ],
    gallery: [],
  },
  {
    slug: "invoice-auditor",
    number: "02",
    title: "Invoice Price Auditor",
    shortTitle: "Less manual checking. More certainty.",
    category: "Document automation",
    kind: "Production / GarbhaGudi",
    visual: "invoice",
    diagram: visualContent.invoice,
    summary:
      "Turning lab PDFs into reconciled, reviewable invoice reports against negotiated rates.",
    stack: ["Python", "Flask", "pdfplumber", "RapidOCR", "pandas"],
    metric: "8 labs. 10 centers. Every total reconciled.",
    role: "Python development, extraction & matching pipeline",
    period: "GarbhaGudi IVF Centre · Apr 2026–present",
    problem:
      "Invoices from eight labs had to be checked against negotiated MOU rates for 10 centers. Layout differences, scanned pages, and inconsistent test names made extraction and price comparison difficult to automate reliably.",
    responsibility:
      "I engineered the invoice audit tool, wrote lab-specific PDF extractors, integrated OCR, developed guarded fuzzy matching, and generated Excel reports for review.",
    process: [
      {
        title: "Adapt to the document",
        text: "Wrote per-lab PDF extraction logic with pdfplumber, adding RapidOCR as a fallback for scanned invoices rather than assuming every PDF contained usable text.",
      },
      {
        title: "Match with boundaries",
        text: "Used TF-IDF fuzzy matching with roughly 35 curated synonym rules and anchor-word guards to compare invoice line items against MOU rates.",
      },
      {
        title: "Keep uncertainty visible",
        text: "Routed ambiguous lines to human review and flagged both overcharges and undercharges instead of silently treating every fuzzy match as correct.",
      },
      {
        title: "Reconcile before reporting",
        text: "Checked extracted totals against the printed grand total and exported structured Excel reports for the teams reviewing the invoices.",
      },
    ],
    results: [
      { value: "8", label: "Lab formats handled" },
      { value: "10", label: "Centers covered" },
      { value: "~40", label: "Invoices reconciled" },
    ],
    outcome:
      "Achieved exact grand-total reconciliation on approximately 40 invoices in the tested set. The workflow produces rate-comparison reports while keeping ambiguous matches available for human review.",
    takeaway:
      "Good automation knows when to stop. Guarded matching and a clear review path matter as much as successful extraction.",
    flow: [
      "Lab invoice PDF",
      "Extract / OCR",
      "Compare MOU rates",
      "Review & export",
    ],
    gallery: [],
  },
  {
    slug: "live-quiz",
    number: "03",
    title: "Live Event Quiz Platform",
    shortTitle: "Built for the energy of a live room.",
    category: "Live event software",
    kind: "Production / GGIRHR & GARV",
    visual: "quiz",
    diagram: visualContent.quiz,
    summary:
      "A mobile-first quiz experience with QR joining, synchronized rounds, and scoring the server can stand behind.",
    stack: ["Next.js", "PostgreSQL", "Zod", "JWT", "Vercel"],
    metric: "500+ students. 329 automated checks.",
    role: "Full stack development, scoring & event delivery",
    period: "GGIRHR / GARV 2026 · GarbhaGudi",
    problem:
      "College career-guidance events needed a quiz that students could join quickly on their phones while organizers ran synchronized timed rounds on a projector. Scoring had to remain fair during a live event.",
    responsibility:
      "I shipped the mobile-first platform, designed server-authoritative scoring and ranking, implemented organizer controls, and secured the event administration workflow.",
    process: [
      {
        title: "Reduce the friction to join",
        text: "Built QR-based joining and a mobile-first participant experience, with synchronized timed rounds controlled live by organizers on a projector.",
      },
      {
        title: "Keep scoring on the server",
        text: "Kept answer keys off the client, used server-measured time and four levels of tie-breaking, and made submissions idempotent. Closed a mid-round re-registration loophole.",
      },
      {
        title: "Support the organizers",
        text: "Added one-click Excel export, three-role RBAC, audit logging, and soft delete and restore so the event workflow extended beyond answering questions.",
      },
      {
        title: "Check the complete flow",
        text: "Added magic-byte upload checks and validated the platform with 329 automated checks, including end-to-end coverage.",
      },
    ],
    results: [
      { value: "500+", label: "Students participated" },
      { value: "3", label: "Access-control roles" },
      { value: "329", label: "Automated checks" },
    ],
    outcome:
      "Used at multiple college career-guidance events by more than 500 students. Organizers could run rounds live, rank participants on the server, and export results in one click.",
    takeaway:
      "A live experience has to be simple on the surface and precise underneath. Fairness belongs in server rules, not in the participant’s browser.",
    flow: ["Scan QR", "Join timed round", "Server scores", "Rank & export"],
    gallery: [],
  },
  {
    slug: "rapidraw",
    number: "04",
    title: "RapiDraw",
    shortTitle: "A shared canvas for the next idea.",
    category: "Real-time collaboration",
    kind: "Independent project",
    visual: "canvas",
    diagram: visualContent.canvas,
    summary:
      "An infinite, multi-user whiteboard with live cursors, flexible drawing tools, and a portable file format.",
    stack: ["Next.js", "Socket.IO", "Canvas API", "React"],
    metric: "7 drawing tools. 50 steps of undo.",
    role: "Product development, canvas architecture & real-time systems",
    period: "Independent project",
    image: "/images/rapidraw_collab.webp",
    imageSmall: "/images/rapidraw_collab-640.webp",
    width: 1200,
    height: 563,
    imageAlt:
      "RapiDraw canvas showing drawing tools and the live collaboration session controls",
    github: "https://github.com/sagar5412/rapidraw",
    live: "https://rapidraw.gksagar.online/",
    problem:
      "Collaborative drawing combines two difficult interaction models: direct manipulation on a canvas and shared state across a network. The goal was a whiteboard that supported fluid editing without giving up collaboration or portable exports.",
    responsibility:
      "I built the real-time multi-user whiteboard, designed its canvas interactions, refactored its logic into reusable hooks, and hardened the socket layer.",
    process: [
      {
        title: "Build the canvas interaction model",
        text: "Implemented rooms, live cursors, infinite pan and zoom, seven drawing tools, and a 50-step undo and redo history.",
      },
      {
        title: "Separate behavior into hooks",
        text: "Refactored the canvas logic into 11 reusable React hooks to organize drawing, interaction, and collaboration behavior.",
      },
      {
        title: "Give work a portable form",
        text: "Designed a versioned .rapidraw file format and added PNG and SVG export so a canvas could move beyond a single session.",
      },
      {
        title: "Validate the network boundary",
        text: "Added runtime payload validation, XSS sanitization, and secure room codes. Covered the application with approximately 85 Vitest and Playwright tests.",
      },
    ],
    results: [
      { value: "7", label: "Drawing tools" },
      { value: "11", label: "Reusable React hooks" },
      { value: "~85", label: "Automated tests" },
    ],
    outcome:
      "Delivered a room-based collaborative whiteboard with an infinite canvas, live cursors, undo and redo, and versioned file storage alongside PNG and SVG exports.",
    takeaway:
      "Canvas software becomes easier to reason about when interaction, rendering, and collaboration have explicit boundaries.",
    flow: ["Create room", "Draw together", "Undo / redo", "Save & export"],
    gallery: [
      {
        id: "shared-canvas",
        visual: "whiteboard",
        label: "RapiDraw / Space to collaborate",
        heading: "A canvas",
        emphasis: "without edges.",
        details: ["Infinite pan & zoom", "7 drawing tools", "PNG / SVG export"],
        alt: "Concept illustration of an infinite whiteboard with connected shapes, freehand drawing, and a seven-tool drawing palette.",
        caption:
          "Concept illustration · A shared drawing space with room to explore, refine, and export.",
      },
    ],
  },
  {
    slug: "corenote",
    number: "05",
    title: "CoreNote",
    shortTitle: "Room for thoughts to take shape.",
    category: "Productivity workspace",
    kind: "Independent project",
    visual: "notes",
    diagram: visualContent.notes,
    summary:
      "A rich-text notes workspace with nested pages, responsive editing, and thoughtful recovery paths.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Tiptap", "React Query"],
    metric: "4 editor extensions. 10 validated endpoints.",
    role: "Full stack development, editor extensions & data architecture",
    period: "Independent project",
    image: "/images/corenote_note.webp",
    imageSmall: "/images/corenote_note-640.webp",
    width: 1200,
    height: 566,
    imageAlt:
      "CoreNote rich-text editor with a nested page sidebar and a getting-started document",
    github: "https://github.com/sagar5412/CoreNote",
    live: "https://corenote.gksagar.online/",
    problem:
      "A notes workspace needs more than an editor. Nested pages must remain consistent as they move, duplicate, and disappear, while interactions need to feel immediate and accidental changes need a recovery path.",
    responsibility:
      "I developed the rich-text workspace, wrote custom Tiptap extensions, designed the PostgreSQL page hierarchy, and built its authenticated API and optimistic interactions.",
    process: [
      {
        title: "Make writing flexible",
        text: "Built a rich-text editor with four custom Tiptap extensions, including slash commands and code blocks, alongside nested, movable pages.",
      },
      {
        title: "Model the hierarchy carefully",
        text: "Used four Prisma models in PostgreSQL with composite indexes and transactional reorder and duplicate operations to preserve page relationships.",
      },
      {
        title: "Respond now, recover gracefully",
        text: "Integrated optimistic UI through React Query and added undo for page deletion so users could recover an accidental action.",
      },
      {
        title: "Validate every boundary",
        text: "Built 10 Zod-validated REST endpoints, integrated Google and GitHub OAuth with NextAuth.js, and used Docker in the application stack.",
      },
    ],
    results: [
      { value: "4", label: "Custom editor extensions" },
      { value: "4", label: "Prisma data models" },
      { value: "10", label: "Validated REST endpoints" },
    ],
    outcome:
      "Delivered a rich-text notes app with nested page organization, transactional hierarchy changes, optimistic interactions, undo-delete, and Google and GitHub sign-in.",
    takeaway:
      "A calm writing experience depends on careful data design. Consistent hierarchy changes and recoverable interactions keep the interface predictable.",
    flow: ["Sign in", "Organize pages", "Write & edit", "Sync changes"],
    gallery: [
      {
        id: "page-hierarchy",
        visual: "hierarchy",
        label: "CoreNote / Everything in its place",
        heading: "A home for",
        emphasis: "every thought.",
        nodes: ["Workspace", "Notes", "Ideas"],
        details: ["Nested pages", "Move & reorder", "Transactional updates"],
        alt: "Concept illustration of a parent workspace connected to two nested document pages with a bookmark accent.",
        caption:
          "Concept illustration · Nested, movable pages keep a growing workspace organized.",
      },
      {
        id: "rich-text-editor",
        visual: "editor",
        label: "CoreNote / Make room for expression",
        heading: "Write. Shape.",
        emphasis: "Make it yours.",
        blocks: ["Tt", "/", "</>"],
        details: ["Rich-text editing", "Slash commands", "Custom code blocks"],
        alt: "Concept illustration of a rich-text document with typography, slash-command, and code-block cards.",
        caption:
          "Concept illustration · Custom editor extensions turn a blank page into a flexible writing space.",
      },
    ],
  },
];
