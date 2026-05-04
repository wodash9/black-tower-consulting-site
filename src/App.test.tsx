import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';
import { agents, capabilityPillars, explicitLimits, operatingFlow, showcasedCapabilities } from './content';

describe('Black Tower Consulting Hermes showcase', () => {
  it('renders the showcase positioning above the fold without product-sales framing', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('showroom multiagente de Hermes');
    expect(screen.getByText(/Esta página no vende un producto cerrado/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /ver perfiles disponibles/i })[0]).toHaveAttribute('href', '#perfiles');
  });

  it('documents every available Hermes profile with logo, role and output', () => {
    render(<App />);
    for (const agent of agents) {
      expect(screen.getByRole('heading', { name: agent.name })).toBeInTheDocument();
      expect(screen.getByLabelText(`Logo de ${agent.name}`)).toHaveTextContent(agent.logo);
      expect(screen.getByText(agent.role)).toBeInTheDocument();
      expect(screen.getByText(agent.output)).toBeInTheDocument();
    }
  });

  it('shows the Hermes environment, operating flow, capabilities and explicit limits', () => {
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
});
