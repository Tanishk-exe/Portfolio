import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import {
  profile,
  typewriterPhrases,
  stats,
  projects,
  skills,
} from '../data/content.js';

function useTypewriter(phrases, typeSpeed = 55, pause = 1800) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1)
          );
        },
        deleting ? typeSpeed / 2 : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, phrases, typeSpeed, pause]);

  return text;
}

function Hero() {
  const typed = useTypewriter(typewriterPhrases);

  return (
    <section className="hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-eyebrow">
            <span className="pulse" />
            Available for AI/ML internships
          </span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I&apos;m <span className="gradient-text">{profile.name}</span>.
          <br />
          I build intelligent
          <br />
          systems.
        </motion.h1>

        <motion.div
          className="hero-type"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span>{typed}</span>
          <span className="caret">|</span>
        </motion.div>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          AI/ML engineer passionate about LLM applications, RAG systems, and AI
          agents. I&apos;ve gone from just using AI to training it, building it,
          and teaching it — one model at a time.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link to="/projects" className="btn btn-primary">
            <Sparkles size={17} />
            View My Work
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            Let&apos;s Connect
            <ArrowRight size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

function Marquee() {
  const allItems = skills.flatMap((s) => s.items);

  const row = [...allItems, ...allItems];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            <span>{item}</span>
            <i />
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="container">
      <div className="stats-band">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="card stat-card">
              <div className="stat-value gradient-text">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="home-section">
      <div className="container">
        <Reveal>
          <SectionHead
            kicker="// selected work"
            title="Projects that teach me something"
            description="From RAG applications to deep learning models — a few things I've shipped while learning in public."
          />
        </Reveal>

        <div className="featured-grid">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="card featured-card">
                <span className={`tag accent-${p.accent}`}>
                  {p.stack[0]}
                </span>
                <h3 className="card-title">{p.title}</h3>
                <div className="tags">
                  {p.stack.slice(1, 3).map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <p>{p.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div style={{ marginTop: 28, textAlign: 'center' }}>
            <Link to="/projects" className="btn btn-ghost">
              See all projects <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTABand() {
  return (
    <section className="home-section">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <h2>
              Have an <span className="gradient-text">idea</span>? Let&apos;s
              build it together.
            </h2>
            <p>
              Whether it&apos;s a RAG pipeline, an AI agent, or just geeking
              out about LLMs at 2 a.m. — my inbox is open.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get in touch <ArrowRight size={16} />
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <GithubIcon size={16} /> GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <FeaturedProjects />
      <CTABand />
    </>
  );
}
