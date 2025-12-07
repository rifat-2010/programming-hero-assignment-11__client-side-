import { BookOpenText, Shield, Truck, CreditCard, Headphones, Gift } from 'lucide-react';
import React from 'react';

const WhyChooseBookCourier = () => {
    return (
        <div>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:w-11/12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose <span className="text-purple-600">BookCourier</span>?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Discover the difference that makes us the preferred choice for book lovers nationwide</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Feature 1 */}
                        <div className="group bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 group-hover:bg-purple-600 flex items-center justify-center transition-colors">
                                <Truck className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Lightning Fast Delivery</h3>
                            <p className="text-gray-600 text-center">Get your books delivered within 24 hours in major cities. We prioritize speed without compromising quality.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 group-hover:bg-purple-600 flex items-center justify-center transition-colors">
                                <BookOpenText className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Curated Collection</h3>
                            <p className="text-gray-600 text-center">Access over 1 million books carefully selected by our literary experts to ensure quality and diversity.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 group-hover:bg-purple-600 flex items-center justify-center transition-colors">
                                <Shield className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Hassle-Free Returns</h3>
                            <p className="text-gray-600 text-center">Not satisfied? Return any book within 15 days with our no-questions-asked policy.</p>
                        </div>

                        {/* Feature 4 - New */}
                        <div className="group bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 group-hover:bg-purple-600 flex items-center justify-center transition-colors">
                                <CreditCard className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Secure Payments</h3>
                            <p className="text-gray-600 text-center">Multiple secure payment options including Credit Cards, Digital Wallets, and Cash on Delivery.</p>
                        </div>

                        {/* Feature 5 - New */}
                        <div className="group bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 group-hover:bg-purple-600 flex items-center justify-center transition-colors">
                                <Headphones className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-3 text-gray-800">24/7 Support</h3>
                            <p className="text-gray-600 text-center">Our dedicated support team is always available to help you with your orders and queries.</p>
                        </div>

                        {/* Feature 6 - New */}
                        <div className="group bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 group-hover:bg-purple-600 flex items-center justify-center transition-colors">
                                <Gift className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Loyalty Rewards</h3>
                            <p className="text-gray-600 text-center">Earn points on every purchase and redeem them for exclusive discounts and free books.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChooseBookCourier;