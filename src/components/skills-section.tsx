"use client";

import { FaDocker, FaJenkins, FaGitAlt, FaPython, FaUsers, FaTerminal, FaAws, FaGoogle } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiPrometheus, SiGithubactions, SiGitlab, SiCircleci, SiHelm, SiGrafana, SiDatadog, SiJavascript, SiGo } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SkillsSection() {
  const skillCategories = [
    {
      id: "containers",
      name: "Containerization",
      skills: [
        { name: "Docker", Icon: FaDocker },
        { name: "Kubernetes", Icon: SiKubernetes },
        // { name: "Helm", Icon: SiHelm },
      ],
    },
    
    {
      id: "cicd",
      name: "CI/CD",
      skills: [
        { name: "Jenkins", Icon: FaJenkins },
        { name: "GitHub Actions", Icon: SiGithubactions },
        // { name: "GitLab CI", Icon: SiGitlab },
        // { name: "CircleCI", Icon: SiCircleci },
      ],
    },
    {
      id: "iac",
      name: "Infrastructure as Code",
      skills: [
        { name: "Terraform", Icon: SiTerraform },
        { name: "Ansible", Icon: SiAnsible },
      ],
    },
    
    {
      id: "cloud",
      name: "Cloud Platforms",
      skills: [
        { name: "AWS", Icon: FaAws },
        // { name: "Azure", Icon: SiAzuredevops },
        { name: "GCP", Icon: FaGoogle },
      ],
    },
    {
      id: "monitoring",
      name: "Monitoring & Observability",
      skills: [
        { name: "Prometheus", Icon: SiPrometheus },
        { name: "Grafana", Icon: SiGrafana },
        // { name: "Datadog", Icon: SiDatadog },
      ],
    },
    {
      id: "scripting",
      name: "Scripting & Programming",
      skills: [
        { name: "Bash", Icon: FaTerminal },
        { name: "Python", Icon: FaPython },
        // { name: "Go", Icon: SiGo },
        { name: "JavaScript", Icon: SiJavascript },
      ],
    },
  ];

  return (
    <section className="py-20 bg-muted/30" id="skills">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-12">
          Technical Skills
        </h2>

        <Tabs defaultValue="containers" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map(({ name, Icon }) => (
                  <div 
                    key={name} 
                    className="flex flex-col items-center bg-background p-6 rounded-lg border shadow-sm transition-all hover:shadow-md"
                  >
                    <Icon className="h-12 w-12 mb-4 text-foreground" />
                    <span className="text-lg font-medium text-center">{name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}