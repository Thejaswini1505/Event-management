// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import Services from "./components/Services";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <HeroSection />
//       <Services />
//       <About />
//       <Contact />
//       <Footer />
//       <Toaster />
//     </Router>
//   );
// };

// export default App;



import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { Toaster } from "react-hot-toast";
import CustomerLogin from "./pages/CustomerLogin";
import EventsList from "./components/EventsList";
import CustomerDashboard from "./pages/CustomerDashboard";
import CustomerCreateEvent from "./pages/CustomerCreateEvent";
import CustomerMyEvents from "./pages/CustomerMyEvents";
import Connect from "./components/Connect";
import Review from "./pages/Review";

const App = () => {
  return (
    <Router>
      {/* Toaster must be at root level to catch all toasts */}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<><Navbar /><HeroSection /><Services /><About /><Connect></Connect><Footer /></>} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/customer-login" element={<CustomerLogin/>} />
        <Route path="/dashboard/events" element={<EventsList/>}/>
        <Route path="/customer-dashboard" element={<CustomerDashboard/>} /> 
        <Route path="/customer-create-event" element={<CustomerCreateEvent/>} />
        <Route path="/customer-my-events" element={<CustomerMyEvents/>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/customer/review" element={<Review/>} />
      </Routes>
    </Router>
  );
};


export default App;

// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import Services from "./components/Services";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import AdminLogin from "./pages/AdminLogin";
// import AdminDashboard from "./pages/AdminDashboard";
// import { Toaster } from "react-hot-toast";
// import CustomerLogin from "./pages/CustomerLogin";

// // 🆕 Import customer components
// import EventList from "./components/EventList";
// import MyBookings from "./components/MyBookings";

// const CustomerDashboard = () => {
//   const customerId = localStorage.getItem("customerId"); // retrieved from login

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Customer Dashboard</h2>
//       <EventList customerId={customerId} />
//       <hr />
//       <MyBookings customerId={customerId} />
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Toaster position="top-center" reverseOrder={false} />
//       <Routes>
//         {/* 🌐 Landing page */}
//         <Route path="/" element={
//           <>
//             <Navbar />
//             <HeroSection />
//             <Services />
//             <About />
//             <Contact />
//             <Footer />
//           </>
//         } />

//         {/* 🔐 Admin routes */}
//         <Route path="/admin-login" element={<AdminLogin />} />
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />

//         {/* 👤 Customer routes */}
//         <Route path="/customer-login" element={<CustomerLogin />} />
//         <Route path="/customer-dashboard" element={<CustomerDashboard />} /> {/* 🆕 */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
