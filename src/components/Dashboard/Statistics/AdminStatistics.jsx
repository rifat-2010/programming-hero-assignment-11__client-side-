import React from "react";
import {
  Users,
  DollarSign,
  ShoppingCart,
  BookOpen,
  Settings,
  BarChart3,
  Shield,
  Lock,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Zap,
  Eye,
  Edit2,
  Trash2,
  MoreVertical,
  Edit3,
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminStatistics = () => {
  // Dashboard Statistics
  const stats = [
  {
    label: "User Role Management",
    value: "Admin/ Librarian Switch",
    icon: Users,
    color: "bg-blue-600",
  },
  {
    label: "Book Visibility Control",
    value: "Publish/ Unpublish",
    icon: CheckCircle,
    color: "bg-green-600",
  },
  {
    label: "Book Deletion Authority",
    value: "Deletes Orders Too",
    icon: AlertCircle,
    color: "bg-red-600",
  },
  {
    label: "Profile Access",
    value: "User Profile Same",
    icon: Edit3,
    color: "bg-purple-600",
  },
];

  // Admin Core Features
  const adminFeatures = [
    {
      icon: Users,
      title: "User Management",
      description:
        "Create, update, and manage user accounts. Assign roles (Admin, Librarian, Customer), handle user permissions and access control",
      path: "/dashboard/manage-users",
      bglinear: "bg-linear-to-br from-blue-500 to-blue-600",
    },
    {
      icon: BarChart3,
      title: "View Statistics",
      description:
        "Monitor platform-wide analytics. Track revenue, orders, user growth, and book inventory with comprehensive dashboards",
      path: "/dashboard",
      bglinear: "bg-linear-to-br from-cyan-500 to-cyan-600",
    },
    {
      icon: ShoppingCart,
      title: "Monitor Orders",
      description:
        "Oversee all orders across the platform. View order status, customer details, and order fulfillment metrics",
      path: "/dashboard/orders",
      bglinear: "bg-linear-to-br from-purple-500 to-purple-600",
    },
  ];

  // Admin Responsibilities
  const adminResponsibilities = [
    {
      step: 1,
      title: "System Oversight",
      items: [
        "Monitor all user activities and platform health",
        "Ensure data integrity and security across the system",
        "Manage system backups and data recovery",
        "Monitor server performance and uptime",
      ],
    },
    {
      step: 2,
      title: "User Administration",
      items: [
        "Create and manage user accounts",
        "Assign and modify user roles (Admin, Librarian, Customer)",
        "Handle user account issues and support requests",
        "Manage user permissions and access levels",
      ],
    },
    {
      step: 3,
      title: "Content & Order Management",
      items: [
        "Review and approve book listings",
        "Manage published vs unpublished content",
        "Monitor and manage all orders on the platform",
        "Resolve order-related issues and disputes",
      ],
    },
    {
      step: 4,
      title: "Analytics & Reporting",
      items: [
        "Generate revenue and sales reports",
        "Track user growth and engagement metrics",
        "Monitor librarian performance",
        "Identify trends and provide insights",
      ],
    },
  ];

  // Advanced Admin Features
  const advancedFeatures = [
    {
      title: "Advanced User Management",
      description:
        "Complete control over user accounts, roles, permissions, and access levels across the platform",
    },
    {
      title: "Comprehensive Analytics",
      description:
        "Real-time dashboards showing revenue, orders, users, books, and platform metrics",
    },
    {
      title: "Content Moderation",
      description:
        "Review, approve, and manage all book listings and user-generated content",
    },
    {
      title: "System Configuration",
      description:
        "Configure platform settings, fees, commissions, and business rules",
    },
    {
      title: "Security & Compliance",
      description:
        "Manage security settings, audit logs, and ensure platform compliance",
    },
    {
      title: "Support & Escalation",
      description:
        "Handle customer support escalations and resolve platform issues",
    },
  ];

  // Admin Authority Levels
  const authorityLevels = [
    {
      role: "Full Access",
      description:
        "Complete control over all platform features and user accounts",
      icon: Shield,
      color: "text-red-600",
    },
    {
      role: "Data Management",
      description: "Can view and modify user data and platform content",
      icon: Lock,
      color: "text-orange-600",
    },
    {
      role: "Monitoring",
      description: "Can view analytics and monitor platform activities",
      icon: Eye,
      color: "text-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-slate-800 via-blue-600 to-slate-800 bg-clip-text text-transparent mb-4">
          Admin Dashboard
        </h1>
        <p className="text-xl text-gray-600">
          Complete platform control and management system
        </p>
        <div className="h-1 w-24 bg-linear-to-r from-blue-600 to-cyan-600 rounded-full mt-4"></div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500 group "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-semibold mb-2 uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.color} p-4 rounded-2xl shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Features Section */}
      <div className="mb-14">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Core Management Tools
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Essential features for platform administration and oversight
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {adminFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link key={index} to={feature.path}>
                <div
                  className={`${feature.bglinear} rounded-2xl shadow-xl p-10 h-full cursor-pointer text-white group`}
                >
                  <div className="mb-6 p-4 bg-white bg-opacity-20 rounded-2xl w-fit group-hover:bg-opacity-30 transition-all">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white text-opacity-90 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-block bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-sm">
                    Manage Now
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Admin Responsibilities */}
      <div className="mb-14">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Your Responsibilities & Duties
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Comprehensive guide for admin operations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {adminResponsibilities.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border-t-4 border-blue-500 hover:border-cyan-500"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  {section.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start group">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Capabilities */}
      <div className="mb-14">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Advanced Capabilities
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Powerful tools for complete platform management
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-cyan-500 hover:border-blue-500 group"
            >
              <div className="flex items-start">
                <Zap className="w-7 h-7 text-cyan-600 mr-4 mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Authority & Permissions */}
      <div className="mb-14">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Authority Levels
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Different access levels within the admin system
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {authorityLevels.map((level, index) => {
            const Icon = level.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-cyan-500"
              >
                <div className="mb-4 p-4 bg-linear-to-br from-blue-50 to-cyan-50 rounded-full w-fit">
                  <Icon className={`w-8 h-8 ${level.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {level.role}
                </h3>
                <p className="text-gray-600">{level.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Best Practices Section */}
      <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-3xl shadow-2xl p-12 text-white mb-12">
        <h2 className="text-4xl font-bold mb-6">Admin Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <TrendingUp className="w-6 h-6 mr-4 mt-1 shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2">Regular Monitoring</h3>
              <p className="text-blue-100">
                Check analytics and platform metrics regularly to spot trends
                and issues early
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 mr-4 mt-1 shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2">Security First</h3>
              <p className="text-blue-100">
                Always prioritize data security and implement proper access
                controls
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Users className="w-6 h-6 mr-4 mt-1 shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2">User Support</h3>
              <p className="text-blue-100">
                Respond promptly to user issues and escalations to maintain
                satisfaction
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Settings className="w-6 h-6 mr-4 mt-1 shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2">Keep Systems Updated</h3>
              <p className="text-blue-100">
                Maintain platform updates and apply security patches regularly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Full Platform Control at Your Fingertips
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
          Manage users, monitor analytics, handle orders, and ensure platform
          health with comprehensive admin tools. Everything you need to run a
          successful book marketplace.
        </p>
        <Link
          to="/dashboard/manage-users"
          className="inline-flex items-center bg-linear-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Start Managing <Edit2 className="w-5 h-5 ml-3" />
        </Link>
      </div>

      {/* Footer Info */}
      <div className="mt-14 text-center text-gray-600">
        <p className="text-sm">
          As an admin, you have full responsibility for platform management and
          user satisfaction.
        </p>
      </div>
    </div>
  );
};

export default AdminStatistics;
