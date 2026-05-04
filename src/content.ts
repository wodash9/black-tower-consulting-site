export const contactHref = 'mailto:hola@etharlia.com?subject=Black%20Tower%20Consulting%20%2F%20sistema%20multiagente&body=Hola%2C%20quiero%20comentar%20una%20posible%20colaboraci%C3%B3n%20con%20Black%20Tower%20Consulting.%0A%0AContexto%3A%0AProceso%2C%20idea%20o%20equipo%20a%20mejorar%3A%0AResultado%20que%20busco%3A';

export const agents = [
  {
    name: 'Seldon',
    profile: 'seldon-ceo',
    role: 'CEO / Orquestador',
    reference: 'Fundación',
    logo: 'SD',
    icon: 'orchestrator',
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
    icon: 'operations',
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
    icon: 'technology',
    accent: '#0f62fe',
    summary: 'Diseña soluciones técnicas simples, fiables y vendibles sin convertir cada idea en una plataforma enorme.',
    does: ['Arquitectura mínima', 'Automatización y software interno', 'Paso claro de concepto a sistema usable'],
    output: 'Solución técnica · Stack · Arquitectura mínima · Riesgos · Validación'
  },
  {
    name: 'Valentine',
    profile: 'valentine-product',
    role: 'Producto',
    reference: 'El juego de Ender',
    logo: 'VL',
    icon: 'product',
    accent: '#ff7eb6',
    summary: 'Evalúa si una idea merece construirse: usuario, dolor, urgencia, alcance mínimo y riesgo de scope creep.',
    does: ['Define alcance inicial', 'Cuestiona la utilidad real', 'Reduce funcionalidades decorativas'],
    output: 'Seguir / pivotar / descartar · Usuario · Dolor · Alcance · Riesgos'
  },
  {
    name: 'Lyra',
    profile: 'lyra-research',
    role: 'Research',
    reference: 'La materia oscura',
    logo: 'LY',
    icon: 'research',
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
    icon: 'marketing',
    accent: '#ff832b',
    summary: 'Transforma capacidades técnicas en narrativa clara, mensajes entendibles, copy y contenido sin humo corporativo.',
    does: ['Posicionamiento', 'Hooks y contenido', 'Traducción técnico → negocio'],
    output: 'Posicionamiento · Mensaje · Hooks · Canal · Copy · Riesgo de percepción'
  },
  {
    name: 'Locke',
    profile: 'locke-sales',
    role: 'Ventas',
    reference: 'The Lies of Locke Lamora',
    logo: 'LK',
    icon: 'sales',
    accent: '#f1c21b',
    summary: 'Convierte una capacidad técnica en una conversación comercial honesta: leads, objeciones y próximos pasos.',
    does: ['Outbound y follow-up', 'Objeciones', 'Propuestas acotadas'],
    output: 'Lead objetivo · Apertura · Objeciones · Cierre · Próximo paso'
  },
  {
    name: 'Columbo',
    profile: 'columbo-qa',
    role: 'QA / Revisión crítica',
    reference: 'Columbo',
    logo: 'CB',
    icon: 'qa',
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
    icon: 'finance',
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
    icon: 'success',
    accent: '#42be65',
    summary: 'Asegura que quien recibe un entregable o automatización entiende cómo usarlo, dónde falla y cómo adoptar el cambio.',
    does: ['Guías de uso', 'Dudas del cliente', 'Seguimiento y adopción'],
    output: 'Estado del cliente · Dudas · Guía · Riesgos de adopción · Seguimiento'
  },
  {
    name: 'Portia',
    profile: 'portia-legal',
    role: 'Legal / Compliance',
    reference: 'El mercader de Venecia',
    logo: 'PT',
    icon: 'legal',
    accent: '#08bdba',
    summary: 'Revisa privacidad, contratos básicos, datos sensibles y señales de stop. No sustituye a un abogado real.',
    does: ['Checklists RGPD/compliance', 'Riesgos de datos', 'Límites legales de automatización'],
    output: 'Riesgos legales · Datos sensibles · Checklist · Recomendación · Stop si aplica'
  }
] as const;

export const capabilityPillars = [
  {
    title: 'Dirección multiagente',
    eyebrow: 'Equipo',
    detail: 'Cada perfil tiene identidad, memoria, reglas y formato de salida. Seldon coordina y el resto interviene cuando aporta valor concreto.',
    tools: ['profiles', 'skills', 'memory', 'subagents']
  },
  {
    title: 'Coordinación visible por Telegram',
    eyebrow: 'Operación',
    detail: 'Las tareas entran por canales visibles y se gestionan con protocolo claro: TASK, DONE, BLOCKED y QA para evitar ruido y cerrar trabajo.',
    tools: ['telegram', 'TASK/DONE/BLOCKED/QA', 'send_message']
  },
  {
    title: 'Conocimiento vivo en Etharlia',
    eyebrow: 'Memoria',
    detail: 'Estrategia, decisiones, perfiles, kanban y notas de desarrollo quedan documentadas para que el sistema aprenda y mantenga continuidad.',
    tools: ['Etharlia', 'wiki/projects', 'development notes']
  },
  {
    title: 'Herramientas conectadas a producción',
    eyebrow: 'Entrega',
    detail: 'El entorno puede leer y escribir repos, ejecutar validaciones, navegar webs, revisar código, programar tareas y desplegar con infraestructura existente.',
    tools: ['terminal', 'browser', 'github', 'cronjobs', 'MCP']
  }
] as const;

export const operatingFlow = [
  { step: '01', title: 'Entrada cualificada', detail: 'Un proceso, idea o entregable entra con contexto, restricciones y resultado esperado.' },
  { step: '02', title: 'Orquestación ejecutiva', detail: 'Seldon define prioridad, responsable, criterio de aceptación y riesgos antes de mover recursos.' },
  { step: '03', title: 'Trabajo especializado', detail: 'El perfil adecuado usa herramientas concretas: repo, navegador, Obsidian, terminal, research o mensajería.' },
  { step: '04', title: 'Revisión crítica', detail: 'Columbo revisa completitud, supuestos, bugs y promesas no validadas antes de presentar el resultado.' },
  { step: '05', title: 'Entrega accionable', detail: 'El cierre es una decisión, commit, nota, sistema, documento o siguiente acción verificable.' }
] as const;

export const showcasedCapabilities = [
  'Diseñar una organización multiagente con roles separados y protocolo común.',
  'Convertir conocimiento disperso en planes, kanban, documentación y decisiones trazables.',
  'Modificar código real, ejecutar validaciones y mantener historial en Git.',
  'Coordinar tareas desde Telegram sin que los perfiles generen ruido entre sí.',
  'Construir automatizaciones, interfaces internas y flujos de IA sobre necesidades concretas.',
  'Revisar entregables con QA antes de enviarlos, publicarlos o usarlos como soporte comercial.'
] as const;

export const explicitLimits = [
  'El alcance se define por entregable: automatización, interfaz, investigación, revisión o documento operativo.',
  'Los perfiles amplifican criterio humano; Ventura sigue validando las prioridades y decisiones importantes.',
  'Las automatizaciones con datos reales requieren revisión de privacidad, permisos y límites técnicos.',
  'Cada capacidad se valida en el contexto del cliente antes de comprometer una implantación crítica.'
] as const;
