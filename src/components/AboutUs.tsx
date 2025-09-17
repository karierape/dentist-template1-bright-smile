import React from 'react';
import { Award, Users, Heart, Shield, Clock, Star, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every treatment plan is tailored to your unique needs and comfort level."
    },
    {
      icon: Shield,
      title: "Highest Safety Standards",
      description: "We maintain strict sterilization protocols and use the latest safety equipment."
    },
    {
      icon: Star,
      title: "Excellence in Treatment",
      description: "Our commitment to quality ensures the best possible outcomes for every patient."
    },
    {
      icon: Clock,
      title: "Convenient Scheduling",
      description: "Flexible appointment times including evenings and weekends for your convenience."
    }
  ];

  const achievements = [
    "5000+ Successful Treatments",
    "4.9/5 Average Patient Rating",
    "10+ Years of Excellence",
    "Advanced Technology Integration",
    "Certified Dental Professionals",
    "24/7 Emergency Care Available"
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-blue-600 font-medium mb-4">
            <Heart className="w-5 h-5" />
            <span>About BrightSmile Dental Studio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Trusted Dental Care Partner in Gurugram
          </h2>
          <p className="text-xl text-gray-600">
            For over a decade, we've been transforming smiles and building lasting relationships 
            with our patients through exceptional dental care and genuine compassion.
          </p>
        </div>

        {/* Mission & Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At BrightSmile Dental Studio, our mission is to provide comprehensive, compassionate 
              dental care that not only treats dental issues but also enhances our patients' 
              overall quality of life. We believe that a healthy, beautiful smile is the 
              foundation of confidence and well-being.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2014 by Dr. Radhika Mehra, our clinic has grown from a small practice 
              to one of Gurugram's most trusted dental care centers. We combine cutting-edge 
              technology with time-tested techniques to deliver exceptional results in a 
              comfortable, welcoming environment.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="/interior1.jpg"
              alt="Modern dental clinic interior"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years Serving Gurugram</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology & Equipment */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <img
              src="/interior2.jpg"
              alt="State-of-the-art dental equipment"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">State-of-the-Art Technology</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We invest in the latest dental technology to ensure our patients receive the most 
              advanced, comfortable, and effective treatments available. Our modern equipment 
              allows for precise diagnoses, minimally invasive procedures, and faster healing times.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced team of dental professionals is dedicated to providing you with 
              the highest quality care in a comfortable, friendly environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dr. Radhika Mehra */}
            <div className="text-center">
              <img
                src="/headshot.jpg"
                alt="Dr. Radhika Mehra"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Radhika Mehra</h4>
              <p className="text-blue-600 font-medium mb-2">Lead Dentist & Founder</p>
              <p className="text-gray-600 text-sm">BDS, MDS (Oral & Maxillofacial Surgery)</p>
              <p className="text-gray-600 text-sm mt-2">10+ years experience</p>
            </div>

            {/* Additional team members can be added here */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-blue-100 flex items-center justify-center">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Dental Hygienists</h4>
              <p className="text-blue-600 font-medium mb-2">Certified Professionals</p>
              <p className="text-gray-600 text-sm">Specialized in preventive care</p>
              <p className="text-gray-600 text-sm mt-2">Patient comfort focused</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-blue-100 flex items-center justify-center">
                <Heart className="w-12 h-12 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Support Staff</h4>
              <p className="text-blue-600 font-medium mb-2">Caring Team</p>
              <p className="text-gray-600 text-sm">Dedicated to your comfort</p>
              <p className="text-gray-600 text-sm mt-2">Always here to help</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Experience the BrightSmile Difference
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our family of satisfied patients and discover why we're Gurugram's 
            most trusted dental care provider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Schedule Your Visit
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium">
              Take Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;