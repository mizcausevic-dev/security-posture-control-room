import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('Security Posture Control Room', () => {
  it('renders the main security posture message and queue panel', () => {
    render(<App />);

    expect(screen.getByText(/stale credentials, and remediation pressure/i)).toBeTruthy();
    expect(screen.getByText(/priority remediation workflows/i)).toBeTruthy();
    expect(screen.getByText(/unexpired high-risk waivers/i)).toBeTruthy();
  });
});
