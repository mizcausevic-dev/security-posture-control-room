import type {
  DomainRiskPoint,
  ExceptionRecord,
  ExposureTrendPoint,
  MetricCard,
  QueueItem,
  SnapshotCard
} from './types';

export const metrics: MetricCard[] = [
  { label: 'Privileged accounts', value: '126', delta: '9 above baseline', tone: 'critical' },
  { label: 'Stale credentials', value: '42', delta: '14 older than 90 days', tone: 'watch' },
  { label: 'Exposed admin paths', value: '7', delta: '2 need urgent closure', tone: 'critical' },
  { label: 'Remediation velocity', value: '83%', delta: '+11 pts this month', tone: 'stable' }
];

export const exposureTrend: ExposureTrendPoint[] = [
  { week: 'W1', privilegedAccounts: 118, staleCredentials: 36, exposedAdminPaths: 5 },
  { week: 'W2', privilegedAccounts: 120, staleCredentials: 38, exposedAdminPaths: 6 },
  { week: 'W3', privilegedAccounts: 123, staleCredentials: 40, exposedAdminPaths: 7 },
  { week: 'W4', privilegedAccounts: 126, staleCredentials: 42, exposedAdminPaths: 7 }
];

export const domainRisk: DomainRiskPoint[] = [
  { domain: 'Identity core', risk: 87, openActions: 6 },
  { domain: 'Cloud administration', risk: 78, openActions: 4 },
  { domain: 'Customer support tooling', risk: 63, openActions: 7 },
  { domain: 'Financial systems', risk: 81, openActions: 5 },
  { domain: 'Engineering delivery', risk: 58, openActions: 3 }
];

export const queueItems: QueueItem[] = [
  {
    workflow: 'Rotate shared production vault credentials',
    owner: 'Security Engineering',
    status: 'In progress',
    due: 'Today',
    pressure: 'Critical',
    nextAction: 'Complete staged cutover'
  },
  {
    workflow: 'Retire dormant super-admin accounts',
    owner: 'IAM Operations',
    status: 'Awaiting manager attestations',
    due: 'May 8',
    pressure: 'High',
    nextAction: 'Escalate missing attestations'
  },
  {
    workflow: 'Close public admin ingress exception',
    owner: 'Platform Security',
    status: 'Blocked by change freeze',
    due: 'May 9',
    pressure: 'Critical',
    nextAction: 'Approve emergency path'
  },
  {
    workflow: 'Reduce finance role entitlement sprawl',
    owner: 'Compliance Engineering',
    status: 'Queued for review',
    due: 'May 10',
    pressure: 'Medium',
    nextAction: 'Route to role-mining lane'
  }
];

export const exceptions: ExceptionRecord[] = [
  {
    team: 'Platform',
    exception: 'Public bastion fallback',
    system: 'AWS production perimeter',
    age: '11 days',
    severity: 'Critical'
  },
  {
    team: 'Finance Ops',
    exception: 'Temporary ERP admin elevation',
    system: 'Revenue reporting stack',
    age: '19 days',
    severity: 'High'
  },
  {
    team: 'Support',
    exception: 'Console access retention',
    system: 'Customer support suite',
    age: '27 days',
    severity: 'Medium'
  }
];

export const snapshots: SnapshotCard[] = [
  {
    title: 'Executive posture',
    body: 'Privilege pressure is concentrated in production administration and finance-adjacent systems.',
    tag: 'Board-ready'
  },
  {
    title: 'Immediate risk',
    body: 'Two exposed admin paths and overdue stale-account cleanup are driving most of this week’s escalation load.',
    tag: 'Needs action'
  },
  {
    title: 'Best lever',
    body: 'Faster manager attestations and exception closeout would materially reduce high-risk surface area.',
    tag: 'Operational gain'
  }
];
