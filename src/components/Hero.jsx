import React from "react";
import { motion } from "framer-motion";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { MdAndroid } from "react-icons/md";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-screen"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <span className="gradient-primary font-semibold text-sm tracking-wide uppercase">
                India's Innovation Network
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Build. Connect. Grow. <br />
              With <span className="gradient-primary">BharatWorks.</span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              The ultimate ecosystem for builders, founders, and creators.
              Connect with top talent, discover startups, and accelerate your
              growth.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#download"
                className="flex items-center gap-3 bg-white text-secondary px-6 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                <FaGooglePlay className="text-2xl" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase font-semibold text-gray-500">
                    Get it on
                  </div>
                  <div className="text-sm">Google Play</div>
                </div>
              </a>
              <a
                href="#download"
                className="flex items-center gap-3 glass border border-white/10 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-colors"
              >
                <FaApple className="text-2xl text-white" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase font-semibold text-gray-300">
                    Download on the
                  </div>
                  <div className="text-sm">App Store</div>
                </div>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <MdAndroid className="text-gray-400" />
              <span>Direct APK also available</span>
            </div>
          </motion.div>

          {/* Hero Image Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex justify-center xl:justify-end"
          >
            <div className="relative w-full max-w-[400px] lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-[80px] -z-10"></div>
              <img
                src="/src/assets/hero-mockup.png"
                alt="BharatWorks App Experience"
                className="w-full h-auto drop-shadow-2xl hero-wobble"
                style={{
                  animation: "float 6s ease-in-out infinite",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }
      `,
        }}
      />
    </section>
  );
};

export default Hero;
