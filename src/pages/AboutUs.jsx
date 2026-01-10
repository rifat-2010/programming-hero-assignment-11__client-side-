import React from "react";
import {
  Users,
  BookOpen,
  Shield,
  Zap,
  Target,
  Heart,
  CheckCircle,
  TrendingUp,
  Clock,
  MapPin,
  Star,
  Lock,
  Truck,
  DollarSign,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const userRoles = [
    {
      icon: Users,
      role: "Customer Users",
      color: "from-blue-500 to-blue-600",
      features: [
        "Browse & search thousands of books",
        "Add books to wishlist",
        "Place orders with quick checkout",
        "Track order status in real-time",
        "Make secure payments",
        "Rate & review books",
        "View invoices & payment history",
      ],
    },
    {
      icon: BookOpen,
      role: "Librarians",
      color: "from-orange-500 to-orange-600",
      features: [
        "Add new books with full details",
        "Edit & update book information",
        "Publish/unpublish books",
        "Manage incoming orders",
        "Update order status (pending → shipped → delivered)",
        "Cancel orders if needed",
        "Monitor sales statistics",
      ],
    },
    {
      icon: Shield,
      role: "Administrators",
      color: "from-emerald-500 to-emerald-600",
      features: [
        "Manage all platform users",
        "Assign roles (User/Librarian/Admin)",
        "View comprehensive analytics",
        "Monitor all orders platform-wide",
        "Publish/unpublish/delete books",
        "Manage platform settings",
        "Ensure platform security & compliance",
      ],
    },
  ];

  const keyFeatures = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Get books delivered to your doorstep from nearby libraries quickly and efficiently",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description:
        "Access books at reasonable prices with flexible payment options",
    },
    {
      icon: Lock,
      title: "Secure Transactions",
      description:
        "All payments are encrypted and secure with JWT token protection",
    },
    {
      icon: Heart,
      title: "Community Driven",
      description:
        "Join thousands of book lovers in our growing reading community",
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description:
        "Track trends, reviews, and ratings to discover must-read books",
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description:
        "Services available across multiple cities and expanding daily",
    },
  ];

  const dashboardBenefits = [
    {
      step: 1,
      title: "Personalized Experience",
      description:
        "Each user role has a customized dashboard showing only relevant information and tools",
      items: [
        "Users see their orders, wishlist, and profile",
        "Librarians see their books, sales, and customer orders",
        "Admins see platform-wide analytics and user management tools",
      ],
    },
    {
      step: 2,
      title: "Real-Time Monitoring",
      description: "Track everything happening on the platform instantly",
      items: [
        "Users track order status live",
        "Librarians monitor incoming orders immediately",
        "Admins view platform metrics in real-time dashboards",
      ],
    },
    {
      step: 3,
      title: "Powerful Management Tools",
      description: "Complete control over content and operations",
      items: [
        "Users manage orders, wishlist, and profile",
        "Librarians manage inventory and order fulfillment",
        "Admins manage users, books, and platform-wide operations",
      ],
    },
    {
      step: 4,
      title: "Data-Driven Decisions",
      description: "Make informed choices with comprehensive analytics",
      items: [
        "Users see order history and spending patterns",
        "Librarians track sales and popular books",
        "Admins analyze platform growth and performance",
      ],
    },
  ];


  const teamValues = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Making books accessible to everyone, anywhere, anytime",
    },
    {
      icon: Heart,
      title: "Community First",
      description:
        "Building a thriving ecosystem for readers, librarians, and publishers",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Constantly improving and adding features based on user feedback",
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "Ensuring stable, secure, and trustworthy service 24/7",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 font-body">
      {/* Hero Section */}
            <section
            className="relative py-20 md:py-32 w-full bg-cover bg-center overflow-hidden"
            style={{
                backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDsNdUxHFy25onM6Ow4PTYR72xOAJf4RFCQ&s')",
            }}
            >
            <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900 to-black opacity-80"></div>

            <div className="relative w-11/12 mx-auto text-center z-20">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-orange-400">
                About BookCourier
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white mb-8">
                Revolutionizing how you access books. From your home to millions of
                stories, we bring libraries to your doorstep.
                </p>
                <div className="h-1 w-24 bg-orange-600 rounded-full mx-auto"></div>
            </div>
            </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-background">
        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div
              data-aos="fade-right"
              className="bg-white rounded-2xl shadow-lg p-10 border-l-4 border-blue-600"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To revolutionize book accessibility by creating a seamless
                platform where readers can discover, order, and receive books
                from their nearest libraries without leaving their homes. We
                bridge the gap between readers and vast literary resources.
              </p>
            </div>

            {/* Vision */}
            <div
              data-aos="fade-left"
              className="bg-white rounded-2xl shadow-lg p-10 border-l-4 border-orange-600"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-lg mr-4">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become the world's most trusted library-to-home delivery
                platform, creating a vibrant community of readers, librarians,
                and knowledge seekers where every book finds its reader, and
                every reader finds their next great adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-20 bg-white">
        <div className="w-11/12 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How BookCourier Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A complete ecosystem designed for three roles, each empowered to
              contribute and benefit
            </p>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userRoles.map((userRole, index) => {
              const Icon = userRole.icon;
              return (
                <div
                  key={index}
                  data-aos="zoom-in"
                  className={`bg-linear-to-br ${userRole.color} rounded-2xl shadow-xl p-10 text-black transform hover:scale-105 transition-all duration-300`}
                >
                  <div className="mb-6 p-4 bg-white bg-opacity-20 rounded-2xl w-fit">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">{userRole.role}</h3>
                  <ul className="space-y-3">
                    {userRole.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-1 shrink-0" />
                        <span className="text-white text-opacity-90">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="py-20 bg-gray-50">
  <div className="w-11/12 mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Customer Journey
      </h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        From discovery to delivery - a seamless, five-step experience.
      </p>
      <div className="h-1 w-24 bg-blue-600 rounded-full mx-auto mt-6"></div>
    </div>

    {/* (Grid for Steps) */}
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* step : 1 */}
      <div className="relative group">
        <div className="bg-white rounded-xl shadow-md p-6 text-center h-full flex flex-col items-center border-t-4 border-blue-500">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
            1
          </div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">Browse</h3>
          <p className="text-gray-500 text-sm">Search thousands of books and refine your choice.</p>
        </div>
        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
          <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
        
        {/* step : 2 */}
      <div className="relative group">
        <div className="bg-white rounded-xl shadow-md p-6 text-center h-full flex flex-col items-center border-t-4 border-blue-500">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
            2
          </div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">Review</h3>
          <p className="text-gray-500 text-sm">Check ratings, read reviews, and confirm quality.</p>
        </div>
        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
          <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
            {/* step : 3 */}
      <div className="relative group">
        <div className="bg-white rounded-xl shadow-md p-6 text-center h-full flex flex-col items-center border-t-4 border-blue-500">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
            3
          </div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">Order</h3>
          <p className="text-gray-500 text-sm">Complete the quick and secure checkout process.</p>
        </div>
        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
          <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
            {/* step : 4 */}
      <div className="relative group">
        <div className="bg-white rounded-xl shadow-md p-6 text-center h-full flex flex-col items-center border-t-4 border-blue-500">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
            4
          </div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">Track</h3>
          <p className="text-gray-500 text-sm">Monitor your order's real-time location and status.</p>
        </div>
        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
          <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>

            {/* step : 5 */}
      <div className="relative group">
        <div className="bg-white rounded-xl shadow-md p-6 text-center h-full flex flex-col items-center border-t-4 border-blue-500">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
            5
          </div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">Enjoy</h3>
          <p className="text-gray-500 text-sm">Receive your books and share your valuable feedback.</p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Dashboard Benefits Section */}
      <section className="py-20 bg-background">
        <div className="w-11/12 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Dashboard Advantages
            </h2>
            <p className="text-gray-600 text-lg">
              Powerful tools tailored for each user role
            </p>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dashboardBenefits.map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-10 border-t-4 border-blue-600"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-linear-to-br bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shrink-0">
                    {benefit.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  {benefit.description}
                </p>
                <ul className="space-y-3">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="w-11/12 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Makes BookCourier Unique?
            </h2>
            <p className="text-gray-600 text-lg">
              Industry-leading features designed for your convenience
            </p>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  data-aos="zoom-in"
                  className="bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-10 border-l-4 border-blue-600 hover:border-orange-600 group"
                >
                  <div className="p-4 bg-linear-to-br bg-orange-600 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-background">
        <div className="w-11/12 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg">
              What drives everything we do
            </p>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-10 text-center hover:scale-105 group"
                >
                  <div className="p-4 bg-linear-to-br from-blue-100 to-orange-100 rounded-full w-fit mx-auto mb-6 group-hover:scale-125 transition-transform">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white">
        <div className="w-11/12 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Built With Modern Technology
            </h2>
            <p className="text-gray-600 text-lg">
              Cutting-edge tech stack for reliability and performance
            </p>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-10 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Frontend
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  React with Hooks & Context API
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  Tailwind CSS for responsive design
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  Firebase Authentication
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  React Router for navigation
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-orange-50 to-orange-100 rounded-2xl p-10 border-l-4 border-orange-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Backend</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  Node.js & Express.js server
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  MongoDB for data storage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  JWT for secure authentication
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  RESTful APIs for communication
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     <section className="py-24 bg-gray-100">
      <div className="w-11/12 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-800 tracking-wide mb-10">
              START YOUR READING JOURNEY WITH BOOKCOURIER TODAY!
          </h2>
          <div className="flex justify-center w-[300px] mx-auto">
              <Link
              to={'/books-page'}
                  className="common-btn"
                  
              >
                  Get Started Now
              </Link>
          </div>
      </div>
  </section>

    </div>
  );
};

// Icon components for workflow (since lucide-react might not have exact names)
const SearchIcon = () => <BookOpen className="w-6 h-6" />;
const SelectIcon = () => <Star className="w-6 h-6" />;
const BookingIcon = () => <Clock className="w-6 h-6" />;
const DeliveryIcon = () => <Truck className="w-6 h-6" />;
const EngagementIcon = () => <Heart className="w-6 h-6" />;

export default AboutUs;
