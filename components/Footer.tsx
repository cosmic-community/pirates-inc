export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">⚓</span>
              Pirates Inc
            </h3>
            <p className="text-gray-300">
              Sailin' businesses to success since the dawn of digital commerce. 
              We be the crew ye need for yer next adventure!
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-300 hover:text-accent transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-accent transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-accent transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-gray-300 mb-2">
              📧 captain@pirates-inc.com
            </p>
            <p className="text-gray-300 mb-2">
              📞 1-800-PIRATE-1
            </p>
            <p className="text-gray-300">
              📍 Somewhere on the Seven Seas
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© {currentYear} Pirates Inc. All rights reserved. Arrr! 🏴‍☠️</p>
        </div>
      </div>
    </footer>
  )
}