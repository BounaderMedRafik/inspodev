"use client";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import {
  ArrowRight,
  Github,
  Instagram,
  Sparkles,
  User,
  User2,
  Youtube,
} from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const links = [
  {
    link: "/",
    icon: <Instagram size={15} />,
  },
  {
    link: "/",
    icon: <Github size={15} />,
  },
  {
    link: "/",
    icon: <Youtube size={15} />,
  },
  {
    link: "/",
    icon: "inspodev@business.com",
  },
];

const Banner = () => {
  const user = useUser();
  return (
    <div className=" bg-primary relative w-full h-[40vh] mt-10 flex items-center justify-center flex-col">
      <div className="text-5xl font-hero text-background">
        Lorem ipsum dolor sit.
      </div>
      <div className="text-xs text-background mt-5 opacity-75 max-w-sm text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sequi
        aliquam iure repellendus voluptas! Libero.
      </div>
      <div className=" mt-8 flex items-center gap-2">
        {user.isSignedIn ? (
          <div>
            <Link
              className={buttonVariants({
                variant: "backgroundOutline",
              })}
              href={"/"}
            >
              <div className="flex items-center gap-2">
                <div>Show us now what you made</div>
                <div>
                  <Sparkles size={15} />
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div>
            <Button variant={"background"}>
              <div className="flex items-center gap-2">
                <div>Sign up</div>
                <div>
                  <ArrowRight size={15} />
                </div>
              </div>
            </Button>
            <Button variant={"backgroundOutline"}>
              <div className="flex items-center gap-2">
                <div>Log in</div>
                <div>
                  <User2 size={15} />
                </div>
              </div>
            </Button>
          </div>
        )}
      </div>
      <div className=" absolute bottom-0 w-full left-0 p-5 flex items-center justify-between">
        <div className="text-2xl text-background font-Mona font-bold">
          INSPODEV/ <span className="text-xs opacity-70">2024&copy;</span>
        </div>
        <div className="flex items-center gap-2">
          {links.map((item, i) => {
            return (
              <a
                target="_blank"
                className="text-background hover:underline underline-offset-4 text-xs"
                href={item.link}
                key={i}
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
