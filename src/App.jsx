
import React, { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin } from 'lucide-react';

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Our Mission', href: '#mission' },
    { name: 'Services', href: '#services' },
    { name: 'Get Involved', href: '#get-involved' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.marblism.com/qhtATmSP9XW.webp" 
              alt="BOHH Logo" 
              className="h-10 w-10"
            />
            <span className="font-bold text-xl">Black Orchid Honor House</span>
          </div>
          
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-purple-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 hover:bg-gray-700 rounded transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <section id="home" className="min-h-screen">
      <div className="relative h-screen">
        <img
          src="https://cdn.marblism.com/GHhtLTgO3L4.webp"
          alt="BOHH Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Empowering Lives, Building Stronger Communities
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Black Orchid Honor House is dedicated to dignity-based community support and lasting positive change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#get-involved"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                >
                  Get Involved
                </a>
                <a
                  href="#mission"
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dignity</h3>
              <p className="text-gray-600">Every person deserves respect and honor in their journey.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Building stronger connections through collaborative support.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
              <p className="text-gray-600">Providing resources and opportunities for lasting change.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Mission Page Component
const MissionPage = () => {
  return (
    <section id="mission" className="bg-gray-50 py-16">
      <div className="relative h-96 mb-12">
        <img
          src="https://cdn.marblism.com/GHhtLTgO3L4.webp"
          alt="Mission"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Our Mission & Vision</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mission Statement</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Black Orchid Honor House is committed to empowering individuals and families through dignity-based community support. We believe in honor-based community building that creates lasting positive change through comprehensive programs, resources, and unwavering support.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We envision communities where every person has access to the resources, support, and opportunities they need to thrive with dignity and honor. Through our Radiant Roadmap, we create pathways to empowerment that transform lives and strengthen communities.
          </p>
        </div>

        <div className="bg-purple-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About BOHH</h2>
          <div className="flex flex-col gap-4 text-gray-700">
            <p><strong>Organization:</strong> Black Orchid Honor House</p>
            <p><strong>EIN:</strong> 41-4918606</p>
            <p><strong>501(c)(3) Status:</strong> Currently pending (Application Tracking ID: 280P3KDB)</p>
            <p className="text-sm italic bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
              Black Orchid Honor House is currently seeking 501(c)(3) status. Donations are not yet tax-deductible. Status check milestone: June 24, 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Page Component
const ServicesPage = () => {
  const programs = [
    {
      title: "Community Support Programs",
      description: "Direct assistance and resources for individuals and families in need, including housing support, basic needs assistance, and crisis intervention."
    },
    {
      title: "Empowerment Initiatives",
      description: "Skill-building workshops, educational programs, and mentorship opportunities designed to create lasting positive change."
    },
    {
      title: "Housing Assistance",
      description: "Comprehensive housing support including applications for CDBG programs, with priority for domestic violence survivors and veterans."
    },
    {
      title: "Community Engagement",
      description: "Building stronger communities through collaborative events, volunteer opportunities, and partnership programs."
    }
  ];

  return (
    <section id="services" className="bg-white py-16">
      <div className="relative h-96 mb-12">
        <img
          src="https://cdn.marblism.com/IJelbKWlge8.webp"
          alt="Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Services & Programs</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Radiant Roadmap</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive programs are designed to provide direct empowerment and sustainable support for individuals and families in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-purple-50 rounded-lg p-8 border-l-4 border-purple-600">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Priority Support</h3>
          <p className="text-gray-700">
            BOHH implements a waitlist priority protocol for housing-related programs, with special consideration for domestic violence survivors and veterans. All program applications are reviewed with dignity and confidentiality.
          </p>
        </div>
      </div>
    </section>
  );
};

// Contact Form Component
const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      
      <h3 className="text-2xl font-bold text-gray-900 mb-6">General Inquiry</h3>
      
      <div className="flex flex-col gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          ></textarea>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            required
            className="mt-1"
          />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            I acknowledge the BOHH Privacy Policy and Terms of Service *
          </label>
        </div>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

// Volunteer Form Component
const VolunteerForm = () => {
  return (
    <form
      name="volunteer"
      method="POST"
      data-netlify="true"
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <input type="hidden" name="form-name" value="volunteer" />
      
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Sign-up</h3>
      
      <div className="flex flex-col gap-6">
        <div>
          <label htmlFor="vol-name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="vol-name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="vol-email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="vol-email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
            Skills/Experience *
          </label>
          <textarea
            id="skills"
            name="skills"
            rows="3"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          ></textarea>
        </div>

        <div>
          <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
            Availability *
          </label>
          <select
            id="availability"
            name="availability"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          >
            <option value="">Select availability</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="occasional">Occasional</option>
          </select>
        </div>

        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
            Area of Interest *
          </label>
          <select
            id="interest"
            name="interest"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          >
            <option value="">Select an area</option>
            <option value="community-support">Community Support</option>
            <option value="mentorship">Mentorship</option>
            <option value="events">Event Planning</option>
            <option value="administration">Administrative Support</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="vol-privacy"
            name="privacy"
            required
            className="mt-1"
          />
          <label htmlFor="vol-privacy" className="text-sm text-gray-600">
            I acknowledge the BOHH Privacy Policy and Volunteer Liability Waiver *
          </label>
        </div>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
};

// Get Involved Section
const GetInvolvedSection = () => {
  return (
    <section id="get-involved" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-xl text-gray-600">Join us in building stronger communities</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <VolunteerForm />
          <div className="bg-purple-600 text-white rounded-lg p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Make a Difference</h3>
            <p className="text-lg mb-6">
              Your time and talents can help transform lives in our community. Whether you have a few hours a week or a few hours a month, we have meaningful opportunities for you to contribute.
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Direct community impact</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Flexible scheduling</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Training and support provided</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Join a passionate community</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">We're here to help and answer any questions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          
          <div className="flex flex-col gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-purple-600 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">General Inquiries</p>
                    <a href="mailto:hello@bohh.org" className="text-purple-600 hover:underline">hello@bohh.org</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-purple-600 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Board of Directors</p>
                    <a href="mailto:board@bohh.org" className="text-purple-600 hover:underline">board@bohh.org</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-purple-600 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Compliance & Legal</p>
                    <a href="mailto:compliance@bohh.org" className="text-purple-600 hover:underline">compliance@bohh.org</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-purple-600 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Media Relations</p>
                    <a href="mailto:media@bohh.org" className="text-purple-600 hover:underline">media@bohh.org</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Office Hours</h3>
              <p className="text-gray-700">
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Saturday - Sunday: Closed
              </p>
              <p className="text-sm text-gray-600 mt-4">
                We strive to respond to all inquiries within 24-48 business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Black Orchid Honor House</h3>
            <p className="text-gray-400 mb-4">
              Empowering Lives, Building Stronger Communities
            </p>
            <p className="text-sm text-gray-400">
              EIN: 41-4918606
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#mission" className="text-gray-400 hover:text-white transition-colors">Our Mission</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#get-involved" className="text-gray-400 hover:text-white transition-colors">Get Involved</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="/accessibility" className="text-gray-400 hover:text-white transition-colors">Accessibility Statement</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-4 mb-6">
            <p className="text-sm text-yellow-200">
              <strong>Tax Status Notice:</strong> Black Orchid Honor House is currently seeking 501(c)(3) status. Donations are not yet tax-deductible. Status check milestone: June 24, 2026.
            </p>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Black Orchid Honor House. All rights reserved.</p>
            <p className="mt-2">Designed with the Radiant Honor theme - Empowering, Professional, Welcoming</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HomePage />
      <MissionPage />
      <ServicesPage />
      <GetInvolvedSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
