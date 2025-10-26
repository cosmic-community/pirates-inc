import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const icon = service.metadata?.service_icon

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
      {icon && (
        <div className="mb-6">
          <img
            src={`${icon.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={service.metadata.service_name}
            width="60"
            height="60"
            className="rounded-lg"
          />
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-primary mb-4">
        {service.metadata.service_name}
      </h3>
      
      <div 
        className="text-gray-600 mb-6 prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: service.metadata.description }}
      />
      
      {service.metadata?.pricing && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-lg font-bold text-accent">
            {service.metadata.pricing}
          </p>
        </div>
      )}
    </div>
  )
}