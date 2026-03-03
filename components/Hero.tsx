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
        <div className="relative inline-block">
          {/* Camera Focus Corners with Blink Effect */}
          <motion.div
            initial={{ opacity: 1, scale: 1.2 }}
            animate={{ opacity: [1, 0.3, 1], scale: 1 }}
            transition={{
              opacity: {
                times: [0, 0.5, 1],
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: { duration: 0.5, delay: 0.8 }
            }}
            className="absolute -top-4 -left-4 w-5 h-5 border-t-2 border-l-2 border-current opacity-30"
          />
          <motion.div
            initial={{ opacity: 1, scale: 1.2 }}
            animate={{ opacity: [1, 0.3, 1], scale: 1 }}
            transition={{
              opacity: {
                times: [0, 0.5, 1],
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: { duration: 0.5, delay: 0.8 }
            }}
            className="absolute -top-4 -right-4 w-5 h-5 border-t-2 border-r-2 border-current opacity-30"
          />
          <motion.div
            initial={{ opacity: 1, scale: 1.2 }}
            animate={{ opacity: [1, 0.3, 1], scale: 1 }}
            transition={{
              opacity: {
                times: [0, 0.5, 1],
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: { duration: 0.5, delay: 0.8 }
            }}
            className="absolute -bottom-4 -left-4 w-5 h-5 border-b-2 border-l-2 border-current opacity-30"
          />
          <motion.div
            initial={{ opacity: 1, scale: 1.2 }}
            animate={{ opacity: [1, 0.3, 1], scale: 1 }}
            transition={{
              opacity: {
                times: [0, 0.5, 1],
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: { duration: 0.5, delay: 0.8 }
            }}
            className="absolute -bottom-4 -right-4 w-5 h-5 border-b-2 border-r-2 border-current opacity-30"
          />

          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-none mb-8">
            Capturing <br />
            <span className="italic">the soul</span> of moments.
          </h1>
        </div>
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
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
};
