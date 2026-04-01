import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const items = [
  'Design Systems',
  'User Interface',
  'Product Design',
  'Vibe Coding',
  'Team Collaboration',
  'Interaction Design',
  'UX Research',
  'Prototyping',
]

const separators = ['◆', '▶', '◆', '▲', '▶', '◆', '▲', '▶']

export default function Marquee() {
  const trackRef = useRef(null)

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const track = trackRef.current
    const totalWidth = track.scrollWidth / 2

    gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
    })
  }, { scope: trackRef })

  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8 shrink-0">
      <span className="font-display font-bold text-[clamp(1.5rem,4vw,3.5rem)] text-dark whitespace-nowrap">
        {item}
      </span>
      <span className="text-accent-coral text-lg">{separators[i % separators.length]}</span>
    </span>
  ))

  return (
    <div className="overflow-hidden py-8 border-y border-dark/10">
      <div ref={trackRef} className="flex items-center gap-8" style={{ width: 'max-content' }}>
        {content}
        {/* Duplicate for seamless loop */}
        {content}
      </div>
    </div>
  )
}
