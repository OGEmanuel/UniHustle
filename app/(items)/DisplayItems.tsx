import Card from "@/components/card";
import { ItemDialog } from "./ItemDialog";

const DisplayItems = () => {
  return (
    <Card className="p-6 md:p-8">
      <div className="grid w-full grid-cols-[repeat(2,_minmax(auto,_17rem))] gap-5 overflow-auto md:grid-cols-[repeat(auto-fit,_minmax(auto,_17rem))] md:justify-center md:gap-8">
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
