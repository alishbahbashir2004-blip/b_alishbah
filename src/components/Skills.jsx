import { skills } from '../data/portfolio';
import SectionHeader from './SectionHeader';

const LABEL = {
  'lego-red': 'text-lego-red',
  'lego-blue': 'text-lego-blue',
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Technical Arsenal" colors={['red', 'blue', 'red']} />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 reveal">
          {skills.map((group) => (
            <div key={group.label} className="pt-3">
              <h4 className="mb-3 text-base md:text-lg font-extrabold text-[#111827]">
                {group.label}
              </h4>

              <div className="flex flex-wrap gap-2">
                {group.items.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-[#1d4ed8]/70 bg-white px-2.5 py-1 text-[0.72rem] font-medium text-[#111827] shadow-[0_0_0_1px_rgba(29,78,216,0.15)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
