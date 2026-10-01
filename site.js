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
9: payments-api 3 [80x24] (cwd ${H}/payments-api, pid 75462, codex idle*, child of payments-api 2 (6))`]] },
    ex: [
      { t: { es: "Arranca algo largo en una sesión, por ejemplo un servidor:", en: "Start something long-running in a session, a server for instance:" }, c: "python3 -m http.server 8000" },
      { t: { es: "Cierra jmux del todo. La ventana se va y el servidor sigue:", en: "Quit jmux entirely. The window goes; the server doesn't:" }, k: ["⌘ Q"] },
      { t: { es: "Desde cualquier otro terminal, pregunta qué sigue vivo:", en: "From any other terminal, ask what's still alive:" }, c: "jmux ls", o: `1: dev server [50x22] (cwd ${H}/payments-api, pid 72721)\n6: payments-api 2 [57x47] (cwd ${H}/payments-api, pid 73631, claude idle)` },
      { t: { es: "Vuelve a abrir jmux: cada panel regresa a su sitio con su scrollback.", en: "Open jmux again: every pane comes back where it was, scrollback included." } },
    ] },
  { id: "reboot", g: "survive", kind: "claude",
    r: { es: "tras reiniciar", en: "after a reboot" },
    t: { es: "Después de reiniciar, cada agente sigue su conversación.", en: "After a reboot, every agent picks its conversation back up." },
    l: { es: "Si el Mac se reinicia, el layout vuelve entero. Cada Claude y cada Codex se relanza con su propia orden de reanudar, en su carpeta y con su nombre; uno abierto con un perfil vuelve con el mismo permiso y las mismas restricciones con que empezó. El scrollback de las shells normales todavía no sobrevive a un reinicio.",
         en: "If the Mac restarts, the whole layout comes back. Every Claude and Codex is relaunched with its own resume command, in its folder and under its name; one opened with a profile comes back under the same permission and restrictions it started with. Plain shells' scrollback doesn't survive a reboot yet." },
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
  { id: "project-sync", g: "workspace", kind: "term", isNew: "0.1.342",
    r: { es: "proyectos desde un script", en: "projects from a script" },
    t: { es: "Los mismos proyectos en todos tus Macs.", en: "The same projects on every Mac." },
    l: { es: "Lista los proyectos y añade los que falten desde un script, sin ventana ni preguntas. <b>Solo añade</b>: nunca renombra, mueve ni quita un proyecto, y no toca el proyecto activo, las pestañas ni las sesiones. Repetirlo no cambia nada, y funciona con la ventana cerrada o abierta.",
         en: "List the projects and add the missing ones from a script, with no window and no prompts. It <b>only adds</b>: it never renames, moves or removes a project, and never touches the active project, the tabs or the sessions. Repeating it changes nothing, and it works with the window closed or open." },
    cli: ["jmux project list --tsv", "jmux project add"],
    ex: [
      { t: { es: "En el Mac que dejas, guarda «nombre, tabulador, carpeta» por proyecto, en el orden de la barra lateral:", en: "On the Mac you leave, save “name, tab, folder” per project, in sidebar order:" }, c: "jmux project list --tsv", o: `payments-api\t${H}/payments-api\nstorefront\t${H}/storefront\ninfra\t${H}/infra` },
      { t: { es: "En el Mac al que llegas, añade cada uno. Uno que ya existe no cambia nada; uno que falta aparece al final de la barra lateral, sin seleccionarlo:", en: "On the Mac you arrive at, add each one. One that already exists changes nothing; a missing one appears at the end of the sidebar, unselected:" }, c: `while IFS=$'\t' read -r name dir; do\n  jmux project add "$name" "$dir"\ndone < projects.tsv`, o: `exists: payments-api — ${H}/payments-api\nexists: storefront — ${H}/storefront\nadded: infra — ${H}/infra` },
      { t: { es: "Mismo nombre con otra carpeta, o otra carpeta ya usada con otro nombre: no se toca nada y sale con código 3.", en: "The same name with another folder, or a folder already used under another name: nothing is touched and it exits with code 3." }, c: "jmux project add infra ~/code/storefront", o: `conflict: name — "infra" is a project here with another directory, ${H}/infra (asked for ${H}/storefront); nothing changed` },
      { c: "jmux project add shop ~/code/storefront", o: `conflict: dir — ${H}/storefront is already the project "storefront" (asked for "shop"); nothing changed` },
      { t: { es: "Una carpeta que no existe se rechaza con código 2. Con código 4 (<code>retry</code>) jmux se está actualizando y no se añadió nada: repítelo. <code>--dry-run</code> dice el resultado sin añadir nada, y <code>--json</code> lo da como objeto:", en: "A folder that doesn't exist is refused with code 2. Code 4 (<code>retry</code>) means jmux is swapping its daemon and nothing was added: run it again. <code>--dry-run</code> says the outcome without adding anything, and <code>--json</code> gives it as an object:" }, c: "jmux project add ghost ~/code/ghost", o: `refused: ${H}/ghost does not exist` },
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
   │  └─ 9: payments-api 3 — ${H}/payments-api · codex idle* · child of payments-api 2 (6)
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
  { id: "numbers", g: "workspace", kind: "claude", isNew: "0.1.320",
    r: { es: "número de sesión", en: "session number" },
    t: { es: "El número que dicen tus agentes, a la vista.", en: "The number your agents say, in plain sight." },
    l: { es: "Los agentes llaman a cada sesión por su número (<code>jmux tell 291</code>). Pasa el ratón por una fila del árbol y el número aparece junto al nombre; la sesión que tienes delante lo lleva siempre, y su tarjeta lo dice primero. Escribe «291» en la paleta y saltas a ella. Y cuando un agente te nombra una sesión, dice las dos cosas, «jmux 10 (291)»: un nombre puede reutilizarse, el número nunca.",
         en: "Agents call each session by its number (<code>jmux tell 291</code>). Hover a row in the tree and the number shows beside its name; the session in front of you always wears it, and its card says it first. Type “291” in the palette and you jump there. And when an agent names a session to you, it says both, “jmux 10 (291)”: a name can be reused, a number never is." },
    keys: ["⌘ P"], cli: ["jmux ls"],
    ex: [
      { t: { es: "Abre la paleta y escribe el número que te dio un agente:", en: "Open the palette and type the number an agent gave you:" }, k: ["⌘ P"] },
      { t: { es: "La CLI lo dice igual, nombre y número:", en: "The CLI says it the same way, name and number:" }, c: "jmux ls", o: `6: payments-api 2 [57x47] (cwd ${H}/payments-api, pid 73631, claude idle)\n9: payments-api 3 [80x24] (cwd ${H}/payments-api, pid 75462, codex idle*, child of payments-api 2 (6))` },
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
    l: { es: "La paleta lista todas las acciones y todas las sesiones, que encuentras por su nombre o por su número. Cualquier atajo se puede reasignar en <code>~/.jmux/config</code>, con condiciones de cuándo aplica. Si mantienes ⌘, ⌃ o ⌥ unos 0,3 s, cada control muestra el atajo que tiene en ese momento, reasignado o no.",
         en: "The palette lists every action and every session, found by its name or its number. Any shortcut can be rebound in <code>~/.jmux/config</code>, with conditions for when it applies. Hold ⌘, ⌃ or ⌥ for about 0.3 s and every control shows the chord it answers to right now, rebound or not." },
    keys: ["⌘ P", "hold ⌘"], cli: ["~/.jmux/config"],
    ex: [
      { t: { es: "Abre la paleta y escribe lo que quieres hacer:", en: "Open the palette and type what you want:" }, k: ["⌘ P"] },
      { t: { es: "Reasigna en <code>~/.jmux/config</code> (una directiva por línea):", en: "Rebind in <code>~/.jmux/config</code> (one directive per line):" }, c: "bind cmd+shift+o tab.new\nbind cmd+shift+c clipboard.clean when terminalFocus\nunbind cmd+shift+u", plain: true },
      { t: { es: "Recárgalo con «Reload Config» desde la paleta. Una línea mal escrita se ignora y se te dice por qué; el resto se aplica.", en: "Reload it with “Reload Config” from the palette. A bad line is skipped and you're told why; the rest applies." } },
      { t: { es: "Mantén ⌘ y mira: cada control muestra su atajo. Esta página hace lo mismo.", en: "Hold ⌘ and look: every control shows its chord. This page does the same." }, k: ["hold ⌘"] },
    ] },
  { id: "hover", g: "workspace", kind: "claude",
    shot: { src: "shots/hover.webp", cls: "narrow", alt: { es: "Su número, modelo, esfuerzo, contexto y sus dos hijas Codex", en: "Its number, model, effort, context and its two Codex children" } },
    r: { es: "tarjeta al pasar", en: "hover card" },
    t: { es: "Pasa el ratón y lo sabes todo.", en: "Hover and you know everything." },
    l: { es: "Si pasas el ratón por el icono de una sesión, una tarjeta te muestra su número, su estado, modelo, esfuerzo y contexto, sus subagentes con tipo y modelo, y quién es su padre y quiénes sus hijas. jmux dibuja sus propios menús y tarjetas en vez de los de macOS.",
         en: "Hover a session's icon and a card shows its number, its state, model, effort and context, its subagents with type and model, and its parent and children. jmux draws its own menus and cards instead of macOS's." },
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
      { t: { es: "El estado de todas, en texto (el * es «sin ver»):", en: "Everyone's state, as text (the * means unseen):" }, c: "jmux ls", o: `6: payments-api 2 [57x47] (cwd ${H}/payments-api, pid 73631, claude working)\n7: storefront 1 [80x24] (cwd ${H}/storefront, pid 73637, codex idle*)\n9: payments-api 3 [80x24] (cwd ${H}/payments-api, pid 75462, codex working, child of payments-api 2 (6))` },
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
  { id: "spawn", g: "team", kind: "codex", isNew: "0.1.338",
    r: { es: "jmux spawn · hijas", en: "jmux spawn · children" },
    t: { es: "Sesiones hijas: un Claude que lanza un Codex, o al revés.", en: "Child sessions: a Claude that starts a Codex, or the other way round." },
    l: { es: "Un agente le pasa una tarea a otro agente, del modelo y esfuerzo que quiera y en su propio worktree si hace falta. La hija aparece anidada bajo su padre y <b>nunca tiene más permisos que él</b>. Cuando termina, el padre recibe su mensaje final. Una vez integrado su trabajo, al terminarla <b>se lleva su worktree y su rama</b>; si algo se perdería, se quedan y te dice por qué. Desde la ventana, Delete Session te dice qué pasó con el worktree en un aviso sobre tu trabajo, y el comando para recuperar la rama se copia con un clic. <b>Dónde trabaja</b> lo eliges tú: en tu propio checkout, en un worktree suyo o en <i>auto</i> (tu checkout mientras esté libre, un worktree si no). En un checkout solo escribe una hija a la vez: la que puede escribir <b>lo reserva hasta que termina</b>, una segunda se rechaza (diciendo cómo liberarlo: una hija que ya terminó su tarea sigue reservándolo hasta que la termines con <code>jmux kill</code>) o va a un worktree, y a ti nunca te bloquea —solo te avisa al empezar y al terminar—. Las que solo leen no reservan nada. Si el checkout tiene cambios sin guardar y el dónde lo dijo un perfil o una opción, la primera hija que escribe ahí espera una tarjeta tuya.",
         en: "An agent hands a task to another agent, with whatever model and effort it wants and in its own worktree when needed. The child appears nested under its parent and <b>never gets more permission than it has</b>. When it finishes, the parent receives its final message. Once its work is merged, ending it <b>takes its worktree and branch with it</b>; if anything would be lost, both stay and it says why. From the window, Delete Session says what became of the worktree in a banner above your work, and the command that gets the branch back copies in one click. <b>Where it works</b> is yours to choose: in your own checkout, in a worktree of its own, or <i>auto</i> (your checkout while it is free, a worktree when it is not). A checkout has one writer at a time: a child that can write <b>holds it until it ends</b>, a second one is refused (saying how to free it: a child that finished its task still holds the checkout until you end it with <code>jmux kill</code>) or sent to a worktree, and you are never blocked — only told when it starts and when it ends. Children that only read hold nothing. If the checkout has uncommitted work and a profile or an option said where, the first child that writes there waits on a card for you." },
    cli: ["jmux spawn", "jmux spawn --profile", "jmux spawn --checkout", "jmux spawn --where", "jmux diff", "jmux self", "jmux kill --tree", "jmux kill --keep-worktree"],
    shot: { src: "shots/hero-dark.webp", alt: { es: "«payments-api 3» y «payments-api 4» (Codex) anidadas bajo «payments-api 2» (Claude)", en: "“payments-api 3” and “payments-api 4” (Codex) nested under “payments-api 2” (Claude)" } },
    ex: [
      { t: { es: "Tu Claude lo hace solo cuando le conviene. Esta es la orden que usó en la captura:", en: "Your Claude does it on its own when it helps. This is the command it ran in the capture:" }, c: "jmux spawn --codex 'Read-only audit — do NOT edit files. Check payments/ledger.py for the same double-posting-on-retry bug and propose one regression test.'" },
      { t: { es: "En su propio worktree y rama, para trabajar en paralelo sin pisarse:", en: "In its own worktree and branch, to work in parallel without clashing:" }, c: "jmux spawn --claude --model opus --branch fix/ledger 'Give Ledger.post() an idempotency_key and the regression test'" },
      { t: { es: "Una rama pide un worktree por sí sola. Sin nada más, la hija trabaja en tu checkout, y mientras escribe ahí lo tiene reservado: lo dice la respuesta, con quién lo tiene y si hay cambios sin guardar:", en: "A branch asks for a worktree on its own. With nothing else the child works in your checkout, and while it writes there it holds it — the answer says so, with who holds it and whether there is uncommitted work:" }, c: "jmux spawn --claude --checkout 'Give Ledger.post() an idempotency_key'", o: "request 0a767f04-d723-4261-8e8b-434b0720fe86\nsession 361 \"payments-api 3\" — request 0a767f04-d723-4261-8e8b-434b0720fe86 launching\n  claude · permission acceptEdits\n  where checkout ← flag\n    checkout " + H + "/payments-api — held by payments-api 3 (361), clean" },
      { t: { es: "Un segundo que escribe en ese checkout se rechaza, con el nombre de quien lo tiene; con <code>--where auto</code> va a un worktree y la respuesta dice por qué. Las hijas que solo leen (Claude en <code>plan</code>, Codex en <code>read-only</code> sin aprobaciones) no reservan nada y no se rechazan nunca:", en: "A second child that writes in that checkout is refused, naming who holds it; with <code>--where auto</code> it goes to a worktree and the answer says why. Children that only read (Claude in <code>plan</code>, Codex in <code>read-only</code> with no approvals) hold nothing and are never refused:" }, c: "jmux spawn --checkout 'Add a test for Ledger.post()'\njmux spawn --where auto 'Add a test for Ledger.post()'", o: "request 2ee18c7a-e0f3-4daa-85d7-9ac1d7d8367d\njmux: the checkout is held by payments-api 3 (361) until it ends — ask for a worktree (--worktree, or where auto) to work beside it, or end it: jmux kill 361\nrequest 5efa66cc-7d52-4489-b7ff-99445e4ae0fc\nsession 362 \"payments-api 4\" — request 5efa66cc-7d52-4489-b7ff-99445e4ae0fc launching\n  claude · permission acceptEdits\n  where worktree ← flag\n    the checkout is held by payments-api 3 (361) until it ends — a worktree instead\n    checkout " + H + "/payments-api — held by payments-api 3 (361), clean\n  worktree " + "/Users/ada/.jmux/worktrees/payments-api-72fbdc1e/child-22f721 on jmux/child-22f721" },
      { t: { es: "Un perfil también lo decide: su campo <code>where</code> vale mientras no pidas otra cosa con una opción. Tú no te quedas bloqueado: avisos cuando la hija toma tu checkout y cuando termina. Y lo que cambió ahí desde que empezó, sin lo que ya estaba sin guardar:", en: "A profile can decide it too: its <code>where</code> field applies unless you ask otherwise with an option. You are never blocked — you get a notice when the child takes your checkout and another when it ends. And what changed there since it began, without what was already uncommitted:" }, c: "jmux diff 361", o: "# " + H + "/payments-api — since the tree 5d472e6c7992 it found there (419 bytes)\n" + "## tracked files, the tree it started from (5d472e6c7992) to the working tree now\ndiff --git a/payments/ledger.py b/payments/ledger.py\nindex 8646dc0..f232091 100644\n--- a/payments/ledger.py\n+++ b/payments/ledger.py\n@@ -1,3 +1,5 @@\n class Ledger:\n-    def post(self, entry):\n+    def post(self, entry, idempotency_key=None):\n+        if idempotency_key in self.seen:\n+            return\n         self.rows.append(entry)" },
      { t: { es: "Con un perfil, la hija toma el modelo, el esfuerzo y el agente de su rol de implementador; lo que pides con una opción gana al perfil, y su permiso solo puede ser igual o más estrecho que el tuyo (si fuera mayor, el encargo se rechaza y dice de dónde sale el valor). Sin <code>--profile</code> vale <code>profile.default</code>, y si no hay ninguno todo funciona como siempre:", en: "With a profile, the child takes the agent, model and effort of the profile's implementer role; whatever you ask with an option beats the profile, and its permission can only equal yours or be narrower (a higher one refuses the request and says where the value comes from). Without <code>--profile</code> it is <code>profile.default</code>, and with none set everything works as it always did:" }, c: "jmux spawn --profile feature --worktree 'Give Ledger.post() an idempotency_key and the regression test'" },
      { t: { es: "Esperar el resultado ahí mismo, en vez de recibir el aviso:", en: "Wait for the result right there instead of being notified:" }, c: "jmux spawn --wait --codex --effort high 'Review the diff in payments/ for money bugs'" },
      { t: { es: "Quién eres, tus padres y tus hijas, y cómo va cada encargo:", en: "Who you are, your parents and children, and how each request stands:" }, c: "jmux self" },
      { t: { es: "Integrar y terminar: con su trabajo ya en tu rama —fast-forward, merge o squash—, la hija se lleva su worktree y su rama, y te dice cómo recuperar la rama:", en: "Merge, then end it: once its work is in your branch — fast-forward, merge or squash — the child takes its worktree and branch with it, and says how to get the branch back:" }, c: "git merge -q --ff-only jmux/child-8251ef\njmux kill 9", o: "worktree removed: /Users/ada/.jmux/worktrees/payments-api-561401a6/child-8251ef\nbranch jmux/child-8251ef deleted — was ec32f5ba4b8b; restore: git branch jmux/child-8251ef ec32f5ba4b8b" },
      { t: { es: "Si su trabajo no está integrado, o deja algo sin guardar, se quedan worktree y rama, y dice por qué:", en: "If its work isn't merged, or it left something uncommitted, worktree and branch stay, and it says why:" }, c: "jmux kill 10", o: "worktree kept: 1 commit not in main" },
      { t: { es: "Lo ignorado solo se va si el repositorio lo declara regenerable en la sección <code>[worktree]</code> de su <code>.jmux/project.toml</code>, tal como está en la rama donde se integró el trabajo y solo si has confiado en ese archivo (<code>jmux settings trust</code>); lo que la hija declare por su cuenta no cuenta (un <code>.env</code> es trabajo):", en: "Ignored files go only when the repository declares them regenerable in the <code>[worktree]</code> section of its <code>.jmux/project.toml</code>, as committed on the branch the work landed in, and only if you have trusted that file (<code>jmux settings trust</code>); what the child declares on its own doesn't count (a <code>.env</code> is work):" }, c: "[worktree]\nregenerable = [\"/target/\", \"/web/node_modules/\"]", plain: true },
    ] },
  { id: "confirm", g: "team", kind: "claude", isNew: "0.1.303",
    shot: { src: "shots/confirm.webp", cls: "mid", alt: { es: "La tarjeta: tarea editable, agente, modelo, dónde trabaja, rama, permiso, perfil y de dónde sale cada valor", en: "The card: editable task, agent, model, where it works, branch, permission, profile and where each value comes from" }, second: { src: "shots/dirty.webp", alt: { es: "Con cambios sin confirmar en el checkout: Cancel, Send to a worktree o Go on as it is", en: "With uncommitted changes in the checkout: Cancel, Send to a worktree or Go on as it is" } } },
    band: 25.3,
    r: { es: "confirmar hijas", en: "confirm children" },
    t: { es: "Tú decides antes de que nazca una hija.", en: "You decide before a child is born." },
    l: { es: "Con un interruptor, cada <code>jmux spawn</code> espera en una tarjeta a que lo apruebes. En la tarjeta puedes editar la tarea, el agente, el modelo, el esfuerzo y dónde trabaja (tu checkout, <i>Auto</i> o un worktree propio) antes de darle a Start Session; si el checkout lo tiene otra hija, la tarjeta lo dice. Si la hija viene de un perfil, la tarjeta dice cuál y, en cada valor, de dónde sale (el perfil, el padre, el techo de permisos); lo que editas pasa a ser <code>flag</code> en cuanto lo escribes. Si nadie contesta en 15 minutos, la petición caduca. <b>Aunque el interruptor esté apagado</b>, una hija que va a escribir en un checkout con cambios sin guardar —cuando el dónde lo dijo un perfil o una opción— espera su propia tarjeta: lista las primeras 20 rutas y cuántas hay, y se contesta <i>Go on as it is</i>, <i>Send to a worktree</i> o <i>Cancel</i>. Se pregunta una vez por padre y checkout, y jmux nunca hace commit ni stash de tu trabajo. Si git no consigue decir qué hay sin guardar (falla o tarda demasiado), la tarjeta pregunta igual y dice que no pudo leerlo. <b>La tarjeta es un aviso para ti, no una puerta</b>: un agente que lanza una hija sin decir dónde trabaja —ni con una opción ni en ningún perfil— entra en el checkout solo con su reserva, sin tarjeta.",
         en: "With one switch, every <code>jmux spawn</code> waits on a card for your approval. On the card you can edit the task, agent, model, effort and where it works (your checkout, <i>Auto</i> or a worktree of its own) before you press Start Session; if another child holds the checkout, the card says so. When the child comes from a profile, the card names it and says, under each value, where it comes from (the profile, the parent, the permission ceiling); whatever you edit becomes <code>flag</code> as you type it. If nobody answers within 15 minutes, the request expires. <b>Even with the switch off</b>, a child about to write in a checkout with uncommitted work — when a profile or an option said where — waits on a card of its own: it lists the first 20 paths and how many there are, and you answer <i>Go on as it is</i>, <i>Send to a worktree</i> or <i>Cancel</i>. It is asked once per parent and checkout, and jmux never commits or stashes your work. If git cannot say what is uncommitted (it fails or takes too long), the card asks anyway and says it could not read it. <b>The card is advice for you, not a gate</b>: an agent that spawns a child with no where said anywhere — no option, no profile — goes into the checkout with the hold only, and no card." },
    keys: ["⌘ ↩"],
    ex: [
      { t: { es: "Activa el interruptor de la barra de título, o «Toggle Confirmation of Child Sessions» en la paleta.", en: "Turn on the title-band switch, or “Toggle Confirmation of Child Sessions” in the palette." }, k: ["⌘ P"] },
      { t: { es: "Cuando un agente pida una hija, aparece la tarjeta. Ajusta lo que quieras y arranca, o rechaza:", en: "When an agent asks for a child, the card appears. Adjust anything, then start it or decline:" }, k: ["⌘ ↩"] },
      { t: { es: "Con un perfil, bajo la tarjeta ves cada valor con su origen, en las palabras del daemon (esto es de una hija de <code>jmux spawn --profile task</code>, con la regla de <code>.jmux/project.toml</code> de la entrada de perfiles):", en: "With a profile, under the card you see each value with its origin, in the daemon's words (this is from a child of <code>jmux spawn --profile task</code>, with the rule in <code>.jmux/project.toml</code> from the profiles entry):" }, c: "agent claude ← profile task ← built-in\nmodel opus ← profile task ← project (.jmux/project.toml:4)\neffort xhigh ← profile task ← project (.jmux/project.toml:5)\npermission acceptEdits ← ceiling", plain: true },
      { t: { es: "El agente que la pidió recibe tu decisión como respuesta a su <code>jmux spawn</code>.", en: "The agent that asked gets your decision as the answer to its <code>jmux spawn</code>." } },
      { t: { es: "La tarjeta de cambios sin guardar sale sola, sin el interruptor: una hija que escribe, con el dónde dicho por una opción o un perfil, en un checkout con trabajo sin guardar. Si contestas <i>Go on as it is</i>, el <code>jmux spawn</code> del agente termina así (la hija trabaja encima de lo que había, y el checkout dice que está sucio):", en: "The uncommitted-work card comes up by itself, switch or not: a child that writes, with where said by an option or a profile, in a checkout with unsaved work. If you answer <i>Go on as it is</i>, the agent's <code>jmux spawn</code> ends like this (the child works on top of what was there, and the checkout says it is dirty):" }, c: "jmux spawn --claude --where auto 'Add a test for Ledger.post()'", o: "request e2e0b581-a8f0-4169-83dc-7f961c19991e\nsession 361 \"payments-api 3\" — request e2e0b581-a8f0-4169-83dc-7f961c19991e launching\n  claude · permission acceptEdits\n  where checkout ← flag\n    checkout " + H + "/payments-api — held by payments-api 3 (361), dirty, 2 path(s)" },
      { t: { es: "<i>Send to a worktree</i> la arranca en un worktree suyo sin tocar el checkout; <i>Cancel</i> rechaza el encargo y el agente lo lee como <code>declined</code>. ⌘↩ no contesta esta tarjeta: seguir encima de trabajo sin guardar es un clic, no un atajo.", en: "<i>Send to a worktree</i> starts it in a worktree of its own and leaves the checkout alone; <i>Cancel</i> refuses the request and the agent reads it as <code>declined</code>. ⌘↩ does not answer this card: going on over unsaved work is a click, not a chord." } },
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
  { id: "plans", g: "team", kind: "claude", isNew: "0.1.335",
    r: { es: "jmux plan · planes", en: "jmux plan · plans" },
    t: { es: "Un plan que apruebas antes de que nada arranque.", en: "A plan you approve before anything starts." },
    l: { es: "Un planificador (Claude o Codex) escribe el plan: un documento con sus tareas, cada una con su agente, modelo y esfuerzo. Tú lo revisas y lo editas en una pestaña, y <b>ninguna tarea arranca hasta que le das a Start</b>. Cada una corre en una hija del planificador, en su propio worktree y nunca con más permisos que él; cuando termina, el planificador la juzga por el intento exacto que revisó. jmux guarda el estado del plan: sobrevive a un reinicio, y lo que no puede garantizar te lo enseña como <i>incierto</i> en vez de repetirlo. Si un ejecutor vuelve a trabajar por su cuenta —al acabar una tarea que dejó en segundo plano—, jmux lo ve, aunque se cierre justo después: ese turno queda anotado como un intento tardío que decides tú, el planificador se entera, y parar el plan lo interrumpe mientras trabaja; si te está preguntando algo, no: eso te lo deja a ti, en la lista de lo que no se pudo confirmar.",
         en: "A planner (Claude or Codex) writes the plan: a document with its tasks, each with its agent, model and effort. You review and edit it in a tab, and <b>no task starts until you press Start</b>. Each runs in a child of the planner, in its own worktree and never with more permission than it has; when one ends, the planner judges the exact attempt it reviewed. jmux keeps the plan's state: it survives a restart, and what it cannot vouch for it shows you as <i>uncertain</i> instead of doing it twice. If an executor goes back to work on its own — when a task it left in the background ends — jmux sees it, even if it exits right after: that turn is recorded as a late attempt for you to decide on, the planner is told, and stopping the plan interrupts it while it works; not while it is asking you something, which it leaves to you, listed with what couldn't be confirmed." },
    cli: ["jmux plan new", "jmux plan status", "jmux plan launch", "jmux plan accept", "jmux plan stop"],
    keys: ["⌘ ↩"],
    ex: [
      { t: { es: "Pídeselo a tu agente con tus palabras; él se convierte en el planificador:", en: "Ask your agent in your own words; it becomes the planner:" }, c: "Make this a jmux plan: split the checkout rewrite into cart, pricing and payment form, one task each.", plain: true },
      { t: { es: "O desde un terminal fuera de jmux, arranca un planificador nuevo en el directorio del proyecto 1:", en: "Or from a terminal outside jmux, start a new planner in project 1's directory:" }, c: "jmux plan new --claude --model opus --project 1 'Accept trailing commas in the config parser, end to end'" },
      { t: { es: "Con un perfil, el planificador toma el rol de orquestador y los ejecutores el agente, el modelo y el esfuerzo del implementador (su permiso y sus argumentos todavía no: los ejecutores trabajan bajo el techo de su planificador), y <code>parallel</code> del perfil fija cuántos corren a la vez si no lo dices; los ejecutores siguen en su propio worktree, siempre:", en: "With a profile, the planner takes the orchestrator role and the executors the implementer's agent, model and effort (not its permission or arguments yet: executors work under their planner's ceiling), and the profile's <code>parallel</code> sets how many run at once when you don't say; executors stay in a worktree of their own, always:" }, c: "jmux plan new --profile feature --project 1 'Accept trailing commas in the config parser, end to end'" },
      { t: { es: "El planificador escribe el plan y te lo pasa (tú lo ves en su pestaña):", en: "The planner writes the plan and hands it to you (you see it in its tab):" }, c: "jmux plan show\njmux plan write --rev 1 - < plan.md\njmux plan check\njmux plan propose --rev 2" },
      { t: { es: "Revisa qué arrancaría y con qué permisos; en la pestaña, «Start N tasks…»:", en: "Check what would start and under which permission; in the tab, “Start N tasks…”:" }, k: ["⌘ ↩"], c: "jmux plan preview --plan 'api plan 1' --rev 2",
        o: "token p2-10532f5a12d2b49a · revision 2 · ~/code/api (~/code/api/.git)\nT1   claude                      jmux/plan-1b597ea7/t1-a1         permission acceptEdits (resolved again at each launch) · Parser accepts trailing commas\nT2   claude sonnet               jmux/plan-1b597ea7/t2-a1         permission acceptEdits (resolved again at each launch) · Wire the syntax into the CLI\nstart: jmux plan launch --plan 1b597ea7 --token p2-10532f5a12d2b49a [--only T1,T3]" },
      { t: { es: "Cómo va cada tarea, su intento y el token con el que se juzga:", en: "How each task stands, its attempt and the token it is judged by:" }, c: "jmux plan status --plan 'api plan 1'",
        o: "plan \"api plan 1\" (1b597ea7) · running · planner session 1 \"sh\" · revision 2 · pen: the person\n2 task(s): 1 proposed · 0 approved · 0 running · 1 ended · 0 accepted · 0 dropped · 0 failed · 0 uncertain — 0 executor(s) waiting on their user · parallel 4\nT1   ended      attempt 1 (launch)   session 2    a1-c0654ae9  v12   Parser accepts trailing commas\nT2   proposed   —                                 —            v1    Wire the syntax into the CLI" },
      { t: { es: "El planificador revisa el diff —lo ya confirmado, lo que no y los ficheros sin seguimiento, cada cosa aparte— y acepta el intento que revisó (o lo devuelve con una corrección):", en: "The planner reads the diff — what is committed, what is not, and untracked files, each apart — and accepts the attempt it reviewed (or sends it back with a correction):" }, c: "jmux plan diff T1\njmux plan accept T1 a1-c0654ae9\njmux plan rework T1 a1-c0654ae9 'Also reject a comma after the last key'" },
      { t: { es: "Parar el plan: nada nuevo arranca y cada turno que jmux sabe nombrar se interrumpe si está trabajando. Lo que no interrumpe —como un Claude que te está preguntando algo (un Escape te respondería por ti), un shell que un turno dejó en segundo plano o un turno que aún no tiene nombre— queda entre lo que no se pudo confirmar, con la orden que cierra su sesión:", en: "Stop the plan: nothing new starts and every turn jmux can name is interrupted while it works. What it doesn't interrupt — such as a Claude asking you something (an Escape would answer it for you), a shell a turn left in the background, or a turn with no name yet — is listed with what couldn't be confirmed, along with the command that ends its session:" }, c: "jmux plan stop --plan 'api plan 1'\njmux kill 3 --tree" },
    ] },
  { id: "profiles", g: "team", kind: "term", isNew: "0.1.346",
    shot: { src: "shots/agents.webp", cls: "mid", alt: { es: "Ajustes ▸ Agents: el perfil task, cada rol con su agente, modelo, esfuerzo y permiso, y el origen de cada valor", en: "Settings ▸ Agents: the task profile, each role with its agent, model, effort and permission, and where each value comes from" }, second: { src: "shots/chip.webp", alt: { es: "La fila lleva el perfil; su tarjeta, el permiso lanzado y los roles", en: "The row wears its profile; its card shows the launched permission and the roles" } } },
    r: { es: "perfiles", en: "profiles" },
    t: { es: "Un perfil según el tamaño del trabajo: quién lo hace, con qué modelo y hasta dónde puede llegar.", en: "A profile for the size of the work: who does it, with which model and how far it may go." },
    l: { es: "Un perfil pone nombre a lo que cambia con el tamaño de la tarea: para cada rol (<b>orquestador</b>, <b>implementador</b>, <b>revisor</b>) el agente, el modelo, el esfuerzo, el permiso y unos argumentos de arranque; y dónde se trabaja, cómo se revisa y cuántos ejecutores a la vez. Vienen cinco hechos —Solo, Tweak, Task, Feature y Critical— y todos se pueden cambiar; lo que no pones, funciona como siempre. <b>El permiso solo se estrecha</b>: una hija nunca tiene más que su padre, y un perfil que pida más rechaza el encargo y dice de qué archivo y línea sale el valor. Tu propia sesión solo se ensancha si lo escribiste tú en tu archivo global o en el del repositorio de confianza; un agente no puede, ni desde el archivo personal. Los argumentos salen de una lista corta de los que no tocan permisos, modelo, herramientas ni sesión. Cada valor dice de qué archivo y línea viene, y los que nada lee todavía muestran quién los leerá.",
         en: "A profile names what changes with the size of the task: for each role (<b>orchestrator</b>, <b>implementer</b>, <b>reviewer</b>) the agent, model, effort, permission and some launch arguments; and where the work runs, how it is reviewed and how many executors at once. Five come built in — Solo, Tweak, Task, Feature and Critical — and every one can be changed; whatever you leave out works as it always did. <b>Permission only narrows</b>: a child never has more than its parent, and a profile that asks for more refuses the request and says which file and line the value comes from. Your own session widens only if you wrote it in your global file or the trusted repository's; an agent can't, and never from the personal file. Arguments come from a short list of the ones that touch no permission, model, tool or session. Every value says the file and line it comes from, and the ones nothing reads yet show who will." },
    keys: ["⌘ P", "⌘ ,"],
    cli: ["jmux profile list", "jmux profile show", "jmux new --profile", "jmux plan new --profile", "jmux spawn --profile"],
    ex: [
      { t: { es: "Los perfiles que hay en este repositorio, el que vale por defecto y qué archivos tocaron cada uno:", en: "The profiles in this repository, the default one and which files changed each:" }, c: "jmux profile list", o: "default  task  ← global (~/.jmux/settings.toml:2)\n\nsolo         Solo           built-in\ntweak        Tweak          built-in\ntask         Task           built-in, edited in project  (default)\nfeature      Feature        built-in\ncritical     Critical       built-in" },
      { t: { es: "Un perfil entero, cada campo con su origen. Aquí el repositorio ha cambiado el implementador de <code>task</code> con la regla que se ve abajo:", en: "One profile whole, every field with its origin. Here the repository has changed <code>task</code>'s implementer with the rule shown below:" }, c: "jmux profile show task", o: `task  Task  (built-in)
the default
repository ${H}/payments-api
checkout ${H}/payments-api — free, clean

label                          unset — shown as "Task"
roles.orchestrator.agent       "claude"  ← built-in
roles.orchestrator.model       "opus"  ← built-in
roles.orchestrator.effort      "high"  ← built-in
roles.orchestrator.permission  unset — the ceiling
roles.orchestrator.args        unset — none
roles.implementer.agent        "claude"  ← built-in
roles.implementer.model        "opus"  ← project (.jmux/project.toml:4)
roles.implementer.effort       "xhigh"  ← project (.jmux/project.toml:5)
roles.implementer.permission   unset — the ceiling
roles.implementer.args         unset — none
roles.reviewer.agent           unset — the launch's own  (nothing reads it yet — P3)
roles.reviewer.model           unset — as today  (nothing reads it yet — P3)
roles.reviewer.effort          unset — as today  (nothing reads it yet — P3)
roles.reviewer.permission      unset — the ceiling  (nothing reads it yet — P3)
roles.reviewer.args            unset — none  (nothing reads it yet — P3)
where                          "auto"  ← built-in
review.by                      "orchestrator"  ← built-in  (nothing reads it yet — P3)
review.rounds                  unset  (nothing reads it yet — P3)
review.when                    unset  (nothing reads it yet — P3)
parallel                       2  ← built-in
auto_start                     false  ← built-in  (nothing reads it yet — Plan S2)
relay_at                       unset  (nothing reads it yet — B-266)
steps.references               false  ← built-in  (nothing reads it yet — P4)
steps.contract                 false  ← built-in  (nothing reads it yet — P4)
steps.live_check               false  ← built-in  (nothing reads it yet — P4)
steps.verify                   unset  (nothing reads it yet — B-281)` },
      { t: { es: "El cambio es una sección en <code>.jmux/project.toml</code> (versionado con el repositorio, cuenta cuando confías en él) o en tu <code>.jmux/local.toml</code>:", en: "The change is a section in <code>.jmux/project.toml</code> (versioned with the repository, counts once you trust it) or in your own <code>.jmux/local.toml</code>:" }, c: "# The repository's jmux settings.\n\n[profiles.task.roles.implementer]\nmodel = \"opus\"      # money bugs deserve it\neffort = \"xhigh\"", plain: true },
      { t: { es: "Elegir uno: en una hija, en un plan o en una sesión tuya. Lo que pides con una opción gana al perfil; sin <code>--profile</code> vale <code>profile.default</code>, y sin ninguno nada cambia:", en: "Pick one: for a child, a plan or a session of yours. Whatever you ask with an option beats the profile; without <code>--profile</code> it is <code>profile.default</code>, and with none nothing changes:" }, c: "jmux spawn --profile feature --worktree 'Add idempotency keys to Ledger.post()'\njmux plan new --profile feature --project 1 'Accept trailing commas in the config parser'\njmux new --claude --profile task" },
      { t: { es: "En la ventana, desde la paleta: «New Claude with profile…» y «New Codex with profile…» te dejan elegir uno y abren la sesión con el rol de orquestador. Lo que el perfil no pudo aplicar, y por qué, sale en un aviso sobre tu trabajo.", en: "In the window, from the palette: “New Claude with profile…” and “New Codex with profile…” let you pick one and open the session with the orchestrator role. What the profile couldn't apply, and why, appears in a banner above your work." }, k: ["⌘ P"] },
      { t: { es: "Una sesión abierta con un perfil lleva su nombre en una etiqueta tras el suyo, y al pasar el ratón por la fila su tarjeta dice con qué permiso arrancó (el que recibió al lanzarse, aunque el perfil haya cambiado después) y lista los roles tal como se leen ahora, en el directorio donde se lanzó, con el origen de cada valor (en varias líneas si no cabe, sin cortarlo).", en: "A session opened with a profile wears its name in a chip after its own, and hovering its row says the permission it launched with (the one it was given at launch, even if the profile changed since) and lists its roles as they read now, in the directory it was launched in, with the origin of each value (over several lines if it does not fit, never cut)." } },
      { t: { es: "Ajustes ▸ Agents: eliges el repositorio y en qué archivo escribir (global, el del repositorio si es de confianza, o el tuyo), el perfil por defecto y el perfil; una columna por rol con agente, modelo, esfuerzo, permiso y argumentos, y debajo de cada valor el archivo y la línea de donde sale (en dos líneas si hace falta: una ruta larga pierde sus carpetas, nunca el nombre del archivo; lo que aún no lee nadie se dice una vez en la cabecera de la columna). Si escribes en un archivo y otro más cercano tiene la misma clave, el valor se guarda pero no cuenta, y la celda lo dice: «written to global — the project file's value wins». Si el archivo elegido deja de contar (por ejemplo, un agente cambió el del repositorio y ya no es de confianza), se mantiene la elección, la edición se apaga y se dice por qué: nada se escribe en otro archivo. Duplicate…, Reset y Delete trabajan sobre el archivo elegido; Duplicate… no copia al global ni al del repositorio un permiso o unos argumentos que vengan de tu archivo personal, y dice cuáles dejó fuera y, si el daemon rechaza algo a medias, qué se escribió y qué no. Cambiar el permiso, los argumentos o el perfil por defecto en tu archivo global es cosa de una persona: un agente no puede.", en: "Settings ▸ Agents: pick the repository and which file to write to (global, the repository's if trusted, or your own), the default profile and the profile; a column per role with agent, model, effort, permission and arguments, and under each value the file and line it comes from (on two lines if it needs them: a long path loses its folders, never the file's name; what nothing reads yet is said once, in the column's header). If you write to a file and a nearer one has the same key, the value is saved but does not count, and the cell says so: “written to global — the project file's value wins”. If the chosen file stops counting (say an agent changed the repository's and it is no longer trusted), the choice is kept, editing turns off and it says why: nothing is written to another file. Duplicate…, Reset and Delete work on the chosen file; Duplicate… never copies a permission or arguments that come from your personal file into the global or the repository's, says which it left out and, if the daemon refuses something halfway, what was written and what was not. Changing the permission, the arguments or the default profile in your global file is a person's to do: an agent can't." }, k: ["⌘ ,"] },
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
      ["o", `claude · The retry test in tests/test_refunds.py fails: a refund retried with the same idempotency key… · payments-api · 6m ago · live in payments-api 2 (6) · 5 hits
  #6 from another session: …add keyword-only \`idempotency_key=None\`, treating identical keyed retries as no-ops…
  #7 assistant: - **Refunds fixed:** in \`payments/refunds.py:23\`, a retry with an idempotency key it has already seen now returns the original amount…
  jmux conversation claude:2328c389-c975-43cf-939f-926b15dae7e0 --range 4:12

codex · Read-only audit — do NOT edit, create or delete any files… · payments-api · 7m ago · live in payments-api 3 (9) · 2 hits
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

  { id: "record", g: "docs", kind: "doc", isNew: "0.1.344",
    r: { es: "el Registro · .gg", en: "the Record · .gg" },
    t: { es: "El registro del proyecto: ideas con id, secciones que se leen sueltas y un tablero.", en: "The project's record: ideas with ids, sections read one at a time, and a board." },
    shot: { src: "shots/board.webp", cls: "mid", alt: { es: "El Tablero sobre .gg/BACKLOG.md: entradas por tipo, filtro y relaciones", en: "The Board over .gg/BACKLOG.md: entries by kind, a filter and relations" } },
    l: { es: "La carpeta <code>.gg/</code> de un proyecto —backlog, diseño, glosario, runbook y decisiones— sigue siendo Markdown en su repositorio. jmux acuña los ids del backlog (<code>jmux backlog add</code>, sin colisiones entre hijas que capturan a la vez, y nunca hace commit; con <code>--id</code> un reintento no escribe dos veces), lee cada fichero <b>por secciones</b> (<code>jmux record read DESIGN#Refunds</code>, sin daemon, también en sandbox) y comprueba lo que sobra en él: secciones enormes, diseño sin código al que apuntar, mecanismo o historia donde debería haber contrato. Solo un formato roto falla; lo demás avisa, y cuánto (<code>error</code>, <code>warn</code> u <code>off</code> por regla) lo decides en la sección <code>[record.check]</code> del <code>.jmux/project.toml</code> —con <code>jmux settings set record.check.anchor error --project</code>—, que solo cuenta cuando una persona ha confiado en ese archivo. La pestaña de <code>.gg/BACKLOG.md</code> se ve como <b>tablero</b> de solo lectura —por tipo, con filtro y relaciones— y se abre desde la paleta (⌘P → Backlog).",
         en: "A project's <code>.gg/</code> folder — backlog, design, glossary, runbook and decisions — stays Markdown in its repository. jmux mints the backlog's ids (<code>jmux backlog add</code>: no collisions between children capturing at once, and it never commits; with <code>--id</code> a retry never writes twice), reads each file <b>by section</b> (<code>jmux record read DESIGN#Refunds</code>, no daemon needed, sandbox included) and checks it for what is surplus: huge sections, design with no code to point at, mechanism or history where a contract should be. Only a broken format fails; the rest warns, and how loudly (<code>error</code>, <code>warn</code> or <code>off</code> per rule) is yours to set in the <code>[record.check]</code> section of <code>.jmux/project.toml</code> — with <code>jmux settings set record.check.anchor error --project</code> — which counts only once a person trusted that file. The <code>.gg/BACKLOG.md</code> tab shows as a read-only <b>board</b> — by kind, with a filter and relations — and opens from the palette (⌘P → Backlog)." },
    cli: ["jmux backlog add", "jmux record index", "jmux record read", "jmux record check"],
    keys: ["⌘ P"],
    ex: [
      { t: { es: "Captura una idea sin dejar lo que haces; jmux da el id y escribe la entrada arriba de <code>## New</code> en tu árbol de trabajo:", en: "Capture an idea without leaving what you're doing; jmux gives the id and writes the entry at the top of <code>## New</code> in your working tree:" }, c: "jmux backlog add --title 'Refund emails go out before the refund settles' --kind bug \\\n  --idea 'The customer mail is queued when the refund is created, not when it settles.' \\\n  --touches payments/refunds.py --relates B-12", o: "B-13" },
      { t: { es: "El esquema de un fichero, con el tamaño de cada sección:", en: "A file's outline, with each section's size:" }, c: "jmux record index DESIGN",
        o: "DESIGN.md — 0.3 KB, 4 section(s)\n  line  section                                                own   subtree  anchor\n     1  # Design — payments-api                             0.0 KB    0.3 KB  #design--payments-api\n     3    ## Product                                        0.1 KB    0.1 KB  #product\n     6    ## Refunds                                        0.1 KB    0.1 KB  #refunds\n    10    ## Webhooks                                       0.1 KB    0.1 KB  #webhooks" },
      { t: { es: "Una sección con sus subsecciones; o una entrada del backlog, un término del glosario, una decisión:", en: "One section with its subsections; or a backlog entry, a glossary term, a decision:" }, c: "jmux record read DESIGN#Refunds\njmux record read BACKLOG#B-11\njmux record read CONTEXT#Session\njmux record read adr/0012",
        o: "## Refunds\n<!-- governs: payments/refunds.py -->\nA refund reverses a charge once; a retry with the same idempotency key returns the first refund." },
      { t: { es: "La comprobación: un contador por detrás de sus entradas falla; una sección sin código o con una ruta que ya no existe avisa:", en: "The check: a counter behind its entries fails; a section with no code, or with a path that no longer exists, warns:" }, c: "jmux record check",
        o: ".gg/BACKLOG.md:7: error format: B-13 is at or past next-id (B-12) — the counter is behind its entries\n.gg/BACKLOG.md:13: error format: B-12 is at or past next-id (B-12) — the counter is behind its entries\n.gg/DESIGN.md:11: warn anchor-stale: \"Webhooks\" governs \"payments/hooks/\", which matches nothing in the tree\n.gg/DESIGN.md:14: warn anchor: section \"Settlement\" governs no code — add `<!-- governs: <paths> -->` under its heading (or list it in unanchored_ok)\nrecord check: 2 error(s), 2 warning(s)" },
      { t: { es: "Si el <code>.jmux/project.toml</code> del repositorio no es de confianza, la comprobación usa las severidades por defecto y lo dice una vez (<code>jmux settings trust</code> lo arregla, una persona):", en: "If the repository's <code>.jmux/project.toml</code> isn't trusted, the check uses the default severities and says so once (<code>jmux settings trust</code> fixes it, a person does):" }, c: "jmux record check",
        o: "note: .jmux/project.toml not trusted — default severities\n.gg/DESIGN.md:10: warn anchor: section \"Settlement\" governs no code — add `<!-- governs: <paths> -->` under its heading (or list it in unanchored_ok)\nrecord check: 0 error(s), 1 warning(s)" },
      { t: { es: "El tablero: abre la paleta y elige Backlog. Arriba, «Board · Document» cambia entre el tablero y el fichero; un clic en una relación filtra por ella y un clic en una tarjeta abre la entrada entera.", en: "The board: open the palette and pick Backlog. On top, “Board · Document” switches between the board and the file; a click on a relation filters by it and a click on a card opens the whole entry." }, k: ["⌘ P"] },
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
  { id: "configuration", g: "terminal", kind: "term", isNew: "0.1.343",
    r: { es: "configuración", en: "configuration" },
    t: { es: "Tres archivos, y cada valor dice de cuál viene.", en: "Three files, and every value says which one it came from." },
    shot: { src: "shots/configuration.webp", cls: "mid", alt: { es: "Ajustes ▸ Configuration: los tres archivos y el origen de cada valor", en: "Settings ▸ Configuration: the three files and where each value comes from" } },
    l: { es: "La configuración de jmux vive en tres archivos TOML: el tuyo en este Mac (<code>~/.jmux/settings.toml</code>), el del repositorio (<code>.jmux/project.toml</code>, versionado con él) y el tuyo dentro de ese repositorio (<code>.jmux/local.toml</code>, que jmux deja fuera de git). Gana el más cercano, clave a clave, y cada valor dice el archivo y la línea de donde sale. El archivo del repositorio solo cuenta cuando tú has confiado en su contenido, y confiar es cosa tuya: un agente no puede. Lo que jmux escribe respeta tus comentarios y tu orden. Una clave que jmux no usa se guarda y se marca; una clave que solo se lee en otra capa, puesta donde no toca, se deja fuera y se lista aparte; un archivo que no se lee (o que es un enlace, simbólico o duro, que jmux no sigue) se deja fuera y dice dónde falla.",
         en: "jmux's configuration lives in three TOML files: yours on this Mac (<code>~/.jmux/settings.toml</code>), the repository's (<code>.jmux/project.toml</code>, versioned with it) and yours inside that repository (<code>.jmux/local.toml</code>, which jmux keeps out of git). The nearest wins, key by key, and every value says the file and line it comes from. The repository's file only counts once you have trusted its content, and trusting is yours to do: an agent can't. What jmux writes keeps your comments and your order. A key jmux doesn't use is kept and marked; a key that is only read from another layer, set where it doesn't belong, is left out and listed apart; a file that can't be read (or is a link, symbolic or hard, which jmux doesn't follow) is left out and says where it fails." },
    keys: ["⌘ ,"],
    cli: ["jmux settings", "jmux settings unset --table"],
    ex: [
      { t: { es: "Qué está en vigor y de dónde sale cada valor. Primero el estado de los tres archivos:", en: "What's in force and where each value comes from — the state of the three files first:" }, c: "jmux settings show", o: "global   ~/.jmux/settings.toml  counts\nproject  .jmux/project.toml  counts\nlocal    .jmux/local.toml  counts\n\ntheme = \"dark\"  ← local (.jmux/local.toml:2)  (not used by this jmux)\nworktree.regenerable = [\"/target/\", \"web/node_modules\", \"app/.build\"]  ← project (.jmux/project.toml:5)" },
      { t: { es: "El archivo del repositorio, tal como lo escribe una persona. jmux conserva los comentarios y el orden al tocarlo:", en: "The repository's file, as a person writes it. jmux keeps the comments and the order when it edits it:" }, c: "# The repository's jmux settings.\n\n[worktree]\n# What a worktree's removal may throw away.\nregenerable = [\"/target/\", \"web/node_modules\", \"app/.build\"]  # rebuilt by make", plain: true },
      { t: { es: "Cambia una clave en una capa; la capa se nombra siempre. Solo se aceptan claves que jmux conoce, con su tipo. Escrito desde una terminal de jmux cuenta como escrito por un agente: el archivo del repositorio queda sin confiar, y lo dice. Desde una terminal fuera de jmux escribe una persona, y si el archivo ya era de confianza la confianza se mantiene. Los valores de los perfiles también se escriben desde la ventana (Ajustes ▸ Agents), donde la persona es quien escribe; guardar <code>project.toml</code> en una pestaña de documento de jmux es un cambio que ninguna persona hizo con <code>set</code>: también lo deja sin confiar:", en: "Set a key in one layer — the layer is always named. Only keys jmux knows are accepted, with their type. Typed in a jmux terminal it counts as an agent's write: the repository's file is left untrusted, and it says so. From a terminal outside jmux a person writes, and if the file was already trusted, trust is kept. The profiles' values are also written from the window (Settings ▸ Agents), where the person is the one writing; saving <code>project.toml</code> in a jmux document tab is a change no person made with <code>set</code>: that leaves it untrusted too:" }, c: "jmux settings set worktree.regenerable '[\"/target/\", \"web/node_modules\", \"app/.build\", \".next\"]' --project", o: `set worktree.regenerable in the project layer (${H}/payments-api/.jmux/project.toml)\n.jmux/project.toml is not trusted now — \`jmux settings trust\` (from a terminal outside jmux) makes it count` },
      { t: { es: "Un archivo del repositorio nuevo, o cambiado sin que una persona lo haga por jmux, no cuenta: <code>show</code> dice «not trusted». <code>jmux settings trust</code> te enseña el archivo (y qué cambió desde lo último en lo que confiaste) y pregunta. Solo una persona, en una terminal fuera de jmux.", en: "A new repository file, or one changed other than by a person through jmux, doesn't count: <code>show</code> says “not trusted”. <code>jmux settings trust</code> shows you the file (and what changed since the last one you trusted) and asks. Only a person, in a terminal outside jmux." }, c: "jmux settings trust", o: `${H}/payments-api/.jmux/project.toml is not trusted. It says:

# The repository's jmux settings.

[worktree]
# What a worktree's removal may throw away.
regenerable = ["/target/", "web/node_modules", "app/.build", ".next"]  # rebuilt by make

Changed since the last content you trusted:
  …
  [worktree]
  # What a worktree's removal may throw away.
+ regenerable = ["/target/", "web/node_modules", "app/.build", ".next"]  # rebuilt by make
- regenerable = ["/target/", "web/node_modules", "app/.build"]  # rebuilt by make


Trust this file as it is? Its values will count for every session in this repository. [y/N]` },
      { t: { es: "En la ventana: Ajustes ▸ Configuration muestra los tres archivos con su estado, un Open para cada uno (los que faltan se crean desde una plantilla comentada), Trust… en el del repositorio y la tabla de valores con su origen. Se actualiza sola cuando cualquiera de los tres cambia en disco.", en: "In the window: Settings ▸ Configuration shows the three files with their state, an Open for each (a missing one is made from a commented template), Trust… on the repository's, and the table of values with their origin. It refreshes by itself when any of the three changes on disk." }, k: ["⌘ ,"] },
      { t: { es: "Quitar una tabla entera (un perfil, o uno de sus roles) con todas sus claves; el resto del archivo queda igual, comentarios incluidos. Un agente no puede quitar así, en tu archivo global, una tabla que lleve una clave que solo escribe una persona (<code>profile.default</code>, el permiso o los argumentos de un rol):", en: "Remove a whole table (a profile, or one of its roles) with all its keys; the rest of the file stays byte for byte, comments included. An agent can't remove, in your global file, a table that holds a key only a person writes (<code>profile.default</code>, a role's permission or its arguments):" }, c: "jmux settings unset --table profiles.mine --local", o: `removed profiles.mine from the local layer (${H}/payments-api/.jmux/local.toml)` },
      { t: { es: "Tus agentes pueden leerlo (la herramienta <code>jmux_settings</code>, de solo lectura), no cambiarlo.", en: "Your agents can read it (the read-only <code>jmux_settings</code> tool), not change it." } },
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
    es: ["No es un chat: tus agentes corren en su propia interfaz de terminal (TUI), sin capas por encima.", "Solo Claude Code y Codex. No hay un tercer agente.", "No es un motor de flujos: jmux lleva un solo flujo, el plan, y nada más.", "Solo macOS 14+ en Apple Silicon."],
    en: ["Not a chat app: your agents run in their own terminal interface (TUI), with nothing layered over it.", "Only Claude Code and Codex. There's no third agent.", "Not a workflow engine: jmux runs one workflow, the plan, and nothing else.", "macOS 14+ on Apple Silicon only."] } },
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
const DIMS = { "codex": [2000, 1249], "doc-changed": [1203, 909], "doc": [2000, 1249], "files": [2000, 1249], "hero-dark": [2000, 1249], "hero-light": [2000, 1249], "memory": [560, 1000], "putaway": [520, 700], "tell-crop": [1343, 1289], "tell": [2000, 1249], "tree": [520, 780], "usage": [1100, 62], "band": [701, 60], "names": [1343, 271], "search": [1601, 921], "conversation": [1343, 1113], "palette": [1116, 735], "confirm": [1100, 1185], "agents": [1100, 968], "chip": [1100, 823], "dirty": [1100, 1364], "hover": [543, 706], "find": [1063, 875], "project-menu": [588, 638], "agent-menu": [769, 412], "chords": [2000, 1249], "settings-keyboard": [1100, 888], "settings-search": [1100, 888] };
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
