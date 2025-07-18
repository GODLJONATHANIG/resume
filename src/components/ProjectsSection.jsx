import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Slot Booking For Vehicle Parking",
    description: "Created real-time mobile booking system with visual slot indicators, improving accuracy by 35%.",
    image: "/assets/slot booking.jpg",
    tags: ["Python", "Flutter", "MySQL","Android Studio"],
    githubUrl: "https://github.com/swastik3616/parking-lot-ui",
  },
  {
    id: 2,
    title: "Virtual Assistant Chatbot(JARVIS)",
    description:
      "Built an AI chatbot for text summarization, reminders, email parsing, and weather info.",
    image: "/assets/chatbot.jpg",
    tags: ["HTML/CSS", "Python", "Gemini API"],
    githubUrl: "https://github.com/swastik3616/Jarvis-using-Gemini-API",
  },
  {
    id: 3,
    title: "Hospital Management System",
    description:
      "Built admin panel for hospitals managing patients, doctors, billing, and services.",
    image: "/assets/CLI.png",
    tags: ["Python", "MySQL"],
    githubUrl: "https://github.com/swastik3616/hospital_mgmt",
  },
  {
    id: 4,
    title: "SmartBudget",
    description:
      "SmartBudget is a user-friendly personal finance dashboard that helps individuals track income, monitor expenses, set budgets, visualize spending trends, and achieve savings goals efficiently",
    image: "/assets/SmartBudget.png",
    tags: ["React.Js","Python","Flask","MongoDB"],
    githubUrl: "https://github.com/swastik3616/smartbudget",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-4">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full py-12 min-h-[300px] flex flex-col justify-between"
            >
              <div className="h-48 sm:h-32 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 sm:p-3">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground break-words">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 break-words"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 break-words">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/swastik3616"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};