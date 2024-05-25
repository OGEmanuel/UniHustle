import PlusIcon from "@/public/icons/PlusIcon";
import StarIcon from "@/public/icons/StarIcon";
import shoe from "@/public/images/shoe.png";
import Image from "next/image";

const ItemCard = () => {
  return (
    <div className="flex w-max flex-col gap-8 rounded-[10px] bg-[#F6F6F6] p-[18px]">
      <div className="mx-auto w-full">
        <div className="mx-auto -mt-7 h-[7.5rem] w-[12.5rem]">
          <div className="relative mx-auto h-full w-[9rem]">
            <Image src={shoe} alt="shoe" />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex max-w-[12.5rem] flex-col gap-2">
          <p className="text-sm text-[#8C0303]">Sarah Closet Stores</p>
          <p className="font-bold text-[#0C0C0C]">
            Nike Air Max <span className="block">270 Series</span>
          </p>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-[#929292]">
            The new Nike air max 270 series
          </p>
          <StarIcon />
          <p className="font-bold text-[#0C0C0C]">$400.00</p>
        </div>
        <PlusIcon />
      </div>
    </div>
  );
};

export default ItemCard;

export const SmallItemCard = () => {
  return (
    <div className="flex w-max flex-col gap-2 rounded-[10px] bg-[#F6F6F6] p-4">
      <div className="mx-auto w-full">
        <div className="mx-auto -mt-7 h-[5.5rem] w-[9rem]">
          <div className="relative mx-auto h-full w-[6.5rem]">
            <Image src={shoe} alt="shoe" />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex max-w-[9rem] flex-col gap-2 text-sm">
          <p className="text-[#8C0303]">Sarah Closet Stores</p>
          <p className="font-bold text-[#0C0C0C]">
            Nike Air Max <span className="block">270 Series</span>
          </p>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[#929292]">
            The new Nike air max 270 series
          </p>
          <StarIcon />
          <p className="text-base font-bold text-[#0C0C0C]">$400.00</p>
        </div>
        <PlusIcon />
      </div>
    </div>
  );
};
