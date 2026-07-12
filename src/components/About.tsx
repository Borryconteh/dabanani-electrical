import { CheckCircle } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Permanent Employees', value: '97' },
    { label: 'Casual Labourers', value: '138' },
    { label: 'Years Experience', value: '25+' },
    { label: 'NAWEC Rating', value: 'Cat "A"' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-auto md:h-520px">
              <img 
                src="/images/electrical image decl 2.jpg" 
                alt="Dabanani Electrical technicians working on site" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-green-600/10" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-yellow-400 text-gray-900 p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="font-bold text-4xl mb-1 text-red-600">2001</p>
              <p className="font-semibold">Established on April 10</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-red-600 font-semibold tracking-wide uppercase mb-3 flex items-center gap-2">
              <span className="w-12 h-1 bg-red-600 inline-block"></span> About Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Empowering Communities, Advancing Sustainability</h3>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Dabanani Electrical Company Ltd is a premier power consultant and contractor in The Gambia. Since our establishment in April 2001, we have been dedicated to national development by providing top-tier electrical infrastructure solutions.
            </p>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              As a Category "A" Contractor recognized by NAWEC, we pride ourselves on delivering projects with uncompromising quality, safety, and efficiency.
            </p>

            <ul className="space-y-4 mb-10">
              {['National Development Focus', 'Uncompromising Safety Standards', 'Sustainable Energy Solutions', 'Expert Project Management'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-900">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-red-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}