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
      <div className="flex items-center gap-8 animate-marquee" style={{ width: 'max-content' }}>
        {content}
        {content}
      </div>
    </div>
  )
}
