const colorMap = {
  'accent-coral': 'bg-accent-coral text-dark',
  'accent-mint': 'bg-accent-mint text-dark',
  'accent-yellow': 'bg-accent-yellow text-dark',
  'accent-violet': 'bg-accent-violet text-dark',
  'accent-blue': 'bg-accent-blue text-dark',
}

export default function SkillBadge({ skill }) {
  return (
    <div
      className={`skill-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-semibold text-sm sm:text-base shadow-lg ${
        colorMap[skill.color] || 'bg-accent-mint text-dark'
      }`}
      style={{ transform: `rotate(${skill.rotation}deg)` }}
    >
      {skill.label}
    </div>
  )
}
