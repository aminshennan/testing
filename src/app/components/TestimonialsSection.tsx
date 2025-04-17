interface Testimonial {
  name: string
  role: string
  content: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Product Designer',
    content: 'This platform has completely transformed how we design and develop our products. The components are beautiful and easy to use.',
    avatar: '👩',
  },
  {
    name: 'Michael Chen',
    role: 'Frontend Developer',
    content: 'As a developer, I appreciate the clean code and TypeScript support. It makes my job so much easier!',
    avatar: '👨',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Manager',
    content: 'The landing pages we create with these tools have significantly improved our conversion rates.',
    avatar: '👩',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-300">
            Don&apos;t just take our word for it - hear from our users
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 