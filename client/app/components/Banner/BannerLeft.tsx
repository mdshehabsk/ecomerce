import React from 'react'
import ListItem from "./ListItem";
import SubmenuListItem from "./SubmenuListItem";
import { AiOutlineRight } from 'react-icons/ai';
function BannerLeft() {
  return (
    <div className="basis-1/4 bg-gray-100 hidden lg:block ">
            <ul className=" py-5 pb-20 relative">
              <ListItem name="SmartPhones">
                <div className="hidden group-hover:flex min-w-max  z-10 absolute left-full top-0 bg-gray-100 py-5 ">
                  <ul>
                    <SubmenuListItem>Samsung</SubmenuListItem>
                    <SubmenuListItem>Infinis</SubmenuListItem>
                    <SubmenuListItem>Oppo</SubmenuListItem>
                    <SubmenuListItem>Oneplus</SubmenuListItem>
                    <SubmenuListItem>Techo</SubmenuListItem>
                    <SubmenuListItem>Nokia</SubmenuListItem>
                    <SubmenuListItem>Motorola</SubmenuListItem>
                    <SubmenuListItem>Nothing</SubmenuListItem>
                  </ul>
                  <ul>
                    <SubmenuListItem>Real</SubmenuListItem>
                    <SubmenuListItem>Xiao</SubmenuListItem>
                    <SubmenuListItem>Vivo </SubmenuListItem>
                    <SubmenuListItem>Ipho</SubmenuListItem>
                  </ul>
                </div>
              </ListItem>
              <ListItem name=" Electronics & appliances">
                <div className="hidden group-hover:flex min-w-max  z-10 absolute left-full top-0 bg-gray-100 py-5   ">
                  <ul>
                    <SubmenuListItem>Air Conditioner</SubmenuListItem>
                    <SubmenuListItem>Television</SubmenuListItem>
                    <SubmenuListItem>Refrigerator & freezer</SubmenuListItem>
                    <SubmenuListItem>Room Heater</SubmenuListItem>
                    <SubmenuListItem>Air purifier</SubmenuListItem>
                    <SubmenuListItem>Iron</SubmenuListItem>
                    <SubmenuListItem>Geyser</SubmenuListItem>
                    <SubmenuListItem>Washing Machine</SubmenuListItem>
                  </ul>
                  <ul>
                    <SubmenuListItem>
                      Home Theater & Sound System
                    </SubmenuListItem>
                    <SubmenuListItem>rinder & Blender</SubmenuListItem>
                    <SubmenuListItem>Water Purifiers & Filter</SubmenuListItem>
                    <SubmenuListItem>Oven</SubmenuListItem>
                    <SubmenuListItem>Electric Kettle</SubmenuListItem>
                    <SubmenuListItem>Rice Cooker</SubmenuListItem>
                    <SubmenuListItem>Air Fryer</SubmenuListItem>
                    <SubmenuListItem>Induction Cooker</SubmenuListItem>
                  </ul>
                  <ul>
                    <SubmenuListItem>Gas Burner</SubmenuListItem>
                    <SubmenuListItem>Kitchen Hood</SubmenuListItem>
                    <SubmenuListItem>Fans</SubmenuListItem>
                    <SubmenuListItem>Tools & Hardware</SubmenuListItem>
                    <SubmenuListItem>IPS</SubmenuListItem>
                    <SubmenuListItem>Others</SubmenuListItem>
                    <SubmenuListItem>Excercise & Fitness</SubmenuListItem>
                  </ul>
                </div>
              </ListItem>
              <ListItem name="Mobile Accessories">
                <div className="hidden group-hover:flex min-w-max  z-10 absolute left-full top-0 bg-gray-100 py-5   ">
                  <ul>
                    <SubmenuListItem>Smart Watch</SubmenuListItem>
                    <SubmenuListItem>Smart Watch Accessories</SubmenuListItem>
                    <SubmenuListItem>True Wireless Airbuds</SubmenuListItem>
                    <SubmenuListItem>Bluetooth Headphone</SubmenuListItem>
                    <SubmenuListItem>Wire Headphone</SubmenuListItem>
                    <SubmenuListItem>Speaker</SubmenuListItem>
                    <SubmenuListItem>Power Band</SubmenuListItem>
                    <SubmenuListItem>Smart Band</SubmenuListItem>
                  </ul>
                  <ul>
                    <SubmenuListItem>Smart Gadget</SubmenuListItem>
                    <SubmenuListItem>Actions Cameras</SubmenuListItem>
                    <SubmenuListItem>Gimbal</SubmenuListItem>
                    <SubmenuListItem>Charger & Adapter</SubmenuListItem>
                    <SubmenuListItem>Data Cable</SubmenuListItem>
                    <SubmenuListItem>Mamory Card</SubmenuListItem>
                    <SubmenuListItem>Cause & Cover</SubmenuListItem>
                    <SubmenuListItem>Screen Protector</SubmenuListItem>
                  </ul>
                  <ul>
                    <SubmenuListItem>Selfi Sticks</SubmenuListItem>
                    <SubmenuListItem>Others</SubmenuListItem>
                  </ul>
                </div>
              </ListItem>
              {/* computers */}
              <ListItem name="Computer">
                <div className="hidden group-hover:flex min-w-max min-h-[90%]  z-10 absolute left-full top-0 bg-gray-100 py-5">
                  <ul>
                    <SubmenuListItem>Laptop & Notebook</SubmenuListItem>
                    <SubmenuListItem>Tablet</SubmenuListItem>
                    <SubmenuListItem>Mini Pc</SubmenuListItem>
                  </ul>
                </div>
              </ListItem>
              <ListItem name=" Computer Accessories">
                <div className="hidden group-hover:flex min-w-max  z-10 absolute left-full top-0 bg-gray-100 py-5   ">
                  <ul>
                    <SubmenuListItem>Muse & Keyboard</SubmenuListItem>
                    <SubmenuListItem>IP Cameras</SubmenuListItem>
                    <SubmenuListItem>Pendrives</SubmenuListItem>
                    <SubmenuListItem>HDD & SSD</SubmenuListItem>
                    <SubmenuListItem>Monitor</SubmenuListItem>
                    <SubmenuListItem>Printer</SubmenuListItem>
                    <SubmenuListItem>Headset</SubmenuListItem>
                    <SubmenuListItem>Webcam</SubmenuListItem>
                  </ul>
                  <ul>
                    <SubmenuListItem>UPS</SubmenuListItem>
                    <SubmenuListItem>Software & Antivirus</SubmenuListItem>
                    <SubmenuListItem>Converter & Cable</SubmenuListItem>
                    <SubmenuListItem>Sound System</SubmenuListItem>
                    <SubmenuListItem>Router & Networking</SubmenuListItem>
                    <SubmenuListItem>Projectors</SubmenuListItem>
                    <SubmenuListItem>Gaming Gears</SubmenuListItem>
                    <SubmenuListItem>Others</SubmenuListItem>
                  </ul>
                </div>
              </ListItem>
              <ListItem name="LifeStyle">
                <div className="hidden group-hover:flex min-w-max  z-10 absolute left-full top-0 bg-gray-100 py-5   ">
                  <ul>
                    <SubmenuListItem>Mens Watches</SubmenuListItem>
                    <SubmenuListItem>Womens Watches</SubmenuListItem>
                    <SubmenuListItem>Shaver & Trimmer</SubmenuListItem>
                    <SubmenuListItem>Hair Straightnairs</SubmenuListItem>
                    <SubmenuListItem>Hair Dryers</SubmenuListItem>
                    <SubmenuListItem>Mens Fragrences</SubmenuListItem>
                    <SubmenuListItem>Womens Fragrences</SubmenuListItem>
                    <SubmenuListItem>Scented Candles</SubmenuListItem>
                  </ul>
                </div>
              </ListItem>
            </ul>
          </div>
  )
}

export default BannerLeft