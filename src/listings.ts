export interface Listing {
  id: number,
  beds?: string,
  imageUrls: string[],
  isFavorite?: boolean,
  name: string
  numberOfReviews: number
  pricePerNight: number
  rating: number
  type: string
}

export const listings: Listing[] = [
  {
    id: 49706391,
    beds: '1 bed',
    imageUrls: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDk3MDYzOTE%3D/original/f8b1a533-9dc2-42df-a894-c724b3593683.png?im_w=1200',
      'https://a0.muscache.com/im/pictures/miso/Hosting-49706391/original/ef58eb02-3e3b-4301-bdb8-e3f2ba12b818.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-49706391/original/d400068d-f939-475b-a466-454606820441.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-49706391/original/37e8ecb1-5996-4702-ab7b-ae40e53d96f9.jpeg?im_w=720',
    ],
    isFavorite: true,
    name: 'Chic Private Room in South Beach',
    numberOfReviews: 939,
    pricePerNight: 102,
    rating: 4.91,
    type: 'Apartment'
  },
  {
    id: 1081169725603624894,
    beds: '1 bed',
    imageUrls: [
      'https://a0.muscache.com/im/pictures/miso/Hosting-1081169725603624894/original/b46bb107-fc52-46c0-ad1c-a013278eb40f.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/miso/Hosting-1081169725603624894/original/d53ca9f7-d989-4754-8af1-1cb68c74f8b9.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-1081169725603624894/original/ea89763d-ca81-4861-9d40-2f4ce9a239d6.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-1081169725603624894/original/7f5e54c0-bee0-4bc2-b860-95af8b953e09.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-1081169725603624894/original/0f8b8bf4-6863-4d38-9720-0aaf1f08eae1.jpeg?im_w=720',
    ],
    isFavorite: true,
    name: 'Luxury Suite in Spanish Way',
    numberOfReviews: 470,
    pricePerNight: 90,
    rating: 4.9,
    type: 'Apartment'
  }
]
