import { motion } from 'framer-motion'
import { useEffect, useRef, useState, type ReactElement } from 'react'

interface Image {
  alt: string
  src: string
}

interface CardGalleryProps {
  images: Image[]
}

export function CardGallery({ images }: CardGalleryProps): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null)

  const [imageWidth, setImageWidth] = useState(351)

  const [imageIndex, setImageIndex] = useState(0)

  const [isDragging, setIsDragging] = useState(false)
  const [draggedPixels, setDraggedPixels] = useState(0)
  const [containerX, setContainerX] = useState(0)
  const [dragStartX, setDragStartX] = useState(0)

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    const rect = containerRef.current.getBoundingClientRect()

    setImageWidth(rect.width)

    setContainerX(rect.x)
  }, [])

  const handleOnTouchMove = (e: React.TouchEvent) => {
    const currentX = e.touches[0].clientX - containerX

    const diff = clamp(currentX - dragStartX, -imageWidth, imageWidth)

    setDraggedPixels(diff)
  }

  const handleOnTouchEnd = (e: React.TouchEvent) => {
    const dragThreshold = 0.25

    if (draggedPixels > imageWidth * dragThreshold) {
      setImageIndex(clamp(imageIndex - 1, 0, images.length - 1))
    }

    if (draggedPixels < -(imageWidth * dragThreshold)) {
      setImageIndex(clamp(imageIndex + 1, 0, images.length - 1))
    }

    setIsDragging(false)
    setDraggedPixels(0)
  }

  const handleOnTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setDragStartX(e.touches[0].clientX - containerX)
  }

  return (
    <div
      ref={containerRef}
      className="w-full aspect-square rounded-lg overflow-hidden relative bg-gray-100"
      onTouchEnd={handleOnTouchEnd}
      onTouchMove={handleOnTouchMove}
      onTouchStart={handleOnTouchStart}
    >
      {images.map((image, index) => {
        const currentImageOffset = imageIndex * imageWidth
        const x = index * imageWidth - currentImageOffset + draggedPixels

        const isFirstImage = index === 0
        const isLastImage = index === images.length - 1

        // You shouldn't be able to swipe the first or last image from the left resp. right edge.
        const left = isFirstImage
          ? Math.min(0, x)
          : isLastImage
          ? Math.max(0, x)
          : x

        const styles = {
          left,
          top: 0
        }

        return (
          <motion.img
            alt={image.alt}
            className="absolute block object-cover object-center w-full h-full"
            key={index}
            loading="lazy"
            src={image.src}
            initial={{ left: x }}
            animate={isDragging ? undefined : styles}
            style={isDragging ? styles : undefined}
          />
        )
      })}
    </div>
  )
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}
