import { Property } from '@/types/property'

export const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    description: 'Beautiful modern villa with stunning ocean views and premium finishes throughout.',
    price: 850000,
    currency: 'USD',
    location: {
      address: '123 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      coordinates: {
        lat: 25.7617,
        lng: -80.1918
      }
    },
    features: {
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      propertyType: 'house',
      yearBuilt: 2020,
      parking: 2
    },
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop'
    ],
    status: 'for-sale',
    agent: {
      id: 'agent1',
      name: 'Sarah Johnson',
      email: 'sarah@propertywise.com',
      phone: '+1 (555) 123-4567',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-01-15T08:00:00Z'
  },
  {
    id: '2',
    title: 'Downtown Penthouse',
    description: 'Luxury penthouse in the heart of downtown with panoramic city views.',
    price: 2500,
    currency: 'USD',
    location: {
      address: '456 City Center Blvd',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      coordinates: {
        lat: 40.7589,
        lng: -73.9851
      }
    },
    features: {
      bedrooms: 2,
      bathrooms: 2,
      area: 1800,
      propertyType: 'apartment',
      yearBuilt: 2018,
      parking: 1
    },
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&h=600&fit=crop'
    ],
    status: 'for-rent',
    agent: {
      id: 'agent2',
      name: 'Michael Chen',
      email: 'michael@propertywise.com',
      phone: '+1 (555) 987-6543',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    createdAt: '2024-01-10T10:30:00Z',
    updatedAt: '2024-01-10T10:30:00Z'
  }
]