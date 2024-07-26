"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { ArrowRight, LogIn } from "lucide-react";
import { People } from "./People";
import { motion, useScroll, useTransform } from "framer-motion";
import { useUser } from "@clerk/nextjs";

const people = [
  {
    name: "John Doe",
    url: "https://example.com/johndoe",
    roles: ["admin", "moderator"],
    image:
      "https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg",
  },
  {
    name: "Jane Smith",
    url: "https://example.com/janesmith",
    roles: ["user", "contributor"],
    image:
      "https://media.istockphoto.com/id/1294442411/photo/self-management-is-a-freelancers-greatest-tool.jpg?s=612x612&w=0&k=20&c=Tlb-9ez-bv7hKt4mJCmK89Gz1KabibJiWBSBaUIQz3I=",
  },
  {
    name: "Bob Johnson",
    url: "https://example.com/bobjohnson",
    roles: ["admin", "editor"],
    image:
      "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    name: "Alice Brown",
    url: "https://example.com/alicebrown",
    roles: ["user", "subscriber"],
    image:
      "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
  },
];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <>
      <div
        ref={ref}
        className=" flex items-center justify-center h-[80vh] relative "
      >
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
      <motion.div
        style={{
          opacity: opacity,
        }}
      >
        <div className="wrapper flex items-center justify-between">
          <div>
            <div className=" w-full  text-4xl    font-Mona font-bold ">
              our precious artists
            </div>
            <div className="mt-1 mb-5 max-w-xs text-start  text-xs opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
          </div>
          <div>
            <Button>
              <div className=" flex items-center gap-2">
                <div>Start Now</div>
                <div>
                  <ArrowRight size={15} />
                </div>
              </div>
            </Button>
          </div>
        </div>
        <People items={people} speed="slow" pauseOnHover={false} />
      </motion.div>
    </>
  );
};

export default Hero;
