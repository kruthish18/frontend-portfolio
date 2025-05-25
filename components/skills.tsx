export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "SCSS/CSS3", "HTML5", "Tailwind CSS"],
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "Express.js", "GraphQL", "REST APIs", "Python", "Java"],
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Google Cloud Platform", "Kubernetes", "Docker", "CI/CD", "Jenkins", "GitHub Actions"],
      color: "bg-purple-100 text-purple-800",
    },
    {
      title: "Databases & State Management",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Redux", "Context API", "Zustand"],
      color: "bg-orange-100 text-orange-800",
    },
    {
      title: "Tools & Collaboration",
      skills: ["Git", "Figma", "Jira", "Agile/Scrum", "Wireframing", "Testing (Jest, Cypress)"],
      color: "bg-pink-100 text-pink-800",
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications from frontend to cloud infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${category.color} transition-transform hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
