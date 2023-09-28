import { ImLocation } from "react-icons/im";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

// logo image import 
import android from '@images/appStoreLogo/android.png'
import appGallery from '@images/appStoreLogo/app-gallery.png'
import appStore from '@images/appStoreLogo/apple-store.png'

// payment image import
import payment from '@images/payment/payment.png'

import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <>
      <footer className="bg-footerColor py-8 ">
        <div className="my_container mx-auto">
          <div className=" lg:gap-[22px]  flex flex-wrap  ">
            <div className=" text-slate-50 basis-full md:basis-1/3 lg:basis-3/12 ">
              <div>
                <h2 className="uppercase  font-semibold">pickaboo</h2>
              </div>
              <div className="mt-2">
                <h3 className="font-extralight  text-sm ">
                  Silver Water Technologies Bangladesh Limited
                </h3>
              </div>
              <div className="mt-2 flex items-center gap-1 ">
                <ImLocation className="text-orange-500 " />
                <p className="font-extralight text-sm ">
                  House 10, Road 12, Block F, Niketan, Gulshan 1, Dhaka - 1212,
                  Bangladesh
                </p>
              </div>
              <div className="mt-2 flex items-center gap-1 ">
                <IoMdCall className="text-orange-500" />
                <p className="font-extralight  text-sm ">+8809666745745</p>
              </div>
              <div className=" mt-2 flex items-center gap-1 ">
                <MdEmail className="text-orange-500" />
                <p>support@pickaboo.com</p>
              </div>
            </div>
            <div className="text-slate-50 basis-1/2 mt-8 md:basis-1/3 lg:basis-2/12  md:mt-0 ">
              <div>
                <h2 className="uppercase  font-semibold">About</h2>
              </div>
              <div>
                <FooterLink >
                  About Us
                </FooterLink>
              </div>
              <div>
                <FooterLink >
                  Privacy Policy
                </FooterLink>
              </div>
              <div>
                <FooterLink >
                  Cookie Policy
                </FooterLink>
              </div>
              <div>
                <FooterLink >
                  Terms & Conditions
                </FooterLink>
              </div>
              <div>
                <FooterLink >
                  Why Shop With Us
                </FooterLink>
              </div>
              <div>
                <FooterLink >
                  Pickaboo Store
                </FooterLink>
              </div>
              <div>
                <FooterLink >
                  Pickaboo Blog
                </FooterLink>
              </div>
            </div>
            <div className="text-slate-50 hover:text-slate-100 basis-1/2 mt-8 md:basis-1/3 lg:basis-2/12  md:mt-0 ">
              <div>
                <h2 className="uppercase font-semibold">Help</h2>
              </div>
              <div>
                <FooterLink >
                  Payment
                </FooterLink>
              </div>
              <div>
                <FooterLink >
                  Shipping
                </FooterLink>
              </div>
              <div>
                <FooterLink >
                  Return And Replacement
                </FooterLink>
              </div>
              <div>
                <FooterLink >
                  Chat With Us
                </FooterLink>
              </div>
              <div>
                <FooterLink >
                  Pickaboo Support
                </FooterLink>
              </div>
            </div>
            <div className="text-slate-50 hover:text-slate-100 basis-1/2 mt-8 md:basis-1/3 lg:basis-2/12 lg:mt-0">
              <div>
                <h2 className="uppercase  font-semibold">Social</h2>
              </div>
              <div>
                <FooterLink >
                  Facebook
                </FooterLink>
              </div>
              <div>
                <FooterLink  >
                  Twitter
                </FooterLink>
              </div>
              <div>
                <FooterLink  >
                  FooterLinkedin
                </FooterLink>
              </div>
              <div>
                <FooterLink  >
                  Instagram
                </FooterLink>
              </div>
              <div>
                <FooterLink  >
                  Youtube
                </FooterLink>
              </div>
            </div>
            <div className="text-slate-50 hover:text-slate-100 basis-1/2 mt-8 md:basis-1/3 lg:basis-2/12 lg:mt-0">
              <div>
                <h2 className="uppercase  font-semibold">Download</h2>
              </div>
              <div>
                <div className="mb-2" >
                  <FooterLink >
                   <img src={android} alt="no image" />
                  </FooterLink>
                </div>
              </div>
              <div className="mb-2" >
                <FooterLink >
                   <img src={appGallery} alt="no image" />
                </FooterLink>
              </div>
              <div className="mb-2" >
                <FooterLink >
                  <img src={appStore} alt="no image" />
                </FooterLink>
              </div>
            </div>
          </div>
        </div>
       
        
          <div className="w-full h-px bg-slate-500 my-5 mx-0 ">    
        </div>
        <div className="my_container mx-auto">
          <div className="flex items-center justify-between flex-wrap">
          <div className="text-slate-100 text-sm " >
          © 2023 pickaboo.com | All Rights Reserved.
          </div>
          <div className="flex items-center gap-2 my-2 md:my-0 ">
           <p className="text-slate-100 text-sm hidden md:block " >Payment Method</p><img src={payment} alt="no image" />
          </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
