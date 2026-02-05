import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Money Mentor ",
    description:
      "Architected a full-stack financial tracking platform using Next.js (SSR) and Node.js backend services, enabling secure expense ingestion, budgeting workflows, and behavioral insights. Built scalable relational data models, optimized asynchronous service pipelines, and deployed using cloud-based hosting on Render to ensure low-latency performance and production stability",
    image: "/projects/project1.png",
    tags: [" Next.js", "React", "Node.js", "Express", "REST APIs", "SQL", "Render "],
    //link: "https://money-mentor-qsv2.vercel.app/",
    github: "https://github.com/snehaagarwal05/MoneyMentor",
  },
  {
    title: "Admission Management College Portal",
    description:
      "Engineered a role-aware admissions system processing 1000+ applications, leveraging Express-based middleware, authorization policies, and indexed relational queries achieving sub-2s response times. Integrated Razorpay payment processing, automated PDF document generation and verification, and delivered data visualization modules to reduce manual effort and improve operational transparency.",
    image: "/projects/project2.png",
      tags: ["React.js", "React Router ", "Node.js", "Express.js ","MySQL"," Razorpay"," PDFKit"],
    //link: "#",
    github: "https://github.com/snehaagarwal05/College_Admission_Management_Portal/",
  },
  {
    title: "Scientific Publication Management System ",
    description:
      "Developed a secure backend with token-based authentication, credential encryption, and policy-driven access control, supporting multi-role publication workflows. Designed 3NF-compliant relational schemas and service-oriented API modules to manage CRUD pipelines, automate     account lifecycle management, and generate reporting and metrics insights.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js","Express.js"," MySQL", "React", "JWT", "bcrypt", "Axios", "Nodemailer"],
    //link: "#",
    github: "https://github.com/snehaagarwal05/ScientificPublicationManagementSystem",
  },
  
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
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
            Hands-On Tech Projects
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Learning by building real solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/*<a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>*/}
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {/*<ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />*/}
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};
