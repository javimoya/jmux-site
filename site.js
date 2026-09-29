/* jmux — the single page. Content first (both languages), behaviour after.
 *
 * Every command, flag and shortcut below was checked against the installed
 * CLI's --help, the default keymap (app/Sources/JmuxApp/ActionCatalog.swift)
 * and the app's menus; every output block is real output from a jmux 0.1.306
 * daemon running the demo projects, with the home directory renamed. */
"use strict";

/* ── strings ──────────────────────────────────────────────── */
const T = {
  "nav.features": { es: "Features", en: "Features" },
  "nav.perf": { es: "Rendimiento", en: "Performance" },
  "nav.honest": { es: "Lo que no es", en: "What it isn't" },
  "nav.install": { es: "Instalar", en: "Install" },
  "cta.install": { es: "Instalar", en: "Install" },
  "cta.install2": { es: "Instalar jmux", en: "Install jmux" },
  "cta.tour": { es: "Ver las features ↓", en: "See the features ↓" },
  copy: { es: "copiar", en: "copy" },
  copied: { es: "copiado", en: "copied" },
  "hero.eyebrow": { es: "terminal nativo · Claude Code + Codex <span class='cursor'></span>", en: "native terminal · Claude Code + Codex <span class='cursor'></span>" },
  "hero.title": {
    es: "El terminal donde tus agentes <em>nunca se pierden</em>.",
    en: "The terminal where your agents <em>never get lost</em>.",
  },
  "hero.lede": {
    es: "jmux es un multiplexor nativo para macOS hecho para trabajar con Claude Code y Codex. Las sesiones sobreviven a todo. Los agentes se ven, se escriben entre ellos y se reparten el trabajo. Y todas tus conversaciones se pueden buscar.",
    en: "jmux is a native macOS multiplexer built for working with Claude Code and Codex. Sessions survive everything. Agents show their state, message each other and split the work. And every conversation you've had is searchable.",
  },
  "hero.meta": {
    es: "v<b>0.1.306</b> · macOS 14+ · Apple Silicon · Rust + Swift · se actualiza solo",
    en: "v<b>0.1.306</b> · macOS 14+ · Apple Silicon · Rust + Swift · updates itself",
  },
  "hero.caption": {
    es: "Captura real: un Claude hace que el libro contable ignore los reintentos después de que su hija Codex escribiera el test, y el servidor sigue sirviendo. Pasa el ratón por los puntos.",
    en: "A real capture: a Claude makes the ledger ignore retries after its Codex child wrote the test, and the server keeps serving. Hover the pins.",
  },
  "stat.key.n": { es: "1,63", en: "1.63" },
  "stat.frames.n": { es: " / 20 004", en: " / 20,004" },
  "hero.alt": { es: "La ventana de jmux: árbol de sesiones con dos hijas Codex bajo un Claude, un diff en marcha, una shell y un servidor de desarrollo", en: "The jmux window: session tree with two Codex children under a Claude, a diff in progress, a shell and a dev server" },
  "stat.key": { es: "de tecla a glifo en pantalla", en: "from key to glyph on screen" },
  "stat.reattach": { es: "para recuperar 10 paneles llenos al abrir", en: "to bring 10 full panes back on open" },
  "stat.reattach.s": { es: "tras el primer frame · 329 ms desde el lanzamiento", en: "after the first frame · 329 ms from launch" },
  "stat.frames": { es: "frames tarde al hacer scroll de 10 000 líneas", en: "frames late while scrolling 10,000 lines" },
  "stat.frames.s": { es: "peor frame 5,97 ms · objetivo 60 fps", en: "worst frame 5.97 ms · target 60 fps" },
  "stat.agents": { es: "agentes de primera: Claude Code y Codex", en: "first-class agents: Claude Code and Codex" },
  "stat.agents.s": { es: "a la par, y tantas sesiones como quieras", en: "on equal terms, as many sessions as you like" },
  "paths.title": { es: "// ¿qué te trae por aquí?", en: "// what brings you here?" },
  "q.placeholder": { es: "Filtrar: spawn, ⌘D, buscar…", en: "Filter: spawn, ⌘D, search…" },
  "c.new": { es: "Nuevas (0.1.300+)", en: "New (0.1.300+)" },
  "c.open": { es: "Ejemplo abierto", en: "Example open" },
  "c.unseen": { es: "Sin ver", en: "Unseen" },
  "c.hint": {
    es: "Como en jmux: los contadores filtran. Mantén <kbd>⌘</kbd> para ver los atajos de esta página, <kbd>?</kbd> para todos.",
    en: "Just like jmux: the counters filter. Hold <kbd>⌘</kbd> to see this page's shortcuts, <kbd>?</kbd> for all of them.",
  },
  "ex.summary": { es: "Ejemplo de uso", en: "Usage example" },
  "ex.steps": { es: "pasos", en: "steps" },
  "link.copy": { es: "# enlace", en: "# link" },
  "link.copied": { es: "enlace copiado", en: "link copied" },
  "count.all": { es: "{n} features", en: "{n} features" },
  "count.some": { es: "{n} de {t}", en: "{n} of {t}" },
  "empty": { es: "Nada coincide con el filtro. Prueba con «spawn», «⌘F» o «buscar».", en: "Nothing matches. Try “spawn”, “⌘F” or “search”." },
  "honest.kicker": { es: "// sin letra pequeña", en: "// no fine print" },
  "honest.title": { es: "Lo que jmux no es, y lo que todavía no hace", en: "What jmux isn't, and what it doesn't do yet" },
  "honest.lede": {
    es: "jmux decide no hacer algunas cosas, y otras todavía no las hace. Mejor que lo sepas antes de instalarlo.",
    en: "Some things jmux chooses not to do, and some it doesn't do yet. Better you know before you install it.",
  },
  "install.kicker": { es: "// cinco minutos", en: "// five minutes" },
  "install.title": { es: "Instalar jmux", en: "Install jmux" },
  "install.lede": {
    es: "Las releases se publican en un repositorio privado de GitHub, así que se descargan con tu sesión de gh. Después, jmux se actualiza solo.",
    en: "Releases are published in a private GitHub repository, so they come down through your gh login. After that, jmux updates itself.",
  },
  "foot.made": { es: "Todas las capturas son de jmux 0.1.306 con proyectos de ejemplo. Nada está simulado.", en: "Every capture is jmux 0.1.306 running demo projects. Nothing is mocked." },
  "foot.credits": { es: "Tipografía: <a href='fonts/OFL.txt'>JetBrains Mono (OFL)</a>", en: "Type: <a href='fonts/OFL.txt'>JetBrains Mono (OFL)</a>" },
  "keys.title": { es: "Atajos de esta página", en: "This page's shortcuts" },
  "zoom": { es: "Clic o Esc para cerrar", en: "Click or Esc to close" },
};

/* The demo's home, as the outputs print it. */
const H = "/Users/ada/code";

/* ── groups: projects in the rail ─────────────────────────── */
const GROUPS = [
  { id: "survive", kicker: "01 · jmuxd",
    t: { es: "Sesiones que no mueren", en: "Sessions that never die" },
    l: { es: "Un daemon propio es el dueño de cada terminal. La ventana es solo una forma de mirarlos: ciérrala, cuélgala, actualízala. Lo que corre sigue corriendo.",
         en: "A daemon of its own owns every terminal. The window is just a way of looking at them: close it, crash it, update it. What was running keeps running." } },
  { id: "workspace", kicker: "02 · workspace",
    t: { es: "Tu espacio de trabajo", en: "Your workspace" },
    l: { es: "Proyectos que son carpetas, paneles y pestañas a cualquier profundidad, y un árbol que lo enseña todo. Se maneja entero desde el teclado.",
         en: "Projects that are folders, panes and tabs to any depth, and a tree that shows it all. All of it works from the keyboard." } },
  { id: "agents", kicker: "03 · claude + codex",
    t: { es: "Agentes a la vista", en: "Agents at a glance" },
    l: { es: "jmux sabe qué hace cada Claude y cada Codex porque se lo cuentan sus propios hooks, sin adivinar mirando la pantalla. Ves quién trabaja, quién te espera y quién ha terminado sin que lo vieras.",
         en: "jmux knows what every Claude and Codex is doing because their own hooks tell it, with no guessing from the screen. You see who's working, who's waiting on you and who finished while you weren't looking." } },
  { id: "team", kicker: "04 · agent ↔ agent",
    t: { es: "Agentes en equipo", en: "Agents as a team" },
    l: { es: "Tus agentes usan jmux por sí solos: leen otras sesiones, se mandan mensajes con acuse y lanzan sesiones hijas de Claude o Codex. Cada una va anidada bajo su padre y nunca tiene más permisos que él.",
         en: "Your agents use jmux on their own: they read other sessions, message each other with receipts and start Claude or Codex child sessions. Each child nests under its parent and never gets more permission than it has." } },
  { id: "search", kicker: "05 · every conversation",
    t: { es: "Buscar y retomar", en: "Search and resume" },
    l: { es: "Un índice local de todas las conversaciones de Claude y Codex de tu Mac, las empezaras en jmux o no. Encuentra la frase y vuelve a esa conversación.",
         en: "A local index of every Claude and Codex conversation on your Mac, started in jmux or not. Find the sentence and go back into that conversation." } },
  { id: "docs", kicker: "06 · files · docs · memory",
    t: { es: "Archivos, documentos y memoria", en: "Files, documents and memory" },
    l: { es: "Los archivos del proyecto, Markdown y código en pestañas junto a tus terminales, y lo que tu agente recuerda y lee, todo en el mismo panel.",
         en: "The project's files, Markdown and code in tabs next to your terminals, and what your agent remembers and reads, all in one panel." } },
  { id: "terminal", kicker: "07 · terminal",
    t: { es: "Oficio de terminal", en: "Terminal craft" },
    l: { es: "Lo que esperas de un buen terminal, más algunas cosas que solo tienen sentido cuando trabajas con agentes.",
         en: "What you expect from a good terminal, plus a few things that only make sense when you work with agents." } },
  { id: "mac", kicker: "08 · macOS",
    t: { es: "Tu Mac, de tu parte", en: "Your Mac, on your side" },
    l: { es: "Un Mac que no se duerme a mitad de tarea, un medidor de tu suscripción y notificaciones que te llevan a la sesión que te necesita.",
         en: "A Mac that doesn't fall asleep mid-task, a meter for your subscription, and notifications that take you to the session that needs you." } },
];

/* ── features ──────────────────────────────────────────────
 * kind: the rail icon (term, claude, codex, doc, search, mac)
 * keys: chords (space-separated keycaps); cli: commands
 * shot: {src, cls, alt} or term: a showcase terminal
 * ex: steps {t:{es,en}, c: command, o: output, k: [chords], plain: bool} */
const F = [
  /* ── 01 survive ── */
  { id: "persist", g: "survive", kind: "term",
    r: { es: "sesiones persistentes", en: "persistent sessions" },
    t: { es: "Cierra la ventana. No se muere nada.", en: "Close the window. Nothing dies." },
    l: { es: "Cada terminal pertenece a <b>jmuxd</b>, un daemon que la app arranca (o launchd al iniciar sesión, si instalaste desde el código fuente). Aunque salgas con ⌘Q o la app se cuelgue, los procesos siguen vivos. Al reabrir, cada panel vuelve con su scrollback en unos 200 ms.",
         en: "Every terminal belongs to <b>jmuxd</b>, a daemon the app starts (or launchd at login, if you installed from source). Quit with ⌘Q or have the app crash, and the processes live on. Reopen it and every pane is back with its scrollback in about 200 ms." },
    keys: ["⌘ Q"], cli: ["jmux ls"],
    term: { title: "zsh — any terminal", body: [
      ["p", "jmux ls"],
      ["o", `1: dev server [50x22] (cwd ${H}/payments-api, pid 72721)
2: payments-api 1 [50x22] (cwd ${H}/payments-api, pid 72723)
5: storefront dev [80x24] (cwd ${H}/storefront, pid 72900)
6: payments-api 2 [57x47] (cwd ${H}/payments-api, pid 73631, claude idle)
7: storefront 1 [80x24] (cwd ${H}/storefront, pid 73637, codex idle*)
9: payments-api 3 [80x24] (cwd ${H}/payments-api, pid 75462, codex idle*, child of 6)`]] },
    ex: [
      { t: { es: "Arranca algo largo en una sesión, por ejemplo un servidor:", en: "Start something long-running in a session, a server for instance:" }, c: "python3 -m http.server 8000" },
      { t: { es: "Cierra jmux del todo. La ventana se va y el servidor sigue:", en: "Quit jmux entirely. The window goes; the server doesn't:" }, k: ["⌘ Q"] },
      { t: { es: "Desde cualquier otro terminal, pregunta qué sigue vivo:", en: "From any other terminal, ask what's still alive:" }, c: "jmux ls", o: `1: dev server [50x22] (cwd ${H}/payments-api, pid 72721)\n6: payments-api 2 [57x47] (cwd ${H}/payments-api, pid 73631, claude idle)` },
      { t: { es: "Vuelve a abrir jmux: cada panel regresa a su sitio con su scrollback.", en: "Open jmux again: every pane comes back where it was, scrollback included." } },
    ] },
  { id: "reboot", g: "survive", kind: "claude",
    r: { es: "tras reiniciar", en: "after a reboot" },
    t: { es: "Después de reiniciar, cada agente sigue su conversación.", en: "After a reboot, every agent picks its conversation back up." },
    l: { es: "Si el Mac se reinicia, el layout vuelve entero. Cada Claude y cada Codex se relanza con su propia orden de reanudar, en su carpeta y con su nombre. El scrollback de las shells normales todavía no sobrevive a un reinicio.",
         en: "If the Mac restarts, the whole layout comes back. Every Claude and Codex is relaunched with its own resume command, in its folder and under its name. Plain shells' scrollback doesn't survive a reboot yet." },
    cli: ["claude --resume", "codex resume"],
    ex: [
      { t: { es: "Trabaja como siempre, con agentes en varias pestañas.", en: "Work as usual, with agents in several tabs." } },
      { t: { es: "Reinicia el Mac (o para el daemon). Al abrir jmux, el layout de cada proyecto está ahí.", en: "Restart the Mac (or stop the daemon). When jmux opens, every project's layout is there." } },
      { t: { es: "Cada pestaña de agente vuelve con su conversación, relanzada por jmux así:", en: "Every agent tab comes back with its conversation, relaunched by jmux like this:" }, c: "claude --resume <conversation-id>      # Claude\ncodex resume <thread-id>              # Codex", plain: true },
    ] },
  { id: "upgrade", g: "survive", kind: "term",
    band: 52,
    r: { es: "actualizar sin cortes", en: "seamless updates" },
    t: { es: "Se actualiza sin tocar un solo proceso.", en: "It updates without touching a single process." },
    l: { es: "Un jmuxd nuevo recibe los terminales vivos del anterior, pasándose los descriptores de archivo. Si la entrega falla, el viejo sigue sirviendo. La app se actualiza sola al arrancar: comprueba el checksum y la firma y cambia el bundle de una vez.",
         en: "A new jmuxd takes the live terminals over from the old one by handing across their file descriptors. If the handover fails, the old one keeps serving. The app updates itself at launch: it checks the checksum and the signature and swaps the bundle in one step." },
    cli: ["jmux update", "jmux version"],
    ex: [
      { t: { es: "¿Hay versión nueva?", en: "Is there a newer release?" }, c: "jmux update --check", o: "jmux 0.1.306 is the latest release — up to date" },
      { t: { es: "Qué versión corre cada parte, y si están desacompasadas:", en: "Which build each part runs, and whether they're out of step:" }, c: "jmux version", o: "jmux    0.1.306\nhome    /Users/ada/.jmux (JMUX_HOME)\njmuxd   0.1.306 build 43120a7e0074 — this build (/Applications/jmux.app/Contents/MacOS/jmuxd)\njmuxd   0.1.306 build 43120a7e0074 — running (pid 25465, /Applications/jmux.app/Contents/MacOS/jmuxd)" },
      { t: { es: "O pulsa el chip de versión en la barra de título. Si tienes un documento sin guardar, jmux espera a que lo guardes antes de reiniciarse.", en: "Or click the version chip in the title band. If a document has unsaved edits, jmux waits for you before relaunching." } },
    ] },
  { id: "putaway", g: "survive", kind: "term",
    r: { es: "guardar y recuperar", en: "put away, bring back" },
    t: { es: "Guardar no es cerrar.", en: "Putting away isn't closing." },
    l: { es: "⌘W <b>guarda</b> la sesión: sigue corriendo y queda colgada de su proyecto en el árbol, atenuada. Un clic la devuelve a su pestaña. Terminarla es otro gesto distinto. También puedes guardar y recuperar un proyecto entero de una vez.",
         en: "⌘W <b>puts the session away</b>: it keeps running and hangs under its project in the tree, dimmed. One click brings it back to its tab. Ending it is a separate gesture. You can put away and bring back a whole project at once too." },
    keys: ["⌘ W", "⌘ click ×"],
    shot: { src: "shots/putaway.webp", cls: "narrow", alt: { es: "«infra 1» guardada: atenuada bajo su proyecto", en: "“infra 1” put away: dimmed under its project" } },
    ex: [
      { t: { es: "Guarda la pestaña actual. El proceso sigue vivo:", en: "Put the current tab away. The process stays alive:" }, k: ["⌘ W"] },
      { t: { es: "Tráela de vuelta con un clic en su fila del árbol: vuelve al panel y a la pestaña de donde salió.", en: "Bring it back by clicking its row in the tree: it returns to the pane and tab it left." } },
      { t: { es: "Para terminarla de verdad, ⌘-clic en la × de la pestaña, o «Delete Session» en el menú de la fila.", en: "To really end it, ⌘-click the tab's ×, or choose “Delete Session” in the row's menu." }, k: ["⌘ click ×"] },
      { t: { es: "¿Un proyecto entero? «Put Away All Sessions» y «Bring Back All Sessions» en el menú del proyecto.", en: "A whole project? “Put Away All Sessions” and “Bring Back All Sessions” in the project's menu." } },
    ] },

  /* ── 02 workspace ── */
  { id: "projects", g: "workspace", kind: "term",
    shot: { src: "shots/project-menu.webp", cls: "narrow", alt: { es: "El menú de la fila de un proyecto", en: "A project row's menu" } },
    r: { es: "proyectos", en: "projects" },
    t: { es: "Proyectos que son carpetas.", en: "Projects that are folders." },
    l: { es: "Un proyecto es un directorio del disco. Todo lo que abres en él, sean terminales, Claudes o Codex, empieza ahí. Pasas de un proyecto a otro con ⌘1…⌘9.",
         en: "A project is a directory on disk. Everything you open in it, terminals, Claudes or Codexes, starts there. Switch between projects with ⌘1…⌘9." },
    keys: ["⌘ N", "⌘ 1…9"], cli: ["jmux new --project 1", "jmux project list"],
    ex: [
      { t: { es: "Nuevo proyecto: elige la carpeta.", en: "New project: pick the folder." }, k: ["⌘ N"] },
      { t: { es: "El menú de la fila del proyecto ofrece: New Terminal · New Claude Session · New Codex Session · Resume Conversation… · Change Directory… · Reveal in Finder.", en: "The project row's menu offers: New Terminal · New Claude Session · New Codex Session · Resume Conversation… · Change Directory… · Reveal in Finder." } },
      { t: { es: "Desde la CLI, abre un Claude en el proyecto 1 con su primera tarea:", en: "From the CLI, open a Claude in project 1 with its first task:" }, c: "jmux new --project 1 --claude --model opus --task 'Fix the failing refund test'" },
      { t: { es: "Y lista los proyectos:", en: "And list the projects:" }, c: "jmux project list", o: `1: payments-api — ${H}/payments-api (active)\n2: storefront — ${H}/storefront\n3: infra — ${H}/infra` },
    ] },
  { id: "splits", g: "workspace", kind: "term",
    r: { es: "paneles y pestañas", en: "panes and tabs" },
    t: { es: "Divide, apila, arrastra.", en: "Split, stack, drag." },
    l: { es: "Paneles a cualquier profundidad, pestañas que se arrastran de un panel a otro y un layout que sobrevive a cerrar la app. Con una docena de pestañas abiertas la barra hace scroll y no las aplasta.",
         en: "Panes to any depth, tabs you drag between panes, and a layout that survives quitting the app. With a dozen tabs open the strip scrolls instead of squashing them." },
    keys: ["⌘ D", "⌘ ⇧ D", "⌘ T", "⌥ ⌘ ←→↑↓"], cli: ["jmux tree"],
    ex: [
      { t: { es: "Divide a la derecha y hacia abajo:", en: "Split right and down:" }, k: ["⌘ D", "⌘ ⇧ D"] },
      { t: { es: "Nueva pestaña de terminal, de Claude o de Codex:", en: "New terminal, Claude or Codex tab:" }, k: ["⌘ T", "⌘ ⇧ T", "⌃ ⇧ T"] },
      { t: { es: "Muévete entre paneles y pestañas:", en: "Move between panes and tabs:" }, k: ["⌥ ⌘ ←→↑↓", "⌘ ] / ⌘ [", "⌘ ⇧ ] / ⌘ ⇧ [", "⌃ 1…9"] },
      { t: { es: "El mapa completo, como lo ve un agente:", en: "The whole map, as an agent sees it:" }, c: "jmux tree", o: `project 1: payments-api — ${H}/payments-api (active)
└─ split horizontal
   ├─ left: pane (focused)
   │  ├─ 6: payments-api 2 — ${H}/payments-api · claude idle · active
   │  └─ 9: payments-api 3 — ${H}/payments-api · codex idle* · child of 6
   └─ right: pane
      ├─ 2: payments-api 1 — ${H}/payments-api ← you
      └─ 1: dev server — ${H}/payments-api
you are session 2 "payments-api 1" — project "payments-api", right pane, tab 1 of 2` },
    ] },
  { id: "names", g: "workspace", kind: "claude",
    shot: { src: "shots/names.webp", cls: "mid", alt: { es: "La pestaña de jmux y el prompt de Claude llevan el mismo nombre", en: "jmux's tab and Claude's prompt carry the same name" } },
    r: { es: "nombres compartidos", en: "shared names" },
    t: { es: "Un solo nombre, en jmux y en el agente.", en: "One name, in jmux and in the agent." },
    l: { es: "Cada sesión nace con el nombre de su proyecto y un número («api 2»). El Claude o Codex que corre dentro usa ese mismo nombre en su conversación, y si renombras en un lado cambia también en el otro. jmux nunca renombra nada por su cuenta.",
         en: "Every session is born with its project's name and a number (“api 2”). The Claude or Codex inside uses that same name in its conversation, and renaming on either side changes the other. jmux never renames anything on its own." },
    cli: ["jmux rename", "/rename"],
    ex: [
      { t: { es: "Doble clic en la pestaña o la fila, o «Rename Session»; o desde la sesión:", en: "Double-click the tab or row, or “Rename Session”; or from inside the session:" }, c: "jmux rename 'fixing refunds'" },
      { t: { es: "O renombra otra sesión:", en: "Or rename another one:" }, c: "jmux rename --session 7 'coupon rounding'" },
      { t: { es: "Dentro de Claude, <code>/rename</code> también funciona: la pestaña de jmux cambia con él.", en: "Inside Claude, <code>/rename</code> works too: jmux's tab follows it." } },
    ] },
  { id: "session-tree", g: "workspace", kind: "term",
    r: { es: "árbol de sesiones", en: "session tree" },
    t: { es: "Todo a la vista en un árbol.", en: "Everything in one tree." },
    l: { es: "Cada proyecto con sus sesiones, estén en pestañas o guardadas, y las hijas anidadas bajo su padre. Al pie hay tres contadores (Working, Blocked, Unseen) que también sirven de filtro. El panel lateral de esta página funciona igual.",
         en: "Every project with its sessions, in tabs or put away, and child sessions nested under their parent. At the foot sit three counters (Working, Blocked, Unseen) that double as filters. This page's rail works the same way." },
    keys: ["⌘ B"],
    shot: { src: "shots/tree.webp", cls: "narrow", alt: { es: "El árbol: una hija Codex bajo su Claude, estados y contexto", en: "The tree: a Codex child under its Claude, states and context" } },
    ex: [
      { t: { es: "Muestra u oculta el árbol:", en: "Show or hide the tree:" }, k: ["⌘ B"] },
      { t: { es: "Pulsa «Blocked» al pie para ver solo las sesiones que te esperan. Vuelve a pulsarlo para verlas todas.", en: "Click “Blocked” at the foot to see only the sessions waiting on you. Click again for all of them." } },
      { t: { es: "Pliega un padre para esconder a sus hijas; jmux recuerda qué dejaste plegado.", en: "Fold a parent to hide its children; jmux remembers what you folded." } },
    ] },
  { id: "trail", g: "workspace", kind: "term",
    band: 66.5,
    r: { es: "historial de proyectos", en: "project trail" },
    t: { es: "Vuelve a donde estabas.", en: "Go back to where you were." },
    l: { es: "La ventana recuerda por qué proyectos has pasado. Atrás y adelante, igual que en un navegador, y con clic derecho en las flechas ves el historial.",
         en: "The window remembers the projects it has visited. Back and forward, like a browser, and a right-click on the arrows shows the history." },
    keys: ["⌃ ⌘ ←", "⌃ ⌘ →"],
    ex: [
      { t: { es: "Salta a otro proyecto y vuelve:", en: "Jump to another project and back:" }, k: ["⌘ 2", "⌃ ⌘ ←"] },
      { t: { es: "Clic derecho en la flecha ← de la barra de título para elegir del historial.", en: "Right-click the ← arrow in the title band to pick from the history." } },
    ] },
  { id: "palette", g: "workspace", kind: "term",
    shot: { src: "shots/palette.webp", alt: { es: "La paleta filtrando «toggle»", en: "The palette filtering “toggle”" }, second: { src: "shots/chords.webp", alt: { es: "Con ⌘ mantenido: cada control muestra su atajo", en: "With ⌘ held: every control shows its chord" } } },
    r: { es: "paleta y atajos", en: "palette and keys" },
    t: { es: "Todo, desde el teclado. Y a tu manera.", en: "Everything from the keyboard. Your way." },
    l: { es: "La paleta lista todas las acciones. Cualquier atajo se puede reasignar en <code>~/.jmux/config</code>, con condiciones de cuándo aplica. Si mantienes ⌘, ⌃ o ⌥ unos 0,3 s, cada control muestra el atajo que tiene en ese momento, reasignado o no.",
         en: "The palette lists every action. Any shortcut can be rebound in <code>~/.jmux/config</code>, with conditions for when it applies. Hold ⌘, ⌃ or ⌥ for about 0.3 s and every control shows the chord it answers to right now, rebound or not." },
    keys: ["⌘ P", "hold ⌘"], cli: ["~/.jmux/config"],
    ex: [
      { t: { es: "Abre la paleta y escribe lo que quieres hacer:", en: "Open the palette and type what you want:" }, k: ["⌘ P"] },
      { t: { es: "Reasigna en <code>~/.jmux/config</code> (una directiva por línea):", en: "Rebind in <code>~/.jmux/config</code> (one directive per line):" }, c: "bind cmd+shift+o tab.new\nbind cmd+shift+c clipboard.clean when terminalFocus\nunbind cmd+shift+u", plain: true },
      { t: { es: "Recárgalo con «Reload Config» desde la paleta. Una línea mal escrita se ignora y se te dice por qué; el resto se aplica.", en: "Reload it with “Reload Config” from the palette. A bad line is skipped and you're told why; the rest applies." } },
      { t: { es: "Mantén ⌘ y mira: cada control muestra su atajo. Esta página hace lo mismo.", en: "Hold ⌘ and look: every control shows its chord. This page does the same." }, k: ["hold ⌘"] },
    ] },
  { id: "hover", g: "workspace", kind: "claude",
    shot: { src: "shots/hover.webp", cls: "narrow", alt: { es: "Modelo, esfuerzo, contexto y sus dos hijas Codex", en: "Model, effort, context and its two Codex children" } },
    r: { es: "tarjeta al pasar", en: "hover card" },
    t: { es: "Pasa el ratón y lo sabes todo.", en: "Hover and you know everything." },
    l: { es: "Si pasas el ratón por el icono de una sesión, una tarjeta te muestra su estado, modelo, esfuerzo y contexto, sus subagentes con tipo y modelo, y quién es su padre y quiénes sus hijas. jmux dibuja sus propios menús y tarjetas en vez de los de macOS.",
         en: "Hover a session's icon and a card shows its state, model, effort and context, its subagents with type and model, and its parent and children. jmux draws its own menus and cards instead of macOS's." },
    ex: [
      { t: { es: "Pasa el ratón sobre el icono de Claude o Codex de una fila del árbol o de una pestaña.", en: "Hover the Claude or Codex icon on a tree row or a tab." } },
      { t: { es: "Con subagentes en marcha, la tarjeta los lista (hasta seis, luego «+N more»).", en: "With subagents running, the card lists them (up to six, then “+N more”)." } },
    ] },

  /* ── 03 agents ── */
  { id: "state", g: "agents", kind: "claude",
    r: { es: "estado del agente", en: "agent state" },
    t: { es: "Sabes qué agente te necesita.", en: "You know which agent needs you." },
    l: { es: "Cada sesión muestra si su agente está <b>trabajando</b>, <b>bloqueado</b> esperándote o <b>libre</b>, y si ha cambiado algo desde la última vez que la miraste. jmux lo sabe por los hooks de Claude y de Codex, sin adivinar mirando la pantalla. Un subagente, una shell o un monitor que el turno deja corriendo cuenta como trabajo.",
         en: "Every session shows whether its agent is <b>working</b>, <b>blocked</b> waiting on you or <b>idle</b>, and whether anything changed since you last looked. jmux knows from Claude's and Codex's own hooks, with no guessing from the screen. A subagent, shell or monitor a turn leaves running counts as work." },
    cli: ["jmux ls", "jmux wait --until"],
    shot: { src: "shots/tree.webp", cls: "narrow", alt: { es: "Puntos de estado: verde trabajando, morado sin ver", en: "State dots: green working, purple unseen" } },
    ex: [
      { t: { es: "El estado de todas, en texto (el * es «sin ver»):", en: "Everyone's state, as text (the * means unseen):" }, c: "jmux ls", o: `6: payments-api 2 [57x47] (cwd ${H}/payments-api, pid 73631, claude working)\n7: storefront 1 [80x24] (cwd ${H}/storefront, pid 73637, codex idle*)\n9: payments-api 3 [80x24] (cwd ${H}/payments-api, pid 75462, codex working, child of 6)` },
      { t: { es: "Espera a que un agente acabe su turno y lee lo que dijo:", en: "Wait for an agent to finish its turn and read what it said:" }, c: "jmux wait 6 --until idle && jmux result 6" },
      { t: { es: "O espera a que te pida algo:", en: "Or wait for it to ask you something:" }, c: "jmux wait 6 --until blocked" },
    ] },
  { id: "facts", g: "agents", kind: "claude",
    r: { es: "modelo · esfuerzo · contexto", en: "model · effort · context" },
    t: { es: "Modelo, esfuerzo y contexto en cada fila.", en: "Model, effort and context on every row." },
    l: { es: "Junto a cada agente ves su modelo, unas barras de esfuerzo y el contexto que lleva gastado («47k»). Así sabes de un vistazo cuál está a punto de llenarse. Un botón junto a PROJECTS los muestra u oculta.",
         en: "Next to each agent you see its model, effort bars and the context it has used (“47k”). You can tell at a glance which one is about to fill up. A control beside PROJECTS shows or hides them." },
    shot: { src: "shots/tree.webp", cls: "narrow", alt: { es: "47k de contexto, barras de esfuerzo, hijas contadas", en: "47k context, effort bars, children counted" } },
    ex: [
      { t: { es: "Lee una fila: icono del agente · nombre · número de hijas · contexto · esfuerzo · estado.", en: "Read a row: agent icon · name · child count · context · effort · state." } },
      { t: { es: "¿Demasiada información? Pulsa el botón ⓘ junto a PROJECTS para ocultarla.", en: "Too much? Click the ⓘ control beside PROJECTS to hide it." } },
    ] },
  { id: "codex", g: "agents", kind: "codex",
    r: { es: "Claude + Codex", en: "Claude + Codex" },
    t: { es: "Claude Code y Codex, al mismo nivel.", en: "Claude Code and Codex, on equal terms." },
    l: { es: "Son exactamente dos agentes y los dos de primera: los dos tienen hooks, skill, reanudar, bifurcar, mensajes y sesiones hijas, y un Claude puede tener hijas Codex y al revés. Cada uno arranca con los argumentos que tú elijas.",
         en: "Exactly two agents, both first-class: hooks, skill, resume, fork, messages and child sessions work for both, and a Claude can have Codex children and vice versa. Each one starts with the arguments you choose." },
    keys: ["⌘ ⇧ T", "⌃ ⇧ T"], cli: ["jmux claude install-hooks", "jmux codex install-hooks"],
    shot: { src: "shots/codex.webp", alt: { es: "Codex en storefront: añade un test, lo ve fallar, arregla el redondeo", en: "Codex in storefront: adds a test, watches it fail, fixes the rounding" } },
    ex: [
      { t: { es: "Instala la integración de cada uno (tus hooks se conservan). La app te lo ofrece también en un aviso al arrancar:", en: "Install each one's integration (your own hooks are kept). The app also offers it in a banner at launch:" }, c: "jmux claude install-hooks\njmux codex install-hooks" },
      { t: { es: "Comprueba cómo quedó:", en: "Check how it went:" }, c: "jmux claude hooks-status", o: "hooks installed /Users/ada/.claude/settings.json\nskill installed /Users/ada/.claude/skills/jmux/SKILL.md\nagent installed /Users/ada/.local/bin/claude" },
      { t: { es: "Argumentos de arranque para cada uno, en <code>~/.jmux/config</code>:", en: "Launch arguments for each one, in <code>~/.jmux/config</code>:" }, c: "claude-args --model opus\ncodex-args -c model_reasoning_effort=high\nclaude-yolo off", plain: true },
    ] },
  { id: "walk", g: "agents", kind: "claude",
    band: 6.4,
    r: { es: "saltar al siguiente", en: "walk active ones" },
    t: { es: "Salta al siguiente que importa.", en: "Jump to the next one that matters." },
    l: { es: "⌘J recorre, una tras otra, las sesiones que trabajan, esperan o tienen algo sin ver, aunque estén en proyectos distintos. ⌘⇧U te lleva directo a la que te espera: primero las que no has visto, y entre ellas la del cambio más reciente.",
         en: "⌘J walks through the sessions that are working, waiting or have something unseen, one after another, even across projects. ⌘⇧U takes you straight to the one waiting on you: unseen first, most recent change first." },
    keys: ["⌘ J", "⌘ ⇧ J", "⌘ ⇧ U"],
    ex: [
      { t: { es: "Siguiente y anterior sesión activa:", en: "Next and previous active session:" }, k: ["⌘ J", "⌘ ⇧ J"] },
      { t: { es: "A la que te espera:", en: "To the one waiting on you:" }, k: ["⌘ ⇧ U"] },
    ] },
  { id: "notify", g: "agents", kind: "mac",
    r: { es: "notificaciones", en: "notifications" },
    t: { es: "Te avisa cuando no estás mirando.", en: "It tells you when you're not looking." },
    l: { es: "Si un agente que no estás mirando se bloquea o termina, recibes una notificación de macOS («Needs your input» o «Finished its turn»). Al pulsarla vas a esa sesión. El icono del Dock cuenta las sesiones desatendidas.",
         en: "When an agent you're not watching gets blocked or finishes, you get a macOS notification (“Needs your input” or “Finished its turn”). Click it to go to that session. The Dock badge counts unattended sessions." },
    ex: [
      { t: { es: "Deja trabajando a un agente y cambia de app. Cuando te necesite, llega la notificación; al pulsarla vas a su sesión.", en: "Leave an agent working and switch apps. When it needs you, the notification arrives; clicking it takes you to its session." } },
      { t: { es: "¿Una reunión? «Silence Notifications» en la paleta las calla.", en: "In a meeting? “Silence Notifications” in the palette mutes them." }, k: ["⌘ P"] },
    ] },
  { id: "remote", g: "agents", kind: "claude",
    band: 15.8,
    r: { es: "Remote Control", en: "Remote Control" },
    t: { es: "Remote Control, con un interruptor.", en: "Remote Control, with one switch." },
    l: { es: "Un interruptor en la barra de título hace que los Claudes nuevos que lance jmux arranquen con <code>--remote-control</code>, para que los sigas desde el móvil. Una marca en el árbol te dice cuáles lo tienen activado.",
         en: "A switch in the title band makes the new Claudes jmux launches start with <code>--remote-control</code>, so you can follow them from your phone. A mark in the tree tells you which ones have it on." },
    cli: ["claude --remote-control"],
    ex: [
      { t: { es: "Pulsa el icono de emisión (•)) en la barra de título, o desde la paleta: «Toggle Remote Control for New Claude Sessions».", en: "Click the broadcast icon (•)) in the title band, or from the palette: “Toggle Remote Control for New Claude Sessions”." }, k: ["⌘ P"] },
      { t: { es: "Los Claudes nuevos de jmux arrancan con él; los que ya estaban no cambian.", en: "New Claudes from jmux start with it; ones already running stay as they are." } },
    ] },

  /* ── 04 team ── */
  { id: "spawn", g: "team", kind: "codex", isNew: "0.1.301",
    r: { es: "jmux spawn · hijas", en: "jmux spawn · children" },
    t: { es: "Sesiones hijas: un Claude que lanza un Codex, o al revés.", en: "Child sessions: a Claude that starts a Codex, or the other way round." },
    l: { es: "Un agente le pasa una tarea a otro agente, del modelo y esfuerzo que quiera y en su propio worktree si hace falta. La hija aparece anidada bajo su padre y <b>nunca tiene más permisos que él</b>. Cuando termina, el padre recibe su mensaje final.",
         en: "An agent hands a task to another agent, with whatever model and effort it wants and in its own worktree when needed. The child appears nested under its parent and <b>never gets more permission than it has</b>. When it finishes, the parent receives its final message." },
    cli: ["jmux spawn", "jmux self", "jmux kill --tree"],
    shot: { src: "shots/hero-dark.webp", alt: { es: "«payments-api 3» y «payments-api 4» (Codex) anidadas bajo «payments-api 2» (Claude)", en: "“payments-api 3” and “payments-api 4” (Codex) nested under “payments-api 2” (Claude)" } },
    ex: [
      { t: { es: "Tu Claude lo hace solo cuando le conviene. Esta es la orden que usó en la captura:", en: "Your Claude does it on its own when it helps. This is the command it ran in the capture:" }, c: "jmux spawn --codex 'Read-only audit — do NOT edit files. Check payments/ledger.py for the same double-posting-on-retry bug and propose one regression test.'" },
      { t: { es: "En su propio worktree y rama, para trabajar en paralelo sin pisarse:", en: "In its own worktree and branch, to work in parallel without clashing:" }, c: "jmux spawn --claude --model opus --worktree --branch fix/ledger 'Give Ledger.post() an idempotency_key and the regression test'" },
      { t: { es: "Esperar el resultado ahí mismo, en vez de recibir el aviso:", en: "Wait for the result right there instead of being notified:" }, c: "jmux spawn --wait --codex --effort high 'Review the diff in payments/ for money bugs'" },
      { t: { es: "Quién eres, tus padres y tus hijas, y cómo va cada encargo:", en: "Who you are, your parents and children, and how each request stands:" }, c: "jmux self" },
      { t: { es: "Recoger: terminar la hija y sus descendientes, y quitar su worktree:", en: "Clean up: end the child and its descendants, and remove its worktree:" }, c: "jmux kill 9 --tree\njmux worktree remove 9" },
    ] },
  { id: "confirm", g: "team", kind: "claude", isNew: "0.1.303",
    shot: { src: "shots/confirm.webp", cls: "mid", alt: { es: "La tarjeta: tarea editable, agente, modelo, worktree, rama y permisos", en: "The card: editable task, agent, model, worktree, branch and permissions" } },
    band: 25.3,
    r: { es: "confirmar hijas", en: "confirm children" },
    t: { es: "Tú decides antes de que nazca una hija.", en: "You decide before a child is born." },
    l: { es: "Con un interruptor, cada <code>jmux spawn</code> espera en una tarjeta a que lo apruebes. En la tarjeta puedes editar la tarea, el agente, el modelo, el esfuerzo y el worktree antes de darle a Start Session. Si nadie contesta en 15 minutos, la petición caduca.",
         en: "With one switch, every <code>jmux spawn</code> waits on a card for your approval. On the card you can edit the task, agent, model, effort and worktree before you press Start Session. If nobody answers within 15 minutes, the request expires." },
    keys: ["⌘ ↩"],
    ex: [
      { t: { es: "Activa el interruptor de la barra de título, o «Toggle Confirmation of Child Sessions» en la paleta.", en: "Turn on the title-band switch, or “Toggle Confirmation of Child Sessions” in the palette." }, k: ["⌘ P"] },
      { t: { es: "Cuando un agente pida una hija, aparece la tarjeta. Ajusta lo que quieras y arranca, o rechaza:", en: "When an agent asks for a child, the card appears. Adjust anything, then start it or decline:" }, k: ["⌘ ↩"] },
      { t: { es: "El agente que la pidió recibe tu decisión como respuesta a su <code>jmux spawn</code>.", en: "The agent that asked gets your decision as the answer to its <code>jmux spawn</code>." } },
    ] },
  { id: "tell", g: "team", kind: "claude", isNew: "0.1.300",
    r: { es: "jmux tell · mensajes", en: "jmux tell · messages" },
    t: { es: "Mensajes entre agentes, con acuse de recibo.", en: "Messages between agents, with receipts." },
    l: { es: "Un Claude le escribe a un Codex, o a otro Claude, y el mensaje le llega <b>como de otra sesión, nunca como si lo hubieras escrito tú</b>. Si el agente está libre, empieza un turno con él; si está trabajando, lo recoge en su siguiente pausa. Cada mensaje tiene un acuse que se guarda en disco.",
         en: "A Claude writes to a Codex, or to another Claude, and the message arrives <b>as coming from another session, never as if you had typed it</b>. An idle agent starts a turn on it; a working one takes it at its next pause. Every message has a receipt kept on disk." },
    cli: ["jmux tell", "jmux tell --status"],
    shot: { src: "shots/tell-crop.webp", cls: "mid", alt: { es: "El mensaje de «infra 2» llega a «payments-api 2», que contesta", en: "The message from “infra 2” arrives at “payments-api 2”, which replies" } },
    ex: [
      { t: { es: "Desde un agente (o desde ti), escribe a la sesión 6:", en: "From an agent (or from you), write to session 6:" }, c: "jmux tell 6 'The refund queue redelivers up to 5 times: does your fix also cover ledger posts?'" },
      { t: { es: "Primero imprime el id del mensaje y luego el acuse. Puedes consultarlo cuando quieras:", en: "It prints the message id first, then its receipt. Ask for it any time:" }, c: "jmux tell --status 3a6d4234-9c4d-448c-843e-29da02930a24", o: "delivered 3a6d4234-9c4d-448c-843e-29da02930a24" },
      { t: { es: "Que llegue como un turno aparte, cuando acabe el que está en marcha, o como respuesta a otro mensaje:", en: "Have it arrive as a turn of its own after the running one, or as a reply to another message:" }, c: "jmux tell 8 --after-turn 'Tests are green on main'\njmux tell 8 --reply-to 3a6d4234-9c4d-448c-843e-29da02930a24 'No — ledger posts are not covered yet'" },
      { t: { es: "Los estados del acuse: waiting, delivering, sent, delivered, steered, held, refused, expired, cancelled, uncertain. Uno que siga esperando se puede retirar con <code>--cancel</code>.", en: "Receipt states: waiting, delivering, sent, delivered, steered, held, refused, expired, cancelled, uncertain. One still waiting can be taken back with <code>--cancel</code>." } },
    ] },
  { id: "result", g: "team", kind: "claude",
    r: { es: "jmux result", en: "jmux result" },
    t: { es: "La respuesta exacta, no lo que se ve en pantalla.", en: "The exact answer, not what's on screen." },
    l: { es: "Otro agente puede leer el mensaje final de un turno tal cual, en Markdown, sin raspar la pantalla. También puede leer la conversación entera por número de mensaje, de una sesión viva o de una ya terminada.",
         en: "Another agent can read a turn's final message exactly as written, in Markdown, without scraping the screen. It can also read the whole conversation by message number, from a live session or one that has ended." },
    cli: ["jmux result", "jmux conversation"],
    ex: [
      { t: { es: "El último turno de la sesión 6:", en: "Session 6's last turn:" }, c: "jmux result 6", o: "# claude · completed · 14:20:48 · turn 17ccc90d\nI replied to infra 2 (session 8), and the message was delivered. The short answer I gave: **no, the fix doesn't cover ledger posts.**\n\n- **Refunds:** only `refunds.refund()` is protected. A retry with the same key now returns the original amount instead of refunding again.\n- **Ledger:** `Ledger.post()` has no idempotency key, so each of the up-to-5 redeliveries that reaches it posts another entry." },
      { t: { es: "Los últimos mensajes, numerados, o un rango:", en: "The last messages, numbered, or a range:" }, c: "jmux conversation 6 --last 3\njmux conversation claude:2328c389-c975-43cf-939f-926b15dae7e0 --range 4:12" },
    ] },
  { id: "readwrite", g: "team", kind: "term",
    r: { es: "leer y escribir", en: "read and write" },
    t: { es: "Leer y escribir en otra sesión, sin romperla.", en: "Read and write another session, without breaking it." },
    l: { es: "Un agente puede mirar la pantalla de otra sesión, esperar a que se calle y escribirle. <code>jmux prompt</code> usa pegado entre corchetes, se niega a escribir en una shell pelada y no pulsa Enter si nadie reacciona en 2 s.",
         en: "An agent can look at another session's screen, wait for it to go quiet and write into it. <code>jmux prompt</code> uses bracketed paste, refuses to type into a bare shell, and holds back Enter if nothing reacts within 2 s." },
    cli: ["jmux read", "jmux wait", "jmux prompt", "jmux send", "jmux send-keys"],
    ex: [
      { t: { es: "¿Qué dice el servidor de desarrollo?", en: "What's the dev server saying?" }, c: "jmux read 1 --scrollback | tail -3", o: "14:21:13  POST /v1/charges              200  35ms\n14:21:14  POST /v1/charges              200  3ms\n14:21:16  POST /v1/refunds              200  47ms" },
      { t: { es: "Reinícialo: Ctrl-C, flecha arriba y Enter:", en: "Restart it: Ctrl-C, up arrow, Enter:" }, c: "jmux send-keys 1 C-c Up Enter" },
      { t: { es: "Escribe una orden en una shell, o un prompt en el programa que esté delante (un REPL, un agente):", en: "Type a command into a shell, or a prompt into the program in front (a REPL, an agent):" }, c: "jmux send 2 'git status' --enter\njmux prompt 7 'Now run npm test and paste the summary'" },
      { t: { es: "Espera a que la salida se calme durante 2 s antes de seguir:", en: "Wait until the output has been quiet for 2 s before going on:" }, c: "jmux wait 1 --quiet-ms 2000" },
    ] },
  { id: "team-pattern", g: "team", kind: "claude",
    r: { es: "equipos de sesiones", en: "teams of sessions" },
    t: { es: "Un encargo grande, un equipo de sesiones.", en: "One big task, a team of sessions." },
    l: { es: "La skill que jmux instala en Claude y en Codex les enseña un patrón: una hija por parte, cada una en su worktree; revisar con <code>jmux result</code>, corregir con <code>jmux tell</code> e integrar con git. jmux no guarda estado de flujo de trabajo: el plan lo lleva el agente.",
         en: "The skill jmux installs into Claude and Codex teaches them a pattern: one child per part, each in its own worktree; review with <code>jmux result</code>, correct with <code>jmux tell</code>, merge with git. jmux keeps no workflow state: the agent holds the plan." },
    cli: ["jmux --skill"],
    ex: [
      { t: { es: "Pídeselo a tu agente con tus palabras:", en: "Ask your agent in your own words:" }, c: "Split the checkout rewrite into three children, one worktree each: cart, pricing, payment form. Review each result before merging.", plain: true },
      { t: { es: "Lee lo que el agente sabe de jmux:", en: "Read what the agent knows about jmux:" }, c: "jmux --skill | less" },
    ] },
  { id: "mcp", g: "team", kind: "codex", isNew: "0.1.305",
    r: { es: "vía MCP (sandbox)", en: "MCP lane (sandbox)" },
    t: { es: "Agentes en sandbox también.", en: "Sandboxed agents too." },
    l: { es: "Un agente en sandbox no puede abrir el socket de jmux, así que jmux le ofrece sus herramientas por MCP (<code>jmux-lane</code>) y las configura por sí mismo en los Claudes y Codex que lanza. Esas herramientas no permiten leer pantallas ni teclear, a propósito.",
         en: "A sandboxed agent can't open jmux's socket, so jmux offers it its tools over MCP (<code>jmux-lane</code>) and wires them into the Claudes and Codexes it launches by itself. Those tools can't read screens or type, on purpose." },
    cli: ["jmux mcp"],
    term: { title: "jmux-lane · MCP tools", body: [
      ["d", "# what a sandboxed agent sees"],
      ["o", "jmux_sessions      jmux_self          jmux_conversations\njmux_conversation  jmux_result        jmux_search\njmux_search_status jmux_wait          jmux_tell\njmux_tell_status   jmux_tell_cancel   jmux_spawn\njmux_interrupt     jmux_kill"]] },
    ex: [
      { t: { es: "No tienes que hacer nada: las sesiones de Claude y Codex que abre jmux ya lo traen.", en: "Nothing to do: the Claude and Codex sessions jmux opens already have it." } },
      { t: { es: "Para conectarlo a mano en otro host MCP, el servidor es:", en: "To wire it by hand into another MCP host, the server is:" }, c: "jmux mcp" },
    ] },
  { id: "scope", g: "team", kind: "term",
    r: { es: "carriles y permisos", en: "lanes and permissions" },
    t: { es: "Cada agente en su carril.", en: "Every agent in its lane." },
    l: { es: "Un agente solo busca y lee conversaciones de su proyecto y de su familia (padres e hijas), solo puede parar a sus propias hijas, y solo puede terminar a ellas y a las sesiones que abrió él mismo. Ampliar la búsqueda es cosa de una persona, en Ajustes ▸ Search. Y una hija nunca supera los permisos de su padre: un agente no abre otro Claude o Codex con <code>jmux new</code>, lo lanza con <code>jmux spawn</code>.",
         en: "An agent only searches and reads conversations from its own project and family (parents and children), can only stop its own children, and can only end them and the sessions it opened itself. Widening search is a person's call, in Settings ▸ Search. And a child never exceeds its parent's permissions: an agent doesn't open another Claude or Codex with <code>jmux new</code>, it starts one with <code>jmux spawn</code>." },
    cli: ["jmux interrupt", "jmux kill", "jmux new"],
    ex: [
      { t: { es: "Un agente puede parar el turno de su hija:", en: "An agent can stop its child's turn:" }, c: "jmux interrupt 9" },
      { t: { es: "Si lo intenta con una sesión que no es suya, jmux se lo niega y le dice por qué.", en: "Try it on a session that isn't its own, and jmux refuses and says why." } },
      { t: { es: "Si un agente pide una sesión que ejecuta Claude o Codex, o que lleva una opción que salta los permisos, jmux se la niega y le señala <code>jmux spawn</code>. Sí puede abrir una terminal o cualquier otro programa:", en: "If an agent asks for a session that runs Claude or Codex, or carries a flag that skips permissions, jmux refuses and points it to <code>jmux spawn</code>. It can still open a terminal or any other program:" }, c: "jmux new -- npm run dev" },
      { t: { es: "Y cerrarla él mismo cuando ya no la necesita, con el id que le devolvió <code>jmux new</code>:", en: "And close it itself once it no longer needs it, by the id <code>jmux new</code> gave back:" }, c: "jmux kill 12" },
      { t: { es: "Para dejar que los agentes busquen en todo: Ajustes ▸ Search ▸ Agents search: Everywhere.", en: "To let agents search everything: Settings ▸ Search ▸ Agents search: Everywhere." }, k: ["⌘ ,"] },
    ] },

  /* ── 05 search ── */
  { id: "search-window", g: "search", kind: "search", isNew: "0.1.306",
    shot: { src: "shots/search.webp", alt: { es: "⌘⇧F: «redelivers» en dos conversaciones; al lado, la conversación del mensaje elegido en forma de sesión, con la palabra resaltada y el mensaje enmarcado", en: "⌘⇧F: “redelivers” in two conversations; beside them, the selected message's conversation as a session, the word highlighted and the message outlined" }, second: { src: "shots/conversation.webp", alt: { es: "↩ abre la conversación de solo lectura, con Session · Document · Source, Resume Here y Copy as Markdown", en: "↩ opens the read-only conversation, with Session · Document · Source, Resume Here and Copy as Markdown" } } },
    r: { es: "⌘⇧F buscar", en: "⌘⇧F search" },
    t: { es: "Busca en todas tus conversaciones.", en: "Search every conversation you've had." },
    l: { es: "⌘⇧F busca por texto completo en todas las conversaciones de Claude y Codex de este Mac, estén vivas o terminadas. Al lado de la lista lees la conversación del mensaje elegido, como sesión (el chat) o como documento, con cada palabra encontrada resaltada y ese mensaje enmarcado, y ↑↓ recorre cada mensaje coincidente listado. ↩ la abre en una pestaña de solo lectura, donde ⌘F busca dentro, y desde ahí vas a la sesión, la retomas o la copias en Markdown.",
         en: "⌘⇧F runs full-text search over every Claude and Codex conversation on this Mac, live or ended. Beside the list you read the selected message's conversation, as a session (the chat) or as a document, every matched word highlighted and that message outlined, and ↑↓ walks every listed matching message. ↩ opens it in a read-only tab, where ⌘F finds inside it, and from there you go to the session, resume it or copy it as Markdown." },
    keys: ["⌘ ⇧ F", "↑↓", "⌥ ↑↓", "↩", "⌘ ↩", "⇧ ⌘ ↩", "⌘ F", "⌘ G"],
    ex: [
      { t: { es: "Abre la búsqueda y escribe. «Words» busca palabras y sus raíces; «Text» busca un literal dentro de las palabras.", en: "Open search and type. “Words” matches words and their stems; “Text” matches a literal inside words." }, k: ["⌘ ⇧ F"] },
      { t: { es: "↑↓ entre mensajes (del último vuelve al primero), ⌥↑↓ entre conversaciones; la vista previa los sigue. «Session · Document» cambia cómo se lee, y jmux lo recuerda.", en: "↑↓ between messages (past the last, back to the first), ⌥↑↓ between conversations; the preview follows. “Session · Document” changes how it reads, and jmux remembers it." }, k: ["↑↓", "⌥ ↑↓"] },
      { t: { es: "↩ abre la conversación en una pestaña, ⌘↩ va a la sesión que la ejecuta y ⇧⌘↩ retoma una terminada (Resume Here).", en: "↩ opens the conversation in a tab, ⌘↩ goes to the session running it, and ⇧⌘↩ resumes an ended one (Resume Here)." }, k: ["↩", "⌘ ↩", "⇧ ⌘ ↩"] },
      { t: { es: "En la pestaña, ⌘F busca dentro, ya relleno con lo que encontró la búsqueda; ⌘G y ⇧⌘G saltan entre coincidencias.", en: "In the tab, ⌘F finds inside it, already filled with what the search found; ⌘G and ⇧⌘G step between matches." }, k: ["⌘ F", "⌘ G", "⇧ ⌘ G"] },
    ] },
  { id: "search-cli", g: "search", kind: "search", isNew: "0.1.302",
    r: { es: "jmux search", en: "jmux search" },
    t: { es: "Y desde la línea de órdenes, con filtros.", en: "And from the command line, with filters." },
    l: { es: "El mismo índice desde la CLI, para ti o para tus agentes: palabras, frases, exclusiones y filtros por agente, proyecto, rol y fecha. Cada resultado incluye la orden exacta para leerlo.",
         en: "The same index from the CLI, for you or your agents: words, phrases, exclusions and filters by agent, project, role and date. Every result includes the exact command to read it." },
    cli: ["jmux search"],
    term: { title: "jmux search idempotency key", body: [
      ["p", "jmux search idempotency key"],
      ["o", `claude · The retry test in tests/test_refunds.py fails: a refund retried with the same idempotency key… · payments-api · 6m ago · live in session 6 · 5 hits
  #6 from another session: …add keyword-only \`idempotency_key=None\`, treating identical keyed retries as no-ops…
  #7 assistant: - **Refunds fixed:** in \`payments/refunds.py:23\`, a retry with an idempotency key it has already seen now returns the original amount…
  jmux conversation claude:2328c389-c975-43cf-939f-926b15dae7e0 --range 4:12

codex · Read-only audit — do NOT edit, create or delete any files… · payments-api · 7m ago · live in session 9 · 2 hits
  #3 assistant: …add keyword-only \`idempotency_key=None\`, treating identical keyed retries as no-ops and rejecting conflicting reuse…
  jmux conversation codex:01a0ed1a-4db4-79b1-ab96-09d3ec4a9418 --range 0:5`]] },
    ex: [
      { t: { es: "Palabras (todas en el mismo mensaje), frases y exclusiones:", en: "Words (all in one message), phrases and exclusions:" }, c: "jmux search deploy staging '\"rollback plan\"' -terraform" },
      { t: { es: "Filtros dentro de la consulta:", en: "Filters inside the query:" }, c: "jmux search refund agent:codex project:payments-api role:user after:2026-09-01" },
      { t: { es: "Un trozo literal dentro de palabras, y en JSON para scripts:", en: "A literal fragment inside words, and JSON for scripts:" }, c: "jmux search --text ployment --limit 5 --json" },
    ] },
  { id: "resume", g: "search", kind: "claude",
    shot: { src: "shots/agent-menu.webp", cls: "narrow", alt: { es: "El menú de la fila de un agente: Fork Conversation", en: "An agent row's menu: Fork Conversation" } },
    r: { es: "retomar y bifurcar", en: "resume and fork" },
    t: { es: "Retoma o bifurca cualquier conversación.", en: "Resume or fork any conversation." },
    l: { es: "«Resume Conversation…» reabre una conversación antigua en una sesión nueva del proyecto. «Fork Conversation» la bifurca: el agente sigue desde ese punto por otro camino y el original queda intacto.",
         en: "“Resume Conversation…” reopens an earlier conversation in a new session of the project. “Fork Conversation” branches it: the agent carries on from that point down another path and the original stays untouched." },
    cli: ["claude --fork-session", "codex fork"],
    ex: [
      { t: { es: "Menú de la fila del proyecto ▸ Resume Conversation… y elige.", en: "Project row menu ▸ Resume Conversation… and pick one." } },
      { t: { es: "Menú de la fila de un agente ▸ Fork Conversation. Por debajo, jmux ejecuta:", en: "An agent row's menu ▸ Fork Conversation. Underneath, jmux runs:" }, c: "claude --resume <id> --fork-session     # Claude\ncodex fork <thread-id>                 # Codex", plain: true },
    ] },
  { id: "search-privacy", g: "search", kind: "search",
    shot: { src: "shots/settings-search.webp", cls: "mid", alt: { es: "Ajustes ▸ Search", en: "Settings ▸ Search" } },
    r: { es: "privacidad del índice", en: "index privacy" },
    t: { es: "Tu índice, en tu Mac, con tus reglas.", en: "Your index, on your Mac, by your rules." },
    l: { es: "El índice es local y no sale de tu Mac. En Ajustes ▸ Search eliges hasta dónde pueden buscar tus agentes (su proyecto o todo) y qué carpetas quedan fuera; al sacar una, se borra del índice. Mientras se construye, jmux te dice «Indexing N of M», nunca «no results».",
         en: "The index is local and never leaves your Mac. In Settings ▸ Search you choose how far your agents may search (their project or everywhere) and which folders stay out; taking one out purges it from the index. While it builds, jmux tells you “Indexing N of M”, never “no results”." },
    keys: ["⌘ ,"],
    ex: [
      { t: { es: "Ajustes ▸ Search ▸ Add Folder… para dejar una carpeta fuera del índice.", en: "Settings ▸ Search ▸ Add Folder… to keep a folder out of the index." }, k: ["⌘ ,"] },
      { t: { es: "«Agents search: Their Project · Everywhere» decide lo que puede encontrar un agente. Tú, desde la ventana, siempre lo ves todo.", en: "“Agents search: Their Project · Everywhere” decides what an agent can find. You, from the window, always see everything." } },
    ] },

  /* ── 06 docs ── */
  { id: "files", g: "docs", kind: "doc",
    r: { es: "archivos", en: "files" },
    t: { es: "Los archivos del proyecto, al lado.", en: "The project's files, right beside you." },
    l: { es: "Un panel a la derecha con el árbol de archivos del proyecto. Tiene filtro, se maneja con el teclado y permite crear, renombrar, borrar, abrir en una terminal, mostrar en Finder y copiar la ruta, absoluta o relativa.",
         en: "A panel on the right with the project's file tree. It has a filter, works from the keyboard, and lets you create, rename, delete, open in a terminal, reveal in Finder and copy the path, absolute or relative." },
    keys: ["⌥ ⌘ B", "⌥ ⌘ 1"],
    shot: { src: "shots/files.webp", alt: { es: "El panel Files a la derecha", en: "The Files panel on the right" } },
    ex: [
      { t: { es: "Abre el panel y ve a Files:", en: "Open the panel and go to Files:" }, k: ["⌥ ⌘ B", "⌥ ⌘ 1"] },
      { t: { es: "Escribe para filtrar y pulsa ↩ para abrir el archivo en una pestaña. Clic derecho para el resto de acciones.", en: "Type to filter, ↩ to open the file in a tab. Right-click for everything else." } },
    ] },
  { id: "documents", g: "docs", kind: "doc",
    r: { es: "documentos", en: "documents" },
    t: { es: "Markdown y código en pestañas, junto a tus terminales.", en: "Markdown and code in tabs, beside your terminals." },
    l: { es: "Un Markdown se abre en modo <b>Read</b>, <b>Edit</b> (WYSIWYG) o <b>Source</b>, con el frontmatter YAML como una tarjeta de propiedades que se puede editar. El resto de archivos de texto se abre en CodeMirror. Si otro programa, por ejemplo tu agente, cambia el archivo, jmux te ofrece recargarlo.",
         en: "Markdown opens in <b>Read</b>, <b>Edit</b> (WYSIWYG) or <b>Source</b> mode, with YAML frontmatter as an editable properties card. Every other text file opens in CodeMirror. If another program, say your agent, changes the file, jmux offers to reload it." },
    keys: ["⌘ S"],
    shot: { src: "shots/doc.webp", alt: { es: "refunds.md en modo Read junto al Claude que lo discute", en: "refunds.md in Read mode beside the Claude discussing it" },
            second: { src: "shots/doc-changed.webp", alt: { es: "«refunds.md» ha cambiado en disco: Reload · Ignore", en: "“refunds.md” has changed on disk: Reload · Ignore" } } },
    ex: [
      { t: { es: "Abre un archivo desde Files, o ⌘-clic en una ruta que haya impreso una sesión.", en: "Open a file from Files, or ⌘-click a path a session printed." } },
      { t: { es: "Cambia de modo con Read · Edit · Source y guarda:", en: "Switch between Read · Edit · Source and save:" }, k: ["⌘ S"] },
      { t: { es: "Si tu agente edita el archivo mientras lo tienes abierto, aparece una barra con Reload e Ignore. Si lo borra, jmux te ofrece volver a crearlo. Un archivo de solo lectura lleva un candado, y uno de más de 10 MB se abre recortado y en solo lectura.", en: "If your agent edits the file while it's open, a bar with Reload and Ignore appears. If it deletes it, jmux offers to recreate it. A read-only file carries a lock, and one over 10 MB opens truncated and read-only." } },
    ] },
  { id: "cmdclick", g: "docs", kind: "doc",
    r: { es: "⌘-clic en rutas", en: "⌘-click paths" },
    t: { es: "⌘-clic en una ruta y se abre.", en: "⌘-click a path and it opens." },
    l: { es: "Cualquier ruta que imprima una sesión, sea un error, un diff o un mensaje de tu agente, se abre en una pestaña con ⌘-clic. El «:42» del final se ignora.",
         en: "Any path a session prints, in an error, a diff or your agent's message, opens in a tab with ⌘-click. A trailing “:42” is ignored." },
    keys: ["⌘ click"],
    ex: [
      { t: { es: "Tu agente escribe <code>payments/refunds.py:23</code>. ⌘-clic sobre ello y el archivo se abre al lado.", en: "Your agent writes <code>payments/refunds.py:23</code>. ⌘-click it and the file opens alongside." }, k: ["⌘ click"] },
    ] },
  { id: "memory", g: "docs", kind: "claude",
    r: { es: "memoria del agente", en: "agent memory" },
    t: { es: "Lo que recuerda tu agente, a la vista.", en: "What your agent remembers, in plain sight." },
    l: { es: "La sección Memory muestra, para el agente que tienes enfocado, sus <b>memorias</b> (para crearlas o borrarlas), sus <b>instrucciones</b> (CLAUDE.md, reglas, @imports o AGENTS.md, y por qué Claude no carga alguna) y sus <b>skills</b>, marcadas como usadas u ofrecidas.",
         en: "The Memory section shows, for the focused agent, its <b>memories</b> (to create or delete), its <b>instructions</b> (CLAUDE.md, rules, @imports or AGENTS.md, and why Claude isn't loading one) and its <b>skills</b>, marked used or offered." },
    keys: ["⌥ ⌘ 2"],
    shot: { src: "shots/memory.webp", cls: "narrow", alt: { es: "Memory: dos memorias del proyecto, instrucciones y skills", en: "Memory: two project memories, instructions and skills" } },
    ex: [
      { t: { es: "Enfoca una sesión de agente y abre Memory:", en: "Focus an agent session and open Memory:" }, k: ["⌥ ⌘ 2"] },
      { t: { es: "Abre una memoria como documento, crea una con «New Memory» o bórrala. Así ves qué te va a repetir el agente la próxima vez.", en: "Open a memory as a document, make one with “New Memory”, or delete it. That's how you see what the agent will bring up next time." } },
    ] },

  /* ── 07 terminal ── */
  { id: "find", g: "terminal", kind: "term",
    shot: { src: "shots/find.webp", cls: "mid", alt: { es: "644 coincidencias, marcadas también en la barra de scroll", en: "644 matches, ticked on the scrollbar too" } },
    r: { es: "buscar en el panel", en: "find in pane" },
    t: { es: "Buscar en el scrollback, de verdad.", en: "Find in the scrollback, for real." },
    l: { es: "⌘F busca en el scrollback del panel (hasta 10 000 líneas) y marca las coincidencias en la barra de scroll. En programas a pantalla completa (TUIs) solo puede buscar en la pantalla, y te dice «Not on screen» si ahí no está.",
         en: "⌘F searches the pane's scrollback (up to 10,000 lines) and ticks the matches on the scrollbar. In full-screen programs (TUIs) it can only search the screen, and says “Not on screen” when nothing is there." },
    keys: ["⌘ F", "⌘ G", "⌥ ⌘ G", "⌘ E"],
    ex: [
      { t: { es: "Busca, siguiente, anterior, y buscar la selección:", en: "Find, next, previous, and use the selection:" }, k: ["⌘ F", "⌘ G", "⌥ ⌘ G", "⌘ E"] },
      { t: { es: "Cierra la barra:", en: "Hide the bar:" }, k: ["⌥ ⇧ ⌘ F"] },
    ] },
  { id: "clear", g: "terminal", kind: "term",
    r: { es: "limpiar", en: "clear" },
    t: { es: "Limpiar, y que siga limpio.", en: "Clear, and stay clear." },
    l: { es: "⌘K limpia la pantalla <b>y</b> el scrollback que guarda el daemon, así que al reconectar no vuelve. ⌘⇧K limpia la pantalla pero conserva el scrollback. Un agente también puede hacerlo desde la CLI.",
         en: "⌘K clears the screen <b>and</b> the scrollback the daemon keeps, so a reattach doesn't bring it back. ⌘⇧K clears the screen but keeps the scrollback. An agent can do it from the CLI too." },
    keys: ["⌘ K", "⌘ ⇧ K"], cli: ["jmux clear"],
    ex: [
      { t: { es: "Desde la CLI, a otra sesión:", en: "From the CLI, on another session:" }, c: "jmux clear 1\njmux clear 1 --keep-scrollback" },
    ] },
  { id: "paste-image", g: "terminal", kind: "claude",
    r: { es: "pegar imágenes", en: "paste images" },
    t: { es: "Pega una imagen y el agente la ve.", en: "Paste an image and your agent sees it." },
    l: { es: "⌘V con una imagen en el portapapeles la guarda en <code>~/.jmux/pasted/</code> y escribe su ruta en la sesión, así Claude o Codex pueden leerla. Las imágenes guardadas se borran pasada una semana.",
         en: "⌘V with an image on the clipboard saves it under <code>~/.jmux/pasted/</code> and types its path into the session, so Claude or Codex can read it. Saved images are swept after a week." },
    keys: ["⌘ V"],
    ex: [
      { t: { es: "Haz una captura al portapapeles y pégala en el prompt de tu agente:", en: "Take a screenshot to the clipboard and paste it into your agent's prompt:" }, k: ["⌃ ⇧ ⌘ 4", "⌘ V"] },
      { t: { es: "En la sesión aparece la ruta completa, algo como <code>/Users/ada/.jmux/pasted/20260929-142233-517.png</code>, listo para que el agente lo abra.", en: "The session gets the full path, something like <code>/Users/ada/.jmux/pasted/20260929-142233-517.png</code>, ready for the agent to open." } },
    ] },
  { id: "clean", g: "terminal", kind: "term",
    band: 83.6,
    r: { es: "limpiar portapapeles", en: "clipboard clean" },
    t: { es: "Copia de la terminal y pega texto limpio.", en: "Copy from the terminal, paste clean text." },
    l: { es: "El texto que copias de una terminal viene con márgenes, marcas, marcos, números de línea y cortes de línea a mitad de frase. ⌥⌘V lo convierte en prosa normal. Si no te gusta el resultado, se deshace desde la paleta.",
         en: "Text copied from a terminal comes with margins, markers, frames, gutters and line breaks mid-sentence. ⌥⌘V turns it back into plain prose. Don't like the result? Undo it from the palette." },
    keys: ["⌥ ⌘ V"],
    ex: [
      { t: { es: "Copia la respuesta de tu agente y límpiala:", en: "Copy your agent's answer and clean it:" }, k: ["⌘ C", "⌥ ⌘ V"] },
      { t: { es: "Pégala donde quieras. ¿No era eso? «Undo Clipboard Clean» en la paleta.", en: "Paste it anywhere. Not what you wanted? “Undo Clipboard Clean” in the palette." }, k: ["⌘ P"] },
    ] },
  { id: "keyboard", g: "terminal", kind: "term",
    shot: { src: "shots/settings-keyboard.webp", cls: "mid", alt: { es: "Ajustes ▸ Keyboard: Option por lado y todos los atajos", en: "Settings ▸ Keyboard: Option per side and every shortcut" } },
    r: { es: "teclas Option", en: "Option keys" },
    t: { es: "Option a tu manera, por cada lado.", en: "Option your way, per side." },
    l: { es: "Cada tecla ⌥ puede hacer de Meta o escribir caracteres. Por defecto, la izquierda es Meta (para ⌥B y ⌥F en la shell) y la derecha escribe caracteres (para @, #, ñ…). Las sesiones anuncian UTF-8, color verdadero y <code>TERM_PROGRAM=jmux</code>.",
         en: "Each ⌥ key can act as Meta or type characters. By default the left one is Meta (for ⌥B and ⌥F in the shell) and the right one types characters (for @, #, ñ…). Sessions advertise UTF-8, true colour and <code>TERM_PROGRAM=jmux</code>." },
    keys: ["⌘ ,"],
    ex: [
      { t: { es: "Ajustes ▸ Keyboard ▸ Left/Right Option: Meta o Characters.", en: "Settings ▸ Keyboard ▸ Left/Right Option: Meta or Characters." }, k: ["⌘ ,"] },
      { t: { es: "Compruébalo en una sesión:", en: "Check it in a session:" }, c: "echo $TERM_PROGRAM $COLORTERM", o: "jmux truecolor" },
    ] },
  { id: "theme", g: "terminal", kind: "term",
    r: { es: "tema claro / oscuro", en: "light / dark" },
    t: { es: "Claro u oscuro, sin costuras.", en: "Light or dark, seamless." },
    l: { es: "System, Light o Dark: la ventana entera cambia a la vez, incluidas las paletas de todos los terminales, sin recargar nada. Cambia el tema de esta página (arriba a la derecha) y mira cómo cambia también la captura de la cabecera.",
         en: "System, Light or Dark: the whole window turns at once, every terminal palette included, with nothing reloaded. Switch this page's theme (top right) and watch the header capture turn too." },
    shot: { src: "shots/hero-light.webp", alt: { es: "La misma escena en claro", en: "The same scene in light" } },
    ex: [
      { t: { es: "Ajustes ▸ Appearance: System · Light · Dark.", en: "Settings ▸ Appearance: System · Light · Dark." }, k: ["⌘ ,"] },
    ] },

  /* ── 08 mac ── */
  { id: "awake", g: "mac", kind: "mac",
    band: 34.7,
    r: { es: "mantener despierto", en: "keep awake" },
    t: { es: "Tu Mac no se duerme mientras tus agentes trabajan.", en: "Your Mac stays awake while your agents work." },
    l: { es: "Mientras un Claude o un Codex trabaja, jmux mantiene el Mac despierto con una aserción de energía propia y sin usar <code>caffeinate</code>. Si quieres, también deja la pantalla encendida. Con la tapa cerrada el Mac se duerme igualmente.",
         en: "While a Claude or a Codex works, jmux keeps the Mac awake with a power assertion of its own, without <code>caffeinate</code>. If you want, it keeps the screen lit too. With the lid closed, the Mac still sleeps." },
    cli: ["jmux awake", "pmset -g assertions"],
    ex: [
      { t: { es: "Qué lo mantiene despierto ahora:", en: "What's holding it awake right now:" }, c: "jmux awake", o: "awake: on, keeping the Mac awake\n  6: payments-api 2 — with Remote Control\n  8: infra 2 — with Remote Control\npmset: jmux - 2 with Remote Control\nswitches: remote-control on, screen-lit off" },
      { t: { es: "Enciéndelo, apágalo o ajusta los interruptores:", en: "Turn it on, off, or set the switches:" }, c: "jmux awake --off\njmux awake --on --screen-lit on\njmux awake --remote-control off" },
      { t: { es: "O pulsa el control de la barra de título, que cicla: apagado → despierto → despierto con la pantalla encendida.", en: "Or click the title-band control, which cycles off → awake → awake with the screen lit." } },
    ] },
  { id: "usage", g: "mac", kind: "mac",
    r: { es: "medidor de uso", en: "usage meter" },
    t: { es: "Cuánto te queda de suscripción, de un vistazo.", en: "How much subscription you have left, at a glance." },
    l: { es: "Un medidor en la barra de título muestra el uso semanal de Claude, de Codex o de los dos, y un carril de color (verde, azul, ámbar o rojo) según vas de ritmo para llegar al final de la semana. Viene apagado hasta que lo actives.",
         en: "A meter in the title band shows this week's usage for Claude, Codex or both, with a coloured lane (green, blue, amber or red) for how your pace is tracking against the end of the week. It stays off until you turn it on." },
    keys: ["⌘ ,"],
    shot: { src: "shots/usage.webp", cls: "strip", alt: { es: "67 % usado, 7 % por debajo del ritmo", en: "67% used, 7% under pace" } },
    ex: [
      { t: { es: "Ajustes ▸ Usage: activa Claude, Codex o los dos.", en: "Settings ▸ Usage: turn on Claude, Codex or both." }, k: ["⌘ ,"] },
      { t: { es: "Pulsa el medidor para cambiar de agente.", en: "Click the meter to switch agents." } },
    ] },
];

/* Pins on the hero capture: where, which feature, what it says. */
const PINS = [
  { x: 11.5, y: 14.9, f: "spawn", cls: "left", t: { es: "Dos hijas Codex anidadas bajo su Claude", en: "Two Codex children nested under their Claude" } },
  { x: 14.2, y: 8.4, f: "facts", t: { es: "Hijas, contexto, esfuerzo y estado en la fila", en: "Children, context, effort and state on the row" } },
  { x: 3.5, y: 92.9, f: "session-tree", cls: "left flip", t: { es: "Working · Blocked · Unseen, que además filtran", en: "Working · Blocked · Unseen, which also filter" } },
  { x: 52.3, y: 5.4, f: "splits", t: { es: "Pestañas y paneles a cualquier profundidad", en: "Tabs and panes to any depth" } },
  { x: 40, y: 30.8, f: "state", t: { es: "Claude trabajando: jmux lo sabe por sus hooks", en: "Claude working: jmux knows from its hooks" } },
  { x: 76.9, y: 18.5, f: "readwrite", cls: "right", t: { es: "Una sesión que un agente puede leer y en la que puede escribir", en: "A session an agent can read and type into" } },
  { x: 90.8, y: 73.9, f: "persist", cls: "right flip", t: { es: "Un servidor que sobrevive a cerrar la app", en: "A server that survives quitting the app" } },
  { x: 88.5, y: 1.6, f: "upgrade", cls: "right", t: { es: "La versión: pulsa y se actualiza sin cortar nada", en: "The version: click it and it updates without a cut" } },
];

const PATHS = [
  { i: "03 + 04", groups: ["agents", "team"], t: { es: "Llevo varios agentes a la vez", en: "I run several agents at once" }, l: { es: "Estados, hijas, mensajes y quién te espera.", en: "States, children, messages and who's waiting on you." } },
  { i: "01", groups: ["survive"], t: { es: "No quiero perder nada nunca", en: "I never want to lose anything" }, l: { es: "Sesiones que sobreviven a cerrar, colgarse y actualizar.", en: "Sessions that survive quitting, crashing and updating." } },
  { i: "02 + 07", groups: ["workspace", "terminal"], t: { es: "Vengo de iTerm, Ghostty o tmux", en: "I'm coming from iTerm, Ghostty or tmux" }, l: { es: "Paneles, pestañas, atajos y el oficio de terminal.", en: "Panes, tabs, shortcuts and terminal craft." } },
  { i: "05 + 06", groups: ["search", "docs"], t: { es: "Busco algo que se dijo hace semanas", en: "I'm after something said weeks ago" }, l: { es: "Búsqueda, conversaciones, documentos y memoria.", en: "Search, conversations, documents and memory." } },
];

const HONEST = [
  { tag: { es: "por diseño", en: "by design" }, t: { es: "Lo que no es", en: "What it isn't" }, items: {
    es: ["No es un chat: tus agentes corren en su propia interfaz de terminal (TUI), sin capas por encima.", "Solo Claude Code y Codex. No hay un tercer agente.", "No es un orquestador: el plan lo lleva tu agente, no jmux.", "Solo macOS 14+ en Apple Silicon."],
    en: ["Not a chat app: your agents run in their own terminal interface (TUI), with nothing layered over it.", "Only Claude Code and Codex. There's no third agent.", "Not an orchestrator: your agent holds the plan, not jmux.", "macOS 14+ on Apple Silicon only."] } },
  { tag: { es: "todavía no", en: "not yet" }, t: { es: "En el backlog", en: "On the backlog" }, items: {
    es: ["Sesiones remotas por SSH.", "Scrollback de shells que sobreviva a un reinicio del Mac.", "Arrastrar archivos o imágenes sobre un panel (⌘V con imagen sí funciona).", "Integrar el worktree de una hija desde la ventana."],
    en: ["Remote sessions over SSH.", "Shell scrollback that survives a Mac restart.", "Dragging files or images onto a pane (⌘V with an image does work).", "Merging a child's worktree back from the window."] } },
  { tag: { es: "a saber", en: "worth knowing" }, t: { es: "Letra pequeña", en: "Fine print" }, items: {
    es: ["Las releases no están notarizadas. Un zip descargado con el navegador necesita quitarle la cuarentena una vez.", "Con un documento abierto, la ventana usa más memoria de lo que dice el objetivo, que solo cuenta terminales.", "Los diagramas Mermaid no se dibujan en esta versión: se muestran como código."],
    en: ["Releases aren't notarized. A zip downloaded in a browser needs its quarantine removed once.", "With a document open, the window uses more memory than the target, which counts terminals only.", "Mermaid diagrams aren't drawn in this build: they show as code."] } },
];

const INSTALL = [
  { t: { es: "Entra en GitHub con <code>gh</code> (una vez por Mac, con el scope <code>repo</code>):", en: "Log in to GitHub with <code>gh</code> (once per Mac, with the <code>repo</code> scope):" }, c: "gh auth login" },
  { t: { es: "Descarga la última release y ponla en Aplicaciones (<code>ditto</code> conserva la firma):", en: "Download the latest release and put it in Applications (<code>ditto</code> keeps the signature):" }, c: "gh release download --repo javimoya/jmux --pattern 'jmux-*-macos-arm64.zip'\nditto -x -k jmux-*-macos-arm64.zip /Applications" },
  { t: { es: "Pon la CLI en tu PATH:", en: "Put the CLI on your PATH:" }, c: "sudo mkdir -p /usr/local/bin\nsudo ln -sfn /Applications/jmux.app/Contents/MacOS/jmux-cli /usr/local/bin/jmux" },
  { t: { es: "Abre jmux y acepta el aviso que ofrece instalar los hooks, o hazlo tú:", en: "Open jmux and accept the banner that offers the hooks, or do it yourself:" }, c: "open -a jmux\njmux claude install-hooks && jmux codex install-hooks" },
  { t: { es: "Recomendado: Ajustes del Sistema ▸ Privacidad y seguridad ▸ Acceso total al disco ▸ añade <code>jmux.app</code>, para que las herramientas de tus agentes no te pidan permiso por cada carpeta. <b>Desde el código fuente</b>, <code>make install</code> lo hace todo, daemon de launchd incluido.", en: "Recommended: System Settings ▸ Privacy & Security ▸ Full Disk Access ▸ add <code>jmux.app</code>, so your agents' tools don't ask permission folder by folder. <b>From source</b>, <code>make install</code> does all of it, launchd daemon included." } },
];

/* Every capture's pixel size, so the page holds its place while one loads. */
const DIMS = { "codex": [2000, 1249], "doc-changed": [1203, 909], "doc": [2000, 1249], "files": [2000, 1249], "hero-dark": [2000, 1249], "hero-light": [2000, 1249], "memory": [560, 1000], "putaway": [520, 700], "tell-crop": [1343, 1289], "tell": [2000, 1249], "tree": [520, 780], "usage": [1100, 62], "band": [701, 60], "names": [1343, 271], "search": [1601, 921], "conversation": [1343, 1113], "palette": [1116, 735], "confirm": [882, 740], "hover": [543, 706], "find": [1063, 875], "project-menu": [588, 638], "agent-menu": [769, 412], "chords": [2000, 1249], "settings-keyboard": [1100, 888], "settings-search": [1100, 888] };
const dims = (src) => { const d = DIMS[src.replace(/^shots\/|\.webp$/g, "")]; return d ? `width="${d[0]}" height="${d[1]}"` : ""; };

/* ── helpers ──────────────────────────────────────────────── */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
let LANG = document.documentElement.lang === "en" ? "en" : "es";
const tr = (o) => (o && typeof o === "object" ? (o[LANG] ?? o.es) : o ?? "");
const t = (k) => tr(T[k]);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const ICONS = {
  folder: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M1.5 4.5a1 1 0 0 1 1-1h3.2l1.3 1.4h6.5a1 1 0 0 1 1 1v6.6a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z"/></svg>',
  term: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="1.5" y="2.5" width="13" height="11" rx="1.6"/><path d="M4.3 6.2l2 1.8-2 1.8M8 10h3.5"/></svg>',
  claude: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.2l1.1 4.1 3.6-2.3-2.3 3.6 4.1 1.1-4.1 1.1 2.3 3.6-3.6-2.3L8 14.8l-1.1-4.1-3.6 2.3 2.3-3.6L1.2 8l4.1-1.1L3 3.3l3.6 2.3z"/></svg>',
  codex: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M8 1.8c2.3 0 3.3 1.2 3.6 2.5 1.6.3 2.8 1.6 2.6 3.4-.2 1.5-1.3 2.4-2.4 2.6-.4 1.9-1.9 3.1-3.8 3.1S4.4 12.2 4 10.3C2.8 10.1 1.7 9.2 1.6 7.7 1.4 5.9 2.7 4.6 4.3 4.3 4.7 3 5.7 1.8 8 1.8z"/><path d="M6 7.2l1.4 1.2L6 9.6M8.6 9.7h1.6"/></svg>',
  doc: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M3.5 1.5h6l3 3v10h-9z"/><path d="M9.5 1.5v3h3M5.5 8h5M5.5 10.5h5"/></svg>',
  search: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="7" cy="7" r="4.6"/><path d="M10.4 10.4l3.6 3.6"/></svg>',
  mac: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="1.5" y="2.5" width="13" height="8.5" rx="1.2"/><path d="M5.5 13.5h5"/></svg>',
  chev: '<svg class="chev" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3.5L10.5 8 6 12.5"/></svg>',
};

function keycaps(chord) {
  return chord.split(" ").map((k) => (k === "/" || k === "…" ? `<span class="plus">${esc(k)}</span>` : `<kbd>${esc(k)}</kbd>`)).join("");
}

/* ── render ───────────────────────────────────────────────── */
function renderStatic() {
  $$("[data-i]").forEach((el) => (el.textContent = t(el.dataset.i)));
  $$("[data-i-html]").forEach((el) => (el.innerHTML = t(el.dataset.iHtml)));
  $$("[data-i-alt]").forEach((el) => (el.alt = t(el.dataset.iAlt)));
  $("#q").placeholder = t("q.placeholder");
  $$(".seg [data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === LANG)));
  $$(".seg [data-themepref]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.themepref === (document.documentElement.dataset.themePref || "system"))));
  document.title = LANG === "es" ? "jmux — el terminal donde tus agentes no se pierden" : "jmux — the terminal where your agents never get lost";
}

function renderPins() {
  const w = $("#hero-window");
  $$(".pin", w).forEach((p) => p.remove());
  PINS.forEach((p, i) => {
    const f = F.find((x) => x.id === p.f);
    const b = document.createElement("a");
    b.className = "pin " + (p.cls || "");
    b.href = "#" + p.f;
    b.style.left = p.x + "%";
    b.style.top = p.y + "%";
    b.innerHTML = `${i + 1}<span class="tip"><b>${esc(tr(p.t))}</b><span>→ ${esc(tr(f.t))}</span></span>`;
    w.appendChild(b);
  });
}

function renderPaths() {
  $("#paths").innerHTML = PATHS.map((p, i) => `<button class="path" data-path="${i}" aria-pressed="false"><i>${p.i}</i><b>${esc(tr(p.t))}</b><span>${esc(tr(p.l))}</span></button>`).join("");
}

function stepHTML(s) {
  let h = "";
  if (s.t) h += `<p>${tr(s.t)}</p>`;
  if (s.k) h += `<div class="keys">${s.k.map(keycaps).join('<span class="plus">·</span>')}</div>`;
  if (s.c) h += `<div class="cmd${s.plain ? " plain" : ""}"><pre>${esc(s.c)}</pre><button class="copy">${t("copy")}</button></div>`;
  if (s.o) h += `<pre class="out mono">${esc(s.o)}</pre>`;
  return `<li>${h}</li>`;
}

function termHTML(term) {
  const body = term.body.map(([k, s]) => (k === "p" ? `<span class="p">$ </span>${esc(s)}` : `<span class="${k}">${esc(s)}</span>`)).join("\n");
  return `<div class="term"><div class="term-bar"><i></i><i></i><i></i><span>${esc(term.title)}</span></div><pre>${body}</pre></div>`;
}

function shotHTML(shot) {
  const one = (s) => `<div class="frame ${s.cls || ""}" tabindex="0" role="button" data-zoom="${s.src}" data-alt="${esc(tr(s.alt))}"><img src="${s.src}" ${dims(s.src)} alt="${esc(tr(s.alt))}" loading="lazy" decoding="async"></div>`;
  if (shot.second) {
    return `<figure class="duo"><div>${one(shot)}<figcaption>${esc(tr(shot.alt))}</figcaption></div><div>${one(shot.second)}<figcaption>${esc(tr(shot.second.alt))}</figcaption></div></figure>`;
  }
  return `<figure>${one(shot)}<figcaption>${esc(tr(shot.alt))}</figcaption></figure>`;
}

const BAND_ALT = { es: "La barra de título: ⌘J, Remote Control, confirmar hijas, despierto · versión · historial · portapapeles · panel", en: "The title band: ⌘J, Remote Control, confirm children, awake · version · trail · clipboard · panel" };
function bandHTML(f) {
  return `<figure><div class="frame strip tband" tabindex="0" role="button" data-zoom="shots/band.webp" data-alt="${esc(tr(BAND_ALT))}"><img src="shots/band.webp" ${dims("shots/band.webp")} alt="${esc(tr(BAND_ALT))}" loading="lazy" decoding="async"><span class="ring" style="left:${f.band}%"></span></div><figcaption>${esc(tr(BAND_ALT))}</figcaption></figure>`;
}

function featureHTML(f) {
  const g = GROUPS.find((x) => x.id === f.g);
  const how = [...(f.keys || []).map((k) => `<li>${keycaps(k)}</li>`), ...(f.cli || []).map((c) => `<li><code>${esc(c)}</code></li>`)].join("");
  const media = (f.shot ? shotHTML(f.shot) : f.term ? termHTML(f.term) : "") + (f.band != null ? bandHTML(f) : "");
  const steps = f.ex || [];
  return `<section class="feat" id="${f.id}" data-g="${f.g}">
    <div class="feat-top"><div>
      <p class="kicker mono"><span>// ${esc(tr(f.r))}</span>${f.isNew ? `<span class="badge">${LANG === "es" ? "nuevo" : "new"} · ${f.isNew}</span>` : ""}</p>
      <h3>${esc(tr(f.t))}</h3>
    </div><button class="anchor" data-link="${f.id}">${t("link.copy")}</button></div>
    <p class="lede">${tr(f.l)}</p>
    ${how ? `<ul class="how">${how}</ul>` : ""}
    ${media}
    ${steps.length ? `<details class="ex" data-ex="${f.id}"><summary>${ICONS.chev}${t("ex.summary")}<span class="n">${steps.length} ${t("ex.steps")}</span></summary><ol class="steps">${steps.map(stepHTML).join("")}</ol></details>` : ""}
  </section>`;
}

function renderFeatures() {
  const open = new Set($$("details.ex[open]").map((d) => d.dataset.ex));
  $("#features").innerHTML =
    GROUPS.map((g) => `<header class="group-head" id="g-${g.id}" data-g="${g.id}"><p class="kicker mono">${g.kicker}</p><h2>${esc(tr(g.t))}</h2><p>${esc(tr(g.l))}</p></header>` + F.filter((f) => f.g === g.id).map(featureHTML).join("")).join("") +
    `<p class="empty" id="empty">${t("empty")}</p>`;
  open.forEach((id) => { const d = $(`details.ex[data-ex="${id}"]`); if (d) d.open = true; });
  // The text a filter looks at: everything a person could type to find it, in this language.
  F.forEach((f) => {
    f.hay = [tr(f.t), tr(f.r), tr(f.l), ...(f.keys || []), ...(f.keys || []).map((k) => k.replace(/ /g, "")), ...(f.cli || []), f.id, tr(GROUPS.find((g) => g.id === f.g).t), ...(f.ex || []).flatMap((s) => [tr(s.t), s.c || "", ...(s.k || []), ...(s.k || []).map((k) => k.replace(/ /g, ""))])].join(" ").toLowerCase().replace(/<[^>]+>/g, "");
  });
}

function renderTree() {
  $("#tree").innerHTML = GROUPS.map((g) => `<div class="grp" data-g="${g.id}"><a class="proj" href="#g-${g.id}">${ICONS.folder}<span>${esc(tr(g.t))}</span></a>` +
    F.filter((f) => f.g === g.id).map((f) => `<a class="row" href="#${f.id}" data-f="${f.id}"><span class="k-${f.kind}">${ICONS[f.kind]}</span><span class="label">${esc(tr(f.r))}</span><span class="dot"></span></a>`).join("") + `</div>`).join("");
}

function renderHonest() {
  $("#honest-cols").innerHTML = HONEST.map((c) => `<div class="card"><span class="tag">${esc(tr(c.tag))}</span><h4>${esc(tr(c.t))}</h4><ul>${tr(c.items).map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("");
  $("#install-body").innerHTML = `<ol class="steps">${INSTALL.map(stepHTML).join("")}</ol>`;
}

function renderAll() {
  renderStatic(); renderPins(); renderPaths(); renderFeatures(); renderTree(); renderHonest();
  applyFilter(); paintStates();
}

/* ── state: seen, on screen, open — the rail's dots ───────── */
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
};
const seen = new Set((() => { try { const v = JSON.parse(store.get("jmux.site.seen") || "[]"); return Array.isArray(v) ? v : []; } catch { return []; } })());
let onScreen = new Set();
let filterState = null; // "working" | "open" | "unseen" | null
let pathGroups = null;

function paintStates() {
  const openIds = new Set($$("details.ex[open]").map((d) => d.dataset.ex));
  $$("#tree a.row").forEach((a) => {
    const id = a.dataset.f, dot = $(".dot", a);
    dot.className = "dot " + (onScreen.has(id) ? "working" : openIds.has(id) ? "open" : seen.has(id) ? "" : "unseen");
    a.classList.toggle("current", onScreen.has(id));
  });
  $("#n-new").textContent = F.filter((f) => f.isNew).length;
  $("#n-open").textContent = openIds.size;
  $("#n-unseen").textContent = F.filter((f) => !seen.has(f.id)).length;
  $$(".counter").forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.filter === filterState)));
}

let io;
function watch() {
  io && io.disconnect();
  io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const id = e.target.id;
      if (e.isIntersecting) { onScreen.add(id); if (!seen.has(id)) { seen.add(id); store.set("jmux.site.seen", JSON.stringify([...seen])); } }
      else onScreen.delete(id);
    });
    // Keep the current row in view inside the rail.
    const cur = $("#tree a.row.current");
    paintStates();
    const now = $("#tree a.row.current");
    if (now && now !== cur) {
      const tree = $("#tree"), r = now.getBoundingClientRect(), tr_ = tree.getBoundingClientRect();
      if (r.top < tr_.top || r.bottom > tr_.bottom) tree.scrollTop += r.top - tr_.top - tr_.height / 2;
    }
  }, { rootMargin: "-38% 0px -52% 0px" });
  $$(".feat").forEach((s) => io.observe(s));
}

/* ── filtering: text, path, counters ──────────────────────── */
function applyFilter() {
  const q = $("#q").value.trim().toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);
  const openIds = new Set($$("details.ex[open]").map((d) => d.dataset.ex));
  let shown = 0;
  F.forEach((f) => {
    let ok = terms.every((w) => f.hay.includes(w));
    if (pathGroups) ok = ok && pathGroups.includes(f.g);
    if (filterState === "new") ok = ok && !!f.isNew;
    if (filterState === "open") ok = ok && openIds.has(f.id);
    if (filterState === "unseen") ok = ok && !seen.has(f.id);
    $("#" + f.id).classList.toggle("hidden", !ok);
    $(`#tree a.row[data-f="${f.id}"]`).classList.toggle("hidden", !ok);
    if (ok) shown++;
  });
  GROUPS.forEach((g) => {
    const any = F.some((f) => f.g === g.id && !$("#" + f.id).classList.contains("hidden"));
    $("#g-" + g.id).classList.toggle("hidden", !any);
    $(`#tree .grp[data-g="${g.id}"]`).classList.toggle("hidden", !any);
  });
  $("#empty").style.display = shown ? "none" : "block";
  $("#count").textContent = shown === F.length ? t("count.all").replace("{n}", F.length) : t("count.some").replace("{n}", shown).replace("{t}", F.length);
}

/* ── behaviour ─────────────────────────────────────────────── */
function toast(msg) {
  const el = $("#toast"); el.textContent = msg; el.classList.add("on");
  clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove("on"), 1400);
}

async function copyText(text, btn) {
  try { await navigator.clipboard.writeText(text); } catch {
    const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove();
  }
  if (btn) { btn.textContent = t("copied"); btn.classList.add("ok"); setTimeout(() => { btn.textContent = t("copy"); btn.classList.remove("ok"); }, 1300); }
}

function setTheme(pref) {
  store.set("jmux.site.theme", pref);
  const dark = pref === "dark" || (pref === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  document.documentElement.dataset.themePref = pref;
  const img = $("#hero-img"); img.src = dark ? img.dataset.dark : img.dataset.light;
  renderStatic();
}

function setLang(l) {
  // Re-rendering rebuilds every section: keep the one being read where it is.
  const { cur } = currentFeature();
  const before = cur ? $("#" + cur.id).getBoundingClientRect().top : 0;
  LANG = l; document.documentElement.lang = l; store.set("jmux.site.lang", l);
  renderAll(); watch();
  if (cur) scrollBy(0, $("#" + cur.id).getBoundingClientRect().top - before);
}

function openLightbox(src, alt) {
  const lb = $("#lightbox"); $("img", lb).src = src; $("img", lb).alt = alt; $("p", lb).textContent = alt + " · " + t("zoom"); lb.classList.add("on");
}

function currentFeature() {
  const vis = F.filter((f) => !$("#" + f.id).classList.contains("hidden"));
  const mid = innerHeight * 0.4;
  let best = vis[0], bestD = Infinity;
  vis.forEach((f) => { const d = Math.abs($("#" + f.id).getBoundingClientRect().top - mid); if (d < bestD) { bestD = d; best = f; } });
  return { vis, cur: best };
}

function step(dir) {
  const { vis, cur } = currentFeature();
  if (!cur) return;
  const i = vis.indexOf(cur);
  const top = $("#" + cur.id).getBoundingClientRect().top;
  // "next" from a section whose top is still below the reading line means that section itself.
  let j = dir > 0 ? (top > innerHeight * 0.45 ? i : i + 1) : (top < innerHeight * 0.3 ? i : i - 1);
  j = Math.max(0, Math.min(vis.length - 1, j));
  $("#" + vis[j].id).scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", "#" + vis[j].id);
}

const PAGE_KEYS = [
  ["/", { es: "Filtrar features", en: "Filter features" }],
  ["J / K", { es: "Feature siguiente / anterior (como ⌘J en jmux)", en: "Next / previous feature (like ⌘J in jmux)" }],
  ["E", { es: "Abrir o cerrar el ejemplo de la feature actual", en: "Open or close the current feature's example" }],
  ["L", { es: "Cambiar idioma", en: "Switch language" }],
  ["T", { es: "Cambiar tema", en: "Switch theme" }],
  ["Esc", { es: "Limpiar filtros / cerrar", en: "Clear filters / close" }],
  ["?", { es: "Esta ayuda", en: "This help" }],
];

let chordTimer = null;
function showChords(on) {
  $$(".chord").forEach((c) => c.remove());
  if (!on) return;
  $$("[data-chord]").forEach((el) => {
    const r = el.getBoundingClientRect(); if (!r.width) return;
    const c = document.createElement("span"); c.className = "chord"; c.textContent = el.dataset.chord;
    c.style.left = r.left + r.width / 2 + scrollX + "px"; c.style.top = r.top + scrollY + "px";
    document.body.appendChild(c);
  });
  const cur = currentFeature().cur;
  if (cur) {
    const r = $("#" + cur.id + " h3").getBoundingClientRect();
    [["J", -1], ["E", 0]].forEach(([k, o]) => {
      const c = document.createElement("span"); c.className = "chord"; c.textContent = k;
      c.style.left = r.left + 14 + (o + 1) * 30 + scrollX + "px"; c.style.top = r.top + scrollY + "px"; document.body.appendChild(c);
    });
  }
}

function bind() {
  document.addEventListener("click", (e) => {
    const el = e.target.closest("button, a, .frame, .lightbox");
    if (!el) return;
    if (el.matches(".lightbox")) { el.classList.remove("on"); return; }
    if (el.matches(".copy")) {
      const sel = el.dataset.copy;
      const text = sel ? $(sel).textContent : $("pre", el.closest(".cmd")).textContent;
      copyText(text, el); return;
    }
    if (el.matches("[data-lang]")) { setLang(el.dataset.lang); return; }
    if (el.matches("[data-themepref]")) { setTheme(el.dataset.themepref); return; }
    if (el.matches("[data-link]")) {
      const url = location.origin + location.pathname + "#" + el.dataset.link;
      copyText(url); history.replaceState(null, "", "#" + el.dataset.link); toast(t("link.copied")); return;
    }
    if (el.matches(".frame")) { openLightbox(el.dataset.zoom, el.dataset.alt); return; }
    if (el.matches(".path")) {
      const i = +el.dataset.path, on = el.getAttribute("aria-pressed") !== "true";
      $$(".path").forEach((p) => p.setAttribute("aria-pressed", "false"));
      el.setAttribute("aria-pressed", String(on));
      pathGroups = on ? PATHS[i].groups : null;
      applyFilter();
      $("#tour").scrollIntoView({ behavior: "smooth" }); return;
    }
    if (el.matches(".counter")) {
      filterState = filterState === el.dataset.filter ? null : el.dataset.filter;
      applyFilter(); paintStates();
      const top = $("#tour").getBoundingClientRect().top;
      if (top < 0) scrollTo({ top: scrollY + top - 64 });
      return;
    }
  });
  $("#q").addEventListener("input", () => {
    applyFilter();
    // A narrower list is read from its top: never leave the reader over a gap.
    const top = $("#tour").getBoundingClientRect().top;
    if (top < 0) scrollTo({ top: scrollY + top - 64 });
  });
  document.addEventListener("toggle", (e) => { if (e.target.matches("details.ex")) { paintStates(); if (filterState === "open") applyFilter(); } }, true);
  $("#keys-help").addEventListener("click", () => $("#keys-help").classList.remove("on"));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.matches(".frame")) { openLightbox(e.target.dataset.zoom, e.target.dataset.alt); return; }
    if ((e.key === "Meta" || e.key === "Control") && !chordTimer) chordTimer = setTimeout(() => showChords(true), 300);
    const typing = e.target.matches("input, textarea");
    if (e.key === "Escape") {
      $("#lightbox").classList.remove("on"); $("#keys-help").classList.remove("on");
      $("#q").value = ""; if (typing) e.target.blur();
      filterState = null; pathGroups = null; $$(".path").forEach((p) => p.setAttribute("aria-pressed", "false"));
      applyFilter(); paintStates(); return;
    }
    if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.toLowerCase();
    if (e.key === "/") { e.preventDefault(); $("#q").focus(); $("#q").select(); }
    else if (k === "j") step(1);
    else if (k === "k") step(-1);
    else if (k === "e") { const c = currentFeature().cur; const d = c && $(`details.ex[data-ex="${c.id}"]`); if (d) d.open = !d.open; }
    else if (k === "l") setLang(LANG === "es" ? "en" : "es");
    else if (k === "t") { const order = ["dark", "system", "light"]; const p = document.documentElement.dataset.themePref || "system"; setTheme(order[(order.indexOf(p) + 1) % 3]); }
    else if (e.key === "?") {
      $("#keys-table").innerHTML = PAGE_KEYS.map(([k, d]) => `<tr><td>${k.split(" / ").map((x) => `<kbd>${esc(x)}</kbd>`).join(" ")}</td><td>${esc(tr(d))}</td></tr>`).join("");
      $("#keys-help h4").textContent = t("keys.title"); $("#keys-help").classList.add("on");
    }
  });
  document.addEventListener("keyup", (e) => { if (e.key === "Meta" || e.key === "Control") { clearTimeout(chordTimer); chordTimer = null; showChords(false); } });
  addEventListener("blur", () => { clearTimeout(chordTimer); chordTimer = null; showChords(false); });
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { if ((document.documentElement.dataset.themePref || "system") === "system") setTheme("system"); });
}

/* ── boot ─────────────────────────────────────────────────── */
renderAll();
setTheme(document.documentElement.dataset.themePref || "system");
bind();
watch();
if (location.hash) { const el = document.getElementById(location.hash.slice(1)); if (el) setTimeout(() => el.scrollIntoView(), 60); }
