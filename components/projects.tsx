import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Tech-Buddy",
      description:
        "A social platform for developers to learn, connect, and grow. Built using MERN stack with real-time messaging and collaborative features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
      image: "https://drive.google.com/file/d/1sI_n37UTGGQ4rwiIO9gfZFmcmt8icldj/view?usp=drive_link",
      github: "https://github.com/kruthish18/TECH-BUDDY",
      featured: true,
    },
    {
      title: "Tiffin-Tribe",
      description:
        "Streamlined app for home-based tiffin services with customer feedback loop, order management, and payment integration.",
      technologies: ["React Native", "Firebase", "Stripe API", "Redux"],
      image: "https://drive.google.com/file/d/17kEMEREjpXKNtq4-mzto88ANy_XQqRWv/view?usp=drive_link",
      figma: "https://www.figma.com/design/TNuZ3MD728UmVSJmmU4mAq/THE-TIFFIN-TRIBE?node-id=0-1&p=f",
      featured: true,
    },
    {
      title: "Wordgame-Hangman",
      description:
        "A fun terminal-based hangman game built in Java with OOP principles, featuring multiple difficulty levels and score tracking.",
      technologies: ["Java", "JavaFX", "OOP", "File I/O"],
      image: "https://drive.google.com/file/d/1m7HOYN7kFyE3cWrEKhGnZsqd8dtbu7kq/view?usp=drive_link",
      featured: false,
    },
    {
      title: "Northeastern E-Waste Recycling Hub",
      description:
        "A smart campus-wide e-waste management system that simplifies recycling while incentivizing participation. This project was part of Northeastern's Sustainability Innovation Week Competition, where I conducted research, designed the solution, and submitted a pitch video. I made it to Top 5 Candidates.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "https://drive.google.com/file/d/1wgwGCQXBJ9LCm7WgFvRA3iE1GmQUIRqA/view?usp=drive_link",
      presentation: "https://docs.google.com/presentation/d/1IPdXHE6u1v-4cW-5saQYuqoteuv-b6AkxnjMNQD3bDo/edit#slide=id.g2d959ec51c6_2_14",
      youtube: "https://drive.google.com/file/d/1uw8Sx5_9ZMzgtDuikrtsKL0XUE7Epr49/view",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow md:grid md:grid-cols-2"
            >
              <div className="order-2">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="p-8 order-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  {project.featured && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
