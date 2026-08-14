import { ArrowRight } from 'lucide-react';
import { capabilities, engagements, pillars } from './content';

export const Hero = () => (
  <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-stone-50 border-b border-stone-200">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-sm font-medium tracking-wide uppercase text-stone-500 mb-6">Expert-O</p>
      <h1 className="font-display text-4xl sm:text-5xl md:text-[3.25rem] leading-[1.1] text-stone-950 max-w-3xl text-balance">
        A collective of polymaths who design, build, and ship work that has to hold up in the real world.
      </h1>
      <p className="mt-6 text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed">
        We take on products, platforms, and operational systems where technology, design, and judgment have to work together—not as separate handoffs.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm">
          Start a conversation
          <ArrowRight size={16} aria-hidden />
        </a>
        <a href="#work" className="btn-secondary inline-flex items-center justify-center px-5 py-2.5 text-sm">
          See how we work
        </a>
        <a href="#join" className="btn-secondary inline-flex items-center justify-center px-5 py-2.5 text-sm">
          Apply to join
        </a>
      </div>
      <dl className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-stone-200 pt-10">
        <div>
          <dt className="text-sm text-stone-500">How we hire and build</dt>
          <dd className="mt-1 font-display text-xl text-stone-900">Five operating pillars</dd>
        </div>
        <div>
          <dt className="text-sm text-stone-500">What we take on</dt>
          <dd className="mt-1 font-display text-xl text-stone-900">Product, design, and AI-assisted delivery</dd>
        </div>
        <div>
          <dt className="text-sm text-stone-500">What we optimize for</dt>
          <dd className="mt-1 font-display text-xl text-stone-900">Clarity, ownership, and speed with judgment</dd>
        </div>
      </dl>
    </div>
  </section>
);

export const OurStory = () => (
  <section id="story" className="section bg-stone-50 border-b border-stone-200">
    <div className="section-container max-w-5xl">
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-start">
        <h2 className="font-display text-3xl md:text-4xl text-stone-950 tracking-tight">Why Expert-O exists</h2>
        <div className="space-y-5 text-stone-600 leading-relaxed text-[15px] md:text-base">
          <p>
            Expert-O is a collective of people who refuse to treat technology, design, and business as separate sports. The interesting problems sit in the overlaps—and that is where we work.
          </p>
          <p>
            We are not a body shop that staffs tickets, and we are not a slide-only strategy firm. We join when there is something concrete to design, build, or operationalize, and when the people involved want ownership rather than a black box.
          </p>
          <p>
            If you need a partner who will push back on vague requirements, write things down, and ship in the open with your team, we should talk. If you need theater, we are the wrong room.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export const FivePillars = () => (
  <section id="pillars" className="section bg-white border-b border-stone-200">
    <div className="section-container max-w-5xl">
      <div className="max-w-2xl mb-12">
        <h2 className="font-display text-3xl md:text-4xl text-stone-950 tracking-tight">How we operate</h2>
        <p className="mt-4 text-stone-600 leading-relaxed">
          These pillars are the hiring and delivery standard—not a marketing slogan sheet. They decide who joins, how we work with clients, and what we refuse to do.
        </p>
      </div>
      <ol className="space-y-0">
        {pillars.map((pillar, index) => (
          <li key={pillar.name} className="grid grid-cols-[3rem_1fr] gap-4 md:gap-8 border-t border-stone-200 py-6">
            <span className="font-display text-stone-400 text-lg tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-display text-xl text-stone-950">{pillar.name}</h3>
              <p className="mt-2 text-stone-600 text-[15px] leading-relaxed max-w-2xl">{pillar.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export const Services = () => (
  <section id="services" className="section bg-stone-50 border-b border-stone-200">
    <div className="section-container max-w-5xl">
      <div className="max-w-2xl mb-12">
        <h2 className="font-display text-3xl md:text-4xl text-stone-950 tracking-tight">What we help with</h2>
        <p className="mt-4 text-stone-600 leading-relaxed">
          Capabilities matter only in service of a specific problem. If you are unsure which of these applies, start with a conversation—we will say so if we are the wrong fit.
        </p>
      </div>
      <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
        {capabilities.map((cap) => (
          <li key={cap.title} className="border-t border-stone-200 pt-5">
            <h3 className="font-display text-xl text-stone-950">{cap.title}</h3>
            <p className="mt-2 text-stone-600 text-[15px] leading-relaxed">{cap.detail}</p>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:underline underline-offset-4">
          Tell us what you are trying to ship
          <ArrowRight size={14} aria-hidden />
        </a>
      </div>
    </div>
  </section>
);

export const Work = () => (
  <section id="work" className="section bg-white border-b border-stone-200">
    <div className="section-container max-w-5xl">
      <div className="max-w-2xl mb-12">
        <h2 className="font-display text-3xl md:text-4xl text-stone-950 tracking-tight">How engagements usually look</h2>
        <p className="mt-4 text-stone-600 leading-relaxed">
          We do not publish invented metrics or stock “case studies.” Below is the kind of work we take on and how we approach it. Specific client results are shared privately when NDAs and evidence allow.
        </p>
      </div>
      <div className="space-y-10">
        {engagements.map((item) => (
          <article
            key={item.title}
            className="border-t border-stone-200 pt-8 grid md:grid-cols-[10rem_1fr] gap-4 md:gap-10"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-stone-500 md:pt-1">{item.domain}</p>
            <div>
              <h3 className="font-display text-2xl text-stone-950">{item.title}</h3>
              <div className="mt-5 space-y-4 text-stone-600 leading-relaxed text-[15px]">
                <p>
                  <span className="font-medium text-stone-900">Context. </span>
                  {item.context}
                </p>
                <p>
                  <span className="font-medium text-stone-900">Approach. </span>
                  {item.approach}
                </p>
                <p>
                  <span className="font-medium text-stone-900">What “done” looks like. </span>
                  {item.outcome}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
