import { Button } from "@/components/ui/button";
import StarIcon from "@/public/icons/StarIcon";
import shoes from "@/public/images/shoes-2.svg";

import Image from "next/image";
import Link from "next/link";

const ItemDetails = () => {
  return (
    <section className="mb-10 md:mb-16">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-0">
        <div className="flex w-full flex-col gap-[14px] md:flex-row md:gap-10">
          <Image src={shoes} alt="shoes" className="w-full md:w-auto" />
          <div className="flex h-full flex-col gap-6 md:justify-between md:gap-0">
            <div className="flex flex-col gap-5">
              <div className="flex max-w-[32.5rem] flex-col gap-[10px]">
                <div className="flex items-center justify-between">
                  <p className="text-base font-medium md:text-xl">
                    Nike Air Max 270 Series
                  </p>
                  {/* The code below this comment is for mobile view only */}
                  <Link
                    href={"/"}
                    className="text-sm text-[#706DEA] underline md:hidden"
                  >
                    Go to Business Page
                  </Link>
                  {/* The code above this comment is for mobile view only */}
                </div>
                <p className="text-justify text-sm text-[#929292]">
                  Original Grade 1 sneakers from the Nike-Jordan Brand.
                  Available in varying sizes 39 to 45. Available for both male
                  and female. All sneakers come in branded boxes.
                </p>
                <p className="text-xl font-bold md:text-2xl">₦2,500</p>
              </div>
              <div>
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
                {/* The code below this comment is for mobile view only */}
                <p className="text-right text-sm text-[#D31A38] md:hidden">
                  6 Left in stock
                </p>
                {/* The code above this comment is for mobile view only */}
              </div>
              <p className="hidden text-right text-sm text-[#D31A38] md:block">
                6 Left in stock
              </p>
            </div>
            <div className="flex w-full gap-4 font-medium text-white">
              <Button className="w-full bg-dual-gradient shadow-combined-shadow">
                Add to Cart
              </Button>
              <Button className="w-full bg-[#A8A8A8] shadow-combined-2">
                Message Business
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden space-y-[10px] md:block">
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
