import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
      className="h-auto md:h-screen w-full rounded-md flex flex-col items-center 
      justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Master the art of music
        </h1>
        <p
          className="my-8 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        >
          Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re a beginner or looking to refine your skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
          <div className="flex gap-5 justify-center align-middle items-center">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 text-lg px-2"
            >
              Explore courses
            </Button>
          </Link>
          <Link href={"/signup"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white text-black border-neutral-200 text-lg"
            >
              Sign Up
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
