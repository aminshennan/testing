"use client";

import { Box, Sparkles } from "lucide-react";
import { GlowingBox } from "./ui/glowing-box";
import { cn } from "../lib/utils";
import { GridBackground } from "./ui/grid-background";

export function GlowingSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <GridBackground opacity={0.3} strokeColor="rgb(255 255 255 / 0.1)" gridSize={30} />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Features that shine
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Discover what makes our product stand out from the rest
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          <GridItem
            icon={<Box className="h-5 w-5" />}
            title="Modern Design System"
            description="Clean and modern UI components built with Tailwind CSS and Framer Motion animations."
          />
          <GridItem
            icon={<Sparkles className="h-5 w-5" />}
            title="Interactive Effects"
            description="Beautiful interactive glowing effects that respond to user movement and interactions."
          />
        </div>
      </div>
    </section>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <div className="min-h-[16rem]">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingBox
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
          className="h-full"
        >
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-8">
            <div className="relative flex flex-1 flex-col justify-between gap-4">
              <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-3">
                {icon}
              </div>
              <div className="space-y-3">
                <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                  {title}
                </h3>
                <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                  {description}
                </h2>
              </div>
            </div>
          </div>
        </GlowingBox>
      </div>
    </div>
  );
}; 