"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  // imageUrl: string;
  // diagramUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  metrics,
  // imageUrl,
  // diagramUrl,
  githubUrl,
  liveUrl,
  className,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      className={cn(
        "transition-all duration-300",
        isExpanded ? "md:col-span-2 md:row-span-2" : "",
        className,
      )}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {isExpanded && (
          <div className="mt-6 space-y-6 animate-in fade-in-50 duration-300">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Key Metrics</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-muted p-3 rounded-md text-center"
                  >
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button variant="default" size="sm" asChild className="gap-1">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo <ExternalLinkIcon className="h-3 w-3" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
