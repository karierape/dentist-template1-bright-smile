import React from 'react';
import { 
  Smile, 
  Sparkles, 
  Zap, 
  Shield, 
  Baby, 
  AlertCircle,
  CheckCircle,
  Clock,
  Award
} from 'lucide-react';

const DetailedServices = () => {
  const services = [
    {
      id: 'general',
      icon: Smile,
      title: "General Dentistry",
      subtitle: "Complete Oral Health Care",
      description: "Comprehensive dental care to maintain your oral health and prevent future problems.",
      image: "/interior3.jpg",
      treatments: [
        "Regular Dental Checkups",
        "Professional Teeth Cleaning",
        "Cavity Fillings (Composite & Amalgam)",
        "Root Canal Treatment",
        "Tooth Extractions",
        "Gum Disease Treatment",
        "Oral Cancer Screening",
        "Fluoride Treatments"
      ],
      benefits: [
        "Prevent serious dental problems",
        "Maintain optimal oral health",
        "Early detection of issues",
        "Cost-effective preventive care"
      ],
      duration: "30-90 minutes",
      price: "Starting from ₹500"
    },
    {
      id: 'cosmetic',
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      subtitle: "Transform Your Smile",
      description: "Advanced cosmetic treatments to give you the beautiful, confident smile you've always wanted.",
      image: "/interior1.jpg",
      treatments: [
        "Professional Teeth Whitening",
        "Porcelain Veneers",
        "Dental Bonding",
        "Smile Makeover",
        "Gum Contouring",
        "Tooth Reshaping",
        "Composite Fillings",
        "Crown Lengthening"
      ],
      benefits: [
        "Boost self-confidence",
        "Improve facial aesthetics",
        "Long-lasting results",
        "Natural-looking outcomes"
      ],
      duration: "1-3 hours per session",
      price: "Starting from ₹5,000"
    },
    {
      id: 'orthodontics',
      icon: Zap,
      title: "Orthodontics",
      subtitle: "Straighten Your Teeth",
      description: "Modern orthodontic solutions to align your teeth and improve your bite.",
      image: "/interior2.jpg",
      treatments: [
        "Traditional Metal Braces",
        "Ceramic Braces",
        "Invisalign Clear Aligners",
        "Lingual Braces",
        "Retainers",
        "Bite Correction",
        "Space Maintainers",
        "Early Orthodontic Treatment"
      ],
      benefits: [
        "Improved oral health",
        "Better bite function",
        "Enhanced appearance",
        "Easier teeth cleaning"
      ],
      duration: "12-24 months",
      price: "Starting from ₹25,000"
    },
    {
      id: 'implants',
      icon: Shield,
      title: "Dental Implants",
      subtitle: "Permanent Tooth Replacement",
      description: "State-of-the-art dental implants that look, feel, and function like natural teeth.",
      image: "/interior3.jpg",
      treatments: [
        "Single Tooth Implants",
        "Multiple Tooth Implants",
        "All-on-4 Implants",
        "All-on-6 Implants",
        "Implant-Supported Dentures",
        "Bone Grafting",
        "Sinus Lift",
        "Immediate Load Implants"
      ],
      benefits: [
        "Permanent solution",
        "Natural appearance",
        "Preserve jawbone",
        "No impact on adjacent teeth"
      ],
      duration: "3-6 months",
      price: "Starting from ₹35,000"
    },
    {
      id: 'pediatric',
      icon: Baby,
      title: "Pediatric Dentistry",
      subtitle: "Gentle Care for Kids",
      description: "Specialized dental care for children in a fun, comfortable environment.",
      image: "/interior1.jpg",
      treatments: [
        "Children's Dental Checkups",
        "Pediatric Cleanings",
        "Fluoride Treatments",
        "Dental Sealants",
        "Cavity Fillings",
        "Space Maintainers",
        "Habit Breaking Appliances",
        "Emergency Pediatric Care"
      ],
      benefits: [
        "Build positive dental habits",
        "Prevent childhood cavities",
        "Monitor proper development",
        "Comfortable, fun experience"
      ],
      duration: "30-60 minutes",
      price: "Starting from ₹800"
    },
    {
      id: 'emergency',
      icon: AlertCircle,
      title: "Emergency Dental Care",
      subtitle: "24/7 Urgent Care",
      description: "Immediate dental care for urgent situations and dental emergencies.",
      image: "/interior2.jpg",
      treatments: [
        "Severe Toothache Relief",
        "Broken/Chipped Tooth Repair",
        "Knocked-Out Tooth Treatment",
        "Lost Filling/Crown Replacement",
        "Abscess Treatment",
        "Soft Tissue Injuries",
        "Orthodontic Emergencies",
        "Post-Surgery Complications"
      ],
      benefits: [
        "Immediate pain relief",
        "Prevent further damage",
        "24/7 availability",
        "Quick treatment"
      ],
      duration: "30-120 minutes",
      price: "Starting from ₹1,500"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-blue-600 font-medium mb-4">
            <Award className="w-5 h-5" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Dental Services
          </h2>
          <p className="text-xl text-gray-600">
            From routine care to complex procedures, we offer complete dental solutions 
            tailored to your individual needs.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-blue-600 font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Treatment List */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Treatments Include:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.treatments.map((treatment, treatmentIndex) => (
                        <div key={treatmentIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{treatment}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="font-medium text-gray-900">{service.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="text-sm text-gray-500">Price</div>
                        <div className="font-medium text-gray-900">{service.price}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Book Consultation
                    </button>
                    <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${!isEven ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule your consultation today and take the first step towards optimal oral health 
              and a beautiful smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Book Free Consultation
              </button>
              <a
                href="tel:+919876543210"
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                Call: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;