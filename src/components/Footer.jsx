import { socials } from '../data/portfolio';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line mt-10 px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-2 mb-4">
          <span className="w-3.5 h-3.5 rounded bg-lego-red" />
          <span className="w-3.5 h-3.5 rounded bg-white" />
          <span className="w-3.5 h-3.5 rounded bg-lego-blue" />
        </div>

        <p className="text-sm md:text-base text-white mb-4">
          // wanna yap together? let&apos;s do it.
          <br />
          // hit me up below and we&apos;ll make something weirdly good.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="text-[11px] text-white hover:text-lego-cyan transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
