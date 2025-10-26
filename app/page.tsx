import { getServices, getTeamMembers, getTestimonials, getCaseStudies } from '@/lib/cosmic'
import { Service, TeamMember, Testimonial, CaseStudy } from '@/types'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TeamCard from '@/components/TeamCard'
import TestimonialCard from '@/components/TestimonialCard'
import CaseStudyCard from '@/components/CaseStudyCard'

export const revalidate = 60

export default async function HomePage() {
  const [services, team, testimonials, caseStudies] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
    getCaseStudies(),
  ])

  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              ⚓ Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ahoy! Here be the finest services to help yer business sail to success!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service: Service) => (
              <ServiceCard key={service.id} service={service as Service} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              🏴‍☠️ Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tales of our most legendary voyages and treasure hunts!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((caseStudy: CaseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy as CaseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              👥 Meet the Crew
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our band of seasoned sailors ready to navigate yer business to success!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member: TeamMember) => (
              <TeamCard key={member.id} member={member as TeamMember} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              💬 What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from the captains who've sailed with us!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial: Testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial as Testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Set Sail?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's chart a course for yer business success! Contact us today and let's start this voyage together.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-accent hover:bg-accent-dark text-primary font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  )
}