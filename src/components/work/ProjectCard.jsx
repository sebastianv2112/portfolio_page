const colorMap = {
  'accent-coral': 'bg-accent-coral',
  'accent-mint': 'bg-accent-mint',
  'accent-yellow': 'bg-accent-yellow',
  'accent-violet': 'bg-accent-violet',
  'accent-blue': 'bg-accent-blue',
}

export default function ProjectCard({ project }) {
  return (
    <div className="group relative bg-dark rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300">
      {/* Colored top accent bar */}
      <div className={`h-1.5 w-full ${colorMap[project.color] || 'bg-accent-mint'}`} />

      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="font-body text-xs text-cream/40 tracking-wider uppercase">{project.year}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cream/20 group-hover:text-cream/60 transition-colors duration-300">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h3 className="font-display font-bold text-cream text-xl mb-3 group-hover:text-accent-mint transition-colors duration-300">
          {project.title}
        </h3>

        <p className="font-body text-cream/50 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-body text-xs text-cream/50 bg-white/5 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
