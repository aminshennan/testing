import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Clock } from "lucide-react";
import { flightRouterStateSchema } from "next/dist/server/app-render/types";
import Image from "next/image";

const Icons = {
  facebook: () => (
    <div >
      <Image 
        src="/facebook.svg" 
        alt="Facebook" 
        width={40} 
        height={40}
        className="size-[40px] object-contain" 
      />
    </div>
  ),
  instagram: () => (
    <div >
      <Image 
        src="/instagram.svg" 
        alt="Instagram" 
        width={40} 
        height={40}
        className="size-[40px] object-contain" 
      />
    </div>
  ),
  telegram: () => (
    <div >
      <Image 
        src="/telegram.svg" 
        alt="Telegram" 
        width={40} 
        height={40}
        className="size-[40px] object-contain" 
      />
    </div>
  ),
  webchat: () => (
    <div >
      <Image 
        src="/webchat.svg" 
        alt="Webchat" 
        width={40} 
        height={40}
        className="size-[40px] object-contain" 
      />
    </div>
  ),
  whatsapp: () => (
    <div >
      <Image 
        src="/whatsapp.svg" 
        alt="WhatsApp" 
        width={40} 
        height={40}
        className="size-[40px] object-contain" 
      />
    </div>
  ),
  logo: () => (
    <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
      <Image 
        src="/logo.svg" 
        alt="Logo" 
        width={150} 
        height={150}
        className="size-[100px] object-contain" 
      />
    </div>
  ),
};

export function SocialMediaOrbit() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute z-10">
        <Icons.logo />
      </div>

      {/* Inner Circle Icons */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        delay={0}
        radius={120}

      >
        <Icons.facebook />
      </OrbitingCircles>
      
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={120}
 
      >
        <Icons.instagram />
      </OrbitingCircles>
      


      {/* Outer Circle Icons (reverse direction) */}


      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        radius={200}
        duration={30}

      >
        <Icons.webchat />
      </OrbitingCircles>
      
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        radius={200}
        duration={30}
        delay={100}

      >
        <Icons.whatsapp />
      </OrbitingCircles>


      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        duration={30}
        delay={200}
        radius={200}

        
      >
        <Icons.telegram />
      </OrbitingCircles>

    </div>
  );
} 