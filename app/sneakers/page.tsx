import ItemDetails from "./ItemDetails";
import MoreItems from "./MoreItems";
import { BreadcrumbWithCustomSeparator } from "./breadcrumbs";

const Sneakers = () => {
  return (
    <main className="px-16 py-10">
      <div className="mb-10">
        <BreadcrumbWithCustomSeparator />
      </div>
      <ItemDetails />
      <MoreItems/>
    </main>
  );
};

export default Sneakers;
