import { international } from '../data/portfolio';
import SectionHeader from './SectionHeader';

const PIN = {
  'lego-red': 'bg-lego-red',
  'lego-blue': 'bg-lego-blue',
};

export default function International() {
  return (
    <section id="international" className="px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="International Experiences" colors={['blue', 'green', 'red']} />

        <div className="relative mt-8 ml-2 md:ml-4 rounded-2xl border border-[#2f5ec7]/90 bg-transparent p-4 md:p-6 shadow-[0_0_0_2px_rgba(47,94,199,0.18),0_18px_30px_rgba(29,78,216,0.12)] reveal">
          <div className="absolute left-7 md:left-12 top-6 bottom-6 w-px bg-[#2f5ec7]/80" />

          <div className="space-y-8">
            {international.map((item, index) => (
              <div
                key={item.title}
                className={`relative grid gap-4 md:grid-cols-[120px_minmax(0,1fr)] items-start ${index % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right'} reveal`}
              >
                <div className="relative flex items-center justify-start md:justify-end pt-1">
                  <span className={`inline-block h-4 w-4 rounded-full border-2 border-white ${PIN[item.color]} shadow-[0_0_0_4px_rgba(255,255,255,0.08)] md:mr-3`} />
                  <span className="text-xs font-bold tracking-[0.12em] text-[#111827] uppercase">{item.date}</span>
                </div>

                <div className="relative pl-2 md:pl-3">

                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group block text-[#111827] no-underline hover:text-[#111827]"
                    >
                      <div className="inline-flex items-center gap-2">
                        <h3 className="text-xl md:text-2xl font-extrabold leading-tight text-[#111827]">{item.title}</h3>
                        <span className="text-base text-[#111827] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                      </div>
                    </a>
                  ) : (
                    <h3 className="text-xl md:text-2xl font-extrabold leading-tight text-[#111827]">{item.title}</h3>
                  )}

                  <p className="mt-2 text-sm font-semibold text-[#111827]">{item.org}</p>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-[#111827]">{item.desc}</p>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-[#2563eb] underline underline-offset-4 decoration-[#2563eb] hover:decoration-[#1d4ed8]"
                    >
                      <span>Link</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
