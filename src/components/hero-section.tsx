import { ParticlesBackground } from "@/components/ui/particles";
import { Terminal } from "@/components/terminal";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80">
      <ParticlesBackground />
      <div className="container px-4 py-32 mx-auto text-center relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
          DevOps Engineer
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Building scalable, reliable, and automated infrastructure solutions
        </p>
        <div className="flex justify-center">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
