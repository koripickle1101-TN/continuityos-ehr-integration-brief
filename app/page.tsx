"use client";

import {
  ArrowUpRight,
  ClipboardCheck,
  FileText,
  Layers3,
  LineChart,
  ShieldCheck,
  Stethoscope,
  Users
} from "lucide-react";

const metrics = [
  { label: "Workflow Scope", value: "10", icon: Layers3 },
  { label: "Implementation Phases", value: "7", icon: ClipboardCheck },
  { label: "KPI Families", value: "4", icon: LineChart },
  { label: "Risk Controls", value: "7", icon: ShieldCheck }
];

const workflow = [
  ["01", "Patient check-in", "Demographic, insurance, and access information enters the workflow."],
  ["02", "Clinical documentation", "Care intent is translated into structured clinical evidence."],
  ["03", "Coding and charge capture", "Documentation is converted into codes, charges, and claim logic."],
  ["04", "Billing and follow-up", "Claims, denials, patient billing, and reimbursement outcomes appear downstream."]
];

const roadmap = [
  ["01", "Workflow Discovery", "Map the process from check-in through billing and identify friction points."],
  ["02", "Requirements Definition", "Define clinical, operational, patient, and revenue cycle requirements."],
  ["03", "System Evaluation", "Compare tools using usability, integration, cost, and workflow impact."],
  ["04", "Configuration + Testing", "Test realistic patient scenarios before go-live."],
  ["05", "Training + Support", "Provide role-specific training and at-the-elbow support."],
  ["06", "Optimization", "Refine templates, alerts, reports, and communication pathways."],
  ["07", "Outcome Review", "Review results at 30, 90, and 180 days post-implementation."]
];

const kpis = [
  ["Patient Experience", "Wait time, repeated questions, portal use, billing clarity"],
  ["Clinical Workflow", "Documentation completeness, EHR time, order completion"],
  ["Operations", "Patient flow, room turnover, discharge processing"],
  ["Revenue Cycle", "Denial rate, clean claims, A/R days, charge accuracy"]
];

const risks = [
  ["Change resistance", "Use frontline input, champions, and clear purpose."],
  ["Productivity loss", "Use phased launch, super-users, and go-live support."],
  ["Alert fatigue", "Limit alerts to meaningful, role-specific signals."],
  ["Revenue disruption", "Test claim workflows and monitor denials early."]
];

const scorecard = [
  ["EHR Integration", "25%", "9/10"],
  ["Usability", "20%", "8/10"],
  ["Patient Impact", "20%", "9/10"],
  ["RCM Impact", "20%", "9/10"],
  ["Support", "15%", "8/10"]
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero-shell">
        <div className="hero-topline">
          <div className="brand-mark">COS</div>
          <div>
            <p className="eyebrow">Healthcare Information Systems</p>
            <p className="microcopy">EHR integration · patient flow · revenue cycle continuity</p>
          </div>
        </div>

        <div className="hero">
          <div>
            <p className="kicker">Patient-to-Professional Portfolio Brief</p>
            <h1 className="serif">
              Continuity<span className="orange">OS</span>
              <br />
              Integration Brief
            </h1>
            <p className="lede">
              A simulated healthcare information systems recommendation brief showing how disconnected intake, documentation, coding, billing, and revenue cycle workflows can be redesigned into one continuous operational system.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="https://github.com/koripickle1101-TN/continuityos-ehr-integration-brief" target="_blank" rel="noreferrer">
                View GitHub Repo <ArrowUpRight size={16} />
              </a>
              <a className="button secondary" href="#memo">
                Read Brief <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <aside className="executive-card">
            <div className="card-header">
              <span>Integration Readiness</span>
              <span className="status-pill">Simulated</span>
            </div>
            <div className="hero-score serif">91.6</div>
            <p className="score-caption">
              Composite readiness score based on EHR integration, usability, patient impact, revenue cycle impact, and implementation support.
            </p>
            <div className="mini-grid">
              <div><span>Perspective</span><strong>Student + Patient</strong></div>
              <div><span>Scope</span><strong>Enterprise Flow</strong></div>
              <div><span>Data</span><strong>No PHI</strong></div>
              <div><span>Use</span><strong>Portfolio Proof</strong></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="metrics-grid">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <article className="metric" key={metric.label}>
              <Icon size={24} />
              <div className="metric-label">{metric.label}</div>
              <div className="metric-value">{metric.value}</div>
            </article>
          );
        })}
      </section>

      <section className="section two-column" id="memo">
        <div>
          <p className="kicker">Executive Recommendation</p>
          <h2 className="serif section-title">Information systems should reduce patient friction, not just digitize it.</h2>
        </div>
        <article className="card">
          <p>
            As a health care management student with extensive patient experience, I have seen how disconnected information systems shape the real patient experience. When registration, documentation, coding, and billing do not connect, patients repeat information, staff duplicate work, and revenue cycle teams inherit preventable downstream issues.
          </p>
          <p>
            ContinuityOS recommends a phased enterprise integration approach that connects intake, clinical documentation, coding, charge capture, billing, and feedback loops into one measurable workflow.
          </p>
        </article>
      </section>

      <section className="section two-column">
        <div>
          <p className="kicker">Where the Workflow Breaks</p>
          <h2 className="serif section-title">The patient journey and the revenue cycle are the same operational chain.</h2>
        </div>
        <div className="workflow-list">
          {workflow.map(([number, title, text]) => (
            <div className="workflow-item" key={title}>
              <span className="badge">{number}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="kicker">Implementation Roadmap</p>
        <h2 className="serif section-title">A staged implementation plan built around real workflow behavior.</h2>
        <div className="roadmap-grid">
          {roadmap.map(([number, title, text]) => (
            <article className="roadmap-step" key={title}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="kicker">Measurement Plan</p>
        <h2 className="serif section-title">The system should be judged by outcomes, not by installation alone.</h2>
        <div className="kpi-grid">
          {kpis.map(([title, text]) => (
            <article className="kpi-card" key={title}>
              <span>KPI Family</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section two-column">
        <div>
          <p className="kicker">Risk Controls</p>
          <h2 className="serif section-title">Implementation risk has to be managed before staff carry the burden.</h2>
        </div>
        <div className="risk-grid">
          {risks.map(([title, text]) => (
            <article className="risk-card" key={title}>
              <span>Risk</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="kicker">Simulated Scorecard</p>
        <h2 className="serif section-title">A simple decision framework for comparing health information system tools.</h2>
        <div className="score-grid">
          {scorecard.map(([category, weight, score]) => (
            <article className="scorecard-card" key={category}>
              <span>{category}</span>
              <strong>{score}</strong>
              <p>Weight: {weight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section card">
        <p className="kicker">Portfolio Disclaimer</p>
        <h2 className="serif section-title">Academic simulation. Professional thinking. No protected data.</h2>
        <p>
          This project is a simulated academic and professional portfolio artifact. It does not use patient data, internal hospital data, proprietary system data, or confidential operational information. It is designed to show health care information systems thinking from a student and patient-to-professional perspective.
        </p>
      </section>

      <footer className="footer">
        <div className="footer-rule" />
        <p className="kicker">Created by Kori Pickle</p>
        <div className="signature">Kori Pickle</div>
        <p>Health Care Management Student · Patient-to-Professional Perspective · Healthcare Information Systems</p>
      </footer>
    </main>
  );
}
