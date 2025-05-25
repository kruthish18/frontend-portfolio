export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I'm a passionate front-end developer with a Master's in Computer Software Engineering from Northeastern
              University. I specialize in creating beautiful, responsive user interfaces using modern technologies like
              React, Next.js, and TypeScript.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With experience at companies like Mercari and Rakuten, I've contributed to large-scale applications and
              deployment pipelines, always focusing on user experience and code quality.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, I enjoy exploring new design trends, contributing to open-source projects, and
              perfecting my K-pop dance moves (still working on becoming the next BTS backup dancer 💃). I also love
              mentoring fellow developers and staying up-to-date with the latest tech trends.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-900">Master of Science in Computer Software Engineering</p>
                  <p className="text-gray-600">Northeastern University, Boston, MA</p>
                  <p className="text-sm text-gray-500">2023 – 2025 | GPA: 3.9/4.0</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Bachelor of Science in Computer Science</p>
                  <p className="text-gray-600">Bangalore University, India</p>
                  <p className="text-sm text-gray-500">2016 – 2020 | GPA: 3.6/4.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
