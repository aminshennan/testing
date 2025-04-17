import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleAction,
  ChatBubbleActionWrapper
} from "./ui/chat-bubble"
import { Copy, RefreshCcw } from "lucide-react"

const actionIcons = [
  { icon: Copy, type: "Copy" },
  { icon: RefreshCcw, type: "Regenerate" },
]

export function ChatInteractionDemo() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-20">
      {/* Orbiting circles background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Right side orbits */}
        <div className="absolute right-[5%] top-[10%] sm:right-[10%] md:right-[15%] lg:right-[20%]">
          <OrbitingCircles
            className="size-[60px] sm:size-[70px] md:size-[80px] border-none bg-transparent"
            duration={25}
            delay={0}
            radius={80}
          >
            <div className="size-4 sm:size-5 md:size-6 rounded-full bg-primary/30" />
          </OrbitingCircles>
        </div>
        <div className="absolute right-[10%] top-[30%] sm:right-[15%] md:right-[20%] lg:right-[25%]">
          <OrbitingCircles
            className="size-[40px] sm:size-[50px] md:size-[60px] border-none bg-transparent"
            duration={20}
            delay={10}
            radius={60}
            reverse
          >
            <div className="size-3 sm:size-4 rounded-full bg-primary/20" />
          </OrbitingCircles>
        </div>
        <div className="absolute right-[15%] bottom-[20%] sm:right-[20%] md:right-[25%] lg:right-[30%]">
          <OrbitingCircles
            className="size-[30px] sm:size-[35px] md:size-[40px] border-none bg-transparent"
            duration={15}
            delay={5}
            radius={40}
          >
            <div className="size-2 sm:size-3 rounded-full bg-primary/40" />
          </OrbitingCircles>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border/20 bg-background/10 p-6 backdrop-blur-xl">
          <h3 className="mb-6 text-xl font-semibold text-foreground">Chat Interaction Demo</h3>
          
          <div className="space-y-6">
            {/* Bot initial message */}
            <ChatBubble variant="received">
              <ChatBubbleAvatar fallback="AI">
                <OrbitingCircles
                  className="size-[20px] border-none bg-transparent"
                  duration={15}
                  delay={0}
                  radius={15}
                  path={false}
                >
                  <div className="size-2 rounded-full bg-primary"></div>
                </OrbitingCircles>
              </ChatBubbleAvatar>
              <ChatBubbleMessage>
                Hello! How can we help you today?
              </ChatBubbleMessage>
            </ChatBubble>

            {/* User message */}
            <ChatBubble variant="sent">
              <ChatBubbleAvatar 
                fallback="U"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&crop=faces&fit=crop"
              />
              <ChatBubbleMessage variant="sent">
                I&apos;m curious about pricing...
              </ChatBubbleMessage>
            </ChatBubble>

            {/* Bot response */}
            <ChatBubble variant="received">
              <ChatBubbleAvatar fallback="AI">
                <OrbitingCircles
                  className="size-[20px] border-none bg-transparent"
                  duration={15}
                  delay={0}
                  radius={15}
                  path={false}
                >
                  <div className="size-2 rounded-full bg-primary"></div>
                </OrbitingCircles>
              </ChatBubbleAvatar>
              <div className="flex-1">
                <ChatBubbleMessage>
                  We offer multiple plans based on your needs. Would you like a quick overview?
                </ChatBubbleMessage>
                <ChatBubbleActionWrapper>
                  {actionIcons.map(({ icon: Icon, type }) => (
                    <ChatBubbleAction
                      key={type}
                      icon={<Icon className="h-4 w-4" />}
                      onClick={() => console.log(`Action ${type} clicked`)}
                    />
                  ))}
                </ChatBubbleActionWrapper>
              </div>
            </ChatBubble>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Observe the natural, brand-aligned phrasing in action.
          </p>
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
    </div>
  )
} 