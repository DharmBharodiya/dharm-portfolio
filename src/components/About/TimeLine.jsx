import React from "react";

const sections = [
  {
    title: "Languages",
    pills: [
      ["Javascript", "bg-yellow-400 text-black"],
      ["Python", "bg-blue-600"],
      ["Java", "bg-red-600"],
    ],
  },
  {
    title: "Frameworks & Tools",
    pills: [
      ["ReactJS", "bg-sky-500"],
      ["NodeJS", "bg-green-700"],
      ["ExpressJS", "bg-purple-500"],
      ["Git", "bg-red-600"],
      ["GitHub", "bg-gray-700"],
      ["PostgreSQL", "bg-indigo-500"],
      ["MongoDB", "bg-green-500"],
    ],
  },
  {
    title: "Design Tools",
    pills: [
      ["Photoshop", "bg-blue-800"],
      ["Illustrator", "bg-orange-500"],
      ["Figma", "bg-green-400 text-black"],
      ["Procreate", "bg-pink-500"],
    ],
  },
];

const SkillsTimeline = () => {
  return (
    <section className="dark:text-white text-black py-10 px-4 sm:px-12 font-sans relative">
      {/* timeline & left padding */}
      <div className="relative pl-16">
        {/* vertical line */}
        <div className="absolute left-22 top-0 bottom-0 w-px  dark:bg-white bg-black" />

        {/* big top dot + headline */}
        <header className="relative mb-10">
          <span className="absolute left-6 -translate-x-1/2 w-4 h-4  dark:bg-white bg-black rounded-full" />
          <h2 className="ml-12 text-4xl italic font-semibold">Skills</h2>
        </header>

        {/* all skill groups */}
        {sections.map(({ title, pills }, idx) => (
          <div key={idx} className="relative mb-8">
            {/* small dot */}
            <span className="absolute left-6 -translate-x-1/2 top-2 w-2.5 h-2.5 dark:bg-white bg-black rounded-full" />

            {/* section title */}
            <h3 className="ml-12 text-lg font-semibold">{title}</h3>

            {/* pill row */}
            <div className="ml-12 mt-3 flex flex-wrap gap-3">
              {pills.map(([text, classes]) => (
                <span
                  key={text}
                  className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${classes}`}
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsTimeline;
