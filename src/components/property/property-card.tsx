'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Property } from '@/types/property'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, MapPin, Bed, Bath, Square, Phone, Mail } from 'lucide-react'

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const statusColors = {
    'for-sale': 'bg-green-100 text-green-800',
    'for-rent': 'bg-blue-100 text-blue-800',
    'sold': 'bg-gray-100 text-gray-800',
    'rented': 'bg-purple-100 text-purple-800',
  }

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <Image
          src={property.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop'}
          alt={property.title}
          width={400}
          height={300}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[property.status]}`}>
            {property.status.replace('-', ' ').toUpperCase()}
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg leading-tight mb-1">{property.title}</h3>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.location.city}, {property.location.state}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              {formatPrice(property.price, property.currency)}
              {property.status === 'for-rent' && <span className="text-sm font-normal">/month</span>}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{property.features.bedrooms} bed</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.features.bathrooms} bath</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{property.features.area.toLocaleString()} sqft</span>
          </div>
        </div>

        {property.agent && (
          <div className="flex items-center justify-between pt-3 border-t">
            <div className="flex items-center">
              <Image
                src={property.agent.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'}
                alt={property.agent.name}
                width={32}
                height={32}
                className="rounded-full mr-2"
              />
              <div>
                <p className="font-medium text-sm">{property.agent.name}</p>
                <p className="text-xs text-muted-foreground">Agent</p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Phone className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Mail className="h-3 w-3" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link href={`/properties/${property.id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}