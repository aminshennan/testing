import React from 'react';
import Image from 'next/image';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform has transformed how we analyze our data. The insights we've gained have been invaluable.",
      author: "Sarah Johnson",
      role: "Data Analyst at TechCorp",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      quote: "The real-time analytics capabilities have helped us make faster, more informed decisions.",
      author: "Michael Chen",
      role: "CTO at StartupX",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      quote: "We've seen a 40% increase in efficiency since implementing this solution.",
      author: "Emily Rodriguez",
      role: "Operations Manager at Global Inc",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by industry leaders worldwide</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.author}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 