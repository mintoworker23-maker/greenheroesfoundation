/**
 * Home Page — server component.
 *
 * Sections:
 *   1. Hero
 *   2. Mission stats
 *   3. Core programs
 *   4. Photo gallery
 *   5. Latest blog posts (latest 3)
 *   6. CTA banner
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getLatestPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';
import GalleryLightbox from '@/components/GalleryLightbox';
import HeroBackgroundCarousel from '@/components/HeroBackgroundCarousel';
import DonateModal from '@/components/DonateModal';

export const metadata: Metadata = {
  title: 'Home | Dreamlife Africa',
  description:
    'Dreamlife Africa promotes social development, economic stability, and fulfilled dreams across Africa through education, mentorship, leadership, and empowerment programs.',
};

// ─── Static data ─────────────────────────────────────────────────────────────

// ── Gallery images (from /public/images/dreamlife-doc) ───────────────────────
const GALLERY_IMAGES = [
  { src: '/images/dreamlife-doc/image3.webp', alt: 'Dreamlife Africa leadership summit' },
  { src: '/images/dreamlife-doc/image12.webp', alt: 'Dreamlife Africa college mission' },
  { src: '/images/dreamlife-doc/image1.webp', alt: 'Dreamlife Africa sponsored students' },
  { src: '/images/dreamlife-doc/image4.webp', alt: 'Dreamlife Africa women empowerment session' },
  { src: '/images/dreamlife-doc/image16.webp', alt: 'Dreamlife Africa business support' },
  { src: '/images/dreamlife-doc/image18.webp', alt: 'Dreamlife Africa artiste support' },
  { src: '/images/dreamlife-doc/image23.webp', alt: 'Dreamlife Africa women workshop' },
  { src: '/images/dreamlife-doc/image27.webp', alt: 'Dreamlife Africa mentorship camp' },
  { src: '/images/dreamlife-doc/image31.webp', alt: 'Dreamlife Africa women training' },
];

// ─────────────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '4',      label: 'Core Programs' },
  { value: '1',      label: 'Dreamfund'     },
  { value: 'Africa', label: 'Our Focus'     },
];

const PROGRAMS = [
  {
    icon: (
      /* Circular arrows, progress through education support */
      <svg className="w-7 h-7" fill="none" stroke="currentColor"
           strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0
                 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1
                 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: 'EDUCATION SCHOLARSHIPS',
    description:
      'Scholarships for deserving primary, secondary, and college students who need support to keep learning.',
  },
  {
    icon: (
      /* Head silhouette, growth through mentorship */
      <svg className="w-7 h-7" fill="none" stroke="currentColor"
           strokeWidth="1.5" viewBox="0 0 24 24">
        {/* Head/brain outline */}
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.19V15a1 1 0 0 1-1 1H10
                 a1 1 0 0 1-1-1v-.81A6.003 6.003 0 0 1 6 9a6 6 0 0 1 6-6Z" />
        {/* Lightning bolt, energy and focus */}
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M12.5 6.5 10 10h2.5L11 13.5" />
        {/* Base/neck connector */}
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M10 18h4" />
      </svg>
    ),
    title: 'YOUTH MENTORSHIP',
    description:
      'Life-skills workshops, mentorship camps, career retreats, and talent support for young people.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor"
           strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: 'LEADERSHIP AND WOMEN EMPOWERMENT',
    description:
      'Leadership training for community and church leaders, plus Boresha Maisha support for women building small businesses.',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  const latestPosts = await getLatestPosts(3);

  return (
    <>
      {/* ════════════════════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
      >
        <HeroBackgroundCarousel />

        {/* Decorative corner accents */}
        <div className="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-gold-500/30 z-10" aria-hidden="true" />
        <div className="absolute top-24 right-8 w-16 h-16 border-t-2 border-r-2 border-gold-500/30 z-10" aria-hidden="true" />
        <div className="absolute bottom-16 left-8 w-16 h-16 border-b-2 border-l-2 border-gold-500/30 z-10" aria-hidden="true" />
        <div className="absolute bottom-16 right-8 w-16 h-16 border-b-2 border-r-2 border-gold-500/30 z-10" aria-hidden="true" />

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 font-heading text-xs uppercase
                        tracking-[0.3em] text-gold-500 mb-6 animate-fade-in">
            <span className="w-8 h-px bg-gold-500" aria-hidden="true" />
            Social Enterprise Across Africa
            <span className="w-8 h-px bg-gold-500" aria-hidden="true" />
          </p>

          {/* Heading */}
          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl
                         text-white uppercase tracking-widest leading-none mb-6
                         animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Transforming{' '}
            <span className="text-gold-500">Lives</span>
            <br />
            And Destinies
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10
                        animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            We shape mindsets, inspire dreams, and help people build dignified, sustainable lives.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center
                          animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Partner With Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor"
                   strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <DonateModal
              triggerText="Get Involved"
              triggerClassName="btn-outline text-base px-8 py-4"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                        animate-bounce text-gray-500" aria-hidden="true">
          <svg className="w-6 h-6" fill="none" stroke="currentColor"
               strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          2. MISSION STATS
      ════════════════════════════════════════════════════════ */}
      <section
        className="bg-mil-green-800 border-y border-mil-green-700/50 py-12"
        aria-label="Organization statistics"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul
            className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center"
            role="list"
          >
            {STATS.map(({ value, label }) => (
              <li key={label} className="flex flex-col items-center gap-1">
                <span className="font-heading font-bold text-4xl lg:text-5xl text-gold-500">
                  {value}
                </span>
                <span className="font-heading uppercase tracking-widest text-xs text-gray-300">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          3. CORE PROGRAMS
      ════════════════════════════════════════════════════════ */}
      <section
        className="py-20 lg:py-28 bg-[#fbfbf7] border-b border-gold-500/100"
        aria-labelledby="programs-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-14 text-center">
            <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-500 mb-2">
              What We Do
            </p>
            <h2
              id="programs-heading"
              className="section-heading text-mil-black-800"
            >
              OUR CORE PROGRAMS
            </h2>
            <span className="gold-divider mx-auto mt-3" aria-hidden="true" />
            <p className="mt-5 text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Dreamlife Africa partners with churches, ministries, schools, community organizations, and companies to advance social and economic programs across Africa.
            </p>
          </div>

          {/* Programs grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map(({ icon, title, description }, i) => (
              <div
                key={title}
                className="bg-white border border-neutral-200 rounded-lg p-6
                           hover:border-gold-500/40 hover:-translate-y-1 hover:shadow-xl
                           hover:shadow-neutral-900/10 transition-all duration-300
                           group animate-on-scroll"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gold-500/10 border border-gold-500/20
                                flex items-center justify-center text-gold-600
                                group-hover:bg-gold-500/15
                                transition-all duration-300 mb-5">
                  {icon}
                </div>
                <h3 className="font-heading font-bold text-mil-black-800 uppercase tracking-wide text-base mb-3">
                  {title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          {/* Learn more CTA */}
          <div className="text-center mt-12">
            <Link href="/about" className="btn-outline">
              Learn About Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          4. FEATURE CONTENT BLOCK  (text left · image right)
             ─ Edit the text and image src below freely ─
      ════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-mil-black-800" aria-labelledby="feature-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── LEFT: text content ── */}
            <div className="animate-slide-in-left">
              {/* Eyebrow label */}
              <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-500 mb-2">
                Who We Are
              </p>

              {/* Main heading */}
              <h2 id="feature-heading" className=" text-white section-heading mb-3">
                Hope Made Practical{' '}
                <span className="text-gold-500">Across Africa</span>
              </h2>
              <span className="gold-divider mb-6 block" aria-hidden="true" />

              {/* Body — replace these paragraphs with your own text */}
              <p className="text-gray-300 leading-relaxed text-base mb-4">
                Dreamlife Africa is a change-oriented social enterprise promoting social development, economic stability, and the fulfillment of dreams across Africa.
                <br/><br/>
                We partner with churches, Christian ministries, community groups, and corporate entities to help people build skills, confidence, and sustainable livelihoods.
              </p>

              {/* CTA button */}
              <Link href="/about" className="btn-primary">
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor"
                     strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* ── RIGHT: image ── */}
            {/* Replace src with whichever image you prefer */}
            <div className="relative h-80 lg:h-[520px] rounded-lg overflow-hidden
                            border border-mil-green-800/30 group">
              <Image
                src="/images/dreamlife-doc/image16.webp"
                alt="Dreamlife Africa business support presentation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-tr from-mil-black/50 to-transparent" />
              {/* Decorative gold corner accents */}
              <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2
                              border-gold-500/60" aria-hidden="true" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2
                              border-gold-500/60" aria-hidden="true" />
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          5. PHOTO GALLERY
      ════════════════════════════════════════════════════════ */}
      <section
        className="py-20 lg:py-28 bg-[#fbfbf7] border-b border-gold-500/100"
        aria-labelledby="gallery-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-500 mb-2">
              In the Field
            </p>
            <h2 id="gallery-heading" className="section-heading mb-0 text-mil-black-800">
              Our Activities
            </h2>
            <span className="gold-divider mt-3 block" aria-hidden="true" />
          </div>

          {/* Clickable photo grid — opens lightbox on click */}
          <GalleryLightbox images={GALLERY_IMAGES} />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          5. CTA BANNER
      ════════════════════════════════════════════════════════ */}
      <section
        className="relative py-20 overflow-hidden bg-mil-green-800"
        aria-label="Call to action"
      >
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `repeating-linear-gradient(
                 45deg,
                 transparent,
                 transparent 10px,
                 rgba(201,168,76,0.3) 10px,
                 rgba(201,168,76,0.3) 11px
               )`,
             }}
             aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-400 mb-4">
            Support The Work
          </p>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white
                         uppercase tracking-widest leading-tight mb-6">
            Support The{' '}
            <span className="text-gold-400">Dreamfund</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Dreamfund supports orphans, vulnerable children, women, youth, and pastors through scholarships and grants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Partner With Us
            </Link>
            <DonateModal
              triggerText="Support Dreamfund"
              triggerClassName="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:border-white hover:bg-white/10 font-heading font-semibold uppercase tracking-wider text-base px-8 py-4 rounded transition-all duration-200"
            />
          </div>
        </div>
      </section>
    </>
  );
}
