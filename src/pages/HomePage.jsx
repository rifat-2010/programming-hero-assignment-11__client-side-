import { Book, Truck, Shield, Clock, Star, MapPin, Mail, ArrowRight, Quote, Users, Globe, BookOpenText, Globe2, BookOpen, Coffee, Sun, Zap, Heart } from "lucide-react";
import JoinCommunitySection from "../components/Homepage/JoinCommunitySection";
import { FaCarRear } from "react-icons/fa6";
import WhyChooseBookCourier from "../components/Homepage/WhyChooseBookCourier";
import BookDropExpress from "../components/Homepage/BookDropExpress";
import FeaturedAuthors from "../components/Homepage/FeaturedAuthors";

import CoverageSection from "../components/Homepage/CoverageSection";
import { Link, useLoaderData } from "react-router";
import BookCart from "../components/BookCart";
import HomePageSlider from "../components/Homepage/HomePageSlider";
import {  ChevronDown } from 'lucide-react';
import SingleBanner from "../components/Homepage/SingleBanner";


export default function HomePage() {

  const data = useLoaderData();
  console.log(data)

  return (
    <div className="min-h-screen bg-background font-body">

      {/* Hero Banner Slider Section */}
       <HomePageSlider></HomePageSlider>

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


        {/*single banner section */}
      <SingleBanner></SingleBanner>
  
      {/* <!-- Why Choose BookCourier Section --> */}
    <WhyChooseBookCourier></WhyChooseBookCourier>

      {/* Coverage Section */}
    <CoverageSection></CoverageSection>

      {/* Featured Authors Section */}
    <FeaturedAuthors></FeaturedAuthors>

      {/* Stats Section */}
        <BookDropExpress></BookDropExpress>

      {/* Newsletter Section */}
     <JoinCommunitySection></JoinCommunitySection>

    </div>
  );
}
