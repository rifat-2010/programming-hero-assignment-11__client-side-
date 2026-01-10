import React from "react";

const FeaturedAuthors = () => {
  return (
    <div data-aos="fade-up">
      <section class="py-20 bg-linear-to-b from-white to-primary/5">
        <div class="container mx-auto px-6 md:w-11/12">
          <div class="text-center mb-16">
            <span class="text-primary font-medium text-sm uppercase tracking-wider">
              Meet The Visionaries
            </span>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Featured <span class="text-primary">Icons</span>
            </h2>
            <p class="max-w-2xl mx-auto mt-4 text-gray-600">
              Discover the brilliant minds shaping the future
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 group">
              <div class="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1U4TCjzEi-WM-8mq4hk5cWorEA50Ebwp4A&s"
                  alt="Elon Musk"
                  class="w-full h-full object-cover"
                />
              </div>
              <h4 class="text-xl font-bold text-gray-900">Elon Musk</h4>
              <p class="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                Tesla & SpaceX
              </p>
            </div>

            <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 group">
              <div class="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaf2jidBBkxos4jXJ7poAS6j8_0CCRwlMBg&s"
                  alt="Mark Zuckerberg"
                  class="w-full h-full object-cover"
                />
              </div>
              <h4 class="text-xl font-bold text-gray-900">Mark Zuckerberg</h4>
              <p class="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                Meta Platforms
              </p>
            </div>

            <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 group">
              <div class="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxkjLbvmkfE5T-S9ObWLSJyMnJ7PL66_5Tg&s"
                  alt="Bill Gates"
                  class="w-full h-full object-cover"
                />
              </div>
              <h4 class="text-xl font-bold text-gray-900">Bill Gates</h4>
              <p class="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                Microsoft & Philanthropy
              </p>
            </div>

            <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 group">
              <div class="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZflzsOLFjRVbolXYnc7FAMttYN57zKDm00g&s"
                  alt="Sam Altman"
                  class="w-full h-full object-cover"
                />
              </div>
              <h4 class="text-xl font-bold text-gray-900">Sam Altman</h4>
              <p class="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                OpenAI
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedAuthors;
