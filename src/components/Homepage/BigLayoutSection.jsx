import React from 'react';

const BigLayoutSection = () => {
    return (
        <div>
            <section className="py-20 bg-background">
        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div data-aos="fade-down" className="relative order-2 md:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://scientia.themerex.net/splash/assets/img/user/laptop-2.png"
                  alt="Blog Layouts"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Content */}
            <div data-aos="fade-up" className="space-y-6 order-1 md:order-2">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Blog Layouts
                </h2>
                <div className="w-20 h-1 bg-orange-600 rounded-full"></div>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Choose from several highly customizable blog layouts and tailor
                them to your needs. Explore our extensive collection of
                templates and styles designed to showcase your content in the
                most engaging way possible. Adjust layouts, control sidebar
                positions, and customize pagination to match your unique vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-[300px]">
                <button className="common-btn">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default BigLayoutSection;