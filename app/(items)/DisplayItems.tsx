import ItemCard from "@/components/ItemCard";
import Card from "@/components/card";
import { ItemDialog } from "./ItemDialog";

const DisplayItems = () => {
  return (
    <Card className="py-8">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(auto,_17rem))] justify-center gap-8">
        <ItemDialog />
        <ItemDialog />
        <ItemDialog />
        <ItemDialog />
        <ItemDialog />
        <ItemDialog />
        <ItemDialog />
        <ItemDialog />
      </div>
    </Card>
  );
};

export default DisplayItems;
