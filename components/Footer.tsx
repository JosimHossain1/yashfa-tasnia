export const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-current/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-serif text-xl">Yashfa Tasnia</div>
        
        <div className="flex gap-8 text-[10px] uppercase tracking-widest opacity-50">
          <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Vimeo</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Behance</a>
        </div>

        <div className="text-[10px] uppercase tracking-widest opacity-30">
          © 2024 Yashfa Tasnia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
