import { extracurricular } from '../data/portfolio';
import SectionHeader from './SectionHeader';

export default function Extracurricular() {
  return (
    <section id="extracurricular" className="px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Extracurricular & Leadership" colors={['red', 'blue', 'red']} />

        <div className="mt-8 overflow-hidden rounded-xl border border-[#1d4ed8] bg-transparent shadow-[0_0_0_1px_rgba(29,78,216,0.18)] reveal">
          <table className="w-full border-collapse text-left text-[#111827]">
            <thead>
              <tr className="border-b border-[#1d4ed8]/60 bg-transparent">
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#111827]">Activity</th>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#111827]">Link</th>
              </tr>
            </thead>
            <tbody>
              {extracurricular.map((e, index) => (
                <tr
                  key={e.title}
                  className={index % 2 === 0 ? 'bg-transparent' : 'bg-[#eff6ff]/40'}
                >
                  <td className="px-4 py-3 text-sm font-bold text-[#111827]">{e.title}</td>
                  <td className="px-4 py-3">
                    {e.link ? (
                      <a
                        href={e.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#2563eb] underline underline-offset-4 decoration-[#2563eb] hover:decoration-[#1d4ed8]"
                      >
                        <span>View</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    ) : (
                      <span className="text-sm text-slate-500">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
