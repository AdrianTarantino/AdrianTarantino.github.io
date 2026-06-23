
'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import IconButton from './IconButton'

type GitHubPublicEvent = {
  type: string
  repo?: {
    name?: string
  }
}

const GITHUB_USERNAME = 'AdrianTarantino'

const ProfileContainer = () => {
  const [currentProjectURL, setCurrentProjectURL] = useState('')
  const [currentProjectStatus, setCurrentProjectStatus] = useState('Checking GitHub...')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public`)

        if (!response.ok) {
          throw new Error(`GitHub request failed with status ${response.status}`)
        }

        const result = await response.json() as GitHubPublicEvent[]
        const latestPushEvent = result.find((event) => event.type === 'PushEvent' && event.repo?.name)
        const repoName = latestPushEvent?.repo?.name

        if (repoName) {
          setCurrentProjectURL(`https://github.com/${repoName}`)
        } else {
          setCurrentProjectStatus('No recent public commit found.')
        }
      } catch (error) {
        console.error('Error fetching data:', error)
        setCurrentProjectStatus('Unable to load GitHub activity.')
      }
    }
    fetchData()
  }, [])
  return (
    <div className="hero h-svh w-full md:bg-base-200 lg:bg-base-200">
      <div className="hero-content w-full min-w-0 flex-col lg:flex-row">
        <img
          src="/linkedInIcon2.png" 
          alt="LinkedIn Profile Photo"
          className="w-full max-w-sm rounded-lg shadow-2xl" />
        <div className="min-w-0 max-w-full break-words">
          <h1 className="text-4xl font-bold sm:text-5xl">Adrian Tarantino</h1>
          <p className="py-6 break-words">Electrical Engineering Student at The University of Waterloo</p>
          <div className="flex max-w-full flex-wrap items-center gap-5">
            <IconButton imagePath="/githubIcon.png" url="https://github.com/AdrianTheHacker" />
            <IconButton imagePath="/linkedInIcon.png" url="https://www.linkedin.com/in/adriantarantino/" />
            <IconButton imagePath="/mailIcon.png" url="mailto:adrian.tarantino.career@gmail.com" />
            <IconButton imagePath="/youtubeIcon.png" url="https://www.youtube.com/@AdrianTheHacker" />
          </div>
          <h1 className="py-6 text-2xl font-bold break-words [overflow-wrap:anywhere]">
            Currently I'm working on:{' '}
            {currentProjectURL ? (
              <a className="underline" href={currentProjectURL} target="_blank" rel="noreferrer">
                {currentProjectURL.replace(new RegExp(`^${"https://github.com/"}`), "")}
              </a>
            ) : (
              <span>{currentProjectStatus}</span>
            )}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer
