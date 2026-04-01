import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function ExperienceModal({ experience, onClose }) {
  const overlayRef = useRef(null)
  const panelRef = useRef(null)

  useGSAP(() => {
    gsap.from(overlayRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' })
    gsap.from(panelRef.current, { y: 60, opacity: 0, duration: 0.4, ease: 'power3.out' })
  })

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [])

  function handleClose() {
    gsap.to(panelRef.current, { y: 60, opacity: 0, duration: 0.3, ease: 'power2.in' })
    gsap.to(overlayRef.current, {
      opacity: 0, duration: 0.3, ease: 'power2.in',
      onComplete: onClose,
    })
  }

  const colorBorder = {
    'accent-coral': 'border-accent-coral',
    'accent-mint': 'border-accent-mint',
    'accent-yellow': 'border-accent-yellow',
    'accent-violet': 'border-accent-violet',
    'accent-blue': 'border-accent-blue',
  }

  const colorText = {
    'accent-coral': 'text-accent-coral',
    'accent-mint': 'text-accent-mint',
    'accent-yellow': 'text-accent-yellow',
    'accent-violet': 'text-accent-violet',
    'accent-blue': 'text-accent-blue',
  }

  return createPortal(
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) handleClose() }}
      className="fixed inset-0 z-50 bg-dark/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6"
    >
      <div
        ref={panelRef}
        className="bg-cream text-dark w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-2xl"
      >
        {/* Header */}
        <div className={`sticky top-0 bg-cream border-b border-dark/10 px-6 sm:px-8 py-5 flex items-center justify-between z-10`}>
          <div className="flex items-center gap-4">
            {/* Logo placeholder */}
            <div className={`w-12 h-12 rounded-xl border-2 ${colorBorder[experience.color] || 'border-dark/20'} flex items-center justify-center shrink-0`}>
              <span className="font-display font-bold text-sm text-dark">
                {experience.company.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-dark text-xl leading-tight">
                {experience.company}
              </h3>
              <span className="font-body text-sm text-dark/50">{experience.totalDuration}</span>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-full bg-dark/5 hover:bg-dark/10 flex items-center justify-center transition-colors shrink-0"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M13.5 4.5 4.5 13.5M4.5 4.5l9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Roles */}
        <div className="px-6 sm:px-8 py-6 space-y-8">
          {experience.roles.map((role, i) => (
            <div key={i} className={`${i > 0 ? 'pt-8 border-t border-dark/10' : ''}`}>
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-1 h-full min-h-[3rem] rounded-full mt-1 bg-current ${colorText[experience.color] || 'text-dark'} shrink-0`} style={{ width: 3 }} />
                <div>
                  <h4 className="font-display font-bold text-dark text-lg leading-tight">
                    {role.title}
                  </h4>
                  <p className="font-body text-sm text-dark/50 mt-0.5">
                    {role.period} · {role.duration}
                  </p>
                  <p className="font-body text-sm text-dark/40">
                    {role.location}
                  </p>
                </div>
              </div>

              {role.description && (
                <p className="font-body text-dark/70 text-sm leading-relaxed mt-4 mb-4">
                  {role.description}
                </p>
              )}

              {role.achievements.length > 0 && (
                <div>
                  <p className="font-display font-semibold text-dark text-sm mb-3">
                    Mayores logros:
                  </p>
                  <ul className="space-y-2">
                    {role.achievements.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 font-body text-sm text-dark/70 leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-current ${colorText[experience.color]}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="px-6 sm:px-8 pb-8">
          <div className="border-t border-dark/10 pt-6">
            <h4 className="font-display font-bold text-dark text-base mb-4">Gallery</h4>
            {experience.images.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {experience.images.map((src, i) => (
                  <img key={i} src={src} alt={`${experience.company} work ${i + 1}`}
                    className="w-full h-40 object-cover rounded-xl" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="w-full h-40 rounded-xl bg-dark/5 flex items-center justify-center">
                    <span className="font-body text-xs text-dark/30">Image {n}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
