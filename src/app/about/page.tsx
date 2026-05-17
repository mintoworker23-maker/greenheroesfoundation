/**
 * About Page — /about
 *
 * Sections: Mission, History, Core Values, Leadership, Partners
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Dreamlife Africa, our mission, vision, mandate, programs, and leadership.',
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const CORE_VALUES = [
  {
    label: 'VISION',
    description: 'We envision an outstanding social enterprise that promotes social development, economic stability and fulfillment of dreams on the African continent and beyond.',
    icon: '⚔️',
  },
  {
    label: 'MISSION',
    description: 'We exist to increase the hopes and aspirations of people through shaping mindsets, inspiring dreams and fulfilling destinies.',
    icon: '🎖️',
  },
  {
    label: 'MANDATE',
    description: 'Restoring quality of life, dignity and honor to all people through holistic transformation.',
    icon: '🤝',
  },
  // {
  //   label: 'Resilience',
  //   description: 'We build programs that foster long-term strength, not just short-term relief.',
  //   icon: '🛡️',
  // },
];

const LEADERSHIP = [
  {
    name: 'Willson Mugai',
    role: 'Chief Executive Officer',
    bio: '',
    image: '/images/dreamlife-doc/image5.webp',
  },
  {
    name: 'Anne Mugai',
    role: 'Executive Director',
    bio: '',
    image: '/images/dreamlife-doc/image6.webp',
  },
  {
    name: 'Einstein Macarthur',
    role: 'Non-Executive Director',
    bio: '',
    image: '/images/dreamlife-doc/image7.webp',
  },
  {
    name: 'Dorothy Robinson',
    role: 'Non-Executive Director',
    bio: '',
    image: '/images/dreamlife-doc/image8.webp',
  },
  {
    name: 'Dr Smith Robinson',
    role: 'Non-Executive Director',
    bio: '',
    image: '/images/dreamlife-doc/image9.webp',
  },
  {
    name: 'Brandon Woodluck',
    role: 'Non-Executive Director',
    bio: '',
    image: '/images/dreamlife-doc/image10.webp',
  }
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* ── Page header ── */}
      <div className="bg-mil-black-800 border-b border-mil-green-800/30 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-500 mb-2">
            Who We Are
          </p>
          <h1 className="section-heading mb-0">About Dreamlife Africa</h1>
          <span className="gold-divider mt-3 block" aria-hidden="true" />
        </div>
      </div>

      {/* ── Mission statement ── */}
      <section className="py-20 bg-mil-black" aria-labelledby="mission-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-500 mb-2">
                Our Purpose
              </p>
              <h2
                id="mission-heading"
                className="section-heading mb-3"
              >
                TRANSFORMING LIVES AND DESTINIES ACROSS AFRICA.
              </h2>
              <span className="gold-divider mb-6 block" aria-hidden="true" />
              <p className="text-gray-300 leading-relaxed text-base mb-4">
                Dreamlife Africa is a change-oriented social enterprise created to promote social development, economic stability, and the fulfillment of dreams across Africa.
                <br/><br/>
                We partner with churches, Christian ministries, community-based organizations, and corporate entities to empower communities through practical social and economic programs.
              </p>
             
              <Link href="/contact" className="btn-primary">
                Join Our Mission
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-80 lg:h-[420px] rounded-lg overflow-hidden border border-mil-green-800/30">
              <Image
                src="/images/dreamlife-doc/image1.webp"
                alt="Dreamlife Africa community program"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-mil-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Two-column text block ── */}
      <section className="py-20 bg-[#fbfbf7] border-b border-gold-500/100" aria-labelledby="twocol-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

            {/* Left — heading + label */}
            <div className="lg:sticky lg:top-28">
              <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-500 mb-2">
                Our Approach
              </p>
              <h2
                id="twocol-heading"
                className="section-heading mb-3 text-mil-black-800"
              >
                FOURFOLD OBJECTIVES
              </h2>
              <span className="gold-divider block mb-6" aria-hidden="true" />
              <p className="text-neutral-600 text-sm leading-relaxed">
                Encouraging communities by giving hope to vulnerable people and helping support groups meet basic needs.
                <br/>
                Educating deserving young people through primary, secondary, and college scholarships.
                <br/>
                Empowering leaders through workshops, training, and seminars.
                <br/>
                Establishing stronger communities through mentorship, small grants, and talent support.
              </p>
            </div>

            {/* Right — body text columns */}
            {/* Replace or extend these paragraphs with your own content */}
            <div className="space-y-5 text-sm text-neutral-600 leading-relaxed">
              <p>
                Dreamlife Africa has partnered with colleges to provide scholarships for deserving students pursuing their careers.
                <br/><br/>
                It has also worked with primary and secondary schools to support learners who need help staying in school.
              </p>
              <p>
                Through youth and talent support, Dreamlife Africa has helped young people access grants, mentorship, and creative opportunities.
              </p>
              <p>
                Through Boresha Maisha, the organization supports women with training, encouragement, and small business grants.
              </p>
              <p>
                Through leadership development, Dreamlife Africa equips pastors, counselors, Christian workers, and community leaders for greater impact.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Core values ── */}
      <section className="py-20 bg-white border-b border-gold-500/100" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-500 mb-2">
              What Drives Us
            </p>
            <h2 id="values-heading" className="section-heading mb-0 text-mil-black-800">Vision, Mission and Mandate</h2>
            <span className="gold-divider mt-3 mx-auto block" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map(({ label, description }) => (
              <div
                key={label}
                className="bg-[#fbfbf7] border border-neutral-200 rounded-lg p-6
                           hover:border-gold-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/10 transition-all duration-300"
              >
                {/* Accent bar */}
                <span className="block w-10 h-1 bg-gold-500 rounded-full mb-4" aria-hidden="true" />
                <h3 className="font-heading font-bold text-mil-black-800 uppercase tracking-widest text-base mb-3">
                  {label}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-20 bg-mil-black" aria-labelledby="leadership-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-500 mb-2">
              The Team
            </p>
            <h2 id="leadership-heading" className="section-heading mb-0">Leadership</h2>
            <span className="gold-divider mt-3 mx-auto block" aria-hidden="true" />
            <p className="mt-5 text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Dreamlife Africa is guided by an executive board responsible for strategy, operations, policy, resource mobilization, and accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {LEADERSHIP.map(({ name, role, bio, image }) => (
              <div
                key={name}
                className="bg-mil-black-700 border border-mil-green-800/30 rounded-lg overflow-hidden
                           hover:border-gold-500/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Photo */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={image}
                    alt={`Portrait of ${name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mil-black via-transparent to-transparent" />
                </div>
                {/* Info */}
                <div className="p-6">
                  {role && (
                    <span className="block text-xs font-heading uppercase tracking-widest text-gold-500 mb-1">
                      {role}
                    </span>
                  )}
                  <h3 className="font-heading font-bold text-white text-lg mb-3">{name}</h3>
                  {bio && (
                    <p className="text-gray-400 text-sm leading-relaxed">{bio}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-mil-green-800" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-white uppercase tracking-widest mb-4">
            Want to Partner With Us?
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            We welcome churches, ministries, community groups, companies, friends, and partners who want to expand hope, opportunity, and dignity across Africa.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
