import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const TooltipReuseable = ({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) => {
  return (
    <TooltipProvider delayDuration={10}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side="bottom">{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipReuseable;
