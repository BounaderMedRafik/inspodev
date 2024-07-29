import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { Heart } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import TooltipReuseable from "../ui/TooltipReuseable";

const posts = [
  {
    title:
      "Website for an IoT BrandWebsite for an IoT BrandWebsite for an IoT BrandWebsite for an IoT Brand",
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
  },
  {
    title:
      "Website for an IoT BrandWebsite for an IoT BrandWebsite for an IoT BrandWebsite for an IoT Brand",
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
  },
  {
    title:
      "Website for an IoT BrandWebsite for an IoT BrandWebsite for an IoT BrandWebsite for an IoT Brand",
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
  },
  {
    title:
      "Website for an IoT BrandWebsite for an IoT BrandWebsite for an IoT BrandWebsite for an IoT Brand",
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
  },
  {
    title:
      "Website for an IoT BrandWebsite for an IoT BrandWebsite for an IoT BrandWebsite for an IoT Brand",
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
  },
  {
    title:
      "Website for an IoT BrandWebsite for an IoT BrandWebsite for an IoT BrandWebsite for an IoT Brand",
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
  },
  {
    title:
      "Website for an IoT BrandWebsite for an IoT BrandWebsite for an IoT BrandWebsite for an IoT Brand",
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
  },
  {
    title:
      "Website for an IoT BrandWebsite for an IoT BrandWebsite for an IoT BrandWebsite for an IoT Brand",
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
  },
  {
    title:
      "Website for an IoT BrandWebsite for an IoT BrandWebsite for an IoT BrandWebsite for an IoT Brand",
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
  },
  {
    title:
      "Website for an IoT BrandWebsite for an IoT BrandWebsite for an IoT BrandWebsite for an IoT Brand",
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
  },
];

const FeedItems = () => {
  return (
    <div>
      <div className=" grid-cols-2 md:grid-cols-4 grid gap-2 ">
        {posts.map((item, i) => (
          <div key={i}>
            <PostTemp
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
  date,
}: {
  title: string;
  publisher: string;
  pfp: string;
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
        <DialogContent className=" ">
          <div className=" wrapper w-full">
            <div className="text-4xl font-Mona ">{title}</div>
            <div className=" w-full h-px bg-foreground/10 my-5" />
            <div className="flex items-end gap-2">
              <TooltipReuseable side="left" text={publisher}>
                <div>
                  <img className=" size-20 " src={pfp} alt="" />
                </div>
              </TooltipReuseable>
              <div className=" size-20  border border-foreground flex items-center justify-center">
                <Heart size={30} />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FeedItems;
