import LegoStuds from './LegoStuds';

export default function SectionHeader({ title, colors = ['red', 'blue', 'red'] }) {
  const accentColor = colors[0] === 'blue' ? 'text-lego-blue' : 'text-lego-red';

  return (
    <div className="flex items-center gap-4 mb-8">
      <LegoStuds colors={colors} size="lg" />
      <h2 className="text-2xl md:text-3xl font-black border-b-2 border-slate-300 pb-2 pr-4 text-[#111827]">
        {title}
      </h2>
    </div>
  );
}
