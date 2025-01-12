import ListItem from "./ListItem";
import SubmenuListItem from "./SubmenuListItem";
import categories from "@/categories.json";
function BannerLeft() {
  function chunkArray(
    array: { label: string; value: string }[],
    chunkSize: number
  ) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  return (
    <div className="lg:basis-4/12 xl:basis-3/12 bg-gray-100 hidden lg:block  ">
      <ul className=" ml-[60px] py-5 pb-20 relative">
        {categories?.map((categoryItem) => (
          <ListItem
            key={categoryItem?.name.value}
            item={categoryItem?.name}
          >
            <div className="hidden group-hover:flex min-w-max  z-10 absolute left-full top-0 bg-gray-100 py-5 ">
              {chunkArray(categoryItem?.subCategories, 8)?.map(
                (chunk, rowIndex) => (
                  <ul key={rowIndex} >
                    {chunk?.map((subCategoryItem) => (
                      <SubmenuListItem subMenuItem={subCategoryItem} key={subCategoryItem?.label} />))}
                  </ul>
                )
              )}
            </div>
          </ListItem>
        ))}
      </ul>
    </div>
  );
}

export default BannerLeft;
