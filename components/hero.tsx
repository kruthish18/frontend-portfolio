"use client"

import { ArrowDown, Github, Linkedin, Mail, Download, Twitter } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">Kruthi Hegde</h1>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-light">Software Developer</p>
            <div className="w-12 h-0.5 bg-blue-600"></div>
          </div>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Building robust, scalable applications with modern technologies. Passionate about creating seamless digital
            experiences from front-end to back-end.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="mailto:hegde.kru@northeastern.edu"
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <Mail size={18} />
            <span className="text-sm font-medium">Email</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1NKa5bsD_MK2m8T3RHmgGVx5slM-KXjgO/view?usp=drive_link"
            download
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
          >
            <Download size={18} />
            <span className="text-sm font-medium">Resume</span>
          </a>
          <a
            href="https://linkedin.com/in/kruthihegde"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Linkedin size={18} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/kruthish18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Github size={18} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="inline-flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors group"
        >
          <span className="text-sm font-medium">Explore my work</span>
          <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}
