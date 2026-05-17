'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const HERO_IMAGES = [
  '/images/ghf_one.jpg',
  '/images/ghf_two.jpg',
  '/images/ghf_four.jpg',
  '/images/ghf_six.jpg',
  '/images/ghf_eight.jpg',
];

export default function HeroBackgroundCarousel() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) return;

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % HERO_IMAGES.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {HERO_IMAGES.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-out ${
            index === activeImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 camo-texture opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-mil-black/80 via-mil-black/45 to-mil-black/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-mil-green-950/45 via-transparent to-mil-black/35" />
    </div>
  );
}
