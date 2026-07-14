import { useEffect, useRef, useState } from "react";

type Department = "Secretary" | "Administration" | "Finance" | "IT & Systems" | "Procurement" | "Engineering" | "Surveying";

// Pick whichever preset is closest to the photo's own shape — no manual
// cropping needed, the aspect-ratio box does the fitting per-person.
//   "portrait" (4:5)  — passport/headshot-style photos, face fills most of frame
//   "square"   (1:1)  — evenly cropped photos, or when unsure
//   "wide"     (3:2)  — casual half-body photos with more shoulder/background room
type PhotoAspect = "portrait" | "square" | "wide";

const aspectClass: Record<PhotoAspect, string> = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  wide: "aspect-[3/2]",
};

interface TeamMember {
  name: string;
  position: string;
  department: Department;
  experience: string;
  qualification: string;
  image?: string;
  photoAspect?: PhotoAspect;
  isPlaceholder?: boolean;
}

const managingDirector: {
  name: string;
  position: string;
  experience: string;
  qualification: string;
  image?: string;
  photoAspect?: PhotoAspect;
} = {
  name: "Alhagie E.F. Conteh",
  position: "Managing Director",
  experience: "30 Years",
  qualification: "B.Eng & PGD",
  image: "/images/team/Alhagie E.F Conteh.jpeg",
  photoAspect: "square",
};

// NOTE: experience/qualification marked "—" still need real values before
// this goes live. Set `image` + `photoAspect` per person once a photo is
// available; anyone without one automatically keeps the placeholder icon.
const teamMembers: TeamMember[] = [
  {
    name: "Mam Fatou Demba",
    position: "Secretary",
    department: "Secretary",
    experience: "12 Years",
    qualification: "HND",
    image: "/images/team/mamfatou.jpeg",
    photoAspect: "wide",
  },
  {
    name: "Khalid Camara",
    position: "Administrative Officer",
    department: "Administration",
    experience: "3 Years",
    qualification: "BSC",
    image: "/images/team/Khalid.jpeg",
    photoAspect: "wide",
  },
  {
    name: "Awa Conteh",
    position: "Assistant Admin",
    department: "Administration",
    experience: "5 Years",
    qualification: "HND",
    image: "/images/team/awaconteh.jpeg",
    photoAspect: "wide",
  },
  {
    name: "Mariama Barry",
    position: "Finance Director",
    department: "Finance",
    experience: "15 Years",
    qualification: "BSc",
    image: "/images/team/madam.jpeg",
    photoAspect: "wide",
    
  },
    {
    name: "Salifu Conteh",
    position: "Assistant Finance ",
    department: "Finance",
    experience: "15+ Years",
    qualification: "BSc",
   // image: "/images/team/madambarry.jpeg",
    photoAspect: "portrait",
    
  },
  {
    name: "Yunusa Conteh",
    position: "System Administrator",
    department: "IT & Systems",
    experience: "3+ Years",
    qualification: "Diploma in Information Technology ",
    image: "/images/team/yunusa.jpeg",
    photoAspect: "square",

  },
  {
    name: "Dawda Bojang",
    position: "Project Manager",
    department: "Engineering",
    experience: "5 Years",
    qualification: "B-Tech (Electrical Engineering), Minor in Economics",
    image: "/images/team/dawda.jpeg"
    
  },
  {
    name: "Pa Foday Khan",
    position: "Design & Power Engineer",
    department: "Engineering",
    experience: "10 Years",
    qualification: "BSc, HND",
    image: "/images/team/pakhan.jpeg"
  },
  {
    name: "Mariama Saidybah",
    position: "Procurement Officer",
    department: "Procurement",
    experience: "10 Years",
    qualification: "HND,",
    image: "/images/team/Saidybah.jpeg"
  },
  {
    name: "Buba Darboe",
    position: "Surveyor",
    department: "Surveying",
    experience: "10 Years",
    qualification: "HND,",
    image: "/images/team/......jpeg"
  },
 
];

const departmentStyles: Record<Department, string> = {
  Secretary: "bg-dabanani-yellow/20 text-deep-navy",
  Administration: "bg-deep-navy/10 text-deep-navy",
  Finance: "bg-dabanani-green/10 text-dabanani-green",
  "IT & Systems": "bg-dabanani-red/10 text-dabanani-red",
  Procurement: "bg-dabanani-blue/10 text-dabanani-blue",
  Engineering: "bg-gray-200 text-gray-700",
  Surveying: "bg-dabanani-yellow/30 text-dabanani-red",
};

function Photo({ image, name, aspect = "portrait" }: { image?: string; name: string; aspect?: PhotoAspect }) {
  const box = `w-full ${aspectClass[aspect]} bg-gray-200 border-b border-gray-100 overflow-hidden`;

  if (image) {
    return (
      <div className={box}>
        <img src={image} alt={name} className="w-full h-full object-cover object-top" />
      </div>
    );
  }
  return (
    <div className={`${box} flex items-center justify-center`}>
      <div className="text-center">
        <div className="text-5xl sm:text-6xl mb-2" aria-hidden="true">👤</div>
        <p className="text-gray-400 text-xs sm:text-sm">Photo goes here</p>
      </div>
    </div>
  );
}

export default function Team() {
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
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-deep-navy mb-3 md:mb-4">Our Leadership Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Experienced professionals committed to delivering excellence
          </p>
        </div>

        {/* Managing Director spotlight */}
        <div className="max-w-md mx-auto mb-14 md:mb-16">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-b-4 border-dabanani-yellow">
            <Photo image={managingDirector.image} name={managingDirector.name} aspect={managingDirector.photoAspect} />
            <div className="p-6 sm:p-8 text-center">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 bg-dabanani-red/10 text-dabanani-red uppercase tracking-wide">
                Leadership
              </span>
              <h3 className="font-display font-bold text-2xl text-deep-navy">{managingDirector.name}</h3>
              <p className="text-dabanani-red font-medium mt-1">{managingDirector.position}</p>
              <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600 space-y-1">
                <p><span className="font-medium">Experience:</span> {managingDirector.experience}</p>
                <p><span className="font-medium">Qualification:</span> {managingDirector.qualification}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Department team — mobile carousel, grid from md+ */}
        <div
          ref={scrollRef}
          className="carousel-container flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="carousel-card md:w-auto flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group card"
            >
              <Photo image={member.image} name={member.name} aspect={member.photoAspect} />
              <div className="p-6 flex flex-col grow">
                <span className={`inline-block self-start px-3 py-1 text-xs font-semibold rounded-full mb-3 ${departmentStyles[member.department]}`}>
                  {member.department}
                </span>
                <h3 className="font-display font-bold text-xl text-deep-navy">
                  {member.name}
                  {member.isPlaceholder && (
                    <span className="block text-xs font-normal text-gray-400 mt-1">Photo to be added</span>
                  )}
                </h3>
                <p className="text-dabanani-red font-medium mt-1">{member.position}</p>

                <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600 space-y-1 'mt-4'">
                  <p><span className="font-medium">Experience:</span> {member.experience}</p>
                  <p><span className="font-medium">Qualification:</span> {member.qualification}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot pagination — mobile carousel only */}
        <div
          className="flex md:hidden justify-center items-center gap-2 mt-6"
          role="tablist"
          aria-label="Team member slides"
        >
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to team member ${index + 1} of ${teamMembers.length}`}
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
