import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const TooltipReuseable = ({
  side,
  text,
  children,
}: {
  side: "bottom" | "top" | "right" | "left";
  text: string;
  children: React.ReactNode;
}) => {
  return (
    <TooltipProvider delayDuration={10}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side}>{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipReuseable;
