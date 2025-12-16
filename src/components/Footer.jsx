import React from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import logo from '../assets/project-logo.png';


const Footer = () => {
  const currentYear = new Date().getFullYear();

    const handleJoin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
    
        console.log(email);
        toast.success("Thanks for Joining Us");
      };


  // Social media links
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: (
        <img src="https://img.icons8.com/?size=96&id=13912&format=png" alt="facbook" />
      ),
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: (
        <img src="https://img.icons8.com/?size=96&id=19318&format=png" alt="yotube" />
      ),
    },
    {
      name: 'X',
      url: 'https://x.com',
      icon: (
        <img src="https://img.icons8.com/?size=96&id=ClbD5JTFM7FA&format=png" alt="x" />
      ),
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: (
        <img src="https://img.icons8.com/?size=160&id=nj0Uj45LGUYh&format=png" alt="Instagram" />
      ),
    },
  ];

  // Quick links
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'All Books', path: '/books-page' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'My Wishlist', path: '/dashboard/my-wishlist' },
  ];

  // Customer service links
  const customerService = [
    { label: 'Contact Us', path: '/signIn-page' },
    { label: 'Track Order', path: '/dashboard/my-orders' },
    { label: 'Order Books', path: '/books-page' },
    { label: 'Profile Info', path: '/profile' },
  ];

  // Company links
  const companyLinks = [
    { label: 'About Us', href: 'https://en.wikipedia.org/wiki/Courier' },
    { label: 'Privacy Policy', href: '#https://en.wikipedia.org/wiki/Privacy' },
    { label: 'Terms & Conditions', href: 'https://en.wikipedia.org/wiki/Term' },
    { label: 'Careers', href: 'https://en.wikipedia.org/wiki/Career' },
  ];

  return (
    <footer className="bg-linear-to-b from-slate-900 to-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="website-logo" className="w-[85px] h-[45px]" />
              <h3 className="text-xl font-bold text-white">BookCourier</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted online bookstore delivering knowledge to your doorstep. Quality books, fast delivery, and exceptional service.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">📧</span>
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:support@bookcourier.com" className="text-orange-400 hover:text-orange-300 transition">
                    support@bookcourier.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">📞</span>
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a href="tel:+1234567890" className="text-orange-400 hover:text-orange-300 transition">
                    +880 1234-567890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">📍</span>
                <div>
                  <p className="text-gray-300">Address</p>
                  <p className="text-gray-400 text-xs">123 Book Street, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-linear-to-r from-indigo-500 to-orange-500 rounded"></span>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-orange-400 transition duration-200 flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-linear-to-r from-purple-500 to-pink-500 rounded"></span>
              Customer Service
            </h4>
            <ul className="space-y-2">
              {customerService.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-orange-400 transition duration-200 flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-linear-to-r from-pink-500 to-red-500 rounded"></span>
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-orange-400 transition duration-200 flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-linear-to-r from-blue-500 to-cyan-500 rounded"></span>
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers and updates</p>
          <form onSubmit={handleJoin}>

              <div className="space-y-2">
              <input
                required
                type="email"
                name='email'
                placeholder="Your email"
                className="w-full px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:border-orange-500 focus:outline-none transition placeholder-gray-500"
              />
              <button className="w-full px-4 py-2 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition duration-200 active:scale-95 cursor-pointer">
                Join Now
              </button>
            </div>
        </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-semibold">Follow Us:</span>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="w-10 h-10 flex items-center justify-center bg-slate-800 text-white rounded-full hover:bg-linear-to-r transition duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright Text */}
          <div className="text-center text-gray-400 text-sm">
            <p>© {currentYear} <span className="font-semibold text-white">BookCourier</span>. All rights reserved.</p>
            <p className="text-xs mt-1">Delivering Books with Excellence</p>
          </div>

          {/* Payment Methods (Optional) */}
          <div className="flex items-center justify-center md:justify-end gap-3">
            <span className="text-gray-400 text-sm font-semibold">Secure Payment:</span>
            <div className="flex gap-2">
              <span className="text-lg">💳</span>
              <span className="text-lg">🏦</span>
              <span className="text-lg">📱</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Scroll Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="cursor-pointer fixed bottom-8 right-8 w-12 h-12 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-110 flex items-center justify-center opacity-0 hover:opacity-100 pointer-events-none hover:pointer-events-auto"
        style={{
          opacity: typeof window !== 'undefined' && window.scrollY > 300 ? 1 : 0,
          pointerEvents: typeof window !== 'undefined' && window.scrollY > 300 ? 'auto' : 'none',
        }}
      >
        ↑
      </button>
    </footer>
  );
};


export default Footer;