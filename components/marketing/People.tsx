"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const People = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string;
    url: string;
    name: string;
    roles: string[];
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  w-full overflow-hidden  ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap relative",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, i) => (
          <Link
            href={item.url}
            className="size-96 group  max-w-full relative   flex-shrink-0    md:w-[450px]  transition-all"
            key={i}
          >
            <div className=" w-[105%] h-full absolute left-1/2 -translate-x-1/2 bg-gradient-to-t from-background from-40%  to-transparent z-20 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100" />
            <img
              className=" w-full h-full top-0 left-0 object-cover absolute"
              src={item.image}
            />
            <div className=" relative z-30 p-5  opacity-0 group-hover:opacity-100 group-hover:-mt-5 transition-all h-full flex items-center justify-end flex-col">
              <div className="text-4xl font-bold text-foreground font-Mona">
                {item.name}
              </div>
              <div className="flex items-center gap-1 mt-2">
                {item.roles.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="text-xs px-3 py-0.5 rounded-full    bg-foreground/70 text-background "
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};
