
'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import IconButton from './IconButton'

const ProfileContainer = () => {
  const [currentProjectName, setCurrentProjectName] = useState("");
  const [currentProjectURL, setCurrentProjectURL] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.github.com/users/AdrianTheHacker/events/public');
        const result = await response.json();
        const projectName = result[0]["repo"]["name"];
        const projectAPIURL = result[0]["repo"]["url"];

        const project_response = await fetch(projectAPIURL);
        const project_result = await project_response.json()
        const projectURL = project_result["html_url"]

        setCurrentProjectName(projectName);
        setCurrentProjectURL(projectURL);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="hero md:bg-base-200 lg:bg-base-200 h-svh w-svw">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/linkedInIcon2.png" 
          alt="LinkedIn Profile Photo"
          className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Adrian Tarantino</h1>
          <p className="py-6">Electrical Engineering Student at The University of Waterloo</p>
          <div className="flex w-auto items-center gap-5">
            <IconButton imagePath="/githubIcon.png" url="https://github.com/AdrianTheHacker" />
            <IconButton imagePath="/linkedInIcon.png" url="https://www.linkedin.com/in/adriantarantino/" />
            <IconButton imagePath="/mailIcon.png" url="mailto:adrian.tarantino.career@gmail.com" />
            <IconButton imagePath="/youtubeIcon.png" url="https://www.youtube.com/@AdrianTheHacker" />
          </div>
          <h1 className="text-balance py-6 text-2xl font-bold">Currently I'm working on: <Link className="underline" href={currentProjectURL} passHref={true}>{currentProjectName}</Link></h1>
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer