import { Mail, MapPin, Linkedin, Send } from "lucide-react";
import { useRef, useState } from "react";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.sendForm(
                "service_8lkimwo",
                "template_fweutlc",
                formRef.current,
                "A1kvuh2xzHZeRSFsh"
            );

            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });

            formRef.current.reset();
        } catch (error) {
            console.error("Email send error:", error);
            toast({
                title: "Failed to send",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Reach out to me if you want to connect!
                </p>

                <div className="bg-card rounded-lg shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a
                                    href="mailto:linaiyer@umich.edu"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    linaiyer@umich.edu
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <p className="text-muted-foreground">Ann Arbor, Michigan</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <div className="flex items-center space-x-3">
                                <h4 className="font-medium">Connect With Me</h4>
                                <a
                                    href="https://www.linkedin.com/in/lina-iyer/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-foreground/80 hover:text-primary transition-colors"
                                >
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                                placeholder="Lina Iyer..."
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                                placeholder="linaiyer@umich.edu"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello, I'd like to talk about..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="cosmic-button w-full flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
