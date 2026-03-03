import { motion } from 'motion/react';
import { Camera, Video, Briefcase, Heart, Sparkles, Image as ImageIcon, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    title: "Editorial Photography",
    description: "High-end fashion and magazine-style shoots that tell a compelling visual story through composition and light.",
    icon: Camera,
    className: "md:col-span-2 md:row-span-2 bg-blue-50/50 dark:bg-blue-400/10",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Cinematic Videography",
    description: "Moving images that capture the rhythm and emotion of your story.",
    icon: Video,
    className: "md:col-span-2 md:row-span-1 bg-purple-50/50 dark:bg-purple-400/10",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Brand Storytelling",
    description: "Visual content designed to elevate your brand's identity.",
    icon: Briefcase,
    className: "md:col-span-1 md:row-span-1 bg-amber-50/50 dark:bg-amber-400/10",
    iconColor: "text-amber-600 dark:text-amber-400"
  },
  {
    title: "Lifestyle Sessions",
    description: "Authentic, candid moments captured in natural settings.",
    icon: Heart,
    className: "md:col-span-1 md:row-span-1 bg-rose-50/50 dark:bg-rose-400/10",
    iconColor: "text-rose-600 dark:text-rose-400"
  },
  {
    title: "Creative Direction",
    description: "Full-scale conceptualization and planning for your visual projects.",
    icon: Sparkles,
    className: "md:col-span-2 md:row-span-1 bg-emerald-50/50 dark:bg-emerald-400/10",
    iconColor: "text-emerald-600 dark:text-emerald-400"
  },
  {
    title: "Post-Production",
    description: "Expert color grading and retouching for a signature finish.",
    icon: ImageIcon,
    className: "md:col-span-2 md:row-span-1 bg-zinc-100/50 dark:bg-zinc-400/10",
    iconColor: "text-zinc-600 dark:text-zinc-400"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.3em] opacity-50 mb-4 block">Our Offerings</span>
          <h2 className="font-serif text-5xl md:text-7xl leading-none">Tailored Visual <br /><span className="italic">Experiences.</span></h2>
        </div>
        <p className="max-w-xs opacity-60 text-sm leading-relaxed mb-2">
          From high-fashion editorials to cinematic brand stories, we provide a full suite of visual services tailored to your unique vision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[180px] auto-rows-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "group relative p-8 rounded-4xl border border-zinc-200/50 dark:border-zinc-800/50 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-none",
              service.className
            )}
          >
            <div className="flex justify-between items-start relative z-10">
              <div className={cn("p-3 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm transition-transform duration-500 group-hover:scale-110", service.iconColor)}>
                <service.icon className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-40 transition-opacity" />
            </div>

            <div className="relative z-10">
              <h3 className="font-serif text-2xl mb-2 group-hover:translate-x-1 transition-transform duration-500">
                {service.title}
              </h3>
              <p className="text-sm opacity-50 leading-relaxed max-w-[240px] group-hover:opacity-80 transition-opacity">
                {service.description}
              </p>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-150 transition-transform duration-1000">
              <service.icon className="w-full h-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
