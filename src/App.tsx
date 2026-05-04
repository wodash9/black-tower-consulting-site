import {
  contactHref,
  deliverables,
  fitItems,
  noFitItems,
  processCases,
  sprintSteps
} from './content';

function AnchorButton({ href, children, variant = 'primary' }: { href: string; children: string; variant?: 'primary' | 'secondary' }) {
  return (
    <a className={`btn btn--${variant}`} href={href}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label">{children}</p>;
}

export function App() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Black Tower Consulting inicio">
          <span className="brand-mark" aria-hidden="true">BT</span>
          <span>
            <strong>Black Tower</strong>
            <small>Consulting</small>
          </span>
        </a>
        <nav>
          <a href="#sprint">Sprint</a>
          <a href="#casos">Procesos</a>
          <a href="#alcance">Alcance</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section id="inicio" className="hero grid-bg">
        <div className="hero__copy">
          <SectionLabel>Automatización IA para operaciones reales</SectionLabel>
          <h1>Automatiza un proceso interno en 7 días. Sin parar tu operativa.</h1>
          <p className="hero__lead">
            Detectamos una tarea repetitiva de tu empresa —pedidos, incidencias, albaranes,
            reportes, emails o documentación— y entregamos un prototipo funcional para decidir
            si merece la pena automatizarlo de verdad.
          </p>
          <div className="hero__actions">
            <AnchorButton href={contactHref}>Solicitar diagnóstico</AnchorButton>
            <AnchorButton href="#casos" variant="secondary">Ver procesos que encajan</AnchorButton>
          </div>
          <p className="microcopy">Sprint cerrado · 7 días · desde 750 € · sin compromiso de implantación posterior</p>
        </div>

        <aside className="control-panel" aria-label="Resumen operativo del sprint">
          <div className="panel-header">
            <span>PROCESS // CANDIDATE</span>
            <strong>BTC-SPRINT-07</strong>
          </div>
          <div className="flow-card flow-card--input">
            <span>Entrada</span>
            <strong>Email + PDF + Excel</strong>
          </div>
          <div className="flow-line" aria-hidden="true" />
          <div className="flow-card flow-card--analysis">
            <span>Trabajo manual detectado</span>
            <strong>clasificar · extraer · validar · reportar</strong>
          </div>
          <div className="flow-line" aria-hidden="true" />
          <div className="flow-card flow-card--output">
            <span>Salida del sprint</span>
            <strong>prototipo probado + límites documentados</strong>
          </div>
          <div className="panel-footer">
            <span>Human-in-the-loop</span>
            <span>Sin promesas de ROI mágico</span>
          </div>
        </aside>
      </section>

      <section className="split-section" aria-labelledby="problem-title">
        <div>
          <SectionLabel>Problema espejo</SectionLabel>
          <h2 id="problem-title">Menos copiar y pegar. Más operaciones bajo control.</h2>
        </div>
        <div className="copy-block">
          <p>
            Muchas pymes industriales y logísticas tienen procesos críticos funcionando con correos,
            Excel, PDFs y conocimiento en la cabeza de una o dos personas.
          </p>
          <p>
            Black Tower Consulting no vende “IA 360º”. Elegimos un proceso concreto, lo prototipamos
            y dejamos claro qué se puede escalar, qué necesita más datos y qué conviene descartar.
          </p>
        </div>
      </section>

      <section id="casos" className="cases-section" aria-labelledby="cases-title">
        <div className="section-heading">
          <SectionLabel>Casos donde empieza el valor</SectionLabel>
          <h2 id="cases-title">Si esto te suena, hay margen para automatizar.</h2>
          <p>No necesitas “hacer IA”. Necesitas quitar fricción de procesos que se repiten cada semana.</p>
        </div>
        <div className="case-grid">
          {processCases.map((item) => (
            <article className="case-card" key={item}>
              <span aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="sprint" className="sprint-section" aria-labelledby="sprint-title">
        <div className="section-heading section-heading--dark">
          <SectionLabel>Sprint de Automatización IA</SectionLabel>
          <h2 id="sprint-title">Una semana para pasar de sospecha a prueba funcional.</h2>
          <p>
            El objetivo no es una transformación completa: es una evidencia operativa pequeña,
            usable y suficientemente honesta para tomar una decisión.
          </p>
        </div>
        <div className="timeline">
          {sprintSteps.map((step) => (
            <article className="timeline-item" key={step.day}>
              <span>{step.day}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="deliverables-section" aria-labelledby="deliverables-title">
        <div className="section-heading">
          <SectionLabel>Entregables</SectionLabel>
          <h2 id="deliverables-title">No te entregamos una presentación. Te entregamos una prueba.</h2>
        </div>
        <div className="deliverables-grid">
          {deliverables.map((item, index) => (
            <article className="deliverable" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="alcance" className="scope-section" aria-labelledby="scope-title">
        <div className="section-heading section-heading--narrow">
          <SectionLabel>Encaje y límites</SectionLabel>
          <h2 id="scope-title">Diseñado para probar sin apostar a ciegas.</h2>
        </div>
        <div className="scope-grid">
          <article className="scope-card scope-card--yes">
            <h3>Encaja si tienes…</h3>
            <ul>
              {fitItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="scope-card scope-card--no">
            <h3>No encaja si buscas…</h3>
            <ul>
              {noFitItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="pricing-section" aria-labelledby="pricing-title">
        <div className="price-card">
          <div>
            <SectionLabel>Precio semilla</SectionLabel>
            <h2 id="pricing-title">Sprint cerrado, sin presupuesto abierto.</h2>
            <p>
              Primeros clientes de validación: <strong>750–1.000 €</strong>. Si el prototipo merece
              escalar, se plantea una fase posterior desde <strong>1.500–3.000 €</strong> y mantenimiento
              opcional según alcance.
            </p>
          </div>
          <div className="price-seal" aria-label="Duración 7 días">
            <strong>7</strong>
            <span>días</span>
          </div>
        </div>
      </section>

      <section id="contacto" className="cta-section grid-bg" aria-labelledby="cta-title">
        <SectionLabel>Próxima acción</SectionLabel>
        <h2 id="cta-title">Elige un proceso. Lo probamos en una semana.</h2>
        <p>
          Trae un proceso repetitivo y ejemplos reales o anonimizados. Te diremos si encaja antes
          de construir y no pediremos datos sensibles en el primer contacto.
        </p>
        <AnchorButton href={contactHref}>Enviar brief del proceso</AnchorButton>
        <small>El enlace abre un email pre-rellenado. Cambia el contenido y elimina cualquier dato sensible.</small>
      </section>

      <footer className="footer">
        <p>Black Tower Consulting · Automatización IA, software interno y MVPs operativos.</p>
        <a href={contactHref}>hola@etharlia.com</a>
      </footer>
    </main>
  );
}
