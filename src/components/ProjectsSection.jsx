import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "HFNMeditate",
        description: "Engineered a 4-week in-app meditation program using Flutter, integrating video content, user authentication, and real-time data collection via Firebase Authentication and Realtime Database to support an IRB-approved research study.",
        image: "/projects/CVSApp.png",
        tags: ["Flutter", "Firebase", "Figma"],
        demoUrl: "https://apps.apple.com/us/app/wellnessmeditate/id1608177927",
        githubURL: "https://github.com/linaiyer/cvs_app"
    },
    {
        id: 2,
        title: "HFN For Work",
        description: "Developed and designed a mobile ios and android app using Flutter to streamline participant access to meditation training in a workplace setting.",
        image: "/projects/HFNForWork.png",
        tags: ["Flutter", "Firebase", "Figma"],
        demoUrl: "#",
        githubURL: "https://github.com/linaiyer/hfn_work"
    },
    {
        id: 3,
        title: "YogaLink",
        description: "Engineered a full-stack yoga studio booking platform using Next.js and FastAPI, featuring real-time search, interactive maps, and advanced filtering. Integrated Firebase Authentication and Firestore for secure user login, persistent profile management, and seamless booking experiences, with live yoga studio data sourced from the Yelp Fusion API",
        image: "/projects/YogaLink.png",
        tags: ["Next.js", "Node.js", "React", "FastAPI", "Firebase", "Figma"],
        demoUrl: "#",
        githubURL: "https://github.com/linaiyer/yoga-booking"
    },
    {
        id: 4,
        title: "Behind the Bill",
        description: "Developed an AI-powered React Native mobile app that makes politics accessible by providing personalized news feeds, intelligent policy explanations, and conversational AI politicians to help users understand how legislation impacts their daily lives",
        image: "/projects/BehindtheBill.png",
        tags: ["React Native", "Expo", "TypeScript", "AI/M"],
        demoUrl: "#",
        githubURL: "https://github.com/linaiyer/behind-the-bill"
    },
    {
        id: 5,
        title: "HFN App",
        description: "Developed a mobile research app using Flutter to streamline participant access to meditation training, including video content delivery and trainer matching features. Integrated Firebase Authentication and Realtime Database for secure login and dynamic data handling.",
        image: "/projects/HFNApp.png",
        tags: ["Flutter", "Firebase", "Figma"],
        demoUrl: "https://apps.apple.com/us/app/hfn-app/id6648753906",
        githubURL: "#"
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects that I have been working on!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
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
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                {/* Show icons only when URLs are provided */}
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.demoUrl && project.demoUrl !== "#" && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                rel="noreferrer"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}

                                        {project.githubURL && project.githubURL !== "#" && (
                                            <a
                                                href={project.githubURL}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                rel="noreferrer"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
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
                        href="https://github.com/linaiyer"
                        rel="noreferrer"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};