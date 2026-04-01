import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import Marquee from './Marquee'
import RevealOnScroll from '../ui/RevealOnScroll'

export default function Work() {
  return (
    <section id="work" className="bg-cream text-dark">
      {/* Marquee */}
      <Marquee />

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-dark leading-none">
              Selected Work
            </h2>
            <span className="hidden sm:block font-body text-sm text-dark/40">
              / Featured Projects
            </span>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
