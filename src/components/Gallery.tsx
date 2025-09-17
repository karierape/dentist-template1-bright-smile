import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentView, setCurrentView] = useState<'before' | 'after'>('before');

  const transformations = [
    {
      id: 1,
      before: "/dental-transform-1.png",
      after: "/dental-transformation-3 (1).png",
      title: "Complete Smile Makeover",
      description: "Cosmetic dentistry with veneers and teeth whitening",
      treatment: "Porcelain Veneers + Whitening"
    },
    {
      id: 2,
      before: "/9fb749ed-4886-4b51-9bdf-35c8a3fa1fce.png",
      after: "/dental-transformation-3 (1).png",
      title: "Orthodontic Treatment",
      description: "Invisalign treatment for perfectly aligned teeth",
      treatment: "Invisalign Clear Aligners"
    },
    {
      id: 3,
      before: "/dental-transform-1.png",
      after: "/9fb749ed-4886-4b51-9bdf-35c8a3fa1fce.png",
      title: "Dental Restoration",
      description: "Complete dental restoration with implants and crowns",
      treatment: "Dental Implants + Crowns"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
    setCurrentView('before');
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % transformations.length);
      setCurrentView('before');
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? transformations.length - 1 : selectedImage - 1);
      setCurrentView('before');
    }
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-blue-600 font-medium mb-4">
            <Sparkles className="w-5 h-5" />
            <span>Before & After Gallery</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Amazing Smile Transformations
          </h2>
          <p className="text-xl text-gray-600">
            See the incredible results our patients have achieved with our advanced dental treatments. 
            Every smile tells a story of confidence restored.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {transformations.map((transformation, index) => (
            <div
              key={transformation.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={transformation.before}
                      alt={`Before - ${transformation.title}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={transformation.after}
                      alt={`After - ${transformation.title}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                      After
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {transformation.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {transformation.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">
                    {transformation.treatment}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready for Your Smile Transformation?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied patients who have transformed their smiles at BrightSmile Dental Studio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Book Free Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                Call: +91 98765 43210
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src={currentView === 'before' ? transformations[selectedImage].before : transformations[selectedImage].after}
                  alt={`${currentView} - ${transformations[selectedImage].title}`}
                  className="w-full h-96 object-cover"
                />
                
                {/* Toggle Buttons */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <button
                    onClick={() => setCurrentView('before')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentView === 'before'
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Before
                  </button>
                  <button
                    onClick={() => setCurrentView('after')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentView === 'after'
                        ? 'bg-green-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    After
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {transformations[selectedImage].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {transformations[selectedImage].description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium">
                    Treatment: {transformations[selectedImage].treatment}
                  </span>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Book Similar Treatment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;