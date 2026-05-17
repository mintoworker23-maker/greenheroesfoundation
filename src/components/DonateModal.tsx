'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const PAYMENT_DETAILS = [
  { label: 'Account Name', value: 'Dreamlife Africa' },
  { label: 'Purpose', value: 'Dreamfund donation' },
  { label: 'M-Pesa Paybill / Till', value: 'To be confirmed' },
  { label: 'Bank Account', value: 'To be confirmed' },
];

const CONTACT_DETAILS = [
  { label: 'Email', value: 'info@dreamlifeafrica.co.ke', href: 'mailto:info@dreamlifeafrica.co.ke' },
  { label: 'Phone', value: '+254 721 657 845', href: 'tel:+254721657845' },
];

interface DonateModalProps {
  triggerText?: string;
  triggerClassName?: string;
  onOpen?: () => void;
}

export default function DonateModal({
  triggerText = 'Donate',
  triggerClassName = 'btn-primary',
  onOpen,
}: DonateModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    onOpen?.();
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button type="button" onClick={openModal} className={triggerClassName}>
        {triggerText}
      </button>

      {isOpen && createPortal(
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-mil-black/80 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="donate-modal-title"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-lg bg-[#fbfbf7] shadow-2xl shadow-black/30"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-gold-500/60 px-6 py-5">
              <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-600 mb-2">
                Dreamfund
              </p>
              <h2
                id="donate-modal-title"
                className="font-heading text-2xl font-bold uppercase tracking-widest text-mil-black-800"
              >
                Donation Details
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close donation details"
              className="absolute right-4 top-4 rounded p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-6 px-6 py-6">
              <p className="text-sm leading-relaxed text-neutral-600">
                Use the details below to support Dreamfund. Share your payment confirmation with our team so we can acknowledge your gift.
              </p>

              <dl className="divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
                {PAYMENT_DETAILS.map(({ label, value }) => (
                  <div key={label} className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-heading text-xs uppercase tracking-widest text-neutral-500">
                      {label}
                    </dt>
                    <dd className="text-sm font-semibold text-mil-black-800 sm:col-span-2">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div>
                <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-mil-black-800 mb-3">
                  Contact us about your donation
                </h3>
                <div className="space-y-2 text-sm text-neutral-600">
                  {CONTACT_DETAILS.map(({ label, value, href }) => (
                    <p key={label}>
                      <span className="font-heading uppercase tracking-wider text-neutral-500">{label}: </span>
                      <a href={href} className="font-semibold text-mil-black-800 transition-colors hover:text-gold-600">
                        {value}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-neutral-200 px-6 py-5 sm:flex-row sm:justify-end">
              <button type="button" onClick={() => setIsOpen(false)} className="btn-outline justify-center text-xs">
                Close
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
