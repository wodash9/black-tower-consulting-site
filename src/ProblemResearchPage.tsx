import type { ReactNode } from 'react';

import {
  automationPatterns,
  detailedProblemGroups,
  opportunityGroups,
  priorityPlays,
  researchMeta,
  researchStats,
  sourceLinks
} from './researchContent';
import { contactHref } from './content';

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function AnchorButton({ href, children, variant = 'primary' }: { href: string; children: string; variant?: 'primary' | 'secondary' }) {
  return (
    <a className={`btn btn--${variant}`} href={href}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export function ProblemResearchPage() {
  return (
    <main className="site-shell research-page">
      <header className="topbar" aria-label="Navegación principal">
        <a className="brand" href="/" aria-label="Black Tower Consulting inicio">
          <span className="brand-mark" aria-hidden="true">BT</span>
          <span>
            <strong>Black Tower</strong>
            <small>Research brief</small>
          </span>
        </a>
        <nav>
          <a href="/#servicios">Servicios</a>
          <a href="#oportunidades">Oportunidades</a>
          <a href="#microproblemas">Microproblemas</a>
          <a href="#prioridad">Prioridad</a>
          <a href="/radar-fiscal-autonomos/">Radar fiscal</a>
          <a href="#fuentes">Fuentes</a>
        </nav>
      </header>

      <section className="research-hero grid-bg" aria-labelledby="research-title">
        <div className="research-hero__copy">
          <SectionLabel>Investigación BTC · {researchMeta.updated}</SectionLabel>
          <h1 id="research-title">{researchMeta.title}</h1>
          <p className="hero__lead">{researchMeta.subtitle}</p>
          <p className="research-thesis">{researchMeta.thesis}</p>
          <p className="research-caveat">{researchMeta.caveat}</p>
          <div className="hero__actions">
            <AnchorButton href="#prioridad">Ver mejores apuestas</AnchorButton>
            <AnchorButton href={contactHref} variant="secondary">Pedir sprint de diagnóstico</AnchorButton>
          </div>
        </div>
        <aside className="research-brief" aria-label="Resumen ejecutivo de investigación">
          {researchStats.map((stat) => (
            <article key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <p>{stat.detail}</p>
            </article>
          ))}
        </aside>
      </section>

      <section className="research-patterns" aria-labelledby="patterns-title">
        <div>
          <SectionLabel>Patrones de automatización</SectionLabel>
          <h2 id="patterns-title">La mayoría de oportunidades atacables son traducciones de trabajo informal a evidencia útil.</h2>
        </div>
        <div className="pattern-list">
          {automationPatterns.map((pattern) => <span key={pattern}>{pattern}</span>)}
        </div>
      </section>

      <section id="oportunidades" className="opportunity-section" aria-labelledby="opportunities-title">
        <div className="section-heading">
          <SectionLabel>Mapa de dolores</SectionLabel>
          <h2 id="opportunities-title">18 líneas de oportunidad y 36 microproblemas listos para entrevista.</h2>
          <p>
            Primero aparecen las familias de oportunidad. Después, la biblioteca baja a problemas más concretos: pieza, documento, equipo, zona, expediente o visita donde se puede prototipar en una semana.
          </p>
        </div>
        <div className="opportunity-groups">
          {opportunityGroups.map((group, groupIndex) => {
            const groupId = `opportunity-group-${groupIndex + 1}`;

            return (
              <section className="opportunity-group" key={group.group} aria-labelledby={groupId}>
                <div className="opportunity-group__intro">
                  <h3 id={groupId}>{group.group}</h3>
                  <p>{group.angle}</p>
                </div>
                <div className="opportunity-grid">
                  {group.opportunities.map((item) => (
                    <article className="opportunity-card" key={item.niche}>
                      <div className="opportunity-card__top">
                        <span>{item.difficulty}</span>
                        <h4>{item.niche}</h4>
                      </div>
                      <dl>
                        <div>
                          <dt>Problema</dt>
                          <dd>{item.pain}</dd>
                        </div>
                        <div>
                          <dt>Automatización</dt>
                          <dd>{item.automation}</dd>
                        </div>
                        <div>
                          <dt>Señales de venta</dt>
                          <dd>{item.signal}</dd>
                        </div>
                        <div>
                          <dt>Primera entrega</dt>
                          <dd>{item.firstDeliverable}</dd>
                        </div>
                      </dl>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section id="microproblemas" className="detail-section" aria-labelledby="detail-title">
        <div className="section-heading">
          <SectionLabel>Biblioteca concreta</SectionLabel>
          <h2 id="detail-title">36 problemas de “esto pasa todos los días” para abrir conversaciones reales.</h2>
          <p>
            Estos ejemplos son más estrechos a propósito. Cada tarjeta apunta a un fallo operativo observable, quién lo sufre, qué datos capturar y qué prototipo razonable se puede enseñar en 7 días.
          </p>
        </div>
        <div className="detail-groups">
          {detailedProblemGroups.map((group, groupIndex) => {
            const detailGroupId = `detail-group-${groupIndex + 1}`;

            return (
              <section className="detail-group" key={group.group} aria-labelledby={detailGroupId}>
                <div className="detail-group__intro">
                  <span>{String(groupIndex + 1).padStart(2, '0')}</span>
                  <h3 id={detailGroupId}>{group.group}</h3>
                  <p>{group.description}</p>
                </div>
                <div className="detail-grid">
                  {group.problems.map((problem, problemIndex) => (
                    <article className="detail-card" key={problem.microNiche}>
                      <div className="detail-card__index">{String(problemIndex + 1).padStart(2, '0')}</div>
                      <h4>{problem.microNiche}</h4>
                      <dl>
                        <div>
                          <dt>Problema exacto</dt>
                          <dd>{problem.specificProblem}</dd>
                        </div>
                        <div>
                          <dt>Disparador / comprador</dt>
                          <dd>{problem.buyerTrigger}</dd>
                        </div>
                        <div>
                          <dt>Datos a capturar</dt>
                          <dd>{problem.capturedData}</dd>
                        </div>
                        <div>
                          <dt>Prototipo 7 días</dt>
                          <dd>{problem.sevenDayPrototype}</dd>
                        </div>
                      </dl>
                      <p className="detail-card__wedge">{problem.concreteWedge}</p>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section id="prioridad" className="priority-section grid-bg" aria-labelledby="priority-title">
        <div className="section-heading section-heading--dark">
          <SectionLabel>Prioridad comercial</SectionLabel>
          <h2 id="priority-title">Dónde atacaría Black Tower primero.</h2>
          <p>
            Priorización por facilidad de prototipo, claridad del dolor, comprador accesible y capacidad de demostrar valor sin integraciones pesadas.
          </p>
        </div>
        <div className="priority-grid">
          {priorityPlays.map((play, index) => (
            <article className="priority-card" key={play.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{play.title}</h3>
              <p>{play.why}</p>
              <div>
                <strong>Comprador</strong>
                <p>{play.buyer}</p>
              </div>
              <blockquote>{play.wedge}</blockquote>
            </article>
          ))}
        </div>
      </section>

      <section id="fuentes" className="sources-section" aria-labelledby="sources-title">
        <div className="section-heading section-heading--narrow">
          <SectionLabel>Fuentes y trazabilidad</SectionLabel>
          <h2 id="sources-title">Fuentes usadas para orientar la investigación.</h2>
          <p>
            No son promesas de ROI. Son señales externas que ayudan a escoger problemas reales para validar con entrevistas y procesos concretos.
          </p>
        </div>
        <div className="sources-grid">
          {sourceLinks.map((source) => (
            <a href={source.url} key={source.url} target="_blank" rel="noreferrer">
              <span>{source.label}</span>
              <small>{source.url.replace(/^https?:\/\//, '')}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="cta-section grid-bg" aria-labelledby="research-cta-title">
        <SectionLabel>Siguiente movimiento</SectionLabel>
        <h2 id="research-cta-title">Escoge un nicho y una empresa real: el research solo vale cuando se convierte en entrevista y prototipo.</h2>
        <p>
          Black Tower puede usar este mapa para preparar outbound, guion de diagnóstico y una demo de proceso en una semana.
        </p>
        <AnchorButton href={contactHref}>Abrir conversación</AnchorButton>
      </section>

      <footer className="footer">
        <p>Black Tower Consulting · Investigación aplicada a automatización IA y software interno.</p>
        <a href="/">Volver a la página principal</a>
      </footer>
    </main>
  );
}
