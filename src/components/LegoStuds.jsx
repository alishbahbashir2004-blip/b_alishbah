const COLORS = {
  red: 'bg-lego-red',
  blue: 'bg-lego-blue',
  yellow: 'bg-lego-yellow',
  green: 'bg-lego-green',
  cyan: 'bg-lego-cyan',
};

export default function LegoStuds({ colors = ['red', 'blue', 'yellow'], size = 'md' }) {
  const dim = size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5';
  return (
    <div className="flex gap-1.5">
      {colors.map((c, i) => (
        <div key={i} className={`${COLORS[c] || COLORS.red} ${dim} rounded`} />
      ))}
    </div>
  );
}
