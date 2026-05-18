import type { Metadata } from 'next';
import Link from 'next/link';
import ProgramAccordion, { type ProgramAccordionItem } from '@/components/ProgramAccordion';

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Dreamlife Africa programs in education scholarships, youth mentorship, leadership development, and women empowerment.',
};

const PROGRAMS: ProgramAccordionItem[] = [
  {
    label: '01',
    title: 'Education Scholarships',
    summary:
      'School-fee support for deserving primary, secondary, and college/polytechnic learners.',
    details: [
      {
        heading: 'School Partnerships',
        body: 'Dreamlife Africa works with primary and secondary schools to help deserving learners stay in class.',
      },
      {
        heading: 'College Support',
        body: 'Selected college and polytechnic students receive support as they prepare for useful careers.',
      },
    ],
  },
  {
    label: '02',
    title: 'Youth Empowerment',
    summary: 'Mentorship, career guidance, and talent support for young people.',
    details: [
      {
        heading: 'S.M.E.P',
        body: 'Social Missions Empowerment Program offers life-skills workshops, mentorship camps, and career retreats.',
      },
      {
        heading: 'Tamed For Fame',
        body: 'T4F identifies and grows young talent while building character, discipline, and ethical grounding.',
      },
    ],
  },
  {
    label: '03',
    title: 'Leadership Development',
    summary: 'Computer literacy and leadership development for schools, churches, and communities.',
    details: [
      {
        heading: 'COMPLIT',
        body: 'COMPLIT brings computer literacy to pupils and students, and equips teachers to use technology in learning.',
      },
      {
        heading: 'DALI',
        body: 'Dreamlife Africa Leadership Institute equips pastors, counselors, Christian workers, and community leaders.',
      },
    ],
  },
  {
    label: '04',
    title: 'Women Development',
    summary: 'Boresha Maisha helps women grow skills, businesses, confidence, and support networks.',
    details: [
      {
        heading: 'Boresha Maisha',
        body: 'Boresha Maisha means Improve Life. It supports leadership, enterprise development, and psychological care.',
      },
      {
        heading: 'Small Grants',
        body: 'With partners and friends, the program gives small business grants that help women strengthen livelihoods.',
      },
    ],
  },
];

const OBJECTIVES = [
  'Encourage vulnerable communities with practical hope.',
  'Educate deserving learners through scholarships.',
  'Empower leaders with capacity building that strengthens service.',
  'Establish stronger communities through mentorship, grants, and talent support.',
];

export default function ProgramsPage() {
  return (
    <div className="pt-24">
      <div className="bg-mil-black-800 border-b border-mil-green-800/30 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-500 mb-2">
            What We Do
          </p>
          <h1 className="section-heading mb-0">Programs</h1>
          <span className="gold-divider mt-3 block" aria-hidden="true" />
          <p className="mt-5 text-gray-400 max-w-2xl leading-relaxed">
            Focused programs that help people learn, lead, work, and build sustainable lives.
          </p>
        </div>
      </div>

      <section className="bg-[#fbfbf7] border-b border-gold-500/100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-500 mb-2">
              Core Areas
            </p>
            <h2 className="section-heading text-mil-black-800 mb-0">Practical Paths To Change</h2>
            <span className="gold-divider mt-3 block" aria-hidden="true" />
          </div>

          <ProgramAccordion items={PROGRAMS} />
        </div>
      </section>

      <section className="bg-white border-b border-gold-500/100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.25em] text-gold-500 mb-2">
                Fourfold Objective
              </p>
              <h2 className="section-heading text-mil-black-800 mb-3">Encourage, Educate, Empower, Establish</h2>
              <span className="gold-divider block mb-6" aria-hidden="true" />
              <p className="text-neutral-600 leading-relaxed">
                Every program is designed to move people from need to dignity, then from dignity to contribution.
              </p>
            </div>

            <ul className="space-y-4" role="list">
              {OBJECTIVES.map((objective) => (
                <li key={objective} className="flex gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-neutral-700 leading-relaxed">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-mil-green-800" aria-label="Programs call to action">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-white uppercase tracking-widest mb-4">
            Partner With A Program
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Work with Dreamlife Africa to support learners, young people, leaders, and women building better futures.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
