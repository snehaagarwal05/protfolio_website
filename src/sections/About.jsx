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
              <p>I’m a Computer Science & Engineering student with hands-on experience in full-stack web development. I enjoy building complete, real-world applications — from clean frontend interfaces to scalable backend systems.
              </p>
              <p>
                I’ve worked on multiple projects involving frontend development, backend logic, database design, and API integration. I’m comfortable working with React, JavaScript, Node.js, Express, and databases, and I focus on writing clean, readable, and efficient code.
              </p>
              <p>
                Along with development, I have a strong understanding of core CSE subjects including Data Structures & Algorithms, DBMS, Operating Systems, and Computer Networks. This helps me design better systems and understand how applications work under the hood.

              </p>
              <p>I’m passionate about problem-solving, learning new technologies, and improving my skills through practical projects. I aim to build applications that are reliable, maintainable, and scalable as requirements grow.</p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Strong fundamentals, practical experience, and a mindset to keep improving
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
