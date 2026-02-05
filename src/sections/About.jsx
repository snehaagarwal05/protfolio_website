import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Scalable, maintainable code across frontend and backend.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimized APIs, efficient data flow, and fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with designers and developers to ship quality software.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Applying modern frameworks, tools, and engineering best practices",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>I’m a Full Stack Developer and Software Engineer passionate about building reliable, high-performance applications that deliver real value to users. I enjoy working across the entire stack — from designing intuitive frontend interfaces to engineering robust backend systems and APIs.
              </p>
              <p>
                With experience in modern web technologies, I build end-to-end solutions using React, Next.js, TypeScript, and scalable backend architectures. My approach blends clean code principles with thoughtful system design, ensuring applications are not only functional, but maintainable and future-ready.
              </p>
              <p>
                I’ve worked on projects that involve frontend engineering, backend logic, database design, and system integration, giving me a strong understanding of how software behaves as a whole. I focus on writing efficient code, optimizing performance, and designing systems that scale gracefully as requirements grow.

              </p>
              <p>As a software engineer, I value problem-solving, code quality, and continuous learning. I actively explore new tools, improve existing systems, and apply best practices in architecture, security, and performance.</p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to engineer digital products that are elegant on the surface, powerful underneath, and built to last."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
