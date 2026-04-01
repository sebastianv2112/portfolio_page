import { useState } from 'react'
import ExperienceModal from './ExperienceModal'

const colorBar = {
  'accent-coral': 'bg-accent-coral',
  'accent-mint': 'bg-accent-mint',
  'accent-yellow': 'bg-accent-yellow',
  'accent-violet': 'bg-accent-violet',
  'accent-blue': 'bg-accent-blue',
}

const colorText = {
  'accent-coral': 'text-accent-coral',
  'accent-mint': 'text-accent-mint',
  'accent-yellow': 'text-accent-yellow',
  'accent-violet': 'text-accent-violet',
  'accent-blue': 'text-accent-blue',
}

const colorBorder = {
  'accent-coral': 'border-accent-coral',
  'accent-mint': 'border-accent-mint',
  'accent-yellow': 'border-accent-yellow',
  'accent-violet': 'border-accent-violet',
  'accent-blue': 'border-accent-blue',
}

export default function ExperienceCard({ experience }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="group relative bg-dark rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col">
        {/* Colored top bar */}
        <div className={`h-1.5 w-full ${colorBar[experience.color] || 'bg-accent-mint'}`} />

        <div className="p-6 sm:p-8 flex flex-col flex-1">
          {/* Company logo + name */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-14 h-14 rounded-xl border-2 ${colorBorder[experience.color] || 'border-white/20'} flex items-center justify-center shrink-0`}>
              <span className="font-display font-bold text-cream text-base">
                {experience.company.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-cream text-xl leading-tight">
                  {experience.company}
                </h3>
                {experience.current && (
                  <span className="font-body text-[10px] font-semibold text-accent-mint bg-accent-mint/15 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Actual
                  </span>
                )}
              </div>
              <span className={`font-body text-sm ${colorText[experience.color] || 'text-accent-mint'}`}>
                {experience.totalDuration}
              </span>
            </div>
          </div>

          {/* Primary role info */}
          <div className="flex-1">
            <p className="font-display font-semibold text-cream text-base mb-1">
              {experience.primaryRole}
            </p>
            <p className="font-body text-cream/40 text-sm">
              {experience.primaryPeriod}
            </p>
            <p className="font-body text-cream/30 text-xs mt-0.5">
              {experience.primaryDuration}
            </p>
          </div>

          {/* View more button */}
          <button
            onClick={() => setOpen(true)}
            className={`mt-6 w-full py-2.5 rounded-xl border ${colorBorder[experience.color] || 'border-accent-mint'} ${colorText[experience.color] || 'text-accent-mint'} font-display font-semibold text-sm hover:bg-white/5 transition-colors duration-200`}
          >
            Ver más
          </button>
        </div>
      </div>

      {open && (
        <ExperienceModal experience={experience} onClose={() => setOpen(false)} />
      )}
    </>
  )
}
