import { Mail } from 'lucide-react';
import React from 'react';

const JoinCommunitySection = () => {
    return (
        <div>
                  {/* Newsletter Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-primary to-emerald-light rounded-3xl p-12 md:p-16 text-center shadow-elevated">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-foreground/20 flex items-center justify-center animate-float">
              <Mail className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Join Our Reading Community
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Subscribe to receive personalized book recommendations, exclusive deals, and early access to new releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/40 transition-colors"
              />
              <button className="px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors shadow-soft cursor-pointer">
                Subscribe
              </button>
            </div>
            <p className="text-primary-foreground/60 text-sm mt-4">
              Join 50,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
        </div>
    );
};

export default JoinCommunitySection;