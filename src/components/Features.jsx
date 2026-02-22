import React from "react";
import { motion } from "framer-motion";
import {
  FiMessageSquare,
  FiTrendingUp,
  FiCheckCircle,
  FiShield,
  FiBell,
  FiSearch,
  FiCode,
  FiLayers,
} from "react-icons/fi";

const Features = () => {
  const featureList = [
    {
      title: "Smart Networking",
      icon: <FiLayers />,
      desc: "Connect with like-minded individuals based on skills, interests, and goals.",
    },
    {
      title: "AI Matching",
      icon: <FiSearch />,
      desc: "Our algorithms pair you with ideal co-founders and relevant projects.",
    },
    {
      title: "Project Collaboration",
      icon: <FiCode />,
      desc: "Build together with built-in tools for task tracking and team coordination.",
    },
    {
      title: "Startup Discovery",
      icon: <FiTrendingUp />,
      desc: "Explore new startups, deep-tech innovations, and creator projects.",
    },
    {
      title: "Event Notifications",
      icon: <FiBell />,
      desc: "Never miss crucial hackathons, mixers, and investor pitch days.",
    },
    {
      title: "Secure Messaging",
      icon: <FiMessageSquare />,
      desc: "End-to-end encrypted chats for high-stakes founder discussions.",
    },
    {
      title: "Verified Profiles",
      icon: <FiShield />,
      desc: "Trust who you connect with through our strict verification system.",
    },
    {
      title: "Growth Dashboard",
      icon: <FiCheckCircle />,
      desc: "Track your milestones, connections made, and project progress over time.",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-12 transform origin-top blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">
              Core Capabilities
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Everything you need to <br /> scale your ideas
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-5/12 mt-6 md:mt-0 text-gray-400"
          >
            <p>
              BharatWorks is packed with tools engineered specifically for the
              Indian ecosystem. From finding your first technical co-founder to
              tracking your startup's momentum.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureList.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="group glass p-6 rounded-2xl border border-white/5 hover:border-primary/50 relative overflow-hidden cursor-default transition-all duration-300"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="text-primary text-3xl mb-5 group-hover:scale-110 group-hover:text-accent transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
