import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, LogIn } from "lucide-react";
import People from "./People";

const Hero = () => {
  return (
    <>
      <div className=" flex items-center justify-center h-[80vh] relative">
        <div className="relative z-10 ">
          <div className="   text-7xl text-center  font-hero font-black max-w-xl">
            show us what you <span className=" text-primary">made!</span>
          </div>
          <div className="text-xs w-full max-w-xs opacity-75 mt-2 mb-5 text-center mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            alias quod dicta!
          </div>
          <div className=" flex items-center justify-center gap-2 mt-2">
            <Button>
              <div className="flex items-center gap-2">
                <div>Start Now</div>
                <div>
                  <ArrowRight size={15} />
                </div>
              </div>
            </Button>
            <Button variant={"ghost"}>
              <div className=" flex items-center gap-2">
                <div>Log in</div>
                <div>
                  <LogIn size={15} />
                </div>
              </div>
            </Button>
          </div>
        </div>

        {/* ------- */}
        <div className=" absolute h-full w-full top-0 left-0">
          <img className=" h-full w-full object-cover" src="/hero.jpg" alt="" />
        </div>
        <div className=" absolute w-full h-full bg-gradient-to-b from-transparent to-background to-50%" />
      </div>
      <div>
        <People />
      </div>
    </>
  );
};

export default Hero;
