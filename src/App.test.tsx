import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { App } from './App';
import { audiences, comparisonRows, differentiators, includedItems, mvpFormats, packages, processSteps } from './content';
import { detailedProblemGroups, opportunityGroups, priorityPlays, sourceLinks } from './researchContent';
import { taxOpportunities, taxProfiles, taxSources } from './taxAutonomosContent';

describe('Black Tower Consulting MVP landing', () => {
  afterEach(() => {
    window.history.pushState({}, '', '/');
  });

  it('renders MVP positioning above the fold with clear conversion actions', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Lanza tu MVP en semanas');
    expect(screen.getByText(/Consultora de producto, diseño y desarrollo/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Agendar diagnóstico MVP/i })[0]).toHaveAttribute('href', expect.stringContaining('mailto:'));
    expect(screen.getByText('MVP funcional en 2–6 semanas')).toBeInTheDocument();
  });

  it('uses business-specific MVP copy and avoids generic filler claims', () => {
    render(<App />);
    const copy = document.body.textContent ?? '';
    expect(copy).toMatch(/producto mínimo valioso/i);
    expect(copy).toMatch(/validar una hipótesis real de negocio/i);
    expect(copy).not.toMatch(/lorem ipsum/i);
    expect(copy).not.toMatch(/soluciones innovadoras para transformar tu negocio/i);
    expect(copy).not.toMatch(/potencia el futuro/i);
  });

  it('documents the problem, audience, build formats, process, offers and deliverables', () => {
    render(<App />);
    for (const row of comparisonRows) expect(screen.getByText(row.blackTower)).toBeInTheDocument();
    for (const audience of audiences) expect(screen.getByRole('heading', { name: audience.title })).toBeInTheDocument();
    for (const format of mvpFormats) expect(screen.getByText(format)).toBeInTheDocument();
    for (const step of processSteps) expect(screen.getByRole('heading', { name: step.title })).toBeInTheDocument();
    for (const pack of packages) expect(screen.getByRole('heading', { name: pack.name })).toBeInTheDocument();
    for (const item of differentiators) expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument();
    for (const item of includedItems) expect(screen.getByText(item)).toBeInTheDocument();
  });

  it('renders the business-problem research subpage with opportunities, priorities and sources', () => {
    window.history.pushState({}, '', '/problematicas-empresas/');

    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('problemáticas empresariales atacables');
    expect(screen.getByText('18 líneas de oportunidad y 36 microproblemas listos para entrevista.')).toBeInTheDocument();
    expect(screen.getByText('36 problemas de “esto pasa todos los días” para abrir conversaciones reales.')).toBeInTheDocument();
    for (const group of opportunityGroups) {
      expect(screen.getByRole('heading', { name: group.group })).toBeInTheDocument();
    }
    for (const group of detailedProblemGroups) {
      expect(screen.getByRole('heading', { name: group.group })).toBeInTheDocument();
    }
    expect(screen.getByRole('heading', { name: detailedProblemGroups[0].problems[0].microNiche })).toBeInTheDocument();
    expect(screen.getByText(detailedProblemGroups[1].problems[5].specificProblem)).toBeInTheDocument();
    for (const play of priorityPlays) {
      expect(screen.getByRole('heading', { name: play.title })).toBeInTheDocument();
    }
    expect(screen.getAllByRole('link', { name: /Deloitte/i })[0]).toHaveAttribute('href', sourceLinks[0].url);
  });

  it('renders the fiscal radar subpage for Spanish autónomos with legal caveats and sources', () => {
    window.history.pushState({}, '', '/radar-fiscal-autonomos/');

    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Radar fiscal para autónomos en España');
    expect(screen.getByText(/No es asesoramiento fiscal/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '14 oportunidades legales donde una gestoría IA puede reducir fugas y riesgo.' })).toBeInTheDocument();
    for (const group of taxOpportunities) {
      expect(screen.getByRole('heading', { name: group.group })).toBeInTheDocument();
    }
    expect(screen.getByRole('heading', { name: taxOpportunities[0].opportunities[1].title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: taxProfiles[0].profile })).toBeInTheDocument();
    expect(screen.getByText(taxProfiles[4].prototype)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /AEAT/i })[0]).toHaveAttribute('href', taxSources[0].url);
  });
});
