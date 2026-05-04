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
            <small>Hermes showcase</small>
          </span>
        </a>
        <nav>
          <a href="#perfiles">Perfiles</a>
          <a href="#entorno">Entorno</a>
          <a href="#flujo">Flujo</a>
          <a href="#limites">Límites</a>
        </nav>
      </header>

      <section id="inicio" className="hero grid-bg">
        <div className="hero__copy">
          <SectionLabel>Exposición técnica de capacidades</SectionLabel>
          <h1>Black Tower Consulting como showroom multiagente de Hermes.</h1>
          <p className="hero__lead">
            Esta página no vende un producto cerrado. Muestra cómo Ventura puede usar Hermes,
            perfiles especializados, Telegram, Obsidian, repositorios y herramientas conectadas para
            convertir una intención en trabajo coordinado, verificable y trazable.
          </p>
          <div className="hero__actions">
            <AnchorButton href="#perfiles">Ver perfiles disponibles</AnchorButton>
            <AnchorButton href="#entorno" variant="secondary">Ver entorno Hermes</AnchorButton>
          </div>
          <p className="microcopy">11 perfiles · protocolo TASK/DONE/BLOCKED/QA · Obsidian como fuente de verdad · ejecución con herramientas reales</p>
        </div>

        <aside className="tower-console" aria-label="Consola del entorno Black Tower Consulting">
          <div className="console-header">
            <span>BTC // HERMES ENVIRONMENT</span>
            <strong>SHOWCASE MODE</strong>
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
              <span>Source</span>
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
          <div className="console-line"><span>TASK</span><p>Brief → orquestación → ejecución → QA → entrega.</p></div>
          <div className="console-line console-line--ok"><span>RULE</span><p>No prometer capacidades sin validarlas en el contexto concreto.</p></div>
        </aside>
      </section>

      <section className="manifest-section" aria-labelledby="manifest-title">
        <div>
          <SectionLabel>Cambio de intención</SectionLabel>
          <h2 id="manifest-title">De landing comercial a mapa visible del sistema.</h2>
        </div>
        <div className="copy-block">
          <p>
            La versión anterior explicaba un sprint de automatización IA. Esta versión enseña la
            infraestructura humana y técnica detrás: quién hace qué, con qué herramientas y bajo qué límites.
          </p>
          <p>
            Sirve como pieza de exposición para enseñar el entorno Hermes de Ventura: una torre de perfiles
            especializados capaces de investigar, construir, revisar, documentar y coordinar sin convertirse en teatro organizativo.
          </p>
        </div>
      </section>

      <section id="perfiles" className="agents-section" aria-labelledby="agents-title">
        <div className="section-heading">
          <SectionLabel>Perfiles disponibles</SectionLabel>
          <h2 id="agents-title">Cada agente tiene logo, rol, criterio de salida y responsabilidad clara.</h2>
          <p>
            Los nombres son internos. Lo importante no es la ficción: es que cada perfil reduce ambigüedad,
            evita mezclar responsabilidades y deja un entregable revisable.
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
          <SectionLabel>Entorno Hermes</SectionLabel>
          <h2 id="capabilities-title">No es solo chat: es coordinación + memoria + herramientas.</h2>
          <p>
            Black Tower Consulting funciona como demostrador de lo que se puede montar encima de Hermes cuando los perfiles, las reglas y las herramientas están conectadas.
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

      <section className="showcase-section" aria-labelledby="showcase-title">
        <div className="section-heading">
          <SectionLabel>Capacidades mostrables</SectionLabel>
          <h2 id="showcase-title">Qué permite enseñar esta página sin vender humo.</h2>
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
          <SectionLabel>Cómo se usa</SectionLabel>
          <h2 id="flow-title">Un flujo simple para que los agentes trabajen sin ruido.</h2>
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

      <section id="limites" className="limits-section" aria-labelledby="limits-title">
        <div className="section-heading section-heading--narrow">
          <SectionLabel>Límites explícitos</SectionLabel>
          <h2 id="limits-title">La exposición vale más si dice también lo que no garantiza.</h2>
        </div>
        <div className="limits-grid">
          {explicitLimits.map((item) => (
            <article className="limit-card" key={item}>
              <span aria-hidden="true">!</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section grid-bg" aria-labelledby="cta-title">
        <SectionLabel>Uso recomendado</SectionLabel>
        <h2 id="cta-title">Usa esta web como demo del sistema, no como folleto de venta.</h2>
        <p>
          Enseña los perfiles, explica qué puede hacer cada uno y luego abre una tarea real: crear una nota,
          revisar una web, investigar un mercado, modificar un repo o preparar un entregable con QA.
        </p>
        <AnchorButton href={contactHref} variant="secondary">Comentar el showcase</AnchorButton>
      </section>

      <footer className="footer">
        <p>Black Tower Consulting · Showroom de perfiles Hermes, coordinación multiagente y herramientas conectadas.</p>
        <a href={contactHref}>hola@etharlia.com</a>
      </footer>
    </main>
  );
}
