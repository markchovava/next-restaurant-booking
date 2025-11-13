import { useState, useRef, useEffect, ReactNode, MouseEvent, TouchEvent, WheelEvent } from 'react';

interface ZoomableFloorPlanProps {
  children: ReactNode;
}

interface Position {
  x: number;
  y: number;
}

export default function ZoomableFloorPlan({ children }: ZoomableFloorPlanProps) {
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const MIN_SCALE = 0.5;
  const MAX_SCALE = 3;
  const ZOOM_SPEED = 0.1;

  // Handle wheel zoom
  const handleWheel = (e: globalThis.WheelEvent): void => {
    e.preventDefault();
    
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const delta = e.deltaY > 0 ? -ZOOM_SPEED : ZOOM_SPEED;
    const newScale = Math.min(Math.max(scale + delta, MIN_SCALE), MAX_SCALE);
    
    // Zoom towards mouse position
    const scaleChange = newScale - scale;
    const newX = position.x - (mouseX - position.x) * (scaleChange / scale);
    const newY = position.y - (mouseY - position.y) * (scaleChange / scale);
    
    setScale(newScale);
    setPosition({ x: newX, y: newY });
  };

  // Handle mouse drag
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.button === 0) { // Left click only
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
  };

  // Handle touch zoom (pinch)
  const [lastTouchDistance, setLastTouchDistance] = useState<number | null>(null);

  const getTouchDistance = (touches: TouchList): number => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>): void => {
    if (e.touches.length === 2) {
      e.preventDefault();
      setLastTouchDistance(getTouchDistance(e.touches));
    } else if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      });
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>): void => {
    if (e.touches.length === 2 && lastTouchDistance) {
      e.preventDefault();
      const currentDistance = getTouchDistance(e.touches);
      const delta = (currentDistance - lastTouchDistance) * 0.01;
      const newScale = Math.min(Math.max(scale + delta, MIN_SCALE), MAX_SCALE);
      
      setScale(newScale);
      setLastTouchDistance(currentDistance);
    } else if (e.touches.length === 1 && isDragging) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    }
  };

  const handleTouchEnd = (): void => {
    setLastTouchDistance(null);
    setIsDragging(false);
  };

  // Reset zoom
  const handleReset = (): void => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Zoom buttons
  const handleZoomIn = (): void => {
    const newScale = Math.min(scale + ZOOM_SPEED * 2, MAX_SCALE);
    setScale(newScale);
  };

  const handleZoomOut = (): void => {
    const newScale = Math.max(scale - ZOOM_SPEED * 2, MIN_SCALE);
    setScale(newScale);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add event listeners
    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [scale, position]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          className="bg-white hover:bg-gray-100 text-gray-800 font-bold p-2 rounded shadow-lg transition-colors"
          title="Zoom In"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <button
          onClick={handleZoomOut}
          className="bg-white hover:bg-gray-100 text-gray-800 font-bold p-2 rounded shadow-lg transition-colors"
          title="Zoom Out"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        <button
          onClick={handleReset}
          className="bg-white hover:bg-gray-100 text-gray-800 font-bold p-2 rounded shadow-lg transition-colors"
          title="Reset Zoom"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {/* Zoom Level Indicator */}
      <div className="absolute bottom-4 right-4 z-10 bg-white px-3 py-1 rounded shadow-lg text-sm font-medium">
        {Math.round(scale * 100)}%
      </div>

      {/* Zoomable Container */}
      <div
        ref={containerRef}
        className="w-full h-full overflow-hidden"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: '0 0',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            width: '100%',
            height: '100%'
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}