import { useEffect } from 'react';

export default function ImageLightbox({ open, onClose, src, title }) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/55 backdrop-blur-sm flex items-center justify-center p-4"
      onMouseDown={onClose}
    >
      <div
        className="relative max-w-md w-full rounded-[var(--radius-xl2)] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.35)] overflow-hidden"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)]">
          <div className="font-semibold truncate">
            {title ?? 'Profile photo'}
          </div>
          <button
            onClick={onClose}
            className="h-9 w-9 rounded-xl border border-[var(--color-border)] bg-white hover:bg-[var(--color-skyP-50)] transition"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Image */}
        <div className="bg-[var(--color-bg)]">
          <img src={src} alt={title} className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}
