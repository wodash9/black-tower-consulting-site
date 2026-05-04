import type { CSSProperties } from 'react';

import {
  agents,
  capabilityPillars,
  contactHref,
  explicitLimits,
  operatingFlow,
  showcasedCapabilities
} from './content';
import { ProblemResearchPage } from './ProblemResearchPage';
import { TaxAutonomosPage } from './TaxAutonomosPage';

type AgentIconKind = (typeof agents)[number]['icon'];

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

function AgentIcon({ kind }: { kind: AgentIconKind }) {
  const svgProps = {
    className: 'agent-icon',
    viewBox: '0 0 64 64',
    role: 'presentation',
    'aria-hidden': true,
    focusable: false
  } as const;

  switch (kind) {
    case 'orchestrator':
      return (
        <svg {...svgProps}>
          <path d="M32 8l18 11v26L32 56 14 45V19L32 8Z" />
          <path d="M32 17v30M20 24l12 7 12-7M20 40l12-7 12 7" />
          <circle cx="32" cy="32" r="4" />
        </svg>
      );
    case 'operations':
      return (
        <svg {...svgProps}>
          <path d="M18 13h28v38H18z" />
          <path d="M24 25l4 4 8-9M24 40l4 4 12-14" />
          <path d="M39 25h7M39 40h7" />
        </svg>
      );
    case 'technology':
      return (
        <svg {...svgProps}>
          <path d="M32 10l20 12v20L32 54 12 42V22L32 10Z" />
          <path d="M22 32h20M32 22v20" />
          <circle cx="32" cy="32" r="7" />
          <circle cx="20" cy="24" r="2" />
          <circle cx="44" cy="40" r="2" />
        </svg>
      );
    case 'product':
      return (
        <svg {...svgProps}>
          <path d="M32 9l19 23-19 23-19-23L32 9Z" />
          <path d="M24 32h16M32 24v16" />
          <path d="M21 23l11 9 11-9M21 41l11-9 11 9" />
        </svg>
      );
    case 'research':
      return (
        <svg {...svgProps}>
          <circle cx="29" cy="29" r="14" />
          <path d="M39 39l11 11" />
          <path d="M29 18v22M18 29h22" />
          <path d="M23 23l12 12M35 23L23 35" />
        </svg>
      );
    case 'marketing':
      return (
        <svg {...svgProps}>
          <path d="M13 37c9-1 15-5 20-15l18 18c-10 5-14 11-15 20" />
          <path d="M21 45l-7 7M37 21l7-7" />
          <path d="M24 34l7 7" />
        </svg>
      );
    case 'sales':
      return (
        <svg {...svgProps}>
          <path d="M12 22h40l-16 17v12l-8 4V39L12 22Z" />
          <path d="M20 22c3-8 21-8 24 0" />
          <path d="M23 48h9" />
        </svg>
      );
    case 'qa':
      return (
        <svg {...svgProps}>
          <circle cx="28" cy="28" r="14" />
          <path d="M38 38l12 12" />
          <path d="M22 28l5 5 10-12" />
        </svg>
      );
    case 'finance':
      return (
        <svg {...svgProps}>
          <circle cx="24" cy="38" r="10" />
          <circle cx="39" cy="27" r="10" />
          <path d="M39 20v14M34 27h10" />
          <path d="M16 51h35" />
        </svg>
      );
    case 'success':
      return (
        <svg {...svgProps}>
          <path d="M32 11c11 0 19 8 19 19 0 15-19 25-19 25S13 45 13 30c0-11 8-19 19-19Z" />
          <path d="M23 31l6 6 13-14" />
          <path d="M21 45h22" />
        </svg>
      );
    case 'legal':
      return (
        <svg {...svgProps}>
          <path d="M32 11v42M18 20h28" />
          <path d="M21 20l-9 16h18L21 20ZM43 20l-9 16h18L43 20Z" />
          <path d="M23 53h18" />
        </svg>
      );
    default:
      return null;
  }
}

export function App() {
  const normalizedPath = typeof window === 'undefined' ? '/' : window.location.pathname.replace(/\/$/, '') || '/';

  if (normalizedPath === '/problematicas-empresas') {
    return <ProblemResearchPage />;
  }

  if (normalizedPath === '/radar-fiscal-autonomos') {
    return <TaxAutonomosPage />;
  }

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Black Tower Consulting inicio">
          <span className="brand-mark" aria-hidden="true">BT</span>
          <span>
            <strong>Black Tower</strong>
            <small>AI operations studio</small>
          </span>
        </a>
        <nav>
          <a href="#perfiles">Equipo</a>
          <a href="#entorno">Sistema</a>
          <a href="#servicios">Servicios</a>
          <a href="/problematicas-empresas/">Problemáticas</a>
          <a href="/radar-fiscal-autonomos/">Radar fiscal</a>
          <a href="#garantias">Garantías</a>
        </nav>
      </header>

      <section id="inicio" className="hero grid-bg">
        <div className="hero__copy">
          <SectionLabel>Consultoría multiagente aplicada</SectionLabel>
          <h1>Equipo multiagente para convertir ideas y procesos en entregables reales.</h1>
          <p className="hero__lead">
            Black Tower Consulting coordina estrategia, producto, tecnología, investigación,
            marketing, ventas y QA mediante perfiles Hermes, Telegram como bus operativo,
            Etharlia como memoria de trabajo y herramientas conectadas al desarrollo real.
          </p>
          <div className="hero__actions">
            <AnchorButton href="#perfiles">Ver equipo multiagente</AnchorButton>
            <AnchorButton href="#servicios" variant="secondary">Ver servicios activables</AnchorButton>
            <AnchorButton href="/problematicas-empresas/" variant="secondary">Ver problemáticas investigadas</AnchorButton>
            <AnchorButton href="/radar-fiscal-autonomos/" variant="secondary">Ver radar fiscal autónomos</AnchorButton>
          </div>
          <p className="microcopy">Automatización IA · software interno · research · marketing · ventas · documentación · QA</p>
        </div>

        <aside className="tower-console" aria-label="Panel operativo Black Tower Consulting">
          <div className="console-header">
            <span>BTC // MULTIAGENT STUDIO</span>
            <strong>ACTIVE SYSTEM</strong>
          </div>
          <div className="tower-sigil" aria-hidden="true">
            <span />
            <strong>BT</strong>
          </div>
          <div className="console-grid">
            <div>
              <span>Profiles</span>
              <strong>{agents.length}</strong>
            </div>
            <div>
              <span>Knowledge</span>
              <strong>Etharlia</strong>
            </div>
            <div>
              <span>Bus</span>
              <strong>Telegram</strong>
            </div>
            <div>
              <span>QA</span>
              <strong>Columbo</strong>
            </div>
          </div>
          <div className="console-review">
            <span>UI REVIEW</span>
            <p>Valentine ordena experiencia, Kvothe afina mensaje y Columbo revisa claridad visual antes de publicar.</p>
          </div>
          <div className="console-line"><span>ENGAGEMENT</span><p>Brief → dirección → ejecución especializada → QA → entrega.</p></div>
          <div className="console-line console-line--ok"><span>STANDARD</span><p>Alcance claro, herramientas reales y revisión crítica antes de presentar resultados.</p></div>
        </aside>
      </section>

      <section className="manifest-section" aria-labelledby="manifest-title">
        <div>
          <SectionLabel>Posicionamiento</SectionLabel>
          <h2 id="manifest-title">Un showroom operativo que también sirve para vender capacidad real.</h2>
        </div>
        <div className="copy-block">
          <p>
            La propuesta es presentar una forma de trabajar real: cada perfil tiene responsabilidad,
            lenguaje de salida y herramientas para producir algo útil.
          </p>
          <p>
            El resultado es una vitrina creíble de lo que Black Tower puede activar: automatización,
            software interno, investigación, documentación, narrativa comercial, revisión crítica y acompañamiento.
          </p>
        </div>
      </section>

      <section id="perfiles" className="agents-section" aria-labelledby="agents-title">
        <div className="section-heading">
          <SectionLabel>Equipo disponible</SectionLabel>
          <h2 id="agents-title">Cada perfil tiene logo, rol, criterio de salida y responsabilidad clara.</h2>
          <p>
            Los nombres funcionan como identificadores operativos. Lo importante es que cada perfil reduce
            ambigüedad, separa responsabilidades y deja un entregable que puede revisarse.
          </p>
        </div>
        <div className="agent-grid">
          {agents.map((agent) => (
            <article className="agent-card" key={agent.profile} style={{ '--agent-accent': agent.accent } as CSSProperties}>
              <div className="agent-card__top">
                <div className="agent-logo" role="img" aria-label={`Logo de ${agent.name}`}>
                  <AgentIcon kind={agent.icon} />
                  <span className="agent-logo__code">{agent.logo}</span>
                </div>
                <div>
                  <h3>{agent.name}</h3>
                  <p>{agent.role}</p>
                </div>
              </div>
              <p className="agent-profile"><code>{agent.profile}</code> · {agent.reference}</p>
              <p className="agent-summary">{agent.summary}</p>
              <ul className="agent-does">
                {agent.does.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="agent-output">
                <span>Output estándar</span>
                <p>{agent.output}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="entorno" className="capabilities-section" aria-labelledby="capabilities-title">
        <div className="section-heading section-heading--dark">
          <SectionLabel>Sistema de trabajo</SectionLabel>
          <h2 id="capabilities-title">Perfiles, memoria y herramientas conectadas para ejecutar de punta a punta.</h2>
          <p>
            Black Tower opera como una capa de coordinación sobre Hermes: dirección decide, perfiles producen,
            Etharlia conserva contexto y Columbo bloquea entregables flojos antes de que salgan.
          </p>
        </div>
        <div className="pillar-grid">
          {capabilityPillars.map((pillar) => (
            <article className="pillar-card" key={pillar.title}>
              <span>{pillar.eyebrow}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.detail}</p>
              <div className="tool-list">
                {pillar.tools.map((tool) => <code key={tool}>{tool}</code>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="servicios" className="showcase-section" aria-labelledby="showcase-title">
        <div className="section-heading">
          <SectionLabel>Servicios activables</SectionLabel>
          <h2 id="showcase-title">Capacidades que se pueden enseñar, combinar y convertir en encargos.</h2>
        </div>
        <div className="showcase-grid">
          {showcasedCapabilities.map((item, index) => (
            <article className="showcase-card" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="flujo" className="flow-section grid-bg" aria-labelledby="flow-title">
        <div className="section-heading section-heading--dark">
          <SectionLabel>Cómo entra el trabajo</SectionLabel>
          <h2 id="flow-title">Un flujo simple para pasar de conversación a entrega verificable.</h2>
        </div>
        <div className="flow-timeline">
          {operatingFlow.map((item) => (
            <article className="flow-item" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="garantias" className="limits-section" aria-labelledby="limits-title">
        <div className="section-heading section-heading--narrow">
          <SectionLabel>Garantías y límites</SectionLabel>
          <h2 id="limits-title">Vendible no significa inflado: cada entrega sale con alcance y QA.</h2>
        </div>
        <div className="limits-grid">
          {explicitLimits.map((item) => (
            <article className="limit-card" key={item}>
              <span aria-hidden="true">✓</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section grid-bg" aria-labelledby="cta-title">
        <SectionLabel>Próximo paso</SectionLabel>
        <h2 id="cta-title">Elige un proceso, una idea o un entregable. Lo convertimos en un plan accionable.</h2>
        <p>
          La mejor forma de valorar el sistema es activarlo sobre un caso concreto: automatización interna,
          research, revisión de una web, mejora de una propuesta o construcción de una herramienta pequeña.
        </p>
        <AnchorButton href={contactHref}>Abrir conversación</AnchorButton>
      </section>

      <footer className="footer">
        <p>Black Tower Consulting · Equipo multiagente para automatización IA, software interno, research y entregables operativos.</p>
        <a href={contactHref}>hola@etharlia.com</a>
      </footer>
    </main>
  );
}
