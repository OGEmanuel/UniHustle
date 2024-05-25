import Card from "@/components/card";
import LogoBigIcon from "@/public/icons/LogoBigIcon";
import VerifiedBadgeIcon from "@/public/icons/VerifiedBadgeIcon";

const VendorDetails = () => {
  return (
    <Card className="py-10">
      <div className="flex items-start gap-[8.875rem]">
        <div className="flex items-center gap-7">
          <div className="relative w-max">
            <LogoBigIcon />
            <span className="absolute -right-4 -top-4">
              <VerifiedBadgeIcon />
            </span>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-niramitFont text-xl font-bold text-[#0C0C0C]">
                Sarah&apos;s Closet Store
              </h2>
              <p className="text-[#8C0303]">Business Account</p>
            </div>
            <div>
              <p className="text-[#0C0C0C]">Orders Completed</p>
              <p className="text-[#A8A8A8]">95% orders completed</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="">
            <p className="text-[#0C0C0C]">Higher Institution</p>
            <p className="text-[#A8A8A8]">University of Lagos</p>
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
