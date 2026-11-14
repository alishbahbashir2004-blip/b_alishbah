import SectionHeader from './SectionHeader';

export default function Research() {
  return (
    <section id="research" className="px-6 py-16">
      <div className="max-w-4xl mx-auto text-center reveal">
        <SectionHeader title="Research Work" colors={['red', 'yellow', 'blue']} />

        <div className="mt-8 space-y-10 text-left">
          <div>
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#111827]">
              ULTRA — Transformer-based Recommendation for Low-Resource Urdu
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-base md:text-lg leading-relaxed text-[#111827]">
              Proposed ULTRA, a novel dual-path recommendation framework for the Urdu language.
              Achieved 94% precision on Urdu news datasets and is currently under review for publication.
            </p>
            <a
              href="https://drive.google.com/file/d/1FFROPXvbHxsk6PCayCqBTU_6RMzB2h6i/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[#2563eb] underline underline-offset-4 decoration-[#2563eb] hover:decoration-[#1d4ed8]"
            >
              <span>Link</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#111827]">
              Geosatellite Emissions Platform
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-base md:text-lg leading-relaxed text-[#111827]">
              Wrote a geosatellite emissions paper, created agent pipelines for CH4, CO, SO2, CO2 and NO2 gases.
              This work is of special interest for the scientific community, environmental administrations and analysts
              who are looking for an extensible, transparent and data-based emissions assessment tool based on satellite observations.
            </p>
            <a
              href="https://docs.google.com/document/d/13-FYQzURBT8xKJLF77Dab8fI_yidbexI/edit?usp=drive_link&ouid=116828444934854685187&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[#2563eb] underline underline-offset-4 decoration-[#2563eb] hover:decoration-[#1d4ed8]"
            >
              <span>Link</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
