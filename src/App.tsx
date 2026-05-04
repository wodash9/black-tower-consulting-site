import type { CSSProperties } from 'react';

import {
  agents,
  capabilityPillars,
  contactHref,
  explicitLimits,
  operatingFlow,
  showcasedCapabilities
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
            <small>AI operations studio</small>
          </span>
        </a>
        <nav>
          <a href="#perfiles">Equipo</a>
          <a href="#entorno">Sistema</a>
          <a href="#servicios">Servicios</a>
          <a href="#garantias">Garantías</a>
        </nav>
      </header>

      <section id="inicio" className="hero grid-bg">
        <div className="hero__copy">
          <SectionLabel>Consultoría multiagente aplicada</SectionLabel>
          <h1>Un equipo de agentes especializados para convertir ideas y procesos en entregables reales.</h1>
          <p className="hero__lead">
            Black Tower Consulting coordina estrategia, producto, tecnología, investigación,
            marketing, ventas y QA mediante perfiles Hermes, Telegram como bus operativo,
            Etharlia como memoria de trabajo y herramientas conectadas al desarrollo real.
          </p>
          <div className="hero__actions">
            <AnchorButton href="#perfiles">Ver equipo multiagente</AnchorButton>
            <AnchorButton href="#servicios" variant="secondary">Ver servicios activables</AnchorButton>
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
                <div className="agent-logo" aria-label={`Logo de ${agent.name}`}>{agent.logo}</div>
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
