export function LegoProgrammer({ className = '', size = 120 }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} className={className}>
      <rect x="10" y="88" width="100" height="8" rx="2" fill="#0055BF" />
      <rect x="14" y="96" width="6" height="18" fill="#0055BF" />
      <rect x="100" y="96" width="6" height="18" fill="#0055BF" />
      <rect x="32" y="52" width="56" height="36" rx="3" fill="#2A3241" stroke="#00A3A3" strokeWidth="2"/>
      <rect x="36" y="56" width="48" height="28" rx="2" fill="#0B0E14"/>
      <rect x="40" y="62" width="20" height="2.5" rx="1" fill="#00852B"/>
      <rect x="40" y="67" width="30" height="2.5" rx="1" fill="#FFCF00"/>
      <rect x="44" y="72" width="14" height="2.5" rx="1" fill="#00A3A3"/>
      <rect x="44" y="77" width="22" height="2.5" rx="1" fill="#D01012"/>
      <rect x="56" y="88" width="8" height="4" fill="#2A3241"/>
      <rect x="48" y="98" width="24" height="14" rx="2" fill="#D01012"/>
      <rect x="50" y="76" width="20" height="20" rx="4" fill="#FFCF00"/>
      <circle cx="56" cy="84" r="2" fill="#0B0E14"/>
      <circle cx="64" cy="84" r="2" fill="#0B0E14"/>
      <path d="M56 89 Q60 92 64 89" stroke="#0B0E14" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <rect x="56" y="72" width="8" height="5" rx="1.5" fill="#FFCF00"/>
    </svg>
  );
}

export function LegoRobot({ className = '', size = 100 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
      <rect x="48" y="6" width="4" height="12" fill="#94A3B8"/>
      <circle cx="50" cy="6" r="4" fill="#D01012"/>
      <rect x="22" y="18" width="56" height="40" rx="6" fill="#00852B"/>
      <rect x="22" y="14" width="12" height="8" rx="2" fill="#00852B"/>
      <rect x="66" y="14" width="12" height="8" rx="2" fill="#00852B"/>
      <circle cx="38" cy="36" r="6" fill="#0B0E14"/>
      <circle cx="62" cy="36" r="6" fill="#0B0E14"/>
      <circle cx="38" cy="36" r="2.5" fill="#00A3A3"/>
      <circle cx="62" cy="36" r="2.5" fill="#00A3A3"/>
      <rect x="36" y="48" width="28" height="4" rx="1" fill="#0B0E14"/>
      <rect x="18" y="62" width="64" height="30" rx="4" fill="#FFCF00"/>
      <rect x="18" y="58" width="14" height="8" rx="2" fill="#FFCF00"/>
      <rect x="68" y="58" width="14" height="8" rx="2" fill="#FFCF00"/>
      <rect x="30" y="70" width="40" height="14" rx="2" fill="#0B0E14"/>
      <circle cx="38" cy="77" r="3" fill="#D01012"/>
      <circle cx="50" cy="77" r="3" fill="#00A3A3"/>
      <circle cx="62" cy="77" r="3" fill="#00852B"/>
    </svg>
  );
}

export function LegoChip({ className = '', size = 100 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
      {[20, 35, 50, 65, 80].map((y) => (
        <g key={y}>
          <rect x="4" y={y - 2} width="14" height="4" fill="#FFCF00"/>
          <rect x="82" y={y - 2} width="14" height="4" fill="#FFCF00"/>
        </g>
      ))}
      {[20, 35, 50, 65, 80].map((x) => (
        <g key={x}>
          <rect x={x - 2} y="4" width="4" height="14" fill="#FFCF00"/>
          <rect x={x - 2} y="82" width="4" height="14" fill="#FFCF00"/>
        </g>
      ))}
      <rect x="18" y="18" width="64" height="64" rx="6" fill="#0055BF"/>
      <rect x="18" y="14" width="16" height="8" rx="2" fill="#0055BF"/>
      <rect x="66" y="14" width="16" height="8" rx="2" fill="#0055BF"/>
      <rect x="30" y="30" width="40" height="40" rx="3" fill="#0B0E14"/>
      <path d="M38 40 H62 M38 50 H52 M38 60 H62" stroke="#00A3A3" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="62" cy="50" r="3" fill="#D01012"/>
    </svg>
  );
}

export function LegoBrain({ className = '', size = 100 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
      <rect x="18" y="30" width="30" height="30" rx="4" fill="#D01012"/>
      <rect x="18" y="26" width="10" height="8" rx="2" fill="#D01012"/>
      <rect x="38" y="26" width="10" height="8" rx="2" fill="#D01012"/>
      <rect x="52" y="30" width="30" height="30" rx="4" fill="#0055BF"/>
      <rect x="52" y="26" width="10" height="8" rx="2" fill="#0055BF"/>
      <rect x="72" y="26" width="10" height="8" rx="2" fill="#0055BF"/>
      <rect x="35" y="55" width="30" height="25" rx="4" fill="#00852B"/>
      <rect x="35" y="51" width="10" height="8" rx="2" fill="#00852B"/>
      <rect x="55" y="51" width="10" height="8" rx="2" fill="#00852B"/>
      <path d="M30 45 L50 45 M50 45 L65 45 M50 45 L50 62" stroke="#00A3A3" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3"/>
      <circle cx="30" cy="45" r="3" fill="#FFCF00"/>
      <circle cx="65" cy="45" r="3" fill="#FFCF00"/>
      <circle cx="50" cy="62" r="3" fill="#FFCF00"/>
    </svg>
  );
}

export function LegoCloud({ className = '', size = 100 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
      <rect x="20" y="45" width="30" height="22" rx="4" fill="#0055BF"/>
      <rect x="20" y="41" width="12" height="8" rx="2" fill="#0055BF"/>
      <rect x="50" y="38" width="34" height="28" rx="4" fill="#00A3A3"/>
      <rect x="50" y="34" width="12" height="8" rx="2" fill="#00A3A3"/>
      <rect x="72" y="34" width="12" height="8" rx="2" fill="#00A3A3"/>
      <rect x="38" y="58" width="26" height="20" rx="4" fill="#FFCF00"/>
      <rect x="38" y="54" width="10" height="8" rx="2" fill="#FFCF00"/>
      <rect x="54" y="54" width="10" height="8" rx="2" fill="#FFCF00"/>
      <path d="M50 88 L50 78 M45 83 L50 78 L55 83" stroke="#00852B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

export function LegoDatabase({ className = '', size = 100 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
      <rect x="24" y="22" width="52" height="14" rx="4" fill="#D01012"/>
      <rect x="24" y="18" width="12" height="8" rx="2" fill="#D01012"/>
      <rect x="64" y="18" width="12" height="8" rx="2" fill="#D01012"/>
      <rect x="24" y="40" width="52" height="14" rx="4" fill="#FFCF00"/>
      <rect x="24" y="36" width="12" height="8" rx="2" fill="#FFCF00"/>
      <rect x="64" y="36" width="12" height="8" rx="2" fill="#FFCF00"/>
      <rect x="24" y="58" width="52" height="14" rx="4" fill="#00852B"/>
      <rect x="24" y="54" width="12" height="8" rx="2" fill="#00852B"/>
      <rect x="64" y="54" width="12" height="8" rx="2" fill="#00852B"/>
      <rect x="24" y="76" width="52" height="14" rx="4" fill="#0055BF"/>
      <rect x="24" y="72" width="12" height="8" rx="2" fill="#0055BF"/>
      <rect x="64" y="72" width="12" height="8" rx="2" fill="#0055BF"/>
    </svg>
  );
}
