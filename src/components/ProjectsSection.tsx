
import ProjectCard from "./ProjectCard";
import SectionDownArrow from "./SectionDownArrow";

const projects = [
  {
    name: "E-Commerce App",
    description:
      "Multi-role customer/driver/admin app suite with REST APIs, Firebase backend and robust MVC structure.",
    stack: ["Flutter", "Firebase", "PHP", "MySQL", "GetX"],
    github: "https://github.com/atowi7/E-Commerce_app",
    gif: "/ecommerce.gif",
  },
  {
    name: "To-Do App",
    description: "Offline-first, clean UI To-Do app with SQFLite and Provider for state.",
    stack: ["Flutter", "SQFLite", "Provider"],
    github: "https://github.com/atowi7/ToDoApp",
    gif: "/todo.gif",
  },
  {
    name: "Poll System",
    description: "Real-time voting application with secure Firebase backend.",
    stack: ["Flutter", "Firebase"],
    github: "https://github.com/atowi7/pollSystem",
    gif: "/poll.gif",
  },
  {
    name: "InstaKit Service App",
    description: "Order management application with real-time updates and REST API integrations.",
    stack: ["Flutter", "Firebase", "REST API"],
    github: "https://github.com/atowi7/ordering-system-admin",
    gif: "/instakit.gif",
  },
];

const ProjectsSection = () => (
  <section
    id="projects"
    className="w-full max-w-3xl mx-auto mb-12 text-lg bg-card-dark/80 rounded-lg p-9 shadow-glow-blue border-l-4 border-neon-blue backdrop-blur-lg animate-section-3d"
  >
    <h2 className="text-2xl md:text-3xl font-bold glow-blue-text mb-3 text-center">Projects</h2>
    <div className="space-y-3">
      {projects.map(project => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
    <SectionDownArrow nextSectionId="skills" />
  </section>
);

export default ProjectsSection;
