import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Github Application",
        description: "A full-featured GitHub-like platform built using the MERN stack — enabling users to manage repositories, follow developers, and explore collaborative coding.",
        image: "/src/assets/projects/githubPic.jpg",
        tags: ["React", "TailwindCSS", "Express.js"],
        demoUrl: "https://mern-github-app-gpc4.onrender.com/",
        githubUrl: "https://github.com/BharathiKannanBabu/mern-github-app",
    },
    {
        id: 2,
        title: "Item Store Application",
        description:
            "An interactive item management system using the MERN stack — supporting CRUD operations, search functionality, and a responsive design for smooth user experience.",
        image: "/src/assets/projects/cttiAppPic.jpg",
        tags: ["React", "Node.js", "MongoDB"],
        demoUrl: "https://ctti-items-stroe.onrender.com/",
        githubUrl: "https://github.com/BharathiKannanBabu/CTTI-Items-stroe",
    },
    {
        id: 3,
        title: "Chat Application",
        description:
            "A modern chat application developed with the MERN stack and Socket.io, providing real-time messaging, user authentication, and sleek UI similar to WhatsApp.",
        image: "/src/assets/projects/chatAppPic.jpg",
        tags: ["React", "Node.js", "Socket.io"],
        demoUrl: "https://fullstack-chat-app2.onrender.com/",
        githubUrl: "https://github.com/BharathiKannanBabu/mern-chat-app",
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1 text-primary"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
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
                        href="https://github.com/BharathiKannanBabu"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;