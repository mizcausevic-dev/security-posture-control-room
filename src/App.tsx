import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { domainRisk, exceptions, exposureTrend, metrics, queueItems, snapshots } from './data';

export default function App() {
  return (
    <div className="shell">
      <header className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Security Posture Control Room</p>
          <h1>Identity drift, admin exposure, stale credentials, and remediation pressure in one security command surface.</h1>
          <p className="lede">
            A recruiter-ready frontend built to feel like a real internal control room for security leadership, IAM operators,
            platform teams, and compliance stakeholders managing access risk under time pressure.
          </p>
        </div>
        <aside className="heroPanel">
          <span className="heroLabel">Posture</span>
          <strong>Contained, but executive-visible</strong>
          <p>Production access drift is manageable, but exceptions and stale credentials need immediate closure to reduce high-risk surface area.</p>
        </aside>
      </header>

      <section className="metricGrid">
        {metrics.map((metric) => (
          <article key={metric.label} className={`metricCard tone-${metric.tone}`}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.delta}</p>
          </article>
        ))}
      </section>

      <section className="panelGrid">
        <article className="panel panel-large">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Risk drift</p>
              <h2>Privileged exposure and stale access trend</h2>
            </div>
            <span className="tag">Last 4 weeks</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={exposureTrend}>
              <defs>
                <linearGradient id="privileged" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.85} />
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="stale" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#243145" vertical={false} />
              <XAxis dataKey="week" stroke="#9bb1c9" />
              <YAxis stroke="#9bb1c9" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="privilegedAccounts" stroke="#38bdf8" fill="url(#privileged)" />
              <Area type="monotone" dataKey="staleCredentials" stroke="#f97316" fill="url(#stale)" />
            </AreaChart>
          </ResponsiveContainer>
        </article>

        <article className="panel">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Executive snapshot</p>
              <h2>Security posture readout</h2>
            </div>
          </div>
          <div className="snapshotStack">
            {snapshots.map((snapshot) => (
              <div key={snapshot.title} className="snapshotCard">
                <span>{snapshot.tag}</span>
                <strong>{snapshot.title}</strong>
                <p>{snapshot.body}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="panelGrid">
        <article className="panel panel-large">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Action queue</p>
              <h2>Priority remediation workflows</h2>
            </div>
            <span className="tag">SLA aware</span>
          </div>
          <div className="tableWrap">
            <table>
              <thead>
                <tr>
                  <th>Workflow</th>
                  <th>Owner</th>
                  <th>Status</th>
                  <th>Due</th>
                  <th>Pressure</th>
                  <th>Next action</th>
                </tr>
              </thead>
              <tbody>
                {queueItems.map((item) => (
                  <tr key={item.workflow}>
                    <td>{item.workflow}</td>
                    <td>{item.owner}</td>
                    <td>{item.status}</td>
                    <td>{item.due}</td>
                    <td>{item.pressure}</td>
                    <td>{item.nextAction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="panel">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Exceptions</p>
              <h2>Unexpired high-risk waivers</h2>
            </div>
          </div>
          <ul className="exceptionList">
            {exceptions.map((item) => (
              <li key={item.exception}>
                <div>
                  <strong>{item.exception}</strong>
                  <p>{item.system} · {item.team}</p>
                </div>
                <div className="exceptionMeta">
                  <span>{item.severity}</span>
                  <small>{item.age}</small>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <div>
            <p className="panelLabel">Domain pressure</p>
            <h2>Access-risk concentration by operating domain</h2>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={domainRisk}>
            <CartesianGrid stroke="#243145" vertical={false} />
            <XAxis dataKey="domain" stroke="#9bb1c9" />
            <YAxis stroke="#9bb1c9" />
            <Tooltip />
            <Legend />
            <Bar dataKey="risk" fill="#ef4444" radius={[10, 10, 0, 0]} />
            <Bar dataKey="openActions" fill="#60a5fa" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
}
