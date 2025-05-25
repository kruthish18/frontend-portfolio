import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Product Engineer (Co-op)",
      company: "Mercari Inc.",
      location: "Boston, MA",
      duration: "Jan 2024 – Aug 2024",
      description:
        "Worked as a full-stack Software Engineer with focus on UI development, gaining exposure to infrastructure and cloud technologies.",
      highlights: [
        "Developed responsive React components and backend APIs for e-commerce platform",
        "Collaborated with design and product teams to implement pixel-perfect UI designs",
        "Optimized application performance and improved user experience across the stack",
        "Worked with cloud infrastructure and deployment pipelines",
      ],
    },
    {
      title: "Software Engineer II",
      company: "Rakuten",
      location: "Tokyo, Japan",
      duration: "Sep 2020 – Dec 2022",
      description: "Contributed to front-end and backend development projects and deployment pipelines.",
      highlights: [
        "Built and maintained React-based web applications",
        "Implemented CI/CD pipelines using Jenkins and Docker",
        "Collaborated with cross-functional teams in an agile environment",
        "Mentored junior developers and conducted technical interviews",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Rakuten",
      location: "Tokyo, Japan",
      duration: "Jul 2020 – Aug 2020",
      description: "Interned with the front-end team and contributed to UI enhancements.",
      highlights: [
        "Developed reusable React components for internal tools",
        "Improved application accessibility and mobile responsiveness",
        "Participated in daily standups and sprint planning sessions",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                  <p className="text-lg font-medium text-blue-600 mb-2">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end space-y-1">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin size={14} className="mr-1" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{exp.description}</p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
