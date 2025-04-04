"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences: Experience[] = [
    {
      company: "TechCloud Solutions",
      position: "Senior DevOps Engineer",
      period: "2021 - Present",
      description:
        "Leading DevOps initiatives and cloud infrastructure management for enterprise clients.",
      responsibilities: [
        "Design and implement CI/CD pipelines for microservices architecture",
        "Manage and optimize Kubernetes clusters across multiple cloud providers",
        "Implement infrastructure as code using Terraform and CloudFormation",
        "Lead the migration from monolithic applications to containerized microservices",
      ],
      technologies: [
        "Kubernetes",
        "Docker",
        "Terraform",
        "AWS",
        "GitHub Actions",
        "Prometheus",
        "Grafana",
      ],
      achievements: [
        "Reduced deployment time by 85% through pipeline optimization",
        "Decreased cloud infrastructure costs by 40% through resource optimization",
        "Improved system reliability with 99.99% uptime",
        "Implemented auto-scaling that handled 300% traffic increase during peak events",
      ],
    },
    {
      company: "InnovateSoft Inc.",
      position: "DevOps Engineer",
      period: "2018 - 2021",
      description:
        "Responsible for building and maintaining CI/CD pipelines and cloud infrastructure.",
      responsibilities: [
        "Developed and maintained CI/CD pipelines using Jenkins and GitLab CI",
        "Managed AWS infrastructure including EC2, S3, RDS, and Lambda",
        "Implemented monitoring and alerting using Prometheus and Grafana",
        "Automated deployment processes with Ansible and Bash scripts",
      ],
      technologies: [
        "Jenkins",
        "GitLab CI",
        "AWS",
        "Ansible",
        "Bash",
        "Docker",
        "Prometheus",
      ],
      achievements: [
        "Reduced manual deployment errors by 95% through automation",
        "Implemented blue-green deployment strategy reducing downtime by 99%",
        "Created self-healing infrastructure that reduced MTTR by 70%",
        "Developed custom monitoring dashboards that improved incident response time by 60%",
      ],
    },
    {
      company: "DataSystems Corp",
      position: "Systems Administrator",
      period: "2016 - 2018",
      description:
        "Managed on-premises and cloud infrastructure for a data processing company.",
      responsibilities: [
        "Administered Linux and Windows servers in hybrid cloud environment",
        "Managed network infrastructure and security",
        "Implemented backup and disaster recovery solutions",
        "Provided technical support and troubleshooting",
      ],
      technologies: [
        "Linux",
        "Windows Server",
        "VMware",
        "AWS",
        "Bash",
        "PowerShell",
        "Nagios",
      ],
      achievements: [
        "Migrated 50+ physical servers to VMware reducing hardware costs by 60%",
        "Implemented automated backup system with 99.9% recovery success rate",
        "Reduced system downtime by 85% through proactive monitoring",
        "Streamlined patching process reducing security vulnerabilities by 75%",
      ],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-12">
          Professional Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex flex-col md:flex-row md:items-center",
                  index % 2 === 0
                    ? "md:flex-row-reverse text-left md:text-right"
                    : "text-left",
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"></div>

                {/* Date indicator */}
                <div
                  className={cn(
                    "md:w-1/2 pb-4 md:pb-0 md:px-8",
                    index % 2 === 0 ? "md:pl-0 md:pr-8" : "md:pr-0 md:pl-8",
                  )}
                >
                  <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {exp.period}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 md:px-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{exp.position}</CardTitle>
                          <CardDescription className="mt-1">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleExpand(index)}
                          aria-label={
                            expandedIndex === index ? "Collapse" : "Expand"
                          }
                        >
                          {expandedIndex === index ? (
                            <ChevronUpIcon className="h-4 w-4" />
                          ) : (
                            <ChevronDownIcon className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      {expandedIndex === index && (
                        <div className="space-y-4 animate-in fade-in-50 duration-300">
                          <div>
                            <h4 className="text-sm font-semibold mb-2">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold mb-2">
                              Responsibilities
                            </h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              {exp.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold mb-2">
                              Key Achievements
                            </h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              {exp.achievements.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
