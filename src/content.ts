export const contactHref = 'mailto:hola@etharlia.com?subject=Diagn%C3%B3stico%20Black%20Tower%20Consulting&body=Hola%2C%20quiero%20revisar%20un%20proceso%20repetitivo.%0A%0AEmpresa%3A%0AProceso%20a%20revisar%3A%0AHerramientas%20actuales%3A%0ADisponibilidad%3A';

export const processCases = [
  'Pedidos que llegan por email y acaban en Excel o ERP a mano.',
  'Albaranes, facturas o PDFs revisados uno por uno.',
  'Incidencias logísticas que se clasifican tarde o se pierden entre correos.',
  'Reportes internos montados copiando datos de varias fuentes.',
  'Consultas repetidas de clientes o proveedores con respuestas parecidas.',
  'Documentación técnica que el equipo busca cada semana en carpetas distintas.'
] as const;

export const sprintSteps = [
  { day: 'Día 1', title: 'Mapa del proceso', detail: 'Entradas, salidas, herramientas, personas y fricciones reales.' },
  { day: 'Día 2', title: 'Selección del caso', detail: 'Elegimos el flujo con mejor equilibrio entre impacto, viabilidad y rapidez.' },
  { day: 'Días 3–5', title: 'Prototipo', detail: 'Construimos una primera versión funcional con automatización, IA o software simple según encaje.' },
  { day: 'Día 6', title: 'Validación', detail: 'Prueba guiada con tu responsable operativo y ajustes de límites.' },
  { day: 'Día 7', title: 'Handoff', detail: 'Demo, documentación y recomendación: escalar, ajustar o descartar.' }
] as const;

export const deliverables = [
  'Mapa breve del proceso actual.',
  'Identificación de cuellos de botella y reglas del flujo.',
  'Prototipo funcional o demo operativa sobre ejemplos controlados.',
  'Documento de límites: qué funciona, qué no y qué exige revisión humana.',
  'Recomendación técnica y comercial para una siguiente fase si merece la pena.'
] as const;

export const fitItems = [
  'Proceso repetitivo con reglas relativamente claras.',
  'Emails, Excel, PDFs, documentos o herramientas internas generando trabajo manual.',
  'Un responsable operativo disponible para validar en 24–48h.',
  'Voluntad de empezar por una prueba pequeña antes de comprar una implantación.'
] as const;

export const noFitItems = [
  'Implantación completa o crítica en producción en 7 días.',
  'Automatizar decisiones sensibles sin humano en el loop.',
  'Proyectos sin ejemplos reales o anonimizados.',
  'Garantías de ROI, ahorro fijo o cumplimiento legal sin auditoría.'
] as const;
