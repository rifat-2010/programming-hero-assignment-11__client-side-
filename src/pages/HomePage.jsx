import { Book, Truck, Shield, Clock, Star, MapPin, Mail, ArrowRight, Quote, Users, Globe, BookOpenText, Globe2 } from "lucide-react";
import JoinCommunitySection from "../components/Homepage/JoinCommunitySection";
import { FaCarRear } from "react-icons/fa6";
import WhyChooseBookCourier from "../components/Homepage/WhyChooseBookCourier";
import BookDropExpress from "../components/Homepage/BookDropExpress";
import FeaturedAuthors from "../components/Homepage/FeaturedAuthors";
import { IoLocationOutline } from "react-icons/io5";
import CoverageSection from "../components/Homepage/CoverageSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-body">


      {/* Hero Banner Slider Section */}
      <section className="pt-28 pb-20 bg-gradient-to-b from-secondary/50 to-background">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Fresh Arrivals</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">Latest Books</h2>
            </div>
            <a href="#" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              View All Books <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Book 1 */}
            <div className="group">
              <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-soft mb-4 bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&q=80"
                  alt="The Midnight Library"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">The Midnight Library</h4>
              <p className="text-sm text-muted-foreground">Matt Haig</p>
            </div>

            {/* Book 2 */}
            <div className="group">
              <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-soft mb-4 bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80"
                  alt="Where the Crawdads Sing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">Where the Crawdads Sing</h4>
              <p className="text-sm text-muted-foreground">Delia Owens</p>
            </div>

            {/* Book 3 */}
            <div className="group">
              <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-soft mb-4 bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80"
                  alt="Atomic Habits"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">Atomic Habits</h4>
              <p className="text-sm text-muted-foreground">James Clear</p>
            </div>

            {/* Book 4 */}
            <div className="group">
              <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-soft mb-4 bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&q=80"
                  alt="The Silent Patient"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">The Silent Patient</h4>
              <p className="text-sm text-muted-foreground">Alex Michaelides</p>
            </div>

            {/* Book 5 */}
            <div className="group">
              <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-soft mb-4 bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&q=80"
                  alt="Educated"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">Educated</h4>
              <p className="text-sm text-muted-foreground">Tara Westover</p>
            </div>

            {/* Book 6 */}
            <div className="group">
              <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-soft mb-4 bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80"
                  alt="Project Hail Mary"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">Project Hail Mary</h4>
              <p className="text-sm text-muted-foreground">Andy Weir</p>
            </div>
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
