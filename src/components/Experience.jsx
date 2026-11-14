import { experience } from '../data/portfolio';
import SectionHeader from './SectionHeader';

const DOT = {
  'lego-red': 'bg-lego-red',
  'lego-blue': 'bg-lego-blue',
};

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Professional Experience" colors={['red', 'yellow', 'blue']} />

        <div className="relative mt-10 pl-2 md:pl-4 rounded-2xl border border-[#2f5ec7]/90 bg-transparent p-4 md:p-6 shadow-[0_0_0_2px_rgba(47,94,199,0.18),0_18px_30px_rgba(29,78,216,0.12)] reveal">
          <div className="absolute left-8 md:left-20 top-6 bottom-6 w-px bg-[#2f5ec7]/80" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <div
                key={item.title}
                className={`relative grid gap-6 md:grid-cols-[160px_minmax(0,1fr)] items-start ${index % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right'} reveal`}
              >
                <div className="relative pt-1 md:pr-4 text-left md:text-right">
                  <span className={`inline-block h-4 w-4 rounded-full border-2 border-white ${DOT[item.color]} shadow-[0_0_0_4px_rgba(255,255,255,0.06)] md:mr-3`} />
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#111827]">{item.date}</span>
                </div>

                <div className="relative pl-2 md:pl-3">
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#111827]">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-[#111827]">{item.org}</p>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-[#111827]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
