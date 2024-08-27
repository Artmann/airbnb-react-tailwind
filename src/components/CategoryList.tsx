import { motion } from 'framer-motion'
import {
  Apple,
  Droplet,
  Eye,
  Framer,
  Grape,
  House,
  LoaderPinwheel,
  MountainSnow,
  Rat,
  Shell,
  Tractor,
  Waves
} from 'lucide-react'
import { ReactElement, ReactNode } from 'react'
import { Link } from 'react-router-dom'

export interface CategoryListProps {}

export function CategoryList({}: CategoryListProps): ReactElement {
  return (
    <div
      className="w-full flex gap-4 overflow-x-auto text-xs font-medium px-4"
      style={{ scrollbarWidth: 'none' }}
    >
      <CategoryItem>
        <div>
          <Shell
            className="size-6"
            strokeWidth={1}
          />
        </div>
        <CategoryName>Beach</CategoryName>
      </CategoryItem>
      <CategoryItem isActive={true}>
        <div>
          <MountainSnow
            className="size-6"
            strokeWidth={1}
          />
        </div>
        <CategoryName>Islands</CategoryName>
      </CategoryItem>
      <CategoryItem>
        <div>
          <Grape
            className="size-6"
            strokeWidth={1}
          />
        </div>
        <CategoryName>Vineyards</CategoryName>
      </CategoryItem>
      <CategoryItem>
        <div>
          <Framer
            className="size-6"
            strokeWidth={1}
          />
        </div>
        <CategoryName>Design</CategoryName>
      </CategoryItem>
      <CategoryItem>
        <div>
          <Tractor
            className="size-6"
            strokeWidth={1}
          />
        </div>
        <CategoryName>Farms</CategoryName>
      </CategoryItem>
      <CategoryItem>
        <div>
          <Apple
            className="size-6"
            strokeWidth={1}
          />
        </div>
        <CategoryName>Countryside</CategoryName>
      </CategoryItem>
      <CategoryItem>
        <div>
          <Waves
            className="size-6"
            strokeWidth={1}
          />
        </div>
        <CategoryName>Amazing pools</CategoryName>
      </CategoryItem>
      <CategoryItem>
        <div>
          <LoaderPinwheel
            className="size-6"
            strokeWidth={1}
          />
        </div>
        <CategoryName>Beachfront</CategoryName>
      </CategoryItem>
      <CategoryItem>
        <div>
          <House
            className="size-6"
            strokeWidth={1}
          />
        </div>
        <CategoryName>Cabins</CategoryName>
      </CategoryItem>
      <CategoryItem>
        <div>
          <Eye
            className="size-6"
            strokeWidth={1}
          />
        </div>
        <CategoryName>Amazing views</CategoryName>
      </CategoryItem>
      <CategoryItem>
        <div>
          <Rat
            className="size-6"
            strokeWidth={1}
          />
        </div>
        <CategoryName>Tiny homes</CategoryName>
      </CategoryItem>
      <CategoryItem>
        <div>
          <Droplet
            className="size-6"
            strokeWidth={1}
          />
        </div>
        <CategoryName>Lake</CategoryName>
      </CategoryItem>
    </div>
  )
}

interface CategoryItemProps {
  children: ReactNode
  isActive?: boolean
}

function CategoryItem({
  children,
  isActive = false
}: CategoryItemProps): ReactElement {
  return (
    <Link
      className={`
        relative
        flex flex-col items-center gap-1
        min-w-16 box-border
        py-4
        text-center  
        ${isActive ? 'text-gray-700' : 'text-gray-600'}
      `}
      to={`?`}
    >
      {children}

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
        layoutId="underline"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
      />
    </Link>
  )
}

interface CategoryNameProps {
  children: ReactNode
}

function CategoryName({ children }: CategoryNameProps): ReactElement {
  return <div className="whitespace-nowrap">{children}</div>
}
