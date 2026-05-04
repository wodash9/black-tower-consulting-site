import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';
import { contactHref, deliverables, processCases, sprintSteps } from './content';

describe('Black Tower Consulting landing', () => {
  it('renders the concrete sprint offer above the fold', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Automatiza un proceso interno en 7 días');
    expect(screen.getAllByRole('link', { name: /solicitar diagnóstico/i })[0]).toHaveAttribute('href', contactHref);
  });

  it('contains operational process cases and deliverables', () => {
    render(<App />);
    for (const item of processCases) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
    for (const item of deliverables) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it('documents every sprint step without promising production delivery', () => {
    render(<App />);
    for (const step of sprintSteps) {
      expect(screen.getByText(step.day)).toBeInTheDocument();
      expect(screen.getByText(step.title)).toBeInTheDocument();
    }
    expect(screen.getByText(/No encaja si buscas/i)).toBeInTheDocument();
    expect(screen.getByText(/Implantación completa o crítica en producción en 7 días/i)).toBeInTheDocument();
  });
});
