import Header from '../components/Header'
import { motion } from 'framer-motion'
import CustomCursor from '../components/CustomCursor'
import FloatingDock from '../components/FloatingDock/Dock'
import ProjectBox from '../components/Projects/ProjectBox'
import { projects } from '../components/Projects/Projects'

function ProjectsPage() {
  return (
    <div className='mt-4'>
        <CustomCursor/>
        
        <div className=''>
          <Header
        heading="Projects"
        description="This is where ideas got restless, code got colorful, and pixels found a purpose. Will update with latest projects soon."
        className={"w-[250px] sm:w-xl mb-10 relative" }
        />

        </div>
        <div className='flex flex-col gap-2'>
          {
            projects.map((project, idx) => (
              <ProjectBox
              title={project.title}
              description={project.description}
              flowerClass={project.flowerClass}
              bg={project.bg}
              key={idx}
              />
            ))
          }

        </div>

        <FloatingDock/>
    </div>
  )
}

export default ProjectsPage