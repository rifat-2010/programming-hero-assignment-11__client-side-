import React from 'react';

const BookDropExpress = () => {
    return (
        <div>
                      <section class="py-20 px-6 bg-white text-center">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl md:text-5xl font-bold text-primary mb-6">📚 BookDrop Express</h1>
            <p class="text-xl text-gray-600 mb-8">Your Doorstep Library Delivery Service - Get any book delivered to your home within 24 hours!</p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="#how-it-works" class="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-colors shadow-lg">
                    How It Works
                </a>
                <a href="#popular-books" class="border-2 border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg transition-colors">
                    Browse Books
                </a>
            </div>
        </div>
    </section>

    <section class="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
<div class="container mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div class="transition-all duration-500 transform hover:scale-105">
                    <p class="font-bold text-4xl md:text-5xl font-mono text-primary animate-pulse">1M+</p>
                    <p class="text-gray-600 mt-2 font-medium">Books Available</p>
                    <div class="mt-4 h-1 bg-gradient-to-r from-primary to-transparent w-3/4 mx-auto rounded-full"></div>
                </div>
                <div class="transition-all duration-500 transform hover:scale-105 delay-100">
                    <p class="font-bold text-4xl md:text-5xl font-mono text-secondary animate-pulse">500K+</p>
                    <p class="text-gray-600 mt-2 font-medium">Happy Readers</p>
                    <div class="mt-4 h-1 bg-gradient-to-r from-secondary to-transparent w-3/4 mx-auto rounded-full"></div>
                </div>
                <div class="transition-all duration-500 transform hover:scale-105 delay-200">
                    <p class="font-bold text-4xl md:text-5xl font-mono text-primary animate-pulse">150+</p>
                    <p class="text-gray-600 mt-2 font-medium">Cities Covered</p>
                    <div class="mt-4 h-1 bg-gradient-to-r from-primary to-transparent w-3/4 mx-auto rounded-full"></div>
                </div>
                <div class="transition-all duration-500 transform hover:scale-105 delay-300">
                    <div class="flex items-center justify-center">
                        <p class="font-bold text-4xl md:text-5xl font-mono text-secondary animate-pulse">4.9</p>
                        <i data-feather="star" class="w-8 h-8 text-yellow-400 ml-2"></i>
                    </div>
                    <p class="text-gray-600 mt-2 font-medium">Customer Rating</p>
                    <div class="mt-4 h-1 bg-gradient-to-r from-secondary to-transparent w-3/4 mx-auto rounded-full"></div>
                </div>
            </div>
        </div>
            </section>
        </div>
    );
};

export default BookDropExpress;