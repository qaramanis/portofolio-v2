import { ExperienceData } from "./experience-details";

export const experienceData: ExperienceData = {
  webDevelopment: {
    title: "Web Development",
    description:
      "Proficient in building modern, full-stack web applications. Focusing both on pleasant UI/UX and robust, safe backend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "JavaScript",
      "Node.js",
    ],
    projects: [
      {
        name: "Repowersolutions.gr",
        description:
          "Built an interactive webpage for an engineering company demonstrating their services",
      },
      {
        name: "JourneyJolt",
        description:
          "An AI Agent for an optimized trip planning experience, with many customisable features",
      },
      {
        name: "Personal Portfolio",
        description:
          "This very portofolio showcasing my work experience and projects",
      },
    ],
  },
  projectManagement: {
    title: "Project Management",
    description:
      "Experience leading teams and managing projects with agile methodologies and efficient workflow organization.",
    skills: [
      "Agile/Scrum",
      "JIRA",
      "Team Leadership",
      "Requirements Analysis",
      "Risk Management",
    ],
    // projects: [
    //   {
    //     name: "Business Analytics Solution",
    //     description:
    //       "Led team for developing a business analytics solution with visualizations",
    //   },
    //   {
    //     name: "University Project Coordination",
    //     description:
    //       "Managed cross-functional team to deliver project on schedule",
    //   },
    // ],
  },
  dataAnalysis: {
    title: "Data Analysis",
    description:
      "Skilled in analyzing and visualizing data to extract meaningful insights and support decision-making.",
    skills: [
      "Apache Spark",
      "Python",
      "Data Visualization",
      "Statistical Analysis",
      "Tableau",
      "Hadoop",
    ],
    projects: [
      {
        name: "Map-Reduce Alogrithm",
        description:
          "Created a custom map-reduce algorithm to handle Big Data about book authors and their work",
      },
      {
        name: "Market Research Dashboard",
        description:
          "Used Python and Apache Spark to train a Bayesian Classification Model on Amazon reviews, in order to predict user rating ",
      },
    ],
  },
  androidApps: {
    title: "Android Applications",
    description:
      "Developed mobile applications with focus on user experience, performance and responsive design.",
    skills: [
      "Java",
      "Android Studio",
      "XML",
      "Kotlin",
      "UI/UX",
      "RESTful APIs",
    ],
    projects: [
      {
        name: "Recycling Rewards App",
        description:
          "Mobile application with rewards system to encourage recycling",
      },
    ],
  },
  apiDevelopment: {
    title: "API Development",
    description:
      "Experience creating robust, scalable APIs that facilitate communication between different software components.",
    skills: [
      "REST",
      "Node.js",
      "Express",
      "Authentication",
      "PostgreSQL",
      "Supabase",
    ],
    projects: [
      {
        name: "E-commerce API",
        description:
          "Backend service that allows communication between marketplace and e-shop platforms",
      },
    ],
  },
};
