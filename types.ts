// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
  bucket: string
  status: string
  thumbnail?: string
  published_at?: string
}

// Service type
export interface Service extends CosmicObject {
  type: 'services'
  metadata: {
    service_name: string
    description: string
    service_icon?: {
      url: string
      imgix_url: string
    }
    pricing?: string
  }
}

// Team Member type
export interface TeamMember extends CosmicObject {
  type: 'team-members'
  metadata: {
    full_name: string
    role: string
    bio?: string
    photo?: {
      url: string
      imgix_url: string
    }
    email?: string
  }
}

// Testimonial type
export interface Testimonial extends CosmicObject {
  type: 'testimonials'
  metadata: {
    client_name: string
    company?: string
    quote: string
    client_photo?: {
      url: string
      imgix_url: string
    }
    rating?: number
  }
}

// Case Study type
export interface CaseStudy extends CosmicObject {
  type: 'case-studies'
  metadata: {
    project_name: string
    client: string
    challenge: string
    solution: string
    results?: string
    featured_image?: {
      url: string
      imgix_url: string
    }
    related_service?: Service
  }
}

// API response types
export interface CosmicResponse<T> {
  objects: T[]
  total: number
}