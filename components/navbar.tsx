import DropdownIcon from "@/public/icons/DropdownIcon";
import LogoIcon from "@/public/icons/LogoIcon";
import SearchIcon from "@/public/icons/SearchIcon";
import { Input } from "./ui/input";
import Link from "next/link";
import MessageIcon from "@/public/icons/MessageIcon";
import CartIcon from "@/public/icons/CartIcon";
import Image from "next/image";
import avatar from "@/public/images/avatar.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b !border-[#F1F1F1] px-16 py-6">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <LogoIcon />
          <h1 className="font-bold">UniHustle</h1>
        </div>
        <div className="flex items-center gap-2 rounded-xl border-2 !border-[#ECECEC] px-3 py-4">
          <div className="flex items-center gap-[7px]">
            <p className="text-[13.61px] font-medium text-[#0C0C0C]">
              Products
            </p>
            <DropdownIcon />
          </div>
          <div className="w-max">
            <SearchIcon />
          </div>
          <Input
            placeholder="Search for Products, services and Trainings"
            className="border-none text-base placeholder:text-sm placeholder:text-[#A0A0A0]"
          />
        </div>
        <div className="flex gap-9 text-sm text-[#545454]">
          <Link href={"/"}>Products</Link>
          <Link href={"/"}>Services</Link>
          <Link href={"/"}>Trainings</Link>
          <Link href={"/"}>Contact Us</Link>
        </div>
      </div>
      <div className="flex items-center gap-4 font-semibold">
        <div className="flex items-center gap-1">
          <MessageIcon />
          <span className="rounded-sm bg-[#F1F1F1] px-2 py-1">0</span>
        </div>
        <div className="flex items-center gap-1">
          <CartIcon />
          <span className="rounded-sm bg-[#F1F1F1] px-2 py-1">0</span>
        </div>
        <div className="relative h-10 w-10">
          <Image
            src={avatar}
            alt="avatar"
            fill
            className="rounded-full border-2 !border-[#8C0303]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
