import React, { useState } from "react";
import { DialogHeader, DialogTitle } from "../ui/dialog";
import { NormalInput } from "../ui/normalInput";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { TagsInput } from "react-tag-input-component";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const PostingContent = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [selected, setSelected] = useState(["desgin"]);
  return (
    <div className=" wrapper w-full">
      <DialogTitle className=" font-Mona text-4xl">
        Show us what you got!
      </DialogTitle>
      <div
        className=" w-1/2 mt-10 h-full
      "
      >
        <div>
          <div>
            <Label className="text-2xl">Title</Label>
            <NormalInput className="mt-2" type="text" />
          </div>
          <div className="mt-4">
            <Label className="text-2xl">Description</Label>
            <Textarea className="mt-2" />
          </div>
          <div className="mt-5">
            <Label className="text-2xl">Description</Label>
            <div className="mt-2">
              <TagsInput
                classNames={{
                  input: " bg-transparent w-full",
                }}
                value={selected}
                onChange={setSelected}
                name="Tags"
                placeHolder="enter tags"
              />
            </div>
          </div>
        </div>
        <div className=" mt-5">
          <Button>
            <div className="flex items-center gap-2">
              <div>Post</div>
              <div>
                <ArrowRight size={15} />
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostingContent;
