import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Move, 
  Eye, 
  Settings, 
  Download,
  Maximize,
  Play,
  Pause,
  VolumeX,
  Volume2
} from 'lucide-react';

const ThreeDViewer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentView, setCurrentView] = useState('exterior');
  const [viewerSettings, setViewerSettings] = useState({
    quality: 'high',
    lighting: 'dynamic',
    shadows: true,
    reflections: true
  });
  const viewerRef = useRef<HTMLDivElement>(null);

  const views = [
    { id: 'exterior', name: 'Exterior View', thumbnail: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 'interior', name: 'Interior View', thumbnail: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 'aerial', name: 'Aerial View', thumbnail: 'https://images.pexels.com/photos/1029598/pexels-photo-1029598.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 'section', name: 'Section View', thumbnail: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=200' }
  ];

  const controls = [
    { icon: RotateCcw, label: 'Reset View', action: () => console.log('Reset view') },
    { icon: ZoomIn, label: 'Zoom In', action: () => console.log('Zoom in') },
    { icon: ZoomOut, label: 'Zoom Out', action: () => console.log('Zoom out') },
    { icon: Move, label: 'Pan', action: () => console.log('Pan') },
    { icon: Eye, label: 'Walk Mode', action: () => console.log('Walk mode') },
    { icon: Maximize, label: 'Fullscreen', action: () => console.log('Fullscreen') }
  ];

  // Simulate 3D environment with CSS transforms
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isPlaying && viewerRef.current) {
        const rect = viewerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        setRotation({
          x: y * 20,
          y: x * 30
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isPlaying]);

  return (
    <section className="pt-24 pb-12 bg-zinc-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-light text-white mb-4">
            3D Visualization Studio
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Experience our projects through immersive 3D walkthroughs powered by WebGL technology
          </p>
        </motion.div>

        {/* Main Viewer */}
        <motion.div
          className="bg-zinc-800 rounded-2xl overflow-hidden mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative h-[600px] overflow-hidden" ref={viewerRef}>
            {/* 3D Scene Simulation */}
            <div 
              className="absolute inset-0 transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${zoom})`,
                transformOrigin: 'center center'
              }}
            >
              <div className="relative w-full h-full">
                <img
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="3D Scene"
                  className="w-full h-full object-cover"
                />
                
                {/* 3D Elements Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-purple-500/10"></div>
                
                {/* Animated Elements */}
                <motion.div
                  className="absolute top-1/4 left-1/4 w-4 h-4 bg-amber-400 rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute top-1/2 right-1/3 w-6 h-6 border-2 border-white rounded-full"
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </div>

            {/* Loading Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <motion.button
                  className="bg-white/20 backdrop-blur-lg rounded-full p-6 text-white hover:bg-white/30 transition-all duration-300"
                  onClick={() => setIsPlaying(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="w-12 h-12" />
                </motion.button>
              </div>
            )}

            {/* Control Overlay */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <div className="bg-black/50 backdrop-blur-lg rounded-lg p-2">
                <div className="flex space-x-2">
                  {controls.map((control, index) => {
                    const Icon = control.icon;
                    return (
                      <button
                        key={index}
                        onClick={control.action}
                        className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                        title={control.label}
                      >
                        <Icon className="w-5 h-5" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-lg rounded-lg p-2">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
                    <Settings className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/50 backdrop-blur-lg rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <span className="text-white text-sm">0:00</span>
                  <div className="flex-1 bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-amber-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: isPlaying ? "30%" : "0%" }}
                      transition={{ duration: 2 }}
                    />
                  </div>
                  <span className="text-white text-sm">5:30</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* View Selector */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => setCurrentView(view.id)}
              className={`relative overflow-hidden rounded-lg aspect-video transition-all duration-300 ${
                currentView === view.id 
                  ? 'ring-2 ring-amber-400 transform scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              <img
                src={view.thumbnail}
                alt={view.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <h3 className="text-white font-medium text-sm">{view.name}</h3>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Settings Panel */}
        <motion.div
          className="bg-zinc-800 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-6">Viewer Settings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Quality</label>
              <select
                value={viewerSettings.quality}
                onChange={(e) => setViewerSettings({...viewerSettings, quality: e.target.value})}
                className="w-full bg-zinc-700 border border-zinc-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="ultra">Ultra</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Lighting</label>
              <select
                value={viewerSettings.lighting}
                onChange={(e) => setViewerSettings({...viewerSettings, lighting: e.target.value})}
                className="w-full bg-zinc-700 border border-zinc-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="static">Static</option>
                <option value="dynamic">Dynamic</option>
                <option value="realtime">Real-time</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="shadows"
                checked={viewerSettings.shadows}
                onChange={(e) => setViewerSettings({...viewerSettings, shadows: e.target.checked})}
                className="w-4 h-4 text-amber-400 bg-zinc-700 border-zinc-600 rounded focus:ring-amber-400"
              />
              <label htmlFor="shadows" className="text-sm font-medium text-zinc-300">
                Enable Shadows
              </label>
            </div>
            
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="reflections"
                checked={viewerSettings.reflections}
                onChange={(e) => setViewerSettings({...viewerSettings, reflections: e.target.checked})}
                className="w-4 h-4 text-amber-400 bg-zinc-700 border-zinc-600 rounded focus:ring-amber-400"
              />
              <label htmlFor="reflections" className="text-sm font-medium text-zinc-300">
                Enable Reflections
              </label>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeDViewer;