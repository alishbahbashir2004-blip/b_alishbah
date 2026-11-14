import { projects } from '../data/portfolio';
import SectionHeader from './SectionHeader';

const BAR = {
  'lego-blue': 'bg-lego-blue',
  'lego-yellow': 'bg-lego-yellow',
  'lego-green': 'bg-lego-green',
  'lego-red': 'bg-lego-red',
};

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Projects" colors={['blue', 'red', 'green']} />

        <div className="grid gap-5 md:grid-cols-2 reveal">
          {projects.map((p, i) => {
            const content = (
              <div className="flex items-start gap-4 py-2">
                <div className={`mt-1 h-12 w-1.5 shrink-0 rounded-full ${BAR[p.color]}`} />
                <div className="flex-1">
                  <h3 className="text-xl font-extrabold text-[#111827] leading-snug">{p.name}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#111827]">{p.desc}</p>
                  <p className="mt-3 text-[0.75rem] leading-relaxed text-[#111827]">
                    <span className="font-bold text-[#111827]">Tech:</span> {p.tech}
                  </p>

                  {p.url && (
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#111827] underline underline-offset-4 decoration-slate-500 hover:decoration-slate-700">
                      <span>Link</span>
                      <span aria-hidden="true">→</span>
                    </div>
                  )}
                </div>
              </div>
            );

            if (p.url) {
              return (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-xl border border-[#1d4ed8] bg-transparent p-4 shadow-[0_0_0_1px_rgba(29,78,216,0.18)] transition-all hover:shadow-[0_0_0_1px_rgba(29,78,216,0.35),0_12px_24px_rgba(29,78,216,0.08)]"
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={p.name}
                className="rounded-xl border border-[#1d4ed8] bg-transparent p-4 shadow-[0_0_0_1px_rgba(29,78,216,0.18)]"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
