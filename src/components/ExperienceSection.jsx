import React from "react";

const experiences = [
  {
    title: "Associate Software Engineer - Trainee",
    company: "Mphasis Limited",
    duration: "March 2025 – June 2025",
    description: [
      "Completed advanced training in Unix, Power BI, T-SQL, MongoDB, and Azure, improving deployment efficiency by 30%.",
      "Developed a Hospital Management System using Python and MySQL, cutting patient data errors by 25%.",
      "Created interactive dashboards for retail metrics in Power BI, reducing manual analysis time by 40%.",
      "Streamlined KPI reporting with DAX, eliminating 60% of repetitive tasks and accelerating decisions"
    ]
  },
  {
    title: "Assistant System Engineer - Trainee",
    company: "Tata Consultancy Services",
    duration: "Aug 2024 – Oct 2024",
    description: [
      "Provisioned Windows/Linux servers on Hyper-V for simulated enterprise environments.",
      "Diagnosed and resolved network issues, improving lab system availability by 20%.", 
      "Implemented virtualization strategies and OS maintenance routines to enhance training setups.",
    ]
  },
  {
    title: "Web Developer Intern",
    company: "RedCloud Technologies",
    duration: "April 2024 – August 2024",
    description: [
      "Developed e-commerce websites with Shopify and WordPress, increasing customer interaction by 30%.",
      "Secured transactions via integrated payment gateways and third-party plugins.", 
      "Automated product uploads using custom scripts, saving 10+ hours weekly.",
      "Enhanced UI/UX using data from Google Analytics, lowering bounce rates by 22%."
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>
        <div className="relative flex flex-col items-center">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-primary/40 z-0 transform -translate-x-1/2" />
          <div className="flex flex-col gap-16 w-full">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex md:items-center w-full">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center absolute left-1/2 top-0 z-10 -translate-x-1/2">
                  <span className="w-5 h-5 rounded-full bg-primary border-4 border-white shadow-lg" />
                </div>
                {/* Card */}
                <div className={`w-full md:w-1/2 px-0 md:px-8 ${idx % 2 === 0 ? 'md:pr-16 md:ml-auto' : 'md:pl-16 md:mr-auto'}`} style={{ zIndex: 1 }}>
                  <div className="bg-card p-8 rounded-lg shadow-lg max-w-lg w-full mx-auto">
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <div className="text-lg text-muted-foreground mb-4">{exp.company}</div>
                    <ul className="list-disc pl-5 space-y-2 text-base">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <div className="text-sm text-muted-foreground mt-4">{exp.duration}</div>
                  </div>
                </div>
                {/* Mobile timeline dot and line */}
                <div className="md:hidden flex flex-col items-center mr-4">
                  <div className="w-3 h-3 rounded-full bg-primary mb-2" />
                  <div className="w-1 h-full bg-primary/40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 