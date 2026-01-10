import { Link } from "react-router";


const EasyBooking = () => {
    return (
        <div>
            <section className="py-20 bg-background">
        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-down" className="space-y-6">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Easy Booking <br /> System
                </h2>
                <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our intuitive platform makes booking your favorite books simple
                and effortless. With our seamless ordering system, you can
                explore, select, and reserve books in just a few clicks.
                Experience a smooth and delightful shopping journey with our
                user-friendly interface.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-[300px]">
                <Link
                  to="/books-page"
                  className="common-btn "
                >
                  Start Booking Now
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div data-aos="fade-up" className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://scientia.themerex.net/splash/assets/img/user/booked.png"
                  alt="Easy Booking System"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default EasyBooking;