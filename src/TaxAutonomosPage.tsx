import type { ReactNode } from 'react';

import { contactHref } from './content';
import {
  taxMeta,
  taxNoGo,
  taxOpportunities,
  taxPatterns,
  taxProfiles,
  taxPrototype,
  taxSources,
  taxStats
} from './taxAutonomosContent';

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

export function TaxAutonomosPage() {
  return (
    <main className="site-shell research-page tax-page">
      <header className="topbar" aria-label="Navegación principal">
        <a className="brand" href="/" aria-label="Black Tower Consulting inicio">
          <span className="brand-mark" aria-hidden="true">
            <img src="/black-tower-logo-64.png" alt="" />
          </span>
          <span>
            <strong>Black Tower</strong>
            <small>Fiscal research</small>
          </span>
        </a>
        <nav>
          <a href="/#servicios">Servicios</a>
          <a href="/problematicas-empresas/">Problemáticas</a>
          <a href="#oportunidades">Oportunidades</a>
          <a href="#perfiles">Perfiles</a>
          <a href="#fuentes">Fuentes</a>
        </nav>
      </header>

      <section className="research-hero grid-bg" aria-labelledby="tax-title">
        <div className="research-hero__copy">
          <SectionLabel>Investigación fiscal BTC · {taxMeta.updated}</SectionLabel>
          <h1 id="tax-title">{taxMeta.title}</h1>
          <p className="hero__lead">{taxMeta.subtitle}</p>
          <p className="research-thesis">{taxMeta.thesis}</p>
          <p className="research-caveat">{taxMeta.caveat}</p>
          <div className="hero__actions">
            <AnchorButton href="#prototipo">Ver prototipo 7 días</AnchorButton>
            <AnchorButton href={contactHref} variant="secondary">Validar caso real</AnchorButton>
          </div>
        </div>
        <aside className="research-brief" aria-label="Resumen ejecutivo de investigación fiscal">
          {taxStats.map((stat) => (
            <article key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <p>{stat.detail}</p>
            </article>
          ))}
        </aside>
      </section>

      <section className="research-patterns" aria-labelledby="tax-patterns-title">
        <div>
          <SectionLabel>Patrones detectables</SectionLabel>
          <h2 id="tax-patterns-title">El valor está en cruzar ley, documento, banco, actividad y calendario fiscal.</h2>
        </div>
        <div className="pattern-list">
          {taxPatterns.map((pattern) => <span key={pattern}>{pattern}</span>)}
        </div>
      </section>

      <section id="oportunidades" className="opportunity-section" aria-labelledby="tax-opportunities-title">
        <div className="section-heading">
          <SectionLabel>Mapa fiscal accionable</SectionLabel>
          <h2 id="tax-opportunities-title">14 oportunidades legales donde una gestoría IA puede reducir fugas y riesgo.</h2>
          <p>
            No son trucos fiscales. Son puntos de control donde un autónomo suele perder deducciones legítimas, declarar con documentación débil o llegar tarde a un plazo.
          </p>
        </div>
        <div className="opportunity-groups">
          {taxOpportunities.map((group, groupIndex) => {
            const groupId = `tax-opportunity-group-${groupIndex + 1}`;

            return (
              <section className="opportunity-group" key={group.group} aria-labelledby={groupId}>
                <div className="opportunity-group__intro">
                  <h3 id={groupId}>{group.group}</h3>
                  <p>{group.angle}</p>
                </div>
                <div className="opportunity-grid tax-opportunity-grid">
                  {group.opportunities.map((item) => (
                    <article className="opportunity-card tax-opportunity-card" key={item.title}>
                      <div className="opportunity-card__top">
                        <span>Control fiscal</span>
                        <h4>{item.title}</h4>
                      </div>
                      <dl>
                        <div>
                          <dt>Base / criterio</dt>
                          <dd>{item.legalBasis}</dd>
                        </div>
                        <div>
                          <dt>Automatización</dt>
                          <dd>{item.productMove}</dd>
                        </div>
                        <div>
                          <dt>Ejemplo concreto</dt>
                          <dd>{item.example}</dd>
                        </div>
                        <div>
                          <dt>Riesgo</dt>
                          <dd>{item.risk}</dd>
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

      <section id="perfiles" className="detail-section" aria-labelledby="tax-profiles-title">
        <div className="section-heading">
          <SectionLabel>Casos por tipo de autónomo</SectionLabel>
          <h2 id="tax-profiles-title">10 perfiles donde el prototipo puede encontrar fugas documentales en una semana.</h2>
          <p>
            Cada perfil baja el research a problemas observables: documentos faltantes, gastos mixtos, regímenes especiales, conciliación y prueba.
          </p>
        </div>
        <div className="detail-grid tax-profile-grid">
          {taxProfiles.map((profile, index) => (
            <article className="detail-card tax-profile-card" key={profile.profile}>
              <div className="detail-card__index">{String(index + 1).padStart(2, '0')}</div>
              <h3>{profile.profile}</h3>
              <dl>
                <div>
                  <dt>Fugas habituales</dt>
                  <dd>
                    <ul className="tax-list">
                      {profile.leaks.map((leak) => <li key={leak}>{leak}</li>)}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>Documentos necesarios</dt>
                  <dd>{profile.documents}</dd>
                </div>
                <div>
                  <dt>Prototipo 7 días</dt>
                  <dd>{profile.prototype}</dd>
                </div>
                <div>
                  <dt>Riesgo</dt>
                  <dd>{profile.risk}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section id="prototipo" className="priority-section grid-bg" aria-labelledby="tax-prototype-title">
        <div className="section-heading section-heading--dark">
          <SectionLabel>Producto inicial</SectionLabel>
          <h2 id="tax-prototype-title">Primera versión vendible: radar fiscal documental para el trimestre.</h2>
          <p>
            El entregable no decide por el asesor. Prepara la evidencia, marca riesgos y convierte el caos documental del autónomo en una revisión accionable.
          </p>
        </div>
        <div className="priority-grid">
          {taxPrototype.map((item, index) => (
            <article className="priority-card" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section tax-boundary-section" aria-labelledby="tax-boundary-title">
        <div className="section-heading">
          <SectionLabel>Frontera legal</SectionLabel>
          <h2 id="tax-boundary-title">Lo que Black Tower no debería vender en esta línea.</h2>
          <p>
            Para que el producto sea defendible, la promesa debe ser “cumplimiento y optimización legal con revisión”, no ingeniería fiscal agresiva.
          </p>
        </div>
        <div className="priority-grid">
          {taxNoGo.map((item, index) => (
            <article className="priority-card tax-no-go-card" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="fuentes" className="sources-section" aria-labelledby="tax-sources-title">
        <div className="section-heading section-heading--narrow">
          <SectionLabel>Fuentes oficiales</SectionLabel>
          <h2 id="tax-sources-title">Fuentes usadas para orientar la investigación.</h2>
          <p>
            Las fuentes son base de hipótesis y reglas de control. La aplicación concreta debe revisarse contra la normativa vigente y el caso del autónomo.
          </p>
        </div>
        <div className="sources-grid">
          {taxSources.map((source) => (
            <a href={source.url} key={source.url} target="_blank" rel="noreferrer">
              <span>{source.label}</span>
              <small>{source.url.replace(/^https?:\/\//, '')}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="cta-section grid-bg" aria-labelledby="tax-cta-title">
        <SectionLabel>Siguiente movimiento</SectionLabel>
        <h2 id="tax-cta-title">Validar con una gestoría real: 20 facturas, 2 extractos y una liquidación trimestral.</h2>
        <p>
          El sprint correcto no promete ahorro: entrega un informe de oportunidades, riesgos y documentos faltantes para que el asesor decida con evidencia.
        </p>
        <AnchorButton href={contactHref}>Abrir conversación</AnchorButton>
      </section>

      <footer className="footer">
        <p>Black Tower Consulting · Research fiscal aplicado a automatización IA para autónomos.</p>
        <a href="/">Volver a la página principal</a>
      </footer>
    </main>
  );
}
