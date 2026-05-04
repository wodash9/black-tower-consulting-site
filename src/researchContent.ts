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
  { label: 'Nichos analizados', value: '60+', detail: 'Industria, logística, backoffice, salud, retail, campo, servicios técnicos y verticales regulados.' },
  { label: 'Oportunidades priorizadas', value: '54', detail: '18 líneas de oportunidad + 36 microproblemas listos para entrevista.' },
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


export const detailedProblemGroups = [
  {
    group: 'Industria: problemas de línea, calidad y mantenimiento',
    description: 'Casos donde el comprador no necesita una plataforma: necesita capturar el punto exacto donde se pierde margen.',
    problems: [
      {
        microNiche: 'Mecanizado CNC — primera pieza tras cambio de herramienta',
        specificProblem: 'Scrap o retrabajo en la primera pieza después de cambiar plaquita, broca o corrector; se registra tarde como rechazo genérico.',
        buyerTrigger: 'Jefe de taller tras ver piezas caras rechazadas o entregas retrasadas por ajustes repetidos.',
        capturedData: 'Orden, máquina, herramienta, vida útil, corrector, medición inicial, foto, operario y motivo de ajuste.',
        sevenDayPrototype: 'Tablet/formulario de cambio de herramienta + checklist de primera pieza + histórico de desviaciones por herramienta/máquina.',
        concreteWedge: 'No vende OEE: vende “no vuelvas a tirar la primera pieza tras cambiar herramienta”.'
      },
      {
        microNiche: 'Inyección plástica — rebaba o pieza corta por cavidad',
        specificProblem: 'Defectos mezclados por molde multicavidad; calidad sabe que hay rechazo, pero no si viene de cavidad 4, lote de resina o parámetro concreto.',
        buyerTrigger: 'Responsable de calidad cuando el cliente devuelve lotes por defectos repetidos no aislados.',
        capturedData: 'Molde, cavidad, lote de material, temperatura, presión, tiempo de ciclo, foto del defecto y turno.',
        sevenDayPrototype: 'Registro de rechazo por cavidad + dashboard cavidad/molde/lote + alerta de cavidad reincidente.',
        concreteWedge: 'Baja del “hay defectos” al “esta cavidad está contaminando el lote”.'
      },
      {
        microNiche: 'Packaging alimentario/cosmético — bobina o etiqueta incorrecta',
        specificProblem: 'Tras cambio de formato se monta una bobina, etiqueta, idioma o EAN incorrecto; se detecta cuando ya hay producto empaquetado.',
        buyerTrigger: 'Jefe de línea tras reetiquetado masivo, rechazo de retailer o reclamación por código erróneo.',
        capturedData: 'SKU, orden, bobina, lote de etiqueta, escaneo EAN, foto del envase, versión aprobada y operario.',
        sevenDayPrototype: 'Checklist de arranque con escaneo obligatorio de etiqueta/bobina y comparación contra receta de la orden.',
        concreteWedge: 'Evita el error de cambio de formato, no “digitaliza packaging”.'
      },
      {
        microNiche: 'Calderería — piezas perdidas entre corte, plegado, soldadura y pintura',
        specificProblem: 'Subconjuntos cortados o plegados desaparecen físicamente; se recortan piezas duplicadas y se bloquea montaje.',
        buyerTrigger: 'Gerente de planta cuando los pedidos urgentes se paran por “no encuentro la pieza”.',
        capturedData: 'QR de pieza, plano, pedido, operación actual, ubicación, operario, foto y estado por estación.',
        sevenDayPrototype: 'Etiquetas QR + escaneo en cada estación + kanban WIP por pedido y operación.',
        concreteWedge: 'Responde “dónde está esta pieza concreta”, no “control de producción” genérico.'
      },
      {
        microNiche: 'Mueble a medida — canto/color incorrecto en piezas nesting',
        specificProblem: 'Piezas casi iguales se cantean con canto o color incorrecto y el error aparece en montaje/embalaje.',
        buyerTrigger: 'Responsable de producción al aumentar reposiciones de piezas de cocina/armario.',
        capturedData: 'ID pieza, pedido, tablero, color, tipo de canto, operación, escaneo en canteadora y embalaje.',
        sevenDayPrototype: 'QR por pieza + validación de canto esperado antes de canteadora + lista de excepciones.',
        concreteWedge: 'Ataca tablero-canto-pieza, el fallo típico del mueble a medida.'
      },
      {
        microNiche: 'Confección laboral — bundles de tallas mezclados',
        specificProblem: 'Paquetes de piezas por talla/color se mezclan entre operaciones; el pedido sale incompleto o cruzado.',
        buyerTrigger: 'Responsable de taller cuando uniformes multi-talla llegan con faltantes o tallas cambiadas.',
        capturedData: 'Pedido, talla, color, bundle, operación, operario, defecto, foto y estado.',
        sevenDayPrototype: 'QR por bundle + escaneo por operación + alerta si entra en operación/talla incorrecta.',
        concreteWedge: 'Controla el paquete físico por talla/color; no intenta implantar un ERP textil.'
      },
      {
        microNiche: 'Alimentación — cambio de producto con alérgeno',
        specificProblem: 'La limpieza y liberación de línea entre producto con alérgeno y sin alérgeno se documenta tarde o incompleta.',
        buyerTrigger: 'Responsable de calidad tras auditoría, reclamación o riesgo de etiquetado/alérgeno.',
        capturedData: 'Receta, lote anterior/siguiente, alérgenos, limpieza, validación visual/ATP, hora, operario y firma.',
        sevenDayPrototype: 'Asistente de cambio de producto que exige evidencias antes de arrancar y genera PDF de liberación.',
        concreteWedge: 'Foco en una transición crítica de alérgeno, no “HACCP digital” completo.'
      },
      {
        microNiche: 'Frío industrial — cámara que no recupera temperatura',
        specificProblem: 'Puertas abiertas, evaporadores helados o compresor ciclando se detectan cuando ya hay alarma o pérdida de género.',
        buyerTrigger: 'Operaciones/mantenimiento tras subida de factura eléctrica o producto comprometido.',
        capturedData: 'Temperatura, humedad, aperturas, consumo, horas compresor, desescarche, alarmas y cámara.',
        sevenDayPrototype: 'Panel por cámara + alerta “puerta abierta + compresor continuo + temperatura no recupera”.',
        concreteWedge: 'Cruza recuperación térmica por cámara, no solo muestra sensores.'
      },
      {
        microNiche: 'Calidad dimensional — informe desde plano PDF',
        specificProblem: 'Inspectores copian cotas a Excel y generan informes de primera pieza con errores manuales.',
        buyerTrigger: 'Calidad cuando cliente exige trazabilidad dimensional o rechaza informes incompletos.',
        capturedData: 'Plano PDF, cota crítica, medición, instrumento, lote, operario, OK/NOK y foto.',
        sevenDayPrototype: 'Marcado de cotas + captura de mediciones + informe PDF automático por orden/lote.',
        concreteWedge: 'Automatiza cota-medición-informe; no “gestión documental”.'
      },
      {
        microNiche: 'Recambios industriales — equivalencias de rodamientos, correas y sensores',
        specificProblem: 'La misma pieza aparece con referencias distintas; compras duplica stock y mantenimiento se queda sin recambio crítico.',
        buyerTrigger: 'Compras/mantenimiento tras parada por una pieza barata no disponible.',
        capturedData: 'Descripción proveedor, referencia, alias, máquina, foto placa, consumo, plazo y criticidad.',
        sevenDayPrototype: 'Normalizador de referencias + catálogo de equivalencias + mínimos sugeridos por criticidad.',
        concreteWedge: 'Limpia alias reales de recambios, no inventario abstracto.'
      },
      {
        microNiche: 'Carretillas — casi accidentes en cruces peatonales',
        specificProblem: 'Near misses se comentan verbalmente; no queda patrón por zona, turno, carretilla o acción correctiva.',
        buyerTrigger: 'EHS tras golpe a estantería, susto con peatón o auditoría interna.',
        capturedData: 'Zona, turno, carretilla, tipo de riesgo, foto/vídeo corto, causa, acción, responsable y fecha.',
        sevenDayPrototype: 'QR por zona + reporte móvil + mapa de calor + seguimiento de acciones vencidas.',
        concreteWedge: 'Foco en interacción carretilla-zona-turno; no software PRL completo.'
      },
      {
        microNiche: 'Pintura/lacado — retrabajos por color, polvo o piel de naranja',
        specificProblem: 'Defectos de acabado se anotan como “repasar”; no se relacionan con cabina, lote de pintura, humedad o turno.',
        buyerTrigger: 'Responsable de producción cuando el cuello de botella es repintar piezas ya fabricadas.',
        capturedData: 'Color, lote pintura, cabina, pieza, defecto, humedad/temperatura, operario, foto y retrabajo.',
        sevenDayPrototype: 'Registro de defecto visual + clasificación IA asistida + dashboard por color/cabina/turno.',
        concreteWedge: 'Ataca una causa de margen perdida en acabado, no calidad genérica.'
      }
    ]
  },
  {
    group: 'Campo, logística y servicios técnicos',
    description: 'Casos donde la evidencia en ruta evita disputas, segundas visitas, trabajos rechazados o costes ocultos.',
    problems: [
      {
        microNiche: 'Frío comercial — fotos de termómetro en carnicerías y obradores',
        specificProblem: 'Temperaturas diarias se apuntan en papel o fotos sueltas; en inspección no hay histórico ordenado.',
        buyerTrigger: 'Dueño tras inspección sanitaria, avería de cámara o pérdida de género.',
        capturedData: 'Cámara, hora, temperatura, producto, foto termómetro, incidencia y actuación.',
        sevenDayPrototype: 'Formulario móvil + OCR de termómetro + alertas + PDF mensual por cámara.',
        concreteWedge: 'Evidencia diaria por cámara, no mantenimiento genérico.'
      },
      {
        microNiche: 'Paquetería B2B — entrega parcial a tiendas/farmacias',
        specificProblem: 'Cliente reclama bultos faltantes; albarán firmado no prueba cuántas cajas llegaron ni a qué hora.',
        buyerTrigger: 'Operaciones cuando suben disputas de entregas parciales.',
        capturedData: 'Expedición, bultos, foto, firma, GPS, hora, receptor e incidencia.',
        sevenDayPrototype: 'Escaneo por bulto + foto/firma + POD automático al cliente y backoffice.',
        concreteWedge: 'Prueba “4 de 5 cajas a las 10:42”, no tracking genérico.'
      },
      {
        microNiche: 'Reparto capilar — ventanas horarias reales',
        specificProblem: 'Rutas se montan en Excel y los conductores cambian orden por WhatsApp; clientes cerrados generan entregas fallidas.',
        buyerTrigger: 'Jefe de tráfico por horas extra y reintentos.',
        capturedData: 'Dirección, ventana, duración descarga, prioridad, conductor, vehículo e incidencia.',
        sevenDayPrototype: 'Importador Excel + ruta sugerida + enlace móvil conductor + replanificación asistida.',
        concreteWedge: 'Reduce fallos por ventana horaria, no optimización académica.'
      },
      {
        microNiche: 'SAT hostelería — segunda visita por falta de repuesto',
        specificProblem: 'Técnico llega sin historial o sin pieza probable para lavavajillas, horno, cafetera o frío comercial.',
        buyerTrigger: 'Responsable SAT cuando sube la segunda visita no facturable.',
        capturedData: 'Modelo, nº serie, avería, fotos, histórico, piezas usadas, tiempo y solución.',
        sevenDayPrototype: 'Bot de recepción de avería + ficha IA del equipo + checklist + sugerencia de repuestos.',
        concreteWedge: 'Ataca “llevar la pieza correcta”, no partes digitales genéricos.'
      },
      {
        microNiche: 'Ascensores — reporte mensual entendible para comunidades',
        specificProblem: 'Avisos repetidos por puertas/paradas; administrador no entiende qué se hizo ni qué conviene presupuestar.',
        buyerTrigger: 'Mantenedor que quiere bajar llamadas y justificar preventivos.',
        capturedData: 'Ascensor, revisión, componente, anomalía, foto, recomendación y próxima acción.',
        sevenDayPrototype: 'Checklist móvil + informe automático por comunidad + ranking de ascensores reincidentes.',
        concreteWedge: 'Evidencia por ascensor y componente, no CMMS general.'
      },
      {
        microNiche: 'Extintores — caducidades y certificados por local',
        specificProblem: 'Fechas, etiquetas y certificados en papel; se pierden recargas/retimbrados y renovaciones.',
        buyerTrigger: 'Mantenedor RIPCI con muchos locales pequeños.',
        capturedData: 'Ubicación, nº extintor, tipo, kg, presión, foto etiqueta, revisión y próxima caducidad.',
        sevenDayPrototype: 'QR por extintor + checklist + calendario de vencimientos + certificado PDF.',
        concreteWedge: 'Gestiona “este CO₂ vence en marzo”, no mantenimiento genérico.'
      },
      {
        microNiche: 'Vending — reposición por huecos visibles',
        specificProblem: 'Rutas fijas dejan máquinas vacías y otras con producto caducado porque no hay telemetría.',
        buyerTrigger: 'Operador al ver ventas perdidas o producto caducado.',
        capturedData: 'Foto frontal, SKU, huecos, caducidades, efectivo, ubicación e incidencias.',
        sevenDayPrototype: 'Foto + estimación de huecos + carga sugerida por máquina + ruta priorizada.',
        concreteWedge: 'Responde “qué cargo mañana en esta máquina”.'
      },
      {
        microNiche: 'Lavandería industrial — sacos de hotel con faltantes',
        specificProblem: 'Disputas por kilos, manteles o sábanas faltantes entre recogida y entrega.',
        buyerTrigger: 'Gerente de lavandería tras reclamaciones de hotel/restaurante/residencia.',
        capturedData: 'Cliente, saco/jaula, kg, tipo prenda, unidades, foto, entrega e incidencia.',
        sevenDayPrototype: 'QR por saco + foto/peso recogida + conciliación entrega vs recogida.',
        concreteWedge: 'Resuelve “faltan 12 manteles del saco 438”.'
      },
      {
        microNiche: 'Residuos — justificante de recogida de aceite/cartón/madera',
        specificProblem: 'Partes manuales y fotos sueltas dificultan cuadrar kg/litros por productor.',
        buyerTrigger: 'Gestor que necesita trazabilidad y justificantes rápidos.',
        capturedData: 'Productor, residuo, LER, kg/litros, contenedor, foto, GPS, conductor y matrícula.',
        sevenDayPrototype: 'Formulario móvil + justificante PDF + panel de recogidas pendientes + export CSV.',
        concreteWedge: 'Captura LER/kg/foto/productor en cada recogida.'
      },
      {
        microNiche: 'Alquiler maquinaria — devolución con daños o accesorios faltantes',
        specificProblem: 'Discusiones por horómetro, combustible, cazo, cargador o golpe no registrado.',
        buyerTrigger: 'Dueño del parque cuando aumentan reparaciones no cobradas.',
        capturedData: 'Máquina, cliente, fotos 360º, horómetro, combustible, accesorios, firma y ubicación.',
        sevenDayPrototype: 'Checklist entrega/devolución + comparación de fotos + cargo sugerido.',
        concreteWedge: 'Evidencia antes/después de cada máquina concreta.'
      },
      {
        microNiche: 'Instalación solar — visita técnica incompleta',
        specificProblem: 'Faltan fotos de cubierta, cuadro, contador o sombras; ingeniería pide segunda visita.',
        buyerTrigger: 'Instalador solar que pierde margen por presupuestos mal medidos.',
        capturedData: 'CUPS, cubierta, orientación, cuadro, contador, medidas, sombras, obstáculos y fotos.',
        sevenDayPrototype: 'Checklist móvil + detección de fotos faltantes + carpeta automática para ingeniería/comercial.',
        concreteWedge: 'Evita presupuestos erróneos por datos incompletos.'
      },
      {
        microNiche: 'Telecom instaladores — cierre rechazado por falta de foto/test',
        specificProblem: 'El operador rechaza trabajos FTTH/ICT porque faltan fotos de CTO, roseta, potencia o canalización.',
        buyerTrigger: 'Coordinador de contratas con rechazos de cierre y pagos retrasados.',
        capturedData: 'Orden, edificio, CTO, puerto, potencia óptica, fotos antes/después, firma y test.',
        sevenDayPrototype: 'Checklist por tipo de instalación + validación de fotos obligatorias + informe de cierre.',
        concreteWedge: 'Ataca rechazos documentales que bloquean cobro.'
      }
    ]
  },
  {
    group: 'Backoffice regulado y verticales locales',
    description: 'Casos donde el problema es un expediente concreto: documentos, firmas, plazos y traspaso a sistemas oficiales o sectoriales.',
    problems: [
      {
        microNiche: 'Gestorías — alta de autónomo incompleta',
        specificProblem: 'DNI, epígrafe, domicilio, IBAN, mutua y fecha inicio llegan por mensajes sueltos; falta algo y se retrasa el alta.',
        buyerTrigger: 'Socio de gestoría con muchas altas mensuales o campañas de nuevos autónomos.',
        capturedData: 'DNI/NIE, domicilio, actividad, fecha inicio, IBAN, mutua, régimen, epígrafe y autorización.',
        sevenDayPrototype: 'Formulario conversacional + OCR DNI + checklist de expediente + carpeta por cliente.',
        concreteWedge: 'Persigue el expediente exacto de alta, no emails genéricos.'
      },
      {
        microNiche: 'Asesoría laboral — alta de trabajador avisada por WhatsApp',
        specificProblem: 'Cliente dice “entra mañana una camarera 20h” sin NAF, convenio, jornada, salario o contrato.',
        buyerTrigger: 'Responsable laboral antes de cierres de nómina o campañas hostelería/comercio.',
        capturedData: 'Empresa/CCC, trabajador, NAF, DNI, puesto, convenio, jornada, salario, fecha y contrato.',
        sevenDayPrototype: 'Bot intake + validación de campos + ficha laboral + alertas de faltantes.',
        concreteWedge: 'Una máquina de pedir datos de alta/variación, no RRHH general.'
      },
      {
        microNiche: 'Clínicas — consentimiento y preconsulta incompletos',
        specificProblem: 'Paciente entra sin alergias, medicación, consentimiento o RGPD firmado; recepción improvisa.',
        buyerTrigger: 'Gerente al perder tiempo de gabinete o tras susto documental.',
        capturedData: 'Tratamiento, antecedentes, alergias, medicación, consentimiento, RGPD, firma y tutor si aplica.',
        sevenDayPrototype: 'Enlace preconsulta + consentimiento personalizado + resumen para recepción/profesional.',
        concreteWedge: 'Documentación previa al acto, no chatbot médico.'
      },
      {
        microNiche: 'Academias — expediente FUNDAE incompleto',
        specificProblem: 'Faltan asistencias, firmas, cuestionarios, diplomas o evidencias para bonificar formación.',
        buyerTrigger: 'Academia B2B con más cursos bonificados y administración saturada.',
        capturedData: 'Empresa, CIF, alumnos, DNI, curso, horas, modalidad, asistencia, evaluación y diploma.',
        sevenDayPrototype: 'Panel por curso + firma/asistencia digital + diplomas + alertas de pendiente.',
        concreteWedge: 'Expediente FUNDAE, no LMS.'
      },
      {
        microNiche: 'Autoescuelas — alumno no listo para examen',
        specificProblem: 'DNI, psicotécnico, tasas o clases prácticas no están al día; se descubre tarde.',
        buyerTrigger: 'Dueño con muchos alumnos activos y administración manual.',
        capturedData: 'DNI, permiso, psicotécnico, tasas, disponibilidad, clases, profesor y convocatorias.',
        sevenDayPrototype: 'Ficha alumno + OCR documentos + hitos DGT + dashboard “listo para examen”.',
        concreteWedge: 'Expediente administrativo del alumno B, no agenda genérica.'
      },
      {
        microNiche: 'Inmobiliarias — alquiler listo para firma',
        specificProblem: 'Nóminas, DNI, contrato laboral, fianza e inventario llegan desordenados; firma se retrasa.',
        buyerTrigger: 'Agencia con 10-30 alquileres/mes.',
        capturedData: 'Inmueble, propietario, inquilino, DNI, nóminas, renta, duración, fianza, inventario y suministros.',
        sevenDayPrototype: 'Checklist documental + intake solvencia + borrador contrato + carpeta firmable.',
        concreteWedge: 'Expediente de alquiler, no CRM inmobiliario.'
      },
      {
        microNiche: 'Corredurías — siniestro hogar incompleto',
        specificProblem: 'Asegurado manda relato, fotos y facturas por WhatsApp; correduría reescribe partes para la compañía.',
        buyerTrigger: 'Corredor con muchos siniestros de agua/cristales/robo.',
        capturedData: 'Póliza, fecha, causa, daños, fotos, facturas, terceros, IBAN, compañía y estado.',
        sevenDayPrototype: 'Formulario guiado + clasificador por tipo + resumen para compañía + seguimiento.',
        concreteWedge: 'Convierte siniestro hogar en expediente listo.'
      },
      {
        microNiche: 'Taller mecánico — reparación no autorizada',
        specificProblem: 'Vehículo entra sin orden clara, fotos iniciales o autorización de presupuesto extra.',
        buyerTrigger: 'Dueño tras conflicto “yo no autoricé eso”.',
        capturedData: 'Matrícula, cliente, km, síntomas, fotos, presupuesto, piezas, mano de obra y aceptación.',
        sevenDayPrototype: 'Recepción móvil + fotos guiadas + presupuesto PDF + autorización por WhatsApp/firma.',
        concreteWedge: 'Orden/presupuesto firmado por matrícula, no citas genéricas.'
      },
      {
        microNiche: 'Farmacias — encargos y receta con incidencias',
        specificProblem: 'Encargos en libretas/WhatsApp; medicamentos no recogidos e incidencias de receta no trazadas.',
        buyerTrigger: 'Titular con muchas reservas y pacientes crónicos.',
        capturedData: 'Paciente/alias, medicamento, CN, receta/visado, fecha pedido, proveedor, sustitución y recogida.',
        sevenDayPrototype: 'Panel de encargos + lector CN + avisos de llegada + registro de incidencias.',
        concreteWedge: 'Backoffice diario de encargos, no ecommerce.'
      },
      {
        microNiche: 'Ópticas — adaptación de lentes de contacto',
        specificProblem: 'Parámetros, prueba, consentimiento y revisiones quedan dispersos entre papel y software de caja.',
        buyerTrigger: 'Óptico-optometrista que quiere seguimiento y menos riesgo documental.',
        capturedData: 'Graduación, tipo lente, lote, solución, prueba, tolerancia, consentimiento y revisión.',
        sevenDayPrototype: 'Ficha de adaptación + checklist + consentimiento + recordatorios de revisión.',
        concreteWedge: 'Proceso técnico contactología, no CRM de óptica.'
      },
      {
        microNiche: 'Residencias — ingreso de residente incompleto',
        specificProblem: 'Informes, medicación, contactos, dietas o consentimientos faltan al ingreso.',
        buyerTrigger: 'Dirección/trabajo social antes de nuevas plazas o auditorías.',
        capturedData: 'DNI, tarjeta sanitaria, dependencia, medicación, alergias, contactos, dieta, movilidad y consentimientos.',
        sevenDayPrototype: 'Checklist de ingreso + OCR informes + resumen sociosanitario + alertas de documentos.',
        concreteWedge: 'Alta administrativa/asistencial, no software residencial completo.'
      },
      {
        microNiche: 'Administradores de fincas — actas y acuerdos que no se ejecutan',
        specificProblem: 'Actas tardan días; acuerdos, presupuestos y morosos se persiguen manualmente.',
        buyerTrigger: 'Administrador con muchas juntas al mes.',
        capturedData: 'Comunidad, asistentes, votos, acuerdos, cuotas, derramas, presupuestos, incidencias y tareas.',
        sevenDayPrototype: 'Transcripción de junta + borrador acta + lista de acuerdos/tareas + avisos de morosidad.',
        concreteWedge: 'Junta-acta-acuerdos-cuotas, no gestor documental.'
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
  { label: 'NIST — Small Business Cybersecurity guidance', url: 'https://www.nist.gov/itl/smallbusinesscyber' },
  { label: 'GS1 Spain / AECOC — estándares GS1', url: 'https://www.aecoc.es/sobre-aecoc/estandares-gs1/' },
  { label: 'BOE — Reglamento de seguridad para instalaciones frigoríficas', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2019-15228' },
  { label: 'BOE — RD 355/2024 ascensores', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2024-7258' },
  { label: 'BOE — RIPCI protección contra incendios', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2017-6606' },
  { label: 'MITECO — traslados de residuos y eSIR', url: 'https://www.miteco.gob.es/es/calidad-y-evaluacion-ambiental/temas/prevencion-y-gestion-residuos/traslados.html' },
  { label: 'IDAE — Oficina de autoconsumo', url: 'https://www.idae.es/tecnologias/energias-renovables/oficina-de-autoconsumo' },
  { label: 'BOE — Reglamento ICT', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2011-5834' },
  { label: 'Seguridad Social — Sistema RED', url: 'https://www.seg-social.es/wps/portal/wss/internet/InformacionUtil/5300/1490' },
  { label: 'FUNDAE — formación programada', url: 'https://www.fundae.es/' },
  { label: 'BOE — Ley de Arrendamientos Urbanos', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1994-26003' },
  { label: 'AEMPS — CIMA medicamentos', url: 'https://cima.aemps.es/cima/publico/home.html' },
  { label: 'BOE — Ley de Propiedad Horizontal', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1960-10906' }
] as const;
