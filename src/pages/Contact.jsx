import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons.jsx';
import Reveal from '../components/Reveal.jsx';
import { profile } from '../data/content.js';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="container">
      <div className="page-header">
        <span className="mono">// contact</span>
        <h1 className="page-title">
          Let&apos;s build something <span className="gradient-text">cool</span>
        </h1>
        <p className="page-subtitle">
          Whether you have an opportunity, a project idea, or just want to
          geek out about LLMs — my inbox is always open.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <Reveal>
            <a href={`mailto:${profile.email}`} className="card contact-card">
              <div className="contact-icon"><Mail size={20} /></div>
              <div>
                <h4>Email</h4>
                <p>{profile.email}</p>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="card contact-card">
              <div className="contact-icon"><MapPin size={20} /></div>
              <div>
                <h4>Location</h4>
                <p>{profile.location}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="card contact-card"
            >
              <div className="contact-icon"><GithubIcon size={20} /></div>
              <div>
                <h4>GitHub</h4>
                <p>github.com/tanishk-exe</p>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="card contact-card"
            >
              <div className="contact-icon"><LinkedinIcon size={20} /></div>
              <div>
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/imtanishk</p>
              </div>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <motion.div
            className="contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: 12 }}>
                  Message ready!
                </h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
                  This site is static, so let&apos;s do this the old-fashioned
                  way — shoot me an email and I&apos;ll get right back to you.
                </p>
                <a href={`mailto:${profile.email}`} className="btn btn-primary">
                  <Mail size={17} /> Email me directly
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" placeholder="What's this about?" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Tell me about your project or opportunity..." required />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <Send size={17} /> Send message
                </button>
                <p className="form-note">
                  Prefer email? Write to me at {profile.email}
                </p>
              </form>
            )}
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
}
