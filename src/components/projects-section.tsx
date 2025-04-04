import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  const projects = [
    {
      "title": "Docker Run to Compose Converter",
      "description": "This powerful tool automatically converts Docker run commands into fully functional docker-compose.yml files, simplifying container orchestration and deployment workflows. Save time and reduce errors when migrating from simple run commands to production-ready compose configurations.",
      "technologies": ["Docker", "Docker-Compose", "Web Tool", "YAML"],
      "metrics": [
        { "label": "Conversion Time", "value": "Seconds" },
        { "label": "Accuracy", "value": "99%" },
        { "label": "Supported Parameters", "value": "50+" },
        { "label": "Complexity Handling", "value": "Multi-Container" }
      ],
      "liveUrl": "https://www.dockerconvert.xyz/"
    },
    {
      title: "Deploy Ollama, OpenWebUI & DeepSeek-R1 with Docker",
      description:
        "This Docker Compose setup allows you to run powerful AI language models on your own hardware, giving you privacy, control, and flexibility over your AI interactions. ",
      technologies: ["Docker", "Docker-Compose", "Ollama", "OpenWebUI", "GitHub"],
      metrics: [
        { label: "Deployment Time", value: "Few Minutes" },
        { label: "Cost Reduction", value: "100%" },
        { label: "Uptime", value: "99.9%" },
        { label: "Recovery Time", value: "Always Upfront" },
      ],
      githubUrl: "https://github.com/muhammadhabiburrehman/Deploy-any-AI-Model-Locally-with-Docker",
    },
    {
      title: "Master Docker: A Comprehensive Learning-Path",
      description:
        "This course provides a comprehensive, hands-on approach to Docker, covering everything from foundational concepts to advanced techniques. Whether you’re just starting out or looking to deepen your understanding, this course will help you master Docker and apply it in real-world projects.",
      technologies: ["Docker CLI", "Docker Containers", "Docker Images", "Docker Volumes", "Docker Networking", "Docker Compose", "Docker Build"],
      metrics: [
        { label: "Fundamentals Mastery", value: "Containers & Images" },
        { label: "Efficient Deployment", value: "Docker Compose" },
        { label: "Storage & Persistence", value: "Volumes & Mounts" },
        { label: "Security & Optimization", value: "Secrets & Limits" }
    ],
      githubUrl: "https://github.com/muhammadhabiburrehman/Mastering-Docker-A-Comprehensive-Learning-Path",
    },

    {
      title: "Agile Sprint Simulation",
      description:
        "This project simulates a 2-week Agile Sprint to demonstrate the key principles and practices of Agile Development and Scrum. It includes creating and managing a Product Backlog, Sprint Backlog, conducting Sprint Planning, and moving stories through various stages of the Kanban board.",
      technologies: ["GitHub", "ZenHub", "Kanban", "Sprint Planning", "Scrum", "Agile"],
      metrics: [  
        { label: "Sprint Execution", value: "Faster Completion" },  
        { label: "Iterations", value: "More Frequent Releases" },  
        { label: "Task Rework", value: "Reduced Errors" },  
        { label: "Team Collaboration", value: "Improved Coordination" }  
    ],
      githubUrl: "https://github.com/muhammadhabiburrehman/Agile-Sprint-Simulation",
    },

    {
      title:"Deploy Web Application on AWS with Custom VPC Architecture",
      description:
        "This project demonstrates the creation of a custom Amazon Virtual Private Cloud (VPC) with public subnets and the deployment of a Node.js web application on an Amazon EC2 instance. The infrastructure is designed to provide a secure, scalable environment for hosting web applications.",
      technologies: ["AWS VPC", "Internet Gateway", "EC2 Instance", "Route Table", "S3-Bucket"],
      metrics: [  
        { label: "Network Security", value: "Enhanced Isolation" },  
        { label: "Scalability", value: "Auto-Scaling Enabled" },  
        { label: "Latency", value: "Optimized Performance" },  
        { label: "Availability", value: "High Uptime" }  
    ],
      githubUrl: "https://github.com/muhammadhabiburrehman/Deploying-Web-Application-on-AWS-with-Custom-VPC-Architecture",
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-12">
          Projects Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
