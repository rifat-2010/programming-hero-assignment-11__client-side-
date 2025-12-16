import React from 'react';
import { FaBookOpenReader, FaGifts } from 'react-icons/fa6';
import { MdAssignmentReturn } from 'react-icons/md';
import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { FcOnlineSupport } from "react-icons/fc";




const WhyChooseBookCourier = () => {
    return (
        <div data-aos="fade-up">
           {/* Why Choose BookCourier Section */}
           <section className="why-choose-section py-20 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose <span className="text-purple-600">BookCourier</span>?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Discover the difference that makes us the preferred choice for book lovers nationwide</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1: Lightning Fast Delivery */}
                        <div className="feature-card group bg-linear-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-300">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-purple-100 to-purple-200 group-hover:from-purple-600 group-hover:to-purple-700 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 ">
                               <TbTruckDelivery  size={40} className='text-purple-700 group-hover:text-white'/>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">Lightning Fast Delivery</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Get your books delivered within 24 hours in major cities. We prioritize speed without compromising quality.</p>
                        </div>

                        {/* Feature 2: Curated Collection */}
                        <div className="feature-card group bg-linear-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-300">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-purple-100 to-purple-200 group-hover:from-purple-600 group-hover:to-purple-700 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
                                <FaBookOpenReader  size={40} className='text-purple-700 group-hover:text-white'/>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">Curated Collection</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Access over 1 million books carefully selected by our literary experts to ensure quality and diversity.</p>
                        </div>

                        {/* Feature 3: Hassle-Free Returns */}
                        <div className="feature-card group bg-linear-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-300">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-purple-100 to-purple-200 group-hover:from-purple-600 group-hover:to-purple-700 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
                                <MdAssignmentReturn  size={40} className='text-purple-700 group-hover:text-white'/>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">Hassle-Free Returns</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Not satisfied? Return any book within 15 days with our no-questions-asked policy.</p>
                        </div>

                        {/* Feature 4: Secure Payments */}
                        <div className="feature-card group bg-linear-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-300">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-purple-100 to-purple-200 group-hover:from-purple-600 group-hover:to-purple-700 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
                               <GiReceiveMoney  size={40} className='text-purple-700 group-hover:text-white' />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">Secure Payments</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Multiple secure payment options including Credit Cards, Digital Wallets, and Cash on Delivery.</p>
                        </div>

                        {/* Feature 5: 24/7 Support */}
                        <div className="feature-card group bg-linear-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-300">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-purple-100 to-purple-200 group-hover:from-purple-600 group-hover:to-purple-700 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
                                <FcOnlineSupport  size={40} className='text-purple-700 group-hover:text-white' />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">24/7 Support</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Our dedicated support team is always available to help you with your orders and queries.</p>
                        </div>

                        {/* Feature 6: Loyalty Rewards */}
                        <div className="feature-card group bg-linear-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-300">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-purple-100 to-purple-200 group-hover:from-purple-600 group-hover:to-purple-700 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
                                <FaGifts  size={40} className='text-purple-700 group-hover:text-white' />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">Loyalty Rewards</h3>
                            <p className="text-gray-600 text-center leading-relaxed">Earn points on every purchase and redeem them for exclusive discounts and free books.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChooseBookCourier;