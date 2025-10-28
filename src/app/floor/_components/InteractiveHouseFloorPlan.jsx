"use client"
import React, { useState } from 'react';
import { Home, Bed, Bath, Car, Coffee, Users, Utensils, BookOpen, Check, X } from 'lucide-react';

const InteractiveHouseFloorPlan = () => {
  const [hoveredRoom, setHoveredRoom] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Define house rooms with coordinates and information
  const houseRooms = [
    {
      id: 'living-room',
      name: 'Living Room',
      coordinates: '60,80 280,80 280,220 60,220',
      size: '320 sq ft',
      status: 'available',
      color: '#3B82F6',
      hoverColor: '#2563EB',
      icon: <Home className="w-4 h-4" />,
      type: 'Living Space',
      features: ['Fireplace', 'Large windows', 'Hardwood floors']
    },
    {
      id: 'kitchen',
      name: 'Kitchen',
      coordinates: '300,80 480,80 480,160 300,160',
      size: '180 sq ft',
      status: 'occupied',
      color: '#10B981',
      hoverColor: '#059669',
      icon: <Utensils className="w-4 h-4" />,
      type: 'Kitchen',
      features: ['Island', 'Granite counters', 'Stainless appliances']
    },
    {
      id: 'dining-room',
      name: 'Dining Room',
      coordinates: '300,180 480,180 480,220 300,220',
      size: '120 sq ft',
      status: 'available',
      color: '#F59E0B',
      hoverColor: '#D97706',
      icon: <Users className="w-4 h-4" />,
      type: 'Dining',
      features: ['Built-in buffet', 'Chandelier', 'Bay window']
    },
    {
      id: 'master-bedroom',
      name: 'Master Bedroom',
      coordinates: '60,240 220,240 220,360 60,360',
      size: '250 sq ft',
      status: 'occupied',
      color: '#8B5CF6',
      hoverColor: '#7C3AED',
      icon: <Bed className="w-4 h-4" />,
      type: 'Bedroom',
      features: ['Walk-in closet', 'Ensuite bathroom', 'Balcony access']
    },
    {
      id: 'bedroom-2',
      name: 'Bedroom 2',
      coordinates: '240,240 380,240 380,320 240,320',
      size: '150 sq ft',
      status: 'available',
      color: '#EC4899',
      hoverColor: '#DB2777',
      icon: <Bed className="w-4 h-4" />,
      type: 'Bedroom',
      features: ['Built-in desk', 'Large closet', 'Garden view']
    },
    {
      id: 'bedroom-3',
      name: 'Bedroom 3',
      coordinates: '400,240 540,240 540,320 400,320',
      size: '140 sq ft',
      status: 'available',
      color: '#EC4899',
      hoverColor: '#DB2777',
      icon: <Bed className="w-4 h-4" />,
      type: 'Bedroom',
      features: ['Corner windows', 'Built-in shelving', 'Hardwood floors']
    },
    {
      id: 'bathroom-1',
      name: 'Master Bathroom',
      coordinates: '220,300 280,300 280,360 220,360',
      size: '80 sq ft',
      status: 'available',
      color: '#06B6D4',
      hoverColor: '#0891B2',
      icon: <Bath className="w-4 h-4" />,
      type: 'Bathroom',
      features: ['Double vanity', 'Soaking tub', 'Separate shower']
    },
    {
      id: 'bathroom-2',
      name: 'Guest Bathroom',
      coordinates: '240,320 340,320 340,360 240,360',
      size: '60 sq ft',
      status: 'available',
      color: '#06B6D4',
      hoverColor: '#0891B2',
      icon: <Bath className="w-4 h-4" />,
      type: 'Bathroom',
      features: ['Shower/tub combo', 'Vanity', 'Linen closet']
    },
    {
      id: 'office',
      name: 'Home Office',
      coordinates: '500,80 580,80 580,180 500,180',
      size: '100 sq ft',
      status: 'occupied',
      color: '#F97316',
      hoverColor: '#EA580C',
      icon: <BookOpen className="w-4 h-4" />,
      type: 'Office',
      features: ['Built-in desk', 'Bookshelves', 'Natural light']
    },
    {
      id: 'garage',
      name: 'Garage',
      coordinates: '400,380 580,380 580,460 400,460',
      size: '400 sq ft',
      status: 'available',
      color: '#6B7280',
      hoverColor: '#4B5563',
      icon: <Car className="w-4 h-4" />,
      type: 'Garage',
      features: ['2-car garage', 'Storage space', 'Electric opener']
    },
    {
      id: 'laundry',
      name: 'Laundry Room',
      coordinates: '340,340 400,340 400,380 340,380',
      size: '40 sq ft',
      status: 'available',
      color: '#84CC16',
      hoverColor: '#65A30D',
      icon: <Home className="w-4 h-4" />,
      type: 'Utility',
      features: ['Washer/dryer', 'Utility sink', 'Storage cabinets']
    }
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleRoomHover = (room) => {
    setHoveredRoom(room);
  };

  const handleRoomLeave = () => {
    setHoveredRoom(null);
  };

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  const getStatusColor = (status) => {
    return status === 'available' ? '#10B981' : '#EF4444';
  };

  const getStatusIcon = (status) => {
    return status === 'available' ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />;
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
          <h1 className="text-3xl font-bold mb-2">Interactive House Floor Plan</h1>
          <p className="text-blue-100">Hover over rooms to see details • Click for more information</p>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Floor Plan */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 relative">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Ground Floor Plan</h2>
                  <p className="text-sm text-gray-600">Total Area: 1,840 sq ft</p>
                </div>
                
                <div className="relative">
                  <svg 
                    viewBox="0 0 640 520" 
                    className="w-full h-auto border-2 border-gray-300 rounded-lg bg-white shadow-inner"
                    style={{ minHeight: '500px' }}
                    onMouseMove={handleMouseMove}
                  >
                    {/* House outline */}
                    <rect
                      x="50"
                      y="70"
                      width="540"
                      height="400"
                      fill="none"
                      stroke="#D1D5DB"
                      strokeWidth="3"
                      rx="8"
                    />
                    
                    {/* Grid pattern */}
                    <defs>
                      <pattern id="floorGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#F9FAFB" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect x="50" y="70" width="540" height="400" fill="url(#floorGrid)" />

                    {/* Room Areas */}
                    {houseRooms.map((room) => (
                      <g key={room.id}>
                        <polygon
                          points={room.coordinates}
                          fill={hoveredRoom?.id === room.id ? room.hoverColor : room.color}
                          stroke="#ffffff"
                          strokeWidth="3"
                          className="cursor-pointer transition-all duration-200 drop-shadow-sm"
                          style={{
                            filter: selectedRoom?.id === room.id ? 'brightness(1.2) drop-shadow(0 0 10px rgba(0,0,0,0.3))' : 'none',
                            opacity: hoveredRoom?.id === room.id ? 0.9 : 0.8
                          }}
                          onClick={() => handleRoomClick(room)}
                          onMouseEnter={() => handleRoomHover(room)}
                          onMouseLeave={handleRoomLeave}
                        />
                        
                        {/* Room labels */}
                        <text
                          x={room.coordinates.split(' ').reduce((acc, point) => {
                            const [x] = point.split(',');
                            return acc + parseInt(x);
                          }, 0) / room.coordinates.split(' ').length}
                          y={room.coordinates.split(' ').reduce((acc, point) => {
                            const [, y] = point.split(',');
                            return acc + parseInt(y);
                          }, 0) / room.coordinates.split(' ').length - 5}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="text-xs font-semibold fill-white pointer-events-none"
                          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                        >
                          {room.name}
                        </text>
                        
                        {/* Room size */}
                        <text
                          x={room.coordinates.split(' ').reduce((acc, point) => {
                            const [x] = point.split(',');
                            return acc + parseInt(x);
                          }, 0) / room.coordinates.split(' ').length}
                          y={room.coordinates.split(' ').reduce((acc, point) => {
                            const [, y] = point.split(',');
                            return acc + parseInt(y);
                          }, 0) / room.coordinates.split(' ').length + 8}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="text-xs fill-white pointer-events-none opacity-90"
                          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                        >
                          {room.size}
                        </text>
                      </g>
                    ))}
                  </svg>

                  {/* Hover Tooltip */}
                  {hoveredRoom && (
                    <div
                      className="absolute z-10 bg-black bg-opacity-90 text-white p-3 rounded-lg shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-full"
                      style={{
                        left: mousePosition.x,
                        top: mousePosition.y - 10
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div 
                          className="w-6 h-6 rounded flex items-center justify-center"
                          style={{ backgroundColor: hoveredRoom.color }}
                        >
                          {hoveredRoom.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{hoveredRoom.name}</p>
                          <p className="text-xs text-gray-300">{hoveredRoom.type}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between gap-4">
                          <span className="text-gray-300">Size:</span>
                          <span className="font-medium">{hoveredRoom.size}</span>
                        </div>
                        <div className="flex justify-between gap-4 items-center">
                          <span className="text-gray-300">Status:</span>
                          <div className="flex items-center gap-1">
                            <div style={{ color: getStatusColor(hoveredRoom.status) }}>
                              {getStatusIcon(hoveredRoom.status)}
                            </div>
                            <span 
                              className="font-medium capitalize"
                              style={{ color: getStatusColor(hoveredRoom.status) }}
                            >
                              {hoveredRoom.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Room Details Panel */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 sticky top-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Room Details</h2>

                {selectedRoom ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                        style={{ backgroundColor: selectedRoom.color }}
                      >
                        {selectedRoom.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{selectedRoom.name}</h3>
                        <p className="text-sm text-gray-600">{selectedRoom.type}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-1">Size</h4>
                        <p className="text-sm text-gray-600">{selectedRoom.size}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-700 mb-1">Status</h4>
                        <div className="flex items-center gap-2">
                          <div style={{ color: getStatusColor(selectedRoom.status) }}>
                            {getStatusIcon(selectedRoom.status)}
                          </div>
                          <span 
                            className="text-sm font-medium capitalize"
                            style={{ color: getStatusColor(selectedRoom.status) }}
                          >
                            {selectedRoom.status}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Features</h4>
                        <ul className="space-y-1">
                          {selectedRoom.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedRoom(null)}
                      className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Close Details
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Home className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-600 mb-2">Click on a room</p>
                    <p className="text-sm text-gray-500">Select any room to view detailed information</p>
                  </div>
                )}
              </div>

              {/* Status Legend */}
              <div className="mt-6 bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold mb-3 text-gray-800">Status Legend</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="text-green-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700">Available</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="text-red-600">
                      <X className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700">Occupied</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveHouseFloorPlan;