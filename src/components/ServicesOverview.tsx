import React from 'react';
import { 
  Smile, 
  Sparkles, 
  Zap, 
  Shield, 
  Baby, 
  AlertCircle,
  ArrowRight 
} from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Smile,
      title: "General Dentistry",
      description: "Comprehensive oral health care including cleanings, fillings, and preventive treatments.",
      features: ["Regular Checkups", "Dental Cleanings", "Cavity Fillings", "Root Canal Treatment"]
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with advanced cosmetic procedures for a confident, beautiful look.",
      features: ["Teeth Whitening", "Veneers", "Smile Makeover", "Bonding"]
    },
    {
      icon: Zap,
      title: "Orthodontics",
      description: "Straighten your teeth with traditional braces or modern Invisalign clear aligners.",
      features: ["Metal Braces", "Ceramic Braces", "Invisalign", "Retainers"]
    },
    {
      icon: Shield,
      title: "Dental Implants",
      description: "Permanent solution for missing teeth with natural-looking, durable implants.",
      features: ["Single Implants", "Multiple Implants", "All-on-4", "Implant Crowns"]
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description: "Gentle, specialized dental care for children in a fun, comfortable environment.",
      features: ["Kids Cleanings", "Fluoride Treatment", "Sealants", "Early Orthodontics"]
    },
    {
      icon: AlertCircle,
      title: "Emergency Care",
      description: "24/7 emergency dental services for urgent dental problems and pain relief.",
      features: ["Toothache Relief", "Broken Tooth", "Dental Trauma", "Same-Day Treatment"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-blue-600 font-medium mb-4">
            <Shield className="w-5 h-5" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Dental Care for Every Need
          </h2>
          <p className="text-xl text-gray-600">
            From routine cleanings to complex procedures, we offer a full range of dental services 
            using the latest technology and techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Radhika Mehra and get a personalized treatment plan 
              tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Free Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;