import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      image: "/happy-patient1.jpg",
      rating: 5,
      text: "Dr. Radhika and her team transformed my smile completely! The cosmetic dentistry work was painless and the results exceeded my expectations. I can't stop smiling now!",
      treatment: "Cosmetic Dentistry"
    },
    {
      name: "Arjun Patel",
      image: "/happy-patient3.jpg",
      rating: 5,
      text: "I was terrified of dental procedures, but Dr. Mehra made me feel so comfortable. The dental implant procedure was smooth and I'm amazed by how natural it looks and feels.",
      treatment: "Dental Implants"
    },
    {
      name: "Sneha Gupta",
      image: "/happy-patient2.png",
      rating: 5,
      text: "Best dental clinic in Gurugram! The staff is incredibly professional and caring. My Invisalign treatment gave me the perfect smile I always wanted.",
      treatment: "Invisalign Treatment"
    },
    {
      name: "Kavya Singh",
      image: "/happy-patient4.jpg",
      rating: 5,
      text: "The clinic is so clean and modern. Dr. Radhika explained everything clearly and the root canal was completely painless. Highly recommend BrightSmile!",
      treatment: "Root Canal Treatment"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-blue-600 font-medium mb-4">
            <Star className="w-5 h-5" />
            <span>Patient Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what our happy patients have to say about their experience at BrightSmile Dental Studio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              {/* Patient Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600">{testimonial.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Happy Patients</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Emergency Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;