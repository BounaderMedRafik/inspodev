import React, { useState } from "react";
import { DialogHeader, DialogTitle } from "../ui/dialog";
import { NormalInput } from "../ui/normalInput";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { TagsInput } from "react-tag-input-component";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FileState, MultiImageDropzone } from "../ui/EdgeStoreImagePicker";
import { useEdgeStore } from "@/lib/edgestore";

const PostingContent = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [selected, setSelected] = useState(["desgin"]);
  const [images, setImages] = useState<FileState[]>([]);
  const { edgestore } = useEdgeStore();
  const tagsCounter = 10 - selected.length;

  function updateFileProgress(key: string, progress: FileState["progress"]) {
    setImages((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  return (
    <div className=" wrapper w-full">
      <DialogTitle className=" font-Mona text-4xl">
        Show us what you got!
      </DialogTitle>
      <div className="flex items-center justify-center">
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
                  disabled={tagsCounter < 1 ? true : false}
                  classNames={{
                    input: " bg-transparent w-full",
                  }}
                  value={selected}
                  onChange={setSelected}
                  name="Tags"
                  placeHolder="enter tags"
                />
                <div
                  className={cn(
                    "text-xs mt-2",
                    tagsCounter < 1 ? "text-red-500" : null
                  )}
                >
                  {tagsCounter < 1 ? "No More Available" : tagsCounter} tags
                </div>
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
        <div className="ml-10">
          <MultiImageDropzone
            value={images}
            dropzoneOptions={{
              maxFiles: 10,
            }}
            onChange={(files) => {
              setImages(files);
            }}
            onFilesAdded={async (addedFiles) => {
              setImages([...fileStates, ...addedFiles]);
              await Promise.all(
                addedFiles.map(async (addedFileState) => {
                  try {
                    const res = await edgestore.publicFiles.upload({
                      file: addedFileState.file,
                      onProgressChange: async (progress) => {
                        updateFileProgress(addedFileState.key, progress);
                        if (progress === 100) {
                          // wait 1 second to set it to complete
                          // so that the user can see the progress bar at 100%
                          await new Promise((resolve) =>
                            setTimeout(resolve, 1000)
                          );
                          updateFileProgress(addedFileState.key, "COMPLETE");
                        }
                      },
                    });
                    console.log(res);
                  } catch (err) {
                    updateFileProgress(addedFileState.key, "ERROR");
                  }
                })
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostingContent;
