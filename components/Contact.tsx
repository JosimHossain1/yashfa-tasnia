import { motion } from 'motion/react';
import { Mail, Instagram, Twitter, ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-serif text-5xl md:text-7xl mb-8">Let's create <br /><span className="italic">together.</span></h2>
          <p className="text-lg opacity-60 mb-12 max-w-md">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:yashfa.films@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xl font-serif italic">yashfa.films@gmail.com</span>
            </a>
            
            <div className="flex gap-4 pt-4">
              {[Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-current/20 flex items-center justify-center hover:border-current transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest opacity-50">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-current/20 py-2 focus:border-current outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest opacity-50">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-current/20 py-2 focus:border-current outline-none transition-colors" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest opacity-50">Message</label>
            <textarea rows={4} className="w-full bg-transparent border-b border-current/20 py-2 focus:border-current outline-none transition-colors resize-none" />
          </div>
          <button className="flex items-center gap-4 group text-xl font-serif italic cursor-pointer">
            Send Message
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};
