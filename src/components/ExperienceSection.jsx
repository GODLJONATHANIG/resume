import React from "react";

const experiences = [
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
        <div className="relative mt-12">
          {/* Timeline vertical line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary z-0 sm:left-4 sm:translate-x-0" style={{ minHeight: '100%' }} />
          <div className="flex flex-col gap-24 relative z-10 sm:gap-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex items-center w-full relative min-h-[180px] sm:flex-col sm:items-start sm:min-h-0">
                {/* Card full width on mobile, left on desktop */}
                <div className="w-1/2 flex justify-end pr-8 sm:w-full sm:pr-0 sm:justify-center">
                  <div className="bg-card p-8 rounded-lg shadow-lg max-w-xl w-full sm:pl-8">
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
                {/* Empty right on desktop, hidden on mobile */}
                <div className="w-1/2 sm:hidden" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 