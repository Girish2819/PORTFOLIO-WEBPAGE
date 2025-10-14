import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { useScrollAnimationWithRef } from "../hooks/useScrollAnimation";

const Contact = () => {
  const [setRef, isVisible] = useScrollAnimationWithRef(0.1, 200);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully! I\'ll get back to you soon.');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please check your connection and try again.');
    }
  };
  return (
    <section id="contact" className="section-padding relative z-30">
      <div ref={setRef} className="container-max relative z-10">
        <div className={`text-center mb-8 xs:mb-12 sm:mb-16 px-2 xs:px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4 sm:mb-6 text-white">
            Connect with me
          </h2>
          <div className="w-16 xs:w-20 sm:w-24 md:w-28 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full mb-3 xs:mb-4 sm:mb-6"></div>
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <div className={`grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-4 xs:p-6 sm:p-8 rounded-2xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 xs:p-6 sm:p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
              
              <div className="space-y-4">
                <a href="mailto:girishranjan71@gmail.com" className="flex items-center gap-3 text-purple-300 hover:text-purple-200 transition-all duration-300 hover:scale-105 bg-white/5 px-4 py-3 rounded-lg border border-purple-500/30 hover:border-purple-400/60">
                  <Mail size={20} />
                  <div>
                    <div className="font-medium">Personal Email</div>
                    <div className="text-sm text-gray-400">girishranjan71@gmail.com</div>
                  </div>
                </a>
                
                <a href="mailto:23cs3025@rgipt.ac.in" className="flex items-center gap-3 text-purple-300 hover:text-purple-200 transition-all duration-300 hover:scale-105 bg-white/5 px-4 py-3 rounded-lg border border-purple-500/30 hover:border-purple-400/60">
                  <Mail size={20} />
                  <div>
                    <div className="font-medium">Academic Email</div>
                    <div className="text-sm text-gray-400">23cs3025@rgipt.ac.in</div>
                  </div>
                </a>
                
                <a href="tel:+918114548249" className="flex items-center gap-3 text-purple-300 hover:text-purple-200 transition-all duration-300 hover:scale-105 bg-white/5 px-4 py-3 rounded-lg border border-purple-500/30 hover:border-purple-400/60">
                  <Phone size={20} />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-gray-400">+91-8114548249</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 xs:p-6 sm:p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Follow me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/Girish2819" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 bg-white/5 p-4 rounded-lg border border-gray-500/30 hover:border-gray-400/60">
                  <Github size={24} />
                  <span className="font-medium">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/girish-ranjan-b00717288" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-white transition-all duration-300 hover:scale-110 bg-white/5 p-4 rounded-lg border border-blue-500/30 hover:border-blue-400/60">
                  <Linkedin size={24} />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
