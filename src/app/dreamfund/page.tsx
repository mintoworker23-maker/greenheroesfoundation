import type { Metadata } from 'next';
import Link from 'next/link';
import DonateModal from '@/components/DonateModal';

export const metadata: Metadata = {
  title: 'Dreamfund',
  description:
    'Dreamfund supports education, women-led small businesses, and youth talent through scholarships and grants.',
};

const SUPPORT_AREAS = [
  {
    title: 'Education Scholarship',
    description:
      'School-fee support for primary, secondary, and college/polytechnic students.',
  },
  {
    title: 'Boresha Maisha Business Support',
    description:
      'Small business support for women running or growing SMEs.',
  },
  {
    title: 'Talanta Initiative Support',
    description:
      'Talent support for young people with promise, discipline, and creative drive.',
  },
];

export default function DreamfundPage() {
  return (
    <div className="pt-24">
      <div className="bg-mil-black-800 border-b border-mil-green-800/30 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-500 mb-2">
            Support The Work
          </p>
          <h1 className="section-heading mb-0">Dreamfund</h1>
          <span className="gold-divider mt-3 block" aria-hidden="true" />
          <p className="mt-5 text-gray-400 max-w-2xl leading-relaxed">
            A shared fund for scholarships and grants that help people become self-reliant.
          </p>
        </div>
      </div>

      <section className="bg-[#fbfbf7] border-b border-gold-500/100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-500 mb-2">
                What It Is
              </p>
              <h2 className="section-heading text-mil-black-800 mb-3">A Pool For Practical Support</h2>
              <span className="gold-divider block mb-6" aria-hidden="true" />
            </div>
            <p className="text-neutral-600 leading-relaxed max-w-2xl">
              Dreamfund is managed by Dreamlife Africa. It brings together one-time and recurring gifts from friends, partners, organizations, charities, and companies to support vulnerable children, women, youth, and pastors.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gold-500/100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-500 mb-2">
              Fund Areas
            </p>
            <h2 className="section-heading text-mil-black-800 mb-0">Scholarships And Grants</h2>
            <span className="gold-divider mt-3 block" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUPPORT_AREAS.map(({ title, description }) => (
              <article
                key={title}
                className="bg-[#fbfbf7] border border-neutral-200 rounded-lg p-6 shadow-sm
                           hover:border-gold-500/40 hover:shadow-xl hover:shadow-neutral-900/10
                           transition-all duration-300"
              >
                <span className="block w-10 h-1 bg-gold-500 rounded-full mb-5" aria-hidden="true" />
                <h3 className="font-heading font-bold text-mil-black-800 uppercase tracking-wide text-lg mb-3">
                  {title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-mil-green-800" aria-label="Dreamfund call to action">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-white uppercase tracking-widest mb-4">
            Support Dreamfund
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Partner with us to fund education, enterprise, and talent where support can change a life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DonateModal triggerText="Donate" triggerClassName="btn-primary justify-center" />
            <Link href="/contact" className="btn-outline justify-center border-white/40 text-white hover:bg-white hover:text-mil-black">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
