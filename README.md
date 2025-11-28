# 🍕 Fast React Pizza - Quick Pizza Ordering App

> A modern, streamlined pizza ordering application built with React, Redux Toolkit, and React Router - no registration required!

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://fast-react-pizzas-navy.vercel.app)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.9-purple)](https://redux-toolkit.js.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com/)

## 📋 Overview

Fast React Pizza is a user-friendly pizza ordering application designed for speed and simplicity. Users can browse a dynamic menu, build their cart, and place orders without the hassle of creating an account or logging in. Just enter your name and start ordering!

Built with modern React patterns and Redux Toolkit for state management, this application demonstrates efficient handling of complex application state, API integration, and responsive design.

**[🚀 Order Pizza Now](https://fast-react-pizzas-navy.vercel.app)**

---

## ✨ Key Features

### 🍕 Smart Menu System
- **Dynamic Menu Loading**: Pizza menu fetched from external API
- **Real-time Availability**: Menu updates reflect current offerings
- **Detailed Information**: Each pizza shows ingredients, price, and availability
- **Sold Out Indicators**: Clear visual feedback for unavailable items
- **Responsive Grid Layout**: Optimized viewing on all device sizes

### 🛒 Shopping Cart Management
- **Add Multiple Pizzas**: Build your order with multiple items
- **Quantity Control**: Increase or decrease pizza quantities
- **Real-time Totals**: Instant price calculations as cart changes
- **Cart Persistence**: Cart state maintained with Redux
- **Remove Items**: Easy deletion of unwanted items
- **Clear Cart**: Remove all items with one click

### 📦 Seamless Ordering Process
- **No Registration Required**: Skip the signup - just enter your name!
- **Simple Checkout**: Name, phone number, and address only
- **GPS Location Support**: Optional geolocation for easier delivery
- **Priority Orders**: Mark orders as priority for 20% extra fee
- **Order Confirmation**: Unique order ID generated for tracking
- **Order Lookup**: Search existing orders by ID

### ⚡ Priority System
- **Pre-order Priority**: Add priority status during checkout
- **Post-order Priority**: Upgrade to priority even after placing order
- **Dynamic Pricing**: Automatic 20% price adjustment for priority orders
- **Visual Indicators**: Clear priority status on order details

### 🎯 User Experience
- **Zero Authentication**: No login, no password, no barriers
- **Fast Loading**: Optimized with Vite for instant page loads
- **Responsive Design**: Seamless experience on mobile, tablet, and desktop
- **Loading States**: Smooth transitions with loading indicators
- **Error Handling**: User-friendly error messages
- **Clean Interface**: Minimal design focused on usability

---

## 🛠 Tech Stack

### Frontend
- **React 18.2** - Modern UI library with hooks
- **Redux Toolkit 2.9** - Efficient state management
  - Redux DevTools integration
  - Async thunks for API calls
  - Slice-based architecture
- **React Router v7** - Client-side routing and navigation
- **Vite 4.4** - Lightning-fast build tool and dev server
- **Tailwind CSS 3.4** - Utility-first styling

### Development Tools
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting with Tailwind plugin
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

### State Management Architecture
- **Redux Store**: Centralized application state
- **Cart Slice**: Shopping cart state and logic
- **User Slice**: User information and preferences
- **Order Slice**: Order placement and tracking
- **Async Thunks**: API integration for menu and orders

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/omidsdgi/fast-react-pizza.git
cd fast-react-pizza
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the application.

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

---

## 📁 Project Structure

```
fast-react-pizza/
├── src/
│   ├── features/           # Feature-based modules
│   │   ├── cart/           # Shopping cart
│   │   │   ├── Cart.jsx
│   │   │   ├── CartItem.jsx
│   │   │   ├── cartSlice.js
│   │   │   └── CartOverview.jsx
│   │   ├── menu/           # Pizza menu
│   │   │   ├── Menu.jsx
│   │   │   └── MenuItem.jsx
│   │   ├── order/          # Order management
│   │   │   ├── CreateOrder.jsx
│   │   │   ├── Order.jsx
│   │   │   └── SearchOrder.jsx
│   │   └── user/           # User management
│   │       ├── Username.jsx
│   │       └── userSlice.js
│   ├── services/           # API services
│   │   └── apiRestaurant.js
│   ├── ui/                 # Reusable components
│   │   ├── Button.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Loader.jsx
│   │   └── Error.jsx
│   ├── utils/              # Helper functions
│   │   └── helpers.js
│   ├── store.js            # Redux store configuration
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── public/                 # Static assets
└── index.html
```

---

## 🎯 Core Functionality

### Redux State Management
The application uses Redux Toolkit with a modular slice architecture:

**Cart Slice**
- Add/remove items from cart
- Update item quantities
- Calculate total price
- Clear entire cart

**User Slice**
- Store username
- Manage user preferences
- Handle geolocation

**Menu State**
- Fetch pizza menu from API
- Handle loading states
- Manage errors

### API Integration
```javascript
// Menu API
GET /menu - Fetch all pizzas

// Order API
POST /order - Create new order
GET /order/:id - Fetch order by ID
PATCH /order/:id - Update order priority
```

### Routing Structure
- `/` - Homepage with username input
- `/menu` - Browse pizza menu
- `/cart` - View shopping cart
- `/order/new` - Create new order
- `/order/:orderId` - View order details

---

## 🎨 Design Patterns

### Component Architecture
- **Feature-based structure**: Code organized by functionality
- **Presentational vs Container**: Separation of UI and logic
- **Custom Hooks**: Reusable stateful logic
- **Compound Components**: Complex UI patterns

### State Management Patterns
- **Redux Toolkit Slices**: Modular state management
- **Async Thunks**: Handling API calls
- **Selector Functions**: Optimized state selection
- **Normalized State**: Efficient data structures

### Performance Optimizations
- **Code Splitting**: Route-based lazy loading
- **Memoization**: Prevent unnecessary re-renders
- **Optimistic Updates**: Instant UI feedback
- **Debouncing**: Controlled API requests

---

## 🔐 Features Deep Dive

### No-Login Philosophy
This app prioritizes speed and simplicity by eliminating authentication:
- No password management
- No email verification
- No session management
- Instant access to ordering
- Privacy-friendly (minimal data collection)

### Priority Order System
Priority orders receive expedited service:
1. Standard order: Regular delivery time
2. Priority order (+20%): Faster preparation and delivery
3. Can be added during checkout or after order placement
4. Price automatically recalculated

### Geolocation Integration
Optional GPS location sharing:
- Browser geolocation API
- One-click address filling
- Improves delivery accuracy
- Fully optional (user consent required)

---

## 📊 Business Logic

### Order Flow
1. **Browse Menu**: View available pizzas from API
2. **Add to Cart**: Select pizzas and quantities
3. **Enter Details**: Provide name, phone, address
4. **Optional Priority**: Choose priority delivery
5. **Place Order**: Submit via POST request
6. **Get Order ID**: Receive unique tracking number
7. **Track Order**: Look up order status anytime

### Pricing System
```
Base Price: Sum of all pizzas in cart
Priority Fee: Base Price × 20% (if priority selected)
Total Price: Base Price + Priority Fee
```

---

## 📈 Future Enhancements

- [ ] **User Accounts** - Save favorite orders and addresses
- [ ] **Payment Integration** - Online payment options
- [ ] **Order History** - View past orders
- [ ] **Real-time Tracking** - Live order status updates
- [ ] **Favorites System** - Quick reorder favorite pizzas
- [ ] **Promotions/Coupons** - Discount code system
- [ ] **Multiple Locations** - Select nearest restaurant
- [ ] **Reviews & Ratings** - Customer feedback on pizzas
- [ ] **Dietary Filters** - Vegetarian, vegan, gluten-free options
- [ ] **Custom Pizzas** - Build your own pizza

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Omid Sadeghi**

- GitHub: [@omidsdgi](https://github.com/omidsdgi)
- Portfolio: [My Portfolio Link](https://my-portfolio-tau-flame-49.vercel.app)
- Email: [omid69sdgi@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=omid69sdgi@gmail.com)

---

## 🔗 Related Projects

Check out my other projects:
- **[The Wild Oasis - Management System](https://github.com/omidsdgi/The-Wild-Oasis-)** - Hotel management dashboard
- **[The Wild Oasis - Guest Website](https://github.com/omidsdgi/the-wild-oasis-website)** - Hotel booking platform

---

## 📝 License

This project is [MIT](LICENSE) licensed.

---

## 🙏 Acknowledgments

- Pizza menu API provider
- Redux Toolkit team for excellent state management tools
- React Router team for seamless navigation
- Tailwind CSS for rapid UI development
- Vite team for blazing-fast build tools

---

## 📸 Screenshots

### Homepage

<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/19c679fb-95f9-4283-80d9-ff8f4374515f" />


### Menu Page

<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/56de1f46-a2d1-4c41-8a2e-c9d1f97ef07b" />



### Shopping Cart
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/44c451c5-4aec-4169-b8ff-df8e7f2c16b5" />


### Order Confirmation
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/eb05be0c-a80b-4b1a-9098-3a844c28fb05" />


---

## 🔗 Links

- **Live Application**: [https://fast-react-pizzas-navy.vercel.app](https://fast-react-pizzas-navy.vercel.app)
- **Repository**: [https://github.com/omidsdgi/fast-react-pizza](https://github.com/omidsdgi/fast-react-pizza)

---

<div align="center">

**⭐ If you like this project, give it a star! ⭐**

Made with ❤️ and React

*Hungry? Order now!* 🍕

</div>
