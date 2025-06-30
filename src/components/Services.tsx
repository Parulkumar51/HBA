import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Cuboid as Cube, Layers, Compass, Palette, Lightbulb, Users, Settings, Zap, Shield, Globe, Smartphone } from 'lucide-react';

interface ServicesProps {
  detailed?: boolean;
}

const Services: React.FC<ServicesProps> = ({ detailed = false }) => {
  const services = [
    {
      icon: Building2,
      title: "Architectural Design",
      description: "Complete architectural solutions from concept to construction with innovative design approaches.",
      features: ["Conceptual Design", "Technical Drawings", "3D Modeling", "Construction Documentation"],
      color: "bg-blue-500"
    },
    {
      icon: Cube,
      title: "3D Visualization",
      description: "Immersive 3D experiences with WebGL-powered walkthroughs and photorealistic renderings.",
      features: ["Virtual Reality Tours", "Interactive 3D Models", "Real-time Rendering", "360° Panoramas"],
      color: "bg-purple-500"
    },
    {
      icon: Layers,
      title: "Space Planning",
      description: "Intelligent space optimization using advanced algorithms and user behavior analysis.",
      features: ["Space Optimization", "Flow Analysis", "Furniture Layout", "Accessibility Planning"],
      color: "bg-green-500"
    },
    {
      icon: Compass,
      title: "Master Planning",
      description: "Comprehensive urban and site planning with sustainable development principles.",
      features: ["Urban Planning", "Site Analysis", "Zoning Studies", "Environmental Impact"],
      color: "bg-orange-500"
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Sophisticated interior solutions that blend aesthetics with functionality.",
      features: ["Material Selection", "Color Schemes", "Lighting Design", "Custom Furniture"],
      color: "bg-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Sustainable Design",
      description: "Eco-friendly architectural solutions focused on energy efficiency and environmental impact.",
      features: ["Green Building", "Energy Analysis", "LEED Certification", "Carbon Footprint"],
      color: "bg-teal-500"
    },
    {
      icon: Users,
      title: "Project Management",
      description: "End-to-end project coordination ensuring timely delivery and quality control.",
      features: ["Timeline Management", "Quality Control", "Budget Planning", "Team Coordination"],
      color: "bg-indigo-500"
    },
    {
      icon: Settings,
      title: "BIM Integration",
      description: "Building Information Modeling for enhanced collaboration and project efficiency.",
      features: ["BIM Modeling", "Data Management", "Collaboration Tools", "Clash Detection"],
      color: "bg-gray-500"
    },
    {
      icon: Zap,
      title: "Smart Building",
      description: "Integration of IoT and smart technologies for intelligent building management.",
      features: ["IoT Integration", "Smart Controls", "Energy Management", "Automation Systems"],
      color: "bg-yellow-500"
    },
    {
      icon: Shield,
      title: "Structural Analysis",
      description: "Advanced structural engineering with seismic analysis and safety optimization.",
      features: ["Structural Design", "Seismic Analysis", "Load Calculations", "Safety Compliance"],
      color: "bg-red-500"
    },
    {
      icon: Globe,
      title: "Global Consulting",
      description: "International architectural consulting with local expertise and cultural sensitivity.",
      features: ["International Projects", "Local Partnerships", "Cultural Integration", "Regulatory Compliance"],
      color: "bg-cyan-500"
    },
    {
      icon: Smartphone,
      title: "AR/VR Solutions",
      description: "Cutting-edge augmented and virtual reality experiences for immersive design review.",
      features: ["AR Visualization", "VR Walkthroughs", "Mixed Reality", "Mobile Apps"],
      color: "bg-violet-500"
    }
  ];

  const displayedServices = detailed ? services : services.slice(0, 6);

  return (
    <section className={`${detailed ? 'pt-24' : 'py-24'} bg-zinc-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Comprehensive architectural solutions combining traditional expertise with 
            cutting-edge technology to bring your vision to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-zinc-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zinc-500">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        {!detailed && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-amber-400 hover:bg-amber-500 text-zinc-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
            </motion.button>
          </motion.div>
        )}

        {/* Process Section */}
        {detailed && (
          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-light text-zinc-900 text-center mb-16">
              Our Process
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "Understanding your vision and requirements" },
                { step: "02", title: "Design", description: "Creating innovative architectural solutions" },
                { step: "03", title: "Development", description: "Detailed planning and documentation" },
                { step: "04", title: "Delivery", description: "Construction oversight and project completion" }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-zinc-900 font-bold text-lg">{phase.step}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-zinc-900 mb-2">{phase.title}</h4>
                  <p className="text-zinc-600">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;