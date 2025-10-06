import ProjectCard, { ProjectCardDataType } from 'app/components/ProjectCard/ProjectCard'
import React from 'react'

const projects: ProjectCardDataType[] = [
{
  projectName: "YGB Admin Panel",
  image: "/superkalooki.png",
  description: "YGB Admin Panel is a secure and scalable dashboard designed for managing app content, users, and multimedia assets. It streamlines content creation, updates, and performance tracking with role-based access control and reporting features.",
  link: 'https://admin.ygbversebeta.com',
  startDate: "August 2024",
  endDate: "July 2025",
  techStackUsed: ["React", "TypeScript", "Chart.js", "Redux"],
  rolesAndResponsibilities: ["Built a secure, scalable admin dashboard for content management.", "Enabled CRUD operations for lessons, carousels, and multimedia assets."]
},
{
  projectName: "YGB WebApp",
  image: "/superkalooki.png",
  description: "YGB App is an interactive learning and engagement platform built with modern web technologies. It features a seamless user experience with dynamic content delivery, personalized interactions, and optimized performance. I contributed to its development by focusing on responsive UI design, state management, and scalable architecture, ensuring the app runs smoothly across devices.",
  link: 'https://ygbversebeta.com',
  startDate: "August 2024",
  endDate: "September 2025",
  techStackUsed: ["React", "TypeScript", "AWS", "Cloudfront", "Phaser 3", "Chart.js", "Material UI", "Redux"],
  rolesAndResponsibilities: ["Developed responsive and interactive UI for seamless learning experience.", "Integrated multimedia content (audio, visuals, interactive elements).", "Implemented state management for smooth navigation and performance.", "Ensured cross-device compatibility and optimized app performance."]
},
{
  projectName: "Dice Cricket",
  image: "/superkalooki.png",
  description: "Dice Cricket is a casual probability-based game that simulates cricket using dice rolls. Players experience simplified cricket mechanics—batting, scoring, and winning—through chance-based outcomes combined with engaging visuals and smooth gameplay.",
  link: '',
  startDate: "August 2024",
  endDate: "October 2024",
  techStackUsed: ["Angular", "Firebase", "Phaser 3"],
  rolesAndResponsibilities: ["Designed and developed core game logic simulating cricket through dice mechanics.", "Built interactive UI with smooth animations for an engaging player experience.", "Implemented scoring, win/lose conditions, and probability-based outcomes.", "Optimized gameplay flow for quick, casual sessions across devices.", "Integrated sound effects and visual feedback to enhance user engagement."]
},
{
  projectName: "SuperKalooki",
  image: "/superkalooki.png",
  description: "Kalooki is a card game that is similar to the popular game of Rummy. This rummy variant is a card game that originated in Jamaica. Similar to rummy it can be played with 4 - 7 players.",
  link: 'https://superkalooki.com',
  startDate: "April 2024",
  endDate: "August 2024",
  techStackUsed: ["Angular", "Phaser 3"],
  rolesAndResponsibilities: ["Enhanced user experience by implementing reconnection functionality to maintain seamless app usage.", "Addressed minor bugs and conducted necessary fixes to improve application performance and stability.", "Implemented in-app purchases to offer additional functionalities and monetization options."]
},
{
  projectName: "HVAC-GUI",
  image: "/superkalooki.png",
  description: " A versatile app built with Electron, React, and Babylon.js, designed to streamline fluid flow simulations. Integrated with the OpenFOAM library, it effortlessly handles 3D file inputs and case setup. FlowMaster executes jobs based on defined cases, providing real-time logs, reports, and graphical representations. Once the job completes, it automatically generates comprehensive reports, facilitating efficient analysis and decision-making.",
  link: 'http://18.204.10.110/',
  startDate: "October 2023",
  endDate: "January 2025",
  techStackUsed: ["React", "TypeScript", "Babylon", "Electron", "Redux", "Keygen"],
  rolesAndResponsibilities: ["Created web applications and installation packages that are compatible with both Windows and Linux operating systems.", "Served as a front-end developer, focusing on user interface and experience.", "Managed the execution of background OpenFOAM Python scripts.", "Implemented for both Keygen online and offline licensing.", "Addressed client inquiries and issues related to frontend functionalities.", "Integrated APIs into the development process."]
}
]

const Projects = () => {
  return (
    <div>
      {projects.map((project: ProjectCardDataType, index: number) => (
        <div key={index} className='flex items-center justify-center mt-2 mb-2'>
        <ProjectCard link={project.link} projectName={project.projectName} image={project.image} description={project.description} startDate={project.startDate} endDate={project.endDate} techStackUsed={project.techStackUsed} rolesAndResponsibilities={project.rolesAndResponsibilities} />
        </div>
      ))}
    </div>

  )
}

export default Projects