import { Mail } from "lucide-react";
// import React from "react";
import { toast } from "react-toastify";

const JoinCommunitySection = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    console.log(email);
    toast.success("Thanks for Subscribing Us");
  };

  return (
    <section data-aos="fade-up" className="w-full mx-auto">
      <div
        className="relative min-h-[400px] flex items-center overflow-hidden shadow-2xl"
        style={{
          // Set the background image
          backgroundImage: "url('https://info.bingomore.com/wordpress/bookio/assets/img/bg-footer.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Subtle Dark Overlay for left side text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0.0) 100%)',
          }}
        ></div>

        {/* Content Container */}
        <div className="relative z-10 w-full md:w-1/2 px-8 py-16 md:px-20 text-left">
          
          {/* Icon Circle */}
          <div className="w-16 h-16 mb-6 rounded-full bg-white/20 backdrop-blur flex items-center justify-center shadow-lg animate-float">
            <Mail className="h-8 w-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-snug drop-shadow-md">
            Unlock the Next Chapter
          </h2>

          <p className="text-gray-200 max-w-lg mb-10 text-lg">
            Join our inner circle for weekly literary insights, members-only
            deals, and book club invitations.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 max-w-lg"
          >
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl bg-white/90 text-gray-800 placeholder:text-gray-500 
              border-none focus:outline-none focus:ring-4 focus:ring-[#ffc300] transition"
            />

            <button
              type="submit"
              className="px-8 py-4 bg-[#ffc300] hover:bg-[#ffb700] text-gray-900 font-bold rounded-xl shadow-xl transition transform hover:scale-[1.02] cursor-pointer whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="text-gray-400 text-sm mt-4">
            Join 50,000+ avid readers. Unsubscribe instantly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunitySection;