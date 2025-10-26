export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-light text-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-pirate">
            Ahoy, Matey! 🏴‍☠️
          </h1>
          <p className="text-2xl md:text-3xl mb-8">
            Welcome to Pirates Inc
          </p>
          <p className="text-xl md:text-2xl mb-12 text-gray-200">
            Where we chart courses to business success and hunt for treasure in the digital seas! 
            Let our experienced crew navigate yer company to profitable shores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services"
              className="bg-accent hover:bg-accent-dark text-primary font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              Explore Services
            </a>
            <a 
              href="#case-studies"
              className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0 C150,50 350,0 600,50 C850,100 1050,50 1200,0 L1200,120 L0,120 Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}