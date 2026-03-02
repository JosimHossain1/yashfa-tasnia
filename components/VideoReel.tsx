import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';
import { useState } from 'react';

export const VideoReel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4 block">Motion Portfolio</span>
            <h2 className="font-serif text-5xl md:text-7xl leading-none text-white">Cinematic <br /><span className="italic">Storytelling.</span></h2>
          </div>
          <p className="max-w-xs text-white/60 text-sm leading-relaxed">
            Beyond stills, I capture the rhythm of life through moving images.
            From brand films to music videos and documentaries.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          onClick={() => setIsOpen(true)}
          className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070"
            alt="Video Reel Preview"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 md:w-8 md:h-8 fill-white" />
            </div>
          </div>

          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 right-4 md:right-8 flex justify-between items-end">
            <div className="font-serif text-lg md:text-2xl italic">2024 Showreel</div>
            <div className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-50">Play Reel (2:45)</div>
          </div>
        </motion.div>
      </div>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/10 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-zinc-800 shadow-2xl mx-auto group"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white/50 hover:text-white transition-all backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
