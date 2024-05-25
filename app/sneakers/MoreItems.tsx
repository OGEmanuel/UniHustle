import { SmallItemCard } from "@/components/ItemCard";

const MoreItems = () => {
  return (
    <section>
      <h2 className="mb-6 border-b-2 !border-[#DDDDDD] pb-4 text-sm font-medium md:text-base">
        More from Sarah&apos;s Closet Store
      </h2>
      <div className="flex items-center gap-6 overflow-auto">
        <SmallItemCard />
        <SmallItemCard />
        <SmallItemCard />
        <SmallItemCard />
        <SmallItemCard />
        <SmallItemCard />
      </div>
    </section>
  );
};

export default MoreItems;
