import { Mountain, ArrowRight, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      {/* Call to Action Section */}
      <div className="text-white py-16 px-6 text-center" style={{ backgroundColor: '#1e4620' }}>
        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Adventure?</h2>
        <p className="text-lg text-green-50 mb-6">
          Get equipped with the knowledge and tools you need for a safe hiking experience.
        </p>
        <button 
          onClick={() => scrollToSection('contact')}
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
        >
          Get In Touch <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Main Footer */}
      <div className="text-white py-12 px-6" style={{ backgroundColor: '#1e4620' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8" />
              <span className="text-2xl font-bold">HikeSafe</span>
            </div>
            <p className="text-green-100 text-sm">
              Your trusted companion for safe and memorable hiking adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-green-100 hover:text-white transition text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-green-100 hover:text-white transition text-left">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('safety')} className="text-green-100 hover:text-white transition text-left">
                  Safety Tips
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('resources')} className="text-green-100 hover:text-white transition text-left">
                  Resources
                </button>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-100 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-100 hover:text-white transition"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-100 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-green-700 text-center">
          <p className="text-green-100 text-sm">© 2026 HikeSafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
