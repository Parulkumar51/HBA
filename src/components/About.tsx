import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Calendar, Target, Heart, Lightbulb, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Calendar, value: "5+", label: "Years Experience" },
    { icon: Users, value: "10+", label: "Team Members" },
    { icon: Award, value: "15+", label: "Awards Won" },
    { icon: Globe, value: "02+", label: "Countries" }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every detail matters in creating spaces that inspire and function seamlessly."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our hearts into every project, driven by love for exceptional design."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology and creative solutions."
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Uncompromising commitment to delivering world-class architectural solutions."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Principal Architect",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "10+ years of experience in sustainable architecture and urban planning."
    },
    {
      name: "Marcus Rodriguez",
      role: "Design Director",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Expert in 3D visualization and innovative design methodologies."
    },
    {
      name: "Elena Petrov",
      role: "Project Manager",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Specializes in large-scale commercial and residential developments."
    },
    {
      name: "David Kim",
      role: "Technology Lead",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Pioneering VR/AR integration in architectural design and client experiences."
    }
  ];

  return (
    <section className="pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6">
            About HBA Studio
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            We are a team of passionate architects, designers, and innovators dedicated to 
            creating extraordinary spaces that inspire and endure.
          </p>
        </motion.div>

        {/* Hero Story */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h2 className="text-3xl font-light text-zinc-900 mb-6">
              Crafting Tomorrow's Architecture Today
            </h2>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              Founded in 2009, HBA Studio has grown from a small design collective to an 
              internationally recognized architectural firm. Our journey began with a simple 
              belief: that great architecture has the power to transform lives and communities.
            </p>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              Today, we combine traditional architectural principles with cutting-edge technology, 
              creating immersive 3D experiences and sustainable solutions that push the boundaries 
              of what's possible in architectural design.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              From residential homes to commercial complexes, cultural centers to urban planning, 
              we approach every project with the same dedication to excellence and innovation 
              that has defined our practice for over a decade.
            </p>
          </div>
          <div className="relative">
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="HBA Studio Office"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-zinc-900 mb-2">{stat.value}</div>
                <div className="text-zinc-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Values */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-zinc-900 mb-4">Our Values</h2>
            <p className="text-xl text-zinc-600">
              The principles that guide every project and decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-zinc-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-amber-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-zinc-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-4">{value.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-zinc-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-zinc-600">
              The creative minds behind our award-winning designs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-zinc-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;