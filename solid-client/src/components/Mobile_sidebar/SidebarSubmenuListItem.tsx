


function SidebarSubmenuListItem({ children }: { children: string }) {
 
  return (
    <li class="py-2 ">
      <a href={`/product/${children}`}   class='active:text-mainBlueColor'  >{children}</a>
    </li>
  );
}

export default SidebarSubmenuListItem;
