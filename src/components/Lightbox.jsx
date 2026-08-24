import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, Camera } from 'lucide-react';

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  const item = items[index];

  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="lightbox-panel card"
        initial={{ scale: 0.94, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 16 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div className="lightbox-media">
          {item.photos && item.photos.length > 0 ? (
            <img src={item.photos[index % item.photos.length]} alt={item.title} />
          ) : (
            <div className="lightbox-placeholder">
              <Camera size={42} />
              <span>Drop photos in /public/gallery/{item.id}</span>
            </div>
          )}
        </div>

        <div className="lightbox-caption">
          <h3>{item.title}</h3>
          <p className="lightbox-meta">
            {item.date} · {item.stat}
          </p>
          <p className="lightbox-desc">{item.description}</p>
          <div className="lightbox-nav">
            <button onClick={onPrev} aria-label="Previous">
              <ArrowLeft size={18} />
            </button>
            <span>
              {index + 1} / {items.length}
            </span>
            <button onClick={onNext} aria-label="Next">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
