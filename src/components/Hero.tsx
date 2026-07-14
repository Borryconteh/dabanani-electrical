import { ArrowRight, Phone, Lightbulb } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center pt-20 pb-12"
      style={{
        backgroundImage: "url('/images/electrical image decl.jpg')",
        backgroundPosition: 'center 35%',
        backgroundSize: 'cover',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-amber-400">
              <Lightbulb className="w-6 h-6" aria-hidden="true" />
              <span className="uppercase tracking-widest text-sm font-medium">NAWEC Category A Contractor • Since 2001</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tighter text-white">
              Empowering Communities,<br />
              <span className="text-amber-400">Advancing Sustainability.</span>
            </h1>

            <p className="text-lg text-gray-100 max-w-lg">
              Dabanani Electrical Company Ltd is one of The Gambia’s leading electrical engineering, power consulting, and contracting firms. Since our establishment in April 2001.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-black px-10 py-4 rounded-2xl font-semibold text-lg transition-all active:scale-95"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href="tel:+2209537401"
                className="inline-flex items-center justify-center gap-3 border border-white/60 hover:border-white text-white px-8 py-4 rounded-2xl font-semibold transition-all"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                +220 953 7401
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <div className="p-3 rounded-3xl text-center shadow-xl">
              <div className="mx-auto mb-8 w-24 h-24 bg-amber-400/20 rounded-3xl flex items-center justify-center">
                <Lightbulb className="w-20 h-20 text-amber-400" aria-hidden="true" />
              </div>
              <p className="text-amber-400 font-medium">POWERING THE GAMBIA</p>
              <p className="font-display text-6xl font-bold text-white">300+</p>
              <p className="text-gray-300">Villages Electrified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}