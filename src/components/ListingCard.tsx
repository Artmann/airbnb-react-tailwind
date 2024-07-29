import { Star } from 'lucide-react'
import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import { CardGallery } from './CardGallery'
import { Listing } from '../listings'

interface ListingCardProps {
  city: string
  listing: Listing
}

export function ListingCard({ city, listing }: ListingCardProps): ReactElement {
  return (
    <Link
      className={`
        block
        w-full
        space-y-3
      `}
      to={`/rooms/${listing.id}`}
    >
      <CardGallery
        images={listing.imageUrls.map((src) => ({
          alt: listing.name,
          src
        }))}
      />

      <div className="space-y-1 text-[15px]">
        <div>
          <div className="font-medium flex">
            <div className="flex-1">
              {listing.type} in {city}
            </div>
            <div className="flex-shrink-0 text-right flex items-center gap-1">
              <Star
                color="black"
                fill="black"
                size={12}
              />
              {listing.rating} ({listing.numberOfReviews})
            </div>
          </div>
          <div className="text-gray-500 truncate">{listing.name}</div>
          {listing.beds && <div className="text-gray-500">{listing.beds}</div>}
        </div>
        <div>
          <span className="font-medium">${listing.pricePerNight}</span> night
        </div>
      </div>
    </Link>
  )
}

export function ListingCardSkeleton(): ReactElement {
  return (
    <div className="space-y-2">
      <div className="w-full aspect-square rounded-lg bg-gray-100"></div>
      <div className="space-y-1">
        <div className="flex">
          <div className="flex-1">
            <div className="w-48 h-4 rounded-sm bg-gray-100" />
          </div>
          <div className="w-12 h-4 rounded-sm bg-gray-100" />
        </div>
        <div className="w-36 h-4 rounded-sm bg-gray-100" />
        <div className="w-20 h-4 rounded-sm bg-gray-100" />
      </div>
    </div>
  )
}
