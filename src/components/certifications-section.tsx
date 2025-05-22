"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Calendar, ChevronDown, ExternalLink } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  children?: Certification[]; // for specializations
}

export function CertificationsSection() {
  const certifications: Certification[] = [
    {
      name: "DevOps on AWS Specialization",
      issuer: "AWS",
      date: "March-2025",
      skills: [],
      children: [
        {
          name: "AWS Cloud Technical Essentials",
          issuer: "AWS",
          date: "March-2025",
          credentialId: "ASTJ9C3677EJ",
          credentialUrl:
            "https://www.coursera.org/account/accomplishments/verify/ASTJ9C3677EJ",
          skills: [
            "AWS Identity and Access Management",
            "Cloud Computing",
            "Networking on AWS",
            "AWS Security",
          ],
        },
        
        {
          name: "DevOps on AWS: Code, Build, and Test",
          issuer: "AWS",
          date: "March-2025",
          credentialId: "CII5IYFV2R3Z",
          credentialUrl:
            "https://www.coursera.org/account/accomplishments/verify/CII5IYFV2R3Z",
          skills: [
            "Software Testing",
            "Cloud Computing",
            "Test Automation",
            "Devops",
          ],
        },
        
        {
          name: "DevOps on AWS: Release and Deploy",
          issuer: "AWS",
          date: "March-2025",
          credentialId: "0M1BYVZR5V68",
          credentialUrl:
            "https://www.coursera.org/account/accomplishments/verify/0M1BYVZR5V68",
          skills: [
            "Continuous Delivery",
            "Continuous Integration",
            "Cloud Computing",
            "Devops",
            "Amazon Web Services",
          ],
        },
        
        {
          name: "DevOps on AWS: Operate and Monitor",
          issuer: "AWS",
          date: "March-2025",
          credentialId: "HE99ZWQS10CM",
          credentialUrl:
            "https://www.coursera.org/account/accomplishments/verify/HE99ZWQS10CM",
          skills: [
            "Devops",
            "Leadership and Management",
            "CI/CD",
            "Amazon Web Services",
            "Cloud Computing",
          ],
        },
        
        
      ],
    },
    {
      name: "Introduction to Agile Development and Scrum",
      issuer: "IBM",
      date: "January-2025",
      credentialId: "eefeee37-5f56-45fb-8947-c2a957ac239e",
      credentialUrl:
        "https://www.credly.com/badges/eefeee37-5f56-45fb-8947-c2a957ac239e/print",
      skills: [
        "Agile Software Development",
        "Kanban",
        "Scrum Methodology",
        "Sprint Planning",
        "ZenHub",
      ],
    },
    {
      name: "Introduction To DevOps",
      issuer: "IBM",
      date: "December-2024",
      credentialId: "XF0XGP2P8C7K",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/XF0XGP2P8C7K",
      skills: ["CI/CD", "Agile", "DevOps", "TDD/BDD", "Cloud Native"],
    },
    {
      name: "DevOps and Jenkins Fundamentals",
      issuer: "LearnKartS",
      date: "December-2024",
      credentialId: "9SJTTRG44I0T",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/9SJTTRG44I0T",
      skills: [
        "Continuous Integration",
        "Continuous Delivery",
        "CI/CD Pipeline",
        "Jenkins",
      ],
    },
  ];

  const [expandedSpecializations, setExpandedSpecializations] = useState<
    Record<string, boolean>
  >({});

  const toggleExpand = (name: string) => {
    setExpandedSpecializations((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const renderCard = (cert: Certification, isChild = false) => (
    <Card
      key={cert.name}
      className={`overflow-hidden border-l-4 ${
        isChild ? "ml-4 border-l-muted" : "border-l-primary"
      }`}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 cursor-pointer">
              <Award className="h-5 w-5 text-primary" />
              {cert.name}
            </CardTitle>
            <CardDescription className="mt-1">{cert.issuer}</CardDescription>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            {cert.date}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-3">
          {cert.skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
        {cert.credentialId && (
          <div className="text-sm text-muted-foreground flex justify-between items-center">
            <span>Credential ID: {cert.credentialId}</span>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                Verify <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-12">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) =>
            cert.children ? (
              <div key={cert.name} className="md:col-span-2">
                <Card
                  onClick={() => toggleExpand(cert.name)}
                  className="overflow-hidden border-l-4 border-l-primary cursor-pointer"
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          {cert.name}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {cert.issuer}
                        </CardDescription>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground gap-2">
                        <Calendar className="h-4 w-4" />
                        {cert.date}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            expandedSpecializations[cert.name]
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {expandedSpecializations[cert.name] &&
                  cert.children.map((childCert) => renderCard(childCert, true))}
              </div>
            ) : (
              renderCard(cert)
            )
          )}
        </div>
      </div>
    </section>
  );
}
