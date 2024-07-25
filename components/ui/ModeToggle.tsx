"use client";

import * as React from "react";
import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const handleChange = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <Button onClick={handleChange} variant={"outline"} size={"icon"}>
        {theme == "light" ? <MoonIcon size={15} /> : <SunIcon size={15} />}
      </Button>
    </div>
  );
}
