import { ReactElement, useState } from 'react'

import { ListingCard, ListingCardSkeleton } from './ListingCard'
import { listings } from '../listings'

export function ListingPage(): ReactElement {
  const [hasLoadedListings, setHasLoadedListings] = useState(true)

  return (
    <>
      <div className="flex-shrink-0 w-full">Search</div>
      <div className="flex-shrink-0 w-full border-b border-slate-100">
        Categories
      </div>
      <div className="flex-1 min-h-0 w-full overflow-y-auto">
        <div className="p-4 pb-8 box-border space-y-6">
          {hasLoadedListings ? (
            listings.map((listing) => (
              <ListingCard
                city="Miami"
                listing={listing}
              />
            ))
          ) : (
            <>
              <ListingCardSkeleton />
              <ListingCardSkeleton />
              <ListingCardSkeleton />
            </>
          )}
        </div>
      </div>
    </>
  )
}
