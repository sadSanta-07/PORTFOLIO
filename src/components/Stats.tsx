import { motion } from 'motion/react';

const stats = [
  { label: 'PROJECTS SHIPPED', value: '10+' },
  { label: 'HACKATHONS', value: '3+' },
  { label: 'BUGS FIXED', value: '999' },
  { label: 'THINGS TO LEARN', value: ' ∞' },
];

export const Stats = () => {
  return (
    <section className="py-10 bg-[var(--charcoal)] text-[var(--bg)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center md:text-left"
            >
              <p className="font-mono text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-2 italic">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-[var(--bg)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
