import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { App } from './App';
import { agents, capabilityPillars, explicitLimits, operatingFlow, showcasedCapabilities } from './content';
import { opportunityGroups, priorityPlays, sourceLinks } from './researchContent';

describe('Black Tower Consulting sellable multiagent showroom', () => {
  afterEach(() => {
    window.history.pushState({}, '', '/');
  });

  it('renders a real business positioning above the fold', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('entregables reales');
    expect(screen.getByText(/Consultoría multiagente aplicada/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /ver equipo multiagente/i })[0]).toHaveAttribute('href', '#perfiles');
  });

  it('avoids self-deprecating MVP/test-page language in the rendered copy', () => {
    render(<App />);
    const copy = document.body.textContent ?? '';
    expect(copy).not.toMatch(/MVP/i);
    expect(copy).not.toMatch(/producto cerrado/i);
    expect(copy).not.toMatch(/esta página/i);
    expect(copy).not.toMatch(/página suelta/i);
    expect(copy).not.toMatch(/\bprueba\b/i);
  });

  it('documents every available Hermes profile with logo, role and output', () => {
    render(<App />);
    expect(document.querySelectorAll('.agent-icon')).toHaveLength(agents.length);
    for (const agent of agents) {
      expect(screen.getByRole('heading', { name: agent.name })).toBeInTheDocument();
      const logo = screen.getByRole('img', { name: `Logo de ${agent.name}` });
      expect(logo).toHaveTextContent(agent.logo);
      expect(screen.getByText(agent.role)).toBeInTheDocument();
      expect(screen.getByText(agent.output)).toBeInTheDocument();
    }
  });

  it('shows the operating system, workflow, services and scoped guarantees', () => {
    render(<App />);
    for (const pillar of capabilityPillars) {
      expect(screen.getByText(pillar.title)).toBeInTheDocument();
    }
    for (const item of operatingFlow) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    }
    for (const item of showcasedCapabilities) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
    for (const item of explicitLimits) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it('renders the business-problem research subpage with opportunities, priorities and sources', () => {
    window.history.pushState({}, '', '/problematicas-empresas/');

    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('problemáticas empresariales atacables');
    expect(screen.getByText('18 problemáticas específicas con una primera entrega posible.')).toBeInTheDocument();
    for (const group of opportunityGroups) {
      expect(screen.getByRole('heading', { name: group.group })).toBeInTheDocument();
    }
    for (const play of priorityPlays) {
      expect(screen.getByRole('heading', { name: play.title })).toBeInTheDocument();
    }
    expect(screen.getAllByRole('link', { name: /Deloitte/i })[0]).toHaveAttribute('href', sourceLinks[0].url);
  });
});
