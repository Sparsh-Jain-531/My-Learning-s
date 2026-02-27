import "./App.css";
import { motion } from "motion/react";

function App() {
  return (
    <div>
      <motion.div
        className="box"

        initial={{
          // x: 500
        }}
        animate={{
          // x: [0,800,800,0,0],
          // y: [0,0,300,300,0],
          // rotate: [0,360,0,-360,0]
          // rotate: 360
        }}
        transition={{
          // duration: 4,
          // delay: 1
          // repeat: Infinity,
          // ease: "anticipate"
        }}

        whileHover={{
          // backgroundColor: "red"
        }}
        whileTap={{
          // scale: 0.8
        }}

        drag
        whileDrag={{
          scale: 0.8
        }}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 1000,
          bottom: 50
        }}
        // dragDirectionLock = "true"
      >
        app
      </motion.div>
    </div>
  );
}

export default App;
