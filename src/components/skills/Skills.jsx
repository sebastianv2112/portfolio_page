import { skills, workflowSteps } from '../../data/skills'
import SkillBadge from './SkillBadge'
import RevealOnScroll from '../ui/RevealOnScroll'

export default function Skills() {
  return (
    <section id="skills" className="relative bg-cream text-dark overflow-hidden">
      {/* Transition gradient to dark */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-dark z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
        {/* Section heading */}
        <RevealOnScroll>
          <div className="mb-16">
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-dark leading-none mb-4">
              Skills & Workflow
            </h2>
            <p className="font-body text-dark/50 text-lg max-w-2xl">
              A design-to-code approach powered by design systems, vibe coding, and AI agent teams.
            </p>
          </div>
        </RevealOnScroll>

        {/* Skill badges — scattered layout */}
        <RevealOnScroll>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center items-center mb-20 py-8">
            {skills.map((skill) => (
              <SkillBadge key={skill.label} skill={skill} />
            ))}
          </div>
        </RevealOnScroll>

        {/* Workflow steps */}
        <div className="mb-20">
          <RevealOnScroll>
            <h3 className="font-display font-bold text-dark text-2xl mb-10">
              How I Work
            </h3>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((item, i) => (
              <RevealOnScroll key={item.step} delay={i * 0.1}>
                <div className="workflow-step group">
                  <span className="font-display font-bold text-5xl text-dark/10 group-hover:text-accent-violet/30 transition-colors duration-300">
                    {item.step}
                  </span>
                  <h4 className="font-display font-bold text-dark text-lg mt-2 mb-2">
                    {item.title}
                  </h4>
                  <p className="font-body text-dark/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Vibe coding highlight */}
        <RevealOnScroll>
          <div className="bg-dark rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-violet/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-mint/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="inline-block font-display font-semibold text-sm text-accent-mint bg-accent-mint/10 px-4 py-1.5 rounded-full mb-6">
                Design Systems + Vibe Coding
              </span>
              <h3 className="font-display font-bold text-cream text-2xl sm:text-3xl mb-4 max-w-xl">
                Where design systems meet AI-powered development
              </h3>
              <p className="font-body text-cream/60 text-base leading-relaxed max-w-2xl mb-6">
                I combine systematic design thinking with vibe coding — using AI agent teams to translate design tokens,
                components, and patterns directly into production-ready code. This approach accelerates delivery while
                maintaining the quality and consistency that design systems demand.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Design Tokens', 'Component Libraries', 'AI Agents', 'Code Generation', 'Figma-to-Code'].map((tag) => (
                  <span key={tag} className="font-body text-xs text-cream/40 border border-cream/10 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
