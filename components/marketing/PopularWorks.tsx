"use client";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, ArrowUpRight, Heart, User2 } from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const PopularWorks = () => {
  const user = useUser();
  return (
    <div className="wrapper mt-10">
      <div>
        {" "}
        <div className="wrapper flex items-center justify-between">
          <div>
            <div className=" w-full  text-4xl    font-Mona font-bold ">
              Inspire your self
            </div>
            <div className="mt-1 mb-5 max-w-xs text-start  text-xs opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
          </div>
          <div className=" flex items-center gap-2">
            <Button variant={"outline"}>
              <div className=" flex items-center gap-2">
                <div>Explore More</div>
                <div>
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </Button>
            {user.isSignedIn ? (
              <TooltipProvider delayDuration={10}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={"/"}>
                      <div className=" rounded-full overflow-hidden border-foreground/50 border hover:opacity-75">
                        <img className="h-9" src={user.user.imageUrl} />
                      </div>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex items-center gap-2">
                      <div>check your saves</div>
                      <div>
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        <Works />
      </div>
    </div>
  );
};

const posts = [
  {
    name: "Post 1",
    link: "https://example.com/post1",
    publisher: "John Doe",
    imageUrl:
      "https://cdn.dribbble.com/userupload/15750444/file/original-599b817afa16b01016e50a04bc0731d8.png?resize=1024x768",
  },
  {
    name: "Post 2",
    link: "https://example.com/post2",
    publisher: "Jane Doe",
    imageUrl:
      "https://cdn.dribbble.com/userupload/15750444/file/original-599b817afa16b01016e50a04bc0731d8.png?resize=1024x768",
  },
  {
    name: "Post 3",
    link: "https://example.com/post3",
    publisher: "Bob Smith",
    imageUrl:
      "https://cdn.dribbble.com/userupload/15750444/file/original-599b817afa16b01016e50a04bc0731d8.png?resize=1024x768",
  },
  {
    name: "Post 4",
    link: "https://example.com/post4",
    publisher: "Alice Johnson",
    imageUrl:
      "https://cdn.dribbble.com/userupload/15750444/file/original-599b817afa16b01016e50a04bc0731d8.png?resize=1024x768",
  },
  {
    name: "Post 5",
    link: "https://example.com/post5",
    publisher: "Mike Brown",
    imageUrl:
      "https://cdn.dribbble.com/userupload/15750444/file/original-599b817afa16b01016e50a04bc0731d8.png?resize=1024x768",
  },
  {
    name: "Post 6",
    link: "https://example.com/post6",
    publisher: "Emily Davis",
    imageUrl:
      "https://cdn.dribbble.com/userupload/15750444/file/original-599b817afa16b01016e50a04bc0731d8.png?resize=1024x768",
  },
  {
    name: "Post 7",
    link: "https://example.com/post7",
    publisher: "Tom Harris",
    imageUrl:
      "https://cdn.dribbble.com/userupload/15750444/file/original-599b817afa16b01016e50a04bc0731d8.png?resize=1024x768",
  },
  {
    name: "Post 8",
    link: "https://example.com/post8",
    publisher: "Lily Martin",
    imageUrl:
      "https://cdn.dribbble.com/userupload/15750444/file/original-599b817afa16b01016e50a04bc0731d8.png?resize=1024x768",
  },
  {
    name: "Post 9",
    link: "https://example.com/post9",
    publisher: "David Lee",
    imageUrl:
      "https://cdn.dribbble.com/userupload/15750444/file/original-599b817afa16b01016e50a04bc0731d8.png?resize=1024x768",
  },
  {
    name: "Post 10",
    link: "https://example.com/post10",
    publisher: "Sophia Kim",
    imageUrl:
      "https://cdn.dribbble.com/userupload/15750444/file/original-599b817afa16b01016e50a04bc0731d8.png?resize=1024x768",
  },
  {
    name: "Post 11",
    link: "https://example.com/post11",
    publisher: "Olivia Thompson",
    imageUrl:
      "https://cdn.dribbble.com/userupload/15750444/file/original-599b817afa16b01016e50a04bc0731d8.png?resize=1024x768",
  },
  {
    name: "Post 12",
    link: "https://example.com/post12",
    publisher: "Jackson White",
    imageUrl:
      "https://cdn.dribbble.com/userupload/15750444/file/original-599b817afa16b01016e50a04bc0731d8.png?resize=1024x768",
  },
  {
    name: "Post 13",
    link: "https://example.com/post13",
    publisher: "Ava Taylor",
    imageUrl:
      "https://cdn.dribbble.com/userupload/15750444/file/original-599b817afa16b01016e50a04bc0731d8.png?resize=1024x768",
  },
];

const Works = () => {
  return (
    <div className=" grid grid-cols-5 gap-6">
      {posts.map((item, i) => {
        return (
          <div key={i}>
            <PostTemp
              title={item.name}
              publisher={item.publisher}
              link={item.link}
              image={item.imageUrl}
              likes={"24.2k"}
            />
          </div>
        );
      })}
    </div>
  );
};

const PostTemp = ({
  title,
  publisher,
  link,
  image,
  likes,
}: {
  title: string;
  publisher: string;
  link: string;
  image: string;
  likes: string;
}) => {
  return (
    <>
      <Link href={link}>
        <div className=" group">
          <div className=" w-full relative overflow-hidden h-32 rounded-xl bg-foreground">
            <img className=" w-full h-full object-cover" src={image} alt="" />
          </div>
          <div className="text-xs py-2 px-5 flex items-center justify-between  group-hover:bg-foreground/10 mt-2 rounded-xl">
            <div className=" hover:underline underline-offset-4">
              <div className="flex items-center gap-2">
                <div className=" overflow-hidden rounded-full border-foreground/10">
                  <img
                    className="w-7 h-7 object-cover"
                    src="https://i.pinimg.com/564x/b1/3a/19/b13a19045363c4bb66c4b6eba9d0005d.jpg"
                    alt=""
                  />
                </div>
                <div>{publisher}</div>
              </div>
            </div>
            <div className=" opacity-70 flex items-center gap-0.5">
              <div>
                <Heart className=" fill-foreground" size={10} />
              </div>
              <div className="text-xs ">{likes}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PopularWorks;
