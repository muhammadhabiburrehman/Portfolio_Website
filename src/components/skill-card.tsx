import { cn } from "@/lib/utils";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  proficiency: number;
  className?: string;
}

export function SkillCard({
  name,
  icon,
  proficiency,
  className,
}: SkillCardProps) {
  return (
    <div
      className={cn(
        "bg-card hover:bg-card/80 border rounded-lg p-4 transition-all duration-300 hover:shadow-md",
        className,
      )}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-primary text-2xl">{icon}</div>
        <h3 className="font-medium">{name}</h3>
      </div>
      <div className="mt-3">
        <div className="flex flex-wrap gap-2">
          {["Automation", "Deployment", "Monitor"].map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
