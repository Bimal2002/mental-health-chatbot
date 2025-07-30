import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import {
  Brain,
  Heart,
  Phone,
  Star,
  CheckCircle,
  Users,
  Clock,
  TrendingUp,
  Book,
  Headphones,
  Shield,
  Award,
  MessageCircle,
  Play,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import Header from '../components/Header';

const resources = [
  {
    title: "Understanding Mental Health",
    description:
      "Comprehensive guide to mental health fundamentals, self-care strategies, and building emotional resilience.",
    link: "https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response",
    icon: <Brain className="w-6 h-6" />,
    category: "Education",
    readTime: "8 min read",
    color: "bg-blue-500",
  },
  {
    title: "Mindfulness & Meditation",
    description:
      "Learn evidence-based mindfulness techniques to reduce stress, improve focus, and enhance well-being.",
    link: "https://www.mindful.org/what-is-mindfulness/",
    icon: <Heart className="w-6 h-6" />,
    category: "Practice",
    readTime: "12 min read",
    color: "bg-pink-500",
  },
  {
    title: "Guided Audio Sessions",
    description:
      "Calming meditation sessions, breathing exercises, and sleep stories for all experience levels.",
    link: "https://www.youtube.com/watch?v=inpok4MKVLM",
    icon: <Headphones className="w-6 h-6" />,
    category: "Audio",
    readTime: "5-30 min",
    color: "bg-green-500",
  },
  {
    title: "Crisis Support Resources",
    description:
      "Immediate help and professional support networks available 24/7 across India.",
    link: "https://www.vandrevalafoundation.com/helpline",
    icon: <Phone className="w-6 h-6" />,
    category: "Emergency",
    readTime: "Quick access",
    color: "bg-red-500",
  },
  {
    title: "Community Support",
    description:
      "Connect with others on similar journeys through peer support groups and forums.",
    link: "https://www.mindsfoundation.org/resources",
    icon: <Users className="w-6 h-6" />,
    category: "Community",
    readTime: "Browse",
    color: "bg-purple-500",
  },
  {
    title: "Daily Wellness Tools",
    description:
      "Practical exercises, mood tracking, and personalized wellness recommendations.",
    link: "#",
    icon: <TrendingUp className="w-6 h-6" />,
    category: "Tools",
    readTime: "Interactive",
    color: "bg-orange-500",
  },
];

const emergencyContacts = [
  {
    name: "KIRAN - National Mental Health Helpline",
    number: "1800-599-0019",
    directNumber: "9152987821",
    link: "tel:9152987821",
    desc: "India's premier 24x7 mental health helpline providing immediate crisis intervention and emotional support.",
    available: "24x7 Free",
    type: "National",
  },
  {
    name: "Vandrevala Foundation",
    number: "9999666555",
    link: "https://www.vandrevalafoundation.com/helpline",
    desc: "Comprehensive emotional crisis support with trained counselors and multilingual assistance.",
    available: "24x7 Free",
    type: "Crisis Support",
  },
  {
    name: "SNEHA - Suicide Prevention",
    number: "044-24640050",
    link: "https://www.snehaindia.org/contact-us",
    desc: "Specialized suicide prevention helpline with immediate intervention and follow-up care.",
    available: "24x7",
    type: "Prevention",
  },
  {
    name: "iCALL - Psychological Support",
    number: "9152987821",
    link: "https://icallhelpline.org/",
    desc: "Professional psychological first aid and counseling services by trained volunteers.",
    available: "Mon-Sat 8AM-10PM",
    type: "Counseling",
  },
];

const features = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "AI-Powered Conversations",
    description:
      "Engage with an empathetic AI trained specifically for mental health support and mindfulness guidance.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Complete Privacy",
    description:
      "Your conversations are encrypted and private. We never store personal information or share your data.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Available 24/7",
    description:
      "Get support whenever you need it. MindfulBot is always here to listen and provide guidance.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Evidence-Based Techniques",
    description:
      "All recommendations are based on proven therapeutic approaches like CBT, DBT, and mindfulness practices.",
  },
];

const testimonials = [
  {
    name: "Priya S.",
    location: "Mumbai",
    text: "MindfulBot helped me develop healthy coping strategies during a difficult time. The personalized guidance made all the difference.",
    rating: 5,
  },
  {
    name: "Rahul K.",
    location: "Bangalore",
    text: "As someone skeptical about AI therapy, I was surprised by how natural and helpful the conversations felt. Highly recommend!",
    rating: 5,
  },
  {
    name: "Anjali M.",
    location: "Delhi",
    text: "The 24/7 availability was crucial for me. Having support during late-night anxiety episodes changed my life.",
    rating: 5,
  },
];

export default function HomePage() {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSeeResults = () => {
    navigate("/progress");
  };

  //   const handleNavigate = (path) => {
  //     console.log(`Navigating to: ${path}`);
  //   };
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Your Mind Matters
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience personalized mental health support with our AI-powered
              companion. Get immediate help, learn mindfulness techniques, and
              build emotional resilience—all in a safe, private environment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => handleNavigate(user ? "/chat" : "/register")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center"
            >
              {user ? "Continue Chatting" : "Start Your Journey"}{" "}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all flex items-center justify-center">
              <Play className="mr-2 w-5 h-5" /> Watch Demo
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span>Trusted by 50,000+ users</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span>4.9/5 rating</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-blue-500 mr-2" />
              <span>100% Private & Secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose MindfulBot?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced AI technology meets compassionate mental health support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50 hover:bg-white"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section
        id="resources"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Curated Mental Health Resources
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Evidence-based content to support your mental wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`${resource.color} p-3 rounded-lg text-white`}
                    >
                      {resource.icon}
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {resource.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {resource.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-medium">
                      {resource.readTime}
                    </span>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Explore <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section id="support" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  24/7 Crisis Support
                </h3>
                <p className="text-xl text-gray-600">
                  Immediate professional help is always available. You're never
                  alone in your struggles.
                </p>
              </div>

              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {contact.name}
                        </h4>
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mt-1">
                          {contact.type}
                        </span>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {contact.available}
                      </span>
                    </div>

                    {contact.number && (
                      <a
                        href={contact.link}
                        className="flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg mb-2 transition-colors"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        {contact.number}
                      </a>
                    )}

                    <p className="text-gray-600 text-sm">{contact.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-lg">
                <div className="flex items-center mb-2">
                  <Shield className="w-6 h-6 text-red-500 mr-2" />
                  <h4 className="text-lg font-semibold text-red-800">
                    Crisis Alert
                  </h4>
                </div>
                <p className="text-red-700">
                  If you or someone you know is in immediate danger or having
                  thoughts of self-harm, please reach out for professional help
                  immediately. Every life has value and help is available.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">
                Not Sure Where to Start?
              </h4>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-300" />
                  <span>Take our free mental health assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-300" />
                  <span>Get personalized resource recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-300" />
                  <span>Connect with appropriate support services</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-300" />
                  <span>Access 24/7 AI support for immediate help</span>
                </div>
              </div>
              <button
                onClick={() => navigate("/assessment")}
                className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Take Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Real Stories, Real Impact
            </h3>
            <p className="text-xl text-gray-600">
              Hear from people who found support and healing through MindfulBot
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">MindfulBot</h3>
                  <p className="text-gray-400 text-sm">AI Mental Wellness</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Empowering mental wellness through compassionate AI technology.
                Your journey to better mental health starts here.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mental Health Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Crisis Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 MindfulBot. All rights reserved. | Made with ❤️ for
              mental wellness
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
