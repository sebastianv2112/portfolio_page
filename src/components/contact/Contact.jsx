import RevealOnScroll from '../ui/RevealOnScroll'

export default function Contact() {
  return (
    <section id="contact" className="bg-dark py-20 sm:py-28 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <RevealOnScroll>
          <span className="font-body text-sm text-cream/40 tracking-wider uppercase mb-4 block">
            Get in touch
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-cream leading-tight mb-6">
            Let's work together
          </h2>
          <p className="font-body text-cream/50 text-lg max-w-lg mx-auto mb-10">
            I'm always open to new opportunities, collaborations, and conversations about design systems, vibe coding, and product design.
          </p>

          <a
            href="mailto:hello@juanvaron.com"
            className="inline-flex items-center gap-3 font-display font-bold text-xl sm:text-2xl text-dark bg-cream px-8 py-4 rounded-full hover:bg-accent-mint transition-colors duration-300"
          >
            Say Hello
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-8 mt-12">
            {[
              { label: 'GitHub', href: 'https://github.com/sebastianv2112' },
              { label: 'LinkedIn', href: '#' },
              { label: 'Dribbble', href: '#' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-cream/40 hover:text-cream transition-colors duration-200"
              >
                {social.label}
              </a>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
