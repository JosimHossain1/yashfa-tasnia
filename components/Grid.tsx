import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const items = [
  {
    id: 1,
    title: "Ethereal Portraits",
    category: "Editorial",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Urban Motion",
    category: "Videography",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Golden Hour",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    title: "Cinematic Still",
    category: "Film",
    image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=1000",
    className: "md:col-span-1 md:row-span-1",
  }
];

export const Grid = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Selected Works</h2>
        <p className="opacity-60 max-w-md">A collection of moments captured through my lens, blending light, emotion, and story.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[300px] auto-rows-[250px]">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "group relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 cursor-pointer",
              item.className
            )}
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase tracking-widest mb-1 opacity-80">{item.category}</span>
              <h3 className="font-serif text-xl">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
