import { BookOpenText, Shield, Truck } from 'lucide-react';
import React from 'react';

const WhyChooseBookCourier = () => {
    return (
        <div>
            <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose <span class="text-primary">BookDrop Express</span>?</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Discover the difference that makes us the preferred choice for book lovers nationwide</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* <!-- Feature 1 --> */}
                <div class="group bg-linear-to-br from-primary/5 to-secondary/5 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-primary/10 hover:to-secondary/10">
               <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Truck className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
                    <h3 class="text-xl font-bold text-center mb-3 text-gray-800">Lightning Fast Delivery</h3>
                    <p class="text-gray-600 text-center">Get your books delivered within 24 hours in major cities. We prioritize speed without compromising quality.</p>
                </div>

                {/* <!-- Feature 2 --> */}
                <div class="group bg-linear-to-br from-primary/5 to-secondary/5 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-primary/10 hover:to-secondary/10">
                     <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <BookOpenText className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
                    <h3 class="text-xl font-bold text-center mb-3 text-gray-800">Curated Collection</h3>
                    <p class="text-gray-600 text-center">Access over 1 million books carefully selected by our literary experts to ensure quality and diversity.</p>
                </div>

                {/* <!-- Feature 3 --> */}
                <div class="group bg-linear-to-br from-primary/5 to-secondary/5 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-primary/10 hover:to-secondary/10">
                     <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Shield className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                    <h3 class="text-xl font-bold text-center mb-3 text-gray-800">Hassle-Free Returns</h3>
                    <p class="text-gray-600 text-center">Not satisfied? Return any book within 15 days with our no-questions-asked policy.</p>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default WhyChooseBookCourier;