import * as LucideIcons from "lucide-react";
function SkillBox({ title, bg, icon }) {
  const Icon = LucideIcons[icon] || LucideIcons.Code;
  return (
    <div
      className={
        "w-fit px-2 py-0.5 sm:px-3 sm:py-1 rounded-md text-xs sm:text-sm  text-indigo-950 hover:scale-108 transition-all duration-75 flex h-full justify-center items-center gap-2"
      }
      style={{ backgroundColor: bg }}
    >
      <Icon size={16} color={"white"} strokeWidth={1.5} />
      <h1 className="text-white font-medium">{title}</h1>
    </div>
  );
}

export default SkillBox;
