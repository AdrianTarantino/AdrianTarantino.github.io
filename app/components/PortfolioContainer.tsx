import React from 'react'
import Image from 'next/image'

type PortfolioProject = {
  title: string
  description: string
  imagePath: string
  githubUrl?: string
}

const projects: PortfolioProject[] = [
  {
    title: 'Thruster Control Board',
    description: 'Designed an STM32 based circuit board using Altium Designer for controlling thrusters and interfacing with sensors used for autonomous search and rescue robot for open body water.',
    imagePath: '/uwmtr-control-board-pcb.png',
    githubUrl: 'https://github.com/UWMedTechRobotics/ESC_V1_Firmware_Tests',
  },
  {
    title: 'WiFi Capable Etch-A-Sketch',
    description: 'Firmware and circuit experiments focused on hardware control, sensors, and practical electronics.',
    imagePath: '/githubIcon.png',
    githubUrl: 'https://github.com/AdrianTheHacker/Etch-A-Sketch-Concept',
  },
  {
    title: 'Robotics Prototypes',
    description: 'Mechanical, electrical, and software builds exploring automation and motion-control ideas.',
    imagePath: '/linkedInIcon2.png',
  },
]

const PortfolioContainer = () => {
  return (
    <section id="portfolio" className="bg-base-200 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h2 className="text-4xl font-bold">Portfolio</h2>
          <p className="mt-3 max-w-2xl text-lg">
            A selection of projects I have built while exploring software, electronics, and engineering.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <article key={i} className="card bg-base-100 shadow-xl">
              <figure className="h-56 bg-base-300">
                <Image
                  src={project.imagePath}
                  alt={`${project.title} project preview`}
                  width={640}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p>{project.description}</p>
                {project.githubUrl && (
                  <div className="card-actions justify-end">
                    <a className="btn btn-primary" href={project.githubUrl} target="_blank" rel="noreferrer">
                      View more
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioContainer
