import { Mail } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const JoinCommunitySection = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    console.log(email);
    toast.success("Thanks for Subscribing Us");
  };

  return (
<section data-aos="fade-up" className="w-11/12 mx-auto py-20">
  <div
    className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-purple-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900"
  >
    {/* Background subtle pattern */}
    <div className="absolute inset-0 opacity-20 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/moroccan-flower.png')] bg-repeat"></div>

    <div className="relative px-8 py-16 md:px-20 text-center">
      {/* Icon Circle */}
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur flex items-center justify-center shadow-md animate-float">
        <Mail className="h-8 w-8 text-purple-700 dark:text-purple-300" />
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Join Our Reading Community
      </h2>

      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        Subscribe to receive personalized book recommendations, exclusive deals, 
        and early access to new releases.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
      >
        <input
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="flex-1 px-6 py-4 rounded-xl bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder:text-gray-400 
          border border-gray-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />

        <button
          type="submit"
          className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-md transition cursor-pointer"
        >
          Subscribe
        </button>
      </form>

      <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
        Join 50,000+ subscribers. No spam, unsubscribe anytime.
      </p>
    </div>
  </div>
</section>

  );
};

export default JoinCommunitySection;
