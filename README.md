# BookCourier – Library-to-Home Delivery System

## 📚 Project Overview

**BookCourier** is a modern, user-friendly library delivery management system designed to revolutionize how people access books. Our platform enables students, researchers, and general readers to request book pickups or deliveries from nearby libraries without the need for physical visits. By connecting users with libraries and streamlining the book delivery process, BookCourier makes book borrowing and returning more convenient and accessible than ever.

## 🎯 Problem & Solution

**Problem:** Busy individuals often struggle to visit libraries during operating hours, and managing book returns can be inconvenient, especially for those with limited mobility or tight schedules.

**Solution:** BookCourier provides a seamless digital platform where users can browse books, request deliveries, track shipments, and manage their library interactions—all from their homes. Our role-based system ensures efficient management across multiple user types (customers, librarians, and administrators).

## 🌐 Live Website

**[Visit BookCourier](https://bookcourier.netlify.app/)**

---

## ✨ Key Features

- **User-Friendly Book Browsing:** Search, filter, and discover books with detailed information and reviews
- **Request Book Delivery:** Easily request books for delivery from nearby libraries
- **Wishlist Management:** Save books for future reference and requests
- **Order Tracking:** Real-time tracking of your book delivery orders
- **User Dashboard:** Personalized profile and order history management
- **Role-Based Access:** Distinct dashboards and features for customers, librarians, and administrators
- **Review System:** Read and write reviews for books to help the community
- **Secure Authentication:** Firebase-powered authentication with email/password and social login support
- **Real-Time Statistics:** Dashboard analytics for admins and librarians
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices

---

## 👥 User Roles & Capabilities

### 👤 Normal User (Customer)

- Browse and search for available books
- Request book delivery from nearby libraries
- View and manage their orders
- Create and manage personal wishlist
- Write and view book reviews
- Track order status in real-time
- Update personal profile information
- View delivery history

### 📖 Librarian

- Manage inventory of books at their library
- Add, update, and delete books from the catalog
- Process and manage customer orders
- Update order status (pending, shipped, delivered)
- View order-related statistics and reports
- Manage library-specific inventory

### 🔐 Admin

- Manage all users in the system (view, edit, delete)
- Change user roles (promote/demote between admin, librarian, and customer)
- View comprehensive platform statistics
- Monitor all orders across the entire system
- Access system-wide analytics and dashboards
- Manage overall platform operations

---

## 🛠 Technology Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v4 with DaisyUI
- **State Management:** React Query (@tanstack/react-query)
- **HTTP Client:** Axios
- **Authentication:** Firebase
- **UI Components:** Lucide React, React Icons
- **Animations:** AOS (Animate On Scroll), React Simple Typewriter
- **Maps & Location:** Leaflet, React Leaflet
- **Loading States:** React Spinners
- **Notifications:** React Toastify
- **Code Quality:** ESLint

---

## 📦 NPM Packages Used

| Package                   | Version     | Purpose                           |
| ------------------------- | ----------- | --------------------------------- |
| `react`                   | ^19.2.0     | Core React library                |
| `react-dom`               | ^19.2.0     | React DOM rendering               |
| `react-router-dom`        | ^7.9.6      | Client-side routing               |
| `tailwindcss`             | ^4.1.17     | Utility-first CSS framework       |
| `daisyui`                 | ^5.5.5      | Component library for Tailwind    |
| `axios`                   | ^1.13.2     | HTTP requests to API              |
| `firebase`                | ^12.6.0     | Authentication & backend services |
| `@tanstack/react-query`   | ^5.90.12    | Data fetching & caching           |
| `react-leaflet`           | ^5.0.0-rc.2 | Interactive maps                  |
| `leaflet`                 | ^1.9.4      | Mapping library                   |
| `lucide-react`            | ^0.556.0    | Icon library                      |
| `react-icons`             | ^5.5.0      | Additional icon sets              |
| `react-toastify`          | ^11.0.5     | Toast notifications               |
| `react-spinners`          | ^0.17.0     | Loading spinners                  |
| `aos`                     | ^2.3.4      | Scroll animations                 |
| `react-simple-typewriter` | ^5.0.1      | Typewriter text effects           |
| `@headlessui/react`       | ^2.2.9      | Accessible UI components          |

---

## 🚀 How to Run the Project Locally

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd __Client-Side
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env.local` file in the root directory
   - Add the required Firebase configuration variables

   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will open at `http://localhost:5173`

5. **Build for production:**

   ```bash
   npm run build
   ```

6. **Preview production build:**
   ```bash
   npm run preview
   ```

### Linting

To check code quality:

```bash
npm run lint
```

---

## 📝 Conclusion

BookCourier revolutionizes the library experience by bringing books directly to your doorstep. With its intuitive interface, secure authentication, and comprehensive role-based system, it serves as a complete solution for modern library management and book delivery. Whether you're a casual reader, a student, a librarian, or a platform administrator, BookCourier provides the tools and features needed to make book lending and borrowing effortless and enjoyable.

**Start exploring today at [https://bookcourier.netlify.app/](https://bookcourier.netlify.app/)**
