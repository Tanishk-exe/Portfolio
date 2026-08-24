import { motion } from 'framer-motion';
import {
  CheckCircle2,
  GraduationCap,
  Award,
  Languages,
  Star,
  MapPin,
  Mail,
} from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons.jsx';
import { about, profile, leadershipHighlights } from '../data/content.js';

export default function About() {
  return (
    <div className="container">
      <div className="page-header">
        <span className="mono">// about me</span>
        <h1 className="page-title">
          From using AI to <span className="gradient-text">building</span> it
        </h1>
        <p className="page-subtitle">
          AI/ML engineer, teacher, and builder — currently deep in LLM
          applications, RAG systems, and AI agents.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-story">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p>{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <div style={{ marginTop: 8 }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 16 }}>
                <GraduationCap
                  size={20}
                  style={{ verticalAlign: '-3px', marginRight: 8, color: 'var(--violet)' }}
                />
                Education
              </h3>
              {about.education.map((e) => (
                <div className="card edu-card" key={e.school}>
                  <h4>{e.school}</h4>
                  <div className="edu-degree">{e.degree}</div>
                  <div className="edu-meta">
                    <span>{e.years}</span>
                    <span><MapPin size={12} style={{ verticalAlign: '-2px' }} /> {e.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ marginTop: 32 }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 16 }}>
                <Star size={19} style={{ verticalAlign: '-3px', marginRight: 8, color: 'var(--amber)' }} />
                Leadership & Achievements
              </h3>
              <ul className="leadership-list">
                {leadershipHighlights.map((l) => (
                  <motion.li
                    key={l}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <Star size={16} />
                    <span>{l}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="about-col">
          <Reveal delay={0.05}>
            <div className="card" style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 12 }}>
                <Mail
                  size={20}
                  style={{ verticalAlign: '-4px', marginRight: 8, color: 'var(--cyan)' }}
                />
                Contact
              </h3>
              <ul className="gallery-contact-list">
                <li>
                  <Mail size={16} />
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
                <li>
                  <MapPin size={16} />
                  {profile.location}
                </li>
                <li>
                  <GithubIcon size={16} />
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    github.com/tanishk-exe
                  </a>
                </li>
                <li>
                  <LinkedinIcon size={16} />
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    in/imtanishk
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3>
              <Award size={20} style={{ verticalAlign: '-4px', marginRight: 8, color: 'var(--green)' }} />
              Certifications
            </h3>
            <ul className="cert-list">
              {about.certifications.map((c) => (
                <li key={c}>
                  <CheckCircle2 size={16} />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <h3>
              <Languages size={20} style={{ verticalAlign: '-4px', marginRight: 8, color: 'var(--cyan)' }} />
              Languages
            </h3>
            <ul className="lang-list">
              {about.languages.map((l) => (
                <li key={l.name}>
                  <span className="lang-name">{l.name}</span>
                  <span className="lang-level">{l.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="card" style={{ marginTop: 32 }}>
              <h3 style={{ marginBottom: 8 }}>{profile.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                &ldquo;Using AI is fun. Building it is even better.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
