import { Briefcase, Code, User } from "lucide-react";
import resume from "../assets/files/Bharathi Kannan_Full-Stack-Developer_Resume.pdf";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web & Mobile App Developer
            </h3>

            <p className="text-muted-foreground">
              I’m a Full Stack Developer specializing in the MERN stack, with{" "}
              <strong>3 years of hands-on experience</strong> building modern,
              scalable, and user-focused web applications. I work extensively
              with React, Redux, JavaScript (ES6+), Node.js, Express.js, and
              MongoDB to develop complete end-to-end solutions. On the frontend,
              I build responsive and intuitive interfaces with a strong focus on
              performance and user experience. On the backend, I design and
              develop secure, well-structured RESTful APIs, implementing
              authentication, data validation, business logic, and efficient API
              integration.
            </p>

            <p className="text-muted-foreground">
              I’m comfortable working across the entire development lifecycle,
              from designing database schemas and developing APIs to testing,
              debugging, and deployment. I follow clean coding practices,
              modular architecture, proper error handling, and version control
              using Git and GitHub. I also have experience with modern
              development and deployment tools such as Docker and CI/CD
              workflows. I enjoy solving real-world problems, learning new
              technologies, and continuously improving the quality, performance,
              and reliability of the applications I build.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href={resume}
                download="Bharathi Kannan-Full_Stack_Developer-Resume"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
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
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
