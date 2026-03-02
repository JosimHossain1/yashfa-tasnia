"use client";

import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from "@/theme/Theme-Toggle";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <motion.div
          key="layout"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
