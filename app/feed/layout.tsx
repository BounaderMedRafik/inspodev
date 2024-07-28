import FeedNav from "@/components/feed/FeedNav";

export default function FeedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <FeedNav />
      </div>
      {children}
    </div>
  );
}
