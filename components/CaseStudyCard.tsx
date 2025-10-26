import Link from 'next/link'
import { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const image = caseStudy.metadata?.featured_image
  const relatedService = caseStudy.metadata?.related_service

  return (
    <Link href={`/case-studies/${caseStudy.slug}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 cursor-pointer h-full">
        {image && (
          <img
            src={`${image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={caseStudy.metadata.project_name}
            width="400"
            height="200"
            className="w-full h-48 object-cover"
          />
        )}
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-primary mb-2">
            {caseStudy.metadata.project_name}
          </h3>
          
          <p className="text-gray-600 mb-4">
            Client: <span className="font-semibold">{caseStudy.metadata.client}</span>
          </p>
          
          <div 
            className="text-gray-700 mb-4 prose prose-sm max-w-none line-clamp-3"
            dangerouslySetInnerHTML={{ __html: caseStudy.metadata.challenge }}
          />
          
          {relatedService && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Related Service: <span className="text-accent font-semibold">{relatedService.title}</span>
              </p>
            </div>
          )}
          
          <div className="mt-4">
            <span className="text-primary font-semibold hover:text-accent transition-colors">
              Read full story →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}