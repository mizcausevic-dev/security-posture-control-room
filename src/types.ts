export type Tone = 'stable' | 'watch' | 'critical';

export interface MetricCard {
  label: string;
  value: string;
  delta: string;
  tone: Tone;
}

export interface ExposureTrendPoint {
  week: string;
  privilegedAccounts: number;
  staleCredentials: number;
  exposedAdminPaths: number;
}

export interface DomainRiskPoint {
  domain: string;
  risk: number;
  openActions: number;
}

export interface ExceptionRecord {
  team: string;
  exception: string;
  system: string;
  age: string;
  severity: string;
}

export interface QueueItem {
  workflow: string;
  owner: string;
  status: string;
  due: string;
  pressure: string;
  nextAction: string;
}

export interface SnapshotCard {
  title: string;
  body: string;
  tag: string;
}
