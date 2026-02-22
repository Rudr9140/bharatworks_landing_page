import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaRobot, FaRocket } from "react-icons/fa";

const About = () => {
  const cards = [
    {
      title: "Community Growth",
      icon: <FaUsers className="text-3xl text-primary" />,
      description:
        "Join thousands of driven students, founders, and professionals building the future.",
      delay: 0.1,
    },
    {
      title: "Startup Collaboration",
      icon: <FaRocket className="text-3xl text-accent" />,
      description:
        "Find co-founders, collaborators, and beta testers for your next big idea.",
      delay: 0.2,
    },
    {
      title: "AI Discovery",
      icon: <FaRobot className="text-3xl text-primary" />,
      description:
        "Our intelligent matching system connects you with the perfect projects and people.",
      delay: 0.3,
    },
    {
      title: "Innovation Ecosystem",
      icon: <FaLightbulb className="text-3xl text-accent" />,
      description:
        "Access resources, funding opportunities, and exclusive networking events.",
      delay: 0.4,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0a121d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">
              About BharatWorks
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Empowering India's <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Next Generation
              </span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg hover:text-gray-300 transition-colors">
              BharatWorks is more than just an app. It's a movement to organize,
              support, and accelerate the Indian startup and innovation
              ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: card.delay }}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-accent/40 group relative overflow-hidden"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 shadow-lg shadow-black/50 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
                {card.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
