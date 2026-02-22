import React from "react";
import { motion } from "framer-motion";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { MdAndroid } from "react-icons/md";

const DownloadSection = () => {
  return (
    <section
      id="download"
      className="py-24 relative overflow-hidden bg-primary/10"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-[#0a121d] to-accent/20 z-0"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card p-10 md:p-16 text-center border-primary/30 shadow-primary/20 bg-black/40 backdrop-blur-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest mb-6">
              Available Now Across Platforms
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Your Network. Your Rules. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Download Today.
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Join thousands of builders already crushing their goals on
              BharatWorks. The ultimate app for founders and creators.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              {/* Play Store Button */}
              <a
                href="#"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-secondary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl"
              >
                <FaGooglePlay className="text-3xl" />
                <div className="text-left leading-tight">
                  <div className="text-xs uppercase font-semibold text-gray-500">
                    Get it on
                  </div>
                  <div className="text-lg">Google Play</div>
                </div>
              </a>

              {/* App Store Button */}
              <a
                href="#"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-secondary border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 hover:border-white/40 transition-all shadow-xl"
              >
                <FaApple className="text-3xl" />
                <div className="text-left leading-tight">
                  <div className="text-xs uppercase font-semibold text-gray-400">
                    Download on the
                  </div>
                  <div className="text-lg">App Store</div>
                </div>
              </a>
            </div>

            {/* Direct APK */}
            <div className="flex flex-col items-center justify-center pt-6 border-t border-white/10 mt-8">
              <a
                href="#"
                className="flex items-center gap-2 group text-gray-400 hover:text-white transition-colors"
              >
                <MdAndroid className="text-xl group-hover:text-primary transition-colors" />
                <span className="font-medium underline underline-offset-4 decoration-primary/50 group-hover:decoration-primary">
                  Download Direct APK
                </span>
              </a>
              <div className="flex gap-4 mt-3 text-xs text-gray-500 font-mono">
                <span>Version 2.4.0</span>
                <span>•</span>
                <span>Size: 42MB</span>
                <span>•</span>
                <span>Requires iOS 14+ / Android 8+</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
