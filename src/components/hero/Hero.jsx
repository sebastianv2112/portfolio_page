import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function SplitText({ text, className }) {
  return (
    <span className={`block ${className}`} aria-label={text}>
      {text.split('').map((char, i) => (
        <span key={i} className="hero-letter inline-block" style={{ opacity: 0 }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const containerRef = useRef(null)

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      gsap.set('.hero-letter', { opacity: 1 })
      return
    }

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

    tl.to('.hero-letter', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.03,
      delay: 0.3,
    })
    .from('.hero-bio', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
    }, '-=0.3')
    .from('.hero-cta', {
      y: 20,
      opacity: 0,
      duration: 0.6,
    }, '-=0.4')
  }, { scope: containerRef })

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center grid-pattern overflow-hidden">
      {/* Gradient overlay at bottom for transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-cream z-10" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 pt-28 pb-40 w-full">
        {/* Big display text */}
        <h1 className="hero-title font-display font-bold text-cream leading-[0.9] tracking-tight mb-12">
          <SplitText text="PRODUCT" className="text-[clamp(3rem,10vw,9rem)]" />
          <SplitText text="DESIGNER" className="text-[clamp(3rem,10vw,9rem)]" />
        </h1>

        {/* Bio columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <p className="hero-bio font-body text-cream/60 text-base leading-relaxed max-w-md">
            I'm Juan Varon — a product designer who builds design systems and bridges the gap between design and code through vibe coding and AI agent workflows.
          </p>
          <p className="hero-bio font-body text-cream/60 text-base leading-relaxed max-w-md">
            I specialize in creating scalable, systematic design solutions that empower product and development teams to ship with confidence and consistency.
          </p>
          <div className="hero-cta flex justify-start md:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-display font-semibold text-cream border-b-2 border-cream pb-1 hover:text-accent-mint hover:border-accent-mint transition-colors duration-200"
            >
              GET IN TOUCH
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="translate-y-px">
                <path d="M5 10h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
