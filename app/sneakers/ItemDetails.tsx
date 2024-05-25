import { Button } from "@/components/ui/button";
import StarIcon from "@/public/icons/StarIcon";
import shoes from "@/public/images/shoes-2.svg";

import Image from "next/image";
import Link from "next/link";

const ItemDetails = () => {
  return (
    <section className="mb-16">
      <div className="flex justify-between">
        <div className="flex gap-10">
          <Image src={shoes} alt="shoes" />
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-5">
              <div className="flex max-w-[32.5rem] flex-col gap-[10px]">
                <p className="text-xl font-medium">Nike Air Max 270 Series</p>
                <p className="text-justify text-sm text-[#929292]">
                  Original Grade 1 sneakers from the Nike-Jordan Brand.
                  Available in varying sizes 39 to 45. Available for both male
                  and female. All sneakers come in branded boxes.
                </p>
                <p className="text-2xl font-bold">₦2,500</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#0C0C0C]">Rating</p>
                  <StarIcon />
                </div>
                <div className="flex h-max items-center gap-4 rounded-[5px] border-[1.5px] border-[#C6C8C7] text-[#0C0C0C]">
                  <p className="rounded-[5px] bg-[#EFEFEF] px-3 py-[6.5px]">
                    -
                  </p>
                  <p>1</p>
                  <p className="rounded-[5px] bg-[#EFEFEF] px-3 py-[6.5px]">
                    +
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#D31A38]">6 Left in stock</p>
            </div>
            <div className="flex w-full gap-4 font-medium text-white">
              <Button className="bg-dual-gradient shadow-combined-shadow w-full">
                Add to Cart
              </Button>
              <Button className="shadow-combined-2 w-full bg-[#A8A8A8]">
                Message Business
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-[1section]">
          <p className="font-medium text-[#A8A8A8]">SOLD BY</p>
          <p className="font-bold text-[#8C0303]">Sarah&apos;s Closet Store</p>
          <ul className="ml-4 list-disc text-sm text-[#0C0C0C]">
            <li>80% Store rating</li>
            <li>95% order completion rate</li>
            <li>48 products</li>
            <li>All Products verified by UniHustle</li>
          </ul>
          <Link href={"/"} className="text-sm text-[#706DEA] underline">
            Go to Business Page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ItemDetails;
