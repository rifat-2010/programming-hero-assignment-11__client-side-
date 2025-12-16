import React from "react";
import { Link } from "react-router";

const BookDropExpress = () => {
  return (
    <div data-aos="fade-up">
      <section
        className="py-32 px-6 text-center relative min-h-[500px] flex items-center"
        style={{
          backgroundImage:
            "url('https://shopdemo.hasthemes.com/koparion-preview/p2/img/koparion/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.7) 100%)",
          }}
        ></div>

        <div className="max-w-4xl mx-auto relative z-10 w-full text-center">
          <h1 className="text-6xl font-black text-white mb-4 tracking-tight leading-tight drop-shadow-md">
            📚 Your Next Great Story, Delivered.
          </h1>
          <p className="text-2xl font-light text-gray-200 mb-12 px-4 md:px-0">
            Skip the search, embrace the read. We bring any book you desire,
            right to your doorstep, with speed and a smile.
          </p>

          <Link
            to={"/books-page"}
            className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white text-lg font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl ring-4 ring-[#f97316]/50"
          >
            Start Reading Now
          </Link>
        </div>
      </section>

      {/* Impact Section */}
      <section class="py-16 bg-linear-to-r from-primary/10 to-secondary/10">
        <div class="container mx-auto px-6 md:w-11/12">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our{" "}
              <span className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Impact
              </span>
            </h2>
            <p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the numbers that reflect our commitment to readers and
              the book community.
            </p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div class="transition-all duration-500 transform hover:scale-105">
              <p class="font-bold text-4xl md:text-5xl font-mono text-primary animate-pulse">
                1M+
              </p>
              <p class="text-gray-600 mt-2 font-medium">Books Available</p>
              <div class="mt-4 h-1 bg-linear-to-r from-primary to-transparent w-3/4 mx-auto rounded-full"></div>
            </div>
            <div class="transition-all duration-500 transform hover:scale-105 delay-100">
              <p class="font-bold text-4xl md:text-5xl font-mono text-secondary animate-pulse">
                500K+
              </p>
              <p class="text-gray-600 mt-2 font-medium">Happy Readers</p>
              <div class="mt-4 h-1 bg-linear-to-r from-secondary to-transparent w-3/4 mx-auto rounded-full"></div>
            </div>
            <div class="transition-all duration-500 transform hover:scale-105 delay-200">
              <p class="font-bold text-4xl md:text-5xl font-mono text-primary animate-pulse">
                150+
              </p>
              <p class="text-gray-600 mt-2 font-medium">Cities Covered</p>
              <div class="mt-4 h-1 bg-linear-to-r from-primary to-transparent w-3/4 mx-auto rounded-full"></div>
            </div>
            <div class="transition-all duration-500 transform hover:scale-105 delay-300">
              <div class="flex items-center justify-center">
                <p class="font-bold text-4xl md:text-5xl font-mono text-secondary animate-pulse">
                  4.9
                </p>
                <i data-feather="star" class="w-8 h-8 text-yellow-400 ml-2"></i>
              </div>
              <p class="text-gray-600 mt-2 font-medium">Customer Rating</p>
              <div class="mt-4 h-1 bg-linear-to-r from-secondary to-transparent w-3/4 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDropExpress;
