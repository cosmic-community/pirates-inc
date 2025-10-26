// app/case-studies/[slug]/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          🏴‍☠️ Case Study Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Arrr! This case study seems to have sailed away to Davy Jones' locker.
        </p>
        <Link 
          href="/#case-studies"
          className="inline-block bg-accent hover:bg-accent-dark text-primary font-bold py-3 px-8 rounded-lg transition-colors duration-200"
        >
          View All Case Studies
        </Link>
      </div>
    </div>
  )
}