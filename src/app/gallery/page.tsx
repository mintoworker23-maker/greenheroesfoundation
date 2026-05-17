import type { Metadata } from 'next';
import GalleryLightbox from '@/components/GalleryLightbox';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos from Dreamlife Africa programs, community outreach, mentorship, leadership, and empowerment activities.',
};

const GALLERY_IMAGES = [
  { src: '/images/dreamlife-doc/image3.webp', alt: 'Dreamlife Africa leadership summit', width: 301, height: 302 },
  { src: '/images/dreamlife-doc/image12.webp', alt: 'Dreamlife Africa college mission', width: 440, height: 327 },
  { src: '/images/dreamlife-doc/image13.webp', alt: 'Dreamlife Africa clergy summit', width: 456, height: 333 },
  { src: '/images/dreamlife-doc/image1.webp', alt: 'Dreamlife Africa sponsored students', width: 380, height: 309 },
  { src: '/images/dreamlife-doc/image4.webp', alt: 'Dreamlife Africa women empowerment session', width: 366, height: 302 },
  { src: '/images/dreamlife-doc/image14.webp', alt: 'Dreamlife Africa bibles distribution', width: 446, height: 335 },
  { src: '/images/dreamlife-doc/image2.webp', alt: 'Dreamlife Africa sponsored youth', width: 309, height: 308 },
  { src: '/images/dreamlife-doc/image15.webp', alt: 'Dreamlife Africa school mission', width: 437, height: 292 },
  { src: '/images/dreamlife-doc/image16.webp', alt: 'Dreamlife Africa business support', width: 720, height: 480 },
  { src: '/images/dreamlife-doc/image17.webp', alt: 'Dreamlife Africa uniform distribution', width: 389, height: 292 },
  { src: '/images/dreamlife-doc/image18.webp', alt: 'Dreamlife Africa artiste support', width: 720, height: 480 },
  { src: '/images/dreamlife-doc/image19.webp', alt: 'Dreamlife Africa books distribution', width: 488, height: 293 },
  { src: '/images/dreamlife-doc/image20.webp', alt: 'Dreamlife Africa education bursary', width: 428, height: 336 },
  { src: '/images/dreamlife-doc/image21.webp', alt: 'Dreamlife Africa talent bursary', width: 720, height: 480 },
  { src: '/images/dreamlife-doc/image22.webp', alt: 'Dreamlife Africa boys mentorship', width: 429, height: 330 },
  { src: '/images/dreamlife-doc/image23.webp', alt: 'Dreamlife Africa women workshop', width: 476, height: 304 },
  { src: '/images/dreamlife-doc/image24.webp', alt: 'Dreamlife Africa leadership conference', width: 451, height: 291 },
  { src: '/images/dreamlife-doc/image25.webp', alt: 'Dreamlife Africa leaders summit', width: 450, height: 313 },
  { src: '/images/dreamlife-doc/image26.webp', alt: 'Dreamlife Africa friends and partners', width: 401, height: 316 },
  { src: '/images/dreamlife-doc/image16.webp', alt: 'Dreamlife Africa business support grant', width: 720, height: 480 },
  { src: '/images/dreamlife-doc/image27.webp', alt: 'Dreamlife Africa mentorship camp', width: 720, height: 480 },
  { src: '/images/dreamlife-doc/image28.webp', alt: 'Dreamlife Africa certificates signing', width: 720, height: 501 },
  { src: '/images/dreamlife-doc/image25.webp', alt: 'Dreamlife Africa leaders summit presentation', width: 450, height: 313 },
  { src: '/images/dreamlife-doc/image29.webp', alt: 'Dreamlife Africa leadership workshop', width: 392, height: 324 },
  { src: '/images/dreamlife-doc/image30.webp', alt: 'Dreamlife Africa youth support', width: 415, height: 287 },
  { src: '/images/dreamlife-doc/image31.webp', alt: 'Dreamlife Africa women training', width: 720, height: 501 },
  { src: '/images/dreamlife-doc/image32.webp', alt: 'Dreamlife Africa dance group support', width: 425, height: 328 },
  { src: '/images/dreamlife-doc/image33.webp', alt: 'Dreamlife Africa college bursary', width: 720, height: 480 },
  { src: '/images/dreamlife-doc/image34.webp', alt: 'Dreamlife Africa secondary bursaries', width: 420, height: 323 },
  { src: '/images/dreamlife-doc/image35.webp', alt: 'Dreamlife Africa theological bursary', width: 720, height: 480 },
];

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <div className="bg-mil-black-800 border-b border-mil-green-800/30 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-500 mb-2">
            Our Moments
          </p>
          <h1 className="section-heading mb-0">Gallery</h1>
          <span className="gold-divider mt-3 block" aria-hidden="true" />
          <p className="mt-5 text-gray-400 max-w-2xl leading-relaxed">
            A look at Dreamlife Africa programs, partnerships, outreach, and community impact.
          </p>
        </div>
      </div>

      <section
        className="bg-[#fbfbf7] border-b border-gold-500/100 py-16 lg:py-20"
        aria-labelledby="gallery-grid-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-500 mb-2">
              In Pictures
            </p>
            <h2 id="gallery-grid-heading" className="section-heading mb-0 text-mil-black-800">
              Community, Education, Mentorship and Leadership
            </h2>
            <span className="gold-divider mt-3 block" aria-hidden="true" />
          </div>

          <GalleryLightbox images={GALLERY_IMAGES} layout="adaptive" />
        </div>
      </section>
    </div>
  );
}
