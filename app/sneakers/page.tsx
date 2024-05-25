import ItemDetails from "./ItemDetails";
import MoreItems from "./MoreItems";
import { BreadcrumbWithCustomSeparator } from "./breadcrumbs";

const Sneakers = () => {
  return (
    <main className="p-6 md:px-16 md:py-10">
      <div className="mb-10">
        <BreadcrumbWithCustomSeparator />
      </div>
      <ItemDetails />
      <MoreItems />
    </main>
  );
};

export default Sneakers;
