import { Globe2 } from "lucide-react";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import Coverage from "./Coverage";

const CoverageSection = () => {
  return (
    <div>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://enzostvs-cached-generation.hf.space/generate/a-beautiful-library-with-global-map-and-books?format=landscape-16_9"
            alt="Library Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-white font-medium text-sm uppercase tracking-wider bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full">
                Global Reach
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
                Serving <span className="text-yellow-300">
                  150+ Cities
                </span>{" "}
                Worldwide
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                From New York to Tokyo, London to Sydney, we bring the joy of
                reading to book lovers across the globe. Our trusted logistics
                network ensures your books arrive safely, every time.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-white/40">
                  <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <IoLocationOutline className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">North America</p>
                    <p className="text-sm text-white/70">45+ Cities</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-white/40">
                  <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <IoLocationOutline className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Europe</p>
                    <p className="text-sm text-white/70">50+ Cities</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-white/40">
                  <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <IoLocationOutline className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Asia Pacific</p>
                    <p className="text-sm text-white/70">40+ Cities</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-white/40">
                  <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <IoLocationOutline className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Others</p>
                    <p className="text-sm text-white/70">15+ Cities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* map side content */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 relative">
              <Coverage></Coverage>
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoverageSection;
