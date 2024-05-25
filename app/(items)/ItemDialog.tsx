import ItemCard, { SmallItemCard } from "@/components/ItemCard";
import { Button } from "@/components/ui/button";
import shoe from "@/public/images/shoe.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import StarIcon from "@/public/icons/StarIcon";
import Link from "next/link";

export function ItemDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <ItemCard />
      </DialogTrigger>
      <DialogContent className="h-[30rem] max-w-[40rem] overflow-auto overflow-x-hidden 2xl:h-auto">
        <DialogHeader className="mb-10">
          <DialogTitle className="text-center font-bold text-[#D31A38]">
            Product Details
          </DialogTitle>
        </DialogHeader>
        <div className="mb-7 flex items-center gap-10">
          <div className="relative h-[14rem] w-[12.5rem] rounded-[10px] border-[3px] !border-[#F1F1F1]">
            <div className="height-[10.75rem] absolute left-[50%] top-[50%] -mt-7 w-[12.875rem] translate-x-[-50%] translate-y-[-40%] -rotate-[30deg]">
              <Image src={shoe} alt="shoe" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5">
              <div className="flex max-w-[19.6875rem] flex-col gap-[10px]">
                <p className="text-xl font-medium">Nike Air Max 270 Series</p>
                <p className="text-justify text-sm text-[#929292]">
                  Original Grade 1 sneakers from the Nike-Jordan Brand.
                  Available in varying sizes 39 to 45. Available for both male
                  and female
                </p>
                <p className="text-xl font-bold">₦2,500</p>
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
            </div>
            <Link
              href={"/"}
              className="text-right text-sm text-[#D31A38] underline"
            >
              Go to Business Page
            </Link>
          </div>
        </div>
        <div className="mb-11 flex w-full gap-4 font-medium text-white">
          <Button className="bg-dual-gradient shadow-combined-shadow w-full">
            Add to Cart
          </Button>
          <Button className="shadow-combined-2 w-full bg-[#A8A8A8]">
            Order Now
          </Button>
        </div>
        <div>
          <p className="mb-4 font-medium text-[#0C0C0C]">
            Other Products from this Business
          </p>
          <div className="mx-auto max-w-[37rem] overflow-auto">
            <div className="flex gap-6">
              <SmallItemCard />
              <SmallItemCard />
              <SmallItemCard />
              <SmallItemCard />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
