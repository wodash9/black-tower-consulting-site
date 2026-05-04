export const taxMeta = {
  updated: '2026-05-04',
  title: 'Radar fiscal para autónomos en España',
  subtitle: 'Hipótesis de gestoría IA para detectar deducciones legítimas, errores documentales y decisiones fiscales que suelen pasar desapercibidas antes de presentar impuestos.',
  thesis: 'La oportunidad no está en “trucos para pagar menos”, sino en reducir fugas legales: facturas que no se capturan, gastos mal documentados, regímenes no revisados, IVA soportado perdido, riesgos de afectación y plazos que vencen sin que nadie avise.',
  caveat: 'Contenido informativo y de investigación. No es asesoramiento fiscal, no garantiza ahorro y no sustituye a una gestoría o asesor fiscal colegiado. Cada recomendación depende del ejercicio, actividad, comunidad, régimen, documentación y criterio vigente de AEAT/BOE.'
};

export const taxStats = [
  {
    label: 'Ámbito',
    value: 'España',
    detail: 'IRPF, IVA, facturación, Seguridad Social y documentación de autónomos.'
  },
  {
    label: 'Oportunidades',
    value: '14',
    detail: 'Deducciones, regímenes, alertas y errores detectables antes del trimestre.'
  },
  {
    label: 'Perfiles',
    value: '10',
    detail: 'Freelance, comercio, transportista, sanitario, instalador, hostelería, formador y más.'
  },
  {
    label: 'Prototipo',
    value: '7 días',
    detail: 'Escáner documental + semáforo de riesgo + informe para asesor fiscal.'
  }
];

export const taxPatterns = [
  'Factura / ticket → validador de deducibilidad',
  'Banco / tarjeta → gasto sin documento o duplicado',
  'Actividad / epígrafe → régimen fiscal probable',
  'Vivienda / vehículo → semáforo de afectación',
  'Cliente impagado → calendario de recuperación de IVA',
  'Ingresos mixtos → prorrata y actividad exenta',
  'Activo caro → amortización en vez de gasto directo',
  'Trimestre → informe revisable por gestor colegiado'
];

export const taxOpportunities = [
  {
    group: 'IRPF: gastos deducibles y prueba documental',
    angle: 'El dolor habitual no es desconocer una ley, sino no tener la factura, el registro y la justificación preparados cuando toca presentar o defender el gasto.',
    opportunities: [
      {
        title: 'Motor de deducibilidad documental',
        legalBasis: 'AEAT exige correlación con ingresos, justificación documental y registro contable/libro registro para considerar un gasto deducible.',
        productMove: 'OCR de facturas, matching bancario y scoring: deducible, dudoso, no deducible o revisar con asesor.',
        example: 'Detectar 17 cargos mensuales de SaaS en banco, pedir factura completa cuando falta NIF y clasificarlos por proyecto/actividad.',
        risk: 'Un cargo bancario o una captura de Stripe no bastan siempre; debe existir soporte válido y vínculo real con la actividad.'
      },
      {
        title: 'Despacho en vivienda habitual',
        legalBasis: 'La regla de suministros permite deducir el 30% sobre la proporción de metros afectos, salvo prueba de porcentaje superior o inferior.',
        productMove: 'Calculadora de metros, carpeta de alta censal, facturas de suministros y alerta cuando el porcentaje aplicado no cuadra.',
        example: 'Piso de 80 m², despacho de 12 m²: 15% afecto; suministros deducibles orientativos: 30% × 15% = 4,5% del gasto.',
        risk: 'Si no se declaró la afectación o se aplica el 100% de luz/internet sin prueba, el riesgo sube mucho.'
      },
      {
        title: 'Manutención del autónomo',
        legalBasis: 'La Ley IRPF permite ciertos gastos de manutención en restauración/hostelería, pagados por medios electrónicos y con límites reglamentarios.',
        productMove: 'Tarjeta + ticket + motivo profesional + límite diario: España, extranjero, con o sin pernocta.',
        example: 'Comida de 18,40 € pagada con tarjeta durante visita a cliente; se etiqueta con agenda y se conserva justificante.',
        risk: 'No todo restaurante en día laborable es deducible. Sin pago electrónico, justificante o relación profesional, debe marcarse como riesgo.'
      },
      {
        title: 'Seguro de salud del autónomo y familia',
        legalBasis: 'La Ley IRPF admite primas de enfermedad con límites por persona para contribuyente, cónyuge e hijos menores de 25 que convivan.',
        productMove: 'Lectura de pólizas, identificación de asegurados válidos y cálculo de límite anual por persona.',
        example: 'Autónoma con póliza familiar: separar cónyuge/hijos deducibles y bloquear exceso sobre límite individual.',
        risk: 'No todo seguro personal entra y los límites cambian si hay discapacidad; requiere revisar asegurados y convivencia.'
      },
      {
        title: 'Amortización de equipos, software y mobiliario',
        legalBasis: 'Los activos afectos no siempre son gasto inmediato: pueden requerir amortización según tablas y modalidad de estimación.',
        productMove: 'Inventario fiscal de portátiles, cámaras, maquinaria, mobiliario y licencias; calendario de amortización anual.',
        example: 'Portátil de 1.800 €: no llevar todo a gasto sin revisar; crear ficha de activo y cuota deducible del ejercicio.',
        risk: 'Confundir inversión con gasto corriente distorsiona el rendimiento y puede ser rechazado.'
      }
    ]
  },
  {
    group: 'IVA, facturación y regímenes especiales',
    angle: 'La mayoría de fugas de IVA vienen de facturas incompletas, actividades mixtas, regímenes mal entendidos y plazos de recuperación perdidos.',
    opportunities: [
      {
        title: 'Auditor de IVA soportado deducible',
        legalBasis: 'AEAT exige empresario/profesional, operación con derecho, afectación, factura válida, registro y ejercicio del derecho dentro de plazo.',
        productMove: 'Clasificar IVA soportado por gasto, proveedor, país, actividad y derecho a deducción; alertar si falta factura válida.',
        example: 'Ticket de gasolina sin NIF del destinatario: tarea automática para pedir factura completa antes del modelo 303.',
        risk: 'Deducir IVA de tickets o gastos privados es un foco claro de regularización.'
      },
      {
        title: 'Facturas simplificadas y rectificativas',
        legalBasis: 'El Reglamento de facturación define contenido mínimo de factura completa, simplificada y rectificativa.',
        productMove: 'Validador de número, serie, fecha, NIF, base, tipo, cuota, destinatario y causa de rectificación.',
        example: 'Detectar una rectificativa sin serie diferenciada o una factura recibida sin desglose de cuota.',
        risk: 'Una factura formalmente incorrecta puede impedir deducir IVA aunque el gasto sea real.'
      },
      {
        title: 'Prorrata para actividades sujetas y exentas',
        legalBasis: 'La Ley IVA limita la deducción cuando se combinan operaciones con derecho y sin derecho a deducir.',
        productMove: 'Clasificador de ingresos y gastos: actividad sujeta, exenta, común, prorrata provisional y definitiva.',
        example: 'Formador con consultoría sujeta e impartición exenta: aplicar porcentaje de deducción a gastos comunes.',
        risk: 'Deducir el 100% del IVA en actividad mixta puede ser demasiado agresivo; no deducir nada también puede hacer perder dinero.'
      },
      {
        title: 'Recargo de equivalencia para comercio minorista',
        legalBasis: 'Régimen especial de IVA aplicable a determinados comerciantes minoristas personas físicas.',
        productMove: 'Cuestionario de actividad, % venta a consumidor final, productos excluidos y comunicación a proveedores.',
        example: 'Tienda que intenta deducir IVA de mercancía cuando está en recargo: marcar como coste y revisar régimen.',
        risk: 'Mezclar comercio minorista con otra actividad profesional exige separar bien operaciones y régimen.'
      },
      {
        title: 'Criterio de caja: liquidez vs complejidad',
        legalBasis: 'Régimen optativo que retrasa devengo del IVA repercutido hasta cobro, pero también deducción del soportado hasta pago.',
        productMove: 'Simulador con plazo medio de cobro, pago a proveedores, clientes B2B y efecto en tesorería.',
        example: 'Freelance B2B que cobra a 90 días: comparar régimen general frente a criterio de caja antes de optar.',
        risk: 'Puede generar fricción con clientes y obligaciones adicionales; no siempre compensa.'
      },
      {
        title: 'IVA de facturas impagadas',
        legalBasis: 'AEAT permite modificar base imponible y recuperar IVA impagado si se cumplen plazos, reclamación y comunicación.',
        productMove: 'Aging de facturas emitidas, alerta 6/12 meses, borrador de rectificativa y checklist Modelo 952.',
        example: 'Factura B2B de 2.000 € + 420 € IVA vencida: calendario para no perder plazo de rectificación.',
        risk: 'No es automático: hay requisitos, comunicaciones y documentación formal.'
      }
    ]
  },
  {
    group: 'Estrategia fiscal prudente y decisiones recurrentes',
    angle: 'Más que “deducir más”, el producto debe ayudar a decidir régimen, base de cotización, forma jurídica y calendario antes de que el daño ya esté hecho.',
    opportunities: [
      {
        title: 'RETA y cuota de autónomos',
        legalBasis: 'La cotización de autónomos se vincula a rendimientos y puede regularizarse según reglas de Seguridad Social.',
        productMove: 'Conciliador de cuota RETA, simulador de rendimiento neto y alertas de tramo/base estimada.',
        example: 'Avisar si el rendimiento real va muy por encima o debajo de lo previsto y conviene revisar base.',
        risk: 'La cuota no es solo “gasto deducible”: afecta prestaciones y regularizaciones; requiere visión anual.'
      },
      {
        title: 'Reducción por inicio de actividad',
        legalBasis: 'La Ley IRPF prevé reducción del 20% del rendimiento neto positivo en ciertos inicios de actividad.',
        productMove: 'Radar de altas censales, primer ejercicio positivo, límite anual y exclusiones por ingresos de antiguo pagador.',
        example: 'Nuevo autónomo que empieza a dar beneficio en 2026: alertar al asesor para revisar si aplica la reducción.',
        risk: 'No aplica siempre: actividad previa, pagador anterior y límites pueden bloquearla.'
      },
      {
        title: 'Gastos de difícil justificación en estimación directa simplificada',
        legalBasis: 'La normativa permite un porcentaje limitado sobre rendimiento neto positivo previo, con tope anual, en simplificada.',
        productMove: 'Cálculo automático del 5% con límite y control de incompatibilidades.',
        example: 'Autónomo en simplificada con rendimiento positivo: calcular ajuste sin inventar gastos no probados.',
        risk: 'No aplica igual en estimación directa normal ni si se usan determinadas reducciones incompatibles.'
      },
      {
        title: 'Cuándo estudiar pasar de autónomo a sociedad',
        legalBasis: 'No es una deducción concreta: es planificación fiscal/mercantil dependiente de beneficio, riesgo, reinversión y nómina.',
        productMove: 'Simulador prudente de umbrales: IRPF, Impuesto sobre Sociedades, costes de gestión, nómina, dividendos y responsabilidad.',
        example: 'Profesional con beneficio estable alto y reinversión: generar informe de “estudiar SL”, no recomendación automática.',
        risk: 'Vender “paga menos creando una SL” sin análisis puede ser falso o incluso perjudicial.'
      }
    ]
  }
];

export const taxProfiles = [
  {
    profile: 'Freelance digital',
    leaks: ['SaaS y herramientas extranjeras sin factura válida', 'Coworking, equipo y móvil mezclados con uso personal', 'Operaciones UE/no UE sin revisar ROI/VIES o inversión del sujeto pasivo'],
    documents: 'Facturas completas, extractos, contratos, alta ROI si procede, justificante de uso profesional.',
    prototype: 'Detector de cargos recurrentes + checklist de factura válida + informe de IVA/IRPF para asesor.',
    risk: 'Medio: sube con proveedores extranjeros, gastos mixtos y ausencia de facturas.'
  },
  {
    profile: 'Comercio minorista',
    leaks: ['Recargo de equivalencia mal aplicado', 'Descuadres TPV/efectivo/banco', 'Mermas, devoluciones y stock sin justificar'],
    documents: 'Cierres Z, TPV, caja diaria, facturas de proveedor, inventario, albaranes y devoluciones.',
    prototype: 'Reconciliador TPV-banco-stock con alerta de margen anómalo y régimen probable.',
    risk: 'Alto: efectivo, stock y régimen especial requieren trazabilidad.'
  },
  {
    profile: 'Transportista o repartidor B2B',
    leaks: ['Combustible y peajes con ticket débil', 'Dietas sin ruta profesional', 'Vehículo al 100% sin prueba suficiente'],
    documents: 'Fuel card, facturas, GPS/rutas, CMR/partes de entrega, tacógrafo si aplica, leasing/seguro.',
    prototype: 'Auditor fuel card + rutas + litros/km + semáforo de gasto deducible.',
    risk: 'Medio-alto: combustible, vehículo y manutención son áreas sensibles.'
  },
  {
    profile: 'Profesional sanitario',
    leaks: ['IVA exento aplicado a servicios no sanitarios', 'IVA soportado deducido en actividad exenta', 'Agenda y cobros no conciliados'],
    documents: 'Agenda, tipo de servicio, facturas, colegiación, RC, TPV/banco, contratos de clínica.',
    prototype: 'Clasificador de servicios exentos/sujetos + alerta de prorrata o no deducción.',
    risk: 'Medio-alto por exenciones y actividad mixta.'
  },
  {
    profile: 'Técnico instalador',
    leaks: ['Materiales no vinculados a obra', 'IVA mal aplicado en obra o inversión del sujeto pasivo', 'Subcontratas y vehículo sin parte firmado'],
    documents: 'Presupuestos, partes de trabajo, albaranes, fotos, facturas de material, datos de obra/cliente.',
    prototype: 'Expediente IA por obra: materiales, fotos, parte firmado, regla IVA y pendientes.',
    risk: 'Alto: casuística IVA, efectivo y trazabilidad de materiales.'
  },
  {
    profile: 'Hostelería pequeña',
    leaks: ['Caja, datáfono y delivery descuadrados', 'Mermas/autoconsumos sin parte', 'Maquinaria o reformas mal tratadas como gasto inmediato'],
    documents: 'POS, cierres Z, datáfono, plataformas delivery, stock, escandallos, facturas proveedor.',
    prototype: 'Panel diario POS-datáfono-banco-delivery con margen esperado y alertas de compra/venta.',
    risk: 'Muy alto por efectivo, ratios de consumo y control de caja.'
  },
  {
    profile: 'Formador o academia pequeña',
    leaks: ['Cursos exentos/sujetos sin criterio documentado', 'Gastos de LMS, material y aula no capturados', 'Retenciones mal conciliadas'],
    documents: 'Temarios, contratos, facturas, certificados de retención, asistencia, plataforma LMS.',
    prototype: 'Clasificador de cursos + conciliador de retenciones + carpeta documental por curso.',
    risk: 'Medio: la exención de enseñanza depende de materia y condiciones.'
  },
  {
    profile: 'Creador, artista o divulgador',
    leaks: ['Royalties, patrocinios, merch y actuaciones mezclados', 'Payouts de plataformas extranjeras sin conciliación', 'Equipo/estudio con uso personal no separado'],
    documents: 'Contratos, informes de plataforma, facturas, payouts, inventario de equipo, agenda de proyectos.',
    prototype: 'Mapa de ingresos por flujo: royalty, sponsor, merch, actuación, encargo y plataforma.',
    risk: 'Medio-alto: ingresos digitales y mezcla personal/profesional.'
  },
  {
    profile: 'Autónomo con despacho en casa',
    leaks: ['No deduce suministros permitidos', 'Deduce el 100% sin prueba', 'Mobiliario/equipo sin amortización'],
    documents: '036/037, m² vivienda/despacho, facturas suministros, alquiler/propiedad, fotos y uso.',
    prototype: 'Calculadora m² + carpeta de prueba + propuesta de asiento trimestral.',
    risk: 'Medio-alto si se fuerzan porcentajes o no existe afectación declarada.'
  },
  {
    profile: 'Autónomo con vehículo',
    leaks: ['Turismo/moto deducido al 100% sin estar en supuesto claro', 'Combustible y parking sin ruta/cliente', 'Multas o gastos personales incluidos'],
    documents: 'Ficha vehículo, leasing/renting, seguro, facturas, agenda visitas, kilometraje/GPS, actividad.',
    prototype: 'Bitácora de rutas + OCR tickets + semáforo IVA/IRPF para cada gasto.',
    risk: 'Muy alto para turismos de uso mixto, especialmente en IRPF.'
  }
];

export const taxPrototype = [
  {
    title: '1. Ingesta documental',
    detail: 'Subir facturas, tickets, extractos CSV, facturas emitidas y datos básicos de actividad/régimen.'
  },
  {
    title: '2. Semáforo fiscal',
    detail: 'Clasificar cada gasto: deducible probable, parcialmente deducible, falta documento, riesgo alto o revisar.'
  },
  {
    title: '3. Calendario de plazos',
    detail: 'Detectar cierres trimestrales, IVA impagado, rectificativas, modelo 303/130 y alertas de documentación.'
  },
  {
    title: '4. Informe para gestor',
    detail: 'Exportar evidencias, dudas y oportunidades para que un profesional valide antes de presentar.'
  }
];

export const taxNoGo = [
  'No diseñar evasión, facturas falsas, simulación de gastos ni estructuras artificiales.',
  'No prometer pagar siempre menos impuestos: el objetivo es cumplir mejor y no perder deducciones legítimas.',
  'No sustituir a un asesor fiscal colegiado en decisiones interpretativas o inspecciones.',
  'No capturar datos reales sensibles sin consentimiento, cifrado, política de conservación y acuerdo de tratamiento.'
];

export const taxSources = [
  { label: 'AEAT — Manual IRPF 2024: requisitos de gasto deducible', url: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2024/c07-rendimientos-actividades-economicas-estimacion-directa/fase-1-determinacion-rendimiento-neto/gastos-fiscalmente-deducibles/requisitos-considerar-gasto-deducible.html' },
  { label: 'AEAT — IRPF suministros vivienda afecta', url: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2024/c07-rendimientos-actividades-economicas-estimacion-directa/fase-1-determinacion-rendimiento-neto/gastos-fiscalmente-deducibles/servicios-exteriores/suministros.html' },
  { label: 'AEAT — IRPF gastos del titular de actividad', url: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2024/c07-rendimientos-actividades-economicas-estimacion-directa/fase-1-determinacion-rendimiento-neto/gastos-fiscalmente-deducibles/gastos-titular-actividad.html' },
  { label: 'AEAT — IRPF amortizaciones', url: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2024/c07-rendimientos-actividades-economicas-estimacion-directa/fase-1-determinacion-rendimiento-neto/amortizaciones-dotaciones-ejercicio-fiscalmente-deducibles.html' },
  { label: 'AEAT — IVA soportado deducible', url: 'https://sede.agenciatributaria.gob.es/Sede/iva/que-iva-soportado-puedo-deducir.html' },
  { label: 'AEAT — Requisitos para deducir IVA', url: 'https://sede.agenciatributaria.gob.es/Sede/iva/que-iva-soportado-puedo-deducir/que-requisitos-debo-cumplir-poder-iva.html' },
  { label: 'AEAT — Prorrata de IVA', url: 'https://sede.agenciatributaria.gob.es/Sede/iva/que-iva-soportado-puedo-deducir/calculo-iva-deducir-cuando-realizo-que.html' },
  { label: 'AEAT — Recargo de equivalencia', url: 'https://sede.agenciatributaria.gob.es/Sede/iva/regimenes-tributacion-iva/regimen-especial-recargo-equivalencia.html' },
  { label: 'AEAT — Criterio de caja', url: 'https://sede.agenciatributaria.gob.es/Sede/iva/regimenes-tributacion-iva/criterio-caja.html' },
  { label: 'AEAT — Recuperar IVA impagado', url: 'https://sede.agenciatributaria.gob.es/Sede/iva/necesito-rectificar-iva-repercutido_iva-soportado/puedo-recuperar-iva-impagado-clientes.html' },
  { label: 'AEAT — Facturación IVA', url: 'https://sede.agenciatributaria.gob.es/Sede/iva/facturacion-registro/facturacion-iva.html' },
  { label: 'AEAT — Sistemas Informáticos de Facturación / VERI*FACTU', url: 'https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu.html' },
  { label: 'BOE — Ley 35/2006 IRPF', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764' },
  { label: 'BOE — Ley 37/1992 IVA', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740' },
  { label: 'BOE — Reglamento de facturación RD 1619/2012', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2012-14696' },
  { label: 'Seguridad Social — Trabajo autónomo / RETA', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/Afiliacion/10548/32825' }
];
