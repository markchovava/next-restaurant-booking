"use client"
import { useNavStore } from "@/_store/useNavStore"
import FirstFloorPlan from "@/app/_components/FirstFloorPlan"
import GroundFloorPlan from "@/app/_components/GroundFloorPlan"
import { useMemo, useState, useRef, useEffect } from "react"

export default function FloorTablePlanSection() {
    const { bottomNavData } = useNavStore()
    const [scale, setScale] = useState(1)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
    const containerRef = useRef<HTMLDivElement>(null)
    
    const currentFloor = useMemo(() => {
        const activeFloor = bottomNavData.find(item => item.isClicked)
        if (!activeFloor) return <GroundFloorPlan />
        return activeFloor === bottomNavData[0] 
          ? <GroundFloorPlan /> 
          : <FirstFloorPlan />;
    }, [bottomNavData])

    // Handle wheel zoom
    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault()
        const delta = e.deltaY * -0.001
        const newScale = Math.min(Math.max(0.5, scale + delta), 3)
        setScale(newScale)
    }

    // Handle touch pinch zoom
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        let initialDistance = 0
        let initialScale = 1

        const getTouchDistance = (touches: TouchList) => {
            const dx = touches[0].clientX - touches[1].clientX
            const dy = touches[0].clientY - touches[1].clientY
            return Math.sqrt(dx * dx + dy * dy)
        }

        const handleTouchStart = (e: TouchEvent) => {
            if (e.touches.length === 2) {
                e.preventDefault()
                initialDistance = getTouchDistance(e.touches)
                initialScale = scale
            }
        }

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length === 2) {
                e.preventDefault()
                const currentDistance = getTouchDistance(e.touches)
                const newScale = Math.min(Math.max(0.5, initialScale * (currentDistance / initialDistance)), 3)
                setScale(newScale)
            }
        }

        container.addEventListener('touchstart', handleTouchStart, { passive: false })
        container.addEventListener('touchmove', handleTouchMove, { passive: false })

        return () => {
            container.removeEventListener('touchstart', handleTouchStart)
            container.removeEventListener('touchmove', handleTouchMove)
        }
    }, [scale])

    // Handle mouse drag
    const handleMouseDown = (e: React.MouseEvent) => {
        if (scale > 1) {
            setIsDragging(true)
            setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
        }
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            })
        }
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    // Handle touch drag
    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length === 1 && scale > 1) {
            setIsDragging(true)
            setDragStart({ 
                x: e.touches[0].clientX - position.x, 
                y: e.touches[0].clientY - position.y 
            })
        }
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (isDragging && e.touches.length === 1) {
            setPosition({
                x: e.touches[0].clientX - dragStart.x,
                y: e.touches[0].clientY - dragStart.y
            })
        }
    }

    const handleTouchEnd = () => {
        setIsDragging(false)
    }

    return (
        <section className="mx-auto w-full h-full overflow-hidden relative">
            <div
                ref={containerRef}
                className="w-full h-full"
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                    cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                }}
            >
                <div
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                        transformOrigin: 'center center',
                        transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    {currentFloor}
                </div>
            </div>
        </section>
    )
}