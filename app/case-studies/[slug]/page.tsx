// app/case-studies/[slug]/page.tsx
import { getCaseStudyBySlug, getCaseStudies } from '@/lib/cosmic'
import { CaseStudy } from '@/types'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 60

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies()
  
  return caseStudies.map((caseStudy: CaseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${caseStudy.metadata.project_name} - Pirates Inc`,
    description: `Case study: ${caseStudy.metadata.client}`,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  const study = caseStudy as CaseStudy
  const image = study.metadata?.featured_image
  const relatedService = study.metadata?.related_service

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <Link 
          href="/#case-studies"
          className="inline-flex items-center text-primary hover:text-accent transition-colors mb-8"
        >
          ← Back to Case Studies
        </Link>

        {image && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={`${image.imgix_url}?w=1600&h=600&fit=crop&auto=format,compress`}
              alt={study.metadata.project_name}
              width="800"
              height="300"
              className="w-full h-auto"
            />
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {study.metadata.project_name}
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Client: <span className="font-bold text-primary">{study.metadata.client}</span>
          </p>

          {relatedService && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-sm text-gray-600 mb-2">Related Service</p>
              <p className="text-lg font-bold text-accent">{relatedService.title}</p>
            </div>
          )}

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                ⚓ The Challenge
              </h2>
              <div 
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: study.metadata.challenge }}
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                🎯 Our Solution
              </h2>
              <div 
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: study.metadata.solution }}
              />
            </div>

            {study.metadata?.results && (
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  🏴‍☠️ The Results
                </h2>
                <div 
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: study.metadata.results }}
                />
              </div>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-primary text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready for Yer Own Success Story?
              </h3>
              <p className="text-lg mb-6">
                Let's chart a course for yer business success together!
              </p>
              <a 
                href="/#contact"
                className="inline-block bg-accent hover:bg-accent-dark text-primary font-bold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}