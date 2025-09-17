import React from 'react';
import { Award, GraduationCap, Users, Heart } from 'lucide-react';

const DoctorIntro = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Doctor Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/headshot.jpg"
                alt="Dr. Radhika Mehra - Lead Dentist at BrightSmile Dental Studio"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-xs text-center">Years</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-600 font-medium">
                <Heart className="w-5 h-5" />
                <span>Meet Our Lead Dentist</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Dr. Radhika Mehra
              </h2>
              <p className="text-xl text-gray-600">
                BDS, MDS (Oral & Maxillofacial Surgery)
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              With over 10 years of dedicated experience in dentistry, Dr. Radhika Mehra is 
              committed to providing exceptional dental care with a gentle touch. She specializes 
              in cosmetic dentistry, dental implants, and advanced oral surgery procedures.
            </p>

            {/* Qualifications & Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Education</h4>
                  <p className="text-gray-600 text-sm">MDS from AIIMS, New Delhi</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Specialization</h4>
                  <p className="text-gray-600 text-sm">Cosmetic & Implant Dentistry</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Experience</h4>
                  <p className="text-gray-600 text-sm">5000+ Successful Treatments</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Philosophy</h4>
                  <p className="text-gray-600 text-sm">Painless, Patient-Centered Care</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
              <blockquote className="text-gray-700 italic">
                "Every smile tells a story. My mission is to help you write yours with confidence, 
                comfort, and the highest standard of dental care."
              </blockquote>
              <cite className="text-blue-600 font-medium mt-2 block">- Dr. Radhika Mehra</cite>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                View Credentials
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorIntro;