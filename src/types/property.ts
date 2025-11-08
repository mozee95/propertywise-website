export interface Property {
  id: string
  title: string
  description: string
  price: number
  currency: string
  location: {
    address: string
    city: string
    state: string
    zipCode: string
    coordinates?: {
      lat: number
      lng: number
    }
  }
  features: {
    bedrooms: number
    bathrooms: number
    area: number
    propertyType: 'house' | 'apartment' | 'condo' | 'townhouse' | 'commercial'
    yearBuilt?: number
    parking?: number
  }
  images: string[]
  status: 'for-sale' | 'for-rent' | 'sold' | 'rented'
  agent?: {
    id: string
    name: string
    email: string
    phone: string
    image?: string
  }
  createdAt: string
  updatedAt: string
}

export interface PropertyFilters {
  priceRange?: {
    min: number
    max: number
  }
  propertyType?: Property['features']['propertyType'][]
  bedrooms?: number
  bathrooms?: number
  location?: string
  status?: Property['status'][]
}