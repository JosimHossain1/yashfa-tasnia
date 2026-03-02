import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10"
      >
        <h2 className="font-serif italic text-lg md:text-xl mb-4 opacity-60">Photographer & Videographer</h2>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-none mb-8">
          Capturing <br />
          <span className="italic">the soul</span> of moments.
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-md mx-auto text-sm md:text-base opacity-70 font-sans tracking-wide leading-relaxed"
        >
          Based in Dhaka, traveling worldwide. Specializing in editorial, 
          lifestyle, and cinematic storytelling.
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070" 
          alt="Background" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to explore</span>
        <div className="w-px h-12 bg-current"></div>
      </div>
    </section>
  );
};
