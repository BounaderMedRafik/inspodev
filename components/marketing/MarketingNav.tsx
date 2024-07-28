"use client";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { ModeToggle } from "../ui/ModeToggle";
import { SignUpButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const MarketingNav = () => {
  const user = useUser();
  return (
    <div className=" border-b border-b-foreground/10">
      <div className=" wrapper py-8 ">
        <div className=" w-full flex items-center justify-between">
          <div className="font-Mona font-bold">INSPODEV/</div>
          <div>
            <img src="/logoipsum.svg" alt="" />
          </div>
          <div className=" flex items-center gap-2">
            {user.isSignedIn ? (
              <Link
                className={buttonVariants({
                  variant: "default",
                })}
                href={"/feed"}
              >
                <div className="flex items-center gap-2">
                  <div>Explore Now</div>
                  <div>
                    <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            ) : (
              <SignUpButton mode="modal">
                <Button>
                  <div className="flex items-center gap-2">
                    <div>Start in</div>
                    <div>
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </Button>
              </SignUpButton>
            )}

            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingNav;
