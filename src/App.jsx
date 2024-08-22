import Star from "./UI/Star";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import a1 from "./assets/a1.svg";
import a2 from "./assets/a2.svg";
import a3 from "./assets/a3.svg";
import a4 from "./assets/a4.svg";
import a5 from "./assets/a5.svg";
import a6 from "./assets/a6.svg";
import Social from "./UI/Social";

export default function App() {
  return (
    <>
      <div className="h-dvh overflow-hidden main">
        <div className="absolute top-[10%] left-[20%]">
          <HoverCard>
            <HoverCardTrigger>
              <Star size={30} duration={0.5} className="" />
            </HoverCardTrigger>
            <HoverCardContent className="rounded-3xl p-6 w-max">
              <div className=" p-2 flex gap-6">
                <img
                  src={a6}
                  height={200}
                  width={200}
                  className=" rounded-2xl"
                />
                <div>
                  <p className="text-6xl font-medium">Haley Griffith</p>
                  <span className=" text-2xl">Director</span>
                  <Social />
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="absolute top-1/4 left-1/4">
          <HoverCard>
            <HoverCardTrigger>
              <Star size={70} duration={1} className="" />
            </HoverCardTrigger>
            <HoverCardContent className="rounded-3xl p-6 w-max">
              <div className=" p-2 flex gap-6">
                <img
                  src={a1}
                  height={200}
                  width={200}
                  className=" rounded-2xl"
                />
                <div>
                  <p className="text-6xl font-medium">Kaia Lopez</p>
                  <span className=" text-2xl">Senior</span>
                  <Social />
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="absolute top-[60%] right-[30%]">
          <HoverCard>
            <HoverCardTrigger>
              <Star size={50} duration={0.5} className="" />
            </HoverCardTrigger>
            <HoverCardContent className="rounded-3xl p-6 w-max">
              <div className=" p-2 flex gap-6">
                <img
                  src={a2}
                  height={200}
                  width={200}
                  className=" rounded-2xl"
                />
                <div>
                  <p className="text-6xl font-medium">Brennan Benjamin</p>
                  <span className=" text-2xl">Junior</span>
                  <Social />
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="absolute top-[60%] left-1/4">
          <HoverCard>
            <HoverCardTrigger>
              <Star size={50} duration={0.7} className="" />
            </HoverCardTrigger>
            <HoverCardContent className="rounded-3xl p-6 w-max">
              <div className=" p-2 flex gap-6">
                <img
                  src={a3}
                  height={200}
                  width={200}
                  className=" rounded-2xl"
                />
                <div>
                  <p className="text-6xl font-medium">Fernanda Harris</p>
                  <span className=" text-2xl">Assistant</span>
                  <Social />
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="absolute top-[20%] right-[10%]">
          <HoverCard>
            <HoverCardTrigger>
              <Star size={70} duration={1} className="" />
            </HoverCardTrigger>
            <HoverCardContent className="rounded-3xl p-6 w-max">
              <div className=" p-2 flex gap-6">
                <img
                  src={a4}
                  height={200}
                  width={200}
                  className=" rounded-2xl"
                />
                <div>
                  <p className="text-6xl font-medium">Jorge Heath</p>
                  <span className=" text-2xl">Manager</span>
                  <Social />
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="absolute top-[40%] left-[50%]">
          <HoverCard>
            <HoverCardTrigger>
              <Star size={60} duration={1} className="" />
            </HoverCardTrigger>
            <HoverCardContent className="rounded-3xl p-6 w-max">
              <div className=" p-2 flex gap-6">
                <img
                  src={a5}
                  height={200}
                  width={200}
                  className=" rounded-2xl"
                />
                <div>
                  <p className="text-6xl font-medium">Cassidy Huynh</p>
                  <span className=" text-2xl">Lead</span>
                  <Social />
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </>
  );
}
