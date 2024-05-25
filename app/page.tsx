import LogoBigIcon from "@/public/icons/LogoBigIcon";
import VerifiedBadgeIcon from "@/public/icons/VerifiedBadgeIcon";
import VendorDetails from "./VendorDetails";
import DisplayItems from "./(items)/DisplayItems";

export default function Home() {
  return (
    <main className="relative z-50 flex min-h-screen flex-col justify-between gap-10 before:absolute before:top-0 before:-z-10 before:h-[9rem] before:w-full before:bg-[url('/images/background.png')] before:bg-cover before:bg-center before:opacity-[40%]">
      <div className="my-[5.5rem] flex flex-col gap-6">
        <VendorDetails />
        <DisplayItems />
      </div>
    </main>
  );
}
