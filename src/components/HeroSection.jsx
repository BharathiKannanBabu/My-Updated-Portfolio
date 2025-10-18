import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import heroImage from "../assets/heroImage.png";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-20"
        >
            <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left Side — Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left z-10 space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}Bharathi
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            {" "}Kannan
                        </span>
                    </h1>

                    {/* ✅ Typing Animation for Roles */}
                    <h2 className="text-xl md:text-2xl font-semibold text-primary mt-2 opacity-0 animate-fade-in-delay-3">
                        <Typewriter
                            words={[
                                "Full Stack Developer",
                                "Web Developer",
                                "Application Developer",
                                "Software Developer",
                                "MERN Stack Developer",
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
                        I craft powerful web and mobile applications using the <strong>MERN stack</strong> — MongoDB, Express.js, React, and Node.js — along with <strong>React Native</strong> for cross-platform mobile app development.
                        From building scalable APIs to creating responsive, user-friendly interfaces, I focus on performance, reliability, and clean design that delivers seamless digital experiences across web and mobile platforms.
                    </p>

                    {/* Buttons + Social Links */}
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        {/* View My Work Button */}
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 mt-3 sm:mt-0">
                            <a
                                href="https://github.com/BharathiKannanBabu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full border border-primary hover:bg-primary hover:text-white text-primary transition-all duration-300"
                                title="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/bharathi-kannan-b-121b45249/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full border border-primary hover:bg-primary hover:text-white text-primary transition-all duration-300"
                                title="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>

                            <a
                                href="mailto:bbharathikannan2055@gmail.com"
                                className="p-2 rounded-full border border-primary hover:bg-primary hover:text-white text-primary transition-all duration-300"
                                title="Mail"
                            >
                                <Mail className="w-5 h-5" />
                            </a>

                            <a
                                href="/src/assets/files/Bharathi Kannan-Full_Stack_Developer-Resume.pdf"
                                download="Bharathi Kannan-Full_Stack_DEveloper-Resume"
                                className="p-2 rounded-full border border-primary hover:bg-primary hover:text-white text-primary transition-all duration-300"
                                title="Resume"
                            >
                                <FileText className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side — Profile Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10 animate-fade-in-delay-1">
                    <div className="relative w-[300px] h-[350px] md:w-[350px] md:h-[420px] overflow-hidden rounded-xl border-2 border-primary shadow-[0_0_25px_rgba(99,102,241,0.5)] animate-fade-in-delay-1">
                        <img
                            src={heroImage}
                            alt="Bharathi Kannan"
                            className="w-full h-full object-cover animate-pulse-subtle"
                        />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};

export default HeroSection;
