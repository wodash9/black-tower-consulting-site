import {
  audiences,
  comparisonRows,
  contactHref,
  differentiators,
  faqs,
  heroProofPoints,
  includedItems,
  mvpFormats,
  packages,
  problemSignals,
  processSteps,
  successMetrics
} from './content';
import { ProblemResearchPage } from './ProblemResearchPage';
import { TaxAutonomosPage } from './TaxAutonomosPage';

function AnchorButton({ href, children, variant = 'primary' }: { href: string; children: string; variant?: 'primary' | 'secondary' | 'dark' }) {
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

function Header() {
  return (
    <header className="topbar" aria-label="Navegación principal">
      <a className="brand" href="#inicio" aria-label="Black Tower Consulting inicio">
        <span className="brand-mark" aria-hidden="true">BT</span>
        <span>
          <strong>Black Tower</strong>
          <small>MVP consulting studio</small>
        </span>
      </a>
      <nav>
        <a href="#problema">Problema</a>
        <a href="#proceso">Proceso</a>
        <a href="#paquetes">Ofertas</a>
        <a href="#incluye">Incluye</a>
        <a href="/problematicas-empresas/">Research</a>
        <a href="#contacto">Contacto</a>
        <a className="nav-cta" href={contactHref}>Diagnóstico</a>
      </nav>
    </header>
  );
}

function BlueprintConsole() {
  return (
    <aside className="blueprint-console" aria-label="Blueprint visual de creación MVP">
      <div className="console-topline">
        <span>MVP Blueprint</span>
        <strong>2–6 semanas</strong>
      </div>
      <div className="product-window">
        <div className="window-bar"><span /><span /><span /></div>
        <div className="metric-row">
          <div><small>Hypothesis</small><strong>Validated problem</strong></div>
          <div><small>Core flow</small><strong>Live product</strong></div>
        </div>
        <div className="flow-map" aria-hidden="true">
          <span>Scope</span>
          <i />
          <span>Build</span>
          <i />
          <span>Launch</span>
        </div>
        <div className="screen-grid">
          <div className="screen-card screen-card--large">
            <small>Primary user journey</small>
            <strong>Signup → core action → feedback</strong>
            <div className="progress"><span /></div>
          </div>
          <div className="screen-card"><small>Analytics</small><strong>Events wired</strong></div>
          <div className="screen-card"><small>Release</small><strong>Production ready</strong></div>
        </div>
      </div>
      <div className="console-checks">
        <span>Scope locked</span>
        <span>Design reviewed</span>
        <span>QA passed</span>
      </div>
    </aside>
  );
}

export function App() {
  const normalizedPath = typeof window === 'undefined' ? '/' : window.location.pathname.replace(/\/$/, '') || '/';

  if (normalizedPath === '/problematicas-empresas') return <ProblemResearchPage />;
  if (normalizedPath === '/radar-fiscal-autonomos') return <TaxAutonomosPage />;

  return (
    <main className="site-shell">
      <Header />

      <section id="inicio" className="hero">
        <div className="hero__copy">
          <SectionLabel>Consultora de producto, diseño y desarrollo</SectionLabel>
          <h1>Lanza tu MVP en semanas, no en trimestres.</h1>
          <p className="hero__lead">
            Black Tower Consulting diseña y construye productos mínimos valiosos para founders,
            startups y equipos de negocio que necesitan validar una idea, cerrar pilotos o preparar
            una demo comercial con un producto real en 2–6 semanas.
          </p>
          <div className="hero__actions">
            <AnchorButton href={contactHref}>Agendar diagnóstico MVP</AnchorButton>
            <AnchorButton href="#proceso" variant="secondary">Ver cómo trabajamos</AnchorButton>
          </div>
          <div className="proof-strip" aria-label="Puntos clave">
            {heroProofPoints.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <BlueprintConsole />
      </section>

      <section id="problema" className="problem-section" aria-labelledby="problem-title">
        <div className="section-heading">
          <SectionLabel>El riesgo real</SectionLabel>
          <h2 id="problem-title">La mayoría de los MVPs fallan antes de llegar al mercado.</h2>
          <p>No porque la idea sea mala, sino porque se construye demasiado, demasiado lento o sin una hipótesis clara que validar.</p>
        </div>
        <div className="problem-layout">
          <div className="signal-list">
            {problemSignals.map((signal) => <p key={signal}>{signal}</p>)}
          </div>
          <div className="comparison-card" aria-label="Comparativa MVP tradicional frente a Black Tower">
            <div className="comparison-head"><span>MVP tradicional</span><span>MVP Black Tower</span></div>
            {comparisonRows.map((row) => (
              <div className="comparison-row" key={row.label}>
                <strong>{row.label}</strong>
                <p>{row.traditional}</p>
                <p>{row.blackTower}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="value-section" aria-labelledby="value-title">
        <div>
          <SectionLabel>Producto mínimo valioso</SectionLabel>
          <h2 id="value-title">Construimos MVPs útiles, no prototipos decorativos.</h2>
        </div>
        <div className="copy-block">
          <p>
            Un MVP no es una versión pobre del producto final. Es la forma más rápida de demostrar
            que una idea puede generar adopción, ingresos o aprendizaje accionable.
          </p>
          <p>
            Combinamos estrategia de negocio, UX/UI y desarrollo full-stack para entregar una primera
            versión que pueda ser usada, medida y evolucionada sin rehacerlo todo desde cero.
          </p>
        </div>
      </section>

      <section className="audience-section" aria-labelledby="audience-title">
        <div className="section-heading">
          <SectionLabel>Para quién</SectionLabel>
          <h2 id="audience-title">Equipos que necesitan pasar de idea a mercado.</h2>
        </div>
        <div className="audience-grid">
          {audiences.map((audience) => (
            <article className="audience-card" key={audience.title}>
              <h3>{audience.title}</h3>
              <p>{audience.detail}</p>
              <ul>{audience.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="formats-section" aria-labelledby="formats-title">
        <div className="section-heading section-heading--dark">
          <SectionLabel>Qué construimos</SectionLabel>
          <h2 id="formats-title">MVPs diseñados para validar una hipótesis concreta.</h2>
          <p>No empezamos por la tecnología. Empezamos por la pregunta que el MVP debe responder.</p>
        </div>
        <div className="format-grid">
          {mvpFormats.map((item, index) => (
            <article className="format-card" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proceso" className="process-section" aria-labelledby="process-title">
        <div className="section-heading">
          <SectionLabel>Proceso MVP</SectionLabel>
          <h2 id="process-title">Un proceso claro para lanzar sin perder foco.</h2>
        </div>
        <div className="process-timeline">
          {processSteps.map((item) => (
            <article className="process-card" key={item.step}>
              <div className="process-card__meta"><span>{item.step}</span><strong>{item.duration}</strong></div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <ul>{item.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="paquetes" className="packages-section" aria-labelledby="packages-title">
        <div className="section-heading section-heading--dark">
          <SectionLabel>Formas de avanzar</SectionLabel>
          <h2 id="packages-title">Tres entradas según tu etapa.</h2>
        </div>
        <div className="package-grid">
          {packages.map((pack) => (
            <article className={pack.featured ? 'package-card package-card--featured' : 'package-card'} key={pack.name}>
              <span>{pack.timing}</span>
              <h3>{pack.name}</h3>
              <p>{pack.description}</p>
              <ul>{pack.includes.map((item) => <li key={item}>{item}</li>)}</ul>
              <a href={contactHref}>{pack.cta}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="difference-section" aria-labelledby="difference-title">
        <div className="section-heading">
          <SectionLabel>Diferenciadores</SectionLabel>
          <h2 id="difference-title">La diferencia está en construir solo lo que valida.</h2>
        </div>
        <div className="difference-grid">
          {differentiators.map((item) => (
            <article className="difference-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="incluye" className="include-section" aria-labelledby="include-title">
        <div className="include-panel">
          <div>
            <SectionLabel>Entregables</SectionLabel>
            <h2 id="include-title">Todo lo necesario para lanzar una primera versión útil.</h2>
            <p>También definimos explícitamente qué queda fuera del MVP para proteger tiempo, presupuesto y foco.</p>
          </div>
          <ul className="include-list">{includedItems.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="metrics-section" aria-labelledby="metrics-title">
        <div className="section-heading section-heading--dark">
          <SectionLabel>Cómo medimos éxito</SectionLabel>
          <h2 id="metrics-title">Un MVP exitoso responde una pregunta de negocio.</h2>
        </div>
        <div className="metric-board">
          <div className="metric-board__hero"><small>Time to launch</small><strong>28 días</strong><span>Referencia ilustrativa para un MVP acotado</span></div>
          {successMetrics.map((metric) => <p key={metric}>{metric}</p>)}
        </div>
      </section>

      <section className="faq-section" aria-labelledby="faq-title">
        <div className="section-heading">
          <SectionLabel>FAQ</SectionLabel>
          <h2 id="faq-title">Preguntas frecuentes.</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <article className="faq-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="cta-section" aria-labelledby="cta-title">
        <SectionLabel>Próximo paso</SectionLabel>
        <h2 id="cta-title">Convierte tu idea en un MVP listo para validar.</h2>
        <p>En 30 minutos identificamos el alcance inicial, riesgos principales y próximos pasos para lanzar sin construir de más.</p>
        <div className="hero__actions">
          <AnchorButton href={contactHref} variant="dark">Agendar diagnóstico MVP</AnchorButton>
          <AnchorButton href={contactHref} variant="secondary">Enviar brief del proyecto</AnchorButton>
        </div>
      </section>

      <footer className="footer">
        <p>Black Tower Consulting · MVPs premium para validar, vender y decidir con evidencia.</p>
        <a href={contactHref}>hola@etharlia.com</a>
      </footer>
    </main>
  );
}
