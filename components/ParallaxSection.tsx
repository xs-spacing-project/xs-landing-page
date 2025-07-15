import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = (): React.ReactNode => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[60vh] md:h-[70vh] overflow-hidden"
    >
      {/* Placeholder image from Unsplash. Alternative: A high-quality, serene image of a temple or landscape */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://www.mindinventory.com/blog/wp-content/uploads/2022/10/car-parking-app.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: y,
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 h-full flex flex-col justify-center items-center text-center p-6"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-all-white tracking-tighter text-glow max-w-4xl">
          Focus on your faith,
          <br />
          we'll handle the rest.
        </h2>
        <p className="mt-6 text-lg md:text-xl text-active-accent-light max-w-2xl">
          Xs provides the peace of mind you deserve before you even arrive.
        </p>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
