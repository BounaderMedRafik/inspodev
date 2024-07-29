import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { Heart } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import TooltipReuseable from "../ui/TooltipReuseable";
import { ScrollArea } from "../ui/scroll-area";
import LikeButton from "../ui/LikeButton";

const posts = [
  {
    title: "Website for an IoT",
    publisher: "Halo UI/UX",
    pfp: "https://cdn.dribbble.com/users/6234/avatars/normal/d1882061c515d35f4818100c0a548772.png?1697204392",
    MainPic:
      "https://cdn.dribbble.com/userupload/15817647/file/original-148b0f904dd23c082d18a2a09a9cbb58.jpg?resize=1024x760",
    SidePics: [
      "https://cdn.dribbble.com/userupload/15817648/file/original-d1a923290f8e73f8142d6cee01ab6741.png?resize=1024x208&vertical=center",
      "https://cdn.dribbble.com/userupload/8744186/file/original-c72d25d043746bd0b96c1b8a43f7c635.png?resize=1024x768",
      "https://cdn.dribbble.com/userupload/12520832/file/original-7a87e899ae750f0eecd495d64a6da44b.png?resize=1024x768",
    ],
    likes: 90,
    tags: [
      "#love",
      "#design",
      "#uiux",
      "#uxdesign",
      "#userinterface",
      "usercentereddesign",
      "#digitaldesign",
      "#graphicdesign",
      "#webdesign",
      "#appdesign",
      "#interactiondesign",
    ],
    date: "12/08/2024",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi aliquam minus iusto obcaecati incidunt eos magni!",
  },
];

const FeedItems = () => {
  return (
    <div>
      <div className=" grid-cols-2 md:grid-cols-4 grid gap-2 ">
        {posts.map((item, i) => (
          <div key={i}>
            <PostTemp
              desc={item.desc}
              title={item.title}
              publisher={item.publisher}
              pfp={item.pfp}
              MainPic={item.MainPic}
              SidePics={item.SidePics}
              likes={item.likes}
              tags={item.tags}
              date={item.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const PostTemp = ({
  title,
  publisher,
  pfp,
  MainPic,
  SidePics,
  likes,
  tags,
  desc,
  date,
}: {
  title: string;
  publisher: string;
  pfp: string;
  desc: string;
  MainPic: string;
  SidePics: string[];
  likes: number;
  tags: string[];
  date: string;
}) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className=" w-full h-full group relative bg-white">
            <img className=" h-full w-full object-cover" src={MainPic} />
            <div className=" w-full h-full top-0 left-0 absolute bg-gradient-to-t  from-background  via-transparent to-background  z-20 group-hover:opacity-100 opacity-0 transition-all">
              <div className=" w-full h-full flex items-end justify-between p-3">
                <div className=" text-sm line-clamp-2 w-2/3">{title}</div>
                <div className="flex items-center gap-0.5">
                  <div>
                    <Heart className=" fill-foreground" size={15} />
                  </div>
                  <div className="text-sm font-semibold">{likes}</div>
                </div>
              </div>
              <div className=" w-full h-full flex items-start  absolute bottom-5 transition-all  group-hover:bottom-0 left-0 justify-between p-3">
                <div>
                  <img className=" w-8 " src={pfp} />
                </div>
                <a
                  href="/"
                  className="font-bold hover:underline underline-offset-4"
                >
                  {publisher}
                </a>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <ScrollArea className=" w-full h-full  ">
            <div className=" wrapper w-full">
              <div className="flex items-end gap-2 justify-between">
                <TooltipReuseable side="left" text={publisher}>
                  <div>
                    <img className=" size-20 " src={pfp} alt="" />
                  </div>
                </TooltipReuseable>
                <div
                  className="flex items-center gap-0.5
                "
                >
                  <div
                    className={buttonVariants({
                      variant: "outline",
                    })}
                  >
                    <div className=" flex  items-center gap-2">
                      <div>
                        <Heart className=" fill-foreground" size={12} />
                      </div>
                      <div>{likes}</div>
                    </div>
                  </div>
                  <LikeButton type="like" />
                  <LikeButton type="save" />
                </div>
              </div>
              <div className=" w-full h-px bg-foreground/10 my-5" />
              <div className="text-4xl font-Mona ">{title}</div>
              <div className="opacity-75 max-w-lg mt-2">{desc}</div>
              <div className="mt-2">
                <img src={MainPic} className=" w-full" alt="" />
              </div>
              <div className=" w-full h-px bg-foreground/10 my-5" />
              <div className="text-4xl font-Mona">
                Full Page Preview & Screenshots
              </div>
              <div className="mt-5">
                {SidePics.map((item, i) => (
                  <div
                    className=" w-full rounded-lg overflow-hidden mt-2"
                    key={i}
                  >
                    <img className=" w-full" src={item} />
                  </div>
                ))}
              </div>
              <div className=" h-px w-full bg-foreground/10 my-5" />
              <div className=" text-4xl font-Mona mt-5">Tags</div>
              <div
                className="flex items-center gap-0.5 mt-3
              "
              >
                {tags.map((item, i) => (
                  <div key={i}>
                    <div className="text-xs px-3 py-0.5 bg-foreground/10 rounded-full border-foreground/10">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FeedItems;
