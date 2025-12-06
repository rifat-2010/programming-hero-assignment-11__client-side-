import { Globe2 } from 'lucide-react';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';

const CoverageSection = () => {
    return (
        <div>
    <section class="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
  <div class="container mx-auto px-6 max-w-7xl">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <span class="text-primary font-medium text-sm uppercase tracking-wider">Global Reach</span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
          Serving <span class="text-primary">150+ Cities</span> Worldwide
        </h2>
        <p class="text-gray-600 text-lg">
          From New York to Tokyo, London to Sydney, we bring the joy of reading to book lovers across the globe.
          Our trusted logistics network ensures your books arrive safely, every time.
        </p>
        
        <div class="grid grid-cols-2 gap-6 mt-8">
          <div class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
              <IoLocationOutline class="h-5 w-5 text-primary"  />
            </div>
            <div>
              <p class="font-semibold text-gray-900">North America</p>
              <p class="text-sm text-gray-500">45+ Cities</p>
            </div>
          </div>
          
          <div class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
              <IoLocationOutline class="h-5 w-5 text-primary"  />
            </div>
            <div>
              <p class="font-semibold text-gray-900">Europe</p>
              <p class="text-sm text-gray-500">50+ Cities</p>
            </div>
          </div>
          
          <div class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
              <IoLocationOutline class="h-5 w-5 text-primary"  />
            </div>
            <div>
              <p class="font-semibold text-gray-900">Asia Pacific</p>
              <p class="text-sm text-gray-500">40+ Cities</p>
            </div>
          </div>
          
          <div class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
             <IoLocationOutline class="h-5 w-5 text-primary"  />
            </div>
            <div>
              <p class="font-semibold text-gray-900">Others</p>
              <p class="text-sm text-gray-500">15+ Cities</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="relative">
        <div class="aspect-video rounded-2xl overflow-hidden shadow-xl bg-white relative">
          <img
            src="https://static.photos/travel/1024x576/42"
            alt="World Map Coverage"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe2 class="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p class="font-bold text-2xl text-gray-900">150+</p>
                  <p class="text-sm text-gray-600">Cities Covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default CoverageSection;