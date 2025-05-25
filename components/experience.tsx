import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer (Co-op)",
      company: "Mercari Inc.",
      location: "Boston, MA",
      duration: "Jan 2024 – Aug 2024",
      description:
        "Worked as a full-stack Software Engineer with focus on UI development, gaining exposure to infrastructure and cloud technologies.",
      highlights: [
        "Developed the front-end functionality of mercari.com, a high-traffic e-commerce platform, using Next.JS, ReactJS and JavaScript to enhance user interaction",
        " Increased website traffic and hit rate by 20%, leading to a 15% improvement in feature adoption through A/B testing and targeted rollouts performed using LaunchDarkly ",
        " Led the Seller Cancellation project by utilizing GraphQL queries to fetch backend data to display highcancellation sellers, leading to a 18% reduction in order cancellations",
        "Collaborated with UX designers to translate wireframes and prototypes into pixel-perfect interfaces",
        "Automated CI/CD pipelines with GitHub Actions and Cypress, cutting deployment errors by 25%",
      ],
    },
    {
      title: "Software Engineer II",
      company: "Rakuten",
      location: "Bangalore, India",
      duration: "Sep 2020 – Dec 2022",
      description: "Contributed to front-end and backend development projects and deployment pipelines.",
      highlights: [
        "Built and designed user interface of 'rakuten.com', Utilizing the MERN stack (MongoDB, ExpressJS, ReactJS, and NodeJS) and Redux for state management to ensure a robust and scalable website",
        "Worked on offer display page of each vendor, ensuring user-friendly experience for customers",
        "Designed and implemented REST APIs to improve data retrieval, resulting in easier data access",
        " Implemented intuitive and responsive website interface with ReactJS and SCSS, reducing load time",
        "Improved code quality by enforcing custom ESLint rules, reducing code review issues by 20%",
        "Achievements: Received the Excellence Award in the year 2021 by the department",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Rakuten",
      location: "Bangalore, India",
      duration: "Jul 2020 – Aug 2020",
      description: "Interned with the observability team working on building CI/CD pipelines",
      highlights: [
        "Developed a DevOps CI/CD pipeline using Jenkins and Rundeck, reducing deployment time by 80%",
        "Streamlined the software release process, effectively reducing manual workload by 200 hours yearly",
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
