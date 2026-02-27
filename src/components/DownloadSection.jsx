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
              Android APK Available Now
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Your Network. Your Rules. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Download Today.
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Install both BharatWorks apps directly using APK files while
              store listings are being finalized.
            </p>

            <div className="flex flex-col justify-center items-center gap-4 mb-8">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="/myapp-worker-v2.apk"
                  download
                  className="flex items-center justify-center gap-3 bg-white text-secondary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl"
                >
                  <MdAndroid className="text-3xl" />
                  <div className="text-left leading-tight">
                    <div className="text-xs uppercase font-semibold text-gray-500">
                      Download Labour
                    </div>
                    <div className="text-lg">Worker APK</div>
                  </div>
                </a>

                <a
                  href="/myapp-employer-v2.apk"
                  download
                  className="flex items-center justify-center gap-3 bg-white text-secondary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl"
                >
                  <MdAndroid className="text-3xl" />
                  <div className="text-left leading-tight">
                    <div className="text-xs uppercase font-semibold text-gray-500">
                      Download Employer
                    </div>
                    <div className="text-lg">Employer APK</div>
                  </div>
                </a>
              </div>

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="flex items-center justify-center gap-3 bg-secondary/80 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold opacity-70">
                  <FaGooglePlay className="text-3xl" />
                  <div className="text-left leading-tight">
                    <div className="text-xs uppercase font-semibold text-gray-400">
                      Google Play
                    </div>
                    <div className="text-lg">Available Soon</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 bg-secondary/80 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold opacity-70">
                  <FaApple className="text-3xl" />
                  <div className="text-left leading-tight">
                    <div className="text-xs uppercase font-semibold text-gray-400">
                      iOS App Store
                    </div>
                    <div className="text-lg">Available Soon</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center pt-6 border-t border-white/10 mt-8">
              <p className="text-sm text-gray-400">
                iOS and Play Store options will be available soon.
              </p>
              <div className="flex gap-4 mt-3 text-xs text-gray-500 font-mono">
                <span>Direct public APK links</span>
                <span>&bull;</span>
                <span>No tester login required</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
