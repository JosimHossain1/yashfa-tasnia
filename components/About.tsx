import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-4/5 rounded-3xl overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" 
            alt="Yashfa Tasnia" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-serif italic text-xl mb-4 block text-zinc-500 dark:text-zinc-400">The Visionary</span>
          <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight text-zinc-900 dark:text-zinc-100">Yashfa Tasnia</h2>
          <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans font-light">
            <p>
              I believe every frame tells a story that words often fail to capture. 
              With over 5 years of experience in visual storytelling, I've dedicated 
              my craft to finding the extraordinary in the ordinary.
            </p>
            <p>
              My approach is deeply rooted in minimalism and natural light. Whether 
              it's a high-fashion editorial or a quiet intimate wedding, I strive 
              to preserve the authenticity of the moment.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif italic text-lg mb-2 text-zinc-900 dark:text-zinc-100">Services</h4>
                <ul className="text-sm space-y-1 text-zinc-600 dark:text-zinc-400">
                  <li>Editorial Photography</li>
                  <li>Cinematic Videography</li>
                  <li>Brand Storytelling</li>
                  <li>Lifestyle Sessions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif italic text-lg mb-2 text-zinc-900 dark:text-zinc-100">Location</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Dhaka, Bangladesh<br />
                  Available Worldwide
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
