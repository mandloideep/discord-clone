import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
