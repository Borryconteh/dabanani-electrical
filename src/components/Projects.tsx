import { useEffect, useRef, useState } from "react";
import { Calendar } from "lucide-react";

const projects = [
  {
    title: "Electrification of 300 Villages",
    client: "Government of The Gambia & NAWEC",
    location: "Rural Gambia",
    period: "Sep 2022 - Jun 2025",
    value: "$9.72 Million",
    description: "Design, Supply and Installation for the ECOWAS Regional Electricity Access Project (Phase 1)",
    status: "In Progress"
  },
  {
    title: "Power Supply Extension",
    client: "Various Clients",
    location: "Kanifing & Kombo St. Mary",
    period: "Ongoing",
    value: "Multiple Contracts",
    description: "Construction of power poles, substations and network expansion",
    status: "Ongoing"
  },
  {
    title: "Solar Energy Systems",
    client: "Private & Institutional Clients",
    location: "Greater Banjul Area",
    period: "2024 - 2025",
    value: "Multiple Projects",
    description: "Rooftop and ground-mounted solar installations for homes and institutions",
    status: "In Progress"
  },
  {
    title: "Street Lighting Modernization",
    client: "Kanifing Municipal Council",
    location: "Kanifing Municipality",
    period: "2024",
    value: "Undisclosed",
    description: "Supply and installation of energy-efficient LED street lighting",
    status: "Ongoing"
  },
  {
    title: "Commercial Buildings Electrification",
    client: "Private Developers",
    location: "Serrekunda & Brikama",
    period: "2023 - 2025",
    value: "Multiple Contracts",
    description: "Complete electrical systems for new commercial and residential buildings",
    status: "In Progress"
  },
  {
    title: "Maintenance & Upgrades",
    client: "NAWEC & Corporate Clients",
    location: "The Gambia",
    period: "Ongoing",
    value: "Annual Contracts",
    description: "Preventive and corrective maintenance of electrical infrastructure",
    status: "Ongoing"
  }
];

function statusStyles(status: string) {
  return status === "Ongoing"
    ? "bg-dabanani-green/10 text-dabanani-green"
    : "bg-dabanani-yellow/20 text-deep-navy";
}

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, clientWidth } = container;
      const viewportCenter = scrollLeft + clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });
      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToCard(index: number) {
    const card = cardRefs.current[index];
    const container = scrollRef.current;
    if (!card || !container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    container.scrollTo({
      left: card.offsetLeft - (container.clientWidth - card.clientWidth) / 2,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-deep-navy mb-3 md:mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Delivering reliable electrical infrastructure across The Gambia
          </p>
        </div>

        {/* Mobile (<768px): swipeable carousel. md: 2-col grid. lg+: 3-col grid. */}
        <div
          ref={scrollRef}
          className="carousel-container flex md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="carousel-card md:w-auto flex flex-col h-full bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all card"
            >
              <div className="mb-5 sm:mb-6">
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${statusStyles(project.status)}`}>
                  {project.status}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-deep-navy leading-tight line-clamp-2">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm grow">
                {project.description}
              </p>

              <div className="space-y-3 text-sm border-t border-gray-100 pt-6 mt-auto">
                <div className="flex justify-between gap-4">
                  <span className="text-gray-500 shrink-0">Client</span>
                  <span className="font-medium text-right">{project.client}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-gray-500 shrink-0">Location</span>
                  <span className="font-medium text-right">{project.location}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-gray-500 shrink-0">Period</span>
                  <span className="font-medium flex items-center gap-1 text-right">
                    <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" /> {project.period}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-gray-500 shrink-0">Value</span>
                  <span className="font-semibold text-dabanani-green text-right">{project.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot pagination — mobile carousel only */}
        <div
          className="flex md:hidden justify-center items-center gap-2 mt-6"
          role="tablist"
          aria-label="Project slides"
        >
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to project ${index + 1} of ${projects.length}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6 bg-dabanani-red" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
