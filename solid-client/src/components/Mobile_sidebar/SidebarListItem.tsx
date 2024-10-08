
import { AiOutlineRight } from "solid-icons/ai";
import { JSX } from "solid-js";
interface PropsType {
  children?: JSX.Element;
  img: any;
  iconNone?: boolean;
  name: string;
  submenuClick?: () => void;
}
const SidebarListItem = ({
  children,
  img,
  iconNone,
  submenuClick,
  name,
}: PropsType) => {
  return (
    <>
      <li class="flex flex-wrap items-center justify-between group/li my-4 first-of-type:mt-0 gap-2 relative ">
        <div class="flex items-center  gap-4">
          <div class="w-8 h-8 ">
            <img src={img} alt="no Image" />
          </div>
          <a class=" cursor-pointer group-hover/li:text-sky-500 grow font-medium">
            {name}
          </a>
        </div>
        {!iconNone && (
          <AiOutlineRight class="cursor-pointer  " onClick={submenuClick} />
        )}
        {children}
      </li>
    </>
  );
};

export default SidebarListItem;
