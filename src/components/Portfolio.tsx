import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, Calendar, MapPin, Users, Square } from 'lucide-react';

interface PortfolioProps {
  detailed?: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ detailed = false }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['all', 'residential', 'commercial', 'hospitality', 'institutional'];

  const projects = [
    {
      id: 1,
      title: "Skyline Residence",
      category: "residential",
      location: "New York, NY",
      year: "2024",
      area: "450 m²",
      clients: "Private Client",
      description: "A luxurious residential tower featuring innovative sustainable design and panoramic city views.",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1029598/pexels-photo-1029598.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 2,
      title: "Modern Office Complex",
      category: "commercial",
      location: "London, UK",
      year: "2023",
      area: "2,500 m²",
      clients: "Tech Corp",
      description: "A state-of-the-art office building designed for maximum productivity and employee wellbeing.",
      image: "https://images.pexels.com/photos/1029598/pexels-photo-1029598.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/1029598/pexels-photo-1029598.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 3,
      title: "Boutique Hotel",
      category: "hospitality",
      location: "Paris, France",
      year: "2023",
      area: "1,800 m²",
      clients: "Luxury Hotels Group",
      description: "An intimate boutique hotel blending classic Parisian architecture with contemporary luxury.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1029598/pexels-photo-1029598.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 4,
      title: "Cultural Center",
      category: "institutional",
      location: "Tokyo, Japan",
      year: "2024",
      area: "3,200 m²",
      clients: "City of Tokyo",
      description: "A dynamic cultural center featuring flexible spaces for exhibitions, performances, and community events.",
      image: "https://images.pexels.com/photos/1029598/pexels-photo-1029598.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/1029598/pexels-photo-1029598.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 5,
      title: "Lakeside Villa",
      category: "residential",
      location: "Lake Como, Italy",
      year: "2023",
      area: "650 m²",
      clients: "Private Client",
      description: "A stunning lakeside villa that seamlessly integrates with the natural landscape.",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1029598/pexels-photo-1029598.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 6,
      title: "Corporate Headquarters",
      category: "commercial",
      location: "Dubai, UAE",
      year: "2024",
      area: "4,000 m²",
      clients: "Global Corp",
      description: "A futuristic corporate headquarters featuring advanced smart building technology.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1029598/pexels-photo-1029598.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = detailed ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section className={`${detailed ? 'pt-24' : 'py-24'} bg-white`}>
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
            Our Portfolio
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Explore our award-winning architectural projects that showcase innovation, 
            sustainability, and exceptional design craftsmanship.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                activeCategory === category
                  ? 'bg-amber-400 text-zinc-900'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-zinc-100 aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-lg rounded-full p-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-lg rounded-full p-2 text-white hover:bg-white/30 transition-all duration-300"
                >
                  <ExternalLink className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {selectedProject.category}
                  </span>
                  <span className="text-zinc-500 text-sm">{selectedProject.year}</span>
                </div>
                
                <h3 className="text-3xl font-light text-zinc-900 mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className="text-zinc-600 mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    <div>
                      <div className="text-sm text-zinc-500">Location</div>
                      <div className="font-medium">{selectedProject.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Square className="w-5 h-5 text-amber-500" />
                    <div>
                      <div className="text-sm text-zinc-500">Area</div>
                      <div className="font-medium">{selectedProject.area}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-amber-500" />
                    <div>
                      <div className="text-sm text-zinc-500">Client</div>
                      <div className="font-medium">{selectedProject.clients}</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {selectedProject.gallery.map((image: string, index: number) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProject.title} ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;