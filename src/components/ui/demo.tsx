import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import Image from "next/image"

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Circles
      </span>

      {/* Center Logo */}
      <div className="absolute z-10 size-[100px]">
        <Image 
          src="/logo.svg" 
          alt="Logo" 
          width={100} 
          height={100} 
          className="size-full object-contain"
        />
      </div>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        duration={25}
        delay={0}
        radius={120}
      >
        <Image 
          src="/facebook.svg" 
          alt="Facebook" 
          width={30} 
          height={30}
          className="size-full object-contain" 
        />
      </OrbitingCircles>
      
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        duration={25}
        delay={8}
        radius={120}
      >
        <Image 
          src="/instagram.svg" 
          alt="Instagram" 
          width={30} 
          height={30} 
          className="size-full object-contain"
        />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        duration={25}
        delay={16}
        radius={120}
      >
        <Image 
          src="/telegram.svg" 
          alt="Telegram" 
          width={30} 
          height={30} 
          className="size-full object-contain"
        />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        duration={30}
        delay={0}
        radius={180}
        reverse
      >
        <Image 
          src="/webchat.svg" 
          alt="Webchat" 
          width={30} 
          height={30} 
          className="size-full object-contain"
        />
      </OrbitingCircles>
      
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        duration={30}
        delay={15}
        radius={180}
        reverse
      >
        <Image 
          src="/whatsapp.svg" 
          alt="WhatsApp" 
          width={30} 
          height={30} 
          className="size-full object-contain"
        />
      </OrbitingCircles>
    </div>
  )
} 