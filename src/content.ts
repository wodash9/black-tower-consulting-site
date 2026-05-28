export const contactHref = 'mailto:hola@etharlia.com?subject=Diagn%C3%B3stico%20MVP%20Black%20Tower%20Consulting&body=Hola%2C%20quiero%20agendar%20un%20diagn%C3%B3stico%20MVP.%0A%0AIdea%20o%20producto%3A%0AUsuario%20principal%3A%0AObjetivo%20a%20validar%3A%0APlazo%20ideal%3A';

export const heroProofPoints = [
  'MVP funcional en 2–6 semanas',
  'Scope cerrado antes de construir',
  'UX/UI premium, backend, deploy y analytics',
  'Roadmap para iterar con evidencia real'
] as const;

export const problemSignals = [
  'Ideas con potencial que se quedan bloqueadas por falta de equipo técnico.',
  'Productos sobredimensionados antes de validar demanda real.',
  'Demos comerciales que necesitan convertirse en producto usable.',
  'Equipos internos saturados o sin velocidad para experimentar.',
  'Inversores o clientes que quieren ver algo más sólido que una presentación.'
] as const;

export const comparisonRows = [
  { label: 'Alcance', traditional: 'Feature list inflada', blackTower: 'Hipótesis y flujo crítico' },
  { label: 'Tiempo', traditional: '3–6 meses sin señales', blackTower: '2–6 semanas hasta usuarios' },
  { label: 'Entrega', traditional: 'Pantallas o código aislado', blackTower: 'Producto desplegado y medible' },
  { label: 'Decisión', traditional: 'Opiniones y retrasos', blackTower: 'Feedback, datos y próximos pasos' }
] as const;

export const audiences = [
  {
    title: 'Founders en etapa temprana',
    detail: 'Para validar una idea, enseñar tracción inicial y llegar a usuarios reales antes de levantar capital o montar un equipo completo.',
    outcomes: ['Producto funcional', 'Landing o adquisición', 'Demo para inversores', 'Métricas iniciales']
  },
  {
    title: 'Empresas con nueva línea digital',
    detail: 'Para probar un portal, herramienta interna, servicio digital o automatización sin comprometer meses del roadmap interno.',
    outcomes: ['MVP alineado a negocio', 'Integraciones esenciales', 'Feedback de usuarios', 'Base para escalar']
  },
  {
    title: 'Equipos comerciales con oportunidad concreta',
    detail: 'Para convertir una propuesta o piloto en una experiencia funcional que ayude a cerrar clientes y demostrar valor.',
    outcomes: ['Demo interactiva', 'Flujo operativo', 'Producto presentable', 'Salida rápida']
  }
] as const;

export const mvpFormats = [
  'SaaS iniciales y portales B2B',
  'Dashboards operativos y paneles internos',
  'Marketplaces de primera versión',
  'Apps web para validar nuevos servicios',
  'Portales de clientes o proveedores',
  'Prototipos funcionales para fundraising',
  'Automatizaciones con interfaz de usuario',
  'Integraciones entre sistemas existentes'
] as const;

export const processSteps = [
  {
    step: '01',
    title: 'Discovery estratégico',
    duration: '2–4 días',
    detail: 'Definimos usuario principal, hipótesis de negocio, alcance esencial y criterios de éxito.',
    deliverables: ['Brief de producto', 'Hipótesis a validar', 'User journeys', 'Priorización']
  },
  {
    step: '02',
    title: 'Blueprint de producto',
    duration: '3–5 días',
    detail: 'Convertimos la idea en arquitectura de producto: pantallas clave, stack técnico y backlog cerrado.',
    deliverables: ['Wireframes', 'Arquitectura funcional', 'Plan de sprints', 'Métricas iniciales']
  },
  {
    step: '03',
    title: 'Build sprint',
    duration: '2–4 semanas',
    detail: 'Diseñamos y desarrollamos el flujo que valida el negocio con revisiones visibles cada semana.',
    deliverables: ['Interfaz premium', 'Backend/API', 'Base de datos', 'Integraciones']
  },
  {
    step: '04',
    title: 'Launch & learning',
    duration: '3–7 días',
    detail: 'Preparamos producción, QA, medición, documentación y plan de aprendizaje post-lanzamiento.',
    deliverables: ['Deploy', 'Analytics', 'QA funcional', 'Roadmap de iteración']
  }
] as const;

export const packages = [
  {
    name: 'MVP Scope Sprint',
    timing: '3–5 días',
    description: 'Para ordenar una idea antes de construir y salir con un alcance defendible.',
    includes: ['Workshop de producto', 'Hipótesis y usuario', 'Flujos principales', 'Roadmap técnico', 'Estimación de esfuerzo'],
    cta: 'Definir alcance',
    featured: false
  },
  {
    name: 'MVP Launch',
    timing: '2–6 semanas',
    description: 'Para diseñar, construir y lanzar una primera versión funcional lista para validar.',
    includes: ['Discovery', 'UX/UI', 'Full-stack', 'Deploy', 'QA', 'Analytics básico', 'Handoff'],
    cta: 'Lanzar mi MVP',
    featured: true
  },
  {
    name: 'MVP Growth Partner',
    timing: 'Mensual',
    description: 'Para equipos que ya lanzaron y necesitan iterar con velocidad después de los primeros datos.',
    includes: ['Priorización semanal', 'Nuevas funcionalidades', 'Optimización UX', 'Automatizaciones', 'Soporte técnico'],
    cta: 'Escalar producto',
    featured: false
  }
] as const;

export const differentiators = [
  { title: 'Estrategia antes que código', detail: 'Definimos qué debe probar el MVP y qué no vale la pena construir todavía.' },
  { title: 'Diseño premium desde la primera versión', detail: 'Mínimo no significa improvisado: la experiencia debe transmitir confianza a clientes e inversores.' },
  { title: 'Desarrollo rápido, pero sostenible', detail: 'Creamos una base técnica clara para iterar sin rehacerlo todo tras la validación inicial.' },
  { title: 'Comunicación ejecutiva', detail: 'Reportamos avances, decisiones y riesgos en lenguaje de negocio, no con ruido técnico.' },
  { title: 'Orientación a lanzamiento', detail: 'El objetivo no es entregar código: es poner un producto en manos de usuarios reales.' }
] as const;

export const successMetrics = [
  'Tiempo hasta primer usuario real',
  'Conversaciones comerciales generadas',
  'Activación del flujo principal',
  'Conversión landing → demo o registro',
  'Feedback cualitativo de usuarios',
  'Señales de disposición de pago'
] as const;

export const includedItems = [
  'Definición del problema y usuario objetivo',
  'Priorización de funcionalidades esenciales',
  'UX/UI del flujo principal',
  'Frontend, backend y base de datos',
  'Autenticación e integraciones críticas si aplican',
  'Panel de administración básico si aporta validación',
  'Deploy en producción',
  'Analytics y eventos principales',
  'QA funcional y documentación de handoff',
  'Roadmap de siguientes iteraciones'
] as const;

export const faqs = [
  {
    question: '¿Qué significa MVP para Black Tower?',
    answer: 'Un producto mínimo valioso: la versión más pequeña que permite validar una hipótesis real de negocio con usuarios, clientes o stakeholders.'
  },
  {
    question: '¿En cuánto tiempo podéis lanzar?',
    answer: 'Normalmente entre 2 y 6 semanas, dependiendo del alcance. Si la idea aún está difusa, empezamos con un Scope Sprint.'
  },
  {
    question: '¿El MVP queda listo para usuarios reales?',
    answer: 'Sí. El objetivo es entregar una versión funcional, desplegada y usable, no solo un prototipo visual.'
  },
  {
    question: '¿Podéis trabajar con un equipo técnico existente?',
    answer: 'Sí. Podemos operar como equipo externo completo o colaborar con producto, diseño, frontend, backend o arquitectura.'
  }
] as const;
