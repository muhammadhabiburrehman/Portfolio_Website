import { Button } from "@/components/ui/button";
import { YoutubeIcon, PlayIcon, ExternalLinkIcon } from "lucide-react";

export function YoutubeSection() {
  const courses = [
    {
      id: "docker",
      title: "Docker In Simple",
      description: "From basics to advanced container techniques",
      stats: "75+ Videos",
      url: "https://www.youtube.com/playlist?list=PLk78Xv-ivmRQKGB8mDfDR-tyJBcz4Ftsm",
    },
    {
      id: "tools",
      title: "OpenSource & SelfHosted Tools",
      description: "Deploy openSource and selfHosted tools locally with ease",
      stats: "5+ Videos",
      url: "https://www.youtube.com/playlist?list=PLk78Xv-ivmRTejEzkORhiIhcfEW62oeZc",
    },
    {
      id: "kubernetes",
      title: "Kubernetes In Simple",
      description: "Container orchestration made simple",
      stats: "Ongoing",
      url: "https://www.youtube.com/playlist?list=PLk78Xv-ivmRS1C7DRbf5LX_WHCp8xltr0",
    },
    {
      id: "cicd",
      title: "CI/CD Pipelines",
      description: "Build automated deployment workflows",
      stats: "Coming Soon",
      url: "",
    },
  ];

  return (
    <section className="py-16 bg-background" id="youtube">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <YoutubeIcon className="h-6 w-6 text-red-500" />
          <h2 className="text-2xl font-medium tracking-tight text-center">
            Video Courses
          </h2>
        </div>
        <p className="text-muted-foreground text-center text-sm max-w-md mx-auto mb-8">
          Free educational content to help you master DevOps skills
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border rounded-lg p-4 hover:border-primary/50 hover:bg-muted/30 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-red-500/10 flex items-center justify-center">
                    <PlayIcon className="h-3.5 w-3.5 text-red-500" />
                  </div>
                  <h3 className="font-medium text-sm">{course.title}</h3>
                </div>
                <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                  {course.stats}
                </span>
              </div>
              <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                {course.description}
              </p>
              <div className="flex justify-between items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2 text-xs"
                  asChild
                >
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    Watch
                  </a>
                </Button>
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary text-xs flex items-center gap-1 transition-colors"
                >
                  Details <ExternalLinkIcon className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://www.youtube.com/channel/UCWZO9XvCjIqEZbb6RrxBzRw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <YoutubeIcon className="h-4 w-4 text-red-500" /> View all videos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
