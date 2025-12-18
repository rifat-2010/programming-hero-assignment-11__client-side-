import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Search, PlayCircle, Layers, BookOpen } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const HomePageSlider = () => {

   const slides = [
    {
      id: "slide1",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20241002/pngtree-springtime-reading-stack-of-books-outdoors-on-green-lawn-for-students-image_16306691.jpg",
      title: ["Discover Your Next", "Favorite Book"],
      desc: "Browse thousands of hand-picked books and explore new genres every day.",
      buttons: (
        <div className="flex flex-wrap gap-4">
          <Link
            to="/books-page"
            className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            Explore Books
          </Link>
          <Link
            to="/dashboard/add-book"
            className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-700"
          >
            Add a Book
          </Link>
        </div>
      ),
    },

    {
      id: "slide2",
      img: "https://images.pexels.com/photos/279321/pexels-photo-279321.jpeg",
      title: ["Track. Read.", "Learn More."],
      desc: "Create a list of your desired books and stay motivated.",
      buttons: (
        <div className="flex gap-4">
          <Link
            to="/dashboard/my-wishlist"
            className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            My Wishlist
          </Link>
        </div>
      ),
    },

    {
      id: "slide3",
      img: "https://img.freepik.com/premium-photo/hands-holding-stack-books-front-library-bookshelf-concept-education-reading_163305-312421.jpg?semt=ais_hybrid&w=740&q=80",
      title: ["Share Your Books", "With the World"],
      desc: "Add books, publish reviews, and help others find the perfect read.",
      buttons: (
        <div className="flex gap-4">
          <Link
            to="/books-page"
            className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-700"
          >
            View All Books
          </Link>
          <Link
            to="/dashboard/add-Book"
            className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            Add Book
          </Link>
        </div>
      ),
    },
    {
      id: "slide4",
      img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      title: ["Start Your", "Reading Journey"],
      desc: "Sign up today to manage your favorite books and reading list.",
      buttons: (
        <Link
          to="/signIn-page"
          className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-700 font-semibold"
        >
          Join Our Community
        </Link>
      ),
    },
    {
      id: "slide5",
      img: "https://cmd.kerala.gov.in/wp-content/uploads/2022/08/slider-main-09.jpeg",
      title: ["Knowledge Awaits"],
      desc: "Unlock the world of reading with our curated collections.",
      buttons: (
        <Link
          to="/books-page"
          className="btn bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Layers size={18} className="mr-2" />
          View Collections
        </Link>
      ),
    },
    {
      id: "slide6",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYtzoFUfqjzRUtdfx7ws1y1gcedICkLBAdkg&s",
      title: ["Dive Into", "New Stories"],
      desc: "Explore thousands of books and find your next unforgettable read.",
      buttons: (
        <div className="flex flex-wrap gap-4">
          <Link
            to="/books-page"
            className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            <BookOpen size={18} className="mr-2" />
            Browse Books
          </Link>
          <Link
            to="/books-page"
            className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-700"
          >
            <Search size={18} className="mr-2" />
            Quick Search
          </Link>
        </div>
      ),
    },
  ];


  const [activeIndex, setActiveIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % slides.length);


    return (
        <div>
            <div className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img src={slide.img} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center md:items-start justify-center px-4 sm:px-8 md:px-16 text-white text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4">
              <Typewriter
                words={slide.title}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
            <p className="max-w-xl text-base sm:text-lg md:text-xl mb-5">
              {slide.desc}
            </p>
            {slide.buttons}
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        ❯
      </button>
    </div>
        </div>
    );
};

export default HomePageSlider;