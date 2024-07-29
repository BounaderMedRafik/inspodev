import React from "react";
import { Button } from "./button";
import { Heart, SaveAll } from "lucide-react";

const LikeButton = ({ type }: { type: "like" | "save" }) => {
  return (
    <div>
      {type == "like" ? (
        <div>
          <Button variant={"outline"} size={"icon"}>
            <Heart size={15} />
          </Button>
        </div>
      ) : (
        <div>
          <Button variant={"outline"} size={"icon"}>
            <SaveAll size={15} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default LikeButton;
