import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const photo = testimonial.metadata?.client_photo
  const rating = testimonial.metadata?.rating || 5

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating ? 'text-yellow-400' : 'text-gray-300'
      return (
        <svg
          key={index}
          className={`w-5 h-5 ${filled}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            clipRule="evenodd"
          />
        </svg>
      )
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
      <div className="flex mb-4">
        {renderStars()}
      </div>
      
      <p className="text-gray-700 text-lg mb-6 italic">
        "{testimonial.metadata.quote}"
      </p>
      
      <div className="flex items-center">
        {photo && (
          <img
            src={`${photo.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
            alt={testimonial.metadata.client_name}
            width="64"
            height="64"
            className="rounded-full mr-4"
          />
        )}
        
        <div>
          <p className="font-bold text-primary">
            {testimonial.metadata.client_name}
          </p>
          {testimonial.metadata?.company && (
            <p className="text-gray-600">
              {testimonial.metadata.company}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}