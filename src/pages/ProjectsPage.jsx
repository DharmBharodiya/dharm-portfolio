import Header from '../components/Header'
import { motion } from 'framer-motion'
import CustomCursor from '../components/CustomCursor'
import FloatingDock from '../components/FloatingDock/Dock'

function ProjectsPage() {
  return (
    <div>
        <CustomCursor/>
        
        <Header
        heading="Projects"
        description="This is where ideas got restless, code got colorful, and pixels found a purpose."
        className={"w-[250px] sm:w-xl mb-10 relative" }
        />

        <FloatingDock/>
    </div>
  )
}

export default ProjectsPage