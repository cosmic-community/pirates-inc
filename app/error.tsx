'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="text-4xl font-bold text-primary mb-4">
          🏴‍☠️ Arrr! Something Went Wrong
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Looks like we've hit rough seas! Don't worry, we'll get ye back on course.
        </p>
        <button
          onClick={reset}
          className="bg-accent hover:bg-accent-dark text-primary font-bold py-3 px-8 rounded-lg transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}