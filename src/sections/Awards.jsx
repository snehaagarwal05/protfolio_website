import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const awards = [
  {
    title: "🏆 Smart India Hackathon 2025 – Internal Round Selection",
    description:
      "Selected for the Internal Round of Smart India Hackathon 2025 at the University of Calcutta as a member of Team Hack4Change. The selection recognized our innovative problem-solving approach, technical feasibility, and collaborative execution during the internal evaluation process conducted under the Smart India Hackathon initiative by the Ministry of Education, Government of India.",
    image: "/awards/award1.png",

    
  },
  {
    title: "🥈 The Start-Up Hackathon – 2nd Position",
    description:
      "Secured 2nd position in “The Start-Up Hackathon” for presenting an innovative startup idea backed by strong technical execution and impactful problem-solving. The achievement highlights creativity, teamwork, and the ability to translate ideas into practical solutions, earning recognition for outstanding performance among competing teams.",
    image: "/awards/award2.jpeg",


  },
  {
    title: "🏅 CodeRush Weekly – Certificate of Excellence",
    description:
      "Awarded the Certificate of Excellence in CodeRush Weekly for outstanding performance during the 5th week of the competition, organized by Devantra in collaboration with Codeunia. The recognition highlights strong technical proficiency, effective problem-solving skills, and consistent dedication to learning and growth in competitive programming.",
    image: "/awards/award4.jpeg",


  },
  {
    title: "🌍 Hult Prize OnCampus Program 2023–2024 – Runners-Up Team Member",
    description:
      "Recognized as a member of the Runners-Up team in the Hult Prize OnCampus Program 2023–2024 at the University of Calcutta. Participated as part of the team “Foodie Fables”, contributing to the development of a socially impactful startup idea focused on entrepreneurship and sustainable solutions. The program emphasized innovation, teamwork, and real-world problem solving aligned with global social challenges.",
    image: "/awards/award3.jpeg",


  },
  
  
];

export const Awards = () => {
  return (
    <section id="awards" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Hands-On Tech Awards
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Learning by building real solutions
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {award.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {award.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};
