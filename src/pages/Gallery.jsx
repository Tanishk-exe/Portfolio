import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Lightbox from '../components/Lightbox.jsx';
import { gallery } from '../data/content.js';

export default function Gallery() {
  const items = Object.values(gallery);
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="container">
      <div className="page-header">
        <span className="mono">// gallery</span>
        <h1 className="page-title">
          Workshops &amp; <span className="gradient-text">events</span>
        </h1>
        <p className="page-subtitle">
          Photos from the hackathons, workshops, and cohorts I&apos;ve organized
          and run. Click any tile to view it larger.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="gallery-empty">
          <Camera size={28} />
          <p>Photos coming soon — check back later.</p>
        </div>
      ) : (
        <div className="gallery-strip gallery-strip-lg">
          {items.map((it, idx) => (
            <Reveal key={it.id} delay={(idx % 3) * 0.06}>
              <button
                type="button"
                className={`gallery-tile ${it.photos && it.photos.length ? 'has-image' : ''}`}
                onClick={() => setLightbox({ items, index: idx })}
              >
                {it.photos && it.photos.length > 0 ? (
                  <img
                    className="gallery-thumb"
                    src={encodeURI(it.photos[0])}
                    alt={it.title}
                    loading="lazy"
                  />
                ) : (
                  <>
                    <Camera size={22} />
                    <span>{it.title}</span>
                  </>
                )}
              </button>
            </Reveal>
          ))}
        </div>
      )}

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            items={lightbox.items}
            index={lightbox.index}
            onClose={() => setLightbox(null)}
            onPrev={() =>
              setLightbox((s) => ({
                ...s,
                index: (s.index - 1 + s.items.length) % s.items.length,
              }))
            }
            onNext={() =>
              setLightbox((s) => ({
                ...s,
                index: (s.index + 1) % s.items.length,
              }))
            }
          />
        )}
      </AnimatePresence>
    </div>
  );
}
