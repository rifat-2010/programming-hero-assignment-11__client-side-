import { Book, Truck, Shield, Clock, Star, MapPin, Mail, ArrowRight, Quote, Users, Globe, BookOpenText, Globe2 } from "lucide-react";
import JoinCommunitySection from "../components/Homepage/JoinCommunitySection";
import { FaCarRear } from "react-icons/fa6";
import WhyChooseBookCourier from "../components/Homepage/WhyChooseBookCourier";
import BookDropExpress from "../components/Homepage/BookDropExpress";
import FeaturedAuthors from "../components/Homepage/FeaturedAuthors";

import CoverageSection from "../components/Homepage/CoverageSection";
import { Link, useLoaderData } from "react-router";
import BookCart from "../components/BookCart";

export default function HomePage() {

  const data = useLoaderData();
  console.log(data)

  return (
    <div className="min-h-screen bg-background font-body">


      {/* Hero Banner Slider Section */}
      <section  data-aos="fade-up" className="pt-28 pb-20 bg-linear-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Delivering Stories Worldwide
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Your Books, <br />
              <span className="text-primary">Delivered with Care</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover, order, and receive the world's finest books right at your doorstep.
              Fast, reliable, and always with love for literature.
            </p>
          </div>

          {/* Slider Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Slider Card 1 */}
            <div className="group bg-card rounded-2xl overflow-hidden shadow-medium hover:shadow-elevated transition-all duration-500 animate-fade-in-up">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80"
                  alt="Classic Literature Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Classic Literature</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Timeless masterpieces from the greatest authors in history. Explore Austen, Dickens, and more.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Browse Collection <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Slider Card 2 */}
            <div className="group bg-card rounded-2xl overflow-hidden shadow-medium hover:shadow-elevated transition-all duration-500 animate-fade-in-up animation-delay-200">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80"
                  alt="Modern Bestsellers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Modern Bestsellers</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Stay current with today's most talked-about titles. From thrillers to memoirs.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Browse Collection <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Slider Card 3 */}
            <div className="group bg-card rounded-2xl overflow-hidden shadow-medium hover:shadow-elevated transition-all duration-500 animate-fade-in-up animation-delay-400">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Rare & Collectible"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Rare & Collectible</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Unique first editions and signed copies for the serious collector.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Browse Collection <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Books Section */}
    <section data-aos="fade-up" className="py-20 bg-background">
  <div className="w-11/12 mx-auto">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
      <div>
        <span className="text-primary font-medium text-sm uppercase tracking-wider">Fresh Arrivals</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">Latest Books</h2>
        <p className="text-muted-foreground mt-2 max-w-md">Discover our newest collection of books, handpicked just for your reading journey.</p>
      </div>
      <Link to={'/books-page'} className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all underline underline-offset-4">
        View All Books <ArrowRight className="h-4 w-4" />
      </Link>
    </div>

       <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {data.map((book) => (
              <div
                key={book._id}
              >
                <BookCart book={book}/>
              </div>
            ))}
     </div>
  </div>
    </section>

      {/* Coverage Section */}
    <CoverageSection></CoverageSection>

 
      {/* <!-- Why Choose BookCourier Section --> */}
    <WhyChooseBookCourier></WhyChooseBookCourier>

      {/* Featured Authors Section */}
    <FeaturedAuthors></FeaturedAuthors>

      {/* Stats Section */}
        <BookDropExpress></BookDropExpress>

      {/* Newsletter Section */}
     <JoinCommunitySection></JoinCommunitySection>

    </div>
  );
}
