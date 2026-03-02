import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="font-playfair text-5xl font-bold leading-tight text-text-primary lg:text-7xl">
              Capturing <span className="text-text-primary/60 italic font-dancing">Stories</span> <br />
              Beyond the Lens
            </h1>
            <p className="mx-auto max-w-lg font-inter text-lg leading-relaxed text-text-primary/70 lg:mx-0">
              Professional photography and cinematic videography tailored to capture your most precious moments with elegance and depth.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="/portfolio"
                className="inline-block rounded-md bg-text-primary px-8 py-4 font-inter text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105"
                style={{
                  backgroundImage: "linear-gradient(127deg, rgb(14, 28, 41) -68%, rgb(50, 61, 104) 100%)",
                }}
              >
                View Portfolio
              </a>
              <a
                href="/contact"
                className="inline-block rounded-md border border-text-primary px-8 py-4 font-inter text-sm font-bold uppercase tracking-widest text-text-primary transition-all hover:bg-text-primary/5"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-bg-primary shadow-2xl transition-transform hover:scale-[1.02] lg:aspect-square">
            <div className="absolute inset-0 flex items-center justify-center text-text-primary/20 font-dancing text-3xl">
              Yashfa Tasnia
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

