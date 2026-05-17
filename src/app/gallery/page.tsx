import type { Metadata } from 'next';
import GalleryLightbox from '@/components/GalleryLightbox';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos from Dreamlife Africa programs, community outreach, mentorship, leadership, and empowerment activities.',
};

const GALLERY_IMAGES = [
  { src: '/images/ghf_one.jpg', alt: 'Dreamlife Africa community program', width: 758, height: 517 },
  { src: '/images/ghf_two.jpg', alt: 'Dreamlife Africa field outreach', width: 450, height: 600 },
  { src: '/images/ghf_three.jpg', alt: 'Dreamlife Africa mentorship session', width: 600, height: 503 },
  { src: '/images/ghf_four.jpg', alt: 'Dreamlife Africa team in action', width: 449, height: 600 },
  { src: '/images/ghf_five.jpg', alt: 'Dreamlife Africa education support', width: 449, height: 600 },
  { src: '/images/ghf_six.jpg', alt: 'Dreamlife Africa community gathering', width: 600, height: 337 },
  { src: '/images/ghf_seven.jpg', alt: 'Dreamlife Africa program activity', width: 600, height: 450 },
  { src: '/images/ghf_eight.jpg', alt: 'Dreamlife Africa outreach activity', width: 600, height: 449 },
  { src: '/images/ghf_nine.jpg', alt: 'Dreamlife Africa youth support', width: 600, height: 450 },
  { src: '/images/heroesfound (1).jpg', alt: 'Dreamlife Africa gathering with community members', width: 534, height: 752 },
  { src: '/images/heroesfound (6).jpg', alt: 'Dreamlife Africa program moment', width: 720, height: 405 },
  { src: '/images/heroesfound (24).jpg', alt: 'Dreamlife Africa community activity', width: 607, height: 1080 },
  { src: '/images/heroesfound (34).jpg', alt: 'Dreamlife Africa outreach moment', width: 990, height: 1080 },
  { src: '/images/heroes (1).jpeg', alt: 'Dreamlife Africa team and partners', width: 490, height: 492 },
  { src: '/images/talk-church.png', alt: 'Dreamlife Africa church engagement', width: 633, height: 612 },
  { src: '/images/big-church.png', alt: 'Dreamlife Africa leadership gathering', width: 644, height: 579 },
  { src: '/images/green3.jpg', alt: 'Dreamlife Africa empowerment activity', width: 864, height: 1080 },
  { src: '/images/WhatsApp Image 2025-11-24 at 17.26.21.jpeg', alt: 'Dreamlife Africa community support', width: 768, height: 375 },
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
