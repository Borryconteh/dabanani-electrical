import { useEffect, useRef, useState } from "react";
import {
  Activity,
  Bolt,
  Cable,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  HardHat,
  Settings,
  Sun,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Electrical System Design",
    description:
      "Comprehensive engineering and design of electrical systems for large-scale projects and infrastructure.",
    icon: Activity,
  },
  {
    title: "Procurement & Supply",
    description:
      "Sourcing and supplying high-quality electrical equipment, transformers, and materials.",
    icon: Settings,
  },
  {
    title: "Power Distribution",
    description: "Construction of power distribution poles, substations, and network expansion.",
    icon: Cable,
  },
  {
    title: "Infrastructure Installation",
    description:
      "Installation of comprehensive electrical infrastructure for housing estates and facilities.",
    icon: Bolt,
  },
  {
    title: "Project Management",
    description:
      "Expert technical consultancy and end-to-end management of electrification projects.",
    icon: ClipboardCheck,
  },
  {
    title: "Metering Solutions",
    description:
      "Deployment of pre-paid and conventional metering systems for residential and commercial clients.",
    icon: HardHat,
  },
  {
    title: "Preventive Maintenance",
    description:
      "Corrective and preventive maintenance services to ensure uninterrupted power supply.",
    icon: Wrench,
  },
  {
    title: "Renewable Energy",
    description:
      "Implementation of solar and sustainable energy solutions to power a greener future.",
    icon: Sun,
  },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const updateScrollState = () => {
      const { scrollLeft, clientWidth, scrollWidth } = container;
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
      setCanScrollPrev(scrollLeft > 8);
      setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 8);
    };

    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    updateScrollState();

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
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

  function scrollByDirection(direction: "prev" | "next") {
    const nextIndex =
      direction === "prev"
        ? Math.max(0, activeIndex - 1)
        : Math.min(services.length - 1, activeIndex + 1);
    scrollToCard(nextIndex);
  }

  return (
    <section id="services" className="relative bg-cream py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="mb-3 flex items-center justify-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-dabanani-red sm:text-base">
            <span className="inline-block h-1 w-8 bg-dabanani-red" aria-hidden="true" />
            Our Services
            <span className="inline-block h-1 w-8 bg-dabanani-red" aria-hidden="true" />
          </h2>
          <h3 className="mb-4 font-display text-3xl font-bold text-deep-navy sm:text-4xl md:text-5xl">What We Do</h3>
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
            Delivering excellence in electrical engineering, construction, and consultancy across The Gambia.
          </p>
        </div>

        {/* Mobile (<768px): swipeable carousel. md: 2-col grid. lg+: 4-col grid. */}
        <div className="relative md:static">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-cream to-transparent sm:w-12 md:hidden"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-cream to-transparent sm:w-12 md:hidden"
            aria-hidden="true"
          />

          <div className="mb-4 flex items-center justify-between md:hidden">
            <p className="text-sm font-medium text-gray-500">
              {activeIndex + 1} / {services.length}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollByDirection("prev")}
                disabled={!canScrollPrev}
                aria-label="Previous service"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-deep-navy shadow-sm transition-colors enabled:hover:border-dabanani-red enabled:hover:text-dabanani-red disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollByDirection("next")}
                disabled={!canScrollNext}
                aria-label="Next service"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-deep-navy shadow-sm transition-colors enabled:hover:border-dabanani-red enabled:hover:text-dabanani-red disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="carousel-container flex md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  ref={(el) => {
                   cardRefs.current[index] = el as HTMLDivElement | null;
                  }}
                  className="carousel-card card group relative flex h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl sm:p-8 md:w-auto"
                >
                  <div
                    className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 transform bg-dabanani-green transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gray-50 bg-cream shadow-sm transition-colors duration-300 group-hover:bg-dabanani-yellow">
                    <Icon
                      className="h-8 w-8 text-dabanani-green group-hover:text-deep-navy"
                      aria-hidden="true"
                    />
                  </div>

                  <h4 className="mb-3 font-display text-lg font-bold text-deep-navy sm:text-xl">{service.title}</h4>
                  <p className="grow text-sm leading-relaxed text-gray-600">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Dot pagination — mobile carousel only */}
        <div
          className="mt-6 flex items-center justify-center gap-2 md:hidden"
          role="tablist"
          aria-label="Service slides"
        >
          {services.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToCard(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to service ${index + 1} of ${services.length}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6 bg-dabanani-red" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
