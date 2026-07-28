import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-void">
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Aurora blobs */}
      <div className="absolute -top-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-emerald-glow/20 blur-[110px] animate-aurora" />
      <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] rounded-full bg-azure/20 blur-[130px] animate-aurora [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] rounded-full bg-azure-deep/10 blur-[100px] animate-aurora [animation-delay:8s]" />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-[18%] left-[8%] w-16 h-16 border border-emerald-glow/25 rounded-2xl hidden md:block"
        animate={{ y: [0, -22, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[62%] left-[5%] w-10 h-10 border border-azure/30 rounded-full hidden md:block"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[28%] right-[10%] w-20 h-20 border border-azure/20 rotate-45 hidden lg:block"
        animate={{ y: [0, -26, 0], rotate: [45, 60, 45] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[16%] w-14 h-14 border border-emerald-glow/25 rounded-full hidden lg:block"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void/60" />
    </div>
  );
}
