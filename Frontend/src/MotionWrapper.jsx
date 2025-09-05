
import { motion } from "framer-motion";

export default function MotionWrapper({ children, delay = 0, direction = "up", className = "" }) {
  let x = 0, y = 0;

  // direction ke hisaab se initial position set karo
  switch(direction){
    case "up": y = 20; break;
    case "down": y = -20; break;
    case "left": x = 20; break;
    case "right": x = -20; break;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={{ opacity: 1, x:0, y:0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
