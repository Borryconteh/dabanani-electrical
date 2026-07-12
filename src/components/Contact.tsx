import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Ready to power your next project? Let's discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-400">+220 437 7304 / 229 0222 / 394 3176</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400">aefconteh@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <p className="font-medium">Office Address</p>
                    <p className="text-gray-400 leading-relaxed">
                      Mamadi Manjang Highway,<br />
                      Kanifing, P.O. Box 2390,<br />
                      Serrekunda, The Gambia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Single WhatsApp Button */}
            <a 
              href="https://wa.me/2204377304" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-semibold transition-colors w-full lg:w-auto justify-center"
            >
              💬 Chat with us on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            
            <form className="space-y-5">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <textarea 
                placeholder="Tell us about your project..." 
                rows={5}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}