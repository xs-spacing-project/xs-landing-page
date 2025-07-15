import React from "react";
import { MapPinIcon } from "./components/icons/MapPinIcon";
import { ClockIcon } from "./components/icons/ClockIcon";
import { CardIcon } from "./components/icons/CardIcon";
import {
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
} from "./components/icons/SocialIcons";

export const navLinks = [
  { name: "Features", href: "/#features" },
  { name: "How it Works", href: "/#how-it-works" },
  { name: "About", href: "/#about" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "FAQ", href: "/#faq" },
];

export const featuresData = [
  {
    icon: React.createElement(MapPinIcon),
    title: "Smart Map View",
    description:
      "Visually locate and select the closest parking spots to your destination with our intuitive, real-time map.",
  },
  {
    icon: React.createElement(ClockIcon),
    title: "Live Rush Insights",
    description:
      "Avoid crowds with our unique rush behavior analysis, helping you choose the perfect time for your visit.",
  },
  {
    icon: React.createElement(CardIcon),
    title: "Flexible Booking",
    description:
      "Choose what works for you. Secure your spot with prepaid booking or opt for pay-on-arrival based on demand.",
  },
];

export const howItWorksSteps = [
  {
    number: "01",
    title: "Search Destination",
    description:
      "Enter the name of the temple or religious place you plan to visit.",
    imageUrl:
      "https://www.mindinventory.com/blog/wp-content/uploads/2022/10/car-parking-app.png",
  },
  {
    number: "02",
    title: "View Parking & Rush",
    description:
      "See available parking spots on the map, along with real-time rush information.",
    imageUrl:
      "https://www.mindinventory.com/blog/wp-content/uploads/2022/10/car-parking-app.png",
  },
  {
    number: "03",
    title: "Book Your Spot",
    description:
      "Choose prepaid or postpaid options and confirm your booking in seconds.",
    imageUrl:
      "https://www.mindinventory.com/blog/wp-content/uploads/2022/10/car-parking-app.png",
  },
];

export const testimonialsData = [
  {
    quote:
      "I used to dread trips to the temple because of parking. Xs changed everything. I booked my spot in a minute and the whole experience was so peaceful.",
    name: "Priya Sharma",
    location: "Mumbai",
    avatarUrl: "https://i.pravatar.cc/150?u=priya",
  },
  {
    quote:
      "The live rush feature is a game-changer! We planned our visit during a quiet period and it made a huge difference. Highly recommend this app.",
    name: "Ankit Desai",
    location: "Delhi",
    avatarUrl: "https://i.pravatar.cc/150?u=ankit",
  },
  {
    quote:
      "So simple and effective. I love that I can choose between prepaid and paying at the spot. It gives me flexibility and peace of mind.",
    name: "Sunita Rao",
    location: "Bengaluru",
    avatarUrl: "https://i.pravatar.cc/150?u=sunita",
  },
];

export const faqData = [
  {
    question: "How does the rush indicator work?",
    answer:
      "Our system analyzes historical data and real-time inputs to predict crowd levels. It's represented by simple indicators (Low, Medium, High) to help you choose the best time to visit.",
  },
  {
    question: "Is my prepaid booking guaranteed?",
    answer:
      "Yes, absolutely. When you prepay for a parking spot, it is reserved exclusively for you for the duration of your booking. Simply show your confirmation at the gate.",
  },
  {
    question: "What happens if I'm late for my booking?",
    answer:
      "We offer a grace period for arrivals (typically 30 minutes, but this can vary). We recommend checking the specific parking location's policy in the app. If you anticipate a significant delay, it's best to contact support through the app.",
  },
  {
    question: "Can I cancel a booking?",
    answer:
      "Yes, you can cancel your booking up to a certain time before your scheduled arrival to receive a full refund. The cancellation policy for each parking location is clearly stated before you confirm your booking.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, UPI, and various digital wallets for prepaid bookings. Pay-on-arrival options depend on the facility and may include cash or card payments.",
  },
];

export const socialLinks = [
  { icon: React.createElement(TwitterIcon), href: "#" },
  { icon: React.createElement(InstagramIcon), href: "#" },
  { icon: React.createElement(FacebookIcon), href: "#" },
];

export const footerLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Contact Us", href: "/contact-us" },
];
