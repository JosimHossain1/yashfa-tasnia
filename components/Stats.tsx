import { motion } from 'motion/react';

const stats = [
  { label: "Years Experience", value: "05+" },
  { label: "Countries Visited", value: "12" },
  { label: "Happy Clients", value: "200+" },
  { label: "Awards Won", value: "08" },
];

export const Stats = () => {
  return (
    <section className="py-24 px-6 md:px-12 border-y border-current/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="font-serif text-5xl md:text-7xl mb-2 tracking-tighter">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-50">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
