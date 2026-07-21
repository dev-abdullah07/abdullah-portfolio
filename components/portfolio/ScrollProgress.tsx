import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[oklch(0.65_0.25_300)] via-[oklch(0.6_0.22_265)] to-[oklch(0.78_0.16_210)] shadow-[0_0_20px_oklch(0.72_0.19_295)]"
    />
  );
}