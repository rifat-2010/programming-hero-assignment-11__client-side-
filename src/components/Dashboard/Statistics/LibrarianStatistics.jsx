import React from "react";
import {
  Book,
  ShoppingCart,
  Edit3,
  Plus,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const LibrarianStatistics = () => {
  // Sample statistics
  const stats = [
    {
      label: "Inventory Management",
      value: "Simplified",
      icon: Book,
      color: "bg-indigo-600",
    },
    {
      label: "Order Tracking",
      value: "Real-time Status",
      icon: Clock,
      color: "bg-yellow-600",
    },
    {
      label: "Visibility Control",
      value: "Publish/ Unpublish",
      icon: CheckCircle,
      color: "bg-green-600",
    },
    {
      label: "Error Reduction",
      value: "Automated Flow",
      icon: AlertCircle,
      color: "bg-red-600",
    },
  ];

  const libraryFeatures = [
    {
      icon: Plus,
      title: "Add New Books",
      description:
        "Upload and add books to the platform with complete details including name, image, author, price and publication status",
      path: "/dashboard/add-book",
    },
    {
      icon: Book,
      title: "Manage My Books",
      description:
        "View all your added books in a table format. Edit book details, update information, and manage publication status",
      path: "/dashboard/my-books",
    },
    {
      icon: ShoppingCart,
      title: "Manage Orders",
      description:
        "Track all orders for your books. Update order status from pending to shipped to delivered, or cancel orders as needed",
      path: "/dashboard/my-orders",
    },
  ];

  const userGuide = [
    {
      step: 1,
      title: "Getting Started",
      items: [
        'Navigate to "Add Book" section to start uploading your books',
        "Fill in all required fields: Book Name, Author, Price, Image",
        "Select publication status: Published (visible to users) or Unpublished (hidden)",
        "Submit the form to add the book to the system",
      ],
    },
    {
      step: 2,
      title: "Managing Your Collection",
      items: [
        'Access "My Books" to view all books you have added',
        "Each book is displayed in a clean table with name, image and action buttons",
        "Use the Edit button to update book information anytime",
        "Change publication status to control book visibility on the platform",
      ],
    },
    {
      step: 3,
      title: "Order Management",
      items: [
        'Visit "Orders" section to see all orders for your books',
        "Monitor order status: Pending → Shipped → Delivered",
        "Update order status using the status dropdown/controls",
        "Cancel orders if necessary (books can be unpublished instead of deleted)",
        "Track customer purchases and manage fulfillment",
      ],
    },
    {
      step: 4,
      title: "Best Practices",
      items: [
        "Keep book information updated with accurate prices and details",
        "Regularly check pending orders and update statuses promptly",
        "Unpublish books instead of deleting them to maintain order history",
        "Use high-quality book cover images for better visibility",
        "Monitor inventory and add new books regularly",
      ],
    },
  ];

  const platformFeatures = [
    {
      title: "Smart Publication Control",
      description:
        "Control visibility of your books with Published/Unpublished status - removed books remain in order history",
    },
    {
      title: "Real-time Order Tracking",
      description:
        "Monitor all orders with real-time status updates and customer information",
    },
    {
      title: "Flexible Book Editing",
      description:
        "Edit any book information after publication - prices, descriptions, and more",
    },
    {
      title: "Order Management",
      description:
        "Handle multiple orders efficiently with status updates and cancellation options",
    },
    {
      title: "Professional Dashboard",
      description:
        "Access all tools in one convenient dashboard with quick navigation",
    },
    {
      title: "Data Security",
      description:
        "All your book and order data is securely stored and protected",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-3">
          Librarian Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Welcome! Manage your books and orders efficiently
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-l-4 border-indigo-500"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-2">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-800">
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Features Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Your Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {libraryFeatures.map((feature, index) => {
            console.log(feature)
            const Icon = feature.icon;
            let bgClass = "";
            if (index === 0)
              bgClass = "bg-linear-to-br from-blue-500 to-blue-600";
            else if (index === 1)
              bgClass = "bg-linear-to-br from-indigo-500 to-indigo-600";
            else bgClass = "bg-linear-to-br from-emerald-500 to-emerald-600";

            return (
              <Link key={index} to={feature.path}>
                <div
                  className={`${bgClass} rounded-xl shadow-lg  p-8 h-full cursor-pointer text-white group`}
                >
                  <div className="mb-4 p-3 bg-white bg-opacity-20 rounded-lg w-fit group-hover:bg-opacity-30 transition-colors">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white text-opacity-90 mb-6">
                    {feature.description}
                  </p>
                  <div className="inline-block bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-sm">
                    Access Now →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* User Guide Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          How to Use the Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {userGuide.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border-t-4 border-indigo-500"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {section.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Features Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-blue-500 hover:border-indigo-500"
            >
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-indigo-600 mr-4 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-2xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
          Begin managing your books today. Add new books, track orders, and grow
          your library on our platform.
        </p>
        <Link
          to="/dashboard/add-book"
          className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-sm"
        >
          Add Your First Book
        </Link>
      </div>

      {/* Footer Info */}
      <div className="mt-12 text-center text-gray-600">
        <p className="text-sm">
          Need help? Navigate through the sections above or check the user guide
          for detailed instructions.
        </p>
      </div>
    </div>
  );
};

export default LibrarianStatistics;
