
import SidebarListItem from "./SidebarListItem";
import SidebarSubmenu from "./SidebarSubmenu";
import SidebarSubmenuListItem from "./SidebarSubmenuListItem";
// Image import
import mobile from "~/images/nav_icon_img/mobile.jpg"
import electronics from '~/images/nav_icon_img/electronics.jpg'
import mobile_accessories from '~/images/nav_icon_img/mobile_accessories.jpg'
import computer from '~/images/nav_icon_img/computer.jpg'
import lifestyle from '~/images/nav_icon_img/lifestyle.jpg'
import call from '~/images/nav_icon_img/call.png'
//impor icon
import { ImCross } from 'solid-icons/im'



const  Sidebar = () => {
  const initialState = {
    smartphone: false,
    electronics: false,
    mobile_accessories: false,
    computer: false,
    computer_accessories: false,
    lifestyle: false,
  };
  const reducerFn = (state: typeof initialState, action: { type: keyof typeof initialState }) => {
    switch (action.type) {
      case "smartphone":
        return { ...initialState, [action.type]: !state[action.type] };
      case "electronics":
        return { ...initialState, [action.type]: !state[action.type] };
      case 'mobile_accessories' :
        return { ...initialState, [action.type]: !state[action.type] };
      case 'computer' :
        return { ...initialState, [action.type]: !state[action.type] };
      case 'computer_accessories':
        return { ...initialState, [action.type]: !state[action.type] };
      case 'lifestyle':
        return { ...initialState, [action.type]: !state[action.type] };
      default:
        return state;
    }
  };
  const sidebarShow = false;
  return (
    <div
      class={`h-full w-screen transform transition duration-500 bg-black/30  ${
        sidebarShow ? "translate-x-0" : "-translate-x-[2000px]"
      }  fixed z-[100] left-0 top-0 lg:hidden   `}
    >
      <div
        class="w-full h-full "
        onClick={() => {}}
      ></div>
      <div class=" max-w-[330px] md:max-w-[400px] w-full bg-white h-full absolute z-[100] left-0 top-0 bottom-0 box p-5 overflow-y-scroll">
        <h2 class="font-bold">Shop for</h2>
        <ImCross
          class="ml-auto -mt-6 text-3xl cursor-pointer"
          onClick={() => {}}
        />
        <ul class=" py-4 max-w-full ">
          <SidebarListItem
            img={mobile}
            name="Smartphone"
            submenuClick={() => {}}
          >
            <SidebarSubmenu isOpen={true}>
              <SidebarSubmenuListItem>Samsung</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Infinis</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Oppo</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Oneplus</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Techo</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Nokia</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Motorola</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Nothing</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Realme</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Xiaomi</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Vivo </SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Iphone</SidebarSubmenuListItem>
            </SidebarSubmenu>
          </SidebarListItem>
          <SidebarListItem
            img={electronics}
            name="Electronics & Applicans"
            submenuClick={() => {}}
          >
            <SidebarSubmenu isOpen={false}>
              <SidebarSubmenuListItem>Air Conditioner</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Television</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>
                Refrigerator & freezer
              </SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Room Heater</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Air purifier</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Iron</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Geyser</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Washing Machine</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>
                Home Theater & Sound System
              </SidebarSubmenuListItem>
              <SidebarSubmenuListItem>rinder & Blender</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>
                Water Purifiers & Filter
              </SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Oven</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Electric Kettle</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Rice Cooker</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Air Fryer</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Induction Cooker</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Gas Burner</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Kitchen Hood</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Fans</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Tools & Hardware</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>IPS</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Others</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>
                Excercise & Fitness
              </SidebarSubmenuListItem>
            </SidebarSubmenu>
          </SidebarListItem>
          <SidebarListItem
            img={mobile_accessories}
            name="Mobile Accessories"
            submenuClick={() => {}}
          >
            <SidebarSubmenu isOpen={false}  >
              <SidebarSubmenuListItem>Smart Watch</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Smart Watch Accessories</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>True Wireless Airbuds</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Bluetooth Headphone</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Wire Headphone</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Speaker</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Power Band</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Smart Band</SidebarSubmenuListItem>

              <SidebarSubmenuListItem>Smart Gadget</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Actions Cameras</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Gimbal</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Charger & Adapter</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Data Cable</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Mamory Card</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Cause & Cover</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Screen Protector</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Selfi Sticks</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Others</SidebarSubmenuListItem>
            </SidebarSubmenu>
          </SidebarListItem>
          <SidebarListItem img={computer} name="Computer" submenuClick={() =>{}} >
            <SidebarSubmenu isOpen= {false} >
            <SidebarSubmenuListItem>Laptop & Notebook</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Tablet</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Mini Pc</SidebarSubmenuListItem>
            </SidebarSubmenu>
          </SidebarListItem>
          <SidebarListItem
            img={computer}
            name="Computer Accessories"
            submenuClick={()=> {}}
          >
            <SidebarSubmenu isOpen={false} >
              <SidebarSubmenuListItem>Muse & Keyboard</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>IP Cameras</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Pendrives</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>HDD & SSD</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Monitor</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Printer</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Headset</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Webcam</SidebarSubmenuListItem>

              <SidebarSubmenuListItem>UPS</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Software & Antivirus</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Converter & Cable</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Sound System</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Router & Networking</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Projectors</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Gaming Gears</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Others</SidebarSubmenuListItem>
            </SidebarSubmenu>
          </SidebarListItem>
          <SidebarListItem img={lifestyle} name="LifeStyle" submenuClick={()=>{}} >
            <SidebarSubmenu isOpen={true} >
            <SidebarSubmenuListItem>Mens Watches</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Womens Watches</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Shaver & Trimmer</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Hair Straightnairs</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Hair Dryers</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Mens Fragrences</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Womens Fragrences</SidebarSubmenuListItem>
              <SidebarSubmenuListItem>Scented Candles</SidebarSubmenuListItem>
            </SidebarSubmenu>
          </SidebarListItem>
        </ul>
        <div class="border-y-2 border-gray-100">
          <h2 class="font-bold mt-2">Other</h2>
          <ul class="px-4 py-2">
            <SidebarListItem img={call} iconNone={true} name=" Contact Us" />
          </ul>
        </div>
        <div class="flex ">
          <button class="bg-red-600 font-semibold text-white block w-full py-4 rounded-xl">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
