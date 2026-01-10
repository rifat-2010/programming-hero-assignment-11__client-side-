import React from 'react';
import photo from '../../assets/home-single-section-image.jpg';
import { Link } from 'react-router';
import { BookOpen, Heart, Zap } from 'lucide-react';
const SingleBanner = () => {
    return (
        <div data-aos="fade-up">
        <section className="relative min-h-[600px] flex items-center py-20 overflow-hidden">
            {/* background img */}
            <div className="absolute inset-0 z-0">
             <img 
            src={photo}
            alt="A person reading a book by the window" 
            className="w-full h-full object-cover" 
        />
            </div>

            {/* other content's parent*/}
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                
                {/* main content */}
                <div className="lg:w-1/2 p-8 md:p-12 bg-black/70 backdrop-blur-sm rounded-2xl shadow-2xl space-y-6 border border-white/20">
                    
                    <span className="text-sm font-semibold uppercase tracking-widest text-amber-300 bg-amber-300/20 px-3 py-1 rounded-full">
                        Literary Sanctuary
                    </span>

                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                        Where Every Page <span className="text-amber-400">Feels Like Home</span>
                    </h2>


                    <p className="text-lg text-gray-200 leading-relaxed">
                        Escape the noise and dive deep into your next adventure. Our selection ensures you always find the perfect story for those quiet, thoughtful moments.
                    </p>


                    <div className="grid grid-cols-3 gap-4 pt-4 text-white">
                        <div className="flex items-center gap-3">
                            <BookOpen className="w-5 h-5 text-amber-400" />
                            <p className="font-medium text-sm">Curated Titles</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Zap className="w-5 h-5 text-amber-400" />
                            <p className="font-medium text-sm">Instant Delivery</p>
                        </div>
                         <div className="flex items-center gap-3">
                            <Heart className="w-5 h-5 text-amber-400" />
                            <p className="font-medium text-sm">Reader's Choice</p>
                        </div>
                    </div>
                    
                    <Link to={'/books-page'} className="common-btn">
                        Start Browsing   
                    </Link>
                </div>
            </div>
        </section>
        </div>
    );
};

export default SingleBanner;