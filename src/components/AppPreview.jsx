import React from "react";
import { motion } from "framer-motion";

const AppPreview = () => {
  const screenshots = [
    "/src/assets/app-screen-1.png",
    "/src/assets/app-screen-2.png",
    "/src/assets/app-screen-3.png",
  ];

  return (
    <section
      id="preview"
      className="py-24 bg-[#0a121d] relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">
              Inside the App
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              A UI designed for speed
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Dark mode by default, glassmorphic elements for depth, and instant
              interactions. See what you're downloading.
            </p>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden mask-horizontal">
          <div
            className="flex gap-8 px-4 py-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {screenshots.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="snap-center shrink-0 w-[280px] sm:w-[320px] rounded-[2rem] border-[8px] border-secondary bg-black shadow-2xl relative"
                style={{ boxShadow: "0 20px 50px -12px rgba(0,0,0,0.5)" }}
              >
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-secondary rounded-b-xl z-10 flex justify-center items-center">
                  <div className="w-12 h-1 bg-black/50 rounded-full"></div>
                </div>

                <img
                  src={src}
                  alt={`App Screen ${idx + 1}`}
                  className="w-full h-auto rounded-3xl"
                />

                {/* Subtle Screen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[1.5rem] pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* Soft gradient fade on edges for wide screens */}
          <div className="hidden lg:block absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a121d] to-transparent pointer-events-none"></div>
          <div className="hidden lg:block absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a121d] to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .mask-horizontal {
           -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
           mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `,
        }}
      />
    </section>
  );
};

export default AppPreview;
