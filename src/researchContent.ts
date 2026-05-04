export const researchMeta = {
  updated: '2026-05-04',
  title: 'Mapa de problemáticas empresariales atacables',
  subtitle:
    'Investigación de dolores operativos en nichos concretos donde un sprint de automatización IA puede entregar evidencia, ahorro de coordinación o reducción de errores en pocos días.',
  thesis:
    'La oportunidad no está en vender “IA” de forma abstracta. Está en capturar trabajo que hoy vive en WhatsApp, papel, email, Excel y memoria del encargado, convertirlo en datos verificables y cerrar el loop con alertas, documentos y trazabilidad.',
  caveat:
    'Las fuentes combinan señales internacionales, españolas y sectoriales. Sirven para detectar dolores y preparar entrevistas; cualquier implantación con PRL, fiscalidad, sanidad, transporte o datos personales debe validarse contra normativa local antes de prometer cumplimiento.'
} as const;

export const researchStats = [
  { label: 'Nichos analizados', value: '30+', detail: 'Industria, logística, backoffice, salud, retail, campo y servicios.' },
  { label: 'Oportunidades priorizadas', value: '18', detail: 'Casos suficientemente concretos para una conversación comercial.' },
  { label: 'Ataque recomendado', value: '7 días', detail: 'Auditoría ligera + prototipo funcional sobre un proceso real.' },
  { label: 'Patrón dominante', value: 'Papel → dato', detail: 'OCR, voz, formularios, bots, dashboards y reportes automáticos.' }
] as const;

export const opportunityGroups = [
  {
    group: 'Industria, fabricación y mantenimiento',
    angle: 'Dolor fuerte cuando hay paradas, retrabajos, auditorías o documentación técnica dispersa.',
    opportunities: [
      {
        niche: 'Talleres metalúrgicos y mecanizado',
        pain: 'Órdenes de trabajo, planos, incidencias de calidad y fotos viven en papel o carpetas sueltas.',
        automation: 'Digitalizar parte de producción: foto/OCR del pedido, checklist de calidad, registro de tiempos e incidencia automática por lote.',
        signal: '“No sabemos dónde se va el tiempo”, “calidad nos pide evidencias”, “el operario lo apunta al final”.',
        difficulty: 'Media',
        firstDeliverable: 'Formulario móvil + hoja maestra + PDF de trazabilidad por orden.'
      },
      {
        niche: 'Mantenimiento industrial ligero',
        pain: 'Los técnicos cierran avisos con notas vagas; no hay histórico útil de averías, piezas ni causa raíz.',
        automation: 'Voz/foto a orden de trabajo: IA extrae activo, síntoma, pieza, tiempo, causa y próxima acción.',
        signal: '“Pendiente pieza” sin detalle, llamadas constantes al técnico, facturación retrasada por partes incompletos.',
        difficulty: 'Baja-media',
        firstDeliverable: 'Bot de cierre técnico + resumen para cliente + dashboard de averías recurrentes.'
      },
      {
        niche: 'Pequeñas fábricas con PRL y máquinas compartidas',
        pain: 'Bloqueo/etiquetado, permisos y verificaciones se hacen de memoria o en papel.',
        automation: 'Checklist LOTO guiado por activo con fotos obligatorias, firma técnico-supervisor y PDF de intervención.',
        signal: '“Eso lo sabe Paco”, paradas improvisadas, auditorías PRL, máquinas usadas por varios turnos.',
        difficulty: 'Media',
        firstDeliverable: 'Checklist por máquina + evidencia fotográfica + export para auditoría.'
      },
      {
        niche: 'Almacenes B2B y recambios',
        pain: 'Entradas/salidas se actualizan tarde; inventario real no cuadra y compras se hacen por intuición.',
        automation: 'OCR de albaranes, actualización de stock en Sheet/ERP ligero, mínimos y alerta de reposición.',
        signal: 'Roturas de stock, compras urgentes, “el Excel nunca está al día”, devoluciones por error de preparación.',
        difficulty: 'Media',
        firstDeliverable: 'Captura albarán → stock normalizado → lista de reposición semanal.'
      }
    ]
  },
  {
    group: 'Logística, transporte y operaciones de campo',
    angle: 'El ROI aparece cuando la evidencia permite cobrar antes, reducir disputas o evitar viajes y llamadas.',
    opportunities: [
      {
        niche: 'Flotas pequeñas de reparto local',
        pain: 'Fotos de entrega y albaranes firmados se pierden en WhatsApp; facturación espera a que vuelva la ruta.',
        automation: 'Proof of Delivery con foto geolocalizada, firma, OCR de albarán, incidencia y email automático al cliente.',
        signal: 'Clientes piden pruebas, dispatcher copiando fotos manualmente, cobro bloqueado por papel.',
        difficulty: 'Baja-media',
        firstDeliverable: 'POD móvil + carpeta por pedido + resumen de excepciones.'
      },
      {
        niche: 'Transporte con vehículos comerciales',
        pain: 'Inspecciones pre-ruta y defectos se comunican tarde o no se revisan.',
        automation: 'Checklist DVIR/pre-trip con fotos, severidad, aviso al responsable y orden de taller.',
        signal: 'Averías en ruta, flota vieja, hojas sin revisar, mantenimiento reactivo.',
        difficulty: 'Media',
        firstDeliverable: 'Checklist móvil + panel de defectos abiertos + recordatorios de revisión.'
      },
      {
        niche: 'Construcción y subcontratas',
        pain: 'Partes diarios incompletos; fotos y audios dispersos impiden reclamar extras o defender retrasos.',
        automation: 'Parte diario por WhatsApp/formulario: cuadrilla, horas, avance, incidencias, clima, fotos y PDF diario.',
        signal: '“Los partes se hacen el viernes”, cliente discute extras, fotos en móviles personales.',
        difficulty: 'Baja-media',
        firstDeliverable: 'Bot de parte diario + PDF por obra + carpeta de evidencias.'
      },
      {
        niche: 'Facility services y limpieza multisede',
        pain: 'El cliente reclama zonas no limpiadas; supervisores hacen visitas solo para comprobar.',
        automation: 'QR por zona, check-in/out, foto antes/después, checklist y reporte semanal automático.',
        signal: 'Quejas recurrentes, rotación alta, clientes piden evidencia, rutas en papel.',
        difficulty: 'Baja',
        firstDeliverable: 'QR + checklist móvil + informe de SLA por centro.'
      }
    ]
  },
  {
    group: 'Administración, gestorías y servicios profesionales',
    angle: 'Nichos atractivos porque el trabajo es repetitivo, textual, regulado y lleno de documentos.',
    opportunities: [
      {
        niche: 'Gestorías contables/fiscales pequeñas',
        pain: 'Facturas, tickets y documentos llegan por email/WhatsApp sin clasificar; el equipo persigue al cliente.',
        automation: 'Bandeja documental: OCR, clasificación por cliente/periodo, campos contables, detección de faltantes y recordatorio automático.',
        signal: 'Cierre trimestral caótico, clientes mandan fotos sueltas, duplicados, documentos sin nombre.',
        difficulty: 'Media',
        firstDeliverable: 'Portal/carpeta por cliente + extractor de facturas + checklist de faltantes.'
      },
      {
        niche: 'Despachos legales pequeños',
        pain: 'Emails, anexos y plazos se gestionan manualmente; riesgo de olvidar respuesta o documento.',
        automation: 'Clasificador de emails y documentos: cliente, expediente, plazo, acción requerida y borrador de respuesta no jurídica.',
        signal: 'Bandejas saturadas, expedientes en carpetas manuales, plazos apuntados en calendarios personales.',
        difficulty: 'Media',
        firstDeliverable: 'Inbox triage + registro de plazos + checklist por expediente.'
      },
      {
        niche: 'Consultoras pequeñas y agencias B2B',
        pain: 'Propuestas, actas y seguimientos se rehacen desde cero y se pierden en notas de llamadas.',
        automation: 'De llamada a propuesta: transcripción, resumen, riesgos, tareas, borrador de oferta y follow-up.',
        signal: 'Propuestas tardan días, CRM incompleto, actas no se envían, follow-up irregular.',
        difficulty: 'Baja',
        firstDeliverable: 'Plantilla de propuesta + extractor de reunión + recordatorios comerciales.'
      },
      {
        niche: 'RRHH en pymes y ETTs locales',
        pain: 'CVs, turnos, documentación laboral y ausencias se controlan con emails y Excel.',
        automation: 'Clasificación de CV/documentos, checklist de alta, recordatorios de caducidad y panel de incidencias de personal.',
        signal: 'Documentación incompleta antes de incorporar, ausencias por WhatsApp, turnos rehechos a mano.',
        difficulty: 'Media',
        firstDeliverable: 'Checklist de onboarding + extractor de CV/docs + alertas de caducidad.'
      }
    ]
  },
  {
    group: 'Salud local, retail y hostelería',
    angle: 'Dolores sencillos de explicar: citas perdidas, reseñas, inspecciones, stock, quejas y coordinación de turnos.',
    opportunities: [
      {
        niche: 'Clínicas dentales, fisio y estética',
        pain: 'No-shows, huecos de agenda y llamadas repetidas para confirmar, recordar o reprogramar citas.',
        automation: 'Recordatorios conversacionales, lista de espera, reprogramación asistida y resumen diario de agenda/riesgos.',
        signal: 'Recepción saturada, huecos no recuperados, pacientes que no contestan llamadas.',
        difficulty: 'Baja-media',
        firstDeliverable: 'Bot de confirmación + panel de citas en riesgo + mensajes aprobados.'
      },
      {
        niche: 'Restaurantes, caterings y cocinas de hotel',
        pain: 'Registros de temperatura, limpieza, alérgenos y apertura/cierre se rellenan en papel o al final del turno.',
        automation: 'Checklist por turno con foto/OCR de termómetro, alertas de faltantes y PDF semanal para inspección.',
        signal: 'Carpetas HACCP en papel, registros idénticos, inspecciones recientes, varios turnos.',
        difficulty: 'Baja-media',
        firstDeliverable: 'Checklist digital + alertas + export sanitario.'
      },
      {
        niche: 'Hoteles pequeños y apartamentos turísticos',
        pain: 'Recepción, limpieza y mantenimiento coordinan habitaciones por llamadas/WhatsApp.',
        automation: 'QR por habitación: sucia/en limpieza/lista/bloqueada, incidencia con foto y ticket de mantenimiento.',
        signal: 'Check-ins tardíos, recepción preguntando estado, averías olvidadas, malas reseñas.',
        difficulty: 'Media',
        firstDeliverable: 'Panel de habitaciones + tickets por incidencia + reporte diario.'
      },
      {
        niche: 'Comercio local con Google/WhatsApp/Instagram',
        pain: 'Mensajes, reseñas y reclamaciones llegan por canales distintos y se responden tarde.',
        automation: 'Bandeja única: clasificación, borrador de respuesta, tarea interna y recordatorio hasta cierre.',
        signal: 'Dueño responde por la noche, reseñas sin contestar, quejas repetidas, no hay CRM.',
        difficulty: 'Baja-media',
        firstDeliverable: 'Inbox ligero + respuestas sugeridas + tablero de reclamaciones.'
      }
    ]
  },
  {
    group: 'Agroalimentario y cooperativas',
    angle: 'La trazabilidad y los registros son vendibles porque conectan cumplimiento, cliente final y liquidaciones.',
    opportunities: [
      {
        niche: 'Cooperativas y explotaciones agrícolas',
        pain: 'Aplicaciones fitosanitarias se anotan después; faltan parcela, dosis, clima, operario o intervalo.',
        automation: 'Registro por voz: IA estructura campos obligatorios, valida faltantes y exporta PDF/CSV.',
        signal: 'Cuaderno de campo en papel, varios aplicadores, auditorías, errores de fechas/dosis.',
        difficulty: 'Media',
        firstDeliverable: 'Bot de voz + cuaderno exportable + alertas de reentrada/cosecha.'
      },
      {
        niche: 'Centrales hortofrutícolas y pequeños empacadores',
        pain: 'Tickets de báscula, productor, parcela, lote y calidad quedan en papeles separados.',
        automation: 'QR por lote, OCR de ticket, formulario de calidad y exportación de trazabilidad.',
        signal: 'Excel maestro manual, auditorías de cliente, retrasos en liquidaciones, recall difícil.',
        difficulty: 'Media-alta',
        firstDeliverable: 'Flujo recepción-lote-calidad + búsqueda por lote/productor.'
      }
    ]
  }
] as const;

export const priorityPlays = [
  {
    title: 'Partes diarios de obra por WhatsApp',
    why: 'Dolor evidente, comprador lo entiende en 30 segundos y el prototipo se valida con una obra real.',
    buyer: 'Gerente de subcontrata / jefe de obra',
    wedge: '“Convierte fotos y audios en un PDF diario defendible”.'
  },
  {
    title: 'Proof of Delivery para flotas pequeñas',
    why: 'Impacto directo en cobro, disputas y atención al cliente; no requiere integración profunda para empezar.',
    buyer: 'Responsable de operaciones / dueño de flota',
    wedge: '“Cada entrega queda probada y facturable el mismo día”.'
  },
  {
    title: 'Gestoría: documentos faltantes y facturas por cliente',
    why: 'Dolor recurrente trimestral, mucho documento repetitivo y alto coste de coordinación humana.',
    buyer: 'Socio de gestoría / responsable contable',
    wedge: '“Deja de perseguir tickets: el sistema dice qué falta y a quién pedirlo”.'
  },
  {
    title: 'QR + evidencias para limpieza/facility services',
    why: 'Implementación simple, valor visible para cliente final y buen encaje con reportes automáticos.',
    buyer: 'Empresa de limpieza / facility manager',
    wedge: '“Menos discusiones: cada zona tiene prueba y SLA”.'
  },
  {
    title: 'Citas en riesgo para clínicas locales',
    why: 'No-shows y llamadas de recepción son dolores cotidianos; se puede pilotar sin tocar historia clínica.',
    buyer: 'Director de clínica / recepción',
    wedge: '“Recupera huecos de agenda antes de que se pierdan”.'
  },
  {
    title: 'Registros fitosanitarios por voz',
    why: 'Nicho menos saturado, dolor regulatorio claro y diferenciación frente a automatizaciones genéricas.',
    buyer: 'Cooperativa / explotación agrícola',
    wedge: '“Habla desde el campo y deja el cuaderno listo”.'
  }
] as const;

export const automationPatterns = [
  'Voz o WhatsApp → registro estructurado',
  'Foto/OCR → dato validado',
  'Checklist móvil → evidencia auditable',
  'Email/documento → clasificación + acción requerida',
  'Incidencia → ticket + responsable + seguimiento',
  'Datos dispersos → PDF/CSV/reporte para cliente o auditoría'
] as const;

export const sourceLinks = [
  { label: 'Deloitte — Manufacturing Industry Outlook', url: 'https://www2.deloitte.com/us/en/insights/industry/manufacturing/manufacturing-industry-outlook.html' },
  { label: 'MHI — Supply Chain reports', url: 'https://www.mhi.org/publications/report' },
  { label: 'IRS — Recordkeeping for small businesses', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping' },
  { label: 'AEAT — Sistemas Informáticos de Facturación y VERI*FACTU', url: 'https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu.html' },
  { label: 'IBM — What is a CMMS?', url: 'https://www.ibm.com/think/topics/cmms' },
  { label: 'Fieldwire by Hilti — Construction daily report risks', url: 'https://www.fieldwire.com/blog/construction-daily-report-form-excel/' },
  { label: 'OSHA — Top 10 cited standards', url: 'https://www.osha.gov/top10citedstandards' },
  { label: 'OSHA — Control of Hazardous Energy / LOTO', url: 'https://www.osha.gov/control-hazardous-energy' },
  { label: 'FDA — Food Code 2022', url: 'https://www.fda.gov/food/fda-food-code/food-code-2022' },
  { label: 'FDA — FSMA food traceability rule', url: 'https://www.fda.gov/food/food-safety-modernization-act-fsma/fsma-final-rule-requirements-additional-traceability-records-certain-foods' },
  { label: 'EPA — Agricultural Worker Protection Standard', url: 'https://www.epa.gov/pesticide-worker-safety/agricultural-worker-protection-standard-wps' },
  { label: 'ATRI — Operational Costs of Trucking 2024', url: 'https://truckingresearch.org/2024/06/an-analysis-of-the-operational-costs-of-trucking-2024-update/' },
  { label: 'Cornell LII — 49 CFR §396.11 Driver vehicle inspection reports', url: 'https://www.law.cornell.edu/cfr/text/49/396.11' },
  { label: 'BrightLocal — Local Consumer Review Survey 2025', url: 'https://www.brightlocal.com/research/local-consumer-review-survey-2025/' },
  { label: 'NRF — National Retail Security Survey 2023', url: 'https://www.nrf.com/research/national-retail-security-survey-2023' },
  { label: 'Health Policy — No-shows in appointment scheduling, systematic review', url: 'https://doi.org/10.1016/j.healthpol.2018.02.002' },
  { label: 'American Journal of Medicine — Appointment reminder systems', url: 'https://doi.org/10.1016/j.amjmed.2009.11.022' },
  { label: 'NIST — Small Business Cybersecurity guidance', url: 'https://www.nist.gov/itl/smallbusinesscyber' }
] as const;
