import SubDot from "./SubDot"
import { languages, frameworksAndTools, designTools } from "./Skills"

function SkillRepeat() {
  return (
    <div>
        <SubDot items={languages} heading="Languages"/>
        <SubDot items={frameworksAndTools} heading="Frameworks & Tools"/>
        <SubDot items={designTools} heading="Design Tools"/>
    </div>
  )
}

export default SkillRepeat