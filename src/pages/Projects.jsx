import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import { projects } from '../data/content.js';

function ProjectCard({ project }) {
  const repoHref = project.repo?.trim();
  const Card = repoHref ? motion.a : motion.article;
  const cardProps = repoHref
    ? {
        href: repoHref,
        target: '_blank',
        rel: 'noreferrer',
      }
    : {};

  return (
    <Card
      className={`card project-card ${repoHref ? 'project-link' : 'no-link'}`}
      aria-label={repoHref ? `Open ${project.title}` : project.title}
      whileHover={repoHref ? { y: -5 } : undefined}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      {...cardProps}
    >
      <div className="project-card-top">
        <div className="project-icon-wrap">
          <Code2 size={18} />
        </div>

        <div className="project-head-copy">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>

      <div className="project-stack">
        {project.stack.slice(0, 3).map((item) => (
          <span className={`tag accent-${project.accent}`} key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="project-card-footer">
        <span className="project-language">
          <span className={`repo-dot accent-${project.accent}`} />
          {project.language || project.stack[0]}
        </span>
      </div>

    </Card>
  );
}

export default function Projects() {
  return (
    <div className="container projects-page">
      <div className="page-header">
        <span className="mono">// projects</span>
        <h1 className="page-title">
          Things I&apos;ve <span className="gradient-text">built</span>
        </h1>
        <p className="page-subtitle">
          A few of my AI and machine learning projects, shown as clean cards with links where available.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
