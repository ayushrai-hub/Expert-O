import { Link } from 'react-router-dom';

/** Honest pricing — discovery-led, no fake SaaS tiers */
export const Pricing = () => (
  <section id="pricing" className="section bg-stone-50 border-b border-stone-200">
    <div className="section-container max-w-5xl">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl text-stone-950 tracking-tight">
          How we price work
        </h2>
        <p className="mt-4 text-stone-600 leading-relaxed">
          We do not sell fixed monthly packages with invented feature grids. Most work starts with a
          short discovery conversation, then a scoped proposal you can evaluate with your team.
        </p>
      </div>

      <ul className="mt-12 grid md:grid-cols-3 gap-8">
        <li className="border-t border-stone-300 pt-5">
          <h3 className="font-display text-xl text-stone-950">Discovery</h3>
          <p className="mt-2 text-sm text-stone-600 leading-relaxed">
            A time-boxed assessment of the problem, constraints, and build path. Useful when you need a
            second set of eyes before committing budget.
          </p>
        </li>
        <li className="border-t border-stone-300 pt-5">
          <h3 className="font-display text-xl text-stone-950">Delivery engagement</h3>
          <p className="mt-2 text-sm text-stone-600 leading-relaxed">
            Design and engineering against a written scope. We ship in increments you can review—not a
            big reveal at the end.
          </p>
        </li>
        <li className="border-t border-stone-300 pt-5">
          <h3 className="font-display text-xl text-stone-950">Embedded partnership</h3>
          <p className="mt-2 text-sm text-stone-600 leading-relaxed">
            Longer collaboration with your operators and builders when ownership needs to stay inside
            your organization after we leave.
          </p>
        </li>
      </ul>

      <p className="mt-10 text-sm text-stone-600 max-w-2xl leading-relaxed">
        Ranges depend on scope, risk, and who owns ongoing maintenance. We will say no when we are the
        wrong fit rather than stretch a proposal to close a deal.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="#contact" className="btn-primary inline-flex px-5 py-2.5 text-sm">
          Start a conversation
        </a>
        <Link to="/pricing" className="btn-secondary inline-flex px-5 py-2.5 text-sm">
          Pricing details
        </Link>
      </div>
    </div>
  </section>
);
