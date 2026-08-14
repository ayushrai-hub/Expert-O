import { OurStory } from '../sections';
import PageFrame from './PageFrame';

const OurStoryPage = () => (
  <PageFrame>
    <OurStory />
    <section className="section bg-white border-b border-stone-200">
      <div className="section-container max-w-2xl">
        <p className="text-stone-600 leading-relaxed text-[15px]">
          Want the full picture of how we hire and deliver? Read the operating pillars on the home page,
          or email{' '}
          <a className="underline underline-offset-2" href="mailto:hello@expert-o.com">
            hello@expert-o.com
          </a>
          .
        </p>
      </div>
    </section>
  </PageFrame>
);

export default OurStoryPage;
