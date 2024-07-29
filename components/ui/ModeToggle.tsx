"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, buttonVariants } from "@/components/ui/button";

export function ModeToggle({ size }: { size: "icon" | "smIcon" }) {
  const { setTheme } = useTheme();

  return (
    <div>
      <div className=" hidden dark:block">
        <Button
          variant={"outline"}
          size={size}
          onClick={() => setTheme("light")}
        >
          <Sun size={size == "icon" ? 15 : 12} />
        </Button>
      </div>
      <div className="block dark:hidden">
        <Button
          variant={"outline"}
          size={size}
          onClick={() => setTheme("dark")}
        >
          <Moon size={size == "icon" ? 15 : 12} />
        </Button>
      </div>
    </div>
  );
}
