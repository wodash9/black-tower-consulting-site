export const contactHref = 'mailto:hola@etharlia.com?subject=Black%20Tower%20Consulting%20%2F%20Hermes%20showcase&body=Hola%2C%20quiero%20ver%20o%20comentar%20el%20entorno%20Hermes%20de%20Black%20Tower%20Consulting.%0A%0AContexto%3A%0AQu%C3%A9%20quiero%20probar%3A';

export const agents = [
  {
    name: 'Seldon',
    profile: 'seldon-ceo',
    role: 'CEO / Orquestador',
    reference: 'Fundación',
    logo: 'SD',
    accent: '#76b900',
    summary: 'Convierte una petición ambigua en prioridades, responsables, riesgos y próxima acción verificable.',
    does: ['Decide foco y secuencia', 'Asigna trabajo al perfil correcto', 'Aprueba entregables con criterio de negocio'],
    output: 'Veredicto · Prioridad · Responsable · Riesgos · Próxima acción'
  },
  {
    name: 'Jeeves',
    profile: 'jeeves-ops',
    role: 'Operaciones',
    reference: 'Jeeves and Wooster',
    logo: 'JV',
    accent: '#9ef01a',
    summary: 'Baja decisiones a ejecución: tareas, dependencias, bloqueos, deadlines y documentación operativa.',
    does: ['Ordena kanban y checkpoints', 'Detecta dependencias', 'Mantiene el sistema sin ruido'],
    output: 'Plan operativo · Responsables · Dependencias · Bloqueos · Checkpoint'
  },
  {
    name: 'Daneel',
    profile: 'daneel-cto',
    role: 'Tecnología',
    reference: 'Robots / Fundación',
    logo: 'DN',
    accent: '#0f62fe',
    summary: 'Diseña soluciones técnicas simples, fiables y vendibles sin convertir cada idea en una plataforma enorme.',
    does: ['Arquitectura mínima', 'Automatización y software interno', 'Separación demo / MVP / producción'],
    output: 'Solución técnica · Stack · Arquitectura mínima · Riesgos · Validación'
  },
  {
    name: 'Valentine',
    profile: 'valentine-product',
    role: 'Producto',
    reference: 'El juego de Ender',
    logo: 'VL',
    accent: '#ff7eb6',
    summary: 'Evalúa si una idea merece construirse: usuario, dolor, urgencia, alcance mínimo y riesgo de scope creep.',
    does: ['Define MVP mínimo', 'Cuestiona la utilidad real', 'Reduce funcionalidades decorativas'],
    output: 'Seguir / pivotar / descartar · Usuario · Dolor · MVP · Riesgos'
  },
  {
    name: 'Lyra',
    profile: 'lyra-research',
    role: 'Research',
    reference: 'La materia oscura',
    logo: 'LY',
    accent: '#33b1ff',
    summary: 'Investiga mercado, competidores, señales y fuentes separando hechos, hipótesis y opinión.',
    does: ['Búsqueda y síntesis', 'Mapas de mercado', 'Señales para producto y ventas'],
    output: 'Hallazgos · Señales · Riesgos · Oportunidades · Fuentes · Recomendación'
  },
  {
    name: 'Kvothe',
    profile: 'kvothe-marketing',
    role: 'Marketing',
    reference: 'Crónica del asesino de reyes',
    logo: 'KV',
    accent: '#ff832b',
    summary: 'Transforma capacidades técnicas en narrativa clara, demos entendibles, copy y contenido sin humo corporativo.',
    does: ['Posicionamiento', 'Hooks y contenido', 'Traducción técnico → negocio'],
    output: 'Posicionamiento · Mensaje · Hooks · Canal · Copy · Riesgo de percepción'
  },
  {
    name: 'Locke',
    profile: 'locke-sales',
    role: 'Ventas',
    reference: 'The Lies of Locke Lamora',
    logo: 'LK',
    accent: '#f1c21b',
    summary: 'Convierte una capacidad o demo en una conversación comercial honesta: leads, objeciones y próximos pasos.',
    does: ['Outbound y follow-up', 'Objeciones', 'Propuestas acotadas'],
    output: 'Lead objetivo · Apertura · Objeciones · Cierre · Próximo paso'
  },
  {
    name: 'Columbo',
    profile: 'columbo-qa',
    role: 'QA / Revisión crítica',
    reference: 'Columbo',
    logo: 'CB',
    accent: '#da1e28',
    summary: 'Busca fallos antes de que lleguen al cliente o a Ventura: claridad, lógica, supuestos, bugs y riesgos.',
    does: ['QA de entregables', 'Lectura incómoda útil', 'Bloqueo si falta evidencia'],
    output: 'Estado · Problemas · Riesgos · Cambios obligatorios · Revisión final'
  },
  {
    name: 'Lipwig',
    profile: 'lipwig-finance',
    role: 'Finanzas',
    reference: 'Mundodisco',
    logo: 'LW',
    accent: '#be95ff',
    summary: 'Protege margen, caja y esfuerzo: precios, coste real, rentabilidad y modelos comerciales sostenibles.',
    does: ['Cálculo de esfuerzo', 'Pricing', 'Riesgo de proyectos mal pagados'],
    output: 'Coste estimado · Precio · Margen · Riesgo financiero · Recomendación'
  },
  {
    name: 'Cordelia',
    profile: 'cordelia-success',
    role: 'Customer Success',
    reference: 'Saga Vorkosigan',
    logo: 'CD',
    accent: '#42be65',
    summary: 'Asegura que quien recibe una demo o automatización entiende cómo usarla, dónde falla y cómo adoptar el cambio.',
    does: ['Guías de uso', 'Dudas del cliente', 'Seguimiento y adopción'],
    output: 'Estado del cliente · Dudas · Guía · Riesgos de adopción · Seguimiento'
  },
  {
    name: 'Portia',
    profile: 'portia-legal',
    role: 'Legal / Compliance',
    reference: 'El mercader de Venecia',
    logo: 'PT',
    accent: '#08bdba',
    summary: 'Revisa privacidad, contratos básicos, datos sensibles y señales de stop. No sustituye a un abogado real.',
    does: ['Checklists RGPD/compliance', 'Riesgos de datos', 'Límites legales de automatización'],
    output: 'Riesgos legales · Datos sensibles · Checklist · Recomendación · Stop si aplica'
  }
] as const;

export const capabilityPillars = [
  {
    title: 'Hermes como runtime multiagente',
    eyebrow: 'Perfiles',
    detail: 'Cada perfil tiene identidad, memoria, reglas y formato de salida. Seldon coordina y el resto responde a tareas concretas.',
    tools: ['profiles', 'skills', 'memory', 'subagents']
  },
  {
    title: 'Telegram como bus visible',
    eyebrow: 'Coordinación',
    detail: 'Las tareas pueden entrar por DM o grupos. La regla operativa es responder solo por mención o tarea clara para evitar ruido entre bots.',
    tools: ['telegram', 'TASK/DONE/BLOCKED/QA', 'send_message']
  },
  {
    title: 'Obsidian como fuente de verdad',
    eyebrow: 'Conocimiento',
    detail: 'Estrategia, decisiones, perfiles, kanban y notas de desarrollo viven en Etharlia para que el sistema no dependa de memoria de chat.',
    tools: ['Etharlia', 'wiki/projects', 'development notes']
  },
  {
    title: 'Herramientas conectadas al trabajo real',
    eyebrow: 'Acción',
    detail: 'El entorno puede leer/escribir archivos, ejecutar tests, navegar webs, generar media, revisar repos, programar tareas y desplegar con infraestructura existente.',
    tools: ['terminal', 'browser', 'github', 'cronjobs', 'MCP']
  }
] as const;

export const operatingFlow = [
  { step: '01', title: 'Brief humano', detail: 'Ventura plantea una intención: demo, web, automatización, investigación o revisión.' },
  { step: '02', title: 'Orquestación', detail: 'Seldon decide prioridad, responsable, riesgos y criterio de aceptación antes de ejecutar.' },
  { step: '03', title: 'Ejecución por perfil', detail: 'El perfil adecuado usa herramientas concretas: repo, navegador, Obsidian, terminal, research o mensajería.' },
  { step: '04', title: 'QA crítico', detail: 'Columbo revisa completitud, supuestos, bugs y promesas no validadas antes de darlo por bueno.' },
  { step: '05', title: 'Entrega trazable', detail: 'Se entrega una decisión, commit, nota, prototipo, documento o siguiente acción verificable.' }
] as const;

export const showcasedCapabilities = [
  'Diseñar una organización multiagente con roles separados y protocolo común.',
  'Convertir notas de Obsidian en páginas, planes, kanban y documentación viva.',
  'Modificar código real, ejecutar validaciones y dejar historial en Git.',
  'Coordinar tareas desde Telegram sin que los bots conversen libremente entre sí.',
  'Crear demos o MVPs pequeños usando las herramientas disponibles en Hermes.',
  'Revisar entregables con un perfil QA antes de enviarlos o publicarlos.'
] as const;

export const explicitLimits = [
  'Esto es una exposición del entorno, no una promesa de consultoría cerrada ni de ROI.',
  'Los perfiles no sustituyen criterio humano: Ventura decide y valida las prioridades importantes.',
  'Las automatizaciones con datos reales requieren revisión de privacidad, permisos y límites técnicos.',
  'No todas las herramientas están siempre conectadas: cada capacidad debe probarse en el contexto concreto.'
] as const;
