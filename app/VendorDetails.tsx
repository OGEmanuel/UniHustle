import Card from "@/components/card";
import LogoBigIcon from "@/public/icons/LogoBigIcon";
import LogoBigMobileIcon from "@/public/icons/LogoBigMobileIcon";
import VerifiedBadgeIcon from "@/public/icons/VerifiedBadgeIcon";
import VerifiedBadgeMobile from "@/public/icons/VerifiedBadgeMobileIcon";

const VendorDetails = () => {
  return (
    <Card className="px-4 py-4 md:px-8 md:py-10">
      <div className="flex flex-col items-start gap-[2.125rem] md:flex-row md:gap-[8.875rem]">
        <div className="flex items-center gap-[9px] md:gap-7">
          <div className="relative w-max">
            <div className="hidden md:block">
              <LogoBigIcon />
            </div>
            <div className="md:hidden">
              <LogoBigMobileIcon />
            </div>
            <span className="absolute -right-4 -top-4 hidden md:block">
              <VerifiedBadgeIcon />
            </span>
            <span className="absolute -right-4 -top-4 md:hidden">
              <VerifiedBadgeMobile />
            </span>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-niramitFont text-sm font-bold text-[#0C0C0C] md:text-xl">
                Sarah&apos;s Closet Store
              </h2>
              <p className="text-[10px] text-[#8C0303] md:text-base">
                Business Account
              </p>
            </div>
            <div className="hidden md:block">
              <p className="text-[#0C0C0C]">Orders Completed</p>
              <p className="text-[#A8A8A8]">95% orders completed</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-sm md:text-base">
          <div className="flex justify-between">
            <div className="">
              <p className="text-[#0C0C0C]">Higher Institution</p>
              <p className="text-[#A8A8A8]">University of Lagos</p>
            </div>
            {/* The code below this comment is for mobile only */}
            <div className="md:hidden">
              <p className="text-[#0C0C0C]">Orders Completed</p>
              <p className="text-[#A8A8A8]">95% orders completed</p>
            </div>
            {/* The code above this comment is for mobile only */}
          </div>
          <div className="max-w-[25.25rem]">
            <p className="text-[#0C0C0C]">About Business</p>
            <p className="text-[#A8A8A8]">
              I sell all types of clothes ranging from tees to cargos and others
              at very affordable prices with high quality.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VendorDetails;
