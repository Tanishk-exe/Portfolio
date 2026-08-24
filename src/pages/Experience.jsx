import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import { experience } from '../data/content.js';

export default function Experience() {
  return (
    <div className="container">
      <div className="page-header">
        <span className="mono">// experience</span>
        <h1 className="page-title">
          My journey so <span className="gradient-text">far</span>
        </h1>
        <p className="page-subtitle">
          From training AI models to founding initiatives and running campus
          clubs — a timeline of everything I&apos;ve been up to.
        </p>
      </div>

      <div className="timeline">
        {experience.map((exp, i) => (
          <Reveal key={`${exp.role}-${exp.company}`} delay={i * 0.05}>
            <div className="timeline-item">
              <span
                className={`timeline-dot ${exp.current ? 'current' : ''}`}
              />
              <motion.div
                className="timeline-card"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="timeline-head">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">{exp.company}</div>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>

                <div className="timeline-loc">
                  <MapPin size={14} />
                  {exp.location}
                </div>

                <ul className="timeline-points">
                  {exp.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>

                {exp.current && (
                  <span className="badge-current">
                    <span className="dot" />
                    Currently here
                  </span>
                )}
              </motion.div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
