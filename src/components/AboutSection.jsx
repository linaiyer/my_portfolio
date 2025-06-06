import { Briefcase, Brush, Code, Notebook, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative" >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">CS & Political Science @ University of Michigan</h3>

                        <p className="text-muted-foreground">
                            I am focused on using technology to create meaningful social impact. In 2018, I co-founded Code for Nonprofit to help mission-driven organizations access better digital tools. One of our key initiatives, HFNMeditate, supports ongoing research into mental wellness and chronic illness, with early results contributing to an NIH grant proposal.
                        </p>

                        <p className="text-muted-foreground">
                            I am passionate about building tools that foster connection, well-being, and civic engagement. During the pandemic, I co-founded the Student Wellness and Leadership (SWL) Movement to support young adults facing isolation. Since then, SWL has grown into a community platform hosting conferences, wellness events, and peer-led sessions. I am excited to keep exploring how technology can be a force for good.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a
                                href="/Resume2025.pdf"
                                download="My_Resume.pdf"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid gril-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg"> App Development</h4>
                                    <p className="text-muted-foreground">
                                        I develop applications that support research and nonprofit initiatives.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Notebook className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg"> Community-Driven Research</h4>
                                    <p className="text-muted-foreground">
                                        I collaborate on research initiatives that center community needs, such as supporting IRB-approved studies on mental wellness through accessible technology.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg"> Project Management</h4>
                                    <p className="text-muted-foreground">
                                        I lead and co-found initiatives to build supportive, purpose-driven communities through technology.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}