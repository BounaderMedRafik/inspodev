"use client";
import { UserButton } from "@clerk/nextjs";
import { Hash, Plus, SaveAll, TrendingUp, User2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import MyLogo from "../ui/MyLogo";
import TooltipReuseable from "../ui/TooltipReuseable";
import { ModeToggle } from "../ui/ModeToggle";

const FeedNav = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="border-b border-b-foreground/10">
        <div className=" wrapper py-4 flex items-center justify-between ">
          <div>
            <MyLogo />
          </div>
          <div className=" flex items-center gap-0.5">
            <div>
              <AddingAPost />
            </div>
            <Link
              className={buttonVariants({
                variant: "outline",
                size: "smIcon",
              })}
              href={"/profile/save"}
            >
              <SaveAll size={12} />
            </Link>
            <Link
              className={buttonVariants({
                variant: "outline",
                size: "smIcon",
              })}
              href={"/profile"}
            >
              <User2 size={12} />
            </Link>
            <div>
              <ModeToggle size="smIcon" />
            </div>
            <UserButton>crazy</UserButton>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Search />
        </div>
      </div>
    </>
  );
};

const AddingAPost = () => {
  return (
    <div>
      <Button size={"smIcon"} variant={"outline"}>
        <Plus size={12} />
      </Button>
    </div>
  );
};

const Search = () => {
  return (
    <div className=" border-b border-b-foreground/10">
      <div className=" wrapper py-3 text-3xl flex items-center justify-between">
        <Input placeholder="INSPODEV/ SEARCH" />
        <div className="-mt-2 flex items-center gap-0.5">
          <TooltipReuseable side="bottom" text="Tags">
            <Link
              className={buttonVariants({
                variant: "outline",
                size: "smIcon",
              })}
              href={"/feed/tags"}
            >
              <Hash size={12} />
            </Link>
          </TooltipReuseable>
          <TooltipReuseable side="bottom" text="Populaire">
            <Link
              className={buttonVariants({
                variant: "outline",
                size: "smIcon",
              })}
              href={"/feed/populare"}
            >
              <TrendingUp size={12} />
            </Link>
          </TooltipReuseable>
        </div>
      </div>
    </div>
  );
};

export default FeedNav;
