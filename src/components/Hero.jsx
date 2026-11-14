import { useState } from 'react';
import { socials } from '../data/portfolio';

const galleryItems = [
  { image: '/assets/profile.jpg', caption: 'Me' },
  { image: '/assets/Graduation.jpeg', caption: 'Receiving CoM Award at Convocation' },
  { image: '/assets/STEP1.jpeg', caption: 'Receiving STEP Award in Islamabad for Outstanding Performance in University Entrance Exams' },
  { image: '/assets/PM_House.jpeg', caption: 'Invitation to the Prime Minister\'s House on "Youm-e-Taleem-o-Taraqi" in Recognition of Outstanding Academic Excellence.' },
  { image: '/assets/ICAP2.jpeg', caption: 'Awarded "Outstanding Performance Being Amongst Top 10 Position Holders" Nationwide HSSC-II in FBISE Board (by ICAP Pakistan 6th overall)' },
  { image: '/assets/Mitacs.jpeg', caption: 'Last Day Shot of Mitacs GRI with Supervisor, Presented my Paper' },
  { image: '/assets/NTC.jpeg', caption: 'Last Day of NTC Internship, Received A+ on Basis of Assessments Made by Reporting Office' },
  { image: '/assets/KAIST_EE.jpeg', caption: 'KAIST\'s Fully Funded Summer Camp in South Korea' },
  { image: '/assets/STEP2.jpeg', caption: 'Awarded Merit Scholarship for 4 consecutive years by STEP, for being Among Top 25 Scorers in ECAT Exam, 2022.' },
  { image: '/assets/AU.jpeg', caption: 'Runner Up Computing Quiz Competition in AirTech\'24 Organized by Air University Islamabad.' },
];

function SocialIcon({ icon }) {
  const iconMap = {
    github: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.58 2 12.22c0 4.51 2.865 8.34 6.839 9.7.5.093.682-.218.682-.485 0-.238-.009-.869-.014-1.706-2.782.606-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.622.069-.609.069-.609 1.004.071 1.533 1.032 1.533 1.032.892 1.531 2.34 1.088 2.909.833.091-.648.35-1.089.635-1.338-2.221-.253-4.555-1.112-4.555-4.944 0-1.092.39-1.985 1.029-2.683-.103-.253-.446-1.271.098-2.646 0 0 .84-.269 2.75 1.026A9.548 9.548 0 0 1 12 6.844c.85 0 1.707.115 2.506.34 1.91-1.295 2.75-1.026 2.75-1.026.545 1.375.202 2.393.099 2.646.642.698 1.028 1.591 1.028 2.683 0 3.842-2.337 4.688-4.566 4.937.359.31.678.923.678 1.858 0 1.341-.012 2.421-.012 2.752 0 .27.18.582.688.484A10.022 10.022 0 0 0 22 12.22C22 6.58 17.523 2 12 2Z" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5A1.5 1.5 0 1 1 6.94 5.5a1.5 1.5 0 0 1 0 3ZM5.5 9.75h2.88v8.75H5.5V9.75Zm4.69 0h2.76v1.2h.04c.38-.72 1.31-1.48 2.7-1.48 2.89 0 3.42 1.9 3.42 4.37v4.66h-2.88v-4.36c0-1.04-.02-2.37-1.45-2.37-1.45 0-1.67 1.13-1.67 2.3v4.43H10.19V9.75Z" />
      </svg>
    ),
    whatsapp: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.42 2.13 11.87c0 2.08.61 4.1 1.77 5.86L2 22l4.38-1.48a9.85 9.85 0 0 0 5.66 1.86c5.46 0 9.9-4.42 9.9-9.87S17.5 2 12.04 2Zm0 17.92c-1.53 0-3.03-.42-4.33-1.21l-.31-.18-2.6.88 1-2.5-.2-.33A8.04 8.04 0 0 1 3.92 11.9c0-4.44 3.62-8.03 8.12-8.03 4.5 0 8.12 3.59 8.12 8.03 0 4.43-3.62 8.02-8.12 8.02Zm4.46-6.02c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.55.12-.17.25-.64.8-.78.96-.14.17-.3.18-.55.06-.25-.12-1.05-.39-2-1.25-.74-.66-1.24-1.48-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.3.37-.45.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.42-.55-.42h-.47c-.17 0-.45.06-.68.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.43.1 2.73.09.16.2.24.34.38.12.12.26.26.35.42.1.16.2.33.29.49.08.16.19.26.33.42.13.16.24.28.37.4.23.2.5.3.82.37.32.07.64.04.92-.09.29-.13.88-.36 1.49-.72.61-.37 1.02-.67 1.16-.86.14-.2.14-.4.1-.53-.03-.12-.12-.2-.27-.32Z" />
      </svg>
    ),
    gmail: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.12-.75L12 11.8l6.88-5.8H5.12Zm14.13 2.03-6.52 5.49a1 1 0 0 1-1.26 0L4.75 8.03v9.22c0 .69.56 1.25 1.25 1.25h12.0c.69 0 1.25-.56 1.25-1.25V8.03Z" />
      </svg>
    ),
  };

  return <span className="social-icon-wrap">{iconMap[icon]}</span>;
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');

  const currentImage = galleryItems[activeIndex];

  const changeSlide = (nextIndex) => {
    setSlideDirection(nextIndex > activeIndex ? 'right' : 'left');
    setActiveIndex(nextIndex);
  };

  const goPrev = () => {
    const nextIndex = activeIndex === 0 ? galleryItems.length - 1 : activeIndex - 1;
    changeSlide(nextIndex);
  };

  const goNext = () => {
    const nextIndex = (activeIndex + 1) % galleryItems.length;
    changeSlide(nextIndex);
  };

  return (
    <section id="top" className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.6fr_1fr] gap-8 items-start">
        <div
          className="relative rounded-xl border border-white/30 p-8 shadow-[8px_8px_0_rgba(0,0,0,0.35)] bubble-up reveal-from-left reveal"
          style={{
            fontFamily: 'Optima, "Segoe UI", "Avenir Next", sans-serif',
            color: '#ffffff',
            background: 'rgba(14, 17, 22, 0.34)',
            borderColor: 'rgba(255,255,255,0.08)',
          }}
        >
          <div className="absolute -top-3 left-8 flex gap-2.5">
            <div className="w-5 h-3 bg-lego-red rounded-t-md" />
            <div className="w-5 h-3 bg-lego-yellow rounded-t-md" />
            <div className="w-5 h-3 bg-lego-green rounded-t-md" />
          </div>

          <div className="font-mono text-sm" style={{ color: '#ffffff' }}>
            <span className="font-semibold" style={{ color: '#ffffff' }}>alishbah@cs-node:~$</span>{' '}
            <span style={{ color: '#facc15' }}>./run_portfolio.sh --verbose</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight" style={{ color: '#ffffff' }}>
            Alishbah Bashir
          </h1>

          <div className="mt-6 text-[0.95rem] md:text-lg" style={{ color: '#ffffff', fontFamily: 'Optima, "Segoe UI", "Avenir Next", sans-serif', lineHeight: 1.8 }}>
            <div style={{ color: '#ffffff' }}>
              <div style={{ marginBottom: '0.2rem', color: '#ffffff' }}>
                I graduated in CS with CoM Award. People used to call me theeta. I called myself hardworking. Nevertheless, I’m glad with the progress I made in my undergrad years.
              </div>
              <div style={{ color: '#ffffff', marginTop: '0.75rem' }}>
                I like doing research. I also like yapping. Both are just asking questions until something clicks. The Maze Runner is my all time favourite movie. One of my shortcomings is being a perfectionist which can get really toxic sometimes. Anyway, that's who I am. The rest of the site is what I've done.
              </div>
              <div style={{ color: '#ffffff', marginTop: '0.75rem', fontStyle: 'italic' }}>
                And oh, forgot to mention, I love eating too.
              </div>
            </div>
          </div>

          <div className="mt-6 border-l-[3px] border-lego-blue pl-3 font-mono" style={{ color: '#ffffff' }}>
            <span className="typing-compile" style={{ color: '#ff5a5f' }}>Compiling</span>
          </div>
        </div>

        <div
          className="relative rounded-xl border border-white/30 p-5 text-center shadow-[8px_8px_0_rgba(0,0,0,0.3)] bubble-up reveal-from-right reveal"
          style={{
            fontFamily: 'Optima, "Segoe UI", "Avenir Next", sans-serif',
            color: '#ffffff',
            background: 'rgba(14, 17, 22, 0.34)',
            borderColor: 'rgba(255,255,255,0.08)',
          }}
        >
          <div className="absolute -top-3 left-8 flex gap-2.5">
            <div className="w-5 h-3 bg-lego-blue rounded-t-md" />
            <div className="w-5 h-3 bg-lego-red rounded-t-md" />
          </div>

          <div className="hero-photo-card">
            <button type="button" className="photo-nav left" onClick={goPrev} aria-label="Previous photo">
              ❮
            </button>

            <div className="photo-viewport">
              <img
                key={`${activeIndex}-${slideDirection}`}
                src={currentImage.image}
                alt={currentImage.caption}
                className={`photo-slide ${slideDirection === 'right' ? 'slide-in-right' : 'slide-in-left'}`}
              />
            </div>

            <button type="button" className="photo-nav right" onClick={goNext} aria-label="Next photo">
              ❯
            </button>
          </div>

          <div className="hero-caption">{currentImage.caption}</div>

          <div className="text-lg font-extrabold text-black mb-3">BS Computer Science (3.92/4.00 CGPA, CoM Award, 3rd Rank in Batch)</div>

          <div className="achievement-list">
            <span className="achievement-pill dark">40+ Awards and Recognitions</span>
            <span className="achievement-pill gold">8x Full Merit Scholarships</span>
            <span className="achievement-pill slate">3 Int'l Experiences</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            className="social-box"
            style={{ borderColor: 'rgba(255,255,255,0.18)' }}
          >
            <SocialIcon icon={s.icon} />
            <span style={{ color: '#000000', fontWeight: 800, fontSize: '0.98rem' }}>{s.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
