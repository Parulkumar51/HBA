import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Square, 
  Circle, 
  Triangle, 
  Trash2, 
  RotateCw, 
  Copy, 
  Download, 
  Save,
  Undo,
  Redo,
  Grid,
  Layers,
  Palette,
  Settings
} from 'lucide-react';

const Configurator: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<string>('select');
  const [elements, setElements] = useState<any[]>([]);
  const [selectedElement, setSelectedElement] = useState<number | null>(null);
  const [gridEnabled, setGridEnabled] = useState(true);
  const [snapToGrid, setSnapToGrid] = useState(true);
  const canvasRef = useRef<HTMLDivElement>(null);

  const tools = [
    { id: 'select', icon: Square, name: 'Select', color: 'bg-blue-500' },
    { id: 'wall', icon: Square, name: 'Wall', color: 'bg-gray-500' },
    { id: 'door', icon: Square, name: 'Door', color: 'bg-amber-500' },
    { id: 'window', icon: Square, name: 'Window', color: 'bg-cyan-500' },
    { id: 'furniture', icon: Circle, name: 'Furniture', color: 'bg-green-500' },
    { id: 'light', icon: Circle, name: 'Light', color: 'bg-yellow-500' }
  ];

  const materials = [
    { id: 'concrete', name: 'Concrete', color: '#8B8680' },
    { id: 'wood', name: 'Wood', color: '#8B4513' },
    { id: 'glass', name: 'Glass', color: '#87CEEB' },
    { id: 'steel', name: 'Steel', color: '#4682B4' },
    { id: 'brick', name: 'Brick', color: '#B22222' },
    { id: 'marble', name: 'Marble', color: '#F5F5DC' }
  ];

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (selectedTool === 'select') return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newElement = {
      id: Date.now(),
      type: selectedTool,
      x: snapToGrid ? Math.round(x / 20) * 20 : x,
      y: snapToGrid ? Math.round(y / 20) * 20 : y,
      width: selectedTool === 'wall' ? 100 : 60,
      height: selectedTool === 'wall' ? 20 : 60,
      rotation: 0,
      material: 'concrete',
      color: tools.find(t => t.id === selectedTool)?.color || 'bg-gray-500'
    };

    setElements([...elements, newElement]);
  };

  const handleElementClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setSelectedElement(index);
  };

  const deleteElement = (index: number) => {
    setElements(elements.filter((_, i) => i !== index));
    if (selectedElement === index) {
      setSelectedElement(null);
    }
  };

  const duplicateElement = (index: number) => {
    const element = elements[index];
    const newElement = {
      ...element,
      id: Date.now(),
      x: element.x + 20,
      y: element.y + 20
    };
    setElements([...elements, newElement]);
  };

  const rotateElement = (index: number) => {
    const newElements = [...elements];
    newElements[index] = {
      ...newElements[index],
      rotation: (newElements[index].rotation + 90) % 360
    };
    setElements(newElements);
  };

  const exportConfiguration = () => {
    const config = {
      elements,
      metadata: {
        created: new Date().toISOString(),
        version: '1.0',
        gridSize: 20
      }
    };
    
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'floor-plan.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="pt-24 pb-12 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-4">
            3D Space Configurator
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Design and customize your space with our intuitive drag-and-drop interface
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Toolbar */}
          <motion.div
            className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-zinc-900 mb-4">Tools</h3>
            
            <div className="space-y-2 mb-6">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedTool(tool.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                      selectedTool === tool.id
                        ? 'bg-amber-100 text-amber-800 border-2 border-amber-400'
                        : 'bg-zinc-50 text-zinc-700 hover:bg-zinc-100'
                    }`}
                  >
                    <div className={`w-8 h-8 ${tool.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{tool.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="border-t pt-4 mb-6">
              <h4 className="text-sm font-semibold text-zinc-900 mb-3">Materials</h4>
              <div className="grid grid-cols-3 gap-2">
                {materials.map((material) => (
                  <button
                    key={material.id}
                    className="aspect-square rounded-lg border-2 border-zinc-200 hover:border-amber-400 transition-all duration-300"
                    style={{ backgroundColor: material.color }}
                    title={material.name}
                  />
                ))}
              </div>
            </div>

            <div className="border-t pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-700">Grid</span>
                <button
                  onClick={() => setGridEnabled(!gridEnabled)}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    gridEnabled ? 'bg-amber-100 text-amber-800' : 'bg-zinc-100 text-zinc-600'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-700">Snap to Grid</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={snapToGrid}
                    onChange={(e) => setSnapToGrid(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-400"></div>
                </label>
              </div>
            </div>
          </motion.div>

          {/* Canvas */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Canvas Header */}
            <div className="bg-zinc-50 border-b border-zinc-200 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button className="p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 rounded-lg transition-all duration-300">
                  <Undo className="w-4 h-4" />
                </button>
                <button className="p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 rounded-lg transition-all duration-300">
                  <Redo className="w-4 h-4" />
                </button>
                <div className="w-px h-6 bg-zinc-300 mx-2"></div>
                <button className="p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 rounded-lg transition-all duration-300">
                  <Layers className="w-4 h-4" />
                </button>
                <button className="p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 rounded-lg transition-all duration-300">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={exportConfiguration}
                  className="flex items-center space-x-2 bg-amber-400 hover:bg-amber-500 text-zinc-900 px-4 py-2 rounded-lg font-medium transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
                <button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300">
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
              </div>
            </div>

            {/* Canvas Area */}
            <div
              ref={canvasRef}
              className="relative h-[600px] bg-zinc-50 cursor-crosshair overflow-hidden"
              onClick={handleCanvasClick}
              style={{
                backgroundImage: gridEnabled 
                  ? 'radial-gradient(circle, #d1d5db 1px, transparent 1px)'
                  : 'none',
                backgroundSize: gridEnabled ? '20px 20px' : 'auto'
              }}
            >
              {/* Elements */}
              <AnimatePresence>
                {elements.map((element, index) => (
                  <motion.div
                    key={element.id}
                    className={`absolute border-2 cursor-pointer transition-all duration-300 ${
                      selectedElement === index 
                        ? 'border-amber-400 shadow-lg' 
                        : 'border-zinc-300 hover:border-zinc-400'
                    }`}
                    style={{
                      left: element.x,
                      top: element.y,
                      width: element.width,
                      height: element.height,
                      transform: `rotate(${element.rotation}deg)`,
                      backgroundColor: element.color.replace('bg-', '#').replace('-500', '')
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={(e) => handleElementClick(e, index)}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Element Label */}
                    <div className="absolute -top-6 left-0 text-xs text-zinc-600 bg-white px-2 py-1 rounded shadow">
                      {element.type}
                    </div>
                    
                    {/* Element Controls */}
                    {selectedElement === index && (
                      <motion.div
                        className="absolute -top-12 right-0 flex space-x-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            rotateElement(index);
                          }}
                          className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                          <RotateCw className="w-3 h-3" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            duplicateElement(index);
                          }}
                          className="p-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteElement(index);
                          }}
                          className="p-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Canvas Instructions */}
              {elements.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                  <div className="text-center">
                    <Square className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium mb-2">Start designing your space</p>
                    <p className="text-sm">Select a tool and click on the canvas to add elements</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Statistics */}
        <motion.div
          className="mt-8 bg-white rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-zinc-900">{elements.length}</div>
              <div className="text-sm text-zinc-600">Elements</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-zinc-900">
                {elements.filter(e => e.type === 'wall').length}
              </div>
              <div className="text-sm text-zinc-600">Walls</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-zinc-900">
                {elements.filter(e => e.type === 'furniture').length}
              </div>
              <div className="text-sm text-zinc-600">Furniture</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-zinc-900">
                {Math.round(elements.reduce((total, el) => total + (el.width * el.height / 10000), 0))}m²
              </div>
              <div className="text-sm text-zinc-600">Total Area</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Configurator;