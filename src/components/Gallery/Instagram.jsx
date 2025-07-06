import { ArrowUpRightIcon, Globe2Icon, CameraIcon, Brush } from "lucide-react"
import { NavLink } from "react-router-dom"

function Instagram() {
  return (
    <div className="text-white p-6 bg-amber-300 rounded-md">
        <h1 className="text-2xl font-medium mb-3">check out more on</h1>
        <div className="flex">
            <div className="flex pr-6 group">
                <NavLink to="https://www.instagram.com/dharm_bharodiya" target="_blank">
                    <Brush/>
                </NavLink>
                <ArrowUpRightIcon className="relative -bottom-1 group-hover:bottom-1 group-hover:-right-1 group-hover:cursor-pointer transition-all duration-150"/>
            </div>
            <div className="flex group">
                <NavLink to="https://www.instagram.com/456dharm" target="_blank">
                    <CameraIcon/>
                </NavLink>
                <ArrowUpRightIcon className="relative -bottom-1 group-hover:bottom-1 group-hover:-right-1 group-hover:cursor-pointer transition-all duration-150"/>
            </div>
        </div>
    </div>
  )
}

export default Instagram