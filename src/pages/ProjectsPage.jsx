import Header from '../components/Header'
import { motion } from 'framer-motion'
import CustomCursor from '../components/CustomCursor'
import FloatingDock from '../components/FloatingDock/Dock'
import ProjectBox from '../components/Projects/ProjectBox'
import { projects } from '../components/Projects/Projects'

function ProjectsPage() {
  return (
    <div className='mx-6 mt-8'>
        <CustomCursor/>
        
        <div className=''>
          <Header
        heading="Projects"
        description={`This is where ideas got restless, code got colorful, and pixels found a purpose. \nWill update with latest projects soon.`}
        className={"w-[300px] sm:w-xl mb-6 relative" }
        />

        </div>
        <div className='flex flex-col gap-2'>
          {
            projects.map((project, idx) => (
              <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              >
                <ProjectBox
                title={project.title}
                description={project.description}
                flowerClass={project.flowerClass}
                bg={project.bg}
                src={project.src}
                />
              </motion.div>
            ))
          }

        </div>

        <FloatingDock/>
    </div>
  )
}

export default ProjectsPage