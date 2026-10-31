import { motion } from 'framer-motion';
import {
  Sparkles,
  Brain,
  Code2,
  Wrench,
  Layers,
  Database,
  Cpu,
  MessageSquare,
} from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import { skills } from '../data/content.js';

const iconMap = {
  sparkles: Sparkles,
  brain: Brain,
  code: Code2,
  wrench: Wrench,
  layers: Layers,
  database: Database,
  cpu: Cpu,
  message: MessageSquare,
};

export default function Skills() {
  return (
    <div className="container">
      <div className="page-header">
        <span className="mono">// skills</span>
        <h1 className="page-title">
          My <span className="gradient-text">toolbox</span>
        </h1>
        <p className="page-subtitle">
          The languages, models, frameworks, and tools I use to build AI-powered products.
        </p>
      </div>

      <div className="skill-grid">
        {skills.map((group, i) => {
          const Icon = iconMap[group.icon] || Sparkles;
          return (
            <Reveal key={group.category} delay={i * 0.08}>
              <motion.div
                className={`card skill-card tone-${group.tone || 'violet'}`}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="skill-head">
                  <div className={`skill-icon tone-${group.tone || 'violet'}`}>
                    <Icon size={20} />
                  </div>
                  <h3>{group.category}</h3>
                </div>
                <div className="skill-chips">
                  {group.items.map((item) => (
                    <motion.span
                      className="skill-chip"
                      key={item}
                      whileHover={{ y: -2 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
