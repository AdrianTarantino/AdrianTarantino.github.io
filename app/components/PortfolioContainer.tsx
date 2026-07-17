'use client'

import React, { useState } from 'react'
import Image from 'next/image'

type PortfolioProject = {
  title: string
  description: string
  imagePath: string[]
  githubUrl?: string
}

const projects: PortfolioProject[] = [
  {
    title: 'Thruster Control Board',
    description: 'Designed an STM32 based circuit board using Altium Designer for controlling thrusters and interfacing with sensors used for autonomous search and rescue robot for open body water.',
    imagePath: ['/uwmtr-control-board-pcb.png'],
    githubUrl: 'https://github.com/UWMedTechRobotics/uwmtr-thruster-control-board',
  },
  {
    title: 'WiFi Capable Etch-A-Sketch',
    description: 'Etch-A-Sketch with WiFi module for IoT integration and E-Ink screen for power efficiency.',
    imagePath: [
      '/etchasketch-3d-top.png',
      '/etchasketch-3d-bottom.png',
      '/etchasketch-layout-bottom.png',
      '/etchasketch-schematic-processor.png',
      '/etchasketch-schematic-system-layout.png',
    ],
    githubUrl: 'https://github.com/AdrianTheHacker/Etch-A-Sketch-Concept',
  },
  // {
  //   title: 'Robotics Prototypes',
  //   description: 'Mechanical, electrical, and software builds exploring automation and motion-control ideas.',
  //   imagePath: ['/linkedInIcon2.png'],
  // },
]

const ProjectImageCarousel = ({ project }: { project: PortfolioProject }) => {
  const [activeImage, setActiveImage] = useState(0)
  const hasMultipleImages = project.imagePath.length > 1

  const showPreviousImage = () => {
    setActiveImage((currentImage) =>
      currentImage === 0 ? project.imagePath.length - 1 : currentImage - 1,
    )
  }

  const showNextImage = () => {
    setActiveImage((currentImage) =>
      currentImage === project.imagePath.length - 1 ? 0 : currentImage + 1,
    )
  }

  return (
    <figure className="relative h-56 overflow-hidden bg-base-300">
      {project.imagePath.map((imagePath, imageIndex) => (
        <Image
          key={imagePath}
          src={imagePath}
          alt={`${project.title} project preview ${imageIndex + 1}`}
          width={640}
          height={360}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            imageIndex === activeImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {hasMultipleImages && (
        <>
          <button
            type="button"
            aria-label={`Show previous ${project.title} image`}
            className="btn btn-circle btn-sm absolute left-3 top-1/2 -translate-y-1/2"
            onClick={showPreviousImage}
          >
            {'<'}
          </button>
          <button
            type="button"
            aria-label={`Show next ${project.title} image`}
            className="btn btn-circle btn-sm absolute right-3 top-1/2 -translate-y-1/2"
            onClick={showNextImage}
          >
            {'>'}
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {project.imagePath.map((imagePath, imageIndex) => (
              <button
                key={imagePath}
                type="button"
                aria-label={`Show ${project.title} image ${imageIndex + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  imageIndex === activeImage ? 'bg-primary' : 'bg-base-100/70'
                }`}
                onClick={() => setActiveImage(imageIndex)}
              />
            ))}
          </div>
        </>
      )}
    </figure>
  )
}

const PortfolioContainer = () => {
  return (
    <section id="portfolio" className="bg-base-200 px-6 py-20">
      <div className="mx-auto max-w-6xl min-w-0">
        <div className="mb-10 min-w-0 break-words">
          <h2 className="text-4xl font-bold break-words">Portfolio</h2>
          <p className="mt-3 max-w-2xl text-lg break-words">
            A selection of projects I have built while exploring software, electronics, and engineering.
          </p>
        </div>

        <div className="grid min-w-0 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <article key={i} className="card min-w-0 bg-base-100 shadow-xl">
              <ProjectImageCarousel project={project} />
              <div className="card-body min-w-0 break-words">
                <h3 className="card-title break-words">{project.title}</h3>
                <p className="break-words">{project.description}</p>
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
